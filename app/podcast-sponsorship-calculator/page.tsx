import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SponsorshipCalculator } from "@/components/tools/SponsorshipCalculator";
import {
  placements,
  adTypes,
  categories,
  downloadThresholds,
  MARKET_CPM_RANGE,
  SEASONALITY_NOTE,
  sources,
} from "@/data/sponsorship-benchmarks";

const PAGE_TITLE = "Podcast Sponsorship Calculator";
const PAGE_DESCRIPTION =
  "Free calculator: work out what your podcast could earn from sponsorship. Enter your downloads and get CPM-based rates for pre-roll, mid-roll, and post-roll ads.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/podcast-sponsorship-calculator",
});

const faqs = [
  {
    question: "How much can a podcast earn from sponsorship?",
    answer:
      "It depends almost entirely on downloads per episode and how the deal is structured. Sponsorship is usually priced on CPM — cost per 1,000 downloads — and the 2026 market runs roughly $12–$55 CPM across formats and genres. A show with 1,000 downloads selling one mid-roll slot is in very different territory to one with 20,000. Below about 1,000 downloads, flat-rate and affiliate deals typically earn more than CPM maths would suggest.",
  },
  {
    question: "What is a good podcast CPM?",
    answer:
      "In 2026, pre-roll runs about $15–$25 CPM, mid-roll $25–$50, and post-roll $10–$20. By format, programmatic ads pay $12–$20, pre-recorded network ads $15–$30, and host-read sponsorships $25–$40. Niche high-value audiences in business, finance, and tech often clear $40+ CPM.",
  },
  {
    question: "How many downloads do you need to get sponsors?",
    answer:
      "Major ad networks typically want 10,000–20,000 downloads per episode, and many set minimums around 5,000–10,000. Some platforms start at 500. Affiliate, flat-rate, and lead-based deals have no minimum at all — shows with 200–1,000 downloads sign sponsors regularly by selling relevance rather than reach.",
  },
  {
    question: "What's the difference between pre-roll and mid-roll?",
    answer:
      "Pre-roll plays before the episode starts and post-roll after it ends, while mid-roll sits inside the episode. Mid-roll commands the highest price — around $25–$50 CPM against $15–$25 for pre-roll — because a listener who has reached the middle of an episode is demonstrably engaged, which is exactly the attention advertisers are buying.",
  },
];

