import pLimit from "p-limit";
import sharp from "sharp";
import { checks } from "./checks";
import { attr, first, parseFeed, text } from "./parse";
import { SafeFetchError, safeFetch } from "./safe-fetch";
import {
  CATEGORIES,
  type ArtworkProbe,
  type CategoryId,
  type CategoryScore,
  type CheckContext,
  type CheckResult,
  type EnclosureProbe,
  type Report,
  type Severity,
} from "./types";

/** Never more than this many outbound requests in flight at once. */
const CONCURRENCY = 5;
const RECENT_SAMPLE = 10;
const RANDOM_SAMPLE = 5;
const ENCLOSURE_TIMEOUT_MS = 8_000;
const ARTWORK_MAX_BYTES = 5 * 1024 * 1024;

const ANALYTICS_HOSTS = [
  "podtrac.com","chartable.com","chrt.fm","blubrry.com","mgln.ai","megaphone.fm",
  "pdst.fm","claritaspod.com","podscribe.com",
];

export type Progress = (stage: string, detail?: string) => void;

/** Deterministic sample so a re-run of the same feed checks the same episodes. */
function pickSample(total: number): number[] {
  const recent = Array.from({ length: Math.min(RECENT_SAMPLE, total) }, (_, i) => i);
  if (total <= RECENT_SAMPLE) return recent;
  const remaining = total - RECENT_SAMPLE;
  const step = Math.max(1, Math.floor(remaining / RANDOM_SAMPLE));
  const spread: number[] = [];
  for (let i = 0; i < RANDOM_SAMPLE && RECENT_SAMPLE + i * step < total; i++) {
    spread.push(RECENT_SAMPLE + i * step);
  }
  return [...recent, ...spread];
}

async function probeArtwork(url: string): Promise<ArtworkProbe> {
  try {
    const res = await safeFetch(url, {
      maxBytes: ARTWORK_MAX_BYTES,
      timeoutMs: 15_000,
      accept: "image/*",
    });
    if (res.status !== 200 || !res.body) {
      return { url, ok: false, status: res.status, error: `HTTP ${res.status}` };
    }
    const probe: ArtworkProbe = {
      url,
      ok: true,
      status: res.status,
      contentType: res.headers.get("content-type") ?? undefined,
      bytes: res.body.byteLength,
    };
    try {
      // metadata() reads the header only — it doesn't decode the pixels, which
      // matters when someone points us at a 3000×3000 PNG.
      const meta = await sharp(res.body).metadata();
      probe.width = meta.width;
      probe.height = meta.height;
      probe.format = meta.format;
      probe.space = meta.space;
    } catch {
      probe.error = "The file loaded but isn't a readable image.";
      probe.ok = false;
    }
    return probe;
  } catch (e) {
    const msg =
      e instanceof SafeFetchError ? e.message : "The artwork could not be fetched.";
    return { url, ok: false, error: msg };
  }
}

async function probeEnclosure(
  episodeTitle: string,
  url: string,
  declaredLength?: number,
  declaredType?: string
): Promise<EnclosureProbe> {
  const base: EnclosureProbe = {
    episodeTitle,
    url,
    ok: false,
    redirects: 0,
    declaredLength,
    declaredType,
  };
  try {
    const res = await safeFetch(url, {
      method: "HEAD",
      timeoutMs: ENCLOSURE_TIMEOUT_MS,
    });
    const len = res.headers.get("content-length");
    return {
      ...base,
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      contentType: res.headers.get("content-type") ?? undefined,
      contentLength: len ? Number(len) : undefined,
      acceptsRanges: res.headers.get("accept-ranges") === "bytes",
      redirects: Math.max(0, res.chain.length - 1),
      viaAnalyticsPrefix: res.chain.some((u) =>
        ANALYTICS_HOSTS.some((h) => {
          try { return new URL(u).hostname.endsWith(h); } catch { return false; }
        })
      ),
    };
  } catch (e) {
    return {
      ...base,
      error: e instanceof SafeFetchError ? e.message : "Could not be reached.",
    };
  }
}

