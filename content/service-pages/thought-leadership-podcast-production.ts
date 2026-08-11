import type { ServicePage } from "@/types/service-page";

/**
 * The thought-leadership page. Structurally about CRAFT AND REPUTATION.
 *
 * The argument runs: your name is on this, the guests are people you want
 * relationships with, and a careless edit costs you more than a rough one —
 * because the failure mode isn't bad audio, it's sounding like someone you
 * aren't. Nothing here is about internal cost or capacity; those belong to
 * the other two pages.
 *
 * This page is the closest of the three to the blog's founder-time post, so
 * it must stay commercial: the blog answers "how long does this take", this
 * page answers "who should do it for me".
 */
export const thoughtLeadershipPodcastProduction: ServicePage = {
  slug: "thought-leadership-podcast-production",
  primaryKeyword: "podcast editing service for thought leadership podcasts",
  supportingKeywords: [
    "thought leadership podcast production",
    "podcast editing for founders",
    // "executive podcast production" deliberately removed: that space is now
    // owned by executive-podcast-production-service.ts, which serves a
    // different buyer (a CMO or comms lead producing FOR an exec, rather than
    // the founder buying for their own show). Leaving it here would have the
    // two pages competing for the same query.
    "personal brand podcast production",
    "podcast producer for founders",
    "interview podcast editing service",
  ],
  buyer:
    "Founder, author, consultant or exec with an interview-format personal-brand show. Their name is on it. Cares how they sound and how guests are treated.",
  seo: {
    title: "Thought Leadership Podcast Editing",
    metaDescription:
      "A podcast editing service for thought leadership podcasts. Edited for credibility and pacing, so you sound like yourself and guests are treated properly.",
  },
  h1: "A podcast editing service for thought leadership podcasts",
  subheadline:
    "Your name is on this show and your guests are people you want to keep. Both deserve an edit made by someone paying attention.",
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
    heading: "What's actually at stake on a show with your name on it",
    body: [
      "A personal-brand show is a different object from a company podcast, and it fails differently. A company show that sounds slightly flat is a marketing asset underperforming. A show with your name on it that sounds slightly flat is you, underperforming, in public, permanently.",
      "The common failure isn't bad audio. It's an edit that doesn't understand what was said. Cheap editing tightens everything uniformly — cut the pauses, strip the filler, close every gap — and the result is technically clean and subtly wrong. You come across as clipped and impatient, hedges you placed deliberately have been removed so you're claiming more than you meant to, and the thinking has been edited out in favour of pace.",
      "Then there's the guest problem, which is the part most producers never think about. The people on your show are usually people you want a relationship with afterwards: a prospective client, someone you'd like to work with, someone whose introduction you want. They gave you an hour. If the episode makes them sound less articulate than they were, if their best point got cut for time, or if the audio makes them sound like they phoned in from a car park, that reflects on you — and it's a quiet, unrecoverable cost, because nobody tells you. They just don't share it, and they don't recommend you to the next person.",
      "The last one is subtler. Most of these shows are made by someone whose actual job is running a company, which means the edit gets done at eleven at night or not at all, and the show becomes something you feel behind on rather than something you're proud of.",
    ],
  },
  included: {
    heading: "What the edit involves",
    intro:
      "Editorial work, not just cleanup. The technical side is the floor rather than the offer.",
    items: [
      {
        title: "A structural edit, not just a tidy-up",
        detail:
          "Reordering where a conversation found its point twenty minutes in, cutting the run-up so the episode starts where it gets interesting, and removing the section where a promising question went nowhere.",
      },
      {
        title: "Pacing that leaves the thinking in",
        detail:
          "Pauses before a considered answer stay. Pauses where somebody lost their thread go. Hedges and qualifications stay, because removing one turns a careful position into a firmer claim than you made.",
      },
      {
        title: "Guest audio brought up to yours",
        detail:
          "Levelling and tonal matching so a guest recording on a laptop in a hotel room sits alongside you without the listener reaching for the volume. The most common reason an interview episode sounds amateur.",
      },
      {
        title: "Show notes written from the actual episode",
        detail:
          "Written from what was said rather than from the recording brief, with the arguments summarised properly. The kind a guest is willing to share, which is the practical test.",
      },
      {
        title: "Chapters that make the episode quotable",
        detail:
          "Formatted for Apple, Spotify and YouTube, and named after what's actually discussed so somebody can find the eight minutes they were told about.",
      },
      {
        title: "Clips pulled from the genuinely quotable moments",
        detail:
          "Chosen by someone who listened to the whole conversation and knows where it landed, rather than sliced at arbitrary intervals. Usually four to eight per episode, with captions.",
      },
    ],
    footnote:
      "A short guest-facing note goes out with each episode where you want one — the link, the clips, and the timestamps of their best moments, ready to post. It costs almost nothing and it is the single most reliable way to get a guest to actually share.",
  },
  howItWorks: {
    heading: "How we'd work together",
    steps: [
      {
        title: "A conversation about how you want to sound",
        body:
          "Not a technical briefing. What you like and dislike in shows you admire, whether you want the conversational texture kept or a tighter documentary feel, how much of your own throat-clearing you want left in. Most people have strong instincts here and have never been asked.",
      },
      {
        title: "The first episode gets a proper review",
        body:
          "You get the first edit with notes on what was cut and why, so you can push back before it becomes the standing pattern. Expect to change things at this stage; that's what it's for.",
      },
      {
        title: "The spec settles, and reviewing gets shorter",
        body:
          "After two or three episodes the rules are established and most people move to approving rather than reviewing. That's the intended end state — you should be spending your time on the conversations, not on the edit.",
      },
      {
        title: "Sensitive material is flagged, never guessed at",
        body:
          "Anything that sounds off the record, legally awkward, or like something a guest would want back gets flagged to you with a timestamp before the episode goes anywhere. It never gets quietly cut and it never gets quietly left in.",
      },
    ],
  },
  objections: {
    heading: "The questions worth asking any producer",
    items: [
      {
        question: "Will it still sound like me, and like a real conversation?",
        answer:
          "That's the whole job, and it's the thing most cheap editing gets wrong. Over-editing is far more common than under-editing: strip every pause and filler word and you end up sounding like a press release being read aloud. The rule here is that anything ambiguous stays in, and anything cut has to leave the meaning exactly where it was. If the edit changes what you appear to have claimed, it's a bad edit regardless of how clean it sounds.",
      },
      {
        question: "How much editorial control do I keep?",
        answer:
          "All of it. You approve every episode before it publishes, and for the first few you get notes explaining what came out and why, so you can disagree while it still matters. Over time most people stop wanting that level of detail — but it's your show and it stays your call, not something you delegate and hope about.",
      },
      {
        question: "How do you handle sensitive or off-record moments?",
        answer:
          "They come to you with a timestamp and a recommendation, and nothing gets decided without you. Guests say things they later think better of, particularly when the conversation is going well — an aside about a former employer, a number they probably shouldn't have quoted. Cutting it silently is presumptuous and leaving it in is worse. If you'd rather a guest is asked directly, that's usually the right instinct and it protects the relationship.",
      },
      {
        question: "I record Thursday and want it live Monday. Is that realistic?",
        answer:
          "Yes. Standard turnaround is three working days from receiving usable files, and forty-eight hours where a show needs it, so a Thursday recording for a Monday release is a normal week rather than a rush job. Tell me the release day and the schedule is built backwards from it.",
      },
      {
        question: "What if I'm not happy with an edit?",
        answer:
          "Send timestamps and it gets fixed, with one round included on every episode as standard. In practice the disagreements almost all happen in the first two episodes, which is exactly why the first one comes with notes on the reasoning rather than just a finished file.",
      },
    ],
  },
  proof: {
    heading: "Founder and expert-led shows",
    intro:
      "Interview shows where the host's name and reputation are the reason the show exists.",
    caseStudySlugs: ["outthinkers", "career-change-coach", "bitcoin-and-the-long-game"],
  },
  pricing: {
    mode: "enquiry",
    heading: "What it costs",
    body:
      "Quoted per episode once the format is clear, since a forty-minute audio interview and a filmed ninety-minute conversation with a full clip package are different amounts of work. The published per-episode rates for standard editing and full production are on the [services page](/services), and a personal-brand show is usually one of those with the editorial attention weighted differently.",
    caveat:
      "[PLACEHOLDER — decide whether this page should show a starting-from figure. Worth noting that founders and consultants tend to be less price-sensitive and more sensitive to whether you understand the show, so leading with a number here may work against you.]",
  },
  faqs: [
    {
      question: "What is a thought leadership podcast?",
      answer:
        "An interview or discussion show built around one person's expertise and reputation, usually a founder, author, consultant or executive. The commercial purpose is credibility and relationships rather than reach — the guests are frequently people the host wants to know, and the audience is a specific professional group rather than a general one.",
    },
    {
      question: "How is editing a founder's podcast different from any other editing?",
      answer:
        "The editorial judgement matters more than the technical work. A founder's show is judged on whether the host sounds thoughtful, so the risk is over-editing rather than under-editing: cutting the qualifications and pauses that make a considered answer sound considered. The other difference is guest handling, since the people on the show are usually relationships rather than bookings.",
    },
    {
      question: "Do you write show notes and pull clips as well as editing?",
      answer:
        "Yes, and on this kind of show they're worth more than usual. Show notes a guest is willing to share, chapters named after what's actually discussed, and clips chosen from the genuinely quotable moments by someone who heard the whole conversation. Arbitrary sixty-second slices are the standard alternative and they rarely land.",
    },
    {
      question: "Can you make my guests sound better?",
      answer:
        "Within limits, and it's usually the most valuable technical work on an interview show. Levelling and tonal matching brings a guest recording on a laptop up to sit alongside your audio, so the listener stops adjusting the volume. What can't be fixed is a room with heavy echo or a badly clipped recording — which is why a short setup note to guests before recording is part of this.",
    },
    {
      question: "Will you make me sound smarter than I am?",
      answer:
        "No, and you shouldn't want that. An edit that removes every stumble and pause produces someone who sounds like they're reading, which is less persuasive rather than more — listeners hear polish as distance. The goal is that you sound like yourself on a good day, having had time to think.",
    },
    {
      question: "I already have a producer. Is it worth switching?",
      answer:
        "Only if something specific is wrong. If episodes go out on time and you're happy with how you sound, changing supplier is disruption without a benefit. The reasons that do justify it are consistent lateness, a sound that drifts between episodes, or an edit that keeps changing your meaning. If it's the last one, that's worth acting on quickly.",
    },
    {
      question: "How involved do I need to be?",
      answer:
        "An onboarding conversation, then the recordings themselves, then approving each episode. The first two or three take more attention because that's when the editorial rules are being set; after that most hosts move to approving rather than reviewing.",
    },
  ],
  cta: {
    heading: "Send an episode you're not happy with",
    body:
      "The most useful first step is usually an existing episode you felt was almost right, and a note on what bothered you about it. You'll get a straight answer on whether that's fixable in the edit or something to change in the recording — which is worth knowing either way.",
    buttonLabel: "Talk about your show",
    note: "If you haven't recorded anything yet, that's a different and shorter conversation.",
  },
  internalLinks: {
    caseStudySlug: "outthinkers",
    blogSlug: "podcast-audio-quality-guide",
    relatedServiceSlug: "outsourced-podcast-production",
  },
  formTag: "thought-leadership",
  schemaServiceName: "Podcast editing for thought leadership podcasts",
};
