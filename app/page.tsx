import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Waveform } from "@/components/ui/Waveform";
import { LogoMarquee } from "@/components/case-studies/LogoStrip";
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

const stats = [
  { value: "8 yrs", label: "Producing podcasts since 2019" },
  { value: "End-to-end", label: "From raw audio to promoted episode" },
  { value: "B2B", label: "Expert & thought-leadership focus" },
];

export default function Home() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <LocalBusinessJsonLd />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <Container className="pt-16 pb-0 sm:pt-24">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Podcast production studio · Est. 2019
            </p>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            End-to-end podcast production for founders, coaches &amp; finance
            voices building real authority.
          </Reveal>

          <Reveal delay={160} className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">
              Eight years producing podcasts end-to-end — editing, episode
              descriptions, YouTube and social assets, transcription review, and
              chapter timestamps — so your show sounds as credible as your
              expertise.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Start a conversation</Button>
            <Button href="/work" variant="secondary" withArrow={false}>
              See the work
            </Button>
          </Reveal>
        </Container>

        {/* Signature frequency band — spans full width, fades at the edges */}
        <div
          className="mt-16 h-24 w-full sm:mt-24 sm:h-32"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <Container className="h-full">
            <Waveform bars={48} barClassName="bg-accent/80" />
          </Container>
        </div>
      </section>

      {/* ---------- Trusted-by marquee ---------- */}
      <section className="border-y border-border py-12">
        <Container>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Trusted by expert & thought-leadership shows
          </p>
        </Container>
        <LogoMarquee />
      </section>

      {/* ---------- Process (dark) ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-20 sm:py-28">
          <Reveal className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                The process
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                What I do
              </h2>
            </div>
            <div className="hidden h-10 w-40 opacity-70 sm:block">
              <Waveform bars={20} barClassName="bg-accent-bright" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {whatIDo.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="border-t border-deep-line pt-5">
                  <span className="font-mono text-sm text-amber">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-medium">
                    {item.step}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-background/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Credibility stats ---------- */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="border-l-2 border-accent pl-5">
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Recent work ---------- */}
      {featuredCaseStudies.length > 0 && (
        <Section className="border-t border-border">
          <Reveal className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Selected work
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Recent work
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm font-medium text-accent hover:text-accent-bright sm:inline-block"
            >
              View all work →
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 90}>
                <CaseStudyCard study={study} />
              </Reveal>
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

      {/* ---------- Final CTA ---------- */}
      <section className="relative overflow-hidden border-t border-border">
        <Container className="py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="font-display mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Ready to sound like the expert you already are?
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <Button href="/contact">Start a conversation</Button>
          </Reveal>
        </Container>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-[0.18]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <Waveform bars={60} barClassName="bg-accent" />
        </div>
      </section>
    </>
  );
}
