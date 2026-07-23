"use client";

import { useEffect, useState } from "react";
import type { RoadmapStep } from "@/content/podcast-roadmap";

const STORAGE_KEY = "sf-podcast-roadmap-progress-v1";

/**
 * Interactive 9-step launch checklist.
 *
 * SEO-critical detail: every step's title, description, tip, and
 * time/cost is rendered unconditionally on first paint, so it's all
 * present in the server-rendered HTML and crawlable without JS. Only
 * the *completion* state (the tick, the progress bar, the banner) is
 * client-side — it starts empty on the server to avoid a hydration
 * mismatch, then rehydrates from localStorage after mount.
 */
export function PodcastRoadmapChecklist({ steps }: { steps: RoadmapStep[] }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  // Rehydrate saved progress once, on the client only.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ids: string[] = JSON.parse(raw);
        // Guard against stale ids from an older step set.
        const valid = ids.filter((id) => steps.some((s) => s.id === id));
        setCompleted(new Set(valid));
      }
    } catch {
      // Corrupt/blocked storage — start fresh, no crash.
    }
    setHydrated(true);
  }, [steps]);

  // Persist on every change (but not before we've read the initial value).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
    } catch {
      // Ignore storage write failures (private mode, quota, etc.).
    }
  }, [completed, hydrated]);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => setCompleted(new Set());

  const doneCount = completed.size;
  const total = steps.length;
  const allDone = doneCount === total;
  const pct = Math.round((doneCount / total) * 100);

  return (
    <div>
      {/* ---------- Progress summary ---------- */}
      <div className="sticky top-20 z-10 rounded-2xl border border-border bg-background/85 p-5 shadow-sm backdrop-blur-md sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              Your launch progress
            </p>
            <p
              className="mt-0.5 text-sm text-muted"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="font-semibold text-foreground">{doneCount}</span>{" "}
              of {total} steps done
              {allDone ? " — you're ready to launch 🎧" : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            disabled={doneCount === 0}
            className="shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-foreground/30 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
          >
            Reset
          </button>
        </div>

        <div
          className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-fog"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Podcast launch checklist ${pct}% complete`}
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* ---------- Completion banner ---------- */}
      {allDone && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-deep p-6 text-background sm:p-8">
          <p className="font-display text-2xl font-semibold tracking-tight">
            All 9 steps complete — your podcast is ready to launch. 🎉
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-background/70">
            You've done the hard part. When your show grows and the edit,
            show notes, and promotion start eating your week, that's exactly
            where we come in.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Talk to Selected Frequencies →
          </a>
        </div>
      )}

      {/* ---------- Steps ---------- */}
      <ol className="mt-8 space-y-4">
        {steps.map((step, i) => {
          const isDone = completed.has(step.id);
          const headingId = `step-${step.id}-title`;
          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => toggle(step.id)}
                aria-pressed={isDone}
                aria-labelledby={headingId}
                className={`group flex w-full gap-4 rounded-2xl border p-5 text-left transition-all duration-300 sm:gap-5 sm:p-6 ${
                  isDone
                    ? "border-accent/40 bg-accent/[0.04]"
                    : "border-border bg-surface hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-black/[0.05]"
                }`}
              >
                {/* Checkbox / number */}
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    isDone
                      ? "bg-accent text-accent-foreground"
                      : "bg-fog text-muted group-hover:bg-accent/10 group-hover:text-accent"
                  }`}
                >
                  {isDone ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10.5l3.5 3.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span className="font-mono">{i + 1}</span>
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      id={headingId}
                      className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${
                        isDone ? "text-muted line-through decoration-accent/40" : ""
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                      {isDone ? "Done" : `Step ${i + 1}`}
                    </span>
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-muted">
                    {step.description}
                  </span>

                  <span className="mt-4 block rounded-xl bg-fog p-4 text-sm leading-6 text-foreground/80">
                    <span className="font-semibold text-accent">Tip: </span>
                    {step.tip}
                  </span>

                  <span className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M8 4.6V8l2.4 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {step.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 1.6v12.8M10.8 4.2c-.5-.9-1.6-1.4-2.8-1.4-1.7 0-3 1-3 2.4 0 1.5 1.3 2.1 3 2.5s3 1 3 2.5-1.3 2.4-3 2.4c-1.2 0-2.3-.5-2.8-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {step.cost}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
