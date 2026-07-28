import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata, siteConfig } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  bitcoinPodcasts,
  type BitcoinPodcast,
} from "@/content/bitcoin-podcasts";

const PAGE_TITLE = "Best Bitcoin & Crypto Podcasts 2026";
const PAGE_DESCRIPTION =
  "A hand-picked directory of the best Bitcoin and crypto podcasts to follow in 2026 — sound money, macro, and investing shows, plus where to listen to each.";

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/best-bitcoin-podcasts",
});

function ListenLinks({ show }: { show: BitcoinPodcast }) {
  const links = [
    { label: "Spotify", url: show.spotifyUrl },
    { label: "Apple", url: show.appleUrl },
    { label: "Website", url: show.websiteUrl },
  ].filter((l) => l.url);

  if (links.length === 0) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
      <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
        Listen on
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:text-accent-bright"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function PodcastCard({ show }: { show: BitcoinPodcast }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex items-start gap-4">
        {show.artwork && (
          <Image
            src={show.artwork}
            alt={`${show.name} cover art`}
            width={160}
            height={160}
            className="h-16 w-16 shrink-0 rounded-xl border border-border object-cover sm:h-20 sm:w-20"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {show.name}
              </h3>
              <p className="mt-1 text-sm text-muted">Hosted by {show.host}</p>
            </div>
            {show.producedByUs && show.caseStudyUrl && (
              <Link
                href={show.caseStudyUrl}
                className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
              >
                Produced by Selected Frequencies
              </Link>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{show.description}</p>

      {show.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {show.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-md bg-fog px-2 py-0.5 text-xs text-muted"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto">
        <ListenLinks show={show} />
      </div>
    </div>
  );
}

export default function BestBitcoinPodcastsPage() {
  const shows = bitcoinPodcasts;

  const canonical = `${siteConfig.url}/best-bitcoin-podcasts`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: canonical,
    mainEntity: {
      "@type": "ItemList",
      name: PAGE_TITLE,
      itemListElement: shows.map((show, i) => {
        const url = show.websiteUrl || show.appleUrl || show.spotifyUrl;
        return {
          "@type": "ListItem",
          position: i + 1,
          name: show.name,
          ...(url ? { url } : {}),
        };
      }),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="A hand-picked directory · updated for 2026"
        title="The best Bitcoin & crypto podcasts to follow in 2026"
        intro="Bitcoin and crypto move faster than any news cycle can keep up with. The best way to actually understand them isn't a headline — it's the people thinking out loud about them every week, in public, over years."
      >
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            This is a hand-picked list, not an algorithm — shows we think are
            genuinely worth your time, spanning sound-money philosophy, macro,
            investing, and building in the space. We update it as we find more
            worth featuring.
          </p>
          <p>
            A couple of the shows below are ones we produce. The rest are here
            simply because they&apos;re good.
          </p>
        </div>
      </PageHeader>

      {/* The list */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The shows
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {shows.map((show, i) => (
            <Reveal key={show.name} delay={(i % 2) * 90}>
              <PodcastCard show={show} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we chose these */}
      <Section className="border-t border-border bg-fog">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How we chose these
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            This is a curated list, not a scrape of the charts. We favour shows
            that publish consistently, choose signal over hype, and take
            production seriously — the ones still worth your time a year from
            now. It reflects our own listening as a studio that works in this
            space every week, and it&apos;s updated as we come across more worth
            featuring.
          </p>
        </Reveal>
      </Section>

      {/* Soft CTA */}
      <Section className="border-t border-border">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Run a Bitcoin or crypto podcast?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
              We produce several shows in this space — editing, show notes, and
              distribution, handled. We even accept Bitcoin as payment.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Button href="/services">See what we do</Button>
              <Link
                href="/bitcoin"
                className="group inline-flex items-center gap-1 text-base font-medium text-accent hover:text-accent-bright"
              >
                We accept Bitcoin
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
