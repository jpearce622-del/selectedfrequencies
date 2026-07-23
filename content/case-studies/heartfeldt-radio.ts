import type { CaseStudy } from "@/types/case-study";

// Show and host confirmed via public web search (open.spotify.com /
// podcasts.apple.com / podscan.fm), July 2026 — host Sam Feldt matches
// what James supplied, and the show is confirmed as a weekly release.
// Service scope is a reasonable general description of archive-era
// editing work, not confirmed line-by-line with James for this
// specific client. Outcome/testimonial are genuinely unknown. Cover
// art supplied by James (the show's real Spotify/Apple artwork).
export const heartfeldtRadio: CaseStudy = {
  slug: "heartfeldt-radio",
  clientName: "Sam Feldt",
  showName: "Heartfeldt Radio",
  hostName: "Sam Feldt",
  oneLiner:
    "Heartfeldt Radio is the official weekly radio show from DJ and producer Sam Feldt, combining uplifting house music, tropical vibes, and feel-good electronic tracks into an energetic listening experience for dance music fans across the globe.",
  description:
    "Alongside exclusive premieres, guest mixes, and carefully selected playlists, Heartfeldt Radio represents the positive, sun-soaked sound that has become synonymous with Sam Feldt's internationally recognised brand — tropical house and melodic dance music built for a global audience rather than a single market. As a weekly mix show, consistency is the product: the same clean, punchy master week after week, so the show's identity holds steady whether a listener discovers episode #12 or episode #500. That's a mixing and mastering job as much as an editing one — every premiere and guest mix has to sit at the same loudness and tonal balance as Sam Feldt's own selections.",
  services: [
    "Weekly episode edit & mixdown",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Heartfeldt Radio]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4Zn4i73CnizWiwZs9XjkcH" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/in/podcast/heartfeldt-radio-by-sam-feldt/id1790408466" },
  ],
  logo: "/images/clients/heartfeldt-radio-opener.jpeg",
  logoAlt: "Heartfeldt Radio by Sam Feldt cover art",
  themeColor: "#E8602E",
  featured: false,
  category: "archive",
};
