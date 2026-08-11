import type { ServicePage } from "@/types/service-page";

/**
 * The SaaS vertical page. Structurally about PIPELINE, not audio.
 *
 * The argument runs: you already do content, content is getting harder to
 * differentiate, and a podcast is the one format that gets you a recorded
 * hour with the exact person you're trying to sell to. Everything here is
 * framed in demand-gen language — ICP, ABM, pipeline, product marketing —
 * because that is the language the buyer already thinks in.
 *
 * Deliberate boundaries:
 *  - Never argues generic "companies should podcast". That is
 *    outsourced-podcast-production.ts's job and this page must not drift there.
 *  - Never argues the founder's personal brand. That is
 *    thought-leadership-podcast-production.ts.
 *  - Mentions repurposing only as an outcome, and links out to
 *    podcast-repurposing-service-b2b.ts rather than re-arguing it.
 *
 * TODO (JAMES): no SaaS client is named anywhere on this page because none
 * has been confirmed for public use. The proof section leans on B2B strategy
 * shows instead, which is honest. If you land a SaaS logo you're allowed to
 * name, this is the page to put it on.
 */
export const podcastProductionForSaasCompanies: ServicePage = {
  slug: "podcast-production-for-saas-companies",
  primaryKeyword: "podcast production for SaaS companies",
  supportingKeywords: [
    "saas podcast production",
    "podcast production for software companies",
    "b2b saas podcast agency",
    "saas podcast production service",
  ],
  buyer:
    "Head of Demand Gen, Content Lead or VP Marketing at a B2B SaaS company. Owns a pipeline number. Already runs a content programme and is looking for a channel that compounds rather than another blog.",
  seo: {
    title: "Podcast Production for SaaS",
    metaDescription:
      "Podcast production for SaaS companies: a show that books your ICP for an hour, feeds product marketing, and gives demand gen something that compounds.",
  },
  h1: "Podcast production for SaaS companies",
  subheadline:
    "A podcast is the only content format where your ICP volunteers an hour of their time and thanks you for it. We produce the show so your team can spend that hour selling nothing.",
  sectionOrder: [
    "problem",
    "included",
    "how-it-works",
    "objections",
    "proof",
    "pricing",
    "faq",
  ],
  problem: {
    heading: "Why SaaS marketing teams end up here",
    body: [
      "You are almost certainly not short of content. You have a blog, a newsletter, a webinar programme and a LinkedIn cadence, and each one is getting incrementally harder to differentiate as every competitor in your category publishes the same posts about the same trends, increasingly with the same tools.",
      "The problem isn't volume. It's that none of it gets you into a room with the person you're trying to sell to. A whitepaper is something a prospect might download. An interview is ninety minutes where a VP at an account you care about talks openly about the problem your product solves, on the record, because being asked to share their expertise is flattering in a way a demo request is not.",
      "That is the actual asset. Not the download number — the relationship, the recorded expertise, and the fact that you now have a warm, non-commercial reason to be in that person's inbox. Most SaaS podcasts fail because they are treated as a brand-awareness play measured on listens, when the pipeline argument is far stronger and much easier to defend in a board deck.",
      "The second reason they fail is more mundane. Someone in the team volunteers to edit the first few episodes around their actual job, the schedule slips, three months of silence appear in the feed, and the show quietly dies without anyone deciding to kill it. Podcasting is a publishing commitment, and publishing commitments break on the operational side long before they break on the creative one.",
    ],
  },
  included: {
    heading: "What SaaS podcast production covers",
    intro:
      "Podcast production for SaaS companies has to serve more than the feed, so the scope covers everything between the recording and the published episode — plus the assets your demand gen and product marketing teams actually need from it.",
    items: [
      {
        title: "Full episode edit, audio and video",
        detail:
          "Content edit, sound cleanup, levelling between a host on good kit and a guest on laptop speakers, and mastering to platform loudness. Video edited to match wherever you publish it.",
      },
      {
        title: "Show notes written for search, not for us",
        detail:
          "Episode descriptions built around the terms your buyers actually search, with the specific concepts named rather than teased. These are the only part of an episode a search engine can read.",
      },
      {
        title: "Chapters and timestamps",
        detail:
          "Formatted correctly for Apple, Spotify and YouTube, which each want them differently. Chapter titles written as descriptive phrases so a single chapter can surface for a specific query.",
      },
      {
        title: "Short-form clips for LinkedIn and paid",
        detail:
          "Vertical clips with burned-in captions, cut to moments that stand alone. LinkedIn is where your ICP is, and a clip of a respected practitioner making a sharp point is a genuinely different asset to a product ad.",
      },
      {
        title: "Full transcripts",
        detail:
          "Published as real text, which adds several thousand indexable words per episode and lets the page answer long-tail questions your blog never targeted.",
      },
      {
        title: "A quote and insight pull for each episode",
        detail:
          "The three or four moments worth reusing, flagged with timestamps, so your content and product marketing teams can lift them into newsletters, decks and enablement without re-listening to the episode.",
      },
      {
        title: "Guest-ready assets",
        detail:
          "A clip and a graphic your guest can post themselves. A guest who shares the episode puts your brand in front of their network, which is the cheapest distribution in the programme.",
      },
    ],
    footnote:
      "We do not run your ad buy, write your nurture sequences or manage your CRM. We produce the show and hand you assets your existing team can deploy.",
  },
  howItWorks: {
    heading: "How we run a SaaS podcast",
    intro:
      "The goal is that recording day is the only day your team has to think about the podcast.",
    steps: [
      {
        title: "1. Format and ICP session",
        body: "One call to agree who the show is for, what a good guest looks like, and the format. For most SaaS shows the answer is an interview with a practitioner in the ICP rather than a customer testimonial — the first gets you a yes, the second gets you a polite no.",
      },
      {
        title: "2. Show spec, written down once",
        body: "Intro and outro, music, episode length, how tightly to cut, ad or CTA slots, naming conventions. Agreed once so the show sounds identical at episode fifty, and so nothing needs re-deciding every week.",
      },
      {
        title: "3. You record",
        body: "You and your guest talk. We give you a recording setup that captures separate tracks per speaker, which is the difference between a fixable episode and a compromised one. Nobody on your team needs to touch an editor.",
      },
      {
        title: "4. We produce",
        body: "Files land with us, and come back edited, mastered, with show notes, chapters, transcript, clips and the insight pull. Turnaround is agreed up front against your publishing schedule rather than quoted vaguely.",
      },
      {
        title: "5. Review and publish",
        body: "You get one round of changes on each episode as standard. We can publish straight to your host and YouTube, or hand you the files if your team prefers to keep the publish button.",
      },
      {
        title: "6. Repeat, without the drag",
        body: "The whole point is that episode twenty takes your team exactly as long as episode two. The operational load is the thing that kills company podcasts, and it is the thing we remove.",
      },
    ],
  },
  objections: {
    heading: "The things SaaS marketers actually ask",
    items: [
      {
        question: "How do we attribute this? Our CFO will ask.",
        answer:
          "Honestly: podcast attribution is imperfect and anyone who tells you otherwise is selling something. What works is tracking the things that are attributable — guest-to-opportunity conversion, named accounts that appear in your pipeline after appearing on the show, clip performance on LinkedIn, and traffic to episode pages from search. The strongest case most SaaS teams make internally is the guest relationship, because that one you can point at in the CRM.",
      },
      {
        question: "Should we interview customers or industry people?",
        answer:
          "Mostly industry people, with customers used sparingly. A show that is visibly a customer-testimonial funnel is hard to get good guests for and harder to get anyone outside your existing base to listen to. A show that books respected practitioners in your category gets you the relationship, the credibility and the audience — and your customers are far more willing to appear on a show that is already good.",
      },
      {
        question: "We tried a podcast before and it died. Why is this different?",
        answer:
          "It died because someone's actual job got in the way, which is the normal failure mode. The specific fix is removing every recurring task except recording. If the only thing standing between you and publishing is a calendar invite, the show survives a busy quarter. If it also requires someone to find four hours to edit, it doesn't.",
      },
      {
        question: "Can we tie episodes to product launches and campaigns?",
        answer:
          "Yes, and it works better than most teams expect. Booking guests around a theme you're already building a campaign on gives product marketing third-party voices talking about the problem space, which is far more usable in enablement and on landing pages than internally-written copy. It needs a booking runway of about six to eight weeks, so it has to be planned alongside the campaign rather than after it.",
      },
      {
        question: "Do we need video?",
        answer:
          "For a SaaS show aimed at LinkedIn, yes. The clips are where most of the reach comes from, and clips without video underperform badly on every platform that matters to B2B. You do not need a studio — a decent webcam setup recorded properly is enough, and we handle the rest.",
      },
      {
        question: "How is this different from a general podcast agency?",
        answer:
          "Mostly in what gets produced alongside the episode. Podcast production for SaaS companies has to feed a machine that already exists — a content calendar, a campaign schedule, an enablement library — so the deliverables are built for that rather than for a listener chart. The timestamped insight pull and the guest-ready assets exist because product marketing and your AEs use them; a consumer show wouldn't need either.",
      },
    ],
  },
  proof: {
    heading: "B2B shows we produce",
    caseStudySlugs: ["strategy-at-scale", "outthinkers"],
    intro:
      "Strategy and executive-audience shows where the listener is a senior operator, the guests are practitioners, and the show has to sound credible to a sceptical professional audience.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What it costs",
    body: "Podcast production for SaaS companies is priced on episode length, whether you need video, how many clips you want per episode, and your publishing cadence. Tell us the shape of the show and we will send a per-episode figure and a monthly figure so you can put a real number in a budget rather than a range.",
    caveat:
      "Most SaaS shows land on a monthly retainer covering a fixed number of episodes. If that is the shape you want, the retainer page covers how it works.",
  },
  faqs: [
    {
      question: "Why should a SaaS company start a podcast?",
      answer:
        "Because it is the only content format where your ideal customer volunteers an hour of their time. Interviewing practitioners in your category gets you the relationship, recorded expertise you can reuse across product marketing, and a non-commercial reason to be in a target account's inbox — none of which a blog post produces.",
    },
    {
      question: "How much time does a SaaS podcast take from our team?",
      answer:
        "With production outsourced, roughly the recording hour plus guest booking. Everything after the recording — editing, show notes, chapters, transcripts, clips — sits with us. The internal load that kills most company podcasts is post-production, and removing it is what keeps the show publishing through a busy quarter.",
    },
    {
      question: "Can a podcast generate pipeline for a B2B software company?",
      answer:
        "The most defensible mechanism is guest-led: you record with senior people at accounts you want, and that relationship is trackable in your CRM. Listener-driven pipeline exists but takes longer and attributes poorly. Teams that treat the show as an ABM and relationship channel see returns much faster than those measuring downloads.",
    },
    {
      question: "How often should a SaaS podcast publish?",
      answer:
        "Fortnightly suits most B2B software teams. Weekly is achievable with production outsourced but needs a guest pipeline roughly eight weeks deep, which is the part that usually breaks. Consistency matters far more than frequency — a reliable fortnightly show outperforms a weekly one with gaps in it.",
    },
    {
      question: "Do you help with guest booking and outreach?",
      answer:
        "We advise on who to target and what a good guest looks like for your ICP, and we produce the assets that make guests say yes and share afterwards. The outreach itself stays with your team, because it converts far better coming from someone at your company than from a production partner.",
    },
    {
      question: "What do we get from each episode besides the audio?",
      answer:
        "Show notes written for search, chapters formatted per platform, a full transcript, short-form vertical clips with captions, a timestamped pull of the three or four most reusable moments, and guest-ready assets. The transcript and clips are usually where the marketing team gets the most reuse.",
    },
    {
      question: "Can you take over a SaaS podcast that has stalled?",
      answer:
        "Yes, and it is a common starting point. We listen to the back catalogue, write a show spec that keeps whatever was working, and restart on a schedule your team can hold. Restarting a stalled show is usually easier than launching one, because the feed, the artwork and some of the audience already exist.",
    },
  ],
  cta: {
    heading: "Tell us about the show you want to run",
    body: "Send us your ICP, your cadence and whether you need video, and we will come back with a production quote and a realistic view of what the first quarter looks like.",
    buttonLabel: "Get a SaaS podcast quote",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "strategy-at-scale",
    blogSlug: "repurpose-podcast-content",
    relatedServiceSlug: "podcast-repurposing-service-b2b",
  },
  formTag: "saas-podcast-production",
  schemaServiceName: "Podcast production for SaaS companies",
};
