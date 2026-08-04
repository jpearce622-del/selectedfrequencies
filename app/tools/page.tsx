import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Free Podcast Tools & Calculators",
  description:
    "Free tools for podcasters — a 9-step launch checklist, an editing cost calculator, and a show notes generator. No sign-up, no catch, just useful things.",
  path: "/tools",
});

const tools = [
  {
    href: "/podcast-launch-roadmap",
    label: "Podcast Launch Roadmap",
    badge: "Free",
    description:
      "A tickable, 9-step checklist that walks you from idea to published episode — with tips, costs, and time estimates for each step.",
    tags: ["Getting Started", "Checklist", "Launch"],
  },
  {
    href: "/podcast-editing-cost-calculator",
    label: "Editing Cost Calculator",
    badge: "Free",
    description:
      "Work out what editing your own show actually costs you in time each year, and compare it against UK and US benchmark rates.",
    tags: ["Pricing", "Calculator", "Benchmarks"],
  },
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

      {/* Context, and routes out to the rest of the site. The page was a
          grid of cards — almost no readable text — which reads as thin to a
          crawler however useful the tools themselves are. */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Why these exist
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
              <p>
                Each of these started as something built for our own use.
                The launch roadmap is the checklist we walk new hosts through
                before their first recording. The cost calculator came from
                having the same conversation over and over with people who
                knew editing took a long time but had never put a number on
                it. The show notes generator runs the same transcription and
                drafting steps we use in production, just without the
                editorial pass a paying client gets.
              </p>
              <p>
                None of them require an account or a card, and none of them
                are trials that stop working. They are genuinely useful on
                their own, and if you decide the work is worth handing over
                rather than doing yourself, the{" "}
                <Link
                  href="/services"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  services and rates
                </Link>{" "}
                are published openly too — no quote form required to see a
                price. You can also read{" "}
                <Link
                  href="/work"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  how we produce the shows we work on
                </Link>
                , or browse the{" "}
                <Link
                  href="/blog"
                  className="font-medium text-accent hover:text-accent-bright"
                >
                  guides on editing, audio quality and podcast SEO
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
