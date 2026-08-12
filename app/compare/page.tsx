import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import {
  getAlternativePages,
  getHeadToHeadPages,
} from "@/lib/comparison-pages";
import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Index of the competitor comparison pages.
 *
 * This page exists mainly so the comparisons aren't orphaned: they're linked
 * from the footer and the sitemap, but not from the main navigation. That's
 * deliberate — someone browsing the site is a prospect, and leading them to
 * a page about our competitors is a poor use of their attention. Someone
 * arriving from a search for "[competitor] alternative" has already made
 * that comparison their business.
 */
export const metadata: Metadata = buildMetadata({
  title: "Compare Podcast Production Companies",
  description:
    "Honest comparisons between podcast production companies, including us — where each is the better choice, and where we're not the right fit.",
  path: "/compare",
});

function CompareCard({ page }: { page: ComparisonPage }) {
  return (
    <Link
      href={`/compare/${page.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {page.h1}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {page.seo.metaDescription}
      </p>
      <span className="mt-5 text-sm font-medium text-accent">
        Read the comparison →
      </span>
    </Link>
  );
}

export default function ComparePage() {
  const alternatives = getAlternativePages();
  const headToHeads = getHeadToHeadPages();

  return (
    <>
      <PageHeader
        eyebrow="Compare"
        title="Honest comparisons."
        intro="We're a podcast production company, so we have an obvious interest in these. We've written each one from the other company's own public material, and said plainly where they're the better choice — because on several of these, they are."
      />

      <Section className="border-t border-border">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Looking at one agency in particular
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            Where we sit next to a specific company, and which buyer each of us
            actually suits.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {alternatives.map((page) => (
            <Reveal key={page.slug}>
              <CompareCard page={page} />
            </Reveal>
          ))}
        </div>
      </Section>

      {headToHeads.length > 0 && (
        <Section className="border-t border-border">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Comparing two other agencies
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
              Neither of these is us. They&rsquo;re here because the comparison
              is genuinely useful and nobody else had written it fairly.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {headToHeads.map((page) => (
              <Reveal key={page.slug}>
                <CompareCard page={page} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section className="border-t border-border">
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Every comparison is based on publicly available information from
            each company&rsquo;s own website, with the date it was checked shown
            on the page. We have no affiliation with, and are not endorsed by,
            any company named. If something is out of date or wrong,{" "}
            <Link href="/contact" className="underline hover:text-accent">
              tell us
            </Link>{" "}
            and we&rsquo;ll correct it.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
