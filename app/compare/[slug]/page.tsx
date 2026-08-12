import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  getAllComparisonPages,
  getComparisonPageBySlug,
} from "@/lib/comparison-pages";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { getPostBySlug } from "@/lib/blog";
import { getServicePageBySlug } from "@/lib/service-pages";
import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Template for competitor comparison pages.
 *
 * Section order is fixed rather than configurable, and the order itself is
 * the editorial argument:
 *
 *   answer → disclosure → table → WHERE THEY WIN → where we win → scenarios
 *   → checklist → FAQ → verification line → CTA
 *
 * "Where they win" sits before our case deliberately. A reader who meets our
 * pitch first reads everything after it as marketing; a reader who meets a
 * genuine concession first will actually weigh the rest. Don't reorder these
 * to put our case higher — it converts worse and it reads worse.
 *
 * Competitor links are rel="nofollow noopener" — we're citing them as a
 * source, not endorsing them, and we shouldn't pass ranking signal to a
 * competitor from a page targeting their brand term.
 */

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllComparisonPages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparisonPageBySlug(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.seo.title,
    description: page.seo.metaDescription,
    path: `/compare/${page.slug}`,
  });
}

function ComparisonTable({ page }: { page: ComparisonPage }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="sr-only">
          {page.h1} — objective feature comparison
        </caption>
        <thead>
          <tr className="border-b border-border bg-surface">
            <th scope="col" className="px-5 py-4 font-semibold">
              &nbsp;
            </th>
            {page.companies.map((c) => (
              <th key={c.name} scope="col" className="px-5 py-4 font-semibold">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {page.comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th scope="row" className="px-5 py-4 font-medium text-muted">
                {row.label}
              </th>
              {row.values.map((v, i) => (
                <td key={i} className="px-5 py-4 leading-relaxed">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ComparePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getComparisonPageBySlug(slug);
  if (!page) notFound();

  const url = `${siteConfig.url}/compare/${page.slug}`;
  const services = page.internalLinks.servicePageSlugs
    .map((s) => getServicePageBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const posts = page.internalLinks.blogSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const studies = page.internalLinks.caseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const related = (page.internalLinks.comparisonSlugs ?? [])
    .map((s) => getComparisonPageBySlug(s))
    .filter((c): c is ComparisonPage => Boolean(c));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  // dateModified carries real weight on comparison queries: a stale
  // comparison is a wrong comparison, and freshness is what a reader (and a
  // ranking system) uses to decide whether to trust it.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.seo.metaDescription,
    datePublished: page.verifiedOn,
    dateModified: page.verifiedOn,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare",
        item: `${siteConfig.url}/compare`,
      },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ],
  };

  const verifiedLabel = new Date(page.verifiedOn).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <section className="pt-12 pb-10 sm:pt-16">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/compare" className="hover:text-accent">
                  Compare
                </Link>
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.h1}
          </h1>

          {/* The direct answer, above everything else. */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {page.answerFirst}
          </p>

          {/* Disclosure sits here, before the comparison — not in the footer.
              The reader should know whose page this is before they read it. */}
          <p className="mt-6 max-w-3xl rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
            {page.disclosure}
          </p>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Side by side
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Objective, checkable features only. Where a company doesn&rsquo;t
            publish something, this says so rather than guessing.
          </p>
          <ComparisonTable page={page} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {page.companies.map((c) => (
            <Reveal key={c.name}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {c.positioning}
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  <span className="font-semibold">Best at: </span>
                  {c.strength}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">Trade-off: </span>
                  {c.tradeOff}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Sources:{" "}
                  {c.sources.map((s, i) => (
                    <span key={s.url}>
                      {i > 0 && ", "}
                      <a
                        href={s.url}
                        rel="nofollow noopener"
                        target="_blank"
                        className="underline hover:text-accent"
                      >
                        {s.label}
                      </a>{" "}
                      ({s.checkedOn})
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Their case, before ours. Deliberate — see the file header. */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {page.competitorWins.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-muted">
            {page.competitorWins.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {page.ourCase.heading}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-muted">
            {page.ourCase.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {studies.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {studies.map((s) => (
                <Link
                  key={s.slug}
                  href={`/work/${s.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {s.showName} case study →
                </Link>
              ))}
            </div>
          )}
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Which should you choose?
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {page.scenarios.map((s) => (
            <Reveal key={s.situation}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <p className="text-sm font-semibold leading-relaxed">
                  {s.situation}
                </p>
                <p className="mt-4 text-sm font-medium text-accent">
                  → {s.recommendation}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.why}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {page.checklist.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            {page.checklist.intro}
          </p>
          <ol className="mt-6 max-w-3xl space-y-4">
            {page.checklist.items.map((item, i) => (
              <li key={i} className="flex gap-4 text-base leading-7 text-muted">
                <span className="font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions people ask
          </h2>
        </Reveal>
        <dl className="mt-8 max-w-3xl space-y-8">
          {page.faqs.map((faq) => (
            <Reveal key={faq.question}>
              <dt className="font-display text-lg font-semibold tracking-tight">
                {faq.question}
              </dt>
              <dd className="mt-3 text-base leading-7 text-muted">{faq.answer}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {(services.length > 0 || posts.length > 0 || related.length > 0) && (
        <Section className="border-t border-border">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Related reading
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-base leading-7 text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {s.h1}
                  </Link>
                </li>
              ))}
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-base leading-7 text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="text-base leading-7 text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {c.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      )}

      {/* Verification and correction line. Good faith, and a real defence. */}
      <Section className="border-t border-border">
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Comparison based on publicly available information as of{" "}
            <time dateTime={page.verifiedOn}>{verifiedLabel}</time>. Company
            details change, and we may have got something wrong. If anything
            here is out of date or inaccurate,{" "}
            <Link href="/contact" className="underline hover:text-accent">
              contact us
            </Link>{" "}
            and we&rsquo;ll correct it. We have no affiliation with, and are not
            endorsed by, any company named on this page.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {page.cta.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {page.cta.body}
            </p>
            <div className="mt-7">
              <Button href={`/contact?ref=${page.formTag}`}>
                {page.cta.buttonLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
