// Single source of truth for the /podcast-launch-roadmap tool.
//
// This data is consumed in two places from ONE definition so the
// on-page copy and the structured data can never drift apart:
//   1. app/podcast-launch-roadmap/page.tsx builds HowTo + FAQPage
//      JSON-LD from it (server-rendered, crawlable).
//   2. components/tools/PodcastRoadmapChecklist.tsx renders the
//      interactive, localStorage-backed checklist from the same steps.
//
// Every field here is rendered as real static HTML on the server, so the
// step and FAQ text is indexable without JavaScript.

export interface RoadmapStep {
  /** Stable id used as the localStorage completion key — never renumber. */
  id: string;
  /** Short, action-first step title (also the HowTo step name). */
  title: string;
  /** One-line plain-English description of what this step involves. */
  description: string;
  /** A concrete beginner tip that adds original, practical value. */
  tip: string;
  /** Rough time investment for a first-timer. */
  time: string;
  /** Rough out-of-pocket cost for a first-timer. */
  cost: string;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    id: "concept",
    title: "Nail your concept & format",
    description:
      "Decide who your show is for, the specific topic you'll own, and the format — solo, co-hosted, or interview — before you record anything.",
    tip: "Write a one-sentence promise: “A show that helps ___ do ___.” If you can't fill both blanks, the concept isn't sharp enough yet. A tight niche beats a broad one every time when you're starting from zero.",
    time: "2–4 hours",
    cost: "Free",
  },
  {
    id: "name-artwork",
    title: "Name your show & make cover art",
    description:
      "Pick a searchable name and design 3000×3000px square cover art that's still legible as a thumbnail the size of a fingernail.",
    tip: "Test your artwork at 150×150px — that's roughly how it appears in Apple Podcasts and Spotify search. If the title is unreadable at that size, simplify it. Canva has free podcast cover templates sized correctly out of the box.",
    time: "2–3 hours",
    cost: "Free–£50",
  },
  {
    id: "gear",
    title: "Get the minimum gear",
    description:
      "A single USB microphone and a pair of closed-back headphones is all you need to sound professional on episode one.",
    tip: "Skip the expensive XLR setup for now. A USB mic like the Samson Q2U or Audio-Technica ATR2100x records broadcast-quality audio and plugs straight into your laptop — no audio interface required.",
    time: "~1 hour to buy",
    cost: "£60–£150",
  },
  {
    id: "software",
    title: "Set up free recording software",
    description:
      "Install a free digital audio workstation (DAW) to capture and arrange your audio — no paid subscription needed to launch.",
    tip: "Audacity (Windows/Mac/Linux) and GarageBand (Mac) are both free and more than capable. Recording remote guests? Riverside and Zencastr both have free tiers that record each speaker on a separate track — a lifesaver when you edit.",
    time: "~30 minutes",
    cost: "Free",
  },
  {
    id: "record",
    title: "Record your first episode",
    description:
      "Record in the quietest room you have, speak close to the mic, and get a full episode down — done beats perfect.",
    tip: "Soft furnishings kill echo: record in a room with a carpet, curtains, and a sofa, or throw a duvet over a clothes rail behind you. Record 10 seconds of “room tone” (silence) — you'll use it to patch edits later.",
    time: "1–2 hours",
    cost: "Free",
  },
  {
    id: "edit",
    title: "Edit the basics",
    description:
      "Trim the top and tail, cut long pauses and major stumbles, level the volume, and add a short intro and outro.",
    tip: "Don't over-edit — leaving natural breaths and a little personality in makes the show feel human. Export your final file as an MP3 at 128kbps for spoken word; it's the sweet spot for quality versus file size.",
    time: "2–4 hours per episode",
    cost: "Free",
  },
  {
    id: "host",
    title: "Choose a podcast host",
    description:
      "Upload your episode to a dedicated podcast host, which stores your audio and generates the RSS feed every app reads from.",
    tip: "You need a real podcast host (Buzzsprout, Transistor, Captivate, Spotify for Podcasters) — not a normal website — because the RSS feed is what distributes you everywhere. Spotify for Podcasters is genuinely free; most paid hosts run £9–£19/month.",
    time: "~1 hour",
    cost: "Free–£19/mo",
  },
  {
    id: "publish",
    title: "Publish & submit to directories",
    description:
      "Publish your first episode, then submit your RSS feed once to Apple Podcasts and Spotify — they pull every future episode automatically.",
    tip: "Launch with 2–3 episodes live rather than one, so first-time listeners have something to binge. Submitting your feed is a one-time job: after approval, new episodes appear everywhere within a few hours of hitting publish.",
    time: "1–2 hours (one-time)",
    cost: "Free",
  },
  {
    id: "promote",
    title: "Promote & stay consistent",
    description:
      "Share short video and audio clips, ask guests to repost, and — most importantly — publish on a schedule you can actually keep.",
    tip: "Consistency out-performs frequency: a reliable episode every two weeks beats a burst of weekly episodes that fizzles out. Cut 30–60 second vertical clips from each episode for Instagram, TikTok, and YouTube Shorts to pull new listeners back to the full show.",
    time: "Ongoing",
    cost: "Free",
  },
];

export interface RoadmapFaq {
  question: string;
  answer: string;
}

export const roadmapFaqs: RoadmapFaq[] = [
  {
    question: "How much does it cost to start a podcast?",
    answer:
      "You can launch a podcast for under £150. The only essentials are a USB microphone (£60–£150), free recording software like Audacity or GarageBand, and a podcast host — Spotify for Podcasters is free, while paid hosts such as Buzzsprout or Transistor cost roughly £9–£19 per month. Everything else, from cover art in Canva to submitting your feed to Apple and Spotify, is free.",
  },
  {
    question: "What equipment do I need to start a podcast?",
    answer:
      "For your first episode you only need three things: a USB microphone (the Samson Q2U or Audio-Technica ATR2100x are popular beginner picks), a pair of closed-back headphones to monitor your audio, and a laptop or computer to record on. You don't need a mixer, an audio interface, or a soundproofed studio to sound professional — a quiet, soft-furnished room does most of the work.",
  },
  {
    question: "How long does it take to start a podcast?",
    answer:
      "Most first-time podcasters can go from idea to published episode in one to two weeks working part-time. Planning your concept and artwork takes a few hours, recording your first episode takes an hour or two, and editing a beginner episode typically takes two to four hours. The one-time setup of choosing a host and submitting to directories adds a couple more hours.",
  },
  {
    question: "Do I need a website to start a podcast?",
    answer:
      "No — you don't need a website to launch. Your podcast host generates an RSS feed and usually a basic listing page for you, which is enough to be found on Apple Podcasts, Spotify, and every other app. A website helps later for SEO, email capture, and detailed show notes, but it isn't a barrier to getting your first episode live.",
  },
  {
    question: "How do I get my podcast on Apple Podcasts and Spotify?",
    answer:
      "You submit the RSS feed from your podcast host to each directory once. In Apple Podcasts Connect and Spotify for Podcasters you paste your feed URL, verify ownership, and wait for approval — usually a few hours to a couple of days. After that, every new episode you publish appears on both platforms automatically, with no need to re-submit.",
  },
];
