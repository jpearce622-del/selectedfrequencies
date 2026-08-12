import type { ServicePage } from "@/types/service-page";

/**
 * The first of the industry-vertical pages. Structurally about SIGN-OFF.
 *
 * The organising argument is that in financial services the edit is not the
 * bottleneck — the approval chain is. Every other podcast page on this site
 * argues about production quality or time; this one argues about the review
 * cycle sitting between a finished episode and a published one, because that
 * is the thing a fintech marketing lead is actually managing.
 *
 * Evidence discipline — read before editing:
 *   - The proof is VERMEG / FinTalk. Real client, real scope (multi-cam 4K,
 *     artwork, descriptions, distribution), verified company facts. See
 *     content/case-studies/fintalk-vermeg.ts for exactly what was confirmed
 *     and how.
 *   - We have NOT run a formal FCA financial-promotions review or a second-
 *     line compliance workflow for a client. Nothing on this page claims we
 *     have. The compliance-review section is written as how the workflow is
 *     built and where it slots in — which is true and demonstrable — not as
 *     a track record. Do not "strengthen" it into a claim of experience.
 *   - No metrics, no testimonial, no episode count for FinTalk: the show has
 *     been unpublished and nothing could be verified. TK markers below.
 *
 * Split enforced against the general pages:
 *   - outsourced-podcast-production.ts argues the business case for a B2B
 *     company having a show at all. This page assumes that decision is made
 *     and argues about surviving a regulated approval process.
 *   - podcast-production-for-saas-companies.ts is the other vertical-ish
 *     page. A fintech IS often a SaaS business, so the boundary is drawn on
 *     the constraint, not the company: generic B2B software buyer -> SaaS
 *     page; regulated financial services with a compliance function ->
 *     here. The two link to each other to route that choice.
 */
