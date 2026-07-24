import type { CaseStudy } from "@/types/case-study";

// Host, focus, guests, and platform links researched via public web
// search (outthinker.com / open.spotify.com / podcasts.apple.com),
// July 2026. Cover art supplied by James (the show's real Spotify/
// Apple artwork). Service scope NOT yet confirmed by James for this
// client — "What we do" is left as an explicit placeholder rather than
// guessed (unlike the audio/video scope he gave for the last batch of
// five). Outcome uses only sourced guest names; testimonial unknown.
export const outthinkers: CaseStudy = {
  slug: "outthinkers",
  clientName: "Outthinkers Network",
  showName: "Outthinkers",
  hostName: "Kaihan Krippendorff",
  oneLiner:
    "Kaihan Krippendorff's weekly growth-strategy show has hosted Eric Ries (The Lean Startup), Coach's Lew Frankfort, and Experience Economy co-author Joe Pine — reaching a global network of Chief Strategy and Innovation Officers from Fortune 500 companies. A show built for that room can't sound like it was cut in a hurry.",
  services: [
    "[PLACEHOLDER — service scope not yet confirmed for this client]",
  ],
  outcome:
    "Guests have included Eric Ries, Coach's Lew Frankfort, and Experience Economy co-author Joe Pine — part of Outthinker's global network of Chief Strategy and Innovation Officers.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, Outthinkers Network]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/0P9pQn0uYEXE7bk4FHJrLy" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/outthinkers/id1561681365" },
  ],
  logo: "/images/clients/outthinkers.jpeg", // real show artwork
  logoAlt: "Outthinkers cover art",
  themeColor: "#2E8FA6", // sampled from the show's teal accent
  featured: true,
  category: "flagship",
};
