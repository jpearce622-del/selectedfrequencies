import type { CaseStudy } from "@/types/case-study";

// Host, focus, stats, and platform links researched via public web
// search (sanogenetics.com / open.spotify.com / podcasts.apple.com),
// July 2026 — episode count, download figures, and the Google ranking
// claim all come from that research, not invented. Service scope
// confirmed directly by James. Testimonial is genuinely unknown —
// left as a placeholder rather than invented. Cover art supplied by
// James (the show's real Spotify/Apple artwork).
export const geneticsPodcast: CaseStudy = {
  slug: "genetics-podcast",
  clientName: "Sano Genetics",
  showName: "The Genetics Podcast",
  hostName: "Dr Patrick Short",
  oneLiner:
    "Dr Patrick Short, CEO of Sano Genetics, has built Google's highest-ranked genetics podcast — 248 episodes and 880,000+ downloads across 40 countries, with guests ranging from Cambridge researchers to biotech CEOs. A show read by that audience can't afford an inconsistent edit.",
  services: ["Full audio & video episode edit", "Short-form clips for social"],
  outcome:
    "248 episodes and counting, 880,000+ downloads across 40 countries — the highest-ranked genetics podcast on Google, covering everything from gene therapy to AI-driven health data.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Sano Genetics]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/2VT2teij4xBhPMNDYoZ7Ur" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-genetics-podcast/id1462418412" },
  ],
  logo: "/images/clients/genetics-podcast-cover.jpeg", // real show artwork
  logoAlt: "The Genetics Podcast cover art",
  themeColor: "#E85A42", // sampled from the show's coral-red cover art
  featured: true,
  category: "flagship",
};
