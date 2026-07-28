// data/editing-benchmarks.ts
//
// Third-party market benchmark rates for podcast editing, keyed by region so
// the calculator's currency toggle swaps the whole set (UK and US rates
// genuinely differ — these are NOT FX conversions of each other).
//
// Always presented as ranges, never a single authoritative number, and always
// labelled as independent industry averages rather than our own prices.
// Sources are listed on the calculator page. Last reviewed: 2026.

export type RegionId = "uk" | "us";

export interface BenchmarkRow {
  label: string;
  range: string;
  /** Optional detail shown under the row */
  note?: string;
}

export interface RegionBenchmarks {
  id: RegionId;
  label: string;
  currencySymbol: string;
  /** Locale used for number formatting */
  locale: string;
  /** Headline range for freelance/typical per-episode editing */
  typicalRange: string;
  /** Midpoint of the "most freelancers" band — used as the market comparison */
  marketMidpoint: number;
  /** Low/high of the "most freelancers" band, for the visible range */
  marketLow: number;
  marketHigh: number;
  rows: BenchmarkRow[];
  /** Region-adapted caveat shown beneath the table */
  caveat: string;
}

export const regions: Record<RegionId, RegionBenchmarks> = {
  uk: {
    id: "uk",
    label: "£ GBP (UK)",
    currencySymbol: "£",
    locale: "en-GB",
    typicalRange: "£50–£400 per episode",
    marketLow: 100,
    marketHigh: 250,
    marketMidpoint: 175,
    rows: [
      {
        label: "Audio-only editing",
        range: "£50–£400 per episode",
        note: "Most UK freelancers sit between £100 and £250.",
      },
      {
        label: "Basic edit",
        range: "£30–£50",
        note: "Noise removal and simple cuts.",
      },
      {
        label: "Standard edit",
        range: "£75–£150",
        note: "Mixing, sound design, intro and outro.",
      },
      {
        label: "Premium / broadcast-quality",
        range: "£200–£400",
      },
      {
        label: "Production agencies",
        range: "£200–£850+",
      },
      {
        label: "Video podcast editing",
        range: "£100–£300",
        note: "Multi-cam, lower thirds, chapters. Social clips add £50–£100.",
      },
      {
        label: "Full video production",
        range: "from around £280",
      },
    ],
    caveat:
      "Benchmarks are UK industry averages for 2026 — treat them as a guide, not a quote. Rates vary with episode length, format, and turnaround.",
  },
  us: {
    id: "us",
    label: "$ USD (US)",
    currencySymbol: "$",
    locale: "en-US",
    typicalRange: "$50–$600 per episode",
    marketLow: 150,
    marketHigh: 350,
    marketMidpoint: 250,
    rows: [
      {
        label: "Freelance editors",
        range: "$50–$600 per episode",
        note: "Budget $50–$100, mid-tier $150–$350, senior or specialist $350–$600.",
      },
      {
        label: "Hourly rates",
        range: "$40–$120 per hour",
      },
      {
        label: "Full-service agencies",
        range: "$300–$1,000 per episode",
      },
    ],
    caveat:
      "Benchmarks are US industry averages for 2026 — treat them as a guide, not a quote. Rates vary with episode length, format, and turnaround.",
  },
};

/** Time benchmarks apply to both regions. */
export const timeBenchmarks = [
  "Editing typically takes 2–4× the episode length.",
  "A 60-minute episode usually takes an experienced editor 1–2 hours.",
  "Narrative or complex multi-guest shows take 3–5× longer.",
];

export const sources = {
  uk: [
    { label: "Joycast — podcast editing cost UK", url: "https://joycast.co/blog/podcast-editing-cost-uk/" },
    { label: "Media Village — podcast production cost UK", url: "https://www.media-village.co.uk/podcasts/podcast-production-cost-uk/" },
    { label: "Humanise — podcast production costs UK", url: "https://www.humanise.live/podcast-production-costs-uk/" },
    { label: "John Isaacson — podcast cost calculator", url: "https://johnisaacson.co.uk/podcast-cost-calculator/" },
  ],
  general: [
    { label: "Trevor O'Hare — professional podcast editing cost", url: "https://www.trevorohare.com/blog/how-much-does-professional-podcast-editing-cost-in-2025" },
    { label: "Podcast Engineers — podcast editing cost 2026", url: "https://www.podcastengineers.com/blogs/podcast-editing-cost-2026/" },
    { label: "What Should I Charge — podcast editor", url: "https://whatshouldicharge.io/podcast-editor" },
    { label: "The Podcast Host — podcast editing", url: "https://www.thepodcasthost.com/editing-production/podcast-editing/" },
    { label: "Produce Your Podcast — how long editing takes", url: "https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/" },
  ],
};
