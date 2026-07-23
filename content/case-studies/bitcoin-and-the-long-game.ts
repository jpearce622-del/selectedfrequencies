import type { CaseStudy } from "@/types/case-study";

// Hosts confirmed by James. Description reflects the "Sport · Money ·
// Life" framing on the show's own cover art — no independent public
// listing was found to verify further, so this stays deliberately
// light on claims. Platform links unconfirmed — left as TODOs rather
// than guessed. Outcome/testimonial are genuinely unknown.
export const bitcoinAndTheLongGame: CaseStudy = {
  slug: "bitcoin-and-the-long-game",
  clientName: "Bitcoin and the Long Game",
  showName: "Bitcoin and the Long Game",
  hostName: "Peter Lane & George Boyd",
  oneLiner:
    "A show about Bitcoin, sport, and money, hosted by Peter Lane and George Boyd — playing the long game across all three.",
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
    attribution: "[PLACEHOLDER — name, title]",
  },
  links: [
    { label: "Spotify", url: "#" }, // TODO: real link — not confirmed via search
    { label: "Apple Podcasts", url: "#" }, // TODO: real link — not confirmed via search
  ],
  logoAlt: "Bitcoin and the Long Game logo",
  featured: true,
  category: "flagship",
};
