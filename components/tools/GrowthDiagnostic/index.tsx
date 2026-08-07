"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  QUESTIONS,
  RESULT_PARAM,
  decodeAnswers,
  emptyAnswers,
  encodeAnswers,
  scoreAnswers,
  type Answers,
} from "./questions";
import { ResultPanel } from "./ResultPanel";

/**
 * Fifteen-question self-assessment that scores the reader across the five
 * layers and names the weakest one.
 *
 * Deliberate choices worth keeping:
 *  - Answers live in React state only. No localStorage or sessionStorage.
 *  - The result is never gated behind an email.
 *  - The result encodes into the URL, so it can be shared or returned to.
 *
 * The query param is read from window.location rather than useSearchParams()
 * because the latter opts the whole route out of static rendering. This
 * component is client-only anyway, so reading location on mount costs nothing
 * and keeps the article itself a static page.
 */

/** Standard radiogroup keys: arrows move focus and selection, Home/End jump. */
const ARROW_NEXT = ["ArrowDown", "ArrowRight"];
const ARROW_PREV = ["ArrowUp", "ArrowLeft"];

/**
 * A shared result carried in the query string, or null.
 *
 * Guarded for `window` even though this component never server-renders, so
 * it stays safe if the ssr:false wrapper is ever changed.
 */
function readSharedResult(): Answers | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return decodeAnswers(params.get(RESULT_PARAM));
}

