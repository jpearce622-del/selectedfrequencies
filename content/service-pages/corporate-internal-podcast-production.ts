import type { ServicePage } from "@/types/service-page";

/**
 * Industry page 6. Structurally about A PRIVATE AUDIENCE.
 *
 * The inversion that drives the whole page: every other page on this site
 * assumes the goal is more listeners. Here the audience is fixed, known by
 * name, and paid to be there — which changes what production is for. You are
 * not competing for attention in a feed; you are competing with the other
 * things a colleague could do with twenty minutes.
 *
 * ⚠ EVIDENCE WARNING — no internal comms client exists. Read before editing.
 *
 * The proof section uses The Assembly (Assemble You). That is a PUBLIC,
 * externally distributed B2B marketing show made by a workplace-learning
 * company. It is NOT an internal podcast, and the page says so in plain
 * words. Assemble You's own product being organisational audio learning is
 * the reason it is the nearest adjacency available — not a reason to blur
 * the distinction.
 *
 * Specifically, we have NOT:
 *   - run a private/authenticated podcast feed for a client
 *   - been through an enterprise IT or infosec review
 *   - produced all-hands or leadership comms audio
 *   - handled employee engagement measurement
 * The [TK:] markers are where a real client would go. Until one exists this
 * page sells transferable capability and describes how the private-feed
 * workflow is built, which is honest, useful for search, and materially
 * weaker than the fintech, crypto, biotech and coaching pages.
 *
 * Split enforced against done-for-you-podcast-production.ts: that page argues
 * scope to anyone. This argues about a private audience, hosting and
 * security. Do not repeat the scope argument here — link to it.
 */
