import type { CaseStudy } from "@/types/case-study";

// Host, focus, and guests researched via public web search
// (outthinker.com / podcasts.apple.com), July 2026 — also hosted by
// Kaihan Krippendorff, part of the same Outthinker network as
// Outthinkers and Strategy at Scale, hence the same client
// attribution. Cover art supplied by James. Service scope NOT yet
// confirmed for this client — left as an explicit placeholder.
// Outcome uses only sourced guest/company names; testimonial unknown.
export const chiefStrategyOfficerPodcast: CaseStudy = {
  slug: "chief-strategy-officer-podcast",
  clientName: "Outthinkers Network",
  showName: "The Chief Strategy Officer Podcast",
  hostName: "Kaihan Krippendorff",
  oneLiner:
    "Kaihan Krippendorff — who has advised more than 300 of the world's top companies — sits down monthly with sitting Chief Strategy Officers from businesses like WestRock, IDEX, and Anywhere Real Estate, plus Google's Chief Strategist Neil Hoyne. Conversations at that level need production that never once gets in the way.",
  services: [
    "[PLACEHOLDER — service scope not yet confirmed for this client]",
  ],
  outcome:
    "Guests include Google's Chief Strategist Neil Hoyne and sitting Chief Strategy Officers from WestRock, IDEX, and Anywhere Real Estate.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Outthinkers Network]",
  },
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-chief-strategy-officer-podcast/id1742792507" },
    { label: "Website", url: "https://outthinker.com/csopodcast/" },
  ],
  logo: "/images/clients/chief-strategy-officer-podcast.jpeg", // real show artwork
  logoAlt: "The Chief Strategy Officer Podcast cover art",
  themeColor: "#1D5FA8", // sampled from the show's deep-blue cover art
  featured: true,
  category: "flagship",
};
