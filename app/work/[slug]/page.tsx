import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Waveform } from "@/components/ui/Waveform";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

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
    title: `${study.showName} — Case Study`,
    description: study.oneLiner,
    path: `/work/${study.slug}`,
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

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {study.clientName}
          </p>
        </Reveal>
        <Reveal
          as="h1"
          delay={80}
          className="font-display mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
        >
          {study.showName}
        </Reveal>
        {study.hostName && (
          <Reveal delay={140}>
            <p className="mt-4 text-muted">Hosted by {study.hostName}</p>
          </Reveal>
        )}
        <Reveal delay={180} className="mt-6 max-w-2xl">
          <p className="text-lg leading-relaxed text-muted">{study.oneLiner}</p>
        </Reveal>

        {study.links.length > 0 && (
          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Listen on {link.label}
              </a>
            ))}
          </Reveal>
        )}
      </Section>

      {study.coverImage && (
        <Section className="border-t border-border pt-16">
          <Reveal>
            <Image
              src={study.coverImage}
              alt={study.coverImageAlt ?? ""}
              width={1200}
              height={675}
              className="w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
        </Section>
      )}

      <Section className="border-t border-border">
        <div className="grid gap-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              What I do
            </h2>
            <ul className="mt-5 space-y-2.5">
              {study.services.map((service) => (
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

          {study.outcome && (
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

      {study.testimonial && (
        <section className="bg-deep text-background">
          <Section>
            <Reveal>
              <blockquote className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-8 h-8 w-24 opacity-70">
                  <Waveform bars={16} barClassName="bg-amber" />
                </div>
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