export const corporateInternalPodcastProduction: ServicePage = {
  slug: "corporate-internal-podcast-production",
  group: "industry",
  primaryKeyword: "corporate internal podcast production",
  supportingKeywords: [
    "internal communications podcast",
    "employee podcast production",
    "private podcast feed for companies",
    "internal comms audio production",
  ],
  buyer:
    "Internal communications, HR or employee engagement lead at a large or distributed organisation. Needs a private feed, has an IT and security function with an opinion, and is measured on whether employees actually engage.",
  seo: {
    title: "Corporate Internal Podcasts",
    metaDescription:
      "Corporate internal podcast production with private feeds and secure hosting. Built for distributed and deskless teams, and for your IT and security review.",
  },
  h1: "Corporate internal podcast production",
  subheadline:
    "An internal show has a fixed, known audience who are paid to be there — which makes it a completely different production problem from a public podcast, and a much less forgiving one.",
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
    heading: "Why internal podcasts are a different problem",
    body: [
      "Public podcasts compete for attention against every other podcast. An internal communications podcast does not — its audience already knows it exists and can be told to listen. That sounds like an easier job and it is actually a harder one, because a captive audience is a critical audience. Nobody chose your show, so nothing is forgiven: not a rambling twenty minutes, not obvious corporate messaging, not poor audio on a leadership update.",
      "The format solves a real problem, though, and it is worth being specific about which one. Audio is the only medium a deskless or distributed workforce can consume while doing something else — driving between sites, on a ward, on a factory floor, commuting. For an organisation where a large share of people never open the intranet and cannot attend a live all-hands, that is not a nice-to-have, it is the only channel that reaches them at all.",
      "Then there are the constraints that simply do not exist on a public show. The feed has to be private, which means authentication, access control and offboarding — when someone leaves, their access to internal audio should end, and a public RSS feed with an obscure URL is not access control. Your IT and security functions will have views on hosting, on where the audio is stored, and on which vendors touch it. And the content itself is frequently sensitive: an internal briefing that leaks is a different category of problem from a marketing episode that underperforms.",
      "Finally, the measure of success changes entirely. Downloads are irrelevant when the denominator is your headcount. What matters is the proportion of the workforce listening, whether the deskless population is reached at all, and completion rate — because an all-hands recap that everyone starts and nobody finishes is telling you something specific about its length.",
      "Taken together, those four differences are why corporate internal podcast production sits apart from the rest of this site's work. Everything else here is built to win attention that was never guaranteed. Internal comms audio production starts with the attention already granted and has to justify it — which is a narrower brief, and an easier one to fail.",
    ],
  },
  included: {
    heading: "What corporate internal podcast production covers",
    intro:
      "The production scope, plus the parts that only exist because the audience is private and internal.",
    items: [
      {
        title: "Private feed setup and access control",
        detail:
          "A hosting arrangement that authenticates listeners rather than relying on an unlisted URL, with a route for removing access when someone leaves. We will work within whichever platform your organisation approves rather than requiring our own.",
      },
      {
        title: "Full episode edit",
        detail:
          "Content edit, cleanup, levelling and mastering. Internal recordings are usually captured in meeting rooms or over calls rather than studios, so repair work is a larger share of the job than on a public show.",
      },
      {
        title: "Leadership and all-hands episodes",
        detail:
          "Long recordings cut down to the part people will actually finish. A ninety-minute all-hands rarely becomes a good ninety-minute episode; it usually becomes a good eighteen-minute one, and deciding what goes is most of the work.",
      },
      {
        title: "A sensitivity flag pass",
        detail:
          "Anything commercially sensitive, personally identifying or not yet announced, flagged with timestamps before publication. Internal audiences forward things, and the assumption that internal stays internal is not a safe one.",
      },
      {
        title: "Episode descriptions and chapters",
        detail:
          "So a colleague can find the three minutes about the thing that affects their team rather than listening to all of it — which is the single biggest lever on internal completion rates.",
      },
      {
        title: "Full transcript and accessibility",
        detail:
          "A transcript as text, both for accessibility obligations and because some colleagues will always prefer to read. For internal comms this is usually a requirement rather than an enhancement.",
      },
      {
        title: "Consistent format and branding",
        detail:
          "A recognisable open, consistent levels and a predictable length. Internal shows lose listeners to inconsistency faster than public ones, because there is no discovery mechanism bringing new people in to replace them.",
      },
      {
        title: "Engagement reporting from your platform",
        detail:
          "Listener numbers as a share of headcount, and completion rates, drawn from whichever platform you use. Reported honestly, including when the answer is that a format is not working.",
      },
    ],
    footnote:
      "We do not write your internal communications strategy or your leadership messaging. We produce the audio and build the workflow around your security and approval requirements.",
  },
  howItWorks: {
    heading: "How an internal show gets set up and run",
    intro:
      "The security and platform decisions happen first, because in a large organisation they take the longest.",
    steps: [
      {
        title: "1. Security and platform review first",
        body: "What your IT and infosec functions require, where audio may be stored, which hosting platforms are approved, and how authentication works. Starting here is deliberate — this is the step that takes weeks in a large organisation, and discovering it after the format is designed is how internal podcast projects stall for a quarter.",
      },
      {
        title: "2. Define the audience and the job",
        body: "Who the show is for — everyone, one function, the deskless population — and what it is replacing or supplementing. An internal podcast aimed at 'all colleagues' with no specific job tends to be listened to by nobody in particular.",
      },
      {
        title: "3. Format and length, set against attention",
        body: "Fifteen to twenty minutes is where most internal shows land, because that is a commute or a task. Agreeing a maximum length up front is more useful than it sounds: internal content expands to fill whatever space it is given.",
      },
      {
        title: "4. Recording setup for non-broadcasters",
        body: "Your speakers are executives and colleagues, not presenters, and they are usually recording in meeting rooms or over video calls. We set up capture so the audio is recoverable, and brief speakers briefly — preparation improves an internal recording more than editing can.",
      },
      {
        title: "5. Edit, flag, approve",
        body: "Full edit, then the sensitivity pass with timestamps for your comms lead or legal reviewer. Approval before anything reaches the feed, on the same principle as any regulated content: removing it afterwards does not un-hear it.",
      },
      {
        title: "6. Publish privately and report",
        body: "Episode goes to the authenticated feed on schedule, with notes and transcript. Engagement reported as a share of headcount and completion rate rather than as raw downloads, which mean nothing against a fixed population.",
      },
    ],
  },
  objections: {
    heading: "What internal comms leads ask",
    items: [
      {
        question: "Have you produced an internal podcast before?",
        answer:
          "Not a private internal feed, and we would rather say that than stretch the truth. The closest work is The Assembly for Assemble You — a company whose product is audio learning for organisations — but that is a public, externally distributed show, not an internal one. What transfers is the weekly reliability and consistent branded format; what does not is private feed experience, and you should weigh that.",
      },
      {
        question: "How do we keep the feed genuinely private?",
        answer:
          "Through an authenticated podcast hosting platform, not an unlisted RSS URL — an obscure link is not access control, and it does not solve offboarding. The practical requirement is that access is tied to identity and can be revoked when someone leaves. We work within whichever approved platform your organisation selects rather than requiring our own.",
      },
      {
        question: "Will our IT and security teams sign this off?",
        answer:
          "That is their call, which is why the review happens first rather than last. What we can do is give them what they need early: which platform, where audio is stored, who has access to raw recordings, and how files move between us and you. Most objections come from those questions being answered late, not from the answers themselves.",
      },
      {
        question: "How do we measure whether anyone is listening?",
        answer:
          "As a share of headcount rather than as downloads, plus completion rate, both from your hosting platform. Completion is the more useful number — it tells you whether the length is right, and a sharp drop at eight minutes is a format problem rather than an interest problem. We will report it plainly when a format is not working.",
      },
      {
        question: "Will an internal podcast just sound like corporate messaging?",
        answer:
          "If it is scripted by committee, yes, and colleagues detect that faster than any external audience. What works is unscripted conversation with real people, lightly edited, including questions that are awkward. The organisations that get value from this are the ones willing to let a leader answer something difficult without a comms rewrite.",
      },
    ],
  },
  proof: {
    heading: "Adjacent work: workplace learning",
    // NB: The Assembly is a PUBLIC B2B marketing show, not an internal
    // podcast. The intro states this plainly. Replace when a real internal
    // comms client exists — see [TK] in the header comment.
    caseStudySlugs: ["assemble-you"],
    intro:
      "Stated plainly: this is not an internal podcast. The Assembly is a public, externally distributed weekly show for Assemble You, a company whose own product is audio learning for organisations. What it demonstrates is weekly reliability, a consistent branded open and close, and a show attached to a wider content operation that cannot slip. Private feed work is not something we have done yet.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What internal podcast production costs",
    body: "Corporate internal podcast production is priced on episode length and cadence, how much repair the source recordings need, whether transcripts are required, and how much approval workload sits in the chain. Setup is usually a separate initial piece covering the security review, platform configuration and format design. Tell us your organisation's size and constraints and we will send a figure.",
    caveat:
      "Internal shows are almost always monthly arrangements — the value is a reliable internal channel, which is a continuity commitment rather than a series of episodes.",
  },
  faqs: [
    {
      question: "What is a corporate internal podcast?",
      answer:
        "A podcast published to a private, authenticated feed for employees rather than to public platforms. It is typically used for leadership updates, all-hands recaps, function briefings and organisational storytelling — and it exists mainly to reach people who cannot attend live sessions or do not use the intranet.",
    },
    {
      question: "How do you set up a private podcast feed for a company?",
      answer:
        "Through a hosting platform that authenticates individual listeners and lets access be revoked on offboarding. An unlisted RSS URL is not sufficient — it cannot be withdrawn once shared. The platform choice is usually driven by what your IT and security functions will approve, so that review should happen before anything else.",
    },
    {
      question: "Why use a podcast for internal communications?",
      answer:
        "Because audio is the only format a deskless or distributed workforce can consume while working — driving between sites, on a ward, on a floor. For organisations where a large share of colleagues never open the intranet and cannot attend a live all-hands, it is frequently the only channel that reaches them at all.",
    },
    {
      question: "How long should an internal podcast episode be?",
      answer:
        "Fifteen to twenty minutes suits most, because that matches a commute or a task. Agreeing a maximum up front matters more than it sounds — internal content expands to fill available space, and a ninety-minute all-hands almost always makes a better eighteen-minute episode than a full-length one.",
    },
    {
      question: "How do you measure internal podcast engagement?",
      answer:
        "Listeners as a proportion of headcount, and completion rate. Raw download numbers are meaningless against a fixed population. Completion is the more diagnostic figure: a consistent drop-off at a particular point is telling you about length or structure rather than about interest in the subject.",
    },
    {
      question: "Is an internal podcast secure enough for sensitive updates?",
      answer:
        "It can be, with authenticated hosting and an approval step — but treat forwarding as possible regardless. We flag commercially sensitive or unannounced material with timestamps before publication so your comms lead decides what goes in. For genuinely restricted information, audio distributed to thousands of employees is the wrong medium.",
    },
    {
      question: "Can you work within our approved hosting and IT requirements?",
      answer:
        "Yes — we work inside whichever platform your organisation approves rather than requiring our own, and expect to answer questions about storage, access to raw recordings and file transfer early. Getting those in front of security at the start is what prevents a project stalling for a quarter at the end.",
    },
    {
      question: "Who should own employee podcast production internally?",
      answer:
        "Internal comms, usually with HR or engagement as a stakeholder rather than an owner. Employee podcast production needs someone who can get leadership into a recording room and approve what goes out — split those across teams and episodes stall waiting on a decision nobody owns.",
    },
  ],
  cta: {
    heading: "Talk to us about an internal show",
    body: "Tell us the size of your organisation, how much of the workforce is deskless or distributed, and what your IT and security review involves. We will come back with a setup plan and a figure.",
    buttonLabel: "Discuss an internal podcast",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "assemble-you",
    blogSlug: "podcast-analytics-metrics-that-matter",
    relatedServiceSlug: "done-for-you-podcast-production",
  },
  formTag: "internal-comms-podcast",
  schemaServiceName: "Corporate internal podcast production",
};
