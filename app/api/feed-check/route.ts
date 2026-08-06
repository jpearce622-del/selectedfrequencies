import { NextResponse, after } from "next/server";
import { randomUUID } from "node:crypto";
import { runReport } from "@/lib/feed-checker/engine";
import { SafeFetchError } from "@/lib/feed-checker/safe-fetch";
import {
  cacheReport,
  consumeRateLimit,
  createJob,
  getCachedReport,
  isPersistent,
  normaliseFeedUrl,
  reportSlug,
  updateJob,
} from "@/lib/feed-checker/store";

// sharp and node:dns need the Node runtime, and a large feed can take a while.
export const runtime = "nodejs";
export const maxDuration = 300;

/**
 * Starts a check.
 *
 * Returns a jobId immediately rather than blocking: a 500-episode feed with
 * artwork and sampled enclosures can take the better part of a minute, which
 * is far past what a browser will hold a fetch open for without the user
 * assuming it has died. The client polls GET /api/feed-check/[jobId].
 *
 * A cached report short-circuits the whole thing and doesn't count against
 * the rate limit — re-reading a report shouldn't cost anyone anything.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const raw = typeof body?.url === "string" ? body.url.trim() : "";

  if (!raw) {
    return NextResponse.json(
      { error: "Paste a feed URL to check." },
      { status: 400 }
    );
  }

  let feedUrl: string;
  try {
    const parsed = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (parsed.protocol !== "https:") {
      return NextResponse.json(
        {
          error:
            "Only https:// feeds can be checked. If yours is http://, that's itself a problem worth fixing — Apple and Spotify both require HTTPS.",
        },
        { status: 400 }
      );
    }
    feedUrl = normaliseFeedUrl(parsed.toString());
  } catch {
    return NextResponse.json(
      { error: "That doesn't look like a URL. It should start with https://" },
      { status: 400 }
    );
  }

  const slug = reportSlug(feedUrl);

  const cached = await getCachedReport(slug);
  if (cached) {
    return NextResponse.json({
      status: "cached",
      slug,
      report: cached,
      checkedAt: cached.checkedAt,
    });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const verdict = await consumeRateLimit(ip);
  if (!verdict.allowed) {
    return NextResponse.json(
      { error: verdict.message },
      {
        status: 429,
        headers: verdict.retryAfterSeconds
          ? { "Retry-After": String(verdict.retryAfterSeconds) }
          : undefined,
      }
    );
  }

  const jobId = randomUUID();
  await createJob(jobId, feedUrl);

  // Run in the background and let the client poll. Without a persistent store
  // the job lives in this instance's memory, so the client is told to expect
  // a single-shot result rather than a reliable poll.
  const work = (async () => {
    try {
      const report = await runReport(feedUrl, (stage, message) => {
        void updateJob(jobId, { stage: stage as never, message });
      });
      await cacheReport(slug, report);
      await updateJob(jobId, { stage: "done", report });
    } catch (e) {
      const message =
        e instanceof SafeFetchError
          ? e.message
          : "Something went wrong reading that feed.";
      await updateJob(jobId, { stage: "error", error: message });
    }
  })();

  // after() keeps the serverless function alive until the work finishes
  // without holding the response open — the Next 16 replacement for the
  // waitUntil dance this used to need.
  after(work);

  return NextResponse.json({
    status: "queued",
    jobId,
    slug,
    persistent: isPersistent(),
  });
}
