import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  tiers,
  recordingSetups,
  formatGBP,
  CURRENCY,
  UK_AGENCY_RANGE,
  getSetup,
} from "@/data/pricing";

const mainTiers = tiers.filter((t) => !t.addOn);
const addOnTiers = tiers.filter((t) => t.addOn);

export const metadata: Metadata = buildMetadata({
  title: "Podcast Editing & Production Services",
  description:
    "Podcast editing from £110, audio and video production from £165, and full production from £335 per episode. Show notes, clips, and distribution included.",
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
  // Service + OfferCatalog built from data/pricing.ts, so the structured data
  // can never drift from the prices rendered above. The multi-cam supplement
  // is described in text rather than priced as a separate offer, to avoid
  // advertising a price that isn't a standalone purchasable item.
  const multiCam = getSetup("multi-cam");
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Podcast editing and production",
    serviceType: "Podcast production",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.url}/services`,
    description: siteConfig.positioning,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Podcast production services",
      itemListElement: tiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.price,
        priceCurrency: CURRENCY,
        description: [
          tier.forWho,
          `Includes: ${tier.includes.join(", ")}.`,
          tier.addOn
            ? undefined
            : multiCam
              ? `Prices are "from" prices, ${tier.unit}, covering standard remote or single-source recording. Multi-cam recording (2–3 cameras) adds ${formatGBP(multiCam.supplement)} per episode.`
              : undefined,
        ]
          .filter(Boolean)
          .join(" "),
        priceSpecification: {
          "@type": "PriceSpecification",
          price: tier.price,
          priceCurrency: CURRENCY,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
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

      {/* ---------- Rate card — all prices read from data/pricing.ts ---------- */}
      <Section className="border-t border-border" >
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Final pricing depends on episode length, format, and turnaround —
            get in touch and we&apos;ll send a straightforward quote.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {mainTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={(i % 3) * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl border bg-surface p-8 ${
                  tier.popular
                    ? "border-accent/50 shadow-xl shadow-accent/[0.07]"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {tier.name}
                </h3>
                <p className="mt-3">
                  <span className="text-sm text-muted">from </span>
                  <span className="font-display text-3xl font-semibold tracking-tight">
                    {formatGBP(tier.price)}
                  </span>{" "}
                  <span className="text-sm text-muted">{tier.unit}</span>
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{tier.forWho}</p>
                <ul className="mt-6 space-y-2.5">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-2">
                  <Button href="/contact">Get a quote</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Add-ons */}
        {addOnTiers.map((tier) => (
          <Reveal key={tier.id}>
            <div className="mt-6 rounded-2xl border border-border bg-fog p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {tier.name}{" "}
                  <span className="text-sm font-normal text-muted">(add-on)</span>
                </h3>
                <p>
                  <span className="text-sm text-muted">from </span>
                  <span className="font-display text-xl font-semibold">
                    {formatGBP(tier.price)}
                  </span>{" "}
                  <span className="text-sm text-muted">{tier.unit}</span>
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                {tier.includes.join(" · ")}
              </p>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* ---------- Recording setup supplement ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Recording setup
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            The prices above cover remote and single-source recordings — the way
            most shows are made. If you shoot with multiple cameras, that adds
            real work to every episode: syncing the angles, cutting between them,
            and matching colour across cameras. So it&apos;s charged as a
            supplement on top of your tier.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {recordingSetups.map((setup) => (
              <div
                key={setup.id}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <dt className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {setup.name}
                  </span>
                  <span className="text-sm font-medium text-accent">
                    {setup.supplement === 0
                      ? "Included"
                      : `+${formatGBP(setup.supplement)} per episode`}
                  </span>
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted">
                  {setup.description}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-muted">
            Shoots beyond three cameras, or unusual formats, are quoted
            individually.
          </p>
        </Reveal>
      </Section>

      {/* ---------- Market context + payment + calculator ---------- */}
      <Section className="border-t border-border">
        <Reveal>
          <div className="rounded-2xl border border-border bg-fog p-8">
            <p className="max-w-3xl text-base leading-7 text-muted">
              UK podcast production typically runs {UK_AGENCY_RANGE} per episode.
              We sit deliberately below that — same standard, less overhead.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">
              Not sure if outsourcing is worth it?{" "}
              <Link
                href="/podcast-editing-cost-calculator"
                className="font-medium text-accent hover:text-accent-bright"
              >
                Work out what editing it yourself actually costs you
              </Link>
              . And if you&apos;d rather pay in crypto, we accept Bitcoin —{" "}
              <Link
                href="/bitcoin"
                className="font-medium text-accent hover:text-accent-bright"
              >
                see how it works
              </Link>
              .
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
