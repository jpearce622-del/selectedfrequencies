import type { CaseStudy } from "@/types/case-study";

// Focus, production partners, and platform links researched via public
// web search (outthinker.com / open.spotify.com / podcasts.apple.com),
// July 2026 — also hosted by Kaihan Krippendorff, part of the same
// Outthinker network as Outthinkers and The Chief Strategy Officer
// Podcast, hence the same client attribution. Cover art supplied by
// James. Service scope NOT yet confirmed for this client — left as an
// explicit placeholder. Outcome uses only a sourced, named guest
// example; testimonial unknown.
export const strategyAtScale: CaseStudy = {
  slug: "strategy-at-scale",
  clientName: "Outthinkers Network",
  showName: "Strategy at Scale",
  hostName: "Kaihan Krippendorff",
  oneLiner:
    "Produced with Scaling Up and the Growth Institute, Strategy at Scale interviews founders who've actually scaled — including Veeva Systems co-founder Matt Wallach, who took the company to nearly $2.75 billion in annual revenue. Extracting a repeatable strategy from a story like that takes an edit as sharp as the guest.",
  services: [
    "[PLACEHOLDER — service scope not yet confirmed for this client]",
  ],
  outcome:
    "Guests include Veeva Systems co-founder Matt Wallach, who scaled the company to a public business generating close to $2.75B in annual revenue.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Outthinkers Network]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/3dcIfmlCtQd8nVQ31SLeiy" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/strategy-at-scale/id1780820829" },
  ],
  logo: "/images/clients/strategy-at-scale.jpeg", // real show artwork
  logoAlt: "Strategy at Scale cover art",
  themeColor: "#2478E0", // sampled from the show's cobalt-blue cover art
  featured: true,
  category: "flagship",
};
