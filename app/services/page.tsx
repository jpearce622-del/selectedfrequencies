import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Full production, editing-only, show notes and chapters, YouTube and social asset creation, and launch packages for new shows.",
  path: "/services",
});

const services = [
  {
    name: "Full production",
    description:
      "End-to-end: editing, episode descriptions, show notes, chapter timestamps, and social/YouTube assets for every episode.",
    bullets: [
      "Full episode edit",
      "Show notes & chapter timestamps",
      "YouTube & social clips",
      "Transcription review",
    ],
  },
  {
    name: "Editing only",
    description:
      "Bring your own show notes and distribution — we handle the edit.",
    bullets: ["Full episode edit", "Sound cleanup & pacing"],
  },
  {
    name: "Show notes & chapters",
    description:
      "Episode descriptions and chapter timestamps for an already-edited episode.",
    bullets: ["Episode description", "Chapter timestamps"],
  },
  {
    name: "YouTube & social assets",
    description:
      "Clips, captions, and platform-ready cuts sourced from your episode.",
    bullets: ["Short-form clips", "Captioned assets", "Platform formatting"],
  },
  {
    name: "Launch packages",
    description:
      "For new shows: format planning, RSS/platform setup guidance, and the first batch of episodes produced end-to-end.",
    bullets: [
      "Format & structure planning",
      "Launch episode batch",
      "Platform setup guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your show needs — or just the part you're missing."
        intro="Pick a single service, or hand over the whole production process — from raw recording to a published, promoted episode."
      />

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 2) * 90}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {service.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <div className="rounded-2xl border border-dashed border-border bg-surface p-8">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Pricing
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              [PLACEHOLDER — decide whether to publish package pricing/ranges
              here or keep this section enquiry-based. If publishing, structure
              as a simple 3-tier table matching the packages above.]
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Not sure which service fits your show?
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </Section>
    </>
  );
}
