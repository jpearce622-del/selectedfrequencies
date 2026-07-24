export interface BitcoinPodcast {
  /** Show name */
  name: string;
  /** Host / creator */
  host: string;
  /** 1–2 sentences: what the show is about and who it's for */
  description: string;
  /** e.g. ["Bitcoin", "Macro", "Investing"] */
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  websiteUrl?: string;
  /** true for shows Selected Frequencies produces (adds a subtle badge) */
  producedByUs?: boolean;
  /** /work/[slug] case study the "Produced by" badge links to */
  caseStudySlug?: string;
  /**
   * Draft entries stay in this file for James to verify but are NOT rendered
   * on the live page (nor in the JSON-LD) until he confirms the details and
   * sets `draft: false`. This keeps unverified copy off the public page.
   */
  draft?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────
// HOW TO MAINTAIN THIS LIST
// - Add or edit shows here; the page layout picks up changes automatically.
// - The two shows we produce are live and marked `producedByUs: true`.
// - Everything below the divider is a DRAFT placeholder: real, well-known
//   shows worth featuring, but with descriptions/links you must verify.
//   Before publishing an entry: write a real 1–2 sentence description
//   (replace the [VERIFY] text), add the correct Spotify/Apple/website
//   links, double-check the host, then set `draft: false`.
// - Do NOT publish invented ratings, download numbers, or descriptions —
//   the featured shows will read this page.
// ─────────────────────────────────────────────────────────────────────────

export const bitcoinPodcasts: BitcoinPodcast[] = [
  // ── Shows we produce (live) ────────────────────────────────────────────
  {
    name: "The Bitcoin Collective",
    host: "Jordan Walker",
    description:
      "Weekly conversations with founders and business owners about Bitcoin, with the jargon left at the door — an approachable way to understand Bitcoin in the real world.",
    topics: ["Bitcoin", "Business", "Interviews"],
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-bitcoin-collective/id1561573613",
    websiteUrl: "https://bitcoincollective.co",
    producedByUs: true,
    caseStudySlug: "bitcoin-collective",
  },
  {
    name: "Bitcoin and the Long Game",
    host: "Peter Lane & George Boyd",
    description:
      "Bitcoin through the lens of patience — where sound money meets sport, life, and long-term thinking, from hosts Peter Lane and George Boyd.",
    topics: ["Bitcoin", "Sound Money", "Culture"],
    // TODO (James): add the real Spotify / Apple links for this show.
    producedByUs: true,
    caseStudySlug: "bitcoin-and-the-long-game",
  },

  // ── TODO: verify + expand ──────────────────────────────────────────────
  // Well-known shows to feature. Confirm host, write a real description,
  // add verified listen links, then flip `draft: false` to publish.
  {
    name: "What Bitcoin Did",
    host: "Peter McCormack",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Interviews"],
    draft: true,
  },
  {
    name: "Bitcoin Fundamentals (The Investor's Podcast)",
    host: "Preston Pysh",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Macro", "Investing"],
    draft: true,
  },
  {
    name: "Stephan Livera Podcast",
    host: "Stephan Livera",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Economics", "Tech"],
    draft: true,
  },
  {
    name: "TFTC",
    host: "Marty Bent",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Macro", "Freedom Tech"],
    draft: true,
  },
  {
    name: "Citadel Dispatch",
    host: "Matt Odell",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Privacy", "Freedom Tech"],
    draft: true,
  },
  {
    name: "Bitcoin Audible",
    host: "Guy Swann",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Education"],
    draft: true,
  },
  {
    name: "The Bitcoin Standard Podcast",
    host: "Saifedean Ammous",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Economics"],
    draft: true,
  },
  {
    name: "Coin Stories",
    host: "Natalie Brunell",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Macro", "Interviews"],
    draft: true,
  },
  {
    name: "The Pomp Podcast",
    host: "Anthony Pompliano",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Bitcoin", "Investing", "Business"],
    draft: true,
  },
  {
    name: "Unchained",
    host: "Laura Shin",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Crypto", "Interviews"],
    draft: true,
  },
  {
    name: "Bankless",
    host: "Ryan Sean Adams & David Hoffman",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Crypto", "DeFi", "Ethereum"],
    draft: true,
  },
  {
    name: "Empire",
    host: "Jason Yanowitz & Santiago Santos",
    description: "[VERIFY — write a 1–2 sentence description]",
    topics: ["Crypto", "Macro", "Investing"],
    draft: true,
  },
];

/** Shows ready to appear on the public page (verified, not drafts). */
export function getPublishedBitcoinPodcasts(): BitcoinPodcast[] {
  return bitcoinPodcasts.filter(
    (p) => !p.draft && !p.description.includes("[VERIFY]")
  );
}
