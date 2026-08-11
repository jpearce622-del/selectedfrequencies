import type { ServicePage } from "@/types/service-page";

/**
 * The B2B page. Structurally about CONSISTENCY AND INTERNAL COST.
 *
 * The argument runs: the show isn't failing because it's bad, it's failing
 * because it's nobody's actual job, and the honest cost comparison is your
 * fee against a marketer's hourly rate spent on editing rather than against
 * zero. Confidentiality and margin belong to the agency page; craft and the
 * host's reputation belong to the thought-leadership page. This page owns
 * the operational argument and should never wander into either.
 */
export const outsourcedPodcastProduction: ServicePage = {
  slug: "outsourced-podcast-production",
  primaryKeyword: "outsourced podcast production for B2B companies",
  supportingKeywords: [
    "outsourced podcast production",
    "b2b podcast production company",
    "corporate podcast production service",
    "managed podcast production",
    "podcast production for companies",
  ],
  buyer:
    "Marketing lead, content manager or founder at a B2B company. Usually has a struggling show or has been told to launch one. Thinks in internal cost, consistency, and justifying the channel to leadership.",
  seo: {
    title: "Outsourced Podcast Production",
    metaDescription:
      "Outsourced podcast production for B2B companies. Everything after recording handled: editing, show notes, clips and publishing, on a schedule that holds.",
  },
  h1: "Outsourced podcast production for B2B companies",
  subheadline:
    "You record the conversation. Everything after that is handled, on the same day every week, whether or not your marketing team had a good month.",
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
    heading: "Why company podcasts stall",
    body: [
      "Almost none of them fail because the episodes were bad. They fail because publishing stopped, and publishing stopped because the show was never anybody's actual job.",
      "The pattern is consistent enough to predict. Someone in marketing takes it on alongside their real workload, because it's interesting and because the alternative is not doing it. It works for a while. Then a launch lands, or a quarter goes badly, or that person leaves — and the show is the only thing on their list with no external deadline attached. Nobody chases a missed episode the way they chase a missed campaign. Two weeks becomes six, and a show that publishes sporadically has effectively stopped, because nothing is compounding.",
      "The cost is usually miscounted too. The comparison people make is an outside producer's fee against zero, since editing internally feels free. It isn't. A marketer earning a salary spending five to eight hours a week editing audio is spending it at their hourly rate, on a task nobody hired them for, instead of on the work only they can do. That is the real number, and it is almost always larger than the invoice it's being compared against.",
      "Then there's the part that doesn't show up on any spreadsheet: what a stalled show does to the next one. A public, dated archive that stops at episode nine tells every guest you approached, and every prospect who finds it, that your company starts things it doesn't finish.",
    ],
  },
  included: {
    heading: "What's handled",
    intro:
      "Everything downstream of the recording. You keep the conversations and the guest relationships; the production pipeline stops being your problem.",
    items: [
      {
        title: "Full episode edit",
        detail:
          "Content edit, sound cleanup, levelling between speakers, and mastering to platform loudness so your episodes sit correctly against everything else in a listener's feed.",
      },
      {
        title: "Show notes and episode descriptions",
        detail:
          "Written to your brand's tone, not a template. Structured so the first line works as the hook in a directory listing rather than opening with a job title.",
      },
      {
        title: "Chapters and timestamps",
        detail:
          "Formatted for Apple, Spotify and YouTube, which each expect them in a different form.",
      },
      {
        title: "Short-form clips",
        detail:
          "Vertical clips with burned-in captions for LinkedIn, YouTube Shorts and wherever else your audience is, cut to moments that stand on their own.",
      },
      {
        title: "YouTube assets",
        detail:
          "Video edit where you film, plus thumbnails and titles. Video is where most B2B shows are actually found now, and it's the part most internally-run shows skip.",
      },
      {
        title: "Publishing and distribution",
        detail:
          "Episodes go live on your schedule, on your host, under your account. Including the unglamorous parts: feed hygiene, artwork specs, and making sure the episode actually appears where it should.",
      },
    ],
    footnote:
      "We plug into what you already run rather than replacing it. If your team lives in Notion, Asana or a shared Drive, the workflow runs there.",
  },
  howItWorks: {
    heading: "How it works",
    intro:
      "Built so the ongoing demand on your team is a recording and a short set of notes.",
    steps: [
      {
        title: "A working session on the show",
        body:
          "Ninety minutes on what the show is for, who it's aimed at, what a good episode sounds like, and how it should sound as a brand. If there's an existing show we start by listening to what's already published and what your team already dislikes about it.",
      },
      {
        title: "We write the show spec",
        body:
          "Tone, structure, intro and outro, how tightly to cut, description style, clip formats, publishing day. You approve it once, and from then on it's the reference — which is what stops the show drifting when someone new joins your team or ours.",
      },
      {
        title: "You record; we do the rest",
        body:
          "Raw files land in a shared folder. Finished episode, notes, chapters, clips and thumbnails come back on an agreed turnaround, ready for you to approve.",
      },
      {
        title: "It publishes on the same day, every time",
        body:
          "Whether or not your marketing team had a good month. That is the entire point of outsourcing this, and it's the thing internal ownership reliably cannot promise.",
      },
    ],
  },
  objections: {
    heading: "What marketing leads ask before signing anything",
    items: [
      {
        question: "We already have someone doing this internally.",
        answer:
          "Then the question isn't whether they can do it — it's what they'd otherwise be doing with those hours, and what happens the week they're busy. Editing an interview episode is realistically two to five hours, before show notes, clips and publishing. Price that at what you actually pay the person doing it and compare that to a fixed invoice. Where it usually lands is that outsourcing costs about the same and removes the single point of failure. If your internal person genuinely enjoys the craft and has the capacity, keep them on it — you don't need us, and I'd rather say so than sell around it.",
      },
      {
        question: "How much of our time does this actually take?",
        answer:
          "After onboarding, an hour or so per episode: the recording itself, plus a short set of notes if anything needs flagging. No editorial back-and-forth unless you want it. The onboarding session is the one real demand on your time and it happens once. There's a fuller breakdown of where the hours in a founder-led show actually go in our piece on [how much time a podcast really takes](/blog/founder-podcast-time-per-week).",
      },
      {
        question: "What about brand and tone consistency?",
        answer:
          "That's what the written spec exists for, and it's why we insist on producing it before the first episode rather than converging on your tone over six episodes. Descriptions and clips are written to your brand's voice, using your terminology and your positioning, not generic podcast copy. If you have a style guide, it becomes the spec.",
      },
      {
        question: "What happens if we need to pause or scale down?",
        answer:
          "Month to month, no minimum term. Pause for a quarter, drop from weekly to fortnightly, stop entirely — none of it requires a negotiation. Budgets move and campaigns get reprioritised; a contract that punishes you for that is a contract you'll resent.",
      },
      {
        question: "Do we own the files and the feed?",
        answer:
          "Yes, unambiguously and in writing. The hosting account, the RSS feed, the raw recordings, the finished masters, the artwork and the show notes are all yours, held in your accounts rather than ours. If you stop working with us you keep everything and nothing needs migrating. Any arrangement where a production company holds the feed is one where changing supplier means losing your subscribers, and you should refuse it from anybody.",
      },
      // TODO (JAMES): this answer is the natural home for a real client
      // outcome, and a concrete example of a show opening a commercial
      // conversation would be the strongest single sentence on this page.
      // Deliberately not written as a [PLACEHOLDER] in the copy: markers
      // belong in comments, because anything left in a rendered string
      // eventually ships to a buyer.
      {
        question: "How do we justify this to leadership?",
        answer:
          "Honestly, and with the right number. Reach is the wrong measure for most B2B shows — a few hundred of the right listeners routinely outperforms several thousand of the wrong ones. What tends to hold up in a board conversation is who is listening rather than how many, which conversations the show has opened, and which guests agreed to come on. Set that expectation before the first episode rather than three months in, because the wrong metric agreed early is very hard to walk back.",
      },
    ],
  },
  proof: {
    heading: "B2B shows we produce",
    intro:
      "Strategy and research shows aimed at senior professional audiences, produced end to end.",
    caseStudySlugs: ["outthinkers", "genetics-podcast", "strategy-at-scale"],
  },
  pricing: {
    mode: "enquiry",
    heading: "What it costs",
    body:
      "Priced per episode against the scope you actually need, because a weekly video show with clips and a monthly audio-only interview are different amounts of work and one number would misprice both. Published per-episode rates for the standard packages are on the [main services page](/services); company production is usually a scoped version of those rather than something separate.",
    caveat:
      "[PLACEHOLDER — decide whether to surface a starting-from figure here or keep it enquiry-only. The rate card on /services already publishes numbers, so an enquiry-only stance on this page is slightly inconsistent with the rest of the site.]",
  },
  faqs: [
    {
      question: "What does outsourced podcast production include?",
      answer:
        "Everything after the recording: the edit, show notes and descriptions, chapters and timestamps, short-form clips, YouTube assets where you film, and publishing to your host on your schedule. Your team records the conversation and approves the result; the pipeline in between is handled.",
    },
    {
      question: "Is outsourcing a company podcast cheaper than doing it in-house?",
      answer:
        "Usually comparable in pure cost and materially better in reliability. The comparison that matters is your fee against the hourly cost of the person currently spending five to eight hours a week on it, not against zero. Where outsourcing clearly wins is that it removes the single point of failure — a show that depends on one busy person stops when that person gets busy.",
    },
    {
      question: "Who owns the podcast feed and the recordings?",
      answer:
        "You do, entirely. The hosting account, RSS feed, raw recordings, finished masters, artwork and written assets all sit in your accounts and stay yours if the engagement ends. No migration, no handover negotiation.",
    },
    {
      question: "Can you take over a podcast that has already launched?",
      answer:
        "Yes, and it's a common starting point. We listen to what's published, work out what's inconsistent, and write a spec that either matches the existing sound or deliberately resets it — your call, once you've heard both options described. Existing episodes stay as they are unless you want a back-catalogue pass.",
    },
    {
      question: "How quickly can an episode go out after we record it?",
      answer:
        "Standard turnaround is three working days from receiving usable files, and forty-eight hours where a show needs it. If you record Thursdays and publish Mondays, that works without anything being rushed.",
    },
    {
      question: "Do you work with our existing marketing tools?",
      answer:
        "Yes. The workflow runs in whatever your team already uses — a shared Drive or Dropbox, with tracking in Notion, Asana or wherever your content calendar lives. Introducing a new tool for one workstream is a good way to make sure nobody uses it.",
    },
    {
      question: "What if nobody at our company has hosted a podcast before?",
      answer:
        "That's normal and it's mostly a coaching problem rather than a production one. Early episodes get more attention: guidance on structuring a conversation, what to do when an answer goes nowhere, and how to open an episode so people stay. Hosting improves quickly with feedback, which is one of the few genuine advantages of a regular publishing schedule.",
    },
  ],
  cta: {
    heading: "Get a scope and a number",
    body:
      "Tell us where the show is now — running and inconsistent, or not started — and what you'd want handled. You'll get a written scope and a per-episode price, and an honest answer if the sensible option is keeping it in-house.",
    buttonLabel: "Get a production quote",
    note: "No minimum term, and you keep the feed and the files.",
  },
  internalLinks: {
    caseStudySlug: "strategy-at-scale",
    blogSlug: "founder-podcast-time-per-week",
    // Genuinely relevant: a founder-led B2B show is often also a personal
    // brand show, so this reader may be on the wrong page.
    relatedServiceSlug: "thought-leadership-podcast-production",
  },
  formTag: "b2b-outsourced-production",
  schemaServiceName: "Outsourced podcast production for B2B companies",
};
