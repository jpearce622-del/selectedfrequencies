import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "We Accept Bitcoin for Podcasts",
  description:
    "One of the first UK podcast studios to accept Bitcoin. Why we take BTC and Lightning for editing and production, and how paying us by invoice all works.",
  path: "/bitcoin",
});

// The five "why" reasons, rendered as a grid of blocks. Each heading stays
// a real <h2> so the page is fully crawlable.
const reasons = [
  {
    heading: "We're part of the community we serve",
    body: "Some of our favourite work is producing Bitcoin and finance shows — the kind of shows that spend every episode explaining why sound money matters. It would be strange to make that work week after week and then insist on being paid only in the system those hosts are critiquing. Accepting Bitcoin is us practising what our clients preach, and it's why Bitcoin podcasters tend to feel at home working with us.",
  },
  {
    heading: "We believe in long-term thinking",
    body: "Podcasting rewards patience. The shows that win are the ones still publishing, still improving, years after everyone else quit. Bitcoin runs on the same logic — a bias toward the long game over the quick win. Choosing to hold and transact in it reflects how we approach the work itself: built to last, not built to churn. (This is our view, not financial advice — how you hold value is your call.)",
  },
  {
    heading: "It makes global work simple",
    body: "Our clients are all over the world. Traditional cross-border payments mean bank delays, currency conversion, and fees that eat into small invoices. Bitcoin settles anywhere on earth without asking permission from a bank, so a host in another country can pay as easily as one down the road — no wires, no FX surprises, no waiting days for funds to clear.",
  },
  {
    heading: "It's fast, final, and low-friction",
    body: "Over the Lightning Network, a Bitcoin payment settles in seconds for a fraction of a percent in fees. There are no chargebacks to chase and no card processor sitting in the middle taking a cut. For a small studio, that means less admin and more time spent on the actual edit.",
  },
  {
    heading: "You're never locked in",
    body: "Bitcoin is welcome here, not required. If you'd rather pay by card, bank transfer, or invoice in your local currency, that's completely fine — nothing about working with us depends on it. We simply make Bitcoin an easy, first-class option for the many clients who prefer it.",
  },
];

// Visible FAQ + FAQPage JSON-LD are built from the same source so they
// always stay in parity. The "first" answer is deliberately hedged.
const faqs = [
  {
    question:
      "Is Selected Frequencies the first UK podcast studio to accept Bitcoin?",
    answer:
      "As far as we can tell, we're one of the first UK podcast studios to accept Bitcoin as payment for production. We found platforms that let listeners tip podcasters in Bitcoin, but no other UK or US podcast studio openly inviting clients to pay their production invoice in BTC. We don't claim to be the definitive first — just among the earliest.",
  },
  {
    question: "Why does Selected Frequencies accept Bitcoin?",
    answer:
      "We produce a lot of Bitcoin and finance shows, so being paid in BTC is us practising what our clients preach. We also value long-term thinking, and Bitcoin makes global payments simple, fast, and low-friction — settling anywhere on earth in seconds without a bank in the middle.",
  },
  {
    question: "Can I pay for podcast editing in Bitcoin?",
    answer:
      "Yes. You can pay for editing, show notes, and full production in Bitcoin — on-chain or over Lightning — alongside the usual card and bank options.",
  },
  {
    question: "Do you accept Lightning payments?",
    answer:
      "Yes. Over the Lightning Network a Bitcoin payment settles in seconds for a fraction of a percent in fees, with no chargebacks and no card processor taking a cut.",
  },
  {
    question: "Do I have to pay in Bitcoin?",
    answer:
      "No. Bitcoin is welcome, not required. You can pay by card, bank transfer, or invoice in your local currency — nothing about working with us depends on it.",
  },
  {
    question: "How does paying in Bitcoin work?",
    answer:
      "We agree the scope and price for your show in your local currency, then send an invoice with the equivalent Bitcoin amount. You pay on-chain or over Lightning, whichever suits the payment, and we confirm once it settles. New to it? We'll walk you through it — it's easier than the first time you set up online banking.",
  },
];

export default function BitcoinPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow="Among the first UK podcast studios to take BTC"
        title="We accept Bitcoin."
        intro="Selected Frequencies is a podcast production studio that takes Bitcoin — and, as far as we can tell, one of the first in the UK to do it. You can pay for editing, show notes, and full production in BTC — on-chain or over Lightning — alongside the usual card and bank options. We're not bolting a crypto logo onto a checkout for the novelty of it; Bitcoin is part of how we think and who we work with. Here's why."
      >
        <p className="text-sm text-muted">
          New to the space? Browse our pick of the{" "}
          <Link
            href="/best-bitcoin-podcasts"
            className="font-medium text-accent hover:text-accent-bright"
          >
            best Bitcoin &amp; crypto podcasts
          </Link>
          .
        </p>
      </PageHeader>

      {/* A first for UK podcast production */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A first for UK podcast production
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            When we looked, we couldn&apos;t find another UK or US podcast studio
            that openly takes Bitcoin for its work — plenty of platforms that let
            listeners tip creators in sats, but no production studio inviting
            clients to pay their invoice in BTC. So we decided to be one.
            We&apos;re not going to plant a flag we can&apos;t defend and call
            ourselves &quot;the first ever&quot; — but as best we can tell,
            accepting Bitcoin for full podcast production puts us at the very
            front of a very short queue in the UK.
          </p>
        </Reveal>
      </Section>

      {/* The five reasons, as blocks */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why we take Bitcoin
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.heading} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {reason.heading}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How paying in Bitcoin works */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How paying in Bitcoin works
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            It&apos;s straightforward. We agree the scope and price for your show
            in your local currency, then send an invoice with the equivalent
            Bitcoin amount. You pay on-chain or over Lightning, whichever suits
            the size of the payment, and we confirm once it settles. If
            you&apos;ve never paid a business in Bitcoin before, we&apos;ll walk
            you through it — it&apos;s easier than the first time you set up
            online banking.
          </p>

          {/* Payment details are deliberately NOT published here. Payment
              details go out per-invoice: a static public address invites
              address-reuse privacy loss and address-spoofing scams, and a
              per-invoice destination is safer for both sides. */}
          <div className="mt-6 max-w-3xl rounded-xl border border-border bg-surface p-5 text-sm leading-6 text-muted">
            <span className="font-medium text-foreground">Payment details:</span>{" "}
            We don&apos;t publish a wallet address on this page. Payment details
            are sent with your invoice, so every payment goes to a fresh
            destination — better for your privacy and ours, and it means nobody
            can spoof a public address and pass it off as us. Just{" "}
            <Link
              href="/contact"
              className="font-medium text-accent hover:text-accent-bright"
            >
              get in touch
            </Link>{" "}
            and we&apos;ll take it from there.
          </div>
        </Reveal>
      </Section>

      {/* FAQ (visible; mirrored in FAQPage JSON-LD above) */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Common questions
          </h2>
        </Reveal>
        <dl className="mt-10 space-y-4">
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

      {/* Closing CTA */}
      <section className="bg-deep text-background">
        <Container className="py-20 text-center sm:py-28">
          <Reveal
            as="h2"
            className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Ready to get your show sounding right — and pay in Bitcoin?
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-background/70">
              Tell us about your show. Whether you pay in BTC or pounds, the work
              is the same: editing, show notes, and distribution, handled.
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
              href="/work"
              className="group inline-flex items-center gap-1 text-base font-medium text-background/85 hover:text-background"
            >
              See the work
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
