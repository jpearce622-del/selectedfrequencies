import type { ServicePage } from "@/types/service-page";

/**
 * The craft page. Structurally about TECHNICAL COMPETENCE.
 *
 * The buyer here already knows the vocabulary — they will type "loudness
 * normalisation", "-16 LUFS", "true peak", "de-essing". They are evaluating
 * whether we know what we're doing, not whether they need a podcast. So this
 * page is allowed to be more technical than any other service page, and the
 * specificity IS the sales argument.
 *
 * Split enforced against thought-leadership-podcast-production.ts (existing):
 *   - That page sells editing to a named founder and argues about reputation
 *     and personal brand.
 *   - This page sells finishing to someone who records competently and wants
 *     technical work done properly. Same craft, different buyer, different
 *     vocabulary. No reputational argument here at all.
 *
 * Split enforced against done-for-you-podcast-production.ts:
 *   - That page is the whole operation including publishing and artwork.
 *   - This page stops at delivered files. Client records, client publishes.
 *
 * The loudness figures are the actual platform-recommended targets, not
 * invented ones: -16 LUFS stereo is the widely cited podcast target and
 * -1 dBTP is the standard true-peak ceiling. Do not "improve" these numbers.
 */
export const podcastPostProductionServices: ServicePage = {
  slug: "podcast-post-production-services",
  primaryKeyword: "podcast post production services",
  supportingKeywords: [
    "podcast mixing and mastering",
    "podcast audio post production",
    "podcast editing and mastering service",
    "professional podcast finishing",
  ],
  buyer:
    "Producer, host or in-house team who records competently and handles their own publishing, but wants the technical finishing done to a standard they can't hit themselves. Knows the terminology.",
  seo: {
    title: "Podcast Post Production Services",
    metaDescription:
      "Podcast post production services: editing, mixing, mastering to -16 LUFS, noise reduction, chaptering and show notes. You record, we finish and deliver.",
  },
  h1: "Podcast post production services",
  subheadline:
    "You record and publish. We do the editing, mixing, mastering and deliverables — to spec, to a stated loudness target, on a stated turnaround.",
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
    heading: "Where self-finished episodes come apart",
    body: [
      "If you are on this page you can probably already record a clean conversation, and you may well be doing a reasonable edit. The gap between a reasonable edit and a finished episode is technical, and it is mostly inaudible to the person who made it.",
      "Loudness is the most common one. Episodes exported at wildly different levels sit badly next to each other in a feed and force listeners to reach for the volume between shows. There is a target for this — around -16 LUFS integrated for stereo, with true peaks under -1 dBTP — and hitting it consistently requires metering, not a guess based on how loud it sounds on your headphones.",
      "Then there is the material that a compressor makes worse rather than better. Room tone that changes halfway through because someone moved. A guest whose sibilance is fatiguing over an hour. Low-frequency rumble from a desk or a passing bus that eats headroom and makes everything above it sound thinner. Handling noise. Plosives on a mic without a pop filter. Each is a specific problem with a specific fix, and each is made worse by the broad-brush processing most DAW presets apply.",
      "The last one is the awkward one: you cannot reliably hear your own mix after two hours with it. Ear fatigue is real, and it is why finishing is usually the part worth handing to someone with fresh ears and calibrated monitoring.",
    ],
  },
  included: {
    heading: "What post production covers",
    intro:
      "Podcast post production services are only worth buying if the output is consistent, so everything below is delivered against a written spec, in your naming convention, ready to upload.",
    items: [
      {
        title: "Content edit",
        detail:
          "Removing false starts, restarts, dead air and circular passages. Filler removed where it helps and left where cutting it would make a speaker sound clipped or breathless.",
      },
      {
        title: "Noise reduction and repair",
        detail:
          "Broadband noise, hum, room tone mismatches, clicks, mouth noise and handling noise. Applied surgically rather than as a blanket denoise pass, which is what makes voices sound underwater.",
      },
      {
        title: "Levelling and dynamics",
        detail:
          "Matching speakers recorded on completely different equipment so nobody has to ride the volume. Compression set for spoken word rather than music, with the dynamic range left intact enough to sound human.",
      },
      {
        title: "Corrective EQ and de-essing",
        detail:
          "High-pass filtering to clear rumble below the voice, notching resonances from an untreated room, and de-essing fatiguing sibilance without turning an S into a lisp.",
      },
      {
        title: "Mastering to platform loudness",
        detail:
          "Mastered to approximately -16 LUFS integrated for stereo with true peak under -1 dBTP, so your episodes are consistent with each other and with everything else in the listener's feed.",
      },
      {
        title: "Music, intro and outro assembly",
        detail:
          "Beds ducked properly under speech, transitions timed so they don't clip the first word, and consistent placement every episode against the spec.",
      },
      {
        title: "Chaptering and timestamps",
        detail:
          "Chapter markers formatted for Apple, Spotify and YouTube, which each expect them differently. Titled as descriptive phrases rather than 'Part 2'.",
      },
      {
        title: "Show notes and transcript",
        detail:
          "Episode descriptions and a full transcript as real text. Optional — plenty of clients on this service write their own and take audio only.",
      },
      {
        title: "Deliverables to your spec",
        detail:
          "MP3 at your chosen bitrate, WAV masters where you want them, video exports matched to your publishing targets, and your file naming convention applied exactly.",
      },
    ],
    footnote:
      "You keep recording and publishing. We do not touch your host, your feed or your distribution on this service — that scope sits on the done-for-you page.",
  },
  howItWorks: {
    heading: "How the work runs",
    intro:
      "Set the spec once, then it is a file handoff every week.",
    steps: [
      {
        title: "1. Send a sample episode",
        body: "We listen to something you've already published and tell you specifically what we'd do differently — the loudness you're currently landing at, what's causing any problems we hear, and what's fixable at the edit versus what needs changing at capture.",
      },
      {
        title: "2. Agree the technical spec",
        body: "Loudness target, deliverable formats and bitrates, naming convention, how tightly to cut, music placement, whether you want chapters and notes. Written down so every episode is finished identically.",
      },
      {
        title: "3. Capture review",
        body: "If something in your recording chain is creating problems we cannot fully fix — a room, a mic choice, a gain setting — we tell you. Post production can rescue a lot, but it is always cheaper to fix it at source and we would rather say so than bill you monthly for compensating.",
      },
      {
        title: "4. You send raw files",
        body: "Separate tracks per speaker where you have them, which is what makes it possible to fix one person's audio without touching the other's. Multitrack in, finished episode out.",
      },
      {
        title: "5. Edit, mix, master",
        body: "The full chain against your spec, checked on more than one set of monitors before it goes back to you. Turnaround is a stated number of working days from receipt, agreed up front.",
      },
      {
        title: "6. Delivery and one revision",
        body: "Files land in your Drive, Dropbox or wherever you work, named your way. One round of changes included. Notes on a finished mix are normal, particularly in the first month.",
      },
    ],
  },
  objections: {
    heading: "Technical questions worth asking",
    items: [
      {
        question: "What loudness do you master to?",
        answer:
          "Around -16 LUFS integrated for stereo with true peak under -1 dBTP, which is the widely used podcast target and keeps episodes consistent with the rest of a listener's feed. If your host or network specifies something different — some ask for mono at -19 LUFS — we master to their spec instead. It goes in the written spec either way.",
      },
      {
        question: "Can you fix audio recorded in a bad room?",
        answer:
          "Substantially, not completely. Broadband noise, rumble and resonance all respond well to corrective work. Genuine reverb — the sound bouncing off hard parallel surfaces — is baked into the recording and cannot be removed, only masked, and masking it aggressively costs you clarity. If a room is the problem we'll say so, because it's cheaper to fix once than to pay for compensation every episode.",
      },
      {
        question: "Do you need separate tracks for each speaker?",
        answer:
          "Strongly preferred. Separate tracks let us treat one person's sibilance or noise floor without touching anyone else's, which is the difference between surgical work and compromise. We can work from a single mixed file and often do, but the ceiling on how good it can get is meaningfully lower.",
      },
      {
        question: "What formats do you deliver?",
        answer:
          "Whatever you publish in. Typically MP3 at 128kbps or higher for spoken word, WAV masters on request, and video exports matched to your platforms. Your naming convention is applied exactly, because a batch of correctly-finished files with the wrong filenames still creates work for you.",
      },
      {
        question: "How is this different from just hiring an editor?",
        answer:
          "Mostly the mastering and the consistency. Plenty of editors will cut a conversation well; fewer will meter loudness properly, apply corrective EQ per speaker, and deliver to a written spec that produces identical results at episode fifty. If you already have a good editor and only need finishing, that's a reasonable scope to buy on its own.",
      },
    ],
  },
  proof: {
    heading: "Shows where the finish has to be consistent",
    caseStudySlugs: ["genetics-podcast", "the-lively-show"],
    intro:
      "Long-running catalogues where every episode has to sit correctly next to the ones either side of it, across hundreds of episodes.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What post production costs",
    body: "Priced on episode length, number of speakers, how much repair the raw audio needs, and which deliverables you want. Send a sample episode and we will come back with a per-episode figure and a note on what we would do differently.",
    caveat:
      "Ongoing work is usually cheaper per episode on a monthly arrangement — see the retainer page for how tiers and turnaround work.",
  },
  faqs: [
    {
      question: "What is podcast post production?",
      answer:
        "Everything that happens to a recording after it's captured: content editing, noise reduction and repair, levelling between speakers, corrective EQ and de-essing, music assembly, and mastering to a platform loudness target. It ends with delivered files ready to publish, rather than with publishing itself.",
    },
    {
      question: "What LUFS should a podcast be mastered to?",
      answer:
        "Roughly -16 LUFS integrated for stereo, with true peaks kept under -1 dBTP. Some networks and hosts specify mono at around -19 LUFS instead. The important part is hitting a target consistently and metering it rather than judging by ear, so episodes don't jump in level across a feed.",
    },
    {
      question: "Can you remove background noise from a podcast recording?",
      answer:
        "Broadband noise, hum, rumble and clicks respond well to surgical repair. Actual room reverb is part of the recording and can only be masked, at a cost to clarity. We apply reduction per-track rather than as a blanket pass, which is what prevents the underwater artefacts blanket denoising creates.",
    },
    {
      question: "Do you offer mixing and mastering without editing?",
      answer:
        "Yes. If you cut your own episodes and only want the technical finish — levelling, corrective EQ, de-essing, mastering to spec — that's a valid scope and priced lower than a full edit. Send us a cut episode and we'll finish it.",
    },
    {
      question: "How long does podcast post production take per episode?",
      answer:
        "The work itself typically runs two to four times episode length, longer for multi-guest or narrative shows. What you're quoted is a turnaround in working days from receiving files, agreed in writing rather than as a range, so you can plan a publishing date around it.",
    },
    {
      question: "What raw files should I send you?",
      answer:
        "Multitrack — one file per speaker — at the highest quality you recorded, plus any music or inserts. Separate tracks are what allow one person's audio to be treated without affecting another's. A single mixed file works but limits how much can be repaired.",
    },
    {
      question: "Will you tell me if my recording setup is the problem?",
      answer:
        "Yes, directly. If a room, mic choice or gain setting is creating something we can only partly fix, we'll say so and tell you what to change. Fixing it at source is cheaper for you than paying us to compensate for it on every future episode.",
    },
  ],
  cta: {
    heading: "Send us an episode to look at",
    body: "Send something you've already published. We will tell you what loudness you're landing at, what we'd do differently and why, and what it would cost per episode.",
    buttonLabel: "Get a post production quote",
    note: "Sample review is free. We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "genetics-podcast",
    blogSlug: "podcast-audio-quality-guide",
    relatedServiceSlug: "monthly-podcast-editing-retainer",
  },
  formTag: "post-production",
  schemaServiceName: "Podcast post production services",
};
