import type { CaseStudy } from "@/types/case-study";

// Show, hosts, and links confirmed via public web search
// (open.spotify.com / podcasts.apple.com / theECmethod.co.uk), July
// 2026 — real show title is "The EC Method" (an earlier client roster
// entry had incorrectly called it "The EC Blueprint"; corrected here).
// Hosts are known publicly only as Chloe & Emma (Instagram
// @MadeleyChloe / @ESGfitness) — no surnames confirmed, so none are
// invented. Service scope and outcome are placeholders. Cover art
// supplied by James (the show's real Spotify/Apple artwork).
export const theEcMethod: CaseStudy = {
  slug: "the-ec-method",
  clientName: "Chloe & Emma",
  showName: "The EC Method",
  hostName: "Chloe & Emma",
  oneLiner:
    "The EC Method is a fitness podcast hosted by personal trainers Chloe and Emma, answering real client questions and exploring the common barriers and hurdles that get in the way of reaching a fitness goal.",
  description:
    "Rather than another generic training-tips show, The EC Method works directly from questions Chloe and Emma's own clients bring them — plateaus, motivation dips, conflicting nutrition advice, the gap between knowing what to do and actually doing it — and talks through them with the same directness they'd use in a coaching session. That client-first format means the show lives or dies on how natural the conversation sounds; over-editing two coaches thinking out loud would flatten exactly what makes the advice land. Twice-weekly episodes keep the show's back catalogue growing into a genuine reference library for anyone stuck on the same hurdles their clients keep bringing up.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Chloe & Emma, The EC Method]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/09xSxSkNik87YljpT3U90V" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/gb/podcast/the-ec-method/id1503997038" },
    { label: "Website", url: "https://www.theecmethod.co.uk" },
  ],
  logo: "/images/clients/the-ec-method.jpeg",
  logoAlt: "The EC Method cover art",
  themeColor: "#D693A8",
  featured: false,
  category: "archive",
};
