import type { CaseStudy } from "@/types/case-study";

// PLACEHOLDER CONTENT — replace every marked field with real copy
// before this page goes live. Structure only; no facts about Sano
// Genetics or The Genetics Podcast have been invented here.
export const geneticsPodcast: CaseStudy = {
  slug: "genetics-podcast",
  clientName: "Sano Genetics",
  showName: "The Genetics Podcast",
  hostName: "Dr Patrick Short",
  oneLiner:
    "[PLACEHOLDER — one-sentence description of what the show covers and who it's for]",
  services: [
    "[PLACEHOLDER — e.g. full episode editing]",
    "[PLACEHOLDER — e.g. show notes and chapter timestamps]",
    "[PLACEHOLDER — e.g. YouTube and social clip creation]",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Sano Genetics]",
  },
  links: [
    { label: "Spotify", url: "#" }, // TODO: real link
    { label: "Apple Podcasts", url: "#" }, // TODO: real link
    { label: "YouTube", url: "#" }, // TODO: real link
  ],
  logo: "/images/clients/genetics-podcast.png", // real Sano Genetics logo
  logoAlt: "Sano Genetics logo",
  coverImage: "/images/case-studies/genetics-podcast.svg", // TODO: replace with real cover image
  coverImageAlt: "[PLACEHOLDER — describe the image: e.g. host recording in studio]",
  featured: true,
  category: "flagship",
};
