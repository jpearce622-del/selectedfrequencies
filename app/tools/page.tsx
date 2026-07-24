import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Free Podcast Tools",
  description:
    "Free tools from Selected Frequencies — transcript generators, show notes drafters, and more for podcast producers and hosts.",
  path: "/tools",
});

const tools = [
  {
    href: "/tools/show-notes-generator",
    label: "Show Notes Generator",
    badge: "Free",
    description:
      "Upload a podcast episode and get back a full transcript plus draft show notes in minutes. No account needed.",
    tags: ["Transcription", "Show Notes", "AI"],
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Free Tools
            </p>
          </Reveal>
          <Reveal
            as="h1"
            delay={70}
            className="font-display mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Tools for podcasters
          </Reveal>
          <Reveal delay={130} className="mt-4 max-w-xl">
            <p className="text-lg leading-relaxed text-muted">
              Built by a production studio — these tools reflect what we use
              and care about in the process.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.href} delay={i * 60}>
                <Link
                  href={tool.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-black/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {tool.label}
                    </h2>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {tool.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-fog px-2 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 text-sm font-medium text-accent">
                    Try it free →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
