import type { CaseStudy } from "@/types/case-study";

// Public web search (July 2026) did not surface a "loc.tax" show on
// Spotify or Apple Podcasts under that name, so no streaming links are
// included here rather than guessing — the show may be unlisted,
// privately distributed, or since renamed. Host, service scope, and
// outcome are placeholders. Cover art supplied by James (the show's
// real branding).
export const locTax: CaseStudy = {
  slug: "loc-tax",
  clientName: "loc.tax",
  showName: "loc.tax",
  oneLiner:
    "loc.tax is a podcast focused on simplifying the often complex world of taxation, finance, and business compliance for entrepreneurs and business owners.",
  description:
    "Through expert discussions and practical advice, loc.tax helps business owners, entrepreneurs, and professionals better understand tax regulations, financial planning, and strategies for managing successful businesses. By breaking down technical topics into accessible conversations, the show makes financial education approachable and relevant for modern business owners rather than leaving it locked in dense regulatory language. That accessibility is the editorial challenge: dense tax and compliance detail has to survive the edit without turning into jargon, so the pacing and clarity of the cut matter as much as the accuracy of the advice.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, loc.tax]",
  },
  links: [],
  logo: "/images/clients/loc-tax.png",
  logoAlt: "loc.tax cover art",
  themeColor: "#141414",
  featured: false,
  category: "archive",
};
