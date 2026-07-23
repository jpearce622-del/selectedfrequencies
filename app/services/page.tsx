import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

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
      "Bring your own show notes and distribution — I handle the edit.",
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
      <Section className="pt-20 sm:pt-28">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Services
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Pick a single service, or hand over the whole production process —
          from raw recording to a published, promoted episode.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-2xl border border-dashed border-border bg-surface p-8">
          <h2 className="text-xl font-semibold">Pricing</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            [PLACEHOLDER — decide whether to publish package pricing/ranges
            here or keep this section enquiry-based. If publishing, structure
            as a simple 3-tier table matching the packages above.]
          </p>
        </div>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Not sure which service fits your show?
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
