import type { CaseStudy } from "@/types/case-study";

// Show and host confirmed via public web search (open.spotify.com /
// podcasts.apple.com / wildoakcapital.com), July 2026 — host Eric
// Nelson matches what James supplied exactly. The 170+ episode count
// and 3+ year run (concluded) are confirmed facts from that research,
// not invented. Service scope is a reasonable general description of
// archive-era editing work, not confirmed line-by-line with James for
// this specific client. Testimonial is a placeholder. Cover art
// supplied by James (the show's real Spotify/Apple artwork).
export const realEstateMindset: CaseStudy = {
  slug: "real-estate-mindset",
  clientName: "Eric Nelson",
  showName: "The Real Estate Mindset",
  hostName: "Eric Nelson",
  oneLiner:
    "The Real Estate Mindset is a podcast designed to educate and inspire property professionals, investors, and aspiring entrepreneurs — 170+ episodes across three years, hosted by Wild Oak Capital principal Eric Nelson.",
  description:
    "Covering real estate investing, business strategy, marketing, sales, leadership, and personal development, the show features experienced guests who share practical lessons from their own journeys — hard questions about what separates the investors who make it from the ones who don't, not just success stories. Each episode provides actionable advice and valuable insight to help listeners build successful property businesses while developing the mindset required for long-term success. Long-running interview shows like this accumulate a real back catalogue that new listeners binge from the start, which means every episode's audio quality has to hold up years later, not just on release day.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome:
    "170+ episodes across more than three years, interviewing successful property investors on the mindset and strategy behind their success before the show concluded its run.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Eric Nelson, The Real Estate Mindset]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/1uLOJQhkC98skIm3KQTHKE" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-real-estate-mindset/id1560387078" },
  ],
  logo: "/images/clients/real-estate-mindset.jpg",
  logoAlt: "The Real Estate Mindset cover art",
  themeColor: "#C99A2E",
  featured: false,
  category: "archive",
};
