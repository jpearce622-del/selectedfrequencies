import type { CaseStudy } from "@/types/case-study";

// Host, focus, stats, and links researched via public web search
// (podcasts.apple.com / bitcoincollective.co), July 2026 — episode
// count and Apple rating come from that research, not invented.
// Service scope confirmed directly by James. Testimonial is genuinely
// unknown — left as a placeholder. Cover art supplied by James (the
// show's real Apple/Spotify artwork).
export const bitcoinCollective: CaseStudy = {
  slug: "bitcoin-collective",
  clientName: "The Bitcoin Collective",
  showName: "The Bitcoin Collective",
  hostName: "Jordan Walker",
  oneLiner:
    "Jordan Walker's weekly Bitcoin show has run over 200 episodes since 2021 and holds a 4.8/5 rating on Apple Podcasts — real conversations with founders and business owners, jargon left at the door. Hitting that pace every week, without ever sounding rushed, takes a dedicated edit.",
  services: [
    "Full audio & video episode edit",
    "Audio and video enhancement pass",
    "Episode description writing",
    "Short-form clips for social",
    "Distribution across platforms",
  ],
  outcome:
    "204 episodes since 2021, released weekly without a gap, holding a 4.8/5 rating on Apple Podcasts.",
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-bitcoin-collective/id1561573613" },
    { label: "Website", url: "https://bitcoincollective.co/bitcoin-podcast-episodes/" },
  ],
  logo: "/images/clients/bitcoin-collective.jpeg", // real show artwork
  logoAlt: "The Bitcoin Collective cover art",
  themeColor: "#4A4A52", // sampled from the show's charcoal cover art
  // Deliberately carries no episodesDelivered figure. James has worked on
  // the majority of episodes since 2022, but the relationship had a break
  // of roughly two years, so no continuous count is honest and the feed
  // cannot show where he was and wasn't. The break is stated in `note`
  // rather than glossed: a retention claim that hides its one exception is
  // the claim a prospect will find and disbelieve.
  continuity: {
    takeover: true,
    joined: "2022",
    cadence: "Weekly",
    duration: "Since 2022, with a break",
    stillRunning: true,
    note: "Not a continuous run. James has produced the majority of episodes since 2022, either side of a break of around two years, and the show is still publishing weekly.",
  },
  featured: true,
  category: "flagship",
};
