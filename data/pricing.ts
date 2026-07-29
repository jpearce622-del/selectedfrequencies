// data/pricing.ts
//
// SINGLE SOURCE OF TRUTH for pricing. Do not hard-code prices anywhere else —
// the services rate card, the cost calculator, and the Service/OfferCatalog
// JSON-LD all read from here, so structured data can never drift from the
// prices shown on the page.
//
// All figures are "from" prices in GBP, per episode unless stated.
// Last reviewed: 2026.

export const CURRENCY = "GBP" as const;
export const CURRENCY_SYMBOL = "£" as const;

export interface PricingTier {
  id: string;
  name: string;
  /** "from" price in GBP */
  price: number;
  /** Billing unit shown after the price, e.g. "per episode" */
  unit: string;
  /** Who the tier is for. Empty for add-ons. */
  forWho: string;
  includes: string[];
  /** Highlight as the recommended / most-popular tier */
  popular?: boolean;
  /** Add-ons are priced per item and sit outside the main tier ladder */
  addOn?: boolean;
  /** Defined but not yet priced — filtered out of anything customer-facing
   *  (rate card, calculator, Offer schema) so an unconfirmed price can never
   *  be published by accident. */
  draft?: boolean;
}

export const tiers: PricingTier[] = [
  {
    id: "editing-only",
    name: "Audio editing only",
    price: 110,
    unit: "per episode",
    forWho: "Shows that just need the edit",
    includes: [
      "Full audio edit",
      "Sound cleanup",
      "Pacing",
      "Levels, mastered to −16 LUFS",
    ],
  },
  {
    id: "audio-video",
    name: "Audio & video production",
    price: 165,
    unit: "per episode",
    forWho:
      "Shows recording on Zoom, Riverside and similar, needing both audio and video ready to publish",
    includes: [
      "Everything in Audio editing only",
      "Full video edit",
      "Captions",
      "Intro and outro",
      "Guest tags / lower thirds",
    ],
    popular: true,
  },
  {
    id: "full-production",
    name: "Full production",
    price: 335,
    unit: "per episode",
    forWho: "Hosts who want to record and hand over everything else",
    includes: [
      "Everything in Audio & video production",
      "Episode artwork",
      "YouTube thumbnails",
      "Full description and show notes",
      "Intro script",
      "Scheduling and publishing",
      "3–5 basic clips with captions",
    ],
  },
  {
    id: "social-clips",
    name: "Basic clips",
    price: 40,
    unit: "per clip",
    forWho: "Straight cut-downs of the best moments",
    includes: [
      "Short-form vertical clips",
      "Captioned",
      "Formatted for Instagram, TikTok, and YouTube Shorts",
    ],
    addOn: true,
  },
  {
    id: "advanced-clips",
    name: "Advanced clips",
    // TODO (James): price not yet set — see the note in the commit. Left at
    // the basic rate deliberately so nothing on the site advertises a number
    // you haven't chosen; it is hidden from the rate card until you do.
    price: 40,
    unit: "per clip",
    forWho: "Produced clips built to stop the scroll, not just cut from the episode",
    includes: [
      "Everything in Basic clips",
      "B-roll and cutaways",
      "Music bed and sound effects",
      "Titles, labels and lower thirds",
    ],
    addOn: true,
    draft: true,
  },
];

export interface RecordingSetup {
  id: string;
  name: string;
  /** Supplement added on top of any tier price, per episode */
  supplement: number;
  description: string;
}

/**
 * Recording setup is a supplement applied on top of any tier — never a
 * discount on the standard rate. Standard (remote / single-source) recording
 * is what the tier prices already cover.
 */
export const recordingSetups: RecordingSetup[] = [
  {
    id: "standard",
    name: "Standard",
    supplement: 0,
    description:
      "Remote or single-source recording — Zoom, Riverside, Descript, or a single camera. Included in the tier prices above.",
  },
  {
    id: "multi-cam",
    name: "Multi-cam",
    supplement: 95,
    description:
      "Two to three cameras, up to 4K. Adds syncing, angle switching, and colour matching work to every episode.",
  },
];

// Shoots beyond three cameras, or unusual formats, are quoted individually.

/** Market context — third-party UK industry range, shown for honest comparison. */
export const UK_AGENCY_RANGE = "£200–£850+" as const;

/** Everything safe to show a customer — excludes unpriced drafts. */
export const publishedTiers = tiers.filter((t) => !t.draft);

export function getTier(id: string): PricingTier | undefined {
  return tiers.find((t) => t.id === id);
}

export function getSetup(id: string): RecordingSetup | undefined {
  return recordingSetups.find((s) => s.id === id);
}

/** Format a whole-pound GBP amount, e.g. 165 -> "£165". */
export function formatGBP(amount: number): string {
  return `${CURRENCY_SYMBOL}${Math.round(amount).toLocaleString("en-GB")}`;
}
