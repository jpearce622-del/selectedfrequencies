import type { ComparisonPage } from "@/types/comparison-page";
import { comparisonPages } from "@/content/comparison-pages";

const BRAND_SUFFIX_LENGTH = " | Selected Frequencies".length;

/**
 * Build-time guards for competitor comparison pages.
 *
 * These pages name other companies, so the failure modes are worse than a
 * duplicate keyword — an unsourced claim or a missing disclosure is a legal
 * and reputational problem, not an SEO one. Everything that can be checked
 * mechanically is checked here, on import, so a bad page fails the build
 * rather than reaching a reader.
 *
 * What is deliberately NOT automated: whether a concession is *genuine*, and
 * whether a comparison is *fair*. No assertion can judge that. The guards
 * catch a missing concession and a suspiciously short one; a human still has
 * to read the page.
 */
function assertComparisonPagesAreSound(pages: ComparisonPage[]): void {
  const problems: string[] = [];
  const seenSlug = new Set<string>();
  const seenPrimary = new Map<string, string>();
  const seenQuestion = new Map<string, string>();
  const seenTag = new Map<string, string>();

  const normalise = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
  const isIsoDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s);

  for (const page of pages) {
    const at = (msg: string) => problems.push(`${page.slug}: ${msg}`);

    if (seenSlug.has(page.slug)) at("duplicate slug");
    seenSlug.add(page.slug);

    const primary = normalise(page.primaryKeyword);
    const primaryOwner = seenPrimary.get(primary);
    if (primaryOwner) at(`primary keyword "${page.primaryKeyword}" also on ${primaryOwner}`);
    seenPrimary.set(primary, page.slug);

    const tag = normalise(page.formTag);
    const tagOwner = seenTag.get(tag);
    if (tagOwner) at(`formTag "${page.formTag}" also on ${tagOwner}`);
    seenTag.set(tag, page.slug);

    // --- Metadata limits -------------------------------------------------
    const titleLength = page.seo.title.length + BRAND_SUFFIX_LENGTH;
    if (titleLength >= 60)
      at(`meta title is ${titleLength} chars with the brand suffix (limit 59)`);
    if (page.seo.metaDescription.length > 155)
      at(`meta description is ${page.seo.metaDescription.length} chars (limit 155)`);

    const inH1 = normalise(page.h1).includes(primary);
    const inDesc = normalise(page.seo.metaDescription).includes(primary);
    if (!inH1 && !inDesc)
      at(`primary keyword "${page.primaryKeyword}" appears in neither the H1 nor the meta description`);

    // --- The rules that exist for legal reasons --------------------------
    if (!isIsoDate(page.verifiedOn))
      at(`verifiedOn must be an ISO date (got "${page.verifiedOn}") — it renders visibly and is the good-faith record`);

    if (page.disclosure.trim().length < 40)
      at("disclosure is missing or too short — the reader must know this is our page before they read the comparison");

    if (!page.companies.length) at("no companies listed");

    for (const c of page.companies) {
      if (!c.sources.length)
        at(`"${c.name}" has no sources — every factual claim about a company must cite that company's own public material`);
      for (const s of c.sources) {
        if (!/^https?:\/\//.test(s.url))
          at(`"${c.name}" source "${s.label}" is not an absolute URL`);
        if (!isIsoDate(s.checkedOn))
          at(`"${c.name}" source "${s.label}" has no valid checkedOn date`);
      }
      if (c.tradeOff.trim().length < 30)
        at(`"${c.name}" trade-off is too short to be a fair characterisation`);
      if (!c.strength.trim())
        at(`"${c.name}" has no stated strength — every company compared must be credited with what it is genuinely good at`);
    }

    // A concession that isn't a real one is the failure mode this page type
    // invites. Length is a crude proxy, but it catches the token version.
    const concession = page.competitorWins.body.join(" ").trim();
    if (concession.length < 300)
      at("the 'where they win' section is too short to be a genuine concession");

    // --- Table integrity --------------------------------------------------
    for (const row of page.comparisonRows) {
      if (row.values.length !== page.companies.length)
        at(`comparison row "${row.label}" has ${row.values.length} values for ${page.companies.length} companies`);
    }

    // --- FAQs -------------------------------------------------------------
    for (const faq of page.faqs) {
      const q = normalise(faq.question);
      const owner = seenQuestion.get(q);
      if (owner) at(`FAQ "${faq.question}" also appears on ${owner}`);
      seenQuestion.set(q, page.slug);
    }

    // --- Head-to-head specific -------------------------------------------
    // We may appear as a third option, but never as the first column: the
    // page has to be genuinely about the two companies the reader searched.
    if (page.kind === "head-to-head") {
      if (page.companies.length < 2) at("a head-to-head needs at least two companies");
      if (/selected frequencies/i.test(page.companies[0]?.name ?? ""))
        at("we are the first column of a head-to-head — the reader searched for two other companies, and leading with ourselves is what makes these pages untrustworthy");
    }
  }

  if (problems.length) {
    throw new Error(
      `Comparison page problems:\n  - ${problems.join("\n  - ")}\n` +
        `These pages name other companies. Fix rather than bypass.`
    );
  }
}

