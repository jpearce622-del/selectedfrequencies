import type { CaseStudy } from "@/types/case-study";

// Show and host confirmed via public web search (open.spotify.com /
// goodlifeproject.com / rephonic.com), July 2026 — host Jess Lively
// matches what James supplied, and the 2014 launch date, 500+
// episodes, and 14M+ downloads are confirmed stats from that research,
// not invented. Service scope is a reasonable general description of
// archive-era editing work, not confirmed line-by-line with James for
// this specific client. Testimonial is a placeholder. Cover art
// supplied by James (the show's real Spotify/Apple artwork).
export const theLivelyShow: CaseStudy = {
  slug: "the-lively-show",
  clientName: "Jess Lively",
  showName: "The Lively Show",
  hostName: "Jess Lively",
  oneLiner:
    "The Lively Show is a lifestyle and personal growth podcast hosted by Jess Lively, encouraging listeners to build more intentional, fulfilling, and balanced lives — 500+ episodes and 14 million+ downloads since launching in 2014.",
  description:
    "Through conversations covering mindset, relationships, wellbeing, business, and personal development — with guests including Elizabeth Gilbert, Gary Vaynerchuk, and Brené Brown — the show inspires its audience to pursue meaningful goals while embracing authenticity and continuous self-improvement. Each episode combines thoughtful discussion with practical advice listeners can apply to everyday life, plus recurring segments like Flow Diaries exploring intuition and inner-voice work. A back catalogue this size, running over a decade, needs an edit that holds a consistent identity across hundreds of episodes and countless guest styles — new listeners discovering episode #480 should get the same sonic experience as day-one subscribers.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome:
    "500+ episodes and 14 million+ downloads since the show launched in 2014, with guests including Elizabeth Gilbert, Gary Vaynerchuk, and Brené Brown.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — Jess Lively, The Lively Show]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/6rpypdj7FZJ5Zij90bE74c" },
  ],
  logo: "/images/clients/the-lively-show.jpeg",
  logoAlt: "The Lively Show cover art",
  themeColor: "#C98D53",
  featured: false,
  category: "archive",
};
