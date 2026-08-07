"use client";

import { useId, useMemo, useState } from "react";

/**
 * Five-stage funnel visualiser. The reader types their own numbers and sees
 * which transition is losing disproportionately.
 *
 * On benchmarks: there is no published, standardised industry dataset for this
 * particular funnel, because the five figures come from three different
 * platforms that each define and window their metrics differently. Rather than
 * invent authoritative-sounding bands, each transition carries a plainly
 * labelled rule of thumb — our working judgement, described as such in the UI.
 * A reader can disagree with a heuristic; they can't argue with a fabricated
 * statistic they have no way to check.
 *
 * TODO: verify stat — if a defensible public dataset for any of these
 * transitions appears, replace the corresponding heuristic with the real
 * figure and cite it inline.
 *
 * Built with CSS widths and plain markup. No charting library, by design.
 */

interface Stage {
  key: string;
  label: string;
  /** Where this number is found, for the "I don't have these" panel. */
  source: string;
  placeholder: string;
}

const STAGES: Stage[] = [
  {
    key: "impressions",
    label: "Impressions",
    source:
      "YouTube Studio → Content → Impressions. On audio platforms the nearest equivalent is Spotify for Podcasters → Audience → Impressions, where available.",
    placeholder: "12000",
  },
  {
    key: "views",
    label: "Episode page views",
    source:
      "Apple Podcasts Connect → Trends → Show page views. Spotify for Podcasters reports this under Episode performance.",
    placeholder: "1800",
  },
  {
    key: "plays",
    label: "Plays started",
    source:
      "Apple Podcasts Connect → Plays. Spotify for Podcasters → Plays. YouTube Studio counts a view rather than a play, so the two aren't directly comparable — keep them separate rather than adding them together.",
    placeholder: "620",
  },
  {
    key: "fiveMin",
    label: "Reached 5 minutes",
    source:
      "Apple Podcasts Connect → Consumption, or Spotify for Podcasters → Episode performance, which shows a retention curve you can read a five-minute figure off. YouTube Studio gives this in the audience-retention graph.",
    placeholder: "410",
  },
  {
    key: "followed",
    label: "Followed or subscribed",
    source:
      "Apple Podcasts Connect → Followers, Spotify for Podcasters → Followers, YouTube Studio → Subscribers. These are net figures, so a month with churn can read as zero growth even when people did subscribe.",
    placeholder: "24",
  },
];

interface Transition {
  from: string;
  to: string;
  /** Plainly-labelled rule of thumb, not a published statistic. */
  heuristic: string;
  /** Below this, we call it out. Our judgement, described as such. */
  watchBelow: number;
  /** One-line diagnosis, mapped to the article's layers. */
  diagnosis: string;
  layer: string;
}

const TRANSITIONS: Transition[] = [
  {
    from: "Impressions",
    to: "Episode page views",
    heuristic: "A small single-digit percentage is normal here.",
    watchBelow: 2,
    diagnosis:
      "People are seeing the show and not clicking. That is artwork and title work — the two things doing the persuading at this point.",
    layer: "Packaging",
  },
  {
    from: "Episode page views",
    to: "Plays started",
    heuristic:
      "This should be the healthiest step in the funnel. Someone on the page has already chosen you once.",
    watchBelow: 25,
    diagnosis:
      "People are arriving at the page and leaving without playing. Look at the first line of your description, whether a trailer exists, and whether a newcomer can tell where to start.",
    layer: "Packaging",
  },
  {
    from: "Plays started",
    to: "Reached 5 minutes",
    heuristic:
      "Most of the people who press play should still be there at five minutes. This is the step that most clearly separates shows that grow from shows that don't.",
    watchBelow: 55,
    diagnosis:
      "People are pressing play and leaving early. That is almost always the opening — music, sponsor reads and greetings spending the ninety seconds that decide the episode.",
    layer: "Retention",
  },
  {
    from: "Reached 5 minutes",
    to: "Followed or subscribed",
    heuristic:
      "Always the smallest number by a wide margin. Following is a bigger commitment than listening, and most people never make it.",
    watchBelow: 2,
    diagnosis:
      "People are listening through and not coming back. There is nothing pulling them to the next episode: no recurring segment, no forward hook, no reason to expect anything in particular next week.",
    layer: "Consistency",
  },
];

const pct = (a: number, b: number) => (b > 0 ? (a / b) * 100 : 0);
const fmt = (n: number) =>
  n >= 10 ? n.toFixed(0) : n >= 1 ? n.toFixed(1) : n.toFixed(2);