/**
 * No placeholder may render. Same principle as the service pages: a visible
 * "[TK: verify ...]" on a page that names a competitor is worse than useless.
 */
function assertNoVisibleTk(pages: ComparisonPage[]): void {
  const hits: string[] = [];
  const scan = (slug: string, where: string, value: string) => {
    if (/\[TK[:\]]/i.test(value)) hits.push(`${slug} → ${where}`);
  };
  for (const p of pages) {
    scan(p.slug, "h1", p.h1);
    scan(p.slug, "answerFirst", p.answerFirst);
    scan(p.slug, "disclosure", p.disclosure);
    scan(p.slug, "seo.metaDescription", p.seo.metaDescription);
    p.companies.forEach((c) => {
      scan(p.slug, `companies.${c.name}.positioning`, c.positioning);
      scan(p.slug, `companies.${c.name}.strength`, c.strength);
      scan(p.slug, `companies.${c.name}.tradeOff`, c.tradeOff);
    });
    p.comparisonRows.forEach((r) =>
      r.values.forEach((v) => scan(p.slug, `table.${r.label}`, v))
    );
    p.competitorWins.body.forEach((b) => scan(p.slug, "competitorWins", b));
    p.ourCase.body.forEach((b) => scan(p.slug, "ourCase", b));
    p.scenarios.forEach((s) => scan(p.slug, "scenarios", `${s.situation} ${s.why}`));
    p.checklist.items.forEach((i) => scan(p.slug, "checklist", i));
    p.faqs.forEach((f) => scan(p.slug, "faqs", `${f.question} ${f.answer}`));
  }
  if (hits.length) {
    throw new Error(
      `Unresolved [TK] markers would render to visitors:\n  - ${hits.join("\n  - ")}\n` +
        `Move them into a code comment — an unverified claim must be absent from the page, not shown to the reader.`
    );
  }
}

/** Internal links must resolve, same as the service pages. */
function assertInternalLinksResolve(pages: ComparisonPage[]): void {
  const {
    getCaseStudyBySlug,
  } = require("@/lib/case-studies") as typeof import("@/lib/case-studies");
  const { getPostBySlug } = require("@/lib/blog") as typeof import("@/lib/blog");
  const {
    getServicePageBySlug,
  } = require("@/lib/service-pages") as typeof import("@/lib/service-pages");

  const problems: string[] = [];
  const slugs = new Set(pages.map((p) => p.slug));

  for (const page of pages) {
    for (const s of page.internalLinks.servicePageSlugs)
      if (!getServicePageBySlug(s)) problems.push(`${page.slug}: no service page "${s}"`);
    for (const s of page.internalLinks.blogSlugs)
      if (!getPostBySlug(s)) problems.push(`${page.slug}: no blog post "${s}"`);
    for (const s of page.internalLinks.caseStudySlugs)
      if (!getCaseStudyBySlug(s)) problems.push(`${page.slug}: no case study "${s}"`);
    for (const s of page.internalLinks.comparisonSlugs ?? []) {
      if (!slugs.has(s)) problems.push(`${page.slug}: no comparison page "${s}"`);
      if (s === page.slug) problems.push(`${page.slug}: links to itself`);
    }
    if (page.internalLinks.servicePageSlugs.length < 3)
      problems.push(
        `${page.slug}: only ${page.internalLinks.servicePageSlugs.length} service links (needs 3)`
      );
  }

  if (problems.length)
    throw new Error(
      `Comparison page internal link does not resolve:\n  - ${problems.join("\n  - ")}\n` +
        `Check the slug INSIDE the content file — it often differs from the filename.`
    );
}

assertComparisonPagesAreSound(comparisonPages);
assertNoVisibleTk(comparisonPages);
assertInternalLinksResolve(comparisonPages);

export function getAllComparisonPages(): ComparisonPage[] {
  return comparisonPages;
}

export function getComparisonPageBySlug(slug: string): ComparisonPage | undefined {
  return comparisonPages.find((p) => p.slug === slug);
}

export function getAlternativePages(): ComparisonPage[] {
  return comparisonPages.filter((p) => p.kind === "alternative");
}

export function getHeadToHeadPages(): ComparisonPage[] {
  return comparisonPages.filter((p) => p.kind === "head-to-head");
}
