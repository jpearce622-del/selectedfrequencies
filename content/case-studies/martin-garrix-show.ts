import type { CaseStudy } from "@/types/case-study";

// Show confirmed via public web search (podcasts.apple.com), July
// 2026 — weekly cadence and ~1hr episode length confirmed there. No
// verified Spotify show URL was found, so only the confirmed Apple
// Podcasts link is included rather than guessing one. Service scope
// is a reasonable general description of archive-era editing work,
// not confirmed line-by-line with James for this specific client.
// Outcome/testimonial are genuinely unknown. Cover art supplied by
// James (Martin Garrix's real promotional photo).
export const martinGarrixShow: CaseStudy = {
  slug: "martin-garrix-show",
  clientName: "Martin Garrix",
  showName: "The Martin Garrix Show",
  hostName: "Martin Garrix",
  oneLiner:
    "The Martin Garrix Show gives fans an exclusive look into the music, performances, and creative journey of one of the world's biggest electronic music artists — behind-the-scenes studio sessions, festival sets, and exclusive premieres, released weekly.",
  description:
    "From studio sessions and festival performances to exclusive track premieres and personal insight, The Martin Garrix Show offers listeners a closer connection to Martin Garrix and his music than a stream of singles alone ever could. Blending storytelling with cutting-edge electronic music, the show has become a favourite among dance music fans worldwide, releasing new episodes on a weekly cadence at around an hour each. At that release pace, a dependable edit turnaround matters as much as sound quality — the show can't afford to fall behind its own schedule, since a weekly mix show lives or dies by consistency.",
  services: [
    "Weekly episode edit & mixdown",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, The Martin Garrix Show]",
  },
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-martin-garrix-show/id1132914986" },
  ],
  logo: "/images/clients/martin-garrix.png",
  logoAlt: "Martin Garrix promotional photo",
  themeColor: "#22405A",
  featured: false,
  category: "archive",
};
