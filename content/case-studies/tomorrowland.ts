import type { CaseStudy } from "@/types/case-study";

// Tomorrowland runs several distinct podcast series (Friendship Mix,
// 20 Years 20 Questions, My Way, United We Dance) rather than one
// unified show, per public web search (open.spotify.com), July 2026 —
// so rather than guess which specific feed this asset belongs to, the
// verified link here points to the festival's own official site. This
// entry is kept separate from "One World Radio" (the 24/7 station) to
// match the two distinct assets/descriptions supplied by James.
// Service scope and outcome are placeholders. Cover art supplied by
// James (the festival's official crest artwork).
export const tomorrowland: CaseStudy = {
  slug: "tomorrowland",
  clientName: "Tomorrowland",
  showName: "Tomorrowland",
  oneLiner:
    "Tomorrowland is one of the world's most iconic electronic music festivals, and its audio content captures the atmosphere, music, and stories behind one of dance music's most celebrated events year-round, not just festival weekend.",
  description:
    "Beyond the festival itself, the Tomorrowland brand creates exclusive audio content — live sets, artist interviews, feature segments, and curated playlists — that continues to connect electronic music lovers around the globe long after the stages come down. Producing audio for a brand this size means matching a very specific sonic standard: Tomorrowland's own festival production values are famously high, so anything released under its name has to sound festival-master-quality even when it's a studio interview rather than a live recording.",
  services: [
    "Full audio edit",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. release count, reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Tomorrowland]",
  },
  links: [{ label: "Website", url: "https://www.tomorrowland.com" }],
  logo: "/images/clients/tomorrowland-2.jpeg",
  logoAlt: "Tomorrowland official crest artwork",
  themeColor: "#241E38",
  featured: false,
  category: "archive",
};
