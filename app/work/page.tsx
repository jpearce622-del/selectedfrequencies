import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
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
      <Section className="pt-20 sm:pt-28">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Work
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          A selection of the expert and thought-leadership shows I produce
          for.
        </p>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) =>
            client.hasCaseStudy ? (
              <Link
                key={client.slug}
                href={`/work/${client.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-8 transition hover:border-accent"
              >
                <p className="text-sm font-medium text-muted">
                  {client.clientName}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight group-hover:text-accent">
                  {client.showName}
                </h2>
                <span className="mt-6 inline-block text-sm font-medium text-accent">
                  Read the case study →
                </span>
              </Link>
            ) : (
              <div
                key={client.slug}
                className="rounded-2xl border border-border bg-surface p-8 opacity-70"
              >
                <p className="text-sm font-medium text-muted">
                  {client.clientName}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight">
                  {client.showName}
                </h2>
                <span className="mt-6 inline-block text-sm font-medium text-muted-foreground">
                  Case study coming soon
                </span>
              </div>
            )
          )}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Link
          href="/work/archive"
          className="text-sm font-medium text-accent"
        >
          Looking for earlier music/radio production work? →
        </Link>
      </Section>
    </>
  );
}
