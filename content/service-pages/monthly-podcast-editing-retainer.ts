import type { ServicePage } from "@/types/service-page";

/**
 * The commercial-model page. Structurally about HOW YOU BUY, not what you get.
 *
 * Split enforced against done-for-you-podcast-production.ts:
 *   - THIS page argues the MODEL: tiers, SLAs, rollover, what happens when
 *     you skip a month, why a retainer beats per-episode. Scope is summarised
 *     in one list and then linked away.
 *   - THAT page argues the SCOPE: what you do vs what we do, the handoff.
 *     It links here for pricing mechanics rather than restating them.
 * If either page starts making the other's argument, split them again.
 *
 * Turnaround figures below are the commitments James already makes on the
 * pricing page and in existing client work. They are SLAs, not aspirations —
 * do not inflate them here to make the page more persuasive.
 */
export const monthlyPodcastEditingRetainer: ServicePage = {
  slug: "monthly-podcast-editing-retainer",
  primaryKeyword: "monthly podcast editing retainer",
  supportingKeywords: [
    "podcast editing retainer",
    "monthly podcast editing package",
    "podcast editing subscription",
    "ongoing podcast editing service",
  ],
  buyer:
    "Show owner or marketing manager who already publishes regularly and is tired of raising a purchase order per episode. Wants predictable cost, predictable turnaround, and one invoice.",
  seo: {
    title: "Monthly Podcast Editing Retainer",
    metaDescription:
      "A monthly podcast editing retainer with fixed turnaround, set episode tiers and one invoice. Predictable cost per episode, no per-episode quoting.",
  },
  h1: "Monthly podcast editing retainer",
  subheadline:
    "A fixed number of episodes, a fixed turnaround, and one invoice a month. You stop quoting every episode and we stop being a purchasing decision.",
  sectionOrder: [
    "problem",
    "included",
    "how-it-works",
    "objections",
    "pricing",
    "proof",
    "faq",
  ],
  problem: {
    heading: "Why per-episode buying stops working",
    body: [
      "Paying per episode is the right model at the start. You are not sure the show will survive, you want to keep the commitment small, and a quote per episode feels like control.",
      "It stops working at roughly the point the show becomes a fixture. Every episode becomes a small transaction: a quote, an approval, sometimes a purchase order, an invoice, a reconciliation. The admin cost per episode does not shrink as you publish more, and for a finance team a stream of small invoices from the same supplier is more annoying than one predictable one.",
      "The second problem is scheduling. Per-episode work is queued per episode, which means your turnaround depends on what else is in the queue that week. That is fine when your publishing date is flexible and genuinely disruptive when it isn't. A retainer reserves capacity in advance — you are buying a slot in the schedule as much as you are buying the edit.",
      "The third is drift. Per-episode work invites per-episode decisions, and shows edited transactionally tend to wander: the intro changes, the loudness moves, the show notes get shorter when someone is busy. Continuity is easier to hold when the same person is working to the same written spec every month.",
    ],
  },
  included: {
    heading: "What a retainer covers",
    intro:
      "The same production work whichever tier you're on — the tier sets the volume, not the quality.",
    items: [
      {
        title: "Full episode edit",
        detail:
          "Content edit, sound cleanup, levelling between speakers, and mastering to platform loudness. Applied identically every month against your written show spec.",
      },
      {
        title: "A written show spec, maintained",
        detail:
          "Intro and outro placement, music, ad slots, how tightly to cut, file naming. Agreed once and kept current, so the show does not drift between episode five and episode fifty.",
      },
      {
        title: "Show notes and chapters",
        detail:
          "Episode descriptions and chapters formatted per platform, in your house style. Included at every tier rather than treated as an upsell.",
      },
      {
        title: "Reserved capacity in the schedule",
        detail:
          "Your episodes have a slot booked before you record them. This is the part you cannot buy per episode, and for most clients it is the actual reason to move to a retainer.",
      },
      {
        title: "Agreed turnaround, in writing",
        detail:
          "A stated working-day turnaround from receiving your files, set against your publishing schedule rather than left vague.",
      },
      {
        title: "One invoice a month",
        detail:
          "Same figure, same date. Your finance team approves it once rather than processing a stream of small transactions.",
      },
      {
        title: "One point of contact",
        detail:
          "You talk to the person doing the edit. Feedback on episode twelve does not have to be re-explained to someone new.",
      },
    ],
    footnote:
      "Video editing, extra clips and full done-for-you production sit on top of a retainer rather than inside it — the scope of that is covered on the done-for-you page.",
  },
  howItWorks: {
    heading: "How the retainer works",
    intro:
      "Deliberately simple, because a complicated retainer is a retainer people cancel.",
    steps: [
      {
        title: "1. Pick a tier by episode volume",
        body: "Tiers are set by how many episodes a month you publish — commonly two, four or eight. The per-episode cost falls as the tier rises, because reserved, predictable work is cheaper for us to schedule than ad-hoc work.",
      },
      {
        title: "2. We write the show spec",
        body: "One session up front to agree how the show should sound and what every episode needs. This is what makes month six identical in quality to month one, and it is done once rather than revisited monthly.",
      },
      {
        title: "3. You send files as you record",
        body: "No need to batch or wait for a monthly cutoff. Episodes are picked up as they arrive, and the turnaround clock starts when the files land rather than when the month starts.",
      },
      {
        title: "4. Fixed turnaround per episode",
        body: "Each episode comes back within the agreed number of working days, with one round of changes included as standard. If you need a faster lane for a time-sensitive episode, that is agreed up front rather than negotiated in the moment.",
      },
      {
        title: "5. Unused episodes roll over one month",
        body: "Skip a week and the episode carries into the next month. It does not accumulate indefinitely — capacity that is reserved and never used still costs us the slot — but a single quiet month does not cost you anything.",
      },
      {
        title: "6. Review the tier quarterly",
        body: "If you are consistently over or under your tier, we move you rather than billing overages against a plan that no longer fits. Retainers should be reviewed, not set and forgotten.",
      },
    ],
  },
  objections: {
    heading: "Fair questions about committing monthly",
    items: [
      {
        question: "What if we publish fewer episodes one month?",
        answer:
          "Unused episodes roll into the following month. They do not stack up indefinitely, because the value you are buying is reserved capacity and an unused slot is a slot we held for you. One quiet month is absorbed; a permanently lower volume means moving you to a smaller tier, which we would raise at the quarterly review.",
      },
      {
        question: "Is a retainer actually cheaper than paying per episode?",
        answer:
          "Per episode, yes — the rate falls as the tier rises because predictable scheduled work costs less to run than ad-hoc work. Whether it is cheaper overall depends on whether you use the tier. If you publish reliably it is cheaper and simpler. If you publish sporadically, per-episode is the honest recommendation and we will say so.",
      },
      {
        question: "What if the quality drops once we're locked in?",
        answer:
          "There is no lock-in — the agreement runs month to month with 30 days' notice, which is deliberate. A retainer you can leave at short notice is a supplier that has to keep earning it. The written show spec also makes quality checkable against something specific rather than a vague sense that it used to be better.",
      },
      {
        question: "Can we start per-episode and move to a retainer later?",
        answer:
          "That is the normal path, and usually the right one. Run a few episodes per-episode, see whether the show holds a schedule, then move to a retainer once publishing is genuinely routine. Committing monthly to a show that has not yet proved it will publish monthly is a common and expensive mistake.",
      },
      {
        question: "What happens if we need an episode faster than the SLA?",
        answer:
          "Tell us when you book the retainer and we build a faster lane into your agreement, or ask when it comes up and we will accommodate it where the schedule allows. What we will not do is quietly deprioritise someone else's booked slot to do it, which is the reason reserved capacity is worth paying for in the first place.",
      },
      {
        question: "How long a commitment are we signing up to?",
        answer:
          "A monthly podcast editing retainer runs month to month with a notice period rather than on a fixed twelve-month term. Long lock-ins mostly protect the supplier, and a show that has stopped needing us should be able to stop paying us. What the notice period does buy is planning on both sides: we hold your capacity, and you get a predictable date each month rather than joining a queue.",
      },
      {
        question: "Does the same person edit our show every week?",
        answer:
          "Yes, and it is one of the main practical arguments for retaining rather than buying per episode. Someone who has edited your last twenty episodes knows your hosts' verbal habits, which passages you always cut, and how tight you like the pacing — none of which is written down anywhere useful. That accumulated familiarity is why episode fifty needs fewer notes than episode five.",
      },
    ],
  },
  proof: {
    heading: "Shows we produce on an ongoing basis",
    caseStudySlugs: ["bitcoin-collective", "genetics-podcast"],
    intro:
      "Long-running shows publishing on a fixed schedule, where the value is consistency across a large back catalogue rather than any single episode.",
  },
  pricing: {
    mode: "enquiry",
    heading: "Retainer pricing",
    body: "Priced by tier: the more episodes a month, the lower the cost per episode. What sets the figure is episode length, whether you need video as well as audio, and the turnaround you need. Tell us your monthly volume and we will send the tier that fits with a per-episode and a monthly number.",
    caveat:
      "Month to month with 30 days' notice. No minimum term, no setup fee.",
  },
  faqs: [
    {
      question: "How does a monthly podcast editing retainer work?",
      answer:
        "You commit to a set number of episodes per month and pay one fixed monthly fee. In return you get a reserved slot in the production schedule, an agreed turnaround per episode, and a written show spec applied consistently. Unused episodes roll over one month, and the agreement runs month to month.",
    },
    {
      question: "What is included in a podcast editing package each month?",
      answer:
        "Full episode edit, sound cleanup, levelling and mastering, plus show notes and chapters formatted for each platform — at every tier. Volume changes between tiers, quality does not. Video editing and larger clip volumes sit on top of the retainer rather than inside it.",
    },
    {
      question: "Is a podcast editing subscription better than paying per episode?",
      answer:
        "It is better once your show publishes reliably: lower cost per episode, reserved capacity so turnaround doesn't depend on queue length, and one invoice instead of many. If you publish irregularly, paying per episode is genuinely the better choice and we'd tell you so rather than sell you a tier you won't use.",
    },
    {
      question: "What turnaround can I expect on an ongoing editing service?",
      answer:
        "A stated number of working days from the moment your files land, agreed in writing against your publishing schedule rather than quoted as a vague range. Because retainer capacity is reserved in advance, that turnaround holds regardless of how busy the wider schedule is that week.",
    },
    {
      question: "Do I have to sign a long contract?",
      answer:
        "No. Retainers run month to month with 30 days' notice, no minimum term and no setup fee. A long tie-in mostly protects the supplier, and a retainer that a client can leave easily is one we have to keep deserving every month.",
    },
    {
      question: "Can I change my episode tier later?",
      answer:
        "Yes, and we review it quarterly. If you're consistently publishing above or below your tier we move you rather than billing overages against a plan that stopped fitting. Volume changes with seasons and campaigns, and the tier should follow it.",
    },
    {
      question: "What happens to my show if I pause the retainer?",
      answer:
        "Nothing is held hostage. Your show spec, project files and finished episodes are yours, and we hand over whatever you need. Pausing over a quiet summer and restarting in September is common and doesn't require renegotiating from scratch.",
    },
  ],
  cta: {
    heading: "Find the right tier for your show",
    body: "Tell us how many episodes you publish a month, how long they run, and whether you need video. We will send the tier that fits with a per-episode and a monthly figure.",
    buttonLabel: "Get retainer pricing",
    note: "Month to month. 30 days' notice, no minimum term.",
  },
  internalLinks: {
    caseStudySlug: "bitcoin-collective",
    blogSlug: "founder-podcast-time-per-week",
    relatedServiceSlug: "done-for-you-podcast-production",
  },
  formTag: "monthly-editing-retainer",
  schemaServiceName: "Monthly podcast editing retainer",
};
