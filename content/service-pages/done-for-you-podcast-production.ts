import type { ServicePage } from "@/types/service-page";

/**
 * The full-scope page. Structurally about THE DIVISION OF LABOUR.
 *
 * The organising device is a two-column argument: what the client does (turn
 * up, talk, approve) versus what we do (everything else). That contrast is
 * the whole page and it should stay the spine of it.
 *
 * Split enforced against monthly-podcast-editing-retainer.ts:
 *   - THIS page argues SCOPE. Pricing mechanics — tiers, SLAs, rollover —
 *     are named once and linked away, never re-argued.
 *   - THAT page argues the MODEL and links here for scope.
 *
 * Split enforced against outsourced-podcast-production.ts (existing):
 *   - That page sells to a B2B COMPANY and argues the business case for a
 *     company podcast at all.
 *   - This page assumes the decision is made and argues about handover and
 *     how little the client has to do. Different question, same category.
 */
export const doneForYouPodcastProduction: ServicePage = {
  slug: "done-for-you-podcast-production",
  primaryKeyword: "done for you podcast production",
  supportingKeywords: [
    "full service podcast production",
    "end to end podcast production",
    "turnkey podcast production",
    "hands off podcast production",
  ],
  buyer:
    "Busy host or founder who has decided to run a show and wants to do exactly one thing: record it. Values handing over the whole operation more than controlling any individual part of it.",
  seo: {
    title: "Done For You Podcast Production",
    metaDescription:
      "Done for you podcast production: you record, we handle editing, show notes, artwork, clips and publishing. Everything between the mic and the feed.",
  },
  h1: "Done for you podcast production",
  subheadline:
    "You turn up and talk. We take the raw files and put a finished, published episode in the feed — and you don't hear about any of the steps in between.",
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
    heading: "The part nobody warns you about",
    body: [
      "Recording a podcast is the enjoyable bit, and it is maybe fifteen per cent of the work. The rest is a long tail of small, unglamorous, non-delegatable-feeling tasks that arrive every single week whether you have time for them or not.",
      "Editing the conversation. Levelling two people recorded on completely different equipment. Writing an episode description. Marking chapter timestamps. Making artwork for the episode. Cutting clips. Uploading to the host, filling in the metadata, scheduling it, checking it actually appeared on Apple and Spotify, then posting about it. None of these is hard. Together they are an afternoon, every week, forever.",
      "What makes it worse is that the tasks are sequential and each one blocks the next, so a busy week doesn't delay the podcast by a busy week — it delays it until the next clear afternoon, which might be a fortnight away. That is how shows develop gaps, and gaps are what audiences leave through.",
      "The version of this that actually works for a busy person is not better time management. It is removing every step except the one only you can do, which is the talking.",
    ],
  },
  included: {
    heading: "What you do, and what we do",
    intro:
      "Your side of this is deliberately short. Everything below the first three lines is ours.",
    items: [
      {
        title: "You: show up and record",
        detail:
          "We give you a recording setup that captures clean, separate tracks per speaker. You press record and have the conversation. That's the whole technical ask.",
      },
      {
        title: "You: approve, if you want to",
        detail:
          "One round of changes is included on every episode. Plenty of clients stop reviewing after the first month and let episodes publish straight through; the option stays open either way.",
      },
      {
        title: "You: book the guests",
        detail:
          "Outreach converts far better from you than from a production company, so this stays with you. We supply the assets that make guests say yes and share afterwards.",
      },
      {
        title: "We: the full edit, audio and video",
        detail:
          "Content edit, sound cleanup, levelling, mastering to platform loudness, and multi-camera switching where the show is filmed.",
      },
      {
        title: "We: show notes, chapters, transcript",
        detail:
          "Episode descriptions written for search, chapters formatted correctly for Apple, Spotify and YouTube, and a full transcript published as real text.",
      },
      {
        title: "We: episode artwork and thumbnails",
        detail:
          "Per-episode artwork and YouTube thumbnails built from your existing brand, consistent across the catalogue.",
      },
      {
        title: "We: short-form clips",
        detail:
          "Vertical clips with burned-in captions, cut to moments that stand alone rather than arbitrary slices of the episode.",
      },
      {
        title: "We: publishing and distribution",
        detail:
          "Uploading to your host, filling in metadata, scheduling, and checking the episode actually landed on the platforms — the step most often skipped and most visibly wrong when it fails.",
      },
    ],
    footnote:
      "We do not book your guests, write your opinions or run your ad sales. Everything else between the recording and the published episode is ours.",
  },
  howItWorks: {
    heading: "The handover, and what happens after it",
    intro:
      "The onboarding is front-loaded on purpose: a fortnight of decisions once, so nothing needs deciding weekly afterwards.",
    steps: [
      {
        title: "1. Handover session",
        body: "One call covering the show, the audience, how you want it to sound, your brand assets, and access to your podcast host. This is the longest conversation we will have, and it happens once.",
      },
      {
        title: "2. We write the show spec",
        body: "Everything the show needs, written down: intro and outro, music, episode length, how tightly to cut, artwork templates, naming conventions, publishing schedule. This document is what makes the service hands-off — it means we don't have to ask you anything again.",
      },
      {
        title: "3. Recording setup",
        body: "We get your capture right before the first episode rather than fixing it in the edit forever. Separate tracks per speaker, sensible levels, and a setup you can repeat without thinking about it.",
      },
      {
        title: "4. First episode, closely reviewed",
        body: "The first one gets more scrutiny from both sides. You tell us what to change, we update the spec, and the corrections are then applied automatically to everything that follows rather than re-requested each week.",
      },
      {
        title: "5. Steady state",
        body: "You record and send files. Finished episodes appear in the feed on schedule. You get a note when each one is live, and nothing else unless something needs a decision.",
      },
      {
        title: "6. Quarterly check-in",
        body: "A short review of what is working, whether the format should change, and whether the volume is still right. Deliberately quarterly rather than weekly — a hands-off service that generates a weekly meeting is not hands-off.",
      },
    ],
  },
  objections: {
    heading: "What people want to know before handing it all over",
    items: [
      {
        question: "How much control do I actually give up?",
        answer:
          "As much or as little as you want. Every episode includes a review round, and you can keep the publish button on your side indefinitely if you'd rather. What you're handing over is the execution, not the editorial — the show spec is written from your preferences and you can change it whenever you like.",
      },
      {
        question: "Do you need access to my podcast host and accounts?",
        answer:
          "Only if you want us to publish. Most clients add us as a user on their hosting platform, which means access can be revoked in one click and nothing is held in an account you don't own. If you'd rather keep publishing internal, we deliver finished files and metadata instead.",
      },
      {
        question: "What if I don't like how an episode turned out?",
        answer:
          "Tell us and we change it — one round is included on every episode as standard. In practice this happens most in the first month while the spec is settling, then drops off sharply, because corrections get written into the spec rather than re-requested each week.",
      },
      {
        question: "Is this overkill if I only publish twice a month?",
        answer:
          "Not necessarily, but it is worth being honest about. If you enjoy editing and have the time, keeping some of it is a reasonable choice and we'd rather say that than sell you the full package. Where full production earns its cost at low volume is when the show is important to your business and the risk is it quietly stops.",
      },
      {
        question: "Can I keep doing part of it myself?",
        answer:
          "Yes, and many clients do — keeping the show notes because they know the subject, or the publishing because they like the control. The scope is modular. If what you actually want is only the finishing work rather than the whole operation, the post production page describes that narrower service.",
      },
      {
        question: "How do you keep the show sounding like us and not like an agency?",
        answer:
          "The show spec is the mechanism. It records your decisions rather than our defaults — how tightly to cut, whether filler goes, whether you want a cold open, how formal the episode descriptions read — and it gets updated whenever you correct something. Done for you podcast production goes wrong when a producer applies a house style to every client; the spec exists specifically to stop that happening.",
      },
      {
        question: "What happens if I go quiet for a month?",
        answer:
          "Nothing breaks, but be honest with us about it rather than letting the slot sit empty. Recording several episodes in one sitting before a busy period is the usual fix and works well — it gives the feed a buffer to publish from while you're unavailable. A show with a gap in it loses listeners; a show that batched ahead never shows the gap at all.",
      },
    ],
  },
  proof: {
    heading: "Shows we run end to end",
    // NB: the file is content/case-studies/the-assembly.ts but the SLUG is
    // "assemble-you". Using the filename here silently renders no link.
    caseStudySlugs: ["assemble-you", "career-change-coach"],
    intro:
      "Shows where the host records and does very little else, and the episode appears on schedule without them managing the process.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What full production costs",
    body: "Priced on episode length, whether the show is filmed, how many clips you want, and whether we publish for you. Tell us what your show looks like and we will send a per-episode figure and a monthly figure covering the full scope above.",
    caveat:
      "Most full-production clients settle onto a monthly arrangement. The retainer page covers how tiers, turnaround and rollover work.",
  },
  faqs: [
    {
      question: "What does done for you podcast production actually include?",
      answer:
        "Everything between your raw recording and the published episode: full audio and video edit, mastering, show notes, chapters, transcript, episode artwork, YouTube thumbnails, short-form clips, and uploading and scheduling to your host. Your side is recording the conversation and booking guests.",
    },
    {
      question: "How much work is left for me with full service production?",
      answer:
        "Recording, guest booking, and an optional review round per episode. That is the complete list. Most clients spend an hour or two a week on the show in total, nearly all of it in the recording itself, and stop reviewing episodes once the first month has settled the show spec.",
    },
    {
      question: "Do you publish the episodes for me or just send the files?",
      answer:
        "Either. We can upload to your host, complete the metadata, schedule the release and confirm it appeared correctly on Apple and Spotify — or deliver finished files and let your team publish. Publishing is the step most often rushed, and it's where visible mistakes tend to show up.",
    },
    {
      question: "Who owns the podcast if you produce all of it?",
      answer:
        "You do — the feed, the recordings, the artwork, the finished episodes and the show spec. We work inside your accounts rather than our own, so there's nothing to reclaim if you leave and no account you'd need us to release.",
    },
    {
      question: "How long does onboarding take before the first episode?",
      answer:
        "Usually about two weeks: a handover session, a written show spec, and getting your recording setup right before you record rather than compensating for it afterwards. The onboarding is deliberately front-loaded so that no decisions are needed week to week once the show is running.",
    },
    {
      question: "Can you take over an existing show mid-run?",
      answer:
        "Yes, and it's straightforward. We listen through recent episodes, write a spec that preserves whatever is already working, and pick up from the next recording. Listeners shouldn't notice a handover — if the show suddenly sounds different, something has gone wrong.",
    },
    {
      question: "What if I only want part of this handled?",
      answer:
        "The scope is modular, so keeping the parts you enjoy is fine. If you want only the technical finishing — edit, mix, master, deliverables — that's the post production service rather than full production, and it's priced differently because the scope is narrower.",
    },
  ],
  cta: {
    heading: "Hand over the whole thing",
    body: "Tell us about your show, how often you publish and whether it's filmed. We will come back with a scope and a monthly figure covering everything from raw files to published episode.",
    buttonLabel: "Get a full production quote",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "assemble-you",
    blogSlug: "founder-podcast-time-per-week",
    relatedServiceSlug: "monthly-podcast-editing-retainer",
  },
  formTag: "done-for-you-production",
  schemaServiceName: "Done for you podcast production",
};
