import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { regions, timeBenchmarks, sources } from "@/data/editing-benchmarks";
import { tiers, formatGBP, UK_AGENCY_RANGE } from "@/data/pricing";

const PAGE_TITLE =
  "Podcast Editing Cost Calculator";
const PAGE_DESCRIPTION =
  "Free calculator: work out what editing your own podcast costs you each year, and compare it against hiring an editor. Real UK and US benchmark rates 2026.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/podcast-editing-cost-calculator",
});

const faqs = [
  {
    question: "How long does it take to edit a podcast episode?",
    answer:
      "Editing typically takes 2–4× the episode length. A 60-minute episode usually takes an experienced editor 1–2 hours, while narrative or complex multi-guest shows take 3–5× longer.",
  },
  {
    question: "How much does podcast editing cost in the UK?",
    answer:
      "UK audio-only podcast editing runs roughly £50–£400 per episode, with most freelancers between £100 and £250. A basic edit is around £30–£50, a standard edit with mixing and sound design £75–£150, and premium broadcast-quality work £200–£400. Production agencies typically charge £200–£850+.",
  },
  {
    question: "How much does professional podcast editing cost?",
    answer:
      "In the US, freelance editors charge roughly $50–$600 per episode — budget $50–$100, mid-tier $150–$350, and senior or specialist editors $350–$600. Hourly rates run $40–$120, and full-service agencies charge $300–$1,000 per episode.",
  },
  {
    question: "Is it cheaper to edit my own podcast?",
    answer:
      "It depends on what your time is worth. Editing yourself costs no money, but it does cost hours — usually 2–4× your episode length, every episode. Once you price those hours at your own hourly rate, DIY editing is often more expensive than hiring someone. If you're starting out, enjoy editing, or publish irregularly, doing it yourself can still make good sense.",
  },
  {
    question: "What's included in professional podcast editing?",
    answer:
      "At minimum: a full audio edit, sound cleanup, pacing, and levels mastered to a consistent loudness. Fuller packages add video editing, captions, intro and outro, show notes and chapters, episode artwork, social clips, and scheduling and publishing.",
  },
];

