import type { CaseStudy } from "@/types/case-study";

// Show researched via public web search (podnews.net / open.spotify.com
// / podcasts.apple.com), July 2026 — One World Radio is Tomorrowland's
// official 24/7 digital radio station rather than a single-host show,
// confirmed rotating presenters (Adam K, Justin Wilkes, Armin van
// Buuren, and guest DJs) per James. Its flagship on-demand series is
// "Tomorrowland Friendship Mix", linked below as the closest verified
// public feed — no single unified "One World Radio" show URL exists to
// link to instead. Service scope and outcome are placeholders. Cover
// art supplied by James (the show's real branding).
export const oneWorldRadio: CaseStudy = {
  slug: "one-world-radio",
  clientName: "Tomorrowland",
  showName: "One World Radio",
  oneLiner:
    "One World Radio is Tomorrowland's official digital radio station, broadcasting electronic dance music twenty-four hours a day to listeners around the world through exclusive artist shows, live festival broadcasts, and curated playlists.",
  description:
    "Featuring interviews with some of the biggest names in electronic music alongside a rotating cast of presenters — including Adam K, Justin Wilkes, and Armin van Buuren — One World Radio captures the spirit and energy of Tomorrowland throughout the entire year, not just festival weekend. The station celebrates every corner of dance music while introducing listeners to both established artists and rising talent, with flagship on-demand series like the weekly Friendship Mix inviting close friends of the festival to craft an exclusive mix for the People of Tomorrow. A 24/7 station built around dozens of contributing DJs needs a consistent sonic identity across every handoff — the edit is what makes One World Radio sound like one station rather than a hundred different guest mixes stitched together.",
  services: [
    "Weekly episode edit & mixdown",
    "Sound mastering",
    "Episode packaging for platform distribution",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, One World Radio]",
  },
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/tomorrowland-friendship-mix/id1482399861" },
  ],
  logo: "/images/clients/tomorrowland-1.png",
  logoAlt: "One World Radio by Tomorrowland cover art",
  themeColor: "#5C1030",
  featured: false,
  category: "archive",
};
