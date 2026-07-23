import type { CaseStudy } from "@/types/case-study";

// James's original notes attributed this show to "Trevor Connor and
// Chris Case (Fast Talk by Fastcat/Fascat Coaching)" — but the cover
// art itself reads "FasCat", and James confirmed the host directly as
// Frank Overton (Coach Frank "Big Cat" Overton, FasCat Coaching,
// Boulder CO). Trevor Connor and Chris Case actually host a
// different, unrelated show called "Fast Talk" from Fast Talk
// Laboratories — the two are easily confused by name but are separate
// companies/podcasts. Service scope and outcome are placeholders.
// Cover art supplied by James (the show's real branding).
export const fascatCoaching: CaseStudy = {
  slug: "fascat-coaching",
  clientName: "FasCat Coaching",
  showName: "FasCat Cycling Training Tips Podcast",
  hostName: "Coach Frank Overton",
  oneLiner:
    "FasCat is dedicated to helping cyclists maximise their performance through smarter training, sports science, and data-driven coaching — endurance, power training, nutrition, race preparation, and recovery, for riders at every level.",
  description:
    "By combining scientific research with real-world coaching experience from the FasCat Coaching team in Boulder, Colorado, the podcast provides valuable education for cyclists of all levels, helping athletes achieve sustainable improvements in performance and long-term success rather than short-term gains that don't hold up over a season. Training-tip content like this is judged on precision: a mis-cut number or a muddled explanation of a training zone actually changes what a listener does on their next ride, so accuracy through the edit matters as much as it does in the original coaching.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome: "[PLACEHOLDER — results/outcome copy, e.g. episode count, growth, audience reach]",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, FasCat Coaching]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/2dCwiPGkiv3VJuSeJN957S" },
  ],
  logo: "/images/clients/fascat.png",
  logoAlt: "FasCat Coaching podcast cover art",
  themeColor: "#171B33",
  featured: false,
  category: "archive",
};