export default function CostCalculatorPage() {
  const uk = regions.uk;
  const us = regions.us;
  const url = `${siteConfig.url}/podcast-editing-cost-calculator`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Podcast Editing Cost Calculator",
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    description: PAGE_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "GBP",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />

      <PageHeader
        eyebrow="Free tool · UK 2026"
        title="What does editing your own podcast actually cost you?"
        intro="Most podcasters think of editing as free because no money changes hands — but it's the single biggest recurring time cost of running a show, and time has a price."
      >
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          This calculator puts a real number on it, using industry benchmark
          rates, so you can decide with actual figures instead of a vague
          feeling.
        </p>
      </PageHeader>

      {/* ---------- Calculator ---------- */}
      <Section className="border-t border-border">
        <CostCalculator />
      </Section>

      {/* ---------- How long editing takes ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How long does podcast editing actually take?
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              The rule of thumb is that editing takes{" "}
              <strong className="text-foreground">
                two to four times the episode length
              </strong>
              . A 60-minute conversation usually takes an experienced editor one
              to two hours; someone still learning the software can easily spend
              three or four.
            </p>
            <p>
              Narrative shows and complex multi-guest episodes take longer again
              — three to five times the runtime — because the work isn&apos;t
              just removing mistakes, it&apos;s shaping a story out of raw tape.
              Getting the sound right is its own skill on top of that; our{" "}
              <Link
                href="/blog/podcast-audio-quality-guide"
                className="font-medium text-accent hover:text-accent-bright"
              >
                audio quality guide
              </Link>{" "}
              covers what actually moves the needle.
            </p>
            <ul className="space-y-2.5">
              {timeBenchmarks.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* ---------- UK price guide (crawlable benchmark tables) ---------- */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What does professional podcast editing cost in the UK?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Here&apos;s what the UK market actually charges in 2026. These are
            independent industry averages, not our prices — use the currency
            toggle in the calculator above to switch to US rates.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {uk.rows.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <dt className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="font-display text-base font-semibold tracking-tight">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-accent">
                    {row.range}
                  </span>
                </dt>
                {row.note && (
                  <dd className="mt-1.5 text-sm leading-6 text-muted">
                    {row.note}
                  </dd>
                )}
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted">{uk.caveat}</p>

          <h3 className="font-display mt-10 text-lg font-semibold tracking-tight">
            US rates for comparison
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {us.rows.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <dt className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="font-display text-base font-semibold tracking-tight">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-accent">
                    {row.range}
                  </span>
                </dt>
                {row.note && (
                  <dd className="mt-1.5 text-sm leading-6 text-muted">
                    {row.note}
                  </dd>
                )}
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
            For context, UK production agencies typically run {UK_AGENCY_RANGE}{" "}
            per episode. Our own rates start at{" "}
            {formatGBP(tiers[0].price)} per episode for audio editing only — see{" "}
            <Link
              href="/services"
              className="font-medium text-accent hover:text-accent-bright"
            >
              what each package includes
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      {/* ---------- Hidden in the hours ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What&apos;s hidden in the &quot;hours&quot; number
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              Most people count the edit itself and stop there. But the real
              weekly cost of a show includes everything wrapped around it:
              writing show notes, marking chapter timestamps, cutting clips for
              social, uploading and scheduling, and re-listening to check it all
              before it goes out.
            </p>
            <p>
              Those tasks are quietly substantial. Clip cutting alone can eat an
              hour an episode once you factor in captioning and formatting for
              each platform — our guide to{" "}
              <Link
                href="/blog/repurpose-podcast-content"
                className="font-medium text-accent hover:text-accent-bright"
              >
                repurposing podcast content
              </Link>{" "}
              breaks that down. Show notes carry their own weight too, since
              they&apos;re the only part of your episode a search engine can
              actually read — see{" "}
              <Link
                href="/blog/podcast-seo-guide"
                className="font-medium text-accent hover:text-accent-bright"
              >
                podcast SEO
              </Link>{" "}
              for why that matters.
            </p>
            <p>
              If you do those jobs yourself, tick the show notes box in the
              calculator — it adds an hour per episode, which is conservative.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- When DIY makes sense (honest) ---------- */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            When DIY editing genuinely makes sense
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              We&apos;re an editing studio, so you&apos;d expect us to say
              outsource. But plenty of the time, editing it yourself is the right
              call — and pretending otherwise would be daft.
            </p>
            <p>
              If you&apos;re just starting out, doing it yourself teaches you
              what a good episode sounds like, and that knowledge makes you a
              better host and a better client later. If you genuinely enjoy
              editing — and some people really do — that&apos;s a reason to keep
              it. And if you publish irregularly, the maths rarely justifies
              paying someone on retainer.
            </p>
            <p>
              Outsourcing starts to pay when the show is consistent, the
              schedule is tight, and the edit is the thing stopping you
              publishing. If you&apos;re not there yet, our{" "}
              <Link
                href="/podcast-launch-roadmap"
                className="font-medium text-accent hover:text-accent-bright"
              >
                free launch roadmap
              </Link>{" "}
              will get you going without spending a penny.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- FAQ (visible + mirrored in JSON-LD) ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Common questions
          </h2>
        </Reveal>
        <dl className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={(i % 3) * 70}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <dt className="font-display text-lg font-semibold tracking-tight">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">
                  {faq.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ---------- Sources ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-lg font-semibold tracking-tight">
            Sources
          </h2>
          <p className="mt-2 text-sm text-muted">
            Benchmark rates are drawn from these independent industry sources.
          </p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                UK
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {sources.uk.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                US &amp; general
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {sources.general.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-20 text-center sm:py-28">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Want those hours back?
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-background/70">
              Tell us about your show and we&apos;ll send a straightforward
              quote — full production, or just the edit. We even accept Bitcoin.
            </p>
          </Reveal>
          <Reveal
            delay={200}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <Button href="/contact" variant="onDark">
              Get a quote
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
