import type { ServicePage } from "@/types/service-page";

/**
 * Industry page 4. Structurally about ACCURACY SURVIVING THE EDIT.
 *
 * DECISION — one page, not two. The brief allowed splitting "biotech podcast
 * production" and "life sciences podcast production" into separate pages if
 * the roster justified it. It does not: there is exactly one client here
 * (Sano Genetics / The Genetics Podcast). Splitting one case study across two
 * pages would leave both thin and put them in direct competition for near-
 * identical queries. So: H1 takes "biotech podcast production", and "life
 * sciences podcast production" runs as an H2 and through the body.
 *
 * Evidence discipline — read before editing:
 *   - The Genetics Podcast is real and strong: Sano Genetics, Dr Patrick
 *     Short, 248 episodes, 880,000+ downloads across 40 countries, Google's
 *     highest-ranked genetics podcast, guests from Cambridge researchers to
 *     biotech CEOs. All verified in its case study file.
 *   - It is the ONLY life sciences client. Do not pad this section with the
 *     wellness and biohacking shows (biohacking-beauty, complete-human,
 *     dialed-health, align-podcast). Those are consumer wellness. Presenting
 *     them as life sciences proof would read as padding to a pharma comms
 *     lead and would undermine the one genuinely excellent client here.
 *   - We have NOT run a medical-legal-regulatory (MLR) review cycle for a
 *     client. The review workflow below is written as how it is built and
 *     where it slots in — true and demonstrable — not as a track record.
 *     Same discipline as the fintech page. Do not "strengthen" it.
 */
