import type { CaseStudy } from "@/types/case-study";

// Show confirmed via public web search (open.spotify.com /
// podcasts.apple.com / podchaser.com), July 2026 — host confirmed
// directly by James as Derek Teal (public listings had referred to
// him only as "Derek", Owner and Head Coach of Dialed Health; an
// unrelated cyclist/coach named Dylan Johnson had shown up in initial
// research and was ruled out). Service scope and outcome are
// placeholders. Cover art supplied by James (the show's real
// Spotify/Apple artwork).
export const dialedHealth: CaseStudy = {
  slug: "dialed-health",
  clientName: "Dialed Health",
  showName: "Dialed Health",
  hostName: "Derek Teal",
  oneLiner:
    "Dialed Health is a fitness and performance podcast for cyclists and endurance athletes, hosted by Derek Teal, covering training, nutrition, recovery, and long-term performance through evidence-based coaching and real-world experience.",
  description:
    "The show explores practical strategies for improving strength, mobility, recovery, and long-term performance, releasing conversations with some of the top professionals in the cycling and health industry roughly bimonthly. Whether listeners are competitive racers or recreational riders, Dialed Health provides evidence-based insight they can apply directly to their own training blocks — the kind of technical, physiology-heavy conversation that only lands if the edit keeps pacing tight without losing precision on the coaching detail.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Dialed Health]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4yNtSgv7jAjuatn4KuQFMl" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/dialed-health/id1480709469" },
  ],
  logo: "/images/clients/dialed-health.jpeg",
  logoAlt: "Dialed Health cover art",
  themeColor: "#1B4B54",
  featured: false,
  category: "archive",
};
