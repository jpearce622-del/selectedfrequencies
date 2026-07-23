import type { CaseStudy } from "@/types/case-study";

// Show title, host, and guest stories researched via public web
// search (open.spotify.com / podcasts.apple.com / alicestapleton.com),
// July 2026 — the show's real title is "The Career Change Diaries"
// (Alice's coaching brand is "Career Change Coach", used as the
// client name here). The three guest examples are real past episodes,
// not invented. Service scope confirmed directly by James. Outcome
// and testimonial are genuinely unknown. Cover art supplied by James
// (the show's real Spotify/Apple artwork).
export const careerChangeDiaries: CaseStudy = {
  slug: "career-change-coach",
  clientName: "Alice Stapleton",
  showName: "The Career Change Diaries",
  hostName: "Alice Stapleton",
  oneLiner:
    "Accredited career change coach Alice Stapleton hosts monthly conversations with people who've actually made the leap — an army captain who now runs a wine merchant, a press officer turned creative strategist, a fashion buyer turned artisan craftswoman. Stories that specific deserve production that never gets in their way.",
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
  logo: "/images/clients/career-change-diaries.jpeg", // real show artwork
  logoAlt: "The Career Change Diaries cover art",
  featured: true,
  category: "flagship",
};
