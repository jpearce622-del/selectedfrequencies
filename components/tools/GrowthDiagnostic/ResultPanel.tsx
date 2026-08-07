"use client";

import Link from "next/link";
import {
  MAX_LAYER_SCORE,
  type DiagnosticResult,
  type LayerId,
} from "./questions";

/**
 * The result view. Split out from the question flow because it is the half
 * that gets shared — a deep link renders straight into this with no run
 * through the questions first.
 */

/**
 * Colour is never the only signal here. Each bar carries a text label, and the
 * bottleneck is marked with a word ("Bottleneck") and a shape, so the result
 * survives greyscale, colour blindness and a screen reader alike.
 */
function ScoreBar({
  name,
  percent,
  raw,
  isBottleneck,
}: {
  name: string;
  percent: number;
  raw: number;
  isBottleneck: boolean;
}) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-medium">
          {isBottleneck && (
            <span aria-hidden className="text-accent">
              ▸
            </span>
          )}
          {name}
          {isBottleneck && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              Bottleneck
            </span>
          )}
        </span>
        <span className="text-xs tabular-nums text-muted">
          {raw} / {MAX_LAYER_SCORE}
        </span>
      </div>
      <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-fog">
        <div
          className={`h-full rounded-full transition-[width] duration-500 motion-reduce:transition-none ${
            isBottleneck ? "bg-accent" : "bg-deep/35"
          }`}
          style={{ width: `${Math.max(percent, 2)}%` }}
        />
      </div>
    </li>
  );
}

const CTA_COPY: Record<
  "show-notes" | "services",
  { href: string; label: string; blurb: string }
> = {
  "show-notes": {
    href: "/tools/show-notes-generator",
    label: "Try the show notes generator",
    blurb:
      "Packaging problems are mostly writing problems. The free generator drafts titles, descriptions and chapters from your audio, which is the fastest way to see what a stronger first line looks like on your own episode.",
  },
  services: {
    href: "/contact",
    label: "Talk to us about production",
    blurb:
      "This is the layer where an outside ear earns its keep. If you would rather hand over the diagnosis and the work, that is what the studio does.",
  },
};

export function ResultPanel({
  result,
  shareUrl,
  onRetake,
}: {
  result: DiagnosticResult;
  shareUrl: string | null;
  onRetake: () => void;
}) {
  const { bottleneck, scores, actions } = result;
  const cta = CTA_COPY[bottleneck.cta];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Your result
      </p>
      <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Your bottleneck is {bottleneck.name}.
      </h3>
      <p className="mt-3 text-base leading-7 text-muted">{bottleneck.meaning}</p>
      <p className="mt-3 text-base leading-7 text-muted">
        {bottleneck.whyFirst}
      </p>

      <ul className="mt-8 space-y-4">
        {scores.map((s) => (
          <ScoreBar
            key={s.layer.id}
            name={s.layer.name}
            percent={s.percent}
            raw={s.raw}
            isBottleneck={s.layer.id === bottleneck.id}
          />
        ))}
      </ul>

      {actions.length > 0 && (
        <div className="mt-8 rounded-2xl bg-fog p-5 sm:p-6">
          <h4 className="font-display text-base font-semibold tracking-tight">
            What to do about it
          </h4>
          <p className="mt-1 text-sm text-muted">
            Taken from the specific answers you scored lowest on, weakest first.
          </p>
          <ol className="mt-4 space-y-4">
            {actions.map(({ question, fix }, i) => (
              <li key={question.id} className="flex gap-3">
                <span
                  aria-hidden
                  className="font-display mt-0.5 text-sm font-semibold text-accent"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{question.prompt}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {fix}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {actions.length === 0 && (
        <p className="mt-8 rounded-2xl bg-fog p-5 text-sm leading-relaxed text-muted">
          You scored full marks on every question in this layer, which means
          this is the weakest of five strong layers rather than a problem. Read
          the measurement section — at this point the useful question is whether
          you are tracking the right outcome, not whether the show is working.
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`#${bottleneck.sectionId}`}
          className="rounded-full bg-deep px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Read the {bottleneck.name} section
        </a>
        <Link
          href={cta.href}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          {cta.label}
        </Link>
        <button
          type="button"
          onClick={onRetake}
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Retake
        </button>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{cta.blurb}</p>

      {shareUrl && (
        <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted">
          This result is in the page address, so you can copy the URL from your
          browser bar to share it or come back to it. Nothing is stored and no
          email is needed.
        </p>
      )}
    </div>
  );
}

export type { LayerId };
