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
import { MicScrollStory } from "@/components/home/MicScrollStory";
import { HeroOverlay } from "@/components/home/HeroOverlay";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Podcast Editing & Production Studio",
    description:
      "Full-service podcast editing and production, handled end to end. UK-based, working with clients across the UK, the US and Europe. Get a quote today.",
    path: "/",
  }),
  // The root segment doesn't apply the layout's "%s | Selected Frequencies"
  // template to its own title, so set the full document title explicitly.
  title: {
    absolute: "Podcast Editing & Production Studio | Selected Frequencies",
  },
};

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
  // Founded 2019; James has worked in professional audio since 2017 — the
  // "8 yrs" figure refers to the audio career, so label it accordingly.
  { value: "8 yrs", label: "In professional audio since 2017" },
  { value: "End-to-end", label: "From raw audio to promoted episode" },
  { value: "Any genre", label: "Bitcoin & finance a speciality" },
];

export default function Home() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>

      {/* ---------- Scroll-scrubbed mic story, with the above-the-fold hero
          overlaid on it. The hero is a plain server component (no client
          animation), so the H1, subhead, and CTA are in the initial HTML and
          visible without scrolling. ---------- */}
      <MicScrollStory hero={<HeroOverlay />} />

      {/* ---------- Client trust strip: brand logos, immediately below the
          hero. Greyscale → colour on hover, wraps on mobile. ---------- */}
      <section className="border-t border-border py-10 sm:py-12">
        <Container>
          <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
            We&apos;ve worked with
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

      {/* ---------- Shows we produce — artwork marquee, each cover links to
          its case study (kept here for the case-study links it adds) ---------- */}
      <section className="border-t border-border py-14">
        <Container>
          <p className="mb-9 text-center text-sm font-medium text-muted-foreground">
            Shows we produce
          </p>
        </Container>
        <LogoMarquee />
      </section>

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
