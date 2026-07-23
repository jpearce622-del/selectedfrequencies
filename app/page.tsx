import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LogoStrip } from "@/components/case-studies/LogoStrip";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Podcast Production for Expert & Thought-Leadership Shows",
  description:
    "Selected Frequencies produces expert and thought-leadership podcasts for founders, coaches, and finance voices — editing, show notes, and distribution, end to end.",
  path: "/",
});

// HEADLINE OPTIONS — pick one, or ask for more. Currently live: Option B.
// A. "Podcast production for the experts your industry already listens to."
// B. "End-to-end podcast production for founders, coaches, and finance
//     voices building real authority." <- live
// C. "I produce thought-leadership podcasts — so you can focus on being
//     the expert, not the editor."
const headline =
  "End-to-end podcast production for founders, coaches, and finance voices building real authority.";

const whatIDo = [
  {
    step: "Plan",
    description:
      "Format, structure, and episode arcs mapped out before a single mic is switched on.",
  },
  {
    step: "Record",
    description:
      "Guidance on setup and recording so raw audio comes in clean, wherever your guests are.",
  },
  {
    step: "Edit",
    description:
      "Full episode edit — pacing, sound, and story — so every episode sounds intentional.",
  },
  {
    step: "Distribute",
    description:
      "Show notes, chapter timestamps, and transcription review, ready for every platform.",
  },
  {
    step: "Promote",
    description:
      "YouTube and social assets cut from each episode to extend its reach beyond the feed.",
  },
];

export default function Home() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <LocalBusinessJsonLd />

      <Section className="pt-20 sm:pt-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Eight years producing podcasts end-to-end — editing, episode
            descriptions, YouTube and social assets, transcription review,
            and chapter timestamps — so your show sounds as credible as your
            expertise.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border py-12 sm:py-16">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Trusted by
        </p>
        <LogoStrip />
      </Section>

      <Section className="border-t border-border">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          What I do
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {whatIDo.map((item, i) => (
            <div key={item.step}>
              <span className="text-sm font-medium text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.step}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {featuredCaseStudies.length > 0 && (
        <Section className="border-t border-border">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Recent work
            </h2>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-accent sm:inline-block"
            >
              View all work →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <Link
            href="/work"
            className="mt-8 inline-block text-sm font-medium text-accent sm:hidden"
          >
            View all work →
          </Link>
        </Section>
      )}

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to sound like the expert you are?
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
