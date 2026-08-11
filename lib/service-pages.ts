import type { ServicePage } from "@/types/service-page";
import { servicePages } from "@/content/service-pages";

/**
 * Keyword-collision guard.
 *
 * These pages are close enough in subject that they will compete with each
 * other unless kept deliberately apart, and the drift happens later — when
 * page seven gets written quickly and reuses a question from page two. The
 * brief lists the rules; this makes them fail the build instead.
 *
 * Checked here rather than in a test because a test only runs when somebody
 * runs it. Importing this module is unavoidable for any page that renders,
 * so the check runs on every build.
 */
function assertServicePagesAreDistinct(pages: ServicePage[]): void {
  const problems: string[] = [];
  const seenPrimary = new Map<string, string>();
  const seenSupporting = new Map<string, string>();
  const seenQuestion = new Map<string, string>();
  const seenSlug = new Set<string>();
  const seenTag = new Map<string, string>();

  const normalise = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");

  for (const page of pages) {
    if (seenSlug.has(page.slug)) problems.push(`duplicate slug: ${page.slug}`);
    seenSlug.add(page.slug);

    const primary = normalise(page.primaryKeyword);
    const primaryOwner = seenPrimary.get(primary);
    if (primaryOwner) {
      problems.push(
        `primary keyword "${page.primaryKeyword}" is claimed by both ${primaryOwner} and ${page.slug}`
      );
    }
    seenPrimary.set(primary, page.slug);

    // A supporting keyword on one page must not be another page's primary —
    // that is the same collision wearing a different hat.
    for (const kw of page.supportingKeywords) {
      const k = normalise(kw);
      const asPrimary = seenPrimary.get(k);
      if (asPrimary && asPrimary !== page.slug) {
        problems.push(
          `${page.slug} lists "${kw}" as supporting, but it is ${asPrimary}'s primary keyword`
        );
      }
      const owner = seenSupporting.get(k);
      if (owner && owner !== page.slug) {
        problems.push(
          `supporting keyword "${kw}" appears on both ${owner} and ${page.slug}`
        );
      }
      seenSupporting.set(k, page.slug);
    }

    /**
     * FAQ questions are the sharpest cannibalisation risk on these pages and
     * the one the brief didn't name. Body copy differing is easy; every one
     * of these buyers still wants to ask "what's your turnaround?" — and
     * FAQPage schema hands that duplicate question straight to Google as a
     * structured claim. Each page must ask it in its own buyer's language.
     */
    for (const faq of page.faqs) {
      const q = normalise(faq.question);
      const owner = seenQuestion.get(q);
      if (owner) {
        problems.push(
          `FAQ question "${faq.question}" appears on both ${owner} and ${page.slug} — rephrase it for this buyer`
        );
      }
      seenQuestion.set(q, page.slug);
    }

    const tagOwner = seenTag.get(page.formTag);
    if (tagOwner) {
      problems.push(
        `formTag "${page.formTag}" is used by both ${tagOwner} and ${page.slug} — enquiries would be indistinguishable`
      );
    }
    seenTag.set(page.formTag, page.slug);

    // Length limits, checked rather than trusted.
    const fullTitle = `${page.seo.title} | Selected Frequencies`;
    if (fullTitle.length > 60) {
      problems.push(
        `${page.slug}: title is ${fullTitle.length} chars with the brand suffix (limit 60) — "${fullTitle}"`
      );
    }
    if (page.seo.metaDescription.length > 155) {
      problems.push(
        `${page.slug}: meta description is ${page.seo.metaDescription.length} chars (limit 155)`
      );
    }
    if (
      !normalise(page.seo.metaDescription).includes(
        normalise(page.primaryKeyword)
      ) &&
      !normalise(page.h1).includes(normalise(page.primaryKeyword))
    ) {
      problems.push(
        `${page.slug}: primary keyword "${page.primaryKeyword}" appears in neither the H1 nor the meta description`
      );
    }
  }

  if (problems.length > 0) {
    throw new Error(
      `Service page keyword collision:\n  - ${problems.join("\n  - ")}`
    );
  }
}

/**
 * Refuse to ship a placeholder marker to a visitor.
 *
 * Two fields — `proof.intro` and `pricing.caveat` — are rendered through
 * isPlaceholder() and dropped when unresolved, so a marker there is a note
 * to James and is safe. Every other string on these objects renders as-is.
 *
 * This exists because a marker did reach the page: an unresolved
 * [PLACEHOLDER — supply a client outcome] sat inside a B2B objection answer,
 * rendered in full, and was caught only by reading the built HTML. On a
 * commercial page that is worse than saying nothing, and "remember not to do
 * that" is not a control. Markers go in code comments; anything left in a
 * rendered string fails the build.
 */
