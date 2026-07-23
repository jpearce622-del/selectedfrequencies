import type { CaseStudy } from "@/types/case-study";

// Hosts confirmed by James; "Sport · Money · Life" is the show's own
// cover-art tagline. No independent public listing was found to
// verify further (platform links unconfirmed — left as TODOs rather
// than guessed). Outcome/testimonial are genuinely unknown. Cover art
// supplied by James.
export const bitcoinAndTheLongGame: CaseStudy = {
  slug: "bitcoin-and-the-long-game",
  clientName: "Bitcoin and the Long Game",
  showName: "Bitcoin and the Long Game",
  hostName: "Peter Lane & George Boyd",
  oneLiner:
    "Peter Lane and George Boyd built Bitcoin and the Long Game around a simple idea — sport, money, and life all reward patience. A show about playing long games deserves production built to last: full audio and video, every week, with no corners cut.",
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
  logo: "/images/clients/bitcoin-and-the-long-game.jpeg", // real show artwork
  logoAlt: "Bitcoin and the Long Game cover art",
  featured: true,
  category: "flagship",
};
