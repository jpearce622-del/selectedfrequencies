/**
 * Competitor comparison pages under /compare/[slug].
 *
 * Two kinds share one template:
 *
 *   "alternative"  — us versus one named competitor. The reader has that
 *                    competitor on their shortlist and is looking for another
 *                    option.
 *   "head-to-head" — competitor A versus competitor B, neither of which is
 *                    us. We win the query by being the most useful page on
 *                    it, and offer ourselves as a third option at the END.
 *                    Crowbarring ourselves into the top of a head-to-head is
 *                    exactly what makes these pages untrustworthy.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * WHY THIS TYPE IS SHAPED THE WAY IT IS
 *
 * Comparative advertising is lawful in the UK/EU only under conditions
 * (Business Protection from Misleading Marketing Regulations 2008, reg. 4):
 * compare like with like, compare objective and verifiable features, never
 * mislead, never denigrate, never create confusion, never imply affiliation.
 *
 * The type enforces what a type can enforce, and lib/comparison-pages.ts
 * asserts the rest at build time. Specifically:
 *
 *   - `competitors[].sources` is REQUIRED and non-empty. Every factual claim
 *     about a competitor must be traceable to their own public material, so
 *     a page cannot exist without cited sources.
 *   - `verifiedOn` is REQUIRED and renders visibly. A dated, correctable
 *     comparison is both good faith and a real defence.
 *   - `competitorWins` is REQUIRED, and the guard rejects a token entry.
 *     A page with no honest concession is marketing, converts worse, and is
 *     harder to defend as fair.
 *   - There is deliberately NO field for a competitor logo or image. Naming
 *     a competitor to make an honest comparison is permitted; using their
 *     trademark as decoration is not. Don't add one.
 *   - `comparisonRows` take "Not published" as a legitimate value, because
 *     inventing a competitor's price or turnaround is the single easiest way
 *     to turn this page into a legal problem.
 */

/** Which template shape a page uses. */
export type ComparisonKind = "alternative" | "head-to-head";

/**
 * A citation for factual claims about a competitor.
 *
 * `url` must be the competitor's own site or a public statement by them —
 * not a third-party listicle, which is where most wrong "facts" about
 * agencies originate.
 */
export interface ComparisonSource {
  label: string;
  url: string;
  /** ISO date the page was actually read, e.g. "2026-08-12". */
  checkedOn: string;
}

/**
 * A company being compared. Us included, on head-to-head pages, as the
 * third option.
 */
export interface ComparisonCompany {
  /** Exactly as they write it. Never a stylised or altered form. */
  name: string;
  /** Their own site. Rendered rel="nofollow" — we're citing, not endorsing. */
  url: string;
  /** Their stated positioning, in our words or briefly quoted with attribution. */
  positioning: string;
  /** What they are genuinely best at. Must be a real strength, not faint praise. */
  strength: string;
  /**
   * A structural trade-off inherent to how they work — NOT a flaw, and never
   * phrased as a criticism of their quality or their people. "They bundle
   * strategy you may not need" is fair. "They're overpriced" is not.
   */
  tradeOff: string;
  sources: ComparisonSource[];
}

/**
 * One row of the objective comparison table.
 *
 * Values must be verifiable facts (pricing model, scope, commitment, sectors)
 * rather than judgements. Use "Not published" — not a guess, not "typically
 * around" — where a company doesn't disclose something.
 */
export interface ComparisonRow {
  /** e.g. "Pricing model", "Minimum commitment", "Guest booking" */
  label: string;
  /** One value per company, in the same order as `companies`. */
  values: string[];
}

export interface ComparisonScenario {
  /** A concrete buyer situation, e.g. "You have 40 episodes and no producer" */
  situation: string;
  /** The company we'd actually recommend — may well not be us. */
  recommendation: string;
  why: string;
}

export interface ComparisonFaq {
  question: string;
  /** Plain text. Rendered visibly AND emitted as FAQPage schema from one source. */
  answer: string;
}

export interface ComparisonPage {
  slug: string;
  kind: ComparisonKind;
  /** The one query this page is for. Unique across all comparison pages. */
  primaryKeyword: string;
  supportingKeywords: string[];
  seo: {
    /** ≤36 chars: the brand suffix is 23 and the limit is 60. */
    title: string;
    /** ≤155 chars. Should signal fairness — that's what earns the click here. */
    metaDescription: string;
  };
  h1: string;
  /** The direct answer, rendered in the first 100 words. No throat-clearing. */
  answerFirst: string;
  /**
   * The "this is our page" line. Required, rendered prominently near the top,
   * never in the footer. Rule: the reader must know whose site they're on
   * before they read the comparison, not after.
   */
  disclosure: string;
  /** Companies compared, in table-column order. */
  companies: ComparisonCompany[];
  comparisonRows: ComparisonRow[];
  /**
   * Where the competitor genuinely wins, placed BEFORE our case and written
   * to actually persuade. On head-to-head pages this covers both companies.
   */
  competitorWins: { heading: string; body: string[] };
  /** Our case. Specific, evidenced, tied to real case studies. */
  ourCase: { heading: string; body: string[] };
  scenarios: ComparisonScenario[];
  /** Useful regardless of who the reader picks. This is what earns links. */
  checklist: { heading: string; intro: string; items: string[] };
  faqs: ComparisonFaq[];
  /** ISO date the competitor research was verified. Rendered visibly. */
  verifiedOn: string;
  internalLinks: {
    servicePageSlugs: string[];
    blogSlugs: string[];
    caseStudySlugs: string[];
    /** Other comparison pages, for cross-linking. */
    comparisonSlugs?: string[];
  };
  cta: { heading: string; body: string; buttonLabel: string };
  formTag: string;
}
