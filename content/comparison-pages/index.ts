import type { ComparisonPage } from "@/types/comparison-page";
import { lowerStreetAlternative } from "./lower-street-alternative";
import { rise25Alternative } from "./rise25-alternative";
import { contentAlliesAlternative } from "./content-allies-alternative";
import { fameAlternative } from "./fame-alternative";
import { caspianStudiosAlternative } from "./caspian-studios-alternative";
import { lowerStreetVsRise25 } from "./lower-street-vs-rise25";

/**
 * Competitor comparison pages under /compare/[slug].
 *
 * Adding a page is one file plus one line here — the route, the /compare
 * index and the sitemap all derive from this array.
 *
 * lib/comparison-pages.ts asserts on import that every page cites sources
 * for each company named, carries a dated verification line, discloses that
 * the page is ours, makes a real concession to the competitor, and renders
 * no unresolved [TK] markers. These pages name other businesses, so a bad
 * one fails the build rather than reaching a reader.
 *
 * Deliberately NOT built, and why:
 *   - Sweet Fish Media: has repositioned as a B2B video agency ("Your
 *     Marketing Team's Video Team") rather than a podcast production
 *     company. Comparing our production service to a full video agency
 *     wouldn't be comparing like with like.
 *   - ThePod.fm: sells lead generation with guaranteed introduction calls.
 *     Their public proof is pipeline figures we cannot verify, and the
 *     product is not production.
 *   - Podcast Royale: site was unreachable when researched (2026-08-12), so
 *     nothing could be verified and nothing honest could be written.
 *   - Jony Studios, AskTheCEO Media: real competitors, but with limited
 *     public detail and likely negligible search volume for "[name]
 *     alternative". AskTheCEO is covered in the B2B roundup post instead.
 *   - A multi-competitor "best alternatives" roundup: would compete directly
 *     with content/blog/best-podcast-production-companies-for-b2b.ts, which
 *     already owns undecided shortlisters. These pages own named-competitor
 *     queries; the roundup owns the category query. Keep that split.
 */
export const comparisonPages: ComparisonPage[] = [
  // Alternative pages — reader has one competitor on their shortlist
  lowerStreetAlternative,
  rise25Alternative,
  contentAlliesAlternative,
  fameAlternative,
  caspianStudiosAlternative,
  // Head-to-head — reader is comparing two others; we're a third option
  lowerStreetVsRise25,
];
