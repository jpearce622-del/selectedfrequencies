"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Report } from "@/lib/feed-checker/types";
import { ReportView } from "./ReportView";

/**
 * The interactive half of the feed checker: take a URL, start a job, poll it,
 * render the report.
 *
 * The API returns a job id rather than the finished report because a large
 * feed takes the better part of a minute once artwork and sampled audio are
 * probed — far longer than a browser will sit on an open fetch before the
 * user assumes it has died.
 */

const POLL_INTERVAL_MS = 1500;
/** Generous: the route allows 300s, and a slow host can genuinely use it. */
const POLL_TIMEOUT_MS = 4 * 60 * 1000;

/** Stage copy. The API sends its own message; these are the fallbacks. */
const STAGE_COPY: Record<string, string> = {
  queued: "Starting",
  fetching: "Fetching the feed",
  parsing: "Reading the XML",
  artwork: "Checking the artwork",
  audio: "Sampling the audio files",
  scoring: "Scoring",
};

type Phase = "idle" | "running" | "done" | "error";

export function FeedCheckerFlow() {
  const [url, setUrl] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [status, setStatus] = useState("");
  const [report, setReport] = useState<Report | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const resultRef = useRef<HTMLDivElement | null>(null);
  const cancelled = useRef(false);

  // A poll loop outliving the component would keep setting state after
  // unmount, so every await checks this flag before continuing.
  useEffect(() => {
    cancelled.current = false;
    return () => {
      cancelled.current = true;
    };
  }, []);

  const poll = useCallback(async (jobId: string, persistent: boolean) => {
    const startedAt = Date.now();

    while (!cancelled.current) {
      if (Date.now() - startedAt > POLL_TIMEOUT_MS) {
        setError(
          "That check is taking longer than expected. The feed may be very large or the host very slow — try again in a minute."
        );
        setPhase("error");
        return;
      }

      await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
      if (cancelled.current) return;

      let res: Response;
      try {
        res = await fetch(`/api/feed-check/${jobId}`, { cache: "no-store" });
      } catch {
        continue; // a dropped poll isn't a failed check — try the next one
      }

      if (res.status === 404) {
        // The job vanished. Without a shared store that means the poll landed
        // on a different serverless instance from the one doing the work, and
        // no amount of retrying will find it — say so plainly rather than
        // spinning until the timeout.
        setError(
          persistent
            ? "That check expired before it finished. Please run it again."
            : "The check ran, but this deployment has no shared job store configured, so the result couldn't be read back. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to fix this."
        );
        setPhase("error");
        return;
      }

      const data = await res.json().catch(() => null);
      if (!data) continue;

      if (data.status === "error") {
        setError(data.error ?? "Something went wrong reading that feed.");
        setPhase("error");
        return;
      }

      if (data.status === "done" && data.report) {
        setReport(data.report as Report);
        setPhase("done");
        return;
      }

      setStatus(data.message ?? STAGE_COPY[data.stage] ?? "Working");
    }
  }, []);

  const run = useCallback(
    async (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      setPhase("running");
      setStatus(STAGE_COPY.queued);
      setError(null);
      setReport(null);
      setSlug(null);
      setFromCache(false);
      setCopied(false);

      let res: Response;
      try {
        res = await fetch("/api/feed-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: trimmed }),
        });
      } catch {
        setError("Couldn't reach the checker. Check your connection and retry.");
        setPhase("error");
        return;
      }

      const data = await res.json().catch(() => null);

      if (!res.ok || !data) {
        setError(data?.error ?? "Something went wrong starting that check.");
        setPhase("error");
        return;
      }

      setSlug(data.slug ?? null);

      // A feed checked in the last few hours comes back immediately.
      if (data.status === "cached" && data.report) {
        setReport(data.report as Report);
        setFromCache(true);
        setPhase("done");
        return;
      }

      await poll(data.jobId as string, Boolean(data.persistent));
    },
    [poll]
  );

  // Move focus and viewport to the result once it lands — the report sits
  // well below the fold on a phone, and a silently-updated page reads as a
  // page that did nothing.
  useEffect(() => {
    if (phase === "done" && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [phase]);

  const shareUrl =
    slug && typeof window !== "undefined"
      ? `${window.location.origin}/tools/feed-checker/r/${slug}`
      : null;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void run(url);
        }}
        className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
      >
        <label
          htmlFor="feed-url"
          className="block text-sm font-medium text-foreground"
        >
          Your RSS feed URL
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="feed-url"
            type="url"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://feeds.example.com/my-show.xml"
            disabled={phase === "running"}
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={phase === "running" || url.trim().length === 0}
            className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {phase === "running" ? "Checking…" : "Check my feed"}
          </button>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          No sign-up, no email. Your feed URL is public by definition — nothing
          else is stored.
        </p>
      </form>

      {/* Progress */}
      {phase === "running" && (
        <div
          className="mt-5 flex items-center gap-3 rounded-2xl bg-fog px-5 py-4"
          role="status"
          aria-live="polite"
        >
          <span
            className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-accent border-t-transparent"
            aria-hidden
          />
          <div>
            <p className="text-sm font-medium">{status}</p>
            <p className="mt-0.5 text-xs text-muted">
              Feeds with thousands of episodes can take up to a minute.
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {phase === "error" && error && (
        <div
          className="mt-5 rounded-2xl bg-red-50 px-5 py-4 text-sm leading-relaxed text-red-700"
          role="alert"
        >
          <p>{error}</p>
          <button
            type="button"
            onClick={() => {
              setPhase("idle");
              setError(null);
            }}
            className="mt-2 text-xs font-semibold underline underline-offset-2"
          >
            Try another feed
          </button>
        </div>
      )}

      {/* Report */}
      {phase === "done" && report && (
        <div ref={resultRef} className="mt-10 scroll-mt-24">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted">
              {fromCache
                ? "Showing a result from the last few hours — re-checking a feed this soon would give the same answer."
                : "Fresh result."}
            </p>
            <div className="flex gap-2">
              {shareUrl && (
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard
                      .writeText(shareUrl)
                      .then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      })
                      .catch(() => {
                        // Clipboard blocked (insecure context, or denied) —
                        // fall back to showing the URL so it can be copied by
                        // hand rather than failing silently.
                        window.prompt("Copy this link", shareUrl);
                      });
                  }}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  {copied ? "Link copied ✓" : "Copy shareable link"}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setPhase("idle");
                  setReport(null);
                  setUrl("");
                }}
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Check another feed
              </button>
            </div>
          </div>

          <ReportView report={report} />
        </div>
      )}
    </div>
  );
}
