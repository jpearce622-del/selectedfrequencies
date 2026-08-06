import type { CheckResult, Report, Severity, Status } from "@/lib/feed-checker/types";
import { CATEGORIES } from "@/lib/feed-checker/types";

/**
 * Renders a finished report.
 *
 * Deliberately free of hooks so the same component serves the live result in
 * the client flow and the server-rendered permalink page. Collapsing uses
 * <details>, which means the shared page needs no JavaScript at all to be
 * fully readable — including by whatever crawler follows a shared link.
 */

const STATUS_STYLE: Record<
  Status,
  { dot: string; label: string; chip: string }
> = {
  fail: {
    dot: "bg-red-500",
    label: "Failed",
    chip: "bg-red-50 text-red-700 ring-red-600/10",
  },
  warn: {
    dot: "bg-amber-500",
    label: "Worth fixing",
    chip: "bg-amber-50 text-amber-800 ring-amber-600/10",
  },
  pass: {
    dot: "bg-emerald-500",
    label: "Passed",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  },
  not_applicable: {
    dot: "bg-border",
    label: "Not checked",
    chip: "bg-fog text-muted ring-black/5",
  },
};

const SEVERITY_LABEL: Record<Severity, string> = {
  critical: "Can get you rejected",
  warning: "Worth fixing",
  info: "Nice to have",
};

/** Fails before warns, and within each, critical before info. */
const SEVERITY_RANK: Record<Severity, number> = {
  critical: 0,
  warning: 1,
  info: 2,
};

function gradeTone(grade: string): string {
  if (grade === "A" || grade === "B") return "text-emerald-600";
  if (grade === "C" || grade === "D") return "text-amber-600";
  return "text-red-600";
}

function ringTone(score: number): string {
  if (score >= 80) return "stroke-emerald-500";
  if (score >= 60) return "stroke-amber-500";
  return "stroke-red-500";
}

function formatBytes(bytes: number): string {
  if (bytes <= 0) return "—";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ScoreRing({ score, grade }: { score: number; grade: string }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const filled = (Math.max(0, Math.min(100, score)) / 100) * circumference;

  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          className="stroke-border"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference - filled}`}
          className={ringTone(score)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-semibold tracking-tight tabular-nums">
          {score}
        </span>
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${gradeTone(grade)}`}
        >
          Grade {grade}
        </span>
      </div>
    </div>
  );
}

/** A finding, shown open. The fix is the point of the tool, so it's never hidden. */
function IssueCard({
  result,
  /** Additive-only findings are framed as upgrades, not faults. */
  optional = false,
}: {
  result: CheckResult;
  optional?: boolean;
}) {
  const style = STATUS_STYLE[result.status];

  return (
    <li className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${
            optional ? "bg-accent/10 text-accent ring-accent/15" : style.chip
          }`}
        >
          {optional
            ? "Optional"
            : result.status === "fail"
              ? SEVERITY_LABEL[result.severity]
              : style.label}
        </span>
        <span className="text-xs text-muted">
          {CATEGORIES[result.category].label}
        </span>
      </div>

      <h4 className="font-display mt-3 text-base font-semibold tracking-tight">
        {result.title}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {result.detail}
      </p>

      {result.fix && (
        <div className="mt-4 rounded-xl bg-fog p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {optional ? "What it gives you" : "How to fix it"}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground">
            {result.fix}
          </p>
        </div>
      )}

      {result.evidence && result.evidence.length > 0 && (
        <details className="mt-3 group">
          <summary className="cursor-pointer list-none text-xs font-medium text-muted hover:text-foreground">
            <span className="group-open:hidden">
              Show the {result.evidence.length} affected{" "}
              {result.evidence.length === 1 ? "item" : "items"} ↓
            </span>
            <span className="hidden group-open:inline">Hide details ↑</span>
          </summary>
          <ul className="mt-2 space-y-1 border-l border-border pl-3">
            {result.evidence.map((line, i) => (
              <li
                key={`${line}-${i}`}
                className="break-words font-mono text-xs leading-relaxed text-muted"
              >
                {line}
              </li>
            ))}
          </ul>
        </details>
      )}

      {result.docsUrl && (
        <a
          href={result.docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs font-medium text-accent hover:text-accent-bright"
        >
          Read the official guidance →
        </a>
      )}
    </li>
  );
}

/** Compact one-line row, used inside the collapsed per-category lists. */
function ResultRow({ result }: { result: CheckResult }) {
  const style = STATUS_STYLE[result.status];

  return (
    <li className="flex items-start gap-3 border-t border-border py-2.5 first:border-t-0">
      <span
        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${style.dot}`}
        aria-hidden
      />
      <div className="min-w-0">
        <p className="text-sm font-medium">{result.title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted">
          {result.detail}
        </p>
      </div>
    </li>
  );
}

