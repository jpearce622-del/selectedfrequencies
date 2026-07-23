import type { CaseStudy } from "@/types/case-study";

// Show, hosts, and full official title confirmed via public web
// search (open.spotify.com / podcasts.apple.com / younggoose.com),
// July 2026 — hosts Amitay Eshel & Anastasia Khodzhaeva of Young
// Goose match what James supplied exactly. Service scope is a
// reasonable general description of archive-era editing work, not
// confirmed line-by-line with James for this specific client.
// Outcome/testimonial are genuinely unknown. Cover art supplied by
// James (the show's real Spotify/Apple artwork).
export const biohackingBeauty: CaseStudy = {
  slug: "biohacking-beauty",
  clientName: "Young Goose",
  showName: "Biohacking Beauty: The Anti-Aging Skincare Podcast",
  hostName: "Amitay Eshel & Anastasia Khodzhaeva",
  oneLiner:
    "Hosted by Young Goose founders Amitay Eshel and Anastasia Khodzhaeva, Biohacking Beauty explores the latest innovations at the intersection of beauty, longevity, health, and science, for listeners who want evidence-based skincare rather than trend-chasing.",
  description:
    "Featuring conversations with leading doctors, researchers, entrepreneurs, and wellness experts, the podcast examines how advances in mitochondrial health, epigenetic signalling, and regenerative medicine can help optimise both appearance and overall wellbeing — moving beyond single-molecule trends to uncover multi-mechanism protocols for skin health. Designed for listeners who value evidence-based health advice, the show delivers practical insight into achieving healthier, more vibrant lives by bridging systemic longevity research with topical application. Science-heavy interview content like this lives or dies on clarity: dense technical explanations from research guests need a clean, unhurried edit so listeners can actually follow the mechanism being described, not just the conclusion.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Amitay Eshel or Anastasia Khodzhaeva, Young Goose]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4ekyDFzsglp9ACO4uFZeun" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/biohacking-beauty-the-anti-aging-skincare-podcast/id1552026927" },
  ],
  logo: "/images/clients/young-goose.png",
  logoAlt: "Biohacking Beauty Podcast cover art",
  themeColor: "#C9A876",
  featured: false,
  category: "archive",
};
