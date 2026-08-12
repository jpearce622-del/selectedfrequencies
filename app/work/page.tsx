import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/clients";

export const metadata: Metadata = buildMetadata({
  title: "Podcast Production Case Studies",
  description:
    "Case studies from the podcasts we produce — Bitcoin, finance, genetics, strategy, and coaching shows. See the work, plus the results behind each show.",
  path: "/work",
});

/**
 * Show artwork at the head of a card.
 *
 * Square because podcast cover art is square — cropping it to a banner
 * reliably slices the title off the top or bottom, which is the one thing
 * artwork can't survive. A 16:9 crop was the obvious way to keep the cards
 * short and it is the wrong call for this specific image shape.
 *
 * `sizes` matches the grid (1 / 2 / 3 columns) so Next serves a ~380px image
 * rather than the full-resolution cover on a phone.
 */
function Artwork({
  client,
  muted = false,
}: {
  client: (typeof clients)[number];
  muted?: boolean;
}) {
  if (!client.logo) {
    // No artwork yet: a plain tinted panel keeps the card the same height as
    // its neighbours instead of collapsing the row.
    return <div className="aspect-square w-full bg-fog" aria-hidden />;
  }
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-fog">
      <Image
        src={client.logo}
        alt={client.logoAlt ?? `${client.showName} cover art`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
        className={`object-cover transition-transform duration-500 ${
          muted ? "opacity-70" : "group-hover:scale-[1.03]"
        }`}
      />
      {/* Several covers are white or near-white at the edges (Outthinkers is
          white crumpled paper), which dissolves into a white card and loses
          the artwork's boundary. A hairline inset ring puts the edge back
          without drawing a hard border over darker covers. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.07]"
      />
    </div>
  );
}

export default function WorkIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Shows we have worked on."
        intro="A selection of the shows we have worked on — from genetics research to bitcoin and career change."
      />

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) =>
            client.hasCaseStudy ? (
              <Reveal key={client.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/work/${client.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]"
                >
                  <Artwork client={client} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {client.clientName}
                    </p>
                    <h2 className="font-display mt-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                      {client.showName}
                    </h2>
                    {/* mt-auto pins the CTA to the bottom, so cards in a row
                        stay aligned even when a show name wraps to two lines. */}
                    <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Read the case study
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ) : (
              <Reveal key={client.slug} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/50">
                  <Artwork client={client} muted />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {client.clientName}
                    </p>
                    <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-foreground/80 sm:text-2xl">
                      {client.showName}
                    </h2>
                    <span className="mt-auto pt-6 inline-block text-sm font-medium text-muted-foreground">
                      Case study coming soon
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>
      </Section>

      {/* Context for the grid above. The page was 187 words — thin enough
          that search engines had almost nothing to read it on, since a wall
          of client cards is mostly links. This explains what the work
          actually involves and routes to the relevant service pages. */}
      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What producing these shows involves
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
            <p>
              Every show above is different — a genetics researcher
              interviewing scientists needs something other than a weekly
              bitcoin conversation or a career-change coach talking to one
              guest at a time. What they share is that the host records, and
              everything after that is handled here: the edit, the sound, the
              episode description, the chapters, and the assets that carry the
              episode beyond the feed.
            </p>
            <p>
              Most run weekly, which is the part that quietly ends podcasts.
              Producing one good episode is straightforward; producing one
              every week for three years, without the quality drifting or the
              schedule slipping, is a different job — and it is the one these
              clients hand over. Some have been publishing continuously since
              2021.
            </p>
            <p>
              Each case study below covers the specific production problem
              that show poses and how it is solved. If you want the shape of
              the service rather than the examples, the{" "}
              <Link
                href="/services"
                className="font-medium text-accent hover:text-accent-bright"
              >
                services and rates
              </Link>{" "}
              page lists what is included at each tier, and the{" "}
              <Link
                href="/podcast-editing-cost-calculator"
                className="font-medium text-accent hover:text-accent-bright"
              >
                editing cost calculator
              </Link>{" "}
              works out what doing it yourself costs in time.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Link
          href="/work/archive"
          className="text-sm font-medium text-accent hover:text-accent-bright"
        >
          Looking for earlier music/radio production work? →
        </Link>
      </Section>
    </>
  );
}