export function ReportView({ report }: { report: Report }) {
  const all = report.categories.flatMap((c) => c.results);

  const byWorstFirst = (a: CheckResult, b: CheckResult) => {
    if (a.status !== b.status) return a.status === "fail" ? -1 : 1;
    return SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity];
  };

  const unresolved = all.filter(
    (r) => r.status === "fail" || r.status === "warn"
  );

  // Podcasting 2.0 findings are split out rather than listed alongside the
  // rest. They score additively — nothing there can fail — so putting "no
  // funding link" in the same list as a broken enclosure would misrepresent
  // both, and would contradict the tool's own framing of that section.
  const issues = unresolved
    .filter((r) => !CATEGORIES[r.category].additiveOnly)
    .sort(byWorstFirst);

  const opportunities = unresolved
    .filter((r) => CATEGORIES[r.category].additiveOnly)
    .sort(byWorstFirst);

  const warnCount = issues.filter((r) => r.status === "warn").length;

  const checkedAt = new Date(report.checkedAt);

  return (
    <div className="space-y-10">
      {/* ── Score header ─────────────────────────────────────────── */}
      <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <ScoreRing score={report.score} grade={report.grade} />

          <div className="min-w-0 flex-1">
            {report.meta.title && (
              <h2 className="font-display truncate text-xl font-semibold tracking-tight sm:text-2xl">
                {report.meta.title}
              </h2>
            )}
            <p className="mt-1.5 text-base leading-relaxed text-foreground">
              {report.verdict}
            </p>
            <p className="mt-2 break-all text-xs text-muted">
              {report.finalUrl}
            </p>
          </div>
        </div>

        {/* Counts */}
        <div className="mt-6 grid grid-cols-4 gap-3 border-t border-border pt-6">
          {[
            {
              value: report.criticalCount,
              label: "Critical",
              tone: report.criticalCount > 0 ? "text-red-600" : "text-muted",
            },
            // Derived from the lists below rather than read off the report,
            // so a cached report written before these fields existed still
            // renders a number instead of a blank.
            {
              value: warnCount,
              label: "Worth fixing",
              tone: warnCount > 0 ? "text-amber-600" : "text-muted",
            },
            {
              value: opportunities.length,
              label: "Optional",
              tone: opportunities.length > 0 ? "text-accent" : "text-muted",
            },
            {
              value: report.passCount,
              label: "Passed",
              tone: "text-emerald-600",
            },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className={`font-display text-2xl font-semibold tabular-nums ${stat.tone}`}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feed facts */}
        <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-6 text-xs sm:grid-cols-4">
          {[
            ["Episodes", report.meta.episodeCount.toLocaleString("en-GB")],
            [
              "Audio sampled",
              report.meta.sampledCount > 0
                ? `${report.meta.sampledCount} files`
                : "—",
            ],
            ["Feed size", formatBytes(report.meta.feedBytes)],
            ["Response time", `${(report.meta.responseMs / 1000).toFixed(1)}s`],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-muted">{label}</dt>
              <dd className="mt-0.5 font-medium tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-xs text-muted">
          Checked{" "}
          <time dateTime={report.checkedAt}>
            {checkedAt.toLocaleString("en-GB", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </time>
        </p>
      </div>

      {/* ── Findings ─────────────────────────────────────────────── */}
      {issues.length > 0 ? (
        <section>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            What to fix
          </h3>
          <p className="mt-1.5 text-sm text-muted">
            Ordered worst first. Anything marked{" "}
            <span className="font-medium text-red-600">
              can get you rejected
            </span>{" "}
            is worth doing before you submit the feed anywhere new.
          </p>
          <ul className="mt-6 space-y-4">
            {issues.map((result) => (
              <IssueCard key={result.id} result={result} />
            ))}
          </ul>
        </section>
      ) : (
        <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold tracking-tight text-emerald-900">
            Nothing to fix
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-emerald-800">
            Every requirement passed. That is genuinely rare — most feeds carry
            at least one warning. Re-run this after any host migration or feed
            change, since those are where problems usually appear.
          </p>
        </section>
      )}

      {/* ── Additive-only findings ───────────────────────────────── */}
      {opportunities.length > 0 && (
        <section>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Optional upgrades
          </h3>
          <p className="mt-1.5 text-sm text-muted">
            Podcasting 2.0 tags. No platform requires any of these, so none of
            them counts against you — adding them can only push the score up.
          </p>
          <ul className="mt-6 space-y-4">
            {opportunities.map((result) => (
              <IssueCard key={result.id} result={result} optional />
            ))}
          </ul>
        </section>
      )}

      {/* ── Full results, collapsed ──────────────────────────────── */}
      <section>
        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Everything we checked
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          {all.length} checks across {report.categories.length} areas. Passing
          checks are collapsed — open a section to see the detail.
        </p>

        <div className="mt-6 space-y-3">
          {report.categories.map((category) => {
            const failed = category.results.filter(
              (r) => r.status === "fail"
            ).length;
            const warned = category.results.filter(
              (r) => r.status === "warn"
            ).length;

            return (
              <details
                key={category.id}
                className="group rounded-2xl border border-border bg-surface"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-base font-semibold tracking-tight">
                        {category.label}
                      </h4>
                      {failed > 0 && (
                        <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-inset ring-red-600/10">
                          {failed} failed
                        </span>
                      )}
                      {warned > 0 && (
                        <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-600/10">
                          {warned} to fix
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {CATEGORIES[category.id].blurb}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-display text-lg font-semibold tabular-nums text-muted">
                      {category.score}
                    </span>
                    <span
                      className="text-muted transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      ↓
                    </span>
                  </div>
                </summary>
                <ul className="border-t border-border px-5 pb-4 pt-1">
                  {category.results.map((result) => (
                    <ResultRow key={result.id} result={result} />
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
