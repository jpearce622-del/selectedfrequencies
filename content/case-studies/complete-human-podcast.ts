import type { CaseStudy } from "@/types/case-study";

// Show and hosts confirmed via public web search (open.spotify.com /
// podcasts.apple.com / jaycampbell.com), July 2026 — hosts Janna
// Breslin & Evan DeMarco match what James supplied exactly, and the
// cover art itself confirms the full "Complete Human™ Podcast" title.
// Service scope is a reasonable general description of archive-era
// editing work, not confirmed line-by-line with James for this
// specific client. Outcome/testimonial are genuinely unknown. Cover
// art supplied by James (the show's real Spotify/Apple artwork).
export const completeHumanPodcast: CaseStudy = {
  slug: "complete-human-podcast",
  clientName: "Janna Breslin & Evan DeMarco",
  showName: "Complete Human Podcast",
  hostName: "Janna Breslin & Evan DeMarco",
  oneLiner:
    "The Complete Human Podcast explores what it means to optimise every aspect of human performance — physical health, nutrition, mental resilience, longevity, and personal growth — hosted by bio-optimization co-founders Janna Breslin and Evan DeMarco.",
  description:
    "Through conversations with leading experts, researchers, entrepreneurs, and health professionals, the show examines the latest thinking in wellness, performance, and self-improvement, offering practical tools across Mental Fortitude, Physical Health, Spiritual Abundance, and Planetary Connection. Listeners gain evidence-based strategies to help them live healthier, more balanced, and more fulfilling lives, with the show going further than typical wellness content by shining a light on the bigger issues facing modern health and discussing viable solutions. Co-hosted, expert-led interviews like this need an edit that keeps two distinct voices and a rotating cast of guests balanced against each other, so no single perspective gets buried under another.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Janna Breslin or Evan DeMarco, Complete Human]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4XuwzwZINKitjWzYgZJImq" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/complete-human/id1493565947" },
  ],
  logo: "/images/clients/complete-human.png",
  logoAlt: "Complete Human Podcast cover art",
  themeColor: "#2F8B84",
  featured: false,
  category: "archive",
};
