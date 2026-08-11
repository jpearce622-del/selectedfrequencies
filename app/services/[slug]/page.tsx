import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, siteConfig, absoluteUrl } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  getAllServicePages,
  getServicePageBySlug,
  isPlaceholder,
} from "@/lib/service-pages";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { getPostBySlug } from "@/lib/blog";
import { ServiceEnquiryForm } from "@/components/services/ServiceEnquiryForm";
import type { ServicePage, ServiceSectionId } from "@/types/service-page";

/**
 * Template for the commercial service landing pages.
 *
 * Rendering is fully static. These pages are built from TypeScript files in
 * the repo, so there is no external source that could change between
 * deploys — ISR would revalidate against data that cannot have moved, and
 * pay a cold-cache TTFB on the first request after each window for nothing.
 * Editing a page means editing a file, which means a deploy anyway. If
 * pricing later moves to a CMS, this is the decision to revisit.
 */

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllServicePages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) return {};

  // Self-referencing canonical. buildMetadata sets alternates.canonical to
  // this page's own URL — no service page ever canonicalises to /services or
  // to a sibling, which would hand its ranking to a page targeting a
  // different buyer.
  return buildMetadata({
    title: page.seo.title,
    description: page.seo.metaDescription,
    path: `/services/${page.slug}`,
  });
}

/* ─────────────────────────── section renderers ─────────────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
}

function Problem({ page }: { page: ServicePage }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>{page.problem.heading}</SectionHeading>
        <div className="mt-6 max-w-3xl space-y-5">
          {page.problem.body.map((para, i) => (
            <p key={i} className="text-base leading-7 text-muted">
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function Included({ page }: { page: ServicePage }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>{page.included.heading}</SectionHeading>
        {page.included.intro && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            {page.included.intro}
          </p>
        )}
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {page.included.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 60}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      {page.included.footnote && (
        <Reveal>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            {page.included.footnote}
          </p>
        </Reveal>
      )}
    </Section>
  );
}

function HowItWorks({ page }: { page: ServicePage }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>{page.howItWorks.heading}</SectionHeading>
        {page.howItWorks.intro && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            {page.howItWorks.intro}
          </p>
        )}
      </Reveal>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2">
        {page.howItWorks.steps.map((step, i) => (
          <Reveal key={step.title} delay={(i % 2) * 70}>
            <li className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6">
              <span
                aria-hidden
                className="font-display shrink-0 text-2xl font-semibold text-border"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/** Objections render as visible prose, not an accordion — a buyer scanning
 *  for their specific worry should be able to find it without clicking. */
