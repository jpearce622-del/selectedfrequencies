import type { CaseStudy } from "@/types/case-study";

// Show, host, and episode-count facts researched via public web search
// (open.spotify.com / podcasts.apple.com / totalmentalperformance.com),
// July 2026 — host Kyran O'Neill and the 113-episode count come from
// that research, not invented. Service scope is a reasonable general
// description of archive-era editing work, not confirmed line-by-line
// with James for this specific client. Outcome/testimonial detail beyond
// the episode count, and cover art, are placeholders/supplied by James.
export const tmpPodcast: CaseStudy = {
  slug: "tmp-podcast",
  clientName: "Kyran O'Neill",
  showName: "TMP Podcast",
  hostName: "Kyran O'Neill",
  oneLiner:
    "Hosted by Dubai-based Mental Performance Consultant Kyran O'Neill, the TMP Podcast explores the stories, strategies, and mindset work behind high-performing founders, coaches, and entrepreneurs — 113 episodes of practical insight into what actually separates success from failure.",
  description:
    "The TMP Podcast is a mental performance and mindset podcast built for business owners, coaches, and high achievers who already know what they need to do — and want to understand why their own mind sometimes gets in the way. Across engaging, story-led conversations, host Kyran O'Neill uncovers the lessons his guests learned from both wins and setbacks in business, entrepreneurship, personal development, and leadership, translating them into practical insight listeners can apply to their own careers and lives. Every episode is built to inspire growth through authentic conversation, thoughtful questioning, and actionable advice from experienced guests — less theory, more of what actually changed someone's trajectory. For a niche squarely aimed at online coaches, personal trainers, and gym owners working on their own mental performance, that authenticity is the whole product; a flat, over-produced edit would undercut exactly the credibility the show is trying to build.",
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Episode description writing",
  ],
  outcome:
    "113 episodes and counting — a back catalogue of mindset and mental-performance conversations for an audience of coaches, PTs, and gym owners.",
  testimonial: {
    quote: "[PLACEHOLDER — client testimonial quote]",
    attribution: "[PLACEHOLDER — name, title, TMP Podcast]",
  },
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/6YjwvuD3oY6v5PTf5unlDE" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/gb/podcast/total-mental-performance/id1596646125" },
  ],
  logo: "/images/clients/total-mental-performance.jpeg",
  logoAlt: "TMP Podcast cover art",
  themeColor: "#C8102E",
  featured: false,
  category: "archive",
};
