import { Redis } from "@upstash/redis";
import type { Report } from "./types";

/**
 * Job store, report cache and rate limiter.
 *
 * Upstash when configured, an in-process Map when it isn't. The fallback
 * exists so the tool runs locally without an account — it is explicitly not
 * production-safe, because serverless instances don't share memory, so a job
 * created on one instance is invisible to the poll that lands on another.
 * `isPersistent()` reports which mode is active so the API can say so.
 */

const CACHE_TTL_SECONDS = 6 * 60 * 60; // 6 hours
const JOB_TTL_SECONDS = 60 * 60; // an hour is plenty for a poll cycle
const RATE_HOUR = 10;
const RATE_DAY = 30;

let redis: Redis | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export const isPersistent = () => redis !== null;

/**
 * Fallback store. Values carry their own expiry so it can't grow forever.
 *
 * Hung off globalThis rather than being a plain module-level const, because
 * Next bundles route handlers and pages into separate server chunks and each
 * chunk gets its own instance of this module. A module-level Map therefore
 * isn't shared between `/api/feed-check` and the report page that reads what
 * it wrote — which made shareable permalinks fail every single time without
 * Upstash, not merely across serverless instances. Caught by opening a
 * permalink for a report the API confirmed it still had cached.
 *
 * This makes the fallback genuinely process-wide. It still cannot span
 * separate serverless instances — only a real shared store does that, which
 * is what `isPersistent()` reports.
 */
const globalStore = globalThis as typeof globalThis & {
  __feedCheckerMemory?: Map<string, { value: unknown; expires: number }>;
};

const memory = (globalStore.__feedCheckerMemory ??= new Map<
  string,
  { value: unknown; expires: number }
>());

function memGet<T>(key: string): T | null {
  const hit = memory.get(key);
  if (!hit) return null;
  if (hit.expires < Date.now()) {
    memory.delete(key);
    return null;
  }
  return hit.value as T;
}

function memSet(key: string, value: unknown, ttlSeconds: number) {
  memory.set(key, { value, expires: Date.now() + ttlSeconds * 1000 });
  // Opportunistic sweep so a long-lived dev server doesn't leak.
  if (memory.size > 500) {
    const now = Date.now();
    for (const [k, v] of memory) if (v.expires < now) memory.delete(k);
  }
}

async function get<T>(key: string): Promise<T | null> {
  if (redis) return (await redis.get<T>(key)) ?? null;
  return memGet<T>(key);
}

async function set(key: string, value: unknown, ttlSeconds: number) {
  if (redis) {
    await redis.set(key, value, { ex: ttlSeconds });
    return;
  }
  memSet(key, value, ttlSeconds);
}

/**
 * Normalise so the same feed shared three different ways hits one cache
 * entry. Tracking params are stripped; everything else in the query is kept,
 * because plenty of feeds genuinely key on a query parameter.
 */
export function normaliseFeedUrl(raw: string): string {
  try {
    const u = new URL(raw.trim());
    u.hash = "";
    u.hostname = u.hostname.toLowerCase();
    for (const p of [...u.searchParams.keys()]) {
      if (/^(utm_|fbclid|gclid|mc_cid|mc_eid|ref)/i.test(p)) u.searchParams.delete(p);
    }
    if (u.pathname !== "/" && u.pathname.endsWith("/")) {
      u.pathname = u.pathname.replace(/\/+$/, "");
    }
    return u.toString();
  } catch {
    return raw.trim();
  }
}

/** Short, URL-safe id derived from the feed URL, stable across re-runs. */
export function reportSlug(normalisedUrl: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < normalisedUrl.length; i++) {
    const c = normalisedUrl.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 + c, 2246822519) >>> 0;
  }
  return (h1.toString(36) + h2.toString(36)).slice(0, 12);
}

// ─────────────────────────── jobs ───────────────────────────

export type JobStage =
  | "queued"
  | "fetching"
  | "parsing"
  | "artwork"
  | "audio"
  | "scoring"
  | "done"
  | "error";

export interface Job {
  id: string;
  feedUrl: string;
  stage: JobStage;
  message?: string;
  report?: Report;
  error?: string;
  createdAt: number;
}

const jobKey = (id: string) => `fc:job:${id}`;
const reportKey = (slug: string) => `fc:report:${slug}`;

export async function createJob(id: string, feedUrl: string): Promise<Job> {
  const job: Job = { id, feedUrl, stage: "queued", createdAt: Date.now() };
  await set(jobKey(id), job, JOB_TTL_SECONDS);
  return job;
}

export async function updateJob(id: string, patch: Partial<Job>): Promise<void> {
  const existing = await get<Job>(jobKey(id));
  if (!existing) return;
  await set(jobKey(id), { ...existing, ...patch }, JOB_TTL_SECONDS);
}

export const getJob = (id: string) => get<Job>(jobKey(id));

// ─────────────────────────── report cache ───────────────────────────

export const getCachedReport = (slug: string) => get<Report>(reportKey(slug));

export const cacheReport = (slug: string, report: Report) =>
  set(reportKey(slug), report, CACHE_TTL_SECONDS);

// ─────────────────────────── rate limiting ───────────────────────────

export interface RateVerdict {
  allowed: boolean;
  /** Friendly copy — never a bare 429. */
  message?: string;
  retryAfterSeconds?: number;
}

/**
 * Counts a check against an IP. Cache hits never call this, so re-reading a
 * report you already ran is free.
 */
export async function consumeRateLimit(ip: string): Promise<RateVerdict> {
  const hourKey = `fc:rl:h:${ip}:${Math.floor(Date.now() / 3_600_000)}`;
  const dayKey = `fc:rl:d:${ip}:${Math.floor(Date.now() / 86_400_000)}`;

  let hourCount: number;
  let dayCount: number;

  if (redis) {
    const [h, d] = await Promise.all([redis.incr(hourKey), redis.incr(dayKey)]);
    hourCount = h;
    dayCount = d;
    // Only set expiry on first use, so the window doesn't slide forward.
    if (h === 1) await redis.expire(hourKey, 3600);
    if (d === 1) await redis.expire(dayKey, 86_400);
  } else {
    hourCount = (memGet<number>(hourKey) ?? 0) + 1;
    dayCount = (memGet<number>(dayKey) ?? 0) + 1;
    memSet(hourKey, hourCount, 3600);
    memSet(dayKey, dayCount, 86_400);
  }

  if (hourCount > RATE_HOUR) {
    return {
      allowed: false,
      message: `You've run ${RATE_HOUR} checks this hour, which is the limit. Try again shortly — re-opening a report you've already run doesn't count.`,
      retryAfterSeconds: 3600 - (Math.floor(Date.now() / 1000) % 3600),
    };
  }
  if (dayCount > RATE_DAY) {
    return {
      allowed: false,
      message: `You've run ${RATE_DAY} checks today, which is the daily limit. It resets at midnight UTC.`,
      retryAfterSeconds: 86_400 - (Math.floor(Date.now() / 1000) % 86_400),
    };
  }
  return { allowed: true };
}