export default function SponsorshipCalculatorPage() {
  const url = `${siteConfig.url}/podcast-sponsorship-calculator`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // WebPage rather than WebApplication — matching the decision already made
  // for the editing cost calculator. Google's software rich result requires
  // aggregateRating or review, which this tool genuinely lacks (nobody has rated
  // it), so the software type can only ever produce a validation error.
  // Inventing a rating to satisfy it would be fabricating user feedback.
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Podcast Sponsorship Calculator",
    url,
    description: PAGE_DESCRIPTION,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <PageHeader
        eyebrow="Free tool · 2026 benchmarks"
        title="What is your podcast worth to a sponsor?"
        intro="Sponsorship is priced on downloads, but the number you're quoted depends just as much on where the ad sits, who's listening, and how the deal is structured."
      >
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Enter your numbers below for a CPM-based estimate using 2026 industry
          benchmarks — plus an honest read on what&apos;s realistically open to a
          show your size.{" "}
          <Link
            href="/blog/how-to-get-podcast-sponsors"
            className="font-medium text-accent hover:text-accent-bright"
          >
            New to sponsorship? Read the full guide to finding and pitching
            sponsors.
          </Link>
        </p>
      </PageHeader>

      {/* ---------- Calculator ---------- */}
      <Section className="border-t border-border">
        <SponsorshipCalculator />
      </Section>

      {/* ---------- How pricing works ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How podcast sponsorship pricing actually works
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              Almost all podcast advertising is priced on <strong className="text-foreground">CPM</strong> — cost
              per <em>mille</em>, which just means cost per 1,000 downloads. If a
              sponsor pays a $25 CPM and your episode gets 2,000 downloads, that
              slot is worth $50. Multiply by the number of slots and the number
              of episodes, and you have the shape of a sponsorship deal.
            </p>
            <p>
              <strong className="text-foreground">Mid-roll commands a premium</strong> because
              of what reaching the middle of an episode proves. Anyone can hear a
              pre-roll by pressing play; only an engaged listener is still there
              twenty minutes in. Advertisers pay for that attention, which is why
              mid-roll runs roughly double post-roll.
            </p>
            <p>
              The other big divide is <strong className="text-foreground">host-read versus programmatic</strong>.
              A host-read spot is you, in your voice, vouching for something —
              that&apos;s a recommendation, and it converts like one. Programmatic
              ads are inserted automatically and sound like radio. The gap in
              price ($25–$40 against $12–$20) is really a gap in trust.
            </p>
            <p>{SEASONALITY_NOTE}</p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Benchmark tables ---------- */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Typical CPM rates in 2026
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Independent industry benchmarks, not our rates. Across every format
            and genre the market runs roughly ${MARKET_CPM_RANGE.low}–$
            {MARKET_CPM_RANGE.high} CPM.
          </p>

          <h3 className="font-display mt-8 text-lg font-semibold tracking-tight">
            By placement
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <th scope="col" className="px-5 py-3 font-medium">Placement</th>
                  <th scope="col" className="px-5 py-3 font-medium">CPM</th>
                  <th scope="col" className="px-5 py-3 font-medium">Why</th>
                </tr>
              </thead>
              <tbody>
                {placements.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-medium">{p.label}</td>
                    <td className="px-5 py-3 whitespace-nowrap text-accent">
                      ${p.low}–${p.high}
                    </td>
                    <td className="px-5 py-3 text-muted">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display mt-8 text-lg font-semibold tracking-tight">
            By ad type
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  <th scope="col" className="px-5 py-3 font-medium">Ad type</th>
                  <th scope="col" className="px-5 py-3 font-medium">CPM</th>
                  <th scope="col" className="px-5 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {adTypes.map((a) => (
                  <tr key={a.id} className="border-b border-border last:border-0">
                    <td className="px-5 py-3 font-medium">{a.label}</td>
                    <td className="px-5 py-3 whitespace-nowrap text-accent">
                      {a.low === a.high ? `$${a.low}+` : `$${a.low}–$${a.high}`}
                    </td>
                    <td className="px-5 py-3 text-muted">{a.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display mt-8 text-lg font-semibold tracking-tight">
            Downloads sponsors look for
          </h3>
          <ul className="mt-4 space-y-2.5">
            {downloadThresholds.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-sm leading-6 text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ---------- Niche vs size ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why your niche matters more than your size
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              A sponsor isn&apos;t buying downloads. They&apos;re buying access
              to a particular kind of person, and some people are far more
              expensive to reach than others. That&apos;s why business, finance,
              and tech shows often clear $40+ CPM while a general-interest show
              of the same size sits nearer $15.
            </p>
            <p>
              The practical consequence is that a small, sharply-defined audience
              is an asset rather than an apology. Two thousand people who all run
              small businesses are worth more to the right advertiser than twenty
              thousand people with nothing in common. If you can describe your
              listener in one specific sentence, you can charge for it.
            </p>
            <ul className="space-y-2.5">
              {categories.map((c) => (
                <li key={c.id} className="flex items-start gap-2.5 text-sm leading-6">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-foreground">{c.label}:</strong> {c.note}
                  </span>
                </li>
              ))}
            </ul>
            <p>
              Knowing your real numbers matters here — our guide to{" "}
              <Link
                href="/blog/podcast-analytics-metrics-that-matter"
                className="font-medium text-accent hover:text-accent-bright"
              >
                the podcast metrics that actually matter
              </Link>{" "}
              covers how downloads are counted and which figures a sponsor will
              ask for.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- When CPM isn't right ---------- */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            When CPM isn&apos;t the right model
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              CPM maths punishes small shows, because it prices you purely on
              volume. Under roughly 1,000 downloads an episode, the number it
              produces will look discouraging — and it will also understate what
              you can actually charge.
            </p>
            <p>
              <strong className="text-foreground">Flat-rate deals</strong> set a
              fixed fee per episode or series regardless of downloads. You&apos;re
              selling relevance rather than reach, which is exactly the argument a
              small specialist show should be making.{" "}
              <strong className="text-foreground">Affiliate and performance
              deals</strong> pay you on results — a promo code, a signup, a sale —
              with no download minimum at all. The income is less predictable, but
              it&apos;s the most accessible entry point there is.
            </p>
            <p>
              Both are covered properly in our{" "}
              <Link
                href="/blog/how-to-get-podcast-sponsors"
                className="font-medium text-accent hover:text-accent-bright"
              >
                guide to finding and pitching sponsors
              </Link>
              , along with what to put in a media kit and how to price yourself
              when the numbers are still small.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- FAQ ---------- */}
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
                <dd className="mt-2 text-sm leading-6 text-muted">{faq.answer}</dd>
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
            CPM ranges and download thresholds are drawn from these independent
            industry sources.
          </p>
          <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
            {sources.map((s) => (
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
        </Reveal>
      </Section>

      {/* ---------- CTA ---------- */}
      <section className="bg-deep text-background">
        <Container className="py-20 text-center sm:py-28">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Sponsors notice a well-made show.
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-background/70">
              Consistent audio, proper show notes, and clips that travel —
              that&apos;s what makes a show easy to sell. We handle all of it.
            </p>
          </Reveal>
          <Reveal
            delay={200}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <Button href="/contact?source=sponsorship-calculator" variant="onDark">
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
