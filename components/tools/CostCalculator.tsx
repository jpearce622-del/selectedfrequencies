"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { tiers, publishedTiers, recordingSetups, formatGBP } from "@/data/pricing";
import { regions, type RegionId } from "@/data/editing-benchmarks";

// publishedTiers: an unpriced draft must never appear in the comparison.
const mainTiers = publishedTiers.filter((t) => !t.addOn);

/** Minutes of editing per minute of finished audio. Used instead of asking
 *  people to estimate, which they consistently under-report.
 *  Multi-cam is not a small uplift: syncing angles, cutting between them and
 *  colour-matching cameras is most of a second edit on top of the first. */
const EDIT_RATIO = 4;
const EDIT_RATIO_MULTICAM = 7;
/** Episode length is capped here: past an hour the linear model stops
 *  matching the per-episode benchmark rates it's compared against. */
const MAX_LENGTH_MINUTES = 60;
const MIN_LENGTH_MINUTES = 5;
const multiCam = recordingSetups.find((s) => s.id === "multi-cam")!;

/** Parse a text input into a safe, finite, non-negative number. */
function num(value: string, max = 1_000_000): number {
  const n = Number.parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(n, max);
}

function money(amount: number, symbol: string, locale: string): string {
  if (!Number.isFinite(amount)) return `${symbol}0`;
  return `${symbol}${Math.round(amount).toLocaleString(locale)}`;
}

/** "3.9 working weeks — or 6.5 full days and nights" */
function humanise(hours: number): string {
  if (!Number.isFinite(hours) || hours <= 0) return "";
  const weeks = hours / 40;
  const days = hours / 24;
  return `That's ${weeks.toFixed(1)} working weeks — or ${days.toFixed(1)} full days and nights.`;
}

