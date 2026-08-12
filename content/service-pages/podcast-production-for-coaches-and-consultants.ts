import type { ServicePage } from "@/types/service-page";

/**
 * Industry page 5. Structurally about THE SHOW AS A SALES ASSET.
 *
 * The buyer is a solo or boutique practice where the person hosting is also
 * the person delivering the work and the person selling it. So the argument
 * is economic: an episode is worth producing if it shortens or improves a
 * sales conversation, and worth dropping if it does not. This page is
 * allowed to talk about lead generation directly, which the enterprise pages
 * are not — different buyer, different vocabulary.
 *
 * Evidence discipline — read before editing:
 *   - Proof is Alice Stapleton (The Career Change Diaries — accredited career
 *     change coach) and FasCat Coaching (Boulder, Colorado — cycling coaching
 *     business). Both are real coaching BUSINESSES, which is the relevant
 *     thing: the show serves a practice that sells services.
 *   - HONEST CAVEAT, stated on the page: the roster is weighted towards
 *     health, fitness and life coaching. B2B management consulting is thinner
 *     — Outthinkers / Kaihan Krippendorff is the closest, and he is a strategy
 *     author and consultant. Do not imply a deep bench of management
 *     consultancy clients; say what is there.
 *   - No client has shared revenue, conversion or lead figures. There are no
 *     numbers on this page for that reason. [TK] below.
 *
 * Split enforced against monthly-podcast-editing-retainer.ts and
 * done-for-you-podcast-production.ts: those argue commercial model and scope
 * to anyone. This argues what the show is FOR to a specific buyer who is
 * spending their own money. Budget is discussed here as a constraint on the
 * business, not as a pricing mechanic.
 */
