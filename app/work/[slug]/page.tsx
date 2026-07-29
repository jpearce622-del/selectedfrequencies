import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SoundMark } from "@/components/brand/SoundMark";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  caseStudyMetaDescription,
} from "@/lib/case-studies";
import { buildMetadata, siteConfig, absoluteUrl } from "@/lib/metadata";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return buildMetadata({
    title: `${study.metaTitleName ?? study.showName} — Case Study`,
    description: caseStudyMetaDescription(study),
    path: `/work/${study.slug}`,
    image: study.logo,
    imageAlt: study.logoAlt ?? `${study.showName} cover art`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = getRelatedCaseStudies(slug);

  // Only surface copy that's real — never render leftover placeholder
  // markers publicly. Real quotes/outcomes/services can be added to the data
  // later and will appear automatically.
  const isReal = (value?: string) =>
    Boolean(value && !value.includes("PLACEHOLDER"));
  const services = study.services.filter(isReal);
  const showOutcome = isReal(study.outcome);
  const showTestimonial =
    study.testimonial && isReal(study.testimonial.quote);

  const pageUrl = `${siteConfig.url}/work/${study.slug}`;

  // CreativeWork describing the show itself, plus a breadcrumb trail matching
  // the real navigation path. Both mirror what's visible on the page.
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.showName,
    description: caseStudyMetaDescription(study),
    url: pageUrl,
    ...(study.logo ? { image: absoluteUrl(study.logo) } : {}),
    ...(study.hostName
      ? { author: { "@type": "Person", name: study.hostName } }
      : {}),
    ...(study.clientName
      ? { sourceOrganization: { "@type": "Organization", name: study.clientName } }
      : {}),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work` },
      { "@type": "ListItem", position: 3, name: study.showName, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero — themed to the show's own cover art, Spotify show-page
          style: a colour sampled from the artwork at the top, fading
          down into the site's own brand navy so it still reads as one
          site rather than five unrelated pages. */}
      <section
        className="pt-24 pb-14 sm:pt-32 sm:pb-20"
        style={{
          background: `linear-gradient(180deg, ${study.themeColor ?? "var(--deep)"} 0%, var(--deep) 100%)`,
        }}
      >
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-8">
            {study.logo && (
              <Reveal>
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/40 sm:h-48 sm:w-48">
                  <Image
                    src={study.logo}
                    alt={study.logoAlt ?? `${study.showName} — podcast cover art`}
                    width={220}
                    height={220}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            )}

            <div>
              <Reveal>
                <p className="text-sm font-medium text-background/80">Podcast</p>
              </Reveal>
              <Reveal
                as="h1"
                delay={80}
                className="font-display mt-2 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-background sm:text-6xl"
              >
                {study.showName}
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-3 text-lg font-medium text-background/85">
                  {study.clientName}
                  {study.hostName && (
                    <span className="text-background/70">
                      {" "}
                      · Hosted by {study.hostName}
                    </span>
                  )}
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200} className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-background/80">
              {study.oneLiner}
            </p>
          </Reveal>

          {study.links.length > 0 && (
            <Reveal delay={260} className="mt-8 flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-background/95 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  Listen on {link.label}
                </a>
              ))}
            </Reveal>
          )}
        </Container>
      </section>

      {study.coverImage && (
        <Section className="border-t border-border pt-16">
          <Reveal>
            <Image
              src={study.coverImage}
              alt={study.coverImageAlt ?? `${study.showName} — production still`}
              width={1200}
              height={675}
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
        </Section>
      )}

      {study.description && (
        <Section className="border-t border-border">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              About {study.showName}
            </h2>
            {/* Blank-line-separated paragraphs. Descriptions written as a
                single block still render exactly as before — this only
                matters for the longer write-ups, where one 500-word
                paragraph would be a wall of text. */}
            <div className="mt-5 max-w-3xl space-y-4">
              {study.description
                .split("\n\n")
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i} className="text-base leading-7 text-muted">
                    {para}
                  </p>
                ))}
            </div>
          </Reveal>
        </Section>
      )}

      {(services.length > 0 || showOutcome) && (
      <Section className="border-t border-border">
        <div className="grid gap-12 sm:grid-cols-2">
          {services.length > 0 && (
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              What we do
            </h2>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
          )}

          {showOutcome && (
            <Reveal delay={100}>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Outcome
              </h2>
              <p className="mt-5 text-sm leading-6 text-muted">
                {study.outcome}
              </p>
            </Reveal>
          )}
        </div>
      </Section>
      )}

      {showTestimonial && study.testimonial && (
        <section className="bg-deep text-background">
          <Section>
            <Reveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <SoundMark className="mx-auto mb-8 h-8 w-24 text-amber opacity-90" />
                <p className="font-display text-2xl leading-relaxed font-medium text-balance sm:text-3xl">
                  “{study.testimonial.quote}”
                </p>
                <footer className="mt-6 text-sm text-background/60">
                  {study.testimonial.attribution}
                </footer>
              </blockquote>
            </Reveal>
          </Section>
        </section>
      )}

      {/* Cross-links to other case studies. Without these each study page is
          reachable only from the /work grid, which leaves it a dead end for
          crawlers and concentrates the site's authority on the index. */}
      {related.length > 0 && (
        <Section className="border-t border-border">
          <Reveal className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              More case studies
            </h2>
            <Link
              href="/work"
              className="shrink-0 text-sm font-medium text-accent hover:underline"
            >
              View all →
            </Link>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 60}>
                <CaseStudyCard study={item} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-border text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Want results like this for your show?
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </Section>
    </>
  );
}