function Objections({ page }: { page: ServicePage }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>{page.objections.heading}</SectionHeading>
        {page.objections.intro && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            {page.objections.intro}
          </p>
        )}
      </Reveal>
      <div className="mt-8 max-w-3xl space-y-8">
        {page.objections.items.map((item, i) => (
          <Reveal key={item.question} delay={Math.min(i, 3) * 50}>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {item.question}
              </h3>
              <p className="mt-2.5 text-base leading-7 text-muted">
                {item.answer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Proof({ page }: { page: ServicePage }) {
  const studies = page.proof.caseStudySlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (studies.length === 0) return null;

  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>{page.proof.heading}</SectionHeading>
        {/* Placeholder intros are dropped rather than rendered. A visible
            "[PLACEHOLDER — supply metric]" on a commercial page is worse
            than no sentence at all. */}
        {!isPlaceholder(page.proof.intro) && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            {page.proof.intro}
          </p>
        )}
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study, i) => (
          <Reveal key={study.slug} delay={(i % 3) * 60}>
            <Link
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {study.clientName}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {study.showName}
              </h3>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                {study.oneLiner}
              </p>
              <span className="mt-4 text-sm font-medium text-accent">
                Read the case study →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Pricing({ page }: { page: ServicePage }) {
  const p = page.pricing;
  return (
    <Section className="border-t border-border">
      <Reveal>
        <div className="max-w-3xl rounded-3xl border border-border bg-fog p-7 sm:p-9">
          <SectionHeading>{p.heading}</SectionHeading>
          {p.mode === "from" ? (
            <>
              <p className="font-display mt-5 text-4xl font-semibold tracking-tight">
                From £{p.amount.toLocaleString("en-GB")}
                <span className="ml-2 text-base font-normal text-muted">
                  {p.unit}
                </span>
              </p>
              {p.body && (
                <p className="mt-4 text-base leading-7 text-muted">{p.body}</p>
              )}
            </>
          ) : (
            <p className="mt-4 text-base leading-7 text-muted">{p.body}</p>
          )}
          {/* Same rule as the proof intro: an undecided caveat is a note to
              James, not copy for a buyer. */}
          {!isPlaceholder(p.caveat) && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.caveat}</p>
          )}
        </div>
      </Reveal>
    </Section>
  );
}

function Faq({ page }: { page: ServicePage }) {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading>Questions</SectionHeading>
      </Reveal>
      <div className="mt-8 max-w-3xl space-y-3">
        {page.faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="font-display text-base font-semibold tracking-tight">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
              >
                ↓
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

const SECTIONS: Record<
  ServiceSectionId,
  (props: { page: ServicePage }) => React.ReactNode
> = {
  problem: Problem,
  included: Included,
  "how-it-works": HowItWorks,
  objections: Objections,
  proof: Proof,
  pricing: Pricing,
  faq: Faq,
};

/* ──────────────────────────────── page ──────────────────────────────── */

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) notFound();

  const url = `${siteConfig.url}/services/${page.slug}`;
  const caseStudy = getCaseStudyBySlug(page.internalLinks.caseStudySlug);
  const blogPost = getPostBySlug(page.internalLinks.blogSlug);
  const related = page.internalLinks.relatedServiceSlug
    ? getServicePageBySlug(page.internalLinks.relatedServiceSlug)
    : undefined;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.schemaServiceName,
    description: page.seo.metaDescription,
    serviceType: page.schemaServiceName,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.ogImage),
    },
    areaServed: ["GB", "IE", "US", "EU"],
    // No `offers` block: the pages currently publish no price, and an Offer
    // without a price is a rich result claiming something the page doesn't
    // show. Add it here when a starting-from figure goes live.
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
    ],
  };

  return (
    <>
      {[serviceJsonLd, faqJsonLd, breadcrumbJsonLd].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* ── Hero. The primary CTA is inside it, so on mobile the form is one
             tap away rather than a full page of scrolling. ── */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16">
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
                <Link href="/services" className="hover:text-accent">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent">{page.seo.title}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start">
            <div>
              <h1 className="font-display max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                {page.subheadline}
              </p>
              <a
                href="#enquire"
                className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-accent px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:hidden"
              >
                {page.cta.buttonLabel}
              </a>
            </div>

            {/* On desktop the form sits beside the headline — the primary CTA
                is above the fold without a scroll. On mobile it moves below
                the copy, where the anchor button above jumps to it. */}
            <div className="hidden lg:block">
              <div className="rounded-3xl border border-border bg-surface p-7">
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  {page.cta.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {page.cta.body}
                </p>
                <div className="mt-5">
                  <ServiceEnquiryForm
                    formTag={page.formTag}
                    submitLabel={page.cta.buttonLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {page.sectionOrder.map((id) => {
        const Component = SECTIONS[id];
        return <Component key={id} page={page} />;
      })}

      {/* ── Related reading. One case study and one blog post minimum. ── */}
      {(caseStudy || blogPost || related) && (
        <Section className="border-t border-border">
          <Reveal>
            <SectionHeading>Worth reading next</SectionHeading>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy && (
              <Reveal>
                <Link
                  href={`/work/${caseStudy.slug}`}
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Case study
                  </p>
                  <p className="font-display mt-2 text-base font-semibold tracking-tight group-hover:text-accent">
                    {caseStudy.showName}
                  </p>
                </Link>
              </Reveal>
            )}
            {blogPost && (
              <Reveal delay={60}>
                <Link
                  href={`/blog/${blogPost.slug}`}
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Guide
                  </p>
                  <p className="font-display mt-2 text-base font-semibold tracking-tight group-hover:text-accent">
                    {blogPost.title}
                  </p>
                </Link>
              </Reveal>
            )}
            {related && (
              <Reveal delay={120}>
                <Link
                  href={`/services/${related.slug}`}
                  className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Also relevant
                  </p>
                  <p className="font-display mt-2 text-base font-semibold tracking-tight group-hover:text-accent">
                    {related.h1}
                  </p>
                </Link>
              </Reveal>
            )}
          </div>
        </Section>
      )}

      {/* ── Second CTA, after the proof. ── */}
      <section id="enquire" className="scroll-mt-20 bg-deep text-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {page.cta.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/75">
              {page.cta.body}
            </p>
            {page.cta.note && (
              <p className="mt-2 text-sm text-background/55">{page.cta.note}</p>
            )}
            <div className="mt-8 rounded-3xl bg-background p-6 text-foreground sm:p-8">
              <ServiceEnquiryForm
                formTag={page.formTag}
                submitLabel={page.cta.buttonLabel}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