/** Fetch the feed, probe artwork and sampled enclosures, run every check. */
export async function runReport(
  feedUrl: string,
  onProgress: Progress = () => {}
): Promise<Report> {
  onProgress("fetching", "Fetching the feed");

  const res = await safeFetch(feedUrl, { accept: "application/rss+xml, application/xml, text/xml" });
  const rawXml = res.body?.toString("utf8") ?? "";

  onProgress("parsing", "Reading the XML");
  const { feed, error } = parseFeed(rawXml);

  const ctx: CheckContext = {
    feedUrl,
    chain: res.chain,
    httpStatus: res.status,
    headers: res.headers,
    responseMs: res.elapsedMs,
    bodyBytes: res.body?.byteLength ?? 0,
    rawXml,
    parsed: feed,
    parseError: error,
    enclosures: [],
    sampledIndices: [],
  };

  if (feed) {
    onProgress("parsing", `Found ${feed.items.length} episodes`);

    // <itunes:image href="…"> is the one Apple reads; the plain RSS <image>
    // block is the older form and is used only as a fallback.
    const rssImage = first(feed.channel.image as never) as
      | Record<string, unknown>
      | undefined;
    const artworkUrl =
      attr(first(feed.channel["itunes:image"] as never), "href") ??
      (rssImage ? text(first(rssImage.url as never)) : undefined);

    const limit = pLimit(CONCURRENCY);

    if (artworkUrl) {
      onProgress("artwork", "Checking the artwork");
      ctx.artwork = await probeArtwork(artworkUrl);
    }

    const indices = pickSample(feed.items.length);
    ctx.sampledIndices = indices;

    if (indices.length > 0) {
      onProgress("audio", `Sampling ${indices.length} audio files`);
      ctx.enclosures = await Promise.all(
        indices.map((i) =>
          limit(() => {
            const item = feed.items[i];
            const enc = first(item.enclosure as never);
            const url = attr(enc, "url");
            const title = text(first(item.title as never)) ?? `Episode ${i + 1}`;
            if (!url) {
              return Promise.resolve<EnclosureProbe>({
                episodeTitle: title,
                url: "",
                ok: false,
                redirects: 0,
                error: "No enclosure URL",
              });
            }
            const lenAttr = attr(enc, "length");
            return probeEnclosure(
              title,
              url,
              lenAttr ? Number(lenAttr) : undefined,
              attr(enc, "type")
            );
          })
        )
      );
    }
  }

  onProgress("scoring", "Scoring");
  return score(ctx);
}

const SEVERITY_WEIGHT: Record<Severity, number> = {
  critical: 5,
  warning: 2,
  info: 1,
};

function grade(n: number): string {
  if (n >= 90) return "A";
  if (n >= 80) return "B";
  if (n >= 70) return "C";
  if (n >= 60) return "D";
  if (n >= 50) return "E";
  return "F";
}

export function score(ctx: CheckContext): Report {
  const results: CheckResult[] = [];

  for (const check of checks) {
    let outcome;
    try {
      outcome = check.run(ctx);
    } catch {
      // A throwing check must never take the report down with it.
      continue;
    }
    if (!outcome) continue;
    results.push({
      id: check.id,
      category: check.category,
      severity: check.severity,
      title: check.title,
      docsUrl: check.docsUrl,
      ...outcome,
    });
  }

  const categories: CategoryScore[] = (Object.keys(CATEGORIES) as CategoryId[])
    .map((id) => {
      const meta = CATEGORIES[id];
      const own = results.filter((r) => r.category === id);
      const counted = own.filter((r) => r.status !== "not_applicable");

      let earned = 0;
      let max = 0;
      for (const r of counted) {
        const w = SEVERITY_WEIGHT[r.severity];
        max += w;
        if (r.status === "pass") earned += w;
        else if (r.status === "warn") earned += w * 0.5;
      }

      return {
        id,
        label: meta.label,
        score: max === 0 ? 100 : Math.round((earned / max) * 100),
        max,
        results: own,
      };
    })
    .filter((c) => c.results.length > 0);

  // Compliance categories carry the weight; modern features can only ever add.
  const compliance = categories.filter((c) => !CATEGORIES[c.id].additiveOnly);
  const additive = categories.filter((c) => CATEGORIES[c.id].additiveOnly);

  const complianceMax = compliance.reduce((s, c) => s + c.max, 0);
  const complianceEarned = compliance.reduce(
    (s, c) => s + (c.score / 100) * c.max,
    0
  );
  const base = complianceMax === 0 ? 0 : (complianceEarned / complianceMax) * 90;
  const bonus =
    additive.length === 0
      ? 0
      : (additive.reduce((s, c) => s + c.score, 0) / (additive.length * 100)) * 10;

  let total = Math.round(base + bonus);

  const criticalFailures = results.filter(
    (r) => r.severity === "critical" && r.status === "fail"
  );

  // A feed Apple would reject cannot score in the pass range, however good
  // everything else is. This is the rule that keeps the number honest.
  if (criticalFailures.length > 0) total = Math.min(total, 49);
  total = Math.max(0, Math.min(100, total));

  const warnings = results.filter((r) => r.status === "warn").length;
  const passes = results.filter((r) => r.status === "pass").length;

  const verdict =
    criticalFailures.length > 0
      ? `${criticalFailures.length} issue${criticalFailures.length > 1 ? "s" : ""} here could get this feed rejected.`
      : warnings > 0
        ? `Nothing blocking, but ${warnings} thing${warnings > 1 ? "s are" : " is"} worth fixing.`
        : "This feed is in good shape.";

  return {
    feedUrl: ctx.feedUrl,
    finalUrl: ctx.chain[ctx.chain.length - 1] ?? ctx.feedUrl,
    checkedAt: new Date().toISOString(),
    score: total,
    grade: grade(total),
    verdict,
    criticalCount: criticalFailures.length,
    warningCount: warnings,
    passCount: passes,
    categories,
    meta: {
      title: ctx.parsed ? text(first(ctx.parsed.channel.title as never)) : undefined,
      episodeCount: ctx.parsed?.items.length ?? 0,
      sampledCount: ctx.sampledIndices.length,
      responseMs: ctx.responseMs,
      feedBytes: ctx.bodyBytes,
    },
  };
}
