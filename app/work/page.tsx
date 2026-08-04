import type { Metadata } from "next";
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

export default function WorkIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Shows we produce for."
        intro="A selection of the shows we produce — from genetics research to bitcoin and career change."
      />

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, i) =>
            client.hasCaseStudy ? (
              <Reveal key={client.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/work/${client.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/[0.06]"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {client.clientName}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {client.showName}
                  </h2>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read the case study
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ) : (
              <Reveal key={client.slug} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface/50 p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {client.clientName}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground/80">
                    {client.showName}
                  </h2>
                  <span className="mt-8 inline-block text-sm font-medium text-muted-foreground">
                    Case study coming soon
                  </span>
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
