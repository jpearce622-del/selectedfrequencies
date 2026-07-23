import type { CaseStudy } from "@/types/case-study";

// Show and host confirmed via public web search (open.spotify.com /
// podcasts.apple.com / juliealedbetter.com), July 2026 — host Julie
// Ledbetter matches what James supplied. Service scope is a reasonable
// general description of archive-era editing work, not confirmed
// line-by-line with James for this specific client. Outcome/testimonial
// are genuinely unknown. Cover art supplied by James (the show's real
// Spotify/Apple artwork).
export const embraceYourReal: CaseStudy = {
  slug: "embrace-your-real",
  clientName: "Julie Ledbetter",
  showName: "Embrace Your Real",
  hostName: "Julie Ledbetter",
  oneLiner:
    "Fitness coach and mindset educator Julie Ledbetter hosts Embrace Your Real, a health, wellness, and personal development podcast helping listeners build confidence, improve their mindset, and create a healthier relationship with themselves.",
  description:
    "Embrace Your Real covers the topics that sit at the intersection of body image, fitness, nutrition, mental wellbeing, and self-acceptance — encouraging listeners to move beyond unrealistic expectations and embrace who they truly are. Host Julie Ledbetter brings honest, unfiltered conversations and practical advice rather than polished wellness-industry platitudes, which is exactly why the edit has to stay out of the way: pacing that feels natural, not over-tightened, and sound that reads as a real conversation rather than a produced segment. The show empowers its audience — many of them working through body image and confidence issues in real time — to live with greater confidence and purpose, one honest episode at a time.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Julie Ledbetter, Embrace Your Real]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/5R8iILZKXWALGZ6FjSWVXI" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/embrace-your-real/id1498254607" },
  ],
  logo: "/images/clients/eyr-podcast.png",
  logoAlt: "Embrace Your Real cover art",
  themeColor: "#E8AC1E",
  featured: false,
  category: "archive",
};
