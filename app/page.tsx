import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMarquee } from "@/components/case-studies/LogoStrip";
import { CompanyLogos } from "@/components/home/CompanyLogos";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { MicScrollStory } from "@/components/home/MicScrollStory";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Podcast Production for Expert & Thought-Leadership Shows",
  description:
    "Selected Frequencies produces expert and thought-leadership podcasts for founders, coaches, and finance voices — editing, show notes, and distribution, end to end.",
  path: "/",
});

// HEADLINE OPTIONS — pick one, or ask for more. Currently live: Option B.
// A. "Bringing expert voices to the world."
// B. "Podcasts that sound as credible as you are." <- live
// C. "End-to-end production for people worth listening to."

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

      {/* ---------- Scroll-scrubbed mic story — leads the page, Apple
          product-page style ---------- */}
      <MicScrollStory />

      {/* ---------- Hero (centered, Apple-style) ---------- */}
      <section className="overflow-hidden pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-accent">
              Selected Frequencies
            </p>
          </Reveal>
          <Reveal
            as="h1"
            delay={70}
            className="font-display mx-auto mt-4 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Podcasts that sound as credible as you are.
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-2xl">
            <p className="text-xl leading-relaxed text-muted">
              End-to-end production for founders, coaches, and finance voices —
              editing, show notes, and distribution, handled so you can focus on
              the ideas.
            </p>
          </Reveal>
          <Reveal
            delay={210}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <Button href="/contact">Start a conversation</Button>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1 text-base font-medium text-accent"
            >
              See the work
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Trusted-by marquee ---------- */}
      <section className="border-t border-border py-14">
        <Container>
          <p className="mb-9 text-center text-sm font-medium text-muted-foreground">
            Trusted by shows worldwide
          </p>
        </Container>
        <LogoMarquee />
      </section>

      {/* ---------- Company credibility strip ---------- */}
      <section className="border-t border-border py-14">
        <Container>
          <p className="mb-9 text-center text-sm font-medium text-muted-foreground">
            Companies we&apos;ve partnered with
          </p>
          <CompanyLogos />
        </Container>
      </section>

      {/* ---------- Process (light-grey) ---------- */}
      <section className="bg-fog">
        <Container className="py-24 sm:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-lg text-muted">
              Five stages, one point of contact — the full journey from idea to
              audience.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whatIDo.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="h-full rounded-3xl bg-surface p-7 shadow-sm">
                  <span className="font-mono text-sm font-medium text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold">
                    {item.step}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
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
        <div className="grid gap-12 text-center sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-base text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Case Studies ---------- */}
      {featuredCaseStudies.length > 0 && (
        <section className="bg-fog">
          <Container className="py-24 sm:py-32">
            <Reveal className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-4xl font-semibold uppercase tracking-widest sm:text-5xl">
                  Case Studies
                </h2>
                <p className="mt-4 text-base text-muted">
                  Production work spanning B2B strategy, expert finance, and executive leadership shows.
                </p>
              </div>
              <Link
                href="/work"
                className="hidden shrink-0 pb-1 text-base font-medium text-accent sm:inline-block"
              >
                View all →
              </Link>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {featuredCaseStudies.map((study, i) => (
                <Reveal key={study.slug} delay={i * 60}>
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>

            <Link
              href="/work"
              className="mt-8 inline-block text-base font-medium text-accent sm:hidden"
            >
              View all →
            </Link>
          </Container>
        </section>
      )}

      {/* ---------- Final CTA (navy) ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-24 text-center sm:py-32">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            Ready to sound like the expert you already are?
          </Reveal>
          <Reveal delay={120} className="mt-10 flex justify-center">
            <Button href="/contact" variant="onDark">
              Start a conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
