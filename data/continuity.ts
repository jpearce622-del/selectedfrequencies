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
  {
    value: "122",
    label: "Episodes for The Assembly, since it launched in 2023",
  },
  {
    value: "Since 2023",
    label: "With Outthinker Network, now running all their post-production",
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
export const flagshipRetention = {
  show: "The Genetics Podcast",
  joinedAtEpisode: 65,
  joinedDate: "2021-06-30",
  episodesSince: 189,
  takeover: true,
} as const;