export default function DiscoveryLeak() {
  const [raw, setRaw] = useState<Record<string, string>>({});
  const [showHelp, setShowHelp] = useState(false);
  const helpId = useId();

  /**
   * Clamp on the way out rather than rewriting what someone typed. A stage can
   * never exceed the one above it, so an out-of-order entry is corrected for
   * the maths and flagged, instead of the input fighting the keyboard
   * mid-number.
   */
  const { values, clamped } = useMemo(() => {
    const out: number[] = [];
    let clampedAny = false;
    let ceiling = Number.POSITIVE_INFINITY;
    for (const stage of STAGES) {
      const parsed = Number(raw[stage.key]);
      const n =
        raw[stage.key] === undefined ||
        raw[stage.key] === "" ||
        !Number.isFinite(parsed) ||
        parsed < 0
          ? NaN
          : Math.floor(parsed);
      if (Number.isNaN(n)) {
        out.push(NaN);
        continue;
      }
      const limited = Math.min(n, ceiling);
      if (limited !== n) clampedAny = true;
      out.push(limited);
      ceiling = limited;
    }
    return { values: out, clamped: clampedAny };
  }, [raw]);

  const complete = values.every((v) => !Number.isNaN(v));
  const top = values[0];
  const barBase = complete && top > 0 ? top : NaN;

  const rates = useMemo(
    () =>
      TRANSITIONS.map((t, i) => {
        const from = values[i];
        const to = values[i + 1];
        const rate =
          Number.isNaN(from) || Number.isNaN(to) ? NaN : pct(to, from);
        return { ...t, rate, index: i };
      }),
    [values]
  );

  /**
   * The worst transition is the one furthest below its own rule of thumb, not
   * simply the lowest percentage. Comparing a follow rate against a play rate
   * would flag the follow step every single time and tell nobody anything.
   */
  const worst = useMemo(() => {
    const scored = rates
      .filter((r) => !Number.isNaN(r.rate))
      .map((r) => ({ ...r, shortfall: r.rate / r.watchBelow }))
      .sort((a, b) => a.shortfall - b.shortfall);
    const candidate = scored[0];
    return candidate && candidate.shortfall < 1 ? candidate : null;
  }, [rates]);

  const noisy = complete && top > 0 && top < 1000;

  return (
    <div className="not-prose my-10 rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Where does it leak?
      </p>
      <h3 className="font-display mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
        Your funnel, one episode at a time
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Take a single recent episode and fill in what you can. Every stage is
        capped by the one above it, because nobody plays an episode they never
        found.
      </p>

      {/* ── Inputs ─────────────────────────────────────────────── */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STAGES.map((stage, i) => (
          <div key={stage.key}>
            <label
              htmlFor={`dl-${stage.key}`}
              className="block text-xs font-medium text-muted"
            >
              {i + 1}. {stage.label}
            </label>
            <input
              id={`dl-${stage.key}`}
              type="number"
              min={0}
              inputMode="numeric"
              placeholder={stage.placeholder}
              value={raw[stage.key] ?? ""}
              onChange={(e) =>
                setRaw((r) => ({ ...r, [stage.key]: e.target.value }))
              }
              className="mt-1.5 min-h-[44px] w-full rounded-xl border border-border bg-background px-3 text-sm tabular-nums outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
            />
          </div>
        ))}
      </div>

      {clamped && (
        <p className="mt-3 text-xs leading-relaxed text-muted">
          One or more figures were higher than the stage above them, so they
          have been capped for the calculation. If those numbers are right, they
          are probably measured over different date ranges or on different
          platforms — worth checking before you read anything into the result.
        </p>
      )}

      <button
        type="button"
        onClick={() => setShowHelp((v) => !v)}
        aria-expanded={showHelp}
        aria-controls={helpId}
        className="mt-4 min-h-[44px] text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-bright"
      >
        I don&rsquo;t have these numbers
      </button>

      {showHelp && (
        <div id={helpId} className="mt-3 rounded-2xl bg-fog p-5">
          <p className="text-sm leading-relaxed text-foreground">
            If you cannot fill this in, that is the most useful thing this tool
            will tell you today. Not being able to see your own funnel is the
            measurement problem described further down the article, and it means
            every decision about the show is currently being made on a single
            number that cannot distinguish stagnation from churn.
          </p>
          <dl className="mt-4 space-y-3">
            {STAGES.map((stage) => (
              <div key={stage.key}>
                <dt className="text-sm font-medium">{stage.label}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-muted">
                  {stage.source}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {/* ── Funnel ─────────────────────────────────────────────── */}
      <div className="mt-8">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
          The funnel
        </h4>
        <ul className="mt-4 space-y-1">
          {STAGES.map((stage, i) => {
            const v = values[i];
            const width =
              Number.isNaN(v) || Number.isNaN(barBase) || barBase === 0
                ? 0
                : Math.max((v / barBase) * 100, v > 0 ? 1.5 : 0);
            const isWorstTarget = worst?.index === i - 1;
            return (
              <li key={stage.key}>
                <div className="flex items-center gap-3">
                  <span className="w-36 shrink-0 text-xs text-muted sm:w-44">
                    {stage.label}
                  </span>
                  <div className="h-8 flex-1 overflow-hidden rounded-lg bg-fog">
                    <div
                      className={`flex h-full items-center justify-end rounded-lg px-2 transition-[width] duration-500 ease-out motion-reduce:transition-none ${
                        isWorstTarget ? "bg-accent" : "bg-deep/70"
                      }`}
                      style={{ width: `${width}%` }}
                    >
                      {!Number.isNaN(v) && width > 12 && (
                        <span className="text-xs font-medium tabular-nums text-background">
                          {v.toLocaleString("en-GB")}
                        </span>
                      )}
                    </div>
                  </div>
                  {!Number.isNaN(v) && width <= 12 && (
                    <span className="w-14 shrink-0 text-right text-xs tabular-nums text-muted">
                      {v.toLocaleString("en-GB")}
                    </span>
                  )}
                </div>

                {/* Conversion to the next stage */}
                {i < TRANSITIONS.length && (
                  <div className="flex items-start gap-3 py-1.5">
                    <span className="w-36 shrink-0 sm:w-44" />
                    <p className="flex-1 text-xs leading-relaxed text-muted">
                      <span aria-hidden className="mr-1.5 text-border">
                        ↓
                      </span>
                      {Number.isNaN(rates[i].rate) ? (
                        <span className="text-muted/70">
                          Add both figures to see this conversion
                        </span>
                      ) : (
                        <>
                          <span className="font-medium tabular-nums text-foreground">
                            {fmt(rates[i].rate)}%
                          </span>{" "}
                          continue.{" "}
                          <span className="text-muted/80">
                            Rule of thumb: {rates[i].heuristic}
                          </span>
                          {worst?.index === i && (
                            <span className="ml-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[0.7rem] font-semibold text-accent">
                              Biggest leak
                            </span>
                          )}
                        </>
                      )}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Accessible data summary. Visible, not screen-reader only:
             a table of the same figures is genuinely easier to read than
             bars for anyone comparing exact numbers. ─────────────── */}
      {complete && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              Funnel figures and the conversion rate between each stage
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  Stage
                </th>
                <th scope="col" className="py-2 pr-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  Count
                </th>
                <th scope="col" className="py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  From previous
                </th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((stage, i) => (
                <tr key={stage.key} className="border-b border-border/60">
                  <th scope="row" className="py-2 pr-4 font-normal">
                    {stage.label}
                  </th>
                  <td className="py-2 pr-4 tabular-nums">
                    {values[i].toLocaleString("en-GB")}
                  </td>
                  <td className="py-2 tabular-nums text-muted">
                    {i === 0 ? "—" : `${fmt(rates[i - 1].rate)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Diagnosis ──────────────────────────────────────────── */}
      {complete && (
        <div className="mt-6 rounded-2xl bg-fog p-5">
          {worst ? (
            <>
              <p className="text-sm font-semibold">
                Biggest leak: {worst.from} → {worst.to}{" "}
                <span className="font-normal text-muted">
                  ({worst.layer})
                </span>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {worst.diagnosis}
              </p>
            </>
          ) : (
            <p className="text-sm leading-relaxed text-muted">
              No stage stands out as leaking against these rules of thumb. If
              the show still isn&rsquo;t growing, the constraint is upstream of
              this funnel: not enough people are entering it at all, which is a
              discovery problem rather than a conversion one.
            </p>
          )}
          {noisy && (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              A note on sample size: with fewer than about a thousand
              impressions, these percentages swing a long way on a handful of
              people. Treat the shape as indicative and re-run it on a few
              episodes before acting.
            </p>
          )}
          <p className="mt-3 text-xs leading-relaxed text-muted">
            The rules of thumb above are our working judgement from producing
            shows, not published industry figures. There is no standardised
            public dataset for this funnel — the five numbers come from three
            platforms that each define and window their metrics differently. Use
            them to find the disproportionate step, not as a grade.
          </p>
        </div>
      )}
    </div>
  );
}
