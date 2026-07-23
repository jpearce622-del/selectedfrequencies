import type { CaseStudy } from "@/types/case-study";

// Hosts, focus, and platform links researched via public web search
// (podcasts.apple.com / open.spotify.com / assembleyou.com), July 2026.
// Service scope confirmed directly by James. Outcome and testimonial
// are genuinely unknown — left as placeholders rather than invented.
export const theAssembly: CaseStudy = {
  slug: "assemble-you",
  clientName: "Assemble You",
  showName: "The Assembly",
  hostName: "Adam Lacey & Brigid McCormack",
  oneLiner:
    "A weekly conversation on the future of workplace learning, hosted by Assemble You co-founder Adam Lacey and Brigid McCormack — real talk on what's actually moving L&D forward, not theory.",
  services: [
    "Weekly episode audio edit",
    "Branded intro clip added to the top of every episode",
    "Custom music bed at the open and close",
  ],
  outcome:
    "[PLACEHOLDER — results/outcome copy, e.g. consistency of weekly release, listener growth]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Assemble You]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4iu3PejaNtPJuDSNMRlMVV" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/gb/podcast/the-assembly/id1682879103" },
  ],
  logoAlt: "The Assembly logo",
  featured: true,
  category: "flagship",
};