export const podcastProductionForCoachesAndConsultants: ServicePage = {
  slug: "podcast-production-for-coaches-and-consultants",
  group: "industry",
  primaryKeyword: "podcast production for coaches and consultants",
  supportingKeywords: [
    "podcast production for coaches",
    "consultant podcast production",
    "podcast editing for coaching businesses",
    "lead generation podcast production",
  ],
  buyer:
    "Solo or boutique coach or consultant. Hosts the show, delivers the work and sells it. Judges the podcast on whether it produces conversations, and has neither a marketing team nor spare hours.",
  seo: {
    title: "Podcast Production for Coaches",
    metaDescription:
      "Podcast production for coaches and consultants who win clients from a show. Built for a lean practice: time protected, episodes that start conversations.",
  },
  h1: "Podcast production for coaches and consultants",
  subheadline:
    "When you are the practitioner, the marketer and the salesperson, a podcast only earns its place if it produces conversations. We build the show around that test.",
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
    heading: "The maths of a podcast in a practice of one",
    body: [
      "For a coaching or consulting practice, a podcast competes against billable hours. That comparison is unavoidable and it is the correct one to make. An afternoon editing is an afternoon not delivering client work or not selling, and any honest account of whether the show is worth it has to start there.",
      "Which means the wrong measure gets used almost universally. Downloads are the number that is easy to see, and for a practice selling a high-value service to a small number of clients, downloads are close to meaningless. A show with three hundred listeners that produces two enquiries a month is working. A show with eight thousand listeners that produces none is an expensive hobby, and the download number will tell you the opposite.",
      "The mechanism that actually matters is specific, and it is not really about reach. Someone who has listened to you think through a problem for six hours across several episodes arrives at a first conversation having already decided you know what you are doing. The trust-building that normally takes two or three meetings has happened before you speak. That is the whole return, and it is why the format of the show matters more than its audience size.",
      "The third thing that kills these shows is more mundane. A practice of one has no cover. When a busy delivery month arrives, the podcast is the only thing on the list with no client waiting on it, so it slips — and a show with a two-month gap has to rebuild an audience it spent a year earning. Consistency is the whole game, and consistency is exactly what a one-person business cannot guarantee on its own.",
      "All of which is why podcast production for coaches and consultants is a different brief from producing a media show. A media show is trying to grow an audience. Yours is trying to make a smaller number of the right people confident enough to get in touch — and those two goals imply different formats, different episode lengths, and a completely different definition of a good month.",
    ],
  },
  included: {
    heading: "What podcast production for coaches and consultants covers",
    intro:
      "Scoped so your involvement is recording and nothing else, and priced with a practice's budget in mind rather than a marketing department's.",
    items: [
      {
        title: "Full episode edit",
        detail:
          "Content edit, cleanup, levelling and mastering. Edited so you sound like yourself — a coach who has been polished into a broadcaster loses exactly the quality that makes people want to work with them.",
      },
      {
        title: "Show notes written to be found",
        detail:
          "Episode descriptions written around the problem the episode solves, in the words a prospective client would actually use. This is where most coaching podcasts leave the majority of their value unclaimed.",
      },
      {
        title: "Chapters and timestamps",
        detail:
          "So a listener can find the ten minutes relevant to their situation — which is how a back catalogue keeps earning long after an episode was published.",
      },
      {
        title: "Short-form clips",
        detail:
          "Vertical clips with captions, cut to moments where you answer a question a prospect actually has. A clip answering a real question does more for a practice than a motivational one.",
      },
      {
        title: "Full transcript",
        detail:
          "Published as text so episodes are searchable and indexable. For a practice competing with much larger firms, search is often the only channel where you compete on equal terms.",
      },
      {
        title: "A reusable asset per episode",
        detail:
          "The episode's argument in written form, sized to send to a prospect who asked exactly that question. Coaches and consultants answer the same questions repeatedly; having the good answer already written is quietly the most useful output here.",
      },
      {
        title: "Publishing, or files if you prefer",
        detail:
          "We can upload, schedule and check the episode landed correctly, or hand you finished files. Publishing is the step most often rushed at the end of a busy week.",
      },
    ],
    footnote:
      "We do not do your marketing strategy, run your ads or manage your funnel. We produce the show and the assets it generates.",
  },
  howItWorks: {
    heading: "How it runs around a full client list",
    intro:
      "Built on the assumption that some months you will have no time at all.",
    steps: [
      {
        title: "1. Work out what the show is for",
        body: "Which service the show should be feeding, who you want listening, and what would count as it working. If the answer is downloads, we would push back — for a practice, the honest measures are enquiries, better-informed first conversations, and shorter sales cycles.",
      },
      {
        title: "2. Pick a format you can sustain",
        body: "Solo episodes, interviews, or answering client questions. Sustainability matters more than ambition: a format needing four hours of prep per episode will not survive a busy quarter, and the format that survives is the one that works.",
      },
      {
        title: "3. Get your recording setup right once",
        body: "A modest setup recorded properly beats expensive equipment used badly. We set it up once so you can record without thinking about it, which removes the friction that makes recording feel like a task.",
      },
      {
        title: "4. Batch record",
        body: "Several episodes in one sitting, which is the single most useful habit for a practice of one. One focused half-day produces a month or more of feed, and that buffer is what keeps the show publishing through a delivery-heavy month.",
      },
      {
        title: "5. Send and forget",
        body: "Files come to us and come back finished — edited, mastered, with notes, chapters, transcript and clips, ready to publish or already published. Your involvement ends when you stop recording.",
      },
      {
        title: "6. Review the format, not the downloads",
        body: "Periodically: which episodes are prospects mentioning, which questions keep coming up, which clips get replies. Those signals should shape the next batch. Download charts should not.",
      },
    ],
  },
  objections: {
    heading: "The honest questions about cost and return",
    items: [
      {
        question: "Can I justify this against billable hours?",
        answer:
          "Do the comparison directly rather than in the abstract. If producing episodes yourself costs four hours a month, price those hours at your rate and compare it with what production costs — for most established practices the outsourced version is cheaper in real terms before you count the fact that it also stops the show slipping. If your rate is low or you genuinely enjoy editing, keeping it is a reasonable decision and we would say so.",
      },
      {
        question: "My audience is small. Is a podcast still worth it?",
        answer:
          "Often yes, because the value is depth rather than reach. A few hundred listeners who are your exact buyer, several of whom have heard you think for hours, is a stronger position than a large general audience. The relevant question is not how many people listen — it is whether the people who listen are the people you want to work with.",
      },
      {
        question: "How do I know it's actually bringing clients in?",
        answer:
          "Ask on the first call how they found you and what they had already listened to — it is unglamorous and it is the only reliable signal available at this scale. Attribution tooling does not work well for a small practice, and anyone selling you podcast attribution at this level is selling you something that does not exist yet.",
      },
      {
        question: "What if I go quiet for a month while I'm delivering?",
        answer:
          "It is the normal case, not the exception, and batch recording is the answer. Recording several episodes in one sitting before a busy period gives the feed a buffer to publish from — so listeners see an unbroken schedule while you are heads-down with clients. A show that visibly stops is far harder to restart than one that never appeared to pause.",
      },
      {
        question: "Should I be interviewing guests or talking on my own?",
        answer:
          "For a practice selling expertise, solo and client-question episodes usually work harder. Guests bring their audience, which is useful, but a prospect deciding whether to hire you needs to hear you reason through a problem — and that is exactly what an interview format gives least room for. Many practices do best with mostly solo episodes and occasional guests.",
      },
    ],
  },
  proof: {
    heading: "Coaching businesses we produce for",
    caseStudySlugs: ["career-change-coach", "fascat-coaching"],
    intro:
      "Both are practices where the show serves the business rather than being the business: Alice Stapleton is an accredited career change coach, and FasCat is a cycling coaching company in Boulder, Colorado. Worth being straight that our coaching roster is weighted towards health, fitness and career coaching — for management consulting the nearest example is Outthinkers, hosted by strategy author and consultant Kaihan Krippendorff.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What this costs for a small practice",
    body: "Podcast production for coaches and consultants is priced on episode length, cadence and which assets you need — and this is the page where trimming scope genuinely makes sense. Plenty of coaches take the edit and show notes only, write their own clips, and add more later once the show is producing enquiries. Tell us your cadence and we will send a per-episode figure.",
    caveat:
      "Monthly arrangements cost less per episode than one-off work. If you are testing whether a show works at all, starting per-episode is a perfectly sensible way to do it.",
  },
  faqs: [
    {
      question: "Is a podcast worth it for a coaching business?",
      answer:
        "It depends on whether you sell a considered, high-value service — if you do, it is one of the strongest formats available, because a prospect who has heard you reason through problems for hours arrives already trusting your judgement. If you sell something transactional and low-value, the economics are much weaker and the effort is better spent elsewhere.",
    },
    {
      question: "How do coaches use a podcast to generate leads?",
      answer:
        "By answering the questions prospects actually ask, in the words they use, so episodes are findable and useful before anyone makes contact. The mechanism is trust rather than reach: someone who has listened for hours has already done most of the deciding, which shortens the sales conversation considerably.",
    },
    {
      question: "How often should a consultant publish podcast episodes?",
      answer:
        "Fortnightly, sustained, beats weekly with gaps. Consistency signals a practice that is running well; a feed that visibly stops signals the opposite to exactly the people you want as clients. Pick the cadence you can hold through your busiest delivery month, then batch record to protect it.",
    },
    {
      question: "How much time does a podcast take if production is outsourced?",
      answer:
        "Recording time plus whatever preparation your format needs — realistically one to three hours a month for most practices, especially when episodes are batched. Everything after you stop recording sits with the producer, including notes, chapters, transcript, clips and publishing.",
    },
    {
      question: "Should coaches do solo episodes or interviews?",
      answer:
        "Mostly solo, if the show exists to win clients. A prospect needs to hear you think through a problem, and an interview format gives that the least room. Guests are useful for reaching new audiences, so a mix weighted towards solo and client-question episodes tends to serve a practice best.",
    },
    {
      question: "What should a coaching podcast measure instead of downloads?",
      answer:
        "Enquiries that mention the show, how much of your first call is spent establishing credibility, and which episodes prospects reference. Downloads are visible and nearly irrelevant at this scale — a few hundred of the right listeners routinely outperforms thousands of the wrong ones for a practice.",
    },
    {
      question: "Can I start small and add more production later?",
      answer:
        "Yes, and it is usually the sensible order. Start with the edit and show notes, see whether the show produces conversations, then add clips, transcripts and video once it is earning its place. Buying the full package before knowing the format works is how podcasts become an expense rather than a channel.",
    },
    {
      question: "How does consultant podcast production differ from a coaching show?",
      answer:
        "Consultant podcast production usually runs longer and more analytical, because the buyer is assessing methodology rather than rapport. Coaching shows lean on the host's presence and personal stories. Podcast editing for coaching businesses therefore protects warmth and natural delivery, where a consultant's show protects the clarity of the argument.",
    },
    {
      question: "Is a podcast a reliable lead generation channel?",
      answer:
        "It is a slow, compounding one rather than a predictable tap. Lead generation podcast work rarely produces enquiries in month one; it produces better-informed enquiries from month six onwards, because trust accumulates over hours of listening. If you need pipeline this quarter, spend the money elsewhere and start the show alongside it.",
    },
  ],
  cta: {
    heading: "Talk to us about your show",
    body: "Tell us what you do, who you want listening, and how much time you realistically have. We will come back with a format you can sustain and a figure for producing it.",
    buttonLabel: "Discuss a coaching podcast",
    note: "Happy to say if we think a podcast is the wrong fit. We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "career-change-coach",
    blogSlug: "why-isnt-my-podcast-growing",
    relatedServiceSlug: "monthly-podcast-editing-retainer",
  },
  formTag: "coaching-podcast-production",
  schemaServiceName: "Podcast production for coaches and consultants",
};
