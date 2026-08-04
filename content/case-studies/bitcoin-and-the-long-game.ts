import type { CaseStudy } from "@/types/case-study";

// Hosts confirmed by James; "Sport · Money · Life" is the show's own
// cover-art tagline. No independent public listing was found to
// verify further (platform links unconfirmed — left as TODOs rather
// than guessed). Outcome/testimonial are genuinely unknown. Cover art
// supplied by James.
export const bitcoinAndTheLongGame: CaseStudy = {
  slug: "bitcoin-and-the-long-game",
  clientName: "Peter Lane and George Boyd",
  showName: "Bitcoin and the Long Game",
  hostName: "Peter Lane & George Boyd",
  oneLiner:
    "Peter Lane and George Boyd built Bitcoin and the Long Game around a simple idea — sport, money, and life all reward patience. A show about playing long games deserves production built to last: full audio and video, every week, with no corners cut.",
  description: `Peter Lane and George Boyd built Bitcoin and the Long Game around a single connecting idea: sport, money and life all reward patience. It is a broad remit for a show, and it means episodes move between subjects that would normally sit on completely different feeds — an argument about training and consistency, then one about monetary policy, then something closer to a personal conversation.

That range is the production challenge. A show that jumps between registers can feel like several different shows unless the edit gives it a consistent shape. Each episode has to open the same way, move at a comparable pace, and sound tonally like the last one, so a listener who came for one subject stays for another. The through-line is the hosts, and the job of the edit is to keep them sounding like the constant while the topics change around them.

The show is produced for audio and video, which doubles the surface area of every episode. A cut has to work in both: something that is inaudible on audio can be plainly visible on screen, so edit points have to satisfy the ear and the eye at once. On top of that sits an enhancement pass on both streams, episode descriptions written for each release, short-form clips cut for social, and distribution across platforms.

That is a substantial amount of work per episode, and it is the part that quietly ends podcasts run by people with day jobs. A show about playing long games only proves the point by still being there in a year — and the production has to be built so that staying is the path of least resistance rather than a weekly act of will.`,
  services: [
    "Full audio & video episode edit",
    "Audio and video enhancement pass",
    "Episode description writing",
    "Short-form clips for social",
    "Distribution across platforms",
  ],
  links: [
    { label: "Spotify", url: "#" }, // TODO: real link — not confirmed via search
    { label: "Apple Podcasts", url: "#" }, // TODO: real link — not confirmed via search
  ],
  logo: "/images/clients/bitcoin-and-the-long-game.jpeg", // the show's real cover art
  logoAlt: "Bitcoin and the Long Game cover art",
  themeColor: "#C79A3E", // sampled from the gold "BITCOIN" title on the cover
  featured: true,
  category: "flagship",
};
