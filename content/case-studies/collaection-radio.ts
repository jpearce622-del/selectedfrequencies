import type { CaseStudy } from "@/types/case-study";

// Show researched via public web search (Podbean / player.fm), July
// 2026 — the cover art itself confirms the official (unusual) spelling
// "Collaection Radio by Felix Jaehn", produced by Felix Jaehn and
// Universal Music GmbH. The series appears to have run ~21 episodes
// and is not currently listed on Spotify or Apple Podcasts under a
// verifiable show URL, so no streaming links are included here rather
// than guessing. Service scope and outcome are placeholders. Cover art
// supplied by James (the show's real artwork).
export const collaectionRadio: CaseStudy = {
  slug: "collaection-radio",
  clientName: "Felix Jaehn",
  showName: "Collaection Radio",
  hostName: "Felix Jaehn",
  oneLiner:
    "Collaection Radio is the official radio show from internationally renowned DJ and producer Felix Jaehn — a curated run through house, dance, and electronic music, mixing the latest releases with exclusive tracks from around the world.",
  description:
    "Each episode of Collaection Radio showcases Felix Jaehn's signature sound alongside timeless dance-floor favourites and exclusive premieres, designed specifically for electronic music fans who want to discover exciting new artists and emerging trends within the global dance scene rather than just hear another Top 40 mix. As a mix show rather than a talk podcast, the editorial work is entirely in the transitions, levels, and mastering — the difference between a show that sounds like a DJ set captured on a phone and one that sounds ready for festival-scale sound systems and studio headphones alike.",
  services: [
    "Weekly episode edit & mixdown",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Collaection Radio]",
  },
  links: [],
  logo: "/images/clients/felix-jaehn-collection-radio.jpg",
  logoAlt: "Collaection Radio by Felix Jaehn cover art",
  themeColor: "#4A4569",
  featured: false,
  category: "archive",
};
