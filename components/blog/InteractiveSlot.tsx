"use client";

import dynamic from "next/dynamic";
import type { InteractiveId } from "@/types/blog";

/**
 * Loads a section's interactive widget.
 *
 * This wrapper exists because `ssr: false` is only honoured inside a Client
 * Component — the article page is a Server Component, so the dynamic import
 * has to happen behind this boundary.
 *
 * SSR is off deliberately. The diagnostic reads a shared result out of the
 * URL on mount, which would differ between server and client markup and
 * produce a hydration mismatch. Rendering client-side only sidesteps that,
 * and costs nothing here because the article is complete without either
 * widget — they are enhancements, not content.
 *
 * The skeleton approximates the height of the loaded component so the article
 * doesn't jump when the chunk arrives. It can only ever be an approximation,
 * since both components reflow with viewport width, so the values below were
 * measured rather than guessed: at a 280px viewport the diagnostic settles
 * around 47rem and the funnel around 90rem, both shrinking substantially once
 * the input grid goes multi-column at the `sm` and `lg` breakpoints. In
 * practice both sit well below the fold, so a real load records no layout
 * shift at all.
 */

function Skeleton({ label, height }: { label: string; height: string }) {
  return (
    <div
      className={`not-prose my-10 flex ${height} items-center justify-center rounded-3xl border border-border bg-surface`}
    >
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

const GrowthDiagnostic = dynamic(
  () => import("@/components/tools/GrowthDiagnostic"),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        label="Loading the diagnostic…"
        height="min-h-[44rem] sm:min-h-[34rem]"
      />
    ),
  }
);

const DiscoveryLeak = dynamic(() => import("@/components/tools/DiscoveryLeak"), {
  ssr: false,
  loading: () => (
    <Skeleton
      label="Loading the funnel…"
      height="min-h-[62rem] sm:min-h-[44rem] lg:min-h-[38rem]"
    />
  ),
});

/**
 * Unlike the two above, this one is server-rendered ON PURPOSE — note the
 * absence of `ssr: false`. Its annotations are the substance of the article
 * they appear in, so they have to exist in the initial HTML for crawlers and
 * for readers without JavaScript. It holds no URL-derived state, so there's
 * no hydration mismatch to avoid.
 */
const ShowNotesAnatomy = dynamic(
  () => import("@/components/tools/ShowNotesAnatomy")
);

export function InteractiveSlot({ id }: { id: InteractiveId }) {
  if (id === "growth-diagnostic") return <GrowthDiagnostic />;
  if (id === "discovery-leak") return <DiscoveryLeak />;
  if (id === "show-notes-anatomy") return <ShowNotesAnatomy />;
  return null;
}
