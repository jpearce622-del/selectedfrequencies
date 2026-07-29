import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Above-the-fold hero, overlaid on the microphone sequence.
 *
 * This is a plain server component — no "use client", no Reveal wrapper, no
 * entrance animation — so the eyebrow, H1, subhead, and CTA are all present
 * and readable in the initial HTML at first paint. Crawlers and visitors who
 * never scroll both see the full pitch.
 *
 * Layout: sits in the right-hand negative space of the photo on desktop
 * (the mic is left-of-centre), and drops to a full-width, left-aligned
 * block on tablet/mobile.
 */
export function HeroOverlay() {
  return (
    // Top-aligned on mobile (the chapter cards stack up from the bottom there,
    // so the hero keeps the upper half); vertically centred from sm up, where
    // the cards sit bottom-left and the hero sits right.
    // pt-40 on mobile / pt-20 from sm clears the 80px sticky header, which the
    // section now sits behind. Top-aligned on mobile (the chapter cards stack
    // up from the bottom there); vertically centred from sm up, where the
    // cards sit bottom-left and the hero sits right.
    <div className="pointer-events-none absolute inset-0 flex items-start pt-40 sm:items-center sm:pt-20">
      {/* Contrast scrim. Bottom-up on mobile, left-to-right on desktop, so
          the text side is always darkened without reading as a visible box. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 38%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      <Container className="relative w-full">
        <div className="pointer-events-auto ml-auto max-w-xl sm:w-[50%] sm:max-w-none lg:w-[46%]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-amber sm:text-xs">
            Podcast editing &amp; production
          </p>

          <h1 className="font-display mt-3 text-[2rem] leading-[1.08] font-semibold tracking-tight text-balance text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            Podcast production that gives you your week back.
          </h1>

          <p className="mt-3 max-w-[55ch] text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-8">
            Full-service editing, show notes, and distribution for any show.
            Eight years, thousands of episodes, millions of listens.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-bright sm:px-7 sm:py-3.5 sm:text-base"
            >
              Book a free consultation
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1 text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline sm:text-base"
            >
              See the work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>

          {/* Removes the "does this go into a void?" hesitation before the click. */}
          {/* Opacities here are set for WCAG AA (4.5:1) against the darkest
              point of the photo under the scrim — measured, not assumed. */}
          {/* The base claim sits above the fold deliberately: a US visitor
              should learn the UK base isn't a limitation before they scroll,
              not after. Kept to one clause so it doesn't crowd the CTA. */}
          <p className="mt-4 text-xs text-white/80 sm:mt-5 sm:text-sm">
            UK-based, working with the UK, US &amp; Europe · We&apos;ll reply
            within one working day · Bitcoin accepted
          </p>

          {/* TODO (James): a single quantified figure converts better than a
              list of names (e.g. "X million listener minutes produced"). We
              only hold verified figures for a few individual shows, and summing
              a partial set would misstate the total — supply a real headline
              number and we'll swap this line for it. */}
          <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm">
            Trusted by shows for Sano Genetics, Outthinkers, The Bitcoin
            Collective and more
          </p>
        </div>
      </Container>
    </div>
  );
}
