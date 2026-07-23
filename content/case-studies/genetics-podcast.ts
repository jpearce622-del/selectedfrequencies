import type { CaseStudy } from "@/types/case-study";

// Host, focus, and platform links researched via public web search
// (sanogenetics.com / open.spotify.com / podcasts.apple.com), July
// 2026. Service scope confirmed directly by James. Outcome and
// testimonial are genuinely unknown — left as placeholders rather
// than invented.
export const geneticsPodcast: CaseStudy = {
  slug: "genetics-podcast",
  clientName: "Sano Genetics",
  showName: "The Genetics Podcast",
  hostName: "Dr Patrick Short",
  oneLiner:
    "Dr Patrick Short, CEO of Sano Genetics, interviews the scientists and innovators behind the latest breakthroughs in genetic research — one of the most consistently well-regarded shows in the genetics space.",
  services: ["Full audio & video episode edit", "Short-form clips for social"],
  outcome:
    "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Sano Genetics]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/2VT2teij4xBhPMNDYoZ7Ur" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-genetics-podcast/id1462418412" },
  ],
  logo: "/images/clients/genetics-podcast.png", // real Sano Genetics logo
  logoAlt: "Sano Genetics logo",
  featured: true,
  category: "flagship",
};
