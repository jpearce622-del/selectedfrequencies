"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  placements,
  categories,
  currencies,
  accessTierFor,
  ESTIMATE_CAVEAT,
  USD_TO_GBP,
} from "@/data/sponsorship-benchmarks";

/** Parse a text input into a safe, finite, non-negative number. */
function num(value: string, max = 100_000_000): number {
  const n = Number.parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(n, max);
}

function money(amount: number, symbol: string, locale: string): string {
  if (!Number.isFinite(amount) || amount < 0) return `${symbol}0`;
  return `${symbol}${Math.round(amount).toLocaleString(locale)}`;
}

/**
 * Weight a researched low/high band by the selected category.
 * Never produces a figure outside the researched range — it only moves within
 * it, which is the point: the benchmarks are the benchmarks.
 */
function weighted(low: number, high: number, w: number): number {
  return low + (high - low) * w;
}

export function SponsorshipCalculator() {
  const [downloads, setDownloads] = useState("1500");
  const [episodes, setEpisodes] = useState("4");
  const [slotCount, setSlotCount] = useState("2");
  const [selected, setSelected] = useState<string[]>(["mid-roll"]);
  const [categoryId, setCategoryId] = useState("general");
  const [currencyId, setCurrencyId] = useState<"usd" | "gbp">("usd");
  const [target, setTarget] = useState("500");

  const currency = currencies[currencyId];
  const category = categories.find((c) => c.id === categoryId) ?? categories[0];

  const toggleSlot = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const result = useMemo(() => {
    const dls = num(downloads, 50_000_000);
    const epsPerMonth = num(episodes, 500);
    const slots = num(slotCount, 10);
    const rate = currency.rate;

    const chosen = placements.filter((p) => selected.includes(p.id));

    // Per-slot value = (downloads / 1000) × CPM, weighted by category.
    const rows = chosen.map((p) => {
      const cpmLow = weighted(p.low, p.high, category.lowWeight) * rate;
      const cpmHigh = weighted(p.low, p.high, category.highWeight) * rate;
      return {
        id: p.id,
        label: p.label,
        cpmLow,
        cpmHigh,
        valueLow: (dls / 1000) * cpmLow,
        valueHigh: (dls / 1000) * cpmHigh,
      };
    });

    // A show sells `slots` ad slots per episode. When fewer slot *types* are
    // ticked than slots sold, the average CPM of the ticked ones fills the rest.
    const avgCpmLow = rows.length
      ? rows.reduce((s, r) => s + r.cpmLow, 0) / rows.length
      : 0;
    const avgCpmHigh = rows.length
      ? rows.reduce((s, r) => s + r.cpmHigh, 0) / rows.length
      : 0;

    const episodeLow = (dls / 1000) * avgCpmLow * slots;
    const episodeHigh = (dls / 1000) * avgCpmHigh * slots;
    const monthlyLow = episodeLow * epsPerMonth;
    const monthlyHigh = episodeHigh * epsPerMonth;

    // Reverse: solve monthly = (D/1000) × avgCPM × slots × episodes for D.
    // Derived from the CPMs rather than the current result, so the answer
    // doesn't collapse when downloads is 0.
    const targetValue = num(target, 100_000_000);
    const denomLow = (avgCpmLow / 1000) * slots * epsPerMonth;
    const denomHigh = (avgCpmHigh / 1000) * slots * epsPerMonth;

    return {
      dls,
      rows,
      episodeLow,
      episodeHigh,
      monthlyLow,
      monthlyHigh,
      annualLow: monthlyLow * 12,
      annualHigh: monthlyHigh * 12,
      neededAtLowCpm: denomLow > 0 ? targetValue / denomLow : null,
      neededAtHighCpm: denomHigh > 0 ? targetValue / denomHigh : null,
    };
  }, [downloads, episodes, slotCount, selected, category, currency.rate, target]);

  const tier = accessTierFor(result.dls);
  const sym = currency.symbol;
  const loc = currency.locale;

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-base text-foreground outline-none focus:border-accent/60";
  const labelCls = "block text-sm font-medium text-foreground";

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        {/* ---------------- Inputs ---------------- */}
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Your show
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className={labelCls} htmlFor="sp-downloads">
                Downloads per episode (first 30 days)
              </label>
              <input
                id="sp-downloads"
                className={field}
                type="number"
                inputMode="numeric"
                min={0}
                value={downloads}
                onChange={(e) => setDownloads(e.target.value)}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="sp-episodes">
                Episodes per month
              </label>
              <input
                id="sp-episodes"
                className={field}
                type="number"
                inputMode="numeric"
                min={0}
                value={episodes}
                onChange={(e) => setEpisodes(e.target.value)}
              />
            </div>

            <div>
              <label className={labelCls} htmlFor="sp-slots">
                Ad slots per episode
              </label>
              <select
                id="sp-slots"
                className={field}
                value={slotCount}
                onChange={(e) => setSlotCount(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <fieldset>
              <legend className={labelCls}>Which slots?</legend>
              <div className="mt-2 space-y-2">
                {placements.map((p) => (
                  <label
                    key={p.id}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-border accent-[var(--accent)]"
                      checked={selected.includes(p.id)}
                      onChange={() => toggleSlot(p.id)}
                    />
                    <span>
                      {p.label}
                      <span className="block text-xs text-muted">
                        ${p.low}–${p.high} CPM
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className={labelCls} htmlFor="sp-category">
                Your show&apos;s category
              </label>
              <select
                id="sp-category"
                className={field}
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs leading-5 text-muted">{category.note}</p>
            </div>

            <div>
              <label className={labelCls} htmlFor="sp-currency">
                Currency
              </label>
              <select
                id="sp-currency"
                className={field}
                value={currencyId}
                onChange={(e) => setCurrencyId(e.target.value as "usd" | "gbp")}
              >
                {Object.values(currencies).map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
              {currencyId === "gbp" && (
                <p className="mt-2 text-xs leading-5 text-muted">
                  Converted from USD industry benchmarks at approximately $1 ={" "}
                  £{USD_TO_GBP}. These are not separately-researched UK figures,
                  and the real rate moves.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- Results ---------------- */}
        <div
          className="rounded-2xl border border-border bg-fog p-6 sm:p-8"
          aria-live="polite"
        >
          <h2 className="font-display text-xl font-semibold tracking-tight">
            What it could be worth
          </h2>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
            Estimated per year
          </p>
          <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {money(result.annualLow, sym, loc)}–{money(result.annualHigh, sym, loc)}
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-4">
              <dt className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Per episode
              </dt>
              <dd className="font-display mt-1 text-xl font-semibold">
                {money(result.episodeLow, sym, loc)}–
                {money(result.episodeHigh, sym, loc)}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <dt className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                Per month
              </dt>
              <dd className="font-display mt-1 text-xl font-semibold">
                {money(result.monthlyLow, sym, loc)}–
                {money(result.monthlyHigh, sym, loc)}
              </dd>
            </div>
          </dl>

          {/* Transparent breakdown — the maths, not a mystery number. */}
          <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Value of each selected ad slot at your download numbers
              </caption>
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <th scope="col" className="px-4 py-2.5 font-medium">Slot</th>
                  <th scope="col" className="px-4 py-2.5 font-medium">CPM</th>
                  <th scope="col" className="px-4 py-2.5 text-right font-medium">
                    Per slot
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.rows.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-4 py-3 text-muted">
                      Select at least one slot to see a breakdown.
                    </td>
                  </tr>
                ) : (
                  result.rows.map((r) => (
                    <tr key={r.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-2.5">{r.label}</td>
                      <td className="px-4 py-2.5 text-muted">
                        {money(r.cpmLow, sym, loc)}–{money(r.cpmHigh, sym, loc)}
                      </td>
                      <td className="px-4 py-2.5 text-right font-medium">
                        {money(r.valueLow, sym, loc)}–{money(r.valueHigh, sym, loc)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Reality check */}
          <div className="mt-6 rounded-xl border border-accent/30 bg-accent/[0.06] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Reality check · {tier.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground">{tier.verdict}</p>
          </div>

          <p className="mt-5 text-xs leading-5 text-muted">{ESTIMATE_CAVEAT}</p>
        </div>
      </div>

      {/* ---------------- Reverse calculator ---------------- */}
      <div className="rounded-2xl border border-accent/40 bg-deep p-6 text-background sm:p-8">
        <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Work backwards from what you want to earn
        </h2>
        <div className="mt-5 flex flex-wrap items-end gap-4">
          <div className="min-w-[14rem] flex-1">
            <label
              className="block text-sm font-medium text-background/85"
              htmlFor="sp-target"
            >
              I&apos;d like to earn, per month
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 mt-[1px] -translate-y-1/2 text-background/60">
                {sym}
              </span>
              <input
                id="sp-target"
                className="mt-1.5 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-2.5 pl-8 text-base text-background outline-none placeholder:text-background/40 focus:border-accent"
                type="number"
                inputMode="numeric"
                min={0}
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6" aria-live="polite">
          {result.neededAtHighCpm === null || result.rows.length === 0 ? (
            <p className="text-sm text-background/70">
              Select at least one ad slot to work this out.
            </p>
          ) : (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-background/50">
                Downloads per episode you&apos;d need
              </p>
              <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {Math.ceil(result.neededAtHighCpm).toLocaleString(loc)}–
                {Math.ceil(result.neededAtLowCpm ?? 0).toLocaleString(loc)}
              </p>
              <p className="mt-2 text-sm leading-6 text-background/70">
                At {slotCount} slot{slotCount === "1" ? "" : "s"} per episode and{" "}
                {num(episodes, 500)} episodes a month, in the{" "}
                {category.label.toLowerCase()} band. The lower figure assumes you
                sell at the top of the CPM range; the higher one assumes the
                bottom.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Button href="/contact?source=sponsorship-calculator">Get a quote</Button>
        <Link
          href="/blog/how-to-get-podcast-sponsors"
          className="text-sm font-medium text-accent hover:text-accent-bright"
        >
          New to sponsorship? Read the full guide →
        </Link>
      </div>
    </div>
  );
}
