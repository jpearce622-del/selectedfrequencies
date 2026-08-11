import type { ServicePage } from "@/types/service-page";

/**
 * The C-suite page. Structurally about RISK AND TIME, not audio quality.
 *
 * The buyer is NOT the executive — it is the CMO, Head of Comms or Chief of
 * Staff who is accountable for the exec's output and whose own standing is on
 * the line if it goes badly. Everything is written to that person: they are
 * spending someone else's very expensive hour and protecting a reputation
 * that isn't theirs.
 *
 * Deliberate boundary against thought-leadership-podcast-production.ts:
 * that page sells to the founder buying for THEMSELVES and argues about
 * personal brand. This page sells to a team member buying FOR someone senior
 * and argues about time, briefing and reputational safety. Different buyer,
 * different anxiety, different vocabulary. "executive podcast production" was
 * removed from that page's supporting keywords so this page owns the space.
 *
 * TODO (JAMES): no named executive client appears here — none has been
 * confirmed for public use, and on this page in particular an unapproved name
 * would be exactly the discretion failure the page claims to protect against.
 */
export const executivePodcastProductionService: ServicePage = {
  slug: "executive-podcast-production-service",
  primaryKeyword: "executive podcast production service",
  supportingKeywords: [
    "c-suite podcast production",
    "podcast production for executives",
    "ceo podcast production",
    "corporate executive podcast agency",
  ],
  buyer:
    "CMO, Head of Communications or Chief of Staff producing a show for a founder, CEO or C-suite exec. Accountable for the output, spending an expensive person's time, and personally exposed if the exec sounds bad.",
  seo: {
    title: "Executive Podcast Production",
    metaDescription:
      "An executive podcast production service built around your exec's calendar. Full briefing, discreet handling, and an edit that protects how they sound.",
  },
  h1: "Executive podcast production service",
  subheadline:
    "Your executive gives us one prepared hour. We handle the briefing, the production and the polish — and nothing reaches the feed that you haven't approved.",
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
    heading: "What you're actually managing",
    body: [
      "You have been asked to get a show out of someone whose calendar is defended in fifteen-minute increments, who will not read a brief the night before, and who is very good in conversation but has never thought about pacing, structure or what makes a recorded hour listenable.",
      "The time problem is the obvious one. Every additional touchpoint you request — a prep call, a re-record, a review round, a follow-up question — is a withdrawal from an account you have limited access to. Ask for too many and the show becomes a thing the exec resents. Ask for too few and you are producing without a brief, which shows.",
      "The risk problem is the one that keeps you up. A founder who misspeaks about a competitor, a number that shouldn't have been said aloud, a joke that reads differently in a transcript than it did in the room. Once it is in a feed it has been downloaded, and a quiet deletion is not a remedy. You are the person who will be asked how it got out.",
      "And underneath both: this show carries your executive's name and, by extension, your judgement. A rough edit on a junior marketer's podcast is a minor embarrassment. The same edit on the CEO's show is a conversation about whether you should be running it.",
    ],
  },
  included: {
    heading: "What the service covers",
    intro:
      "An executive podcast production service has to be judged on what it takes off your desk, so this is built so that the executive's total commitment is a prepared hour, and yours is an approval.",
    items: [
      {
        title: "Guest and topic briefing pack",
        detail:
          "A one-page brief before each recording: who the guest is, what they're known for, the three or four lines of questioning worth pursuing, and anything to avoid. Written to be read in five minutes in a car.",
      },
      {
        title: "Full episode edit, audio and video",
        detail:
          "Content edit, sound cleanup, levelling and mastering. Stumbles, restarts and circular passages removed so your exec sounds considered — without the edit becoming so tight they sound coached.",
      },
      {
        title: "A discretion pass on every episode",
        detail:
          "We flag anything that reads as a risk — an unguarded number, a named competitor, a claim that would need legal sign-off — and hand it to you as a timestamped list before publication rather than after.",
      },
      {
        title: "Approval cut before anything is final",
        detail:
          "You review a full episode with the flagged moments marked. Nothing is published until you have said yes, and a removal request at that stage costs nothing.",
      },
      {
        title: "Show notes and chapters in house style",
        detail:
          "Episode descriptions written to your comms tone of voice rather than ours, with chapters formatted correctly per platform.",
      },
      {
        title: "Short-form clips, chosen carefully",
        detail:
          "Vertical clips with captions, selected for moments that make your exec look thoughtful rather than merely quotable. Clip selection is where most executive shows quietly go wrong.",
      },
      {
        title: "A single point of contact",
        detail:
          "You deal with the person doing the edit. No account manager relaying notes to a production team, and no scheduling call to get a change made.",
      },
    ],
    footnote:
      "We do not write your executive's opinions, ghostwrite their positions or manage their wider comms programme. We produce the show and protect how they come across in it.",
  },
  howItWorks: {
    heading: "How it runs, week to week",
    intro:
      "Designed so the executive touches the process twice: once to record, once to approve if they want to.",
    steps: [
      {
        title: "1. Positioning session — with you, not the exec",
        body: "One call to establish what the show is for, what the exec should be known for, the subjects that are off-limits, and who signs off. This is deliberately booked with you rather than them, because it is a comms conversation and it does not need their hour.",
      },
      {
        title: "2. Show spec and sign-off chain",
        body: "Written down once: format, length, tone, ad or CTA policy, and exactly who approves what and in what order. Ambiguity about sign-off is the single most common cause of a delayed executive show.",
      },
      {
        title: "3. Briefing pack, 48 hours before",
        body: "The one-page brief lands in time to actually be read. Where a guest is involved, they get their own version — a prepared guest makes the exec sound better and makes the recording shorter.",
      },
      {
        title: "4. The recording",
        body: "One hour. We advise on setup so the audio is recoverable, with each speaker on a separate track. If something goes wrong mid-recording, we tell you then rather than discovering it in the edit.",
      },
      {
        title: "5. Production and the discretion pass",
        body: "We edit, master, write the notes and cut the clips — then go back through with a comms head on and flag anything that carries risk, with timestamps.",
      },
      {
        title: "6. Your approval, then publication",
        body: "You get the episode and the flag list. Changes are made, and only then does it publish. If the answer is that an episode shouldn't go out at all, that is a fine outcome and we would rather find it here.",
      },
    ],
  },
  objections: {
    heading: "The questions comms leads ask",
    items: [
      {
        question: "Realistically, how much of my executive's time does this take?",
        answer:
          "The recording hour, plus roughly five minutes reading a brief beforehand. Everything else — positioning, spec, sign-off, review — is designed to run through you. If your exec wants to review episodes personally that is easily accommodated, but the service is built on the assumption that they won't have time to.",
      },
      {
        question: "What happens if they say something they shouldn't?",
        answer:
          "It gets flagged to you with a timestamp before publication, and removed if you say so. This is a standard part of every episode rather than something you have to request. The edit stage is the cheap place to catch it; the feed is the expensive one.",
      },
      {
        question: "How do I know this stays confidential?",
        answer:
          "We sign NDAs as a matter of course, we don't name clients publicly without written permission, and unreleased recordings aren't used as portfolio material. Several of the shows we produce aren't listed on this site for exactly that reason.",
      },
      {
        question: "Our exec is not a natural broadcaster. Can you make that work?",
        answer:
          "Usually, yes — and the fix is mostly briefing rather than editing. Someone who knows which three questions are coming performs very differently from someone being surprised. What we won't do is edit them into a person they aren't; over-tight editing makes an executive sound coached, which damages credibility more than a natural pause ever did.",
      },
      {
        question: "Can you work with our internal comms and legal review?",
        answer:
          "Yes, and it works best when their review slots into the approval cut rather than sitting after it. We deliver the episode with flagged moments already marked, which usually shortens legal's involvement considerably because they are reviewing three timestamps rather than an hour.",
      },
    ],
  },
  proof: {
    heading: "Executive-audience shows we produce",
    caseStudySlugs: ["chief-strategy-officer-podcast", "outthinkers"],
    intro:
      "Shows where the guests are senior operators and the audience is sceptical and professional — the environment where an executive's credibility is actually tested.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What it costs",
    body: "An executive podcast production service is priced on the briefing and approval workload as much as the edit itself, so it depends on cadence, whether there are guests, whether you need video, and how many approval stages sit in your chain. Tell us the shape and we will send a figure.",
    caveat:
      "Most executive shows run on a monthly arrangement rather than per episode, because the briefing and sign-off cycle benefits from continuity.",
  },
  faqs: [
    {
      question: "What is an executive podcast production service?",
      answer:
        "It is podcast production built around a senior person's constraints rather than a producer's convenience. The differences are structural: briefing so the exec arrives prepared, a discretion pass flagging anything reputationally risky, and an approval cut before publication. The production quality is assumed; the handling is what you're buying.",
    },
    {
      question: "How much of the CEO's time does a podcast really need?",
      answer:
        "About one hour per episode plus five minutes with a briefing document, if production and briefing are handled externally. Shows that demand more than that from a C-suite calendar tend to stop within a quarter, so keeping the commitment to a single prepared hour is a design requirement rather than a nice-to-have.",
    },
    {
      question: "Who should own a C-suite podcast internally?",
      answer:
        "Whoever owns the executive's external voice — usually comms or brand rather than demand gen. The show needs someone with the standing to say an episode shouldn't run, and the access to get an hour in the diary. Splitting those two responsibilities across teams is where executive shows most often stall.",
    },
    {
      question: "Can you edit out something an executive said by mistake?",
      answer:
        "Yes, and before publication we flag those moments to you proactively with timestamps rather than waiting to be asked. Removing a passage cleanly at the edit stage is straightforward. Removing it after an episode has been downloaded is not, which is why the discretion pass sits where it does.",
    },
    {
      question: "Do you sign confidentiality agreements for executive clients?",
      answer:
        "As standard. We also don't publish client names without written permission, and unreleased material never appears as portfolio work. A number of the shows we produce aren't named publicly anywhere, which is the arrangement several executive clients prefer.",
    },
    {
      question: "How do you keep an exec from sounding scripted?",
      answer:
        "By briefing heavily and editing lightly. Preparation is what produces a fluent, confident speaker; aggressive editing produces someone who sounds artificially smooth, and listeners register that as inauthentic even when they can't say why. We remove genuine stumbles and circular passages, and leave the thinking pauses alone.",
    },
    {
      question: "What if our executive's schedule slips constantly?",
      answer:
        "We plan for it. Recording several episodes in one sitting is common with senior people and works well — it takes one calendar block instead of six, and gives a buffer of finished episodes so the feed keeps publishing through a quarter when the diary closes entirely.",
    },
  ],
  cta: {
    heading: "Talk to us about your executive's show",
    body: "Tell us who the show is for, how much of their calendar you can realistically protect, and who needs to approve what. We will come back with a production plan built around those constraints.",
    buttonLabel: "Discuss an executive show",
    note: "Confidential by default. We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "chief-strategy-officer-podcast",
    blogSlug: "founder-podcast-time-per-week",
    relatedServiceSlug: "thought-leadership-podcast-production",
  },
  formTag: "executive-podcast-production",
  schemaServiceName: "Executive podcast production service",
};
