import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/content/clients";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies from expert and thought-leadership podcasts produced by Selected Frequencies.",
  path: "/work",
});

export default function WorkIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Shows I produce for."
        intro="A selection of the expert and thought-leadership shows I produce — from genetics research to bitcoin and career change."
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
