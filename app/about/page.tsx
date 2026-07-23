import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Selected Frequencies — eight years producing podcasts, now specializing in expert and thought-leadership shows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <div className="grid gap-12 sm:grid-cols-[1fr_2fr] sm:items-start">
          <Image
            src="/images/about/headshot.svg" // TODO: replace with real headshot
            alt="[PLACEHOLDER — headshot alt text]"
            width={480}
            height={480}
            className="w-full max-w-xs rounded-2xl border border-border object-cover"
          />

          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              About
            </h1>
            <p className="mt-6 text-lg text-muted">
              [PLACEHOLDER — background: how you got into podcast
              production, your path over the last 8 years.]
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <h2 className="text-xl font-semibold">
          Why expert and thought-leadership podcasts, now
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          [PLACEHOLDER — the reasoning behind repositioning from broad
          &quot;any podcast&quot; work toward founders, coaches, and finance
          voices building authority through audio.]
        </p>
      </Section>

      <Section className="border-t border-border">
        <h2 className="text-xl font-semibold">Credentials & experience</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>8 years producing podcasts, 2019–present</li>
          <li>
            [PLACEHOLDER — client roster scale, episode count, or other
            credibility markers you want to lead with]
          </li>
        </ul>
      </Section>

      <Section className="border-t border-border text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s talk about your show
        </h2>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
