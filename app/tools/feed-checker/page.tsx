import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { FeedCheckerFlow } from "@/components/tools/feed-checker/FeedCheckerFlow";
import { CATEGORIES, type CategoryId } from "@/lib/feed-checker/types";

export const metadata: Metadata = buildMetadata({
  // Under ~60 characters once the " | Selected Frequencies" suffix is added.
  title: "Free RSS Feed Health Checker",
  description:
    "Check your podcast RSS feed against Apple and Spotify requirements in seconds. Free, no sign-up — artwork, tags, GUIDs, audio files and Podcasting 2.0, all explained in plain English.",
  path: "/tools/feed-checker",
});

/**
 * The questions people actually type before they find a tool like this. Kept
 * in one array so the visible copy and the FAQPage schema can never drift
 * apart — a mismatch between them is a structured-data violation, not just
 * untidy.
 */
const faqs = [
  {
    q: "Why was my podcast rejected by Apple?",
    a: "Almost always the artwork. Apple requires a square JPEG or PNG between 1400×1400 and 3000×3000 pixels, in the RGB colour space, served over HTTPS. A CMYK JPEG is the classic silent rejection: it looks perfect in every browser and every preview, and Apple refuses it without telling you why. After artwork, the next most common causes are a missing itunes:category, a category name that isn't one of Apple's exact strings, and a feed served over plain HTTP.",
  },
  {
    q: "What is a podcast GUID and why does it matter?",
    a: "The GUID is the permanent identifier for an episode. Every platform uses it to decide whether it is looking at a new episode or one it already has. If your host regenerates GUIDs — because a timestamp, version number or cache-busting parameter is baked into them — every episode looks new every time the feed is polled. Listeners get a phantom back catalogue re-appearing in their app, and your download figures become meaningless. It is the single most damaging feed problem there is, and it is almost invisible until it happens.",
  },
  {
    q: "How do I fix a podcast feed that isn't updating?",
    a: "Work outwards. First confirm the feed itself returns HTTP 200 over HTTPS and that the newest episode is actually in the XML — plenty of 'not updating' reports are a scheduling setting in the host, not a feed fault. Then check the redirect chain: platforms follow redirects, but long chains get truncated and some aggregators give up. Then check pubDate is a valid RFC 2822 date, since a malformed or future-dated pubDate can hide an episode entirely. This checker tests all three.",
  },
  {
    q: "Does this store my feed URL?",
    a: "A feed URL is public by definition — it is the address you give to Apple, Spotify and every listener. Results are cached for a few hours against a hash of the URL so re-opening a report costs nothing, and then they expire. There is no account, no email capture and no tracking of who checked what.",
  },
  {
    q: "What is Podcasting 2.0 and do I need it?",
    a: "Podcasting 2.0 is a set of newer RSS tags — podcast:guid, podcast:transcript, podcast:funding, podcast:person and others — supported by apps like Fountain, Podverse and Podcast Addict. No mainstream platform requires any of it. That is why nothing in that section of the report can fail: those checks only ever add to your score. Treat them as opportunities, not obligations.",
  },
  {
    q: "How many episodes does the checker look at?",
    a: "Every episode in the feed is checked for structural problems — missing GUIDs, bad dates, missing enclosures — because those checks are cheap and a problem in episode 200 matters as much as one in episode 2. The audio files themselves are sampled rather than downloaded in full: the ten most recent plus five spread across the archive. Fetching a thousand audio files would take an hour and hammer your host for no extra insight.",
  },
];

/** The report's own categories, so this list can't drift from what runs. */
const CATEGORY_ORDER: CategoryId[] = [
  "transport",
  "structure",
  "channel",
  "artwork",
  "episodes",
  "enclosures",
  "modern",
];