function assertNoVisiblePlaceholders(pages: ServicePage[]): void {
  const MARKER = /\[PLACEHOLDER/i;
  const offences: string[] = [];

  const check = (slug: string, field: string, value?: string) => {
    if (value && MARKER.test(value)) offences.push(`${slug} → ${field}`);
  };

  for (const p of pages) {
    check(p.slug, "h1", p.h1);
    check(p.slug, "subheadline", p.subheadline);
    check(p.slug, "seo.title", p.seo.title);
    check(p.slug, "seo.metaDescription", p.seo.metaDescription);

    check(p.slug, "problem.heading", p.problem.heading);
    p.problem.body.forEach((b, i) => check(p.slug, `problem.body[${i}]`, b));

    check(p.slug, "included.intro", p.included.intro);
    check(p.slug, "included.footnote", p.included.footnote);
    p.included.items.forEach((it, i) => {
      check(p.slug, `included.items[${i}].title`, it.title);
      check(p.slug, `included.items[${i}].detail`, it.detail);
    });

    check(p.slug, "howItWorks.intro", p.howItWorks.intro);
    p.howItWorks.steps.forEach((s, i) => {
      check(p.slug, `howItWorks.steps[${i}].title`, s.title);
      check(p.slug, `howItWorks.steps[${i}].body`, s.body);
    });

    check(p.slug, "objections.intro", p.objections.intro);
    p.objections.items.forEach((o, i) => {
      check(p.slug, `objections.items[${i}].question`, o.question);
      check(p.slug, `objections.items[${i}].answer`, o.answer);
    });

    check(p.slug, "pricing.heading", p.pricing.heading);
    check(p.slug, "pricing.body", p.pricing.body);
    // pricing.caveat and proof.intro are intentionally omitted — the
    // template drops them when they carry a marker.

    p.faqs.forEach((f, i) => {
      check(p.slug, `faqs[${i}].question`, f.question);
      check(p.slug, `faqs[${i}].answer`, f.answer);
    });

    check(p.slug, "cta.heading", p.cta.heading);
    check(p.slug, "cta.body", p.cta.body);
    check(p.slug, "cta.note", p.cta.note);
  }

  if (offences.length > 0) {
    throw new Error(
      `Placeholder markers would render to visitors:\n  - ${offences.join(
        "\n  - "
      )}\nMove these into a code comment, or into proof.intro / pricing.caveat, which the template strips.`
    );
  }
}

/**
 * Internal-link resolution guard.
 *
 * The template resolves every slug through getCaseStudyBySlug / getPostBySlug
 * and renders nothing when one misses. That is the right runtime behaviour and
 * a terrible authoring experience: a typo'd slug costs the page an internal
 * link and produces no error anywhere. It has already happened once — a page
 * referenced "the-assembly" (the FILENAME) when the slug is "assemble-you",
 * and both links silently vanished from the built page.
 *
 * Imports are local to keep this out of the module's import graph until the
 * check actually runs, since lib/case-studies and lib/blog both pull in the
 * full content set.
 */
function assertInternalLinksResolve(pages: ServicePage[]): void {
  const {
    getCaseStudyBySlug,
  } = require("@/lib/case-studies") as typeof import("@/lib/case-studies");
  const { getPostBySlug } = require("@/lib/blog") as typeof import("@/lib/blog");

  const problems: string[] = [];
  const slugs = new Set(pages.map((p) => p.slug));

  for (const page of pages) {
    for (const s of page.proof.caseStudySlugs) {
      if (!getCaseStudyBySlug(s))
        problems.push(`${page.slug}: proof.caseStudySlugs -> no case study "${s}"`);
    }
    if (!getCaseStudyBySlug(page.internalLinks.caseStudySlug))
      problems.push(
        `${page.slug}: internalLinks.caseStudySlug -> no case study "${page.internalLinks.caseStudySlug}"`
      );
    if (!getPostBySlug(page.internalLinks.blogSlug))
      problems.push(
        `${page.slug}: internalLinks.blogSlug -> no post "${page.internalLinks.blogSlug}"`
      );

    const related = page.internalLinks.relatedServiceSlug;
    if (related && !slugs.has(related))
      problems.push(`${page.slug}: relatedServiceSlug -> no service page "${related}"`);
    if (related === page.slug)
      problems.push(`${page.slug}: relatedServiceSlug points at itself`);
  }

  if (problems.length) {
    throw new Error(
      `Service page internal link does not resolve:\n  - ${problems.join("\n  - ")}\n` +
        `Check the slug INSIDE the content file — it often differs from the filename.`
    );
  }
}

assertServicePagesAreDistinct(servicePages);
assertNoVisiblePlaceholders(servicePages);
assertInternalLinksResolve(servicePages);

export function getAllServicePages(): ServicePage[] {
  return servicePages;
}

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}

/**
 * True when a string still carries an unresolved placeholder. Used to drop a
 * block entirely rather than publish "[PLACEHOLDER — supply metric]" to a
 * visitor, which is the failure mode these markers otherwise invite.
 */
export function isPlaceholder(value?: string): boolean {
  return !value || /\[PLACEHOLDER/i.test(value);
}
