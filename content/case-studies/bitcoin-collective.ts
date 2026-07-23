import type { CaseStudy } from "@/types/case-study";

// Host, focus, and links researched via public web search
// (podcasts.apple.com / bitcoincollective.co), July 2026. Service
// scope confirmed directly by James. Outcome and testimonial are
// genuinely unknown — left as placeholders rather than invented.
export const bitcoinCollective: CaseStudy = {
  slug: "bitcoin-collective",
  clientName: "The Bitcoin Collective",
  showName: "The Bitcoin Collective",
  hostName: "Jordan Walker",
  oneLiner:
    "A weekly UK Bitcoin show hosted by Jordan Walker — real conversations with founders, thinkers, and business owners, with the jargon left out.",
  services: [
    "Full audio & video episode edit",
    "Audio and video enhancement pass",
    "Episode description writing",
    "Short-form clips for social",
    "Distribution across platforms",
  ],
  outcome:
    "[PLACEHOLDER — results/outcome copy, e.g. 200+ episodes since 2021, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, The Bitcoin Collective]",
  },
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-bitcoin-collective/id1561573613" },
    { label: "Website", url: "https://bitcoincollective.co/bitcoin-podcast-episodes/" },
  ],
  logoAlt: "The Bitcoin Collective logo",
  featured: true,
  category: "flagship",
};
