import type { CaseStudy } from "@/types/case-study";

// Hosts, rebrand history, and platform links researched via public
// web search (podcasts.apple.com / open.spotify.com /
// assembleyou.com), July 2026. Service scope confirmed directly by
// James. Outcome and testimonial are genuinely unknown — left as
// placeholders rather than invented. Cover art supplied by James (the
// show's real Spotify/Apple artwork).
export const theAssembly: CaseStudy = {
  slug: "assemble-you",
  clientName: "Assemble You",
  showName: "The Assembly",
  hostName: "Adam Lacey & Brigid McCormack",
  oneLiner:
    "Adam Lacey, co-founder of Assemble You, and Brigid McCormack host The Assembly — relaunched from L&D Challenges into a sharper weekly show unpacking what's actually working in workplace learning, backed by its own blog and newsletter. Growing a media brand on that schedule starts with an edit that's never late and never sounds like an afterthought.",
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
  logo: "/images/clients/the-assembly.jpeg", // real show artwork
  logoAlt: "The Assembly cover art",
  themeColor: "#1FCB82", // sampled from the show's mint-green cover art
  featured: true,
  category: "flagship",
};