export const biotechPodcastProduction: ServicePage = {
  slug: "biotech-podcast-production",
  group: "industry",
  primaryKeyword: "biotech podcast production",
  supportingKeywords: [
    "life sciences podcast production",
    "pharma podcast production company",
    "science podcast production service",
    "medical podcast production",
  ],
  buyer:
    "Communications, medical affairs or marketing lead at a biotech, pharma, genomics or life-sciences organisation. Publishing technical content that may need medical, legal or regulatory review, featuring researchers who are not broadcasters.",
  seo: {
    title: "Biotech Podcast Production",
    metaDescription:
      "Biotech podcast production for technical science. Accuracy protected through the edit, review built into the workflow, researchers made listenable.",
  },
  h1: "Biotech podcast production",
  subheadline:
    "Producing a show where a mis-cut sentence changes what the science says. We edit for clarity without editing away the qualifications that make a claim true.",
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
    heading: "Why life sciences podcast production is a different job",
    body: [
      "In most podcast editing, the goal of a cut is pace. You remove the hesitation, tighten the sentence, and the meaning survives because ordinary conversation carries a lot of redundancy. Scientific conversation does not work like that. The qualifying clause is frequently the most important part of the sentence, and it is almost always the part that sounds removable.",
      "A researcher says a therapy showed a significant effect in a small cohort, with a caveat about the control arm. Tighten that for pace and you can end up with a clean, confident sentence saying the therapy works. Nobody involved intended to overstate anything, the editor was doing what editors are trained to do, and the show has now published a claim the underlying data does not support. That is the central risk in this sector and it is entirely invisible to an editor without the domain literacy to notice.",
      "The second problem is the speakers themselves. The people worth interviewing in life sciences are researchers, clinicians and scientific founders — people whose expertise is real and whose broadcast instincts are usually not. They pause to think, restart sentences mid-clause, and qualify heavily because that is how careful scientific thinking sounds. Editing that into something listenable without turning them into a confident-sounding stranger is a genuine craft problem, and the temptation to over-edit is strong.",
      "Third, the output may have to pass review. Depending on what your organisation does and what the episode discusses, an episode can touch medical, legal and regulatory sign-off — and once an episode is in a feed it has been downloaded, so it cannot be quietly corrected afterwards. Any production process for this sector has to assume review exists and design around it rather than treat it as an obstacle discovered at the end.",
    ],
  },
  included: {
    heading: "What biotech podcast production covers",
    intro:
      "Standard production scope, plus the steps that exist because the content is technical and may be reviewed.",
    items: [
      {
        title: "Full edit, audio and video",
        detail:
          "Content edit, cleanup, levelling and mastering, video where filmed. Cut for listenability while leaving the thinking pauses that make a careful speaker sound careful rather than uncertain.",
      },
      {
        title: "An accuracy-preserving edit standard",
        detail:
          "The working rule is that qualifying language is not removable for pace. Where a cut would change what a claim asserts, it does not get made — and where we are unsure, it gets flagged rather than guessed at.",
      },
      {
        title: "A review-flag pass",
        detail:
          "Anything your medical, legal or regulatory reviewers will want to see — an efficacy claim, an off-label mention, a comparison to a competitor product, an unqualified generalisation — marked with timestamps so review is a short read rather than an hour of listening.",
      },
      {
        title: "Terminology and name checking",
        detail:
          "Gene names, compounds, trial phases, institutions and researcher credentials checked against the transcript before publication. Getting a gene symbol or a trial phase wrong in the show notes is a small error that costs disproportionate credibility with this audience.",
      },
      {
        title: "Episode descriptions written for a technical reader",
        detail:
          "Using the field's actual vocabulary, so the episode is findable by the mechanism, condition or technology discussed rather than only by the guest's name.",
      },
      {
        title: "Full transcript as text",
        detail:
          "Which matters more here than almost anywhere else: technical terms are what people search, and a transcript is what makes an hour of specialist conversation discoverable at all.",
      },
      {
        title: "Chapters and clips",
        detail:
          "Chapters per platform, and clips selected for moments that stand alone — checked so a clip does not strip the qualification that made the statement accurate in the episode.",
      },
    ],
    footnote:
      "We are a production company. We flag what a reviewer should see and protect accuracy through the edit — we do not provide medical, scientific or regulatory sign-off, and that judgement stays with your own reviewers.",
  },
  howItWorks: {
    heading: "How a science show is produced",
    intro:
      "Sequenced so review is designed in from the start rather than discovered after an episode is finished.",
    steps: [
      {
        title: "1. Establish the review chain",
        body: "Whether episodes need medical, legal or regulatory review, who does it, what they check for, and how long it takes. Some science shows need none of this; some need all of it. Establishing which up front decides the entire schedule.",
      },
      {
        title: "2. Agree the flag list and the edit standard",
        body: "What must be flagged for review, and what may never be cut for pace. Writing down the second one is unusual and worth doing — it is the instruction that prevents a well-meaning tightening pass from changing what the science says.",
      },
      {
        title: "3. Brief guests before recording",
        body: "Researchers who know which three areas the conversation will cover give sharper, more structured answers — which reduces both the editing burden and the number of moments needing review. A short brief is the highest-leverage step in the whole process.",
      },
      {
        title: "4. Record, with a note on capture",
        body: "Separate tracks per speaker, and advice on setup. Interviews with researchers are frequently remote and often recorded in offices or labs rather than studios, so getting capture right matters more than usual.",
      },
      {
        title: "5. Edit, then flag",
        body: "Full edit against the accuracy standard, then a pass marking everything a reviewer needs to see, timestamped. Terminology and names checked against the transcript at this stage.",
      },
      {
        title: "6. Review, changes, publish",
        body: "Reviewers work from the marked cut. Changes are implemented and re-mastered so removals leave no audible seam, clips are re-checked against the approved episode, and the episode publishes with the version trail recorded.",
      },
    ],
  },
  objections: {
    heading: "What comms leads in life sciences ask",
    items: [
      {
        question: "Will an editor without a science background misunderstand our content?",
        answer:
          "It is the right thing to worry about, and it is why the edit standard is written down rather than left to judgement. The rule that qualifying language is not removable for pace does not require the editor to evaluate the science — it requires them to recognise a qualification and leave it alone. Where meaning is genuinely unclear, it gets flagged to you rather than resolved by guesswork.",
      },
      {
        question: "Do you have experience with medical-legal-regulatory review?",
        answer:
          "Not a formal MLR cycle for a client, and we would rather say so plainly. What we do is build the workflow around whatever review your organisation requires — flagging what reviewers need to see, timestamping it, and implementing what they decide cleanly. The determinations themselves are your reviewers' to make, and a producer claiming otherwise would be a warning sign.",
      },
      {
        question: "Our researchers are not comfortable on microphone. Can you help?",
        answer:
          "Yes, and mostly before the recording rather than in the edit. A researcher who knows which areas will be covered performs markedly better than one being surprised. In the edit we remove genuine stumbles and restarts but leave the thinking pauses — over-editing a careful scientist into a fluent presenter makes them sound like someone else, and specialist audiences hear that as inauthentic.",
      },
      {
        question: "How technical should the show be?",
        answer:
          "As technical as the audience you actually want. The common failure in this sector is pitching to a general listener nobody is trying to reach, which loses the specialists without gaining anyone. If the people you care about are clinicians or researchers, the show should sound like it was made for them — the smaller number is the more valuable one.",
      },
      {
        question: "Can you handle a long-running catalogue consistently?",
        answer:
          "That is much of what we do. The Genetics Podcast has run to 248 episodes, and the requirement on a catalogue that size is that episode 248 sits correctly next to episode 12 — same loudness, same structure, same standard — which is a spec-and-process question rather than a creative one.",
      },
    ],
  },
  proof: {
    heading: "Life sciences work",
    caseStudySlugs: ["genetics-podcast"],
    intro:
      "The Genetics Podcast, for genomics company Sano Genetics, hosted by Dr Patrick Short — 248 episodes, over 880,000 downloads across 40 countries, and the highest-ranked genetics podcast on Google, with guests ranging from Cambridge researchers to biotech CEOs. It is our only life sciences client, which is a more useful thing to know than a longer list would be.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What biotech podcast production costs",
    body: "Priced on episode length, whether the show is filmed, clip volume, and how much review workload sits in the chain — a show requiring MLR review carries real additional production work in marked cuts and re-cuts after changes. Tell us the shape and we will send a per-episode and monthly figure.",
    caveat:
      "Long-running science catalogues almost always work better on a monthly arrangement, because consistency across hundreds of episodes is the actual deliverable.",
  },
  faqs: [
    {
      question: "What is different about producing a biotech podcast?",
      answer:
        "The edit has to preserve accuracy, not just pace. Qualifying language in scientific speech is frequently the part that makes a claim true and almost always the part that sounds removable, so the working standard is that it cannot be cut for tightness. Add a review step and terminology checking, and that is most of the difference.",
    },
    {
      question: "How do you make sure a science podcast stays accurate through editing?",
      answer:
        "By writing the standard down rather than relying on judgement: qualifying clauses are not removable for pace, and anything where a cut would change what is asserted gets flagged instead of guessed at. Gene names, compounds, trial phases and credentials are then checked against the transcript before publication.",
    },
    {
      question: "Can you work with medical, legal and regulatory review?",
      answer:
        "Yes — the workflow is built around whatever review your organisation requires. Reviewers receive a marked cut with the moments they care about timestamped, so they read minutes rather than listening to a full hour. We implement their decisions; we do not make them, and no producer should offer to.",
    },
    {
      question: "How do you interview researchers who aren't natural broadcasters?",
      answer:
        "Brief them properly and edit them lightly. Knowing which three areas the conversation covers produces sharper answers than being surprised does. In post we remove genuine stumbles and restarts but leave thinking pauses intact — editing a careful scientist into a fluent presenter makes them sound like a different person.",
    },
    {
      question: "Do you produce podcasts for pharma companies?",
      answer:
        "Our life sciences client is Sano Genetics, a genomics company, rather than a pharmaceutical manufacturer — worth stating plainly. Pharma podcast production shares the same constraints: technical accuracy through the edit, a specialist audience, non-broadcaster experts, and content that may need formal review before publication.",
    },
    {
      question: "Is medical podcast production different from science podcast production?",
      answer:
        "Mainly in how much review sits in the chain. Medical podcast production usually carries formal sign-off and stricter rules on efficacy and off-label discussion; science podcast production for a research audience often carries none. The editing standard is identical either way — qualifying language stays, and anything ambiguous gets flagged rather than cut.",
    },
    {
      question: "How technical should a life sciences podcast be?",
      answer:
        "Pitched at the audience you actually want to reach. Simplifying for a general listener who isn't your target tends to lose the specialists without winning anyone else — and in this sector the specialist audience is both smaller and considerably more valuable. The Genetics Podcast is technical and has 880,000+ downloads.",
    },
    {
      question: "Can podcast clips misrepresent scientific claims?",
      answer:
        "Easily, and it is the most common way a carefully reviewed episode still creates a problem. A statement can be accurate in the episode and misleading in a clip when the qualification sits outside the cut. Clips get checked against the approved episode for exactly this, not just selected for engagement.",
    },
  ],
  cta: {
    heading: "Talk to us about your science show",
    body: "Tell us what the show covers, who reviews your external content, and whether your speakers are researchers or communicators. We will come back with a production plan and where the review steps sit in it.",
    buttonLabel: "Discuss a biotech podcast",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "genetics-podcast",
    blogSlug: "how-to-write-podcast-show-notes",
    relatedServiceSlug: "fintech-podcast-production-company",
  },
  formTag: "biotech-podcast-production",
  schemaServiceName: "Biotech and life sciences podcast production",
};