export default function GrowthDiagnostic() {
  // Read in lazy initialisers rather than a mount effect: the result is known
  // at first render, so a shared link paints the result directly instead of
  // flashing question one and then replacing it. Calling readSharedResult
  // three times is a URL parse each and not worth hoisting.
  const [answers, setAnswers] = useState<Answers>(
    () => readSharedResult() ?? emptyAnswers()
  );
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(() => readSharedResult() !== null);
  const [announcement, setAnnouncement] = useState("");
  const [shareUrl, setShareUrl] = useState<string | null>(() =>
    readSharedResult() !== null ? window.location.href : null
  );

  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const headingRef = useRef<HTMLParagraphElement | null>(null);
  // Suppresses focus stealing on first paint: nobody has interacted yet, and
  // yanking focus into a widget on load is hostile.
  const hasInteracted = useRef(false);

  const question = QUESTIONS[step];
  const total = QUESTIONS.length;
  const selected = answers[step];

  // Move focus to the current question when the step changes, so a keyboard
  // user isn't left with focus on a Next button that has moved on. Focus is a
  // DOM side effect, which is what an effect is for; the screen-reader
  // announcement is raised by the handlers that cause the navigation instead.
  useEffect(() => {
    if (showResult || !hasInteracted.current) return;
    const target =
      optionRefs.current[answers[step] ?? 0] ?? optionRefs.current[0];
    target?.focus();
    // answers is intentionally omitted: this should fire on navigation, not
    // on every selection within the same question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, showResult]);

  const choose = useCallback(
    (optionIndex: number) => {
      hasInteracted.current = true;
      setAnswers((prev) => {
        const next = [...prev];
        next[step] = optionIndex;
        return next;
      });
    },
    [step]
  );

  const goNext = useCallback(() => {
    hasInteracted.current = true;
    if (step < total - 1) {
      setStep(step + 1);
      setAnnouncement(
        `Question ${step + 2} of ${total}. ${QUESTIONS[step + 1].prompt}`
      );
      return;
    }
    const encoded = encodeAnswers(answers);
    const url = new URL(window.location.href);
    url.searchParams.set(RESULT_PARAM, encoded);
    // replaceState rather than push: the questions aren't history entries, and
    // Back should leave the article rather than walking the quiz backwards.
    window.history.replaceState(null, "", url.toString());
    setShareUrl(url.toString());
    setShowResult(true);
    const { bottleneck } = scoreAnswers(answers);
    setAnnouncement(
      `Result ready. Your bottleneck is ${bottleneck.name}.`
    );
  }, [answers, step, total]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      // Enter advances from the option itself, so a keyboard user can run the
      // whole thing on arrows and Enter without tabbing out to the Next button
      // fifteen times. The button still works normally; this is a shortcut,
      // not a replacement for it.
      if (e.key === "Enter") {
        e.preventDefault();
        if (selected == null) {
          choose(index);
          return;
        }
        goNext();
        return;
      }
      if (![...ARROW_NEXT, ...ARROW_PREV, "Home", "End"].includes(e.key)) return;
      e.preventDefault();
      const last = question.options.length - 1;
      let next = index;
      if (ARROW_NEXT.includes(e.key)) next = index === last ? 0 : index + 1;
      if (ARROW_PREV.includes(e.key)) next = index === 0 ? last : index - 1;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = last;
      choose(next);
      optionRefs.current[next]?.focus();
    },
    [choose, goNext, question.options.length, selected]
  );

  const goBack = useCallback(() => {
    hasInteracted.current = true;
    if (showResult) {
      setShowResult(false);
      setStep(total - 1);
      setAnnouncement(
        `Question ${total} of ${total}. ${QUESTIONS[total - 1].prompt}`
      );
      return;
    }
    const prev = Math.max(0, step - 1);
    setStep(prev);
    setAnnouncement(`Question ${prev + 1} of ${total}. ${QUESTIONS[prev].prompt}`);
  }, [showResult, step, total]);

  const retake = useCallback(() => {
    hasInteracted.current = true;
    const url = new URL(window.location.href);
    url.searchParams.delete(RESULT_PARAM);
    window.history.replaceState(null, "", url.toString());
    setAnswers(emptyAnswers());
    setStep(0);
    setShareUrl(null);
    setShowResult(false);
    setAnnouncement("Diagnostic reset. Question 1 of 15.");
  }, []);

  const progress = Math.round(((step + (selected != null ? 1 : 0)) / total) * 100);

  return (
    <div className="not-prose my-10 rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      {/* Screen-reader announcements for question changes and the result. */}
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {showResult ? (
        <ResultPanel
          result={scoreAnswers(answers)}
          shareUrl={shareUrl}
          onRetake={retake}
        />
      ) : (
        <>
          <div className="flex items-baseline justify-between gap-4">
            <p
              ref={headingRef}
              className="text-xs font-semibold uppercase tracking-widest text-accent"
            >
              Growth diagnostic
            </p>
            <p className="text-xs tabular-nums text-muted">
              {step + 1} of {total}
            </p>
          </div>

          {/* Progress track. aria-hidden because the "n of 15" text above and
              the live region already carry this for assistive tech. */}
          <div aria-hidden className="mt-3 h-1 overflow-hidden rounded-full bg-fog">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Reserved height so advancing between questions never shifts the
              page. Sized against the longest question in the set. */}
          <div className="mt-6 flex min-h-[27rem] flex-col sm:min-h-[23rem]">
            <div
              role="radiogroup"
              aria-labelledby={`gd-prompt-${question.id}`}
              className="flex-1"
            >
              <h3
                id={`gd-prompt-${question.id}`}
                className="font-display text-lg font-semibold tracking-tight sm:text-xl"
              >
                {question.prompt}
              </h3>

              <p className="mt-1.5 text-xs text-muted">
                Use the arrow keys to choose and Enter to continue.
              </p>

              <div className="mt-4 space-y-2.5">
                {question.options.map((option, i) => {
                  const isSelected = selected === i;
                  return (
                    <button
                      key={option.label}
                      ref={(el) => {
                        optionRefs.current[i] = el;
                      }}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      // Roving tabindex: one stop for the whole group.
                      tabIndex={isSelected || (selected == null && i === 0) ? 0 : -1}
                      onClick={() => choose(i)}
                      onKeyDown={(e) => onKeyDown(e, i)}
                      className={`flex w-full min-h-[44px] items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm leading-relaxed transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-accent bg-accent/[0.06] text-foreground"
                          : "border-border bg-background text-muted hover:border-foreground/25 hover:text-foreground"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                          isSelected ? "border-accent" : "border-border"
                        }`}
                      >
                        {isSelected && (
                          <span className="h-2 w-2 rounded-full bg-accent" />
                        )}
                      </span>
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="min-h-[44px] rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-foreground/30 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={selected == null}
                className="min-h-[44px] flex-1 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
              >
                {step === total - 1 ? "See my result" : "Next"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
