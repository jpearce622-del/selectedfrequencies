import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { getCachedReport } from "@/lib/feed-checker/store";
import { ReportView } from "@/components/tools/feed-checker/ReportView";

/**
 * Shareable report permalink.
 *
 * Reads straight from the same cache the API writes to, so a link works for
 * as long as the report lives (a few hours) and then expires honestly rather
 * than re-running someone else's feed check on demand.
 *
 * noindex is deliberate: these are other people's feeds, the content is
 * near-duplicate page to page, and thousands of thin auto-generated URLs in
 * the index would do the site's own rankings no favours. Social previews
 * still work — noindex has no bearing on Open Graph.
 */

// The cache is per-request state, not build-time content.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = await getCachedReport(slug);

  const title = report
    ? `${report.meta.title ?? "Podcast feed"} — feed health ${report.score}/100`
    : "Feed report expired";

  const description = report
    ? `${report.verdict} ${report.criticalCount} critical, ${report.warningCount} worth fixing, ${report.passCount} passed. Checked free with the Selected Frequencies RSS feed health checker.`
    : "This feed report has expired. Run a free check on your own podcast feed in seconds.";

  return {
    title,
    description,
    // Never indexed — see the note above. Links are still followed so the
    // tool page itself gets the benefit of anyone sharing a report.
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${siteConfig.url}/tools/feed-checker/r/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/tools/feed-checker/r/${slug}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: absoluteUrl(siteConfig.ogImage) }],
    },
  };
}

export default async function SharedReportPage({ params }: Props) {
  const { slug } = await params;
  const report = await getCachedReport(slug);

  if (!report) {
    return (
      <section className="pt-24 pb-24 sm:pt-32">
        <Container className="max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Feed Checker
          </p>
          <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            This report has expired
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Reports are kept for a few hours and then cleared. Feeds change, so
            a stale report would be worse than none — run a fresh check
            instead, it takes seconds.
          </p>
          <Link
            href="/tools/feed-checker"
            className="mt-7 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Check a feed →
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-12">
        <Container className="max-w-3xl">
          <Link
            href="/tools/feed-checker"
            className="text-sm font-medium text-accent hover:text-accent-bright"
          >
            ← RSS Feed Health Checker
          </Link>
          <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Feed health report
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted">
            A shared result. Feeds change — if this is your show and
            you&rsquo;ve made fixes since,{" "}
            <Link
              href="/tools/feed-checker"
              className="font-medium text-accent hover:text-accent-bright"
            >
              run it again
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-3xl">
          <ReportView report={report} />
        </Container>
      </section>

      <section className="border-t border-border py-14">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Check your own feed
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">
            Free, no sign-up, no email. Around sixty checks against what Apple
            and Spotify actually require, with the fix for each one.
          </p>
          <Link
            href="/tools/feed-checker"
            className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Run a free check →
          </Link>
        </Container>
      </section>
    </>
  );
}