export const fintechPodcastProductionCompany: ServicePage = {
  slug: "fintech-podcast-production-company",
  group: "industry",
  primaryKeyword: "fintech podcast production company",
  supportingKeywords: [
    "fintech podcast agency",
    "financial services podcast production",
    "podcast production for fintech companies",
    "regtech podcast production",
    "banking podcast production",
  ],
  buyer:
    "Marketing, content or comms lead at a fintech, payments, RegTech or financial software company. Has a compliance function that reviews external content, and a legal or second-line sign-off step they cannot skip.",
  seo: {
    title: "Fintech Podcast Production Company",
    metaDescription:
      "A fintech podcast production company that builds compliance review into the workflow. Regulated-sector vocabulary handled correctly, sign-off planned for.",
  },
  h1: "Fintech podcast production company",
  subheadline:
    "Podcast production for financial services, where the edit is the easy part and the approval chain is the real schedule. We produce the show around your compliance review rather than around it.",
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
    heading: "Why financial services podcasts stall",
    body: [
      "Almost every fintech podcast that dies does so for the same reason, and it is not production quality. It is that nobody designed the approval process before the first episode, so review became something that happened to each episode after the fact — a finished file sitting in a queue behind someone's actual job, then a note asking for a change that requires a re-edit, then a publication date that has quietly moved twice.",
      "This is the constraint that makes financial services different from ordinary B2B content. A blog post can be edited after publication. A podcast episode cannot: once it is in a feed it has been downloaded, and pulling it does not un-download it. That asymmetry is why compliance teams are more cautious about audio than about anything else marketing produces, and they are right to be.",
      "There is a second problem underneath it, and it is the one that quietly costs you the audience. Your listener is a compliance officer, a head of regulatory reporting, an operations lead — someone who already knows the subject better than the average marketer producing content about it. A show aimed at that person cannot simplify its way to clarity. The simplification is exactly what a specialist hears as incompetence, and the credibility of the vendor behind the show goes with it.",
      "So the brief is unusually tight on both sides at once. The episode has to be accurate enough to survive second-line review, and specific enough that a practitioner respects it. Most general podcast agencies are set up to solve neither, because most content does not have to pass a regulator-shaped test before it goes out.",
      "That is the whole argument for treating financial services podcast production as its own discipline. The editing craft is the same craft. What differs is everything wrapped around it — who has to approve the episode, what they are checking for, how a removal gets made without leaving a seam, and whether the clips were checked against the approved cut or the raw recording. Get that wrapper wrong and a well-edited show still fails.",
    ],
  },
  included: {
    heading: "What podcast production for fintech companies covers",
    intro:
      "The standard production scope, plus the steps that only exist because the output is regulated.",
    items: [
      {
        title: "Full episode edit, audio and video",
        detail:
          "Content edit, sound cleanup, levelling and mastering. Multi-camera where the show is filmed — which is most financial services shows, because the clips are the distribution.",
      },
      {
        title: "A compliance-flag pass on every episode",
        detail:
          "We go through each episode marking anything your reviewer will want to look at: a performance figure, a forward-looking statement, a product claim, a named competitor, an unqualified recommendation. Delivered as a timestamped list so review is a short read rather than an hour of listening.",
      },
      {
        title: "A review cut built for sign-off",
        detail:
          "Your compliance and legal reviewers get a version with those moments marked, so they can go straight to the eleven seconds that matter. This is the single biggest lever on how long approval takes.",
      },
      {
        title: "Change implementation and a clean re-cut",
        detail:
          "When review comes back with removals, we make them and re-master so the cut is seamless. A removal that leaves an audible seam draws attention to exactly the passage you took out.",
      },
      {
        title: "An auditable version trail",
        detail:
          "Which cut was approved, by whom, and what changed between versions. Financial services organisations are usually asked this at some point; reconstructing it afterwards from a chat thread is unpleasant.",
      },
      {
        title: "Episode descriptions in sector vocabulary",
        detail:
          "Written for an audience that searches by framework and regulation rather than by guest name — regulatory reporting, collateral management, RegTech — because those are the terms this listener actually types.",
      },
      {
        title: "Short-form clips, compliance-checked",
        detail:
          "Clips go through the same flag pass as the episode. A compliant statement can become a non-compliant one when the qualifying clause is thirty seconds outside the clip, and that is the most common way a reviewed show still produces a problem.",
      },
      {
        title: "Chapters, transcript and distribution",
        detail:
          "Chapters formatted per platform, a full transcript as real text, and publishing to your host and channels — or files handed over if your team keeps distribution in-house.",
      },
    ],
    footnote:
      "We are a production company, not a compliance consultancy. We flag what a reviewer will want to see and build the workflow around their decision — we do not make the regulatory call, and any producer telling you they will should worry you.",
  },
  howItWorks: {
    heading: "How the production runs, with review built in",
    intro:
      "The sequencing is the point. Compliance is designed into the schedule at the start rather than discovered at the end.",
    steps: [
      {
        title: "1. Map the approval chain first",
        body: "Before any format conversation: who reviews, in what order, what they are each checking for, how long they realistically take, and who can say no last. This is the step that gets skipped, and skipping it is why fintech shows publish late. It also tends to be the first time anyone has written the chain down.",
      },
      {
        title: "2. Agree what needs flagging",
        body: "Your compliance function tells us what to watch for — performance claims, forward-looking statements, anything touching a live product, competitor mentions, specific regulatory framework references. That list becomes the standing checklist applied to every episode, so review gets more predictable rather than less over time.",
      },
      {
        title: "3. Brief guests before recording",
        body: "The cheapest place to fix a compliance problem is before it is said. Guests and internal speakers get a short brief on the subjects that need care, which is far more effective than removing the same category of statement in post every week.",
      },
      {
        title: "4. Record, then edit to the checklist",
        body: "Full edit, and simultaneously the flag pass against the agreed list. The output is a finished episode plus a timestamped sheet of everything your reviewer should look at.",
      },
      {
        title: "5. Review, in one pass rather than three",
        body: "Compliance and legal review the marked cut together where your process allows it. Sequential review is what turns a two-day approval into a fortnight, and running the reviewers in parallel on the same marked version is usually the single change that fixes a slow chain.",
      },
      {
        title: "6. Changes, re-master, publish",
        body: "Removals implemented, the audio re-mastered so the cut is invisible, clips re-checked against the approved episode, then published to schedule with the version trail recorded.",
      },
    ],
  },
  objections: {
    heading: "What fintech marketing leads ask",
    items: [
      {
        question: "Do you know financial services, or will we be teaching you the vocabulary?",
        answer:
          "We have produced in the sector — the fullest example is FinTalk for VERMEG, a RegTech and FinTech show covering material like how Basel 3.1 changes regulatory reporting obligations, produced as a multi-camera 4K video edit with artwork, episode descriptions and distribution. RegTech podcast production is unusually unforgiving about this: terms like collateral management, regulatory reporting and post-trade have to be handled as the specific things they are rather than as generic finance words, and a listener who works in it can tell within one episode which one you are doing.",
      },
      {
        question: "Can you work inside our compliance process rather than around it?",
        answer:
          "That is what the workflow above is for. Worth being precise about the boundary though: we build the review process, flag what your reviewer needs to see, and implement what they decide. We do not make regulatory determinations, and we are not a substitute for your second line. If a producer offers to sign off financial promotions for you, that is a reason to be careful, not reassured.",
      },
      {
        question: "How much does compliance review add to the timeline?",
        answer:
          "Less than teams expect once the chain is mapped and reviewers work from a marked cut, and far more than expected if neither is true. Most of the delay in a regulated approval is not the reviewing — it is sequential handoffs and reviewers listening to a full hour to find three moments. Both are fixable, and fixing them is the first thing we do.",
      },
      {
        question: "What if compliance kills an episode after we have recorded it?",
        answer:
          "It happens, and the process should assume it will. Guest briefing prevents most of it, the flag pass catches the rest before publication rather than after, and recording ahead of schedule means a pulled episode moves the running order instead of leaving a gap in the feed. An episode that never publishes is a far better outcome than one that has to be retracted.",
      },
      {
        question: "Should we use a specialist or a general podcast agency?",
        answer:
          "Use whoever will engage seriously with your approval chain. A fintech podcast agency is only worth choosing over a good general producer if the difference shows up in the workflow — a flag pass, a marked review cut, clip checking against the approved episode. If a specialist cannot describe how those work, the specialism is positioning rather than process, and you would be better off with a strong general producer who is willing to learn your review process properly.",
      },
      {
        question: "Our subject matter is genuinely dry. Will anyone listen?",
        answer:
          "The specialist audience is smaller and considerably more valuable, so the honest answer is that you should not measure this show on download volume. A few hundred listeners who are heads of regulatory reporting at institutions you sell to is a better outcome than ten thousand general listeners, and pitching the content down to chase the larger number tends to lose you both.",
      },
    ],
  },
  proof: {
    heading: "Financial services work",
    caseStudySlugs: ["fintalk-vermeg", "loc-tax"],
    intro:
      "VERMEG supplies banking, capital markets and insurance software — collateral management, post-trade processing and regulatory reporting — to over 550 clients across 40 countries, including systems used by 23 central banks. FinTalk was its RegTech show, produced multi-camera in 4K.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What fintech podcast production costs",
    body: "Priced on episode length, whether the show is filmed and with how many cameras, clip volume, and how much review workload the approval chain carries — that last one genuinely moves the number, because a marked review cut and a re-cut after changes are real production work. Tell us the shape and we will send a per-episode and monthly figure.",
    caveat:
      "Regulated shows usually run monthly rather than per episode, because the compliance checklist and the reviewers' familiarity with the process are what make approval faster over time.",
  },
  faqs: [
    {
      question: "What does a fintech podcast production company do differently?",
      answer:
        "It produces around your approval chain rather than treating review as an afterthought. Practically that means a compliance-flag pass on every episode, a review cut with those moments timestamped for your reviewer, clean re-cuts after changes, and a version trail. The editing itself is standard; the workflow wrapped around it is what differs.",
    },
    {
      question: "Can a podcast be compliant with financial promotions rules?",
      answer:
        "Yes, but the determination is your compliance function's to make, not your producer's. What production can do is make their job fast and reliable: flag performance figures, forward-looking statements and product claims with timestamps, brief guests beforehand, and implement removals cleanly. Any agency offering to sign off financial promotions for you is overreaching.",
    },
    {
      question: "How do you handle compliance review in podcast production?",
      answer:
        "The approval chain gets mapped before the first recording — who reviews, in what order, checking for what. Each episode is then edited and simultaneously flagged against your agreed checklist, and reviewers receive a marked cut so they can go straight to the moments that matter rather than listening to a full hour.",
    },
    {
      question: "Do you produce podcasts for banks and financial institutions?",
      answer:
        "We have produced in financial software and RegTech — FinTalk for VERMEG, whose systems are used by 550+ financial institutions and 23 central banks. Banking podcast production shares the same constraints: a specialist audience, regulated output, a second-line review step, and subject matter where losing a qualifying clause changes the meaning of the sentence.",
    },
    {
      question: "What happens if a guest says something non-compliant on air?",
      answer:
        "It gets flagged with a timestamp and removed before publication if your reviewer says so. That is standard on every episode rather than something you request. Guest briefing before recording prevents most of it, which is considerably cheaper than removing the same category of statement in post every week.",
    },
    {
      question: "Are podcast clips a compliance risk?",
      answer:
        "They are the most common one, and often the least checked. A statement that is compliant in the episode can stop being compliant in a clip when the qualifying clause sits thirty seconds outside the cut. Clips go through the same flag pass as the episode, checked against the approved version rather than the raw recording.",
    },
    {
      question: "How long does approval usually take for a regulated podcast?",
      answer:
        "It depends far more on how the chain is structured than on the content. Sequential reviewers working from a full episode is what turns two days into two weeks; parallel reviewers working from a marked cut is what brings it back down. Mapping that chain up front is the first step of the engagement for exactly this reason.",
    },
  ],
  cta: {
    heading: "Talk to us about your financial services show",
    body: "Tell us who reviews your external content and what they check for, and we will come back with a production plan built around that chain — including where the review steps sit and what they do to the schedule.",
    buttonLabel: "Discuss a fintech podcast",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "fintalk-vermeg",
    blogSlug: "podcast-seo-guide",
    relatedServiceSlug: "podcast-production-for-saas-companies",
  },
  formTag: "fintech-podcast-production",
  schemaServiceName: "Fintech podcast production company",
};
