import type { CaseStudy } from "@/types/case-study";

// Show title, host, and links researched via public web search
// (open.spotify.com / podcasts.apple.com / alicestapleton.com), July
// 2026 — note the podcast's real title is "The Career Change Diaries"
// (Alice's coaching brand is "Career Change Coach", used as the
// client name here). Service scope confirmed directly by James.
// Outcome and testimonial are genuinely unknown.
export const careerChangeDiaries: CaseStudy = {
  slug: "career-change-coach",
  clientName: "Alice Stapleton",
  showName: "The Career Change Diaries",
  hostName: "Alice Stapleton",
  oneLiner:
    "A monthly show for anyone contemplating a career change, hosted by accredited career change coach Alice Stapleton — honest interviews with people who've made the leap, and experts on how to manage it.",
  services: [
    "Full audio & video episode edit",
    "Audio and video enhancement pass",
    "Episode description writing",
    "Short-form clips for social",
    "Distribution across platforms",
  ],
  outcome:
    "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, Career Change Coach]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/11UsIHAsAR20UZPS78r01N" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-career-change-diaries/id1752092843" },
  ],
  logoAlt: "The Career Change Diaries logo",
  featured: true,
  category: "flagship",
};