export default function FeedCheckerPage() {
  const pageUrl = `${siteConfig.url}/tools/feed-checker`;

  // WebPage, not SoftwareApplication — same call as the other two tool pages.
  // The software rich result requires aggregateRating or review; this tool has
  // no ratings, and inventing them to satisfy a validator isn't an option.
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Podcast RSS Feed Health Checker",
    url: pageUrl,
    description:
      "Free tool that checks a podcast RSS feed against Apple and Spotify requirements and explains every problem in plain English.",
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd
        trail={[
          { name: "Tools", path: "/tools" },
          { name: "RSS Feed Health Checker", path: "/tools/feed-checker" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-12 text-center sm:pt-32 sm:pb-16">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Free Tool
            </p>
          </Reveal>
          <Reveal
            as="h1"
            delay={70}
            className="font-display mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            RSS Feed Health Checker
          </Reveal>
          <Reveal delay={130} className="mx-auto mt-5 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">
              Paste your podcast feed and get a scored report in seconds —
              every problem in plain English, with the fix. Checks the things
              Apple and Spotify reject feeds for, plus the ones that quietly
              break your download numbers.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              "No sign-up",
              "No email",
              "Every episode checked",
              "Shareable report",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
              >
                {label}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── The tool ─────────────────────────────────────────────── */}
      <section className="bg-fog py-12 sm:py-16">
        <Container className="max-w-3xl">
          <FeedCheckerFlow />
        </Container>
      </section>

      {/* ── What it checks ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              What it checks
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Around sixty checks in seven areas. Everything is graded by what
              it actually costs you: a missing artwork file can get the show
              rejected outright, a missing{" "}
              <code className="rounded bg-fog px-1 py-0.5 text-sm">
                podcast:transcript
              </code>{" "}
              tag costs you nothing today.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_ORDER.map((id, i) => (
              <Reveal key={id} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {CATEGORIES[id].label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {CATEGORIES[id].blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── The three that matter ────────────────────────────────── */}
      <section className="bg-fog py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              The three problems worth knowing about
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Most feed faults are cosmetic. These three are not, and all three
              are invisible until something has already gone wrong.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "CMYK artwork",
                body: "Apple requires artwork in the RGB colour space. A JPEG exported from print software is usually CMYK, and it looks completely normal in Finder, in your browser and in your host's preview. Apple rejects it without explaining why, which is how people end up re-uploading the same file for a week. The checker reads the colour space out of the image itself rather than trusting the file extension.",
              },
              {
                title: "Unstable GUIDs",
                body: "If your GUIDs contain a timestamp, a version number or a cache-busting parameter, they change when the feed regenerates. Every platform then treats every episode as brand new: listeners get your entire back catalogue pushed at them again, and your download figures stop meaning anything. The checker looks at every GUID in the feed for the patterns that cause this.",
              },
              {
                title: "Broken enclosures",
                body: "The audio URL in the feed is the only thing that actually delivers the episode. If it 404s, redirects endlessly, or declares the wrong file size, players fail in ways that look like listener-side problems. The checker fetches sampled audio files and reports what the server really returns — including whether it supports the byte-range requests that let apps seek.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How scoring works ────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              How the score works
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
              <p>
                Checks are weighted by consequence. Anything that can get a
                feed rejected counts for five times what a nice-to-have counts
                for, and a feed with even one of those problems is capped at 49
                however good the rest of it is. A score in the nineties with a
                critical failure sitting underneath it would be a comfortable
                lie, and the whole point of the tool is to tell you the thing
                you didn&rsquo;t know.
              </p>
              <p>
                Podcasting 2.0 tags are scored separately and can only ever add
                to the total. Nothing in that section can fail, because no
                platform requires any of it — a perfectly healthy, fully
                compliant feed with none of those tags still scores well.
              </p>
              <p>
                Every result comes with what it means and what to do about it.
                Where there is official guidance from Apple or the Podcasting
                2.0 spec, the report links straight to it rather than
                paraphrasing.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-fog py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Common questions
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 40}>
                <details className="group rounded-2xl border border-border bg-surface p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <h3 className="font-display text-base font-semibold tracking-tight">
                      {faq.q}
                    </h3>
                    <span
                      className="shrink-0 text-muted transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Context + internal links ─────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Why we built this
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
              <p>
                Every show we take on starts with reading its feed, and the
                same handful of problems come up over and over — usually on
                shows that have been running for years without anyone
                noticing. The existing validators tell you a tag is missing.
                They don&rsquo;t tell you that the missing tag is why your
                episodes appear a day late, or that your artwork is in the
                wrong colour space, or that your download graph has been
                fiction since your host migration.
              </p>
              <p>
                So this reports in plain English, with the fix attached. It is
                free and it always will be. If you get to the end of the report
                and decide you&rsquo;d rather someone else dealt with all of
                this, the{" "}
                <Link
                  href="/services"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  services and rates
                </Link>{" "}
                are published openly. Otherwise there are{" "}
                <Link
                  href="/tools"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  more free tools
                </Link>{" "}
                — including a{" "}
                <Link
                  href="/tools/show-notes-generator"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  show notes generator
                </Link>{" "}
                and a{" "}
                <Link
                  href="/podcast-launch-roadmap"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  launch checklist
                </Link>{" "}
                — and the{" "}
                <Link
                  href="/blog"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  blog
                </Link>{" "}
                covers editing, audio quality and podcast SEO.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
