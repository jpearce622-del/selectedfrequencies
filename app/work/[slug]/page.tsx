import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
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
        <p className="text-sm font-medium text-muted">{study.clientName}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          {study.showName}
        </h1>
        {study.hostName && (
          <p className="mt-3 text-muted">Hosted by {study.hostName}</p>
        )}
        <p className="mt-6 max-w-2xl text-lg text-muted">{study.oneLiner}</p>

        {study.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {study.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent"
              >
                Listen on {link.label}
              </a>
            ))}
          </div>
        )}
      </Section>

      {study.coverImage && (
        <Section className="border-t border-border pt-16">
          <Image
            src={study.coverImage}
            alt={study.coverImageAlt ?? ""}
            width={1200}
            height={675}
            className="w-full rounded-2xl border border-border object-cover"
          />
        </Section>
      )}

      <Section className="border-t border-border">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What I do</h2>
            <ul className="mt-4 space-y-2">
              {study.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {study.outcome && (
            <div>
              <h2 className="text-xl font-semibold">Outcome</h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {study.outcome}
              </p>
            </div>
          )}
        </div>
      </Section>

      {study.testimonial && (
        <Section className="border-t border-border">
          <blockquote className="max-w-2xl">
            <p className="text-xl font-medium leading-8">
              “{study.testimonial.quote}”
            </p>
            <footer className="mt-4 text-sm text-muted">
              {study.testimonial.attribution}
            </footer>
          </blockquote>
        </Section>
      )}

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Want results like this for your show?
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
