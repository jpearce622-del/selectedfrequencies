import type { CaseStudy } from "@/types/case-study";

// Show and host confirmed via public web search (podcasts.apple.com /
// podbean.com), July 2026 — host Oliver Heldens matches what James
// supplied, biweekly cadence confirmed there. No verified Spotify show
// URL was found, so only the confirmed Apple Podcasts link is included
// rather than guessing one. Service scope is a reasonable general
// description of archive-era editing work, not confirmed line-by-line
// with James for this specific client. Outcome/testimonial are
// genuinely unknown. Cover art supplied by James (the show's real
// Apple Podcasts artwork).
export const heldeepRadio: CaseStudy = {
  slug: "heldeep-radio",
  clientName: "Oliver Heldens",
  showName: "Heldeep Radio",
  hostName: "Oliver Heldens",
  oneLiner:
    "Heldeep Radio is the official radio show hosted by internationally acclaimed DJ and producer Oliver Heldens, celebrated for its energetic blend of house, future house, and cutting-edge electronic music.",
  description:
    "The show features the latest releases, exclusive premieres, guest mixes, and carefully curated selections from across the dance music industry, alongside tracks from Oliver Heldens's own Heldeep Records label. Heldeep Radio has become one of the most respected radio shows in electronic music, introducing listeners to both established artists and emerging talent from around the world on a biweekly schedule. Running a label showcase and a personal radio brand through the same feed means the edit has to keep the show's identity distinct from any one release it's promoting — the label tracks change every episode, but the show itself has to sound unmistakably like Heldeep every time.",
  services: [
    "Episode edit & mixdown",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Heldeep Radio]",
  },
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/oliver-heldens-presents-heldeep-radio/id1236253646" },
  ],
  logo: "/images/clients/heldeep-radio.jpeg",
  logoAlt: "Oliver Heldens presents Heldeep Radio cover art",
  themeColor: "#2F8F8A",
  featured: false,
  category: "archive",
};
