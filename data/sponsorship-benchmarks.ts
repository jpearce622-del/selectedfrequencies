// data/sponsorship-benchmarks.ts
//
// SINGLE SOURCE OF TRUTH for every sponsorship figure on the site. The
// calculator, the benchmark tables, the article, and the FAQ schema all read
// from here, so a number can never say one thing on the page and another in
// the maths.
//
// These are third-party industry benchmarks for 2026, not our own rates, and
// they are always presented as RANGES. Sources are listed at the bottom and
// cited on both pages. Nothing here is extrapolated — if a figure isn't in a
// source, it isn't here.

/** CPM = cost per 1,000 downloads. All USD, because the industry quotes USD. */
export interface CpmBand {
  id: string;
  label: string;
  low: number;
  high: number;
  /** What the buyer is actually getting, in plain English */
  note: string;
}

/** Ad placement within the episode. These are the slots users can select. */
export const placements: CpmBand[] = [
  {
    id: "pre-roll",
    label: "Pre-roll",
    low: 15,
    high: 25,
    note: "Plays before the show starts — lower engagement, so it prices below mid-roll.",
  },
  {
    id: "mid-roll",
    label: "Mid-roll",
    low: 25,
    high: 50,
    note: "The premium slot. Listeners who reach the middle of an episode are the engaged ones, which makes this the highest-value real estate in a podcast.",
  },
  {
    id: "post-roll",
    label: "Post-roll",
    low: 10,
    high: 20,
    note: "Runs at the end, by which point some listeners have dropped off.",
  },
];

/** How the ad is produced and sold — context for the page, not a calculator input. */
export const adTypes: CpmBand[] = [
  {
    id: "programmatic",
    label: "Programmatic",
    low: 12,
    high: 20,
    note: "Automatically inserted, not read by the host. Cheapest, and it sounds it.",
  },
  {
    id: "pre-recorded",
    label: "Pre-recorded network ads",
    low: 15,
    high: 30,
    note: "Supplied by the advertiser and dropped into the episode.",
  },
  {
    id: "host-read",
    label: "Host-read sponsorships",
    low: 25,
    high: 40,
    note: "Read by you, in your voice. Outperforms pre-recorded, and prices accordingly.",
  },
  {
    id: "niche",
    label: "Niche high-value audiences",
    low: 40,
    high: 40,
    note: "Business, finance, and tech audiences often clear $40+ CPM — a sharply-defined audience is worth more per listener than a broad one.",
  },
];

/** The widest defensible market range, across every format and genre. */
export const MARKET_CPM_RANGE = { low: 12, high: 55 } as const;

export const SEASONALITY_NOTE =
  "Q4 typically produces the highest CPMs as brands spend end-of-year budgets; Q1 drops as those budgets reset.";

/**
 * Category multipliers.
 *
 * These do NOT invent new CPM figures — they shift which part of the
 * researched range gets applied, which is exactly how the market behaves:
 * a premium business/finance audience sits at the top of a band, a general
 * audience nearer the middle.
 */
export interface Category {
  id: string;
  label: string;
  /** 0 = bottom of the researched range, 1 = top of it */
  lowWeight: number;
  highWeight: number;
  note: string;
}

export const categories: Category[] = [
  {
    id: "general",
    label: "General",
    lowWeight: 0,
    highWeight: 0.6,
    note: "A broad, general-interest audience sits in the lower-to-middle part of each range.",
  },
  {
    id: "premium",
    label: "Business / Finance / Tech (premium)",
    lowWeight: 0.5,
    highWeight: 1,
    note: "Business, finance, and tech audiences are the ones advertisers pay most to reach — these shows sit at the top of each range, and often clear $40+ CPM.",
  },
  {
    id: "niche",
    label: "Niche / specialist",
    lowWeight: 0.35,
    highWeight: 0.9,
    note: "A specialist audience with high intent commands more per listener than a larger general one, even at a fraction of the size.",
  },
];

