/**
 * Retention facts. The single source for every continuity number on the site.
 *
 * THE RULE: nothing goes in here that James can't prove by pointing at a
 * public feed. The whole positioning is "shows stay with me", which is a
 * claim a prospect can check in ninety seconds. One inflated figure and the
 * argument inverts.
 *
 * Every figure below was verified against the live RSS on 26 Aug 2026 by
 * resolving each show's Apple ID through the iTunes lookup API and counting
 * <item> elements and <pubDate>s. Re-run that check before changing a number.
 *
 * DELIBERATELY EXCLUDED — read before adding:
 *
 *  • The Bitcoin Collective. James has worked with them since 2022 on the
 *    majority of episodes, but the relationship had a break of roughly two
 *    years. It's real work and it belongs in the case studies; it is not
 *    continuity proof, and putting it in a strip headed "no gaps" would hand
 *    a prospect the one counter-example that discredits the rest.
 *
 *  • Strategy at Scale. Discontinued by the client (last episode 31 Mar
 *    2026). A show that stopped cannot sit in a proof strip about shows that
 *    don't stop, even though the reason was the client's and not ours.
 *
 *  • Any "episodes delivered late" figure. Not supplied, and a zero nobody
 *    measured is worse than no claim at all.
 *
 *  • Any total across all clients. Summing a partial set misstates it.
 */

export interface ContinuityFact {
  /** Big number or short phrase. */
  value: string;
  /** What it means. Must name the show so it's checkable. */
  label: string;
}

/**
 * The proof strip, in descending order of how hard the claim is to make.
 * Four cells: enough to read as evidence, few enough to stay quiet.
 */
export const continuityFacts: ContinuityFact[] = [
  {
    value: "5 years",
    label: "On The Genetics Podcast, taken over at episode 65 in June 2021",
  },
  {
    value: "189",
    label: "Episodes delivered for it since, still running fortnightly",
  },
  // The two cells below carry the scope-growth argument rather than raw
  // duration. Both clients started narrow and widened, which is stronger
  // evidence than length alone: staying can be inertia, handing over more
  // cannot.
  {
    value: "Since Nov 2022",
    label:
      "With Assemble You, across their show and their standalone paywalled series",
  },
  {
    value: "Since 2023",
    label:
      "With Outthinker Network, editing at first, now all their post-production",
  },
];

/**
 * Longest continuous relationship, used in the hero. Kept separate because
 * it's the load-bearing claim on the site.
 *
 * Verified: episode 65 of The Genetics Podcast, "EP 65: Dr Patrick Short
 * guest features on The G Word", published 30 June 2021. 189 episodes from
 * that point to 20 Aug 2026, which is the most recent at time of writing.
 */
/**
 * Rolling 12-month delivery volume. Counted from the live feeds of the seven
 * named shows on 26 Aug 2026: Genetics 52, The Assembly 51, Bitcoin
 * Collective 29, Outthinkers 27, Career Change Diaries 11, CSO 10, Strategy
 * at Scale 10.
 *
 * This is a FLOOR, not a total. James estimates 200-300 across everything
 * including white-label and unnamed work, and that is entirely plausible
 * against these figures — but an estimate cannot go on a site whose whole
 * argument is "check the feed yourself". A number a sceptic can count is
 * worth more than a bigger one they have to take on trust.
 *
 * Goes stale slowly. Re-count before quoting it in a new year.
 */
export const rollingTwelveMonthEpisodes = 190;
// NOT in the proof strip. It was, briefly. Removed once James explained the
// standalone series come from Assemble You rather than from scattered
// one-off clients: that makes scope growth an available argument, and a
// client widening what they hand over beats a raw episode count on a page
// about continuity. The figure is still accurate and still useful elsewhere
// (an about page, a service page) where volume rather than loyalty is the
// question being answered.

/**
 * Assemble You. James's own record: the relationship began Monday 21 Nov
 * 2022, which is five months BEFORE The Assembly's first episode (13 Apr
 * 2023). So he was there from the show's launch rather than taking it over,
 * and the earlier months were their standalone series work.
 *
 * Not derivable from any feed — the feed only shows when the show started,
 * not when he did. Recorded here because it is the longest client
 * relationship on the books and it is his to attest to.
 */
export const assembleYouStart = "2022-11-21";

/**
 * 2026 delivery volume. James's own figure, and the one number on the site
 * that a prospect CANNOT fully verify from public feeds. That is a
 * deliberate exception, so the reasoning is recorded here.
 *
 * Public floor counted 26 Aug 2026 across every feed we can find: Genetics
 * 33, The Assembly 33, Bitcoin Collective 18, Outthinkers 17, Bitcoin and
 * the Long Game 9, Career Change Diaries 6, Chana Mason 5, CSO 5,
 * Possibility in the Universe 4, Strategy at Scale 3 = 133. That counts
 * whole feeds even where James produced only part of them, so it is
 * generous rather than conservative.
 *
 * The gap to 200 is Assemble You's paywalled standalone series and
 * white-label work, neither of which appears in a public feed by design.
 * The claim is therefore consistent with the evidence rather than provable
 * by it, which is why the on-page wording says "including private and
 * paywalled series": it explains the shortfall before a sceptic finds it,
 * and turns invisible work into a signal of scale rather than a hole.
 *
 * If this is ever challenged, the answer is an invoice count, not a feed.
 */
export const episodes2026 = {
  claim: "200+",
  publicFloor: 133,
  countedOn: "2026-08-26",
} as const;

export const flagshipRetention = {
  show: "The Genetics Podcast",
  joinedAtEpisode: 65,
  joinedDate: "2021-06-30",
  episodesSince: 189,
  takeover: true,
} as const;
