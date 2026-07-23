import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Selected Frequencies — eight years producing podcasts, now specializing in expert and thought-leadership shows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Container>
          <div className="grid gap-12 sm:grid-cols-[1fr_1.6fr] sm:items-center">
            <Reveal>
              <Image
                src="/images/about/headshot.svg" // TODO: replace with real headshot
                alt="[PLACEHOLDER — headshot alt text]"
                width={480}
                height={480}
                className="w-full max-w-xs rounded-2xl border border-border object-cover"
              />
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  About
                </p>
              </Reveal>
              <Reveal
                as="h1"
                delay={80}
                className="font-display mt-4 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl"
              >
                The producer behind the shows.
              </Reveal>
              <Reveal delay={160} className="mt-6 max-w-xl">
                <p className="text-lg leading-relaxed text-muted">
                  [PLACEHOLDER — background: how you got into podcast
                  production, your path over the last 8 years.]
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why expert and thought-leadership podcasts, now
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            [PLACEHOLDER — the reasoning behind repositioning from broad
            &quot;any podcast&quot; work toward founders, coaches, and finance
            voices building authority through audio.]
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Credentials &amp; experience
          </h2>
          <ul className="mt-5 space-y-2.5 text-base text-muted">
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              8 years producing podcasts, 2019–present
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              [PLACEHOLDER — client roster scale, episode count, or other
              credibility markers you want to lead with]
            </li>
          </ul>
        </Reveal>
      </Section>

      <Section className="border-t border-border text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s talk about your show
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </Reveal>
      </Section>
    </>
  );
}