export function CostCalculator() {
  const [episodes, setEpisodes] = useState("4");
  const [length, setLength] = useState("45");
  const [rate, setRate] = useState("50");
  const [multiCamOn, setMultiCamOn] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [region, setRegion] = useState<RegionId>("uk");
  const [compareTierId, setCompareTierId] = useState<string | null>(null);

  // Auto-select USD for US locales. Deferred via rAF so the first render still
  // matches the server output (avoids a hydration mismatch) and so we're not
  // calling setState synchronously inside the effect body.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (navigator.language === "en-US") setRegion("us");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const handleSetupChange = (value: string) => {
    setMultiCamOn(value === "multi-cam");
  };

  const r = regions[region];

  const result = useMemo(() => {
    const epPerMonth = num(episodes, 1000);
    // Editing time is derived, not asked for: EDIT_RATIO minutes of work per
    // minute of finished audio. Capped at MAX_LENGTH_MINUTES so the figure
    // stays in territory the benchmark rates actually describe.
    const lengthMinutes = num(length, MAX_LENGTH_MINUTES);
    const ratio = multiCamOn ? EDIT_RATIO_MULTICAM : EDIT_RATIO;
    const editHours = (lengthMinutes * ratio) / 60;
    const perEpHours = editHours + (showNotes ? 1 : 0);
    const hourlyRate = num(rate, 100_000);

    const epPerYear = epPerMonth * 12;
    const hoursPerYear = epPerYear * perEpHours;
    const ownCostPerYear = hoursPerYear * hourlyRate;
    const ownCostPerEpisode = perEpHours * hourlyRate;

    // Our price: Full production if they also do show notes, else Audio & video.
    const defaultTier =
      tiers.find((t) => t.id === (showNotes ? "full-production" : "audio-video"))!;
    const tier =
      mainTiers.find((t) => t.id === compareTierId) ?? defaultTier;
    // A multi-cam shoot changes nothing about an audio-only deliverable —
    // there is no video to sync, cut between, or colour match — so the
    // supplement is only charged on the tiers that actually include video.
    const tierHasVideo = tier.id !== "editing-only";
    const supplement = multiCamOn && tierHasVideo ? multiCam.supplement : 0;
    const ourPerEpisode = tier.price + supplement;
    const ourPerYear = ourPerEpisode * epPerYear;

    // Independent market comparison (region-specific midpoint).
    const marketPerYear = r.marketMidpoint * epPerYear;

    return {
      epPerYear,
      ratio,
      tierHasVideo,
      editHours,
      perEpHours,
      hoursPerYear,
      ownCostPerYear,
      ownCostPerEpisode,
      tier,
      supplement,
      ourPerEpisode,
      ourPerYear,
      marketPerYear,
    };
  }, [episodes, length, rate, showNotes, multiCamOn, compareTierId, r.marketMidpoint]);

  const sym = r.currencySymbol;
  const loc = r.locale;

  // The verdict must never contradict the figures directly above it. The old
  // version compared against the market average while the panel showed our
  // price most prominently, so it could read "costs more than hiring someone"
  // directly beneath a number that was lower than ours. Each branch below now
  // names exactly which comparison it is making.
  const closing = (() => {
    const hrs = Math.round(result.hoursPerYear).toLocaleString(loc);
    if (result.hoursPerYear <= 0) {
      return "Add your numbers above to see what your own editing time is worth.";
    }
    if (result.ownCostPerYear > result.ourPerYear) {
      return `Your own time on the edit costs more than having us do it — and you don't get those ${hrs} hours back.`;
    }
    if (result.ownCostPerYear > result.marketPerYear) {
      return `Your own time costs more than the going freelance rate, though less than our ${result.tier.name.toLowerCase()} tier — and it still costs you ${hrs} hours a year.`;
    }
    return `On money alone, editing it yourself is cheaper — but it costs you ${hrs} hours a year that could go into the show itself.`;
  })();

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-base text-foreground outline-none focus:border-accent/60";
  const labelCls = "block text-sm font-medium text-foreground";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      {/* ---------------- Inputs ---------------- */}
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold tracking-tight">
          Your show
        </h2>

        <div className="mt-6 space-y-5">
          <div>
            <label className={labelCls} htmlFor="cc-episodes">
              Episodes per month
            </label>
            <input
              id="cc-episodes"
              className={field}
              type="number"
              inputMode="decimal"
              min={0}
              value={episodes}
              onChange={(e) => setEpisodes(e.target.value)}
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="cc-length">
              Average episode length (minutes)
            </label>
            {/* A slider rather than a number field: the value is bounded on
                both sides, people are estimating rather than entering a known
                figure, and dragging invites the "what if my episodes were
                longer?" comparison that a text box doesn't. */}
            <div className="mt-3 flex items-center gap-4">
              <input
                id="cc-length"
                type="range"
                min={MIN_LENGTH_MINUTES}
                max={MAX_LENGTH_MINUTES}
                step={1}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-[var(--accent)]"
                aria-describedby="cc-length-note"
              />
              <output
                htmlFor="cc-length"
                className="w-16 shrink-0 text-right font-display text-lg font-semibold tabular-nums text-foreground"
              >
                {num(length, MAX_LENGTH_MINUTES)} min
              </output>
            </div>
            <p id="cc-length-note" className="mt-2 text-xs leading-5 text-muted">
              We work on {result.ratio}{" "}
              minutes of editing per minute of audio
              {multiCamOn ? " for a multi-cam edit" : ""} — that&apos;s{" "}
              {result.editHours.toFixed(1)} hours an episode.
            </p>
          </div>

          <div>
            <label className={labelCls} htmlFor="cc-rate">
              What your time is worth (per hour)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 mt-[1px] -translate-y-1/2 text-muted">
                {sym}
              </span>
              <input
                id="cc-rate"
                className={`${field} pl-8`}
                type="number"
                inputMode="decimal"
                min={0}
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="cc-setup">
              How do you record?
            </label>
            <select
              id="cc-setup"
              className={field}
              value={multiCamOn ? "multi-cam" : "standard"}
              onChange={(e) => handleSetupChange(e.target.value)}
            >
              <option value="standard">
                Remote / single source (Zoom, Riverside, one camera)
              </option>
              <option value="multi-cam">Multi-cam (2–3 cameras)</option>
            </select>
            {multiCamOn && (
              <p className="mt-2 text-xs leading-5 text-muted">
                Syncing angles, cutting between them, and colour-matching
                cameras is close to a second edit on top of the first — so
                your own time goes from {EDIT_RATIO} to {EDIT_RATIO_MULTICAM}{" "}
                minutes per minute of audio, and our video tiers carry a{" "}
                {formatGBP(multiCam.supplement)} supplement.
              </p>
            )}
          </div>

          <div>
            <label className={labelCls} htmlFor="cc-region">
              Currency / region
            </label>
            <select
              id="cc-region"
              className={field}
              value={region}
              onChange={(e) => setRegion(e.target.value as RegionId)}
            >
              {Object.values(regions).map((reg) => (
                <option key={reg.id} value={reg.id}>
                  {reg.label}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-start gap-3 text-sm text-foreground">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-border accent-[var(--accent)]"
              checked={showNotes}
              onChange={(e) => setShowNotes(e.target.checked)}
            />
            <span>
              I also do my own show notes &amp; chapters
              <span className="block text-xs text-muted">
                Adds 1 hour per episode
              </span>
            </span>
          </label>
        </div>
      </div>

      {/* ---------------- Results ---------------- */}
      <div
        className="rounded-2xl border border-border bg-fog p-6 sm:p-8"
        aria-live="polite"
      >
        <h2 className="font-display text-xl font-semibold tracking-tight">
          What it costs you
        </h2>

        <p className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          {Math.round(result.hoursPerYear).toLocaleString(loc)}
          <span className="ml-2 text-xl font-medium text-muted">
            hours a year
          </span>
        </p>
        <p className="mt-2 text-sm text-muted">{humanise(result.hoursPerYear)}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <dt className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Your time, per year
            </dt>
            <dd className="font-display mt-1 text-2xl font-semibold">
              {money(result.ownCostPerYear, sym, loc)}
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4">
            <dt className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
              Your time, per episode
            </dt>
            <dd className="font-display mt-1 text-2xl font-semibold">
              {money(result.ownCostPerEpisode, sym, loc)}
            </dd>
          </div>
        </dl>

        {/* Side-by-side */}
        <div className="mt-6 rounded-xl border border-border bg-surface p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-base font-semibold">
              Side by side, per year
            </h3>
            <label className="text-xs text-muted">
              <span className="sr-only">Compare against tier</span>
              <select
                className="rounded-lg border border-border bg-surface px-2 py-1 text-xs"
                value={compareTierId ?? result.tier.id}
                onChange={(e) => setCompareTierId(e.target.value)}
              >
                {mainTiers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-muted">Editing it yourself</span>
              <span className="font-display text-lg font-semibold">
                {money(result.ownCostPerYear, sym, loc)}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-muted">
                Us — {result.tier.name}
                {result.supplement > 0 && " + multi-cam"}
              </span>
              <span className="font-display text-lg font-semibold text-accent">
                {formatGBP(result.ourPerYear)}
              </span>
            </div>
            <p className="text-xs leading-5 text-muted">
              {result.tier.name} {formatGBP(result.tier.price)}
              {result.supplement > 0 && (
                <> + multi-cam {formatGBP(result.supplement)}</>
              )}{" "}
              = {formatGBP(result.ourPerEpisode)} per episode ×{" "}
              {result.epPerYear.toLocaleString(loc)} episodes. Our prices are in
              GBP.
            </p>

            {/* What the compared tier actually buys. Read straight from
                data/pricing.ts — the same source as the /services rate card
                and the Offer schema — so the calculator can never advertise a
                different scope from the rest of the site. */}
            <details className="group rounded-lg border border-border bg-fog/60 px-3.5 py-2.5">
              <summary className="cursor-pointer list-none text-xs font-medium text-foreground marker:content-['']">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform group-open:rotate-90"
                  >
                    ›
                  </span>
                  What&apos;s included in {result.tier.name}?
                </span>
              </summary>
              <ul className="mt-2.5 space-y-1.5">
                {result.tier.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs leading-5 text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
                {multiCamOn && result.tierHasVideo && (
                  <li className="flex items-start gap-2 text-xs leading-5 text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    Multi-cam syncing, angle switching and colour matching
                  </li>
                )}
              </ul>
              {multiCamOn && !result.tierHasVideo && (
                <p className="mt-2.5 text-xs leading-5 text-muted">
                  This tier is audio only, so the multi-cam supplement
                  doesn&apos;t apply — your own edit still takes longer though.
                </p>
              )}
            </details>
            <div className="flex items-baseline justify-between gap-4 border-t border-border pt-3">
              <span className="text-muted">
                Independent market average ({r.id.toUpperCase()})
              </span>
              <span className="font-display text-lg font-semibold">
                {money(result.marketPerYear, sym, loc)}
              </span>
            </div>
            <p className="text-xs leading-5 text-muted">
              Third-party industry average — most {r.id === "uk" ? "UK" : "US"}{" "}
              freelancers charge {sym}
              {r.marketLow}–{sym}
              {r.marketHigh} per episode.
            </p>
            <div className="flex items-baseline justify-between gap-4 border-t border-border pt-3">
              <span className="text-muted">Hours you&apos;d get back</span>
              <span className="font-display text-lg font-semibold">
                {Math.round(result.hoursPerYear).toLocaleString(loc)}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm leading-6 text-foreground">{closing}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/contact?source=cost-calculator">Get a quote</Button>
          {/* Save as PDF via the browser's own print-to-PDF. No email, no
              list, no third party — the user keeps their numbers. */}
          <button
            type="button"
            onClick={() => window.print()}
            className="text-sm font-medium text-accent hover:text-accent-bright"
          >
            Save these figures as a PDF
          </button>
          <Link
            href="/services"
            className="text-sm font-medium text-accent hover:text-accent-bright"
          >
            See what we do →
          </Link>
        </div>
        <p className="mt-3 text-xs text-muted print:hidden">
          Opens your browser&apos;s print dialog — choose &quot;Save as
          PDF&quot;. Nothing is sent to us.
        </p>
      </div>
    </div>
  );
}