/** Where a show stands on download volume, and what's realistically open to it. */
export interface AccessTier {
  /** Inclusive lower bound of downloads per episode */
  min: number;
  label: string;
  verdict: string;
}

export const accessTiers: AccessTier[] = [
  {
    min: 10000,
    label: "Above most network thresholds",
    verdict:
      "You're above the threshold most major networks look for. CPM-based deals should be straightforward.",
  },
  {
    min: 5000,
    label: "Network territory",
    verdict:
      "Many ad networks will now consider you. You have real negotiating room.",
  },
  {
    min: 500,
    label: "Direct and smaller networks",
    verdict:
      "You're in reach of smaller networks and direct sponsorships. Flat-rate deals often beat CPM maths at this level.",
  },
  {
    min: 0,
    label: "Pre-network",
    verdict:
      "Most ad networks won't take you yet — but affiliate deals, flat-rate sponsorships, and direct approaches to brands you genuinely use are all realistic at this size.",
  },
];

export function accessTierFor(downloads: number): AccessTier {
  return (
    accessTiers.find((t) => downloads >= t.min) ?? accessTiers[accessTiers.length - 1]
  );
}

/** Download thresholds, stated as the sources state them. */
export const downloadThresholds = [
  "Major ad networks typically want 10,000–20,000 downloads per episode.",
  "Many networks set minimums around 5,000–10,000 per episode.",
  "Some platforms start at 500 downloads per episode.",
  "Affiliate, flat-rate, and lead-based deals have no minimum — shows with 200–1,000 downloads sign sponsors regularly.",
];

/**
 * CURRENCY.
 *
 * CPM benchmarks are quoted in USD across the whole industry, so USD is the
 * default and the honest unit. GBP is offered as a convenience conversion of
 * those same USD figures — NOT separately-researched UK data — at a fixed
 * approximate rate. It is labelled as such wherever it appears.
 *
 * TODO (James): confirm you're happy with this rate. It's deliberately fixed
 * rather than fetched live: a rate that silently moves would change every
 * number on the page between visits, and the underlying benchmarks are ranges
 * anyway, so false precision would be worse than a stated approximation.
 */
export const USD_TO_GBP = 0.79;

export interface Currency {
  id: "usd" | "gbp";
  label: string;
  symbol: string;
  locale: string;
  /** Multiplier applied to the USD benchmark figures */
  rate: number;
}

export const currencies: Record<"usd" | "gbp", Currency> = {
  usd: { id: "usd", label: "$ USD", symbol: "$", locale: "en-US", rate: 1 },
  gbp: { id: "gbp", label: "£ GBP", symbol: "£", locale: "en-GB", rate: USD_TO_GBP },
};

export const sources = [
  {
    label: "Acast — how much does podcast advertising cost",
    url: "https://advertise.acast.com/news-and-insights/how-much-does-podcast-advertising-cost",
  },
  {
    label: "Million Podcasts — advertising CPM rates by genre and size",
    url: "https://www.millionpodcasts.com/blog/podcast-advertising-cost-cpm-rates-by-genre-size/",
  },
  {
    label: "Adopter Media — podcast advertising rates explained",
    url: "https://adopter.media/podcast-advertising-rates-explained/",
  },
  {
    label: "Riverside — podcast sponsorship",
    url: "https://riverside.com/blog/podcast-sponsorship",
  },
  {
    label: "Castos — podcast ads guide",
    url: "https://castos.com/podcast-ads-guide/",
  },
  {
    label: "The Podcast Haven — downloads needed and what you can earn",
    url: "https://thepodcasthaven.com/how-to-get-podcast-sponsors-downloads-needed-and-what-you-can-earn",
  },
];

/** The honest caveat shown next to every result. */
export const ESTIMATE_CAVEAT =
  "These are estimates based on 2026 industry CPM benchmarks. Real offers vary widely with your niche, audience demographics, engagement, and how you sell — a show with 800 engaged listeners in a specialist field can out-earn one with 5,000 casual ones. Treat this as a starting point for negotiation, not a valuation.";
