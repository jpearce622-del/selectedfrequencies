import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PodcastRoadmapChecklist } from "@/components/tools/PodcastRoadmapChecklist";
import { roadmapSteps, roadmapFaqs } from "@/content/podcast-roadmap";

const PATH = "/podcast-launch-roadmap";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata: Metadata = buildMetadata({
  title: "How to Start a Podcast: 9-Step Launch Checklist (2026)",
  description:
    "A free, interactive 9-step checklist to start a podcast from scratch — concept, gear, recording, editing, hosting, and promotion — with beginner tips plus time and cost estimates. Tick off each step as you go.",
  path: PATH,
});

// ---------- Structured data ----------
// Two JSON-LD blocks, both built from the same content module the page
// renders visibly (content/podcast-roadmap.ts) so the markup and the
// on-page copy can never disagree.

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Start a Podcast: A 9-Step Launch Checklist",
  description:
    "Step-by-step guide to starting a podcast for beginners, from choosing your concept and gear to recording, editing, hosting, publishing, and promoting your first episode.",
  totalTime: "P14D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "GBP",
    value: "150",
  },
  supply: [
    { "@type": "HowToSupply", name: "USB microphone" },
    { "@type": "HowToSupply", name: "Closed-back headphones" },
    { "@type": "HowToSupply", name: "Laptop or computer" },
  ],
  tool: [
    { "@type": "HowToTool", name: "Free recording software (Audacity or GarageBand)" },
    { "@type": "HowToTool", name: "Podcast host with RSS feed" },
  ],
  step: roadmapSteps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: `${step.description} Tip: ${step.tip}`,
    url: `${CANONICAL}#step-${step.id}`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: roadmapFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PodcastLaunchRoadmapPage() {
  return (
    <>
      {/* HowTo + FAQPage structured data (server-rendered, crawlable) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ---------- Hero (single h1) ---------- */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Free tool · Beginner podcasters
            </p>
          </Reveal>
          <Reveal
            as="h1"
            delay={80}
            className="font-display mt-4 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
          >
            How to start a podcast: a 9-step launch checklist
          </Reveal>
          {/* Answer-first intro paragraph — real static HTML for crawlers */}
          <Reveal delay={160} className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">
              You can start a podcast in nine steps and launch for under £150.
              This free interactive checklist walks you through every stage —
              from nailing your concept to promoting episode one — with a
              beginner tip and a rough time and cost estimate for each. Tick
              off steps as you complete them; your progress saves automatically
              in your browser.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Interactive checklist ---------- */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <PodcastRoadmapChecklist steps={roadmapSteps} />

            {/* ---------- The punchline: a fake "Step 10" that rhymes with
                the nine real steps above ---------- */}
            <Reveal delay={80}>
              <div className="group relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-deep to-deep-soft p-6 text-background transition-transform duration-300 hover:-translate-y-0.5 sm:p-8">
                {/* Ambient accent glow — brightens on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/25 opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex gap-4 sm:gap-5">
                  {/* Pre-ticked badge — the joke is it's already done for you */}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10.5l3.5 3.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-background/50">
                      Step 10 · optional, but very tempting
                    </p>
                    <h2 className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                      Or&hellip; just hire us.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-background/70">
                      Steps 1&ndash;9 are genuinely doable. They&rsquo;re also
                      your evenings, your weekends, and one very dark night
                      learning what a de-esser is. Step 10 is simpler: you send
                      one email, and all of that quietly becomes our problem
                      instead.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Button href="/contact" variant="onDark">
                        Skip to step 10
                      </Button>
                      <span className="text-xs text-background/45">
                        No mic gain was harmed in the making of this shortcut.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- FAQ (static, server-rendered HTML) ---------- */}
      <section className="border-t border-border bg-fog">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Starting a podcast: FAQs
              </h2>
              <p className="mt-4 text-lg text-muted">
                The questions every first-time podcaster asks before they hit
                record.
              </p>
            </Reveal>

            <dl className="mt-10 space-y-4">
              {roadmapFaqs.map((faq, i) => (
                <Reveal key={faq.question} delay={(i % 3) * 70}>
                  <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                    <dt className="font-display text-lg font-semibold tracking-tight">
                      {faq.question}
                    </dt>
                    <dd className="mt-3 text-sm leading-7 text-muted">
                      {faq.answer}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ---------- Internal-link CTA (navy) ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-20 text-center sm:py-28">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Launched your show? The next challenge is keeping it consistent.
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-background/70">
              Editing, show notes, and promotion are what quietly eat a
              podcaster's week. Selected Frequencies produces expert and
              thought-leadership shows end to end — so you can focus on the
              ideas, not the timeline.
            </p>
          </Reveal>
          <Reveal
            delay={200}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <Button href="/contact" variant="onDark">
              Start a conversation
            </Button>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1 text-base font-medium text-background/85 hover:text-background"
            >
              See what we do
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
