import type { ServicePage } from "@/types/service-page";

/**
 * Industry page 2. Structurally about CREDIBILITY IN A LOW-TRUST MARKET.
 *
 * The argument: crypto has more badly produced podcasts per capita than any
 * other sector, so production quality reads as a proxy for whether the
 * project is serious. That is a genuinely sector-specific claim — it is not
 * true of biotech, where everyone's show sounds fine and the differentiator
 * is accuracy.
 *
 * Evidence discipline — read before editing:
 *   - Proof is Bitcoin Collective (204 episodes since 2021, weekly without a
 *     gap, 4.8/5 on Apple) and Bitcoin and the Long Game. Both real, both
 *     with verified figures in their case study files.
 *   - Those are BITCOIN shows. They are not DeFi, NFT, L2 or broader web3
 *     work. The page says so explicitly rather than implying a breadth of
 *     experience we do not have — a crypto founder will read a vague
 *     "web3 experience" claim as exactly the kind of thing their industry
 *     is full of, so the specificity is a sales asset, not a limitation.
 *   - No client of ours has been through a token launch or an exchange
 *     listing. Nothing here claims otherwise.
 */
export const cryptoPodcastProductionService: ServicePage = {
  slug: "crypto-podcast-production-service",
  group: "industry",
  primaryKeyword: "crypto podcast production service",
  supportingKeywords: [
    "crypto podcast agency",
    "web3 podcast production",
    "bitcoin podcast production",
    "blockchain podcast production company",
  ],
  buyer:
    "Founder or marketing lead at a crypto, Bitcoin or web3 company. Publishing into a fast news cycle, booking guests across every timezone, and competing for attention against a very large number of badly produced shows.",
  seo: {
    title: "Crypto Podcast Production Service",
    metaDescription:
      "A crypto podcast production service for teams on a fast news cycle. Remote guests in every timezone, quick turnaround, output that sounds serious.",
  },
  h1: "Crypto podcast production service",
  subheadline:
    "Most crypto shows sound like a call recording, because most are. In a market where nobody can verify your claims, the production quality is one of the few signals a listener can actually check.",
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
    heading: "Why crypto podcasts are harder to produce well",
    body: [
      "Three constraints stack up in this sector that rarely appear together anywhere else, and each one pushes against the others.",
      "The first is the news cycle. A conversation recorded on Tuesday about a protocol change, a regulatory ruling or a market move can be substantially out of date by Friday. That compresses the acceptable turnaround to a point where most production workflows break — a five-day edit is fine for an evergreen interview and useless for a show reacting to the week.",
      "The second is that your guests are everywhere. A single episode can involve a founder in Singapore, a researcher in Berlin and a host in the US, all on different equipment, different connections, and several of them recording in a hotel room. Remote capture is the normal case rather than the exception, and the quality floor of the raw material is lower and more variable than in almost any other sector.",
      "The third is the one that actually costs you. Crypto has an unusually high proportion of shows that are simply a screen recording of a video call, published unedited. That is a genuine opportunity, because it means the bar is low and clearing it is cheap — but it also means listeners in this space have learned to read production quality as a signal of whether a project is serious. Nobody can verify your team, your treasury or your roadmap from a podcast. They can hear whether you bothered.",
      "Which is the argument for treating web3 podcast production as its own problem rather than a generic one: the constraint is not just making it sound good, it is making it sound good fast, from bad source audio, every week, without the schedule slipping when the market gets busy.",
    ],
  },
  included: {
    heading: "What blockchain podcast production covers",
    intro:
      "Built around fast turnaround and difficult remote source audio, because those are the two things that actually decide whether the show survives.",
    items: [
      {
        title: "Full edit, audio and video",
        detail:
          "Content edit, cleanup, levelling and mastering. Video where the show is filmed, which is most of them now — the clips are where crypto audiences actually find shows.",
      },
      {
        title: "Heavy repair on remote source audio",
        detail:
          "Matching a guest on studio kit with a guest on laptop mic, cleaning up connection artefacts, and rescuing what can be rescued from a hotel-room recording. This is the single biggest technical difference from producing a studio show.",
      },
      {
        title: "Fast turnaround as a stated number",
        detail:
          "An agreed number of working days from receipt, set against your publishing schedule rather than quoted as a vague range. On a news-sensitive show the turnaround is part of the product.",
      },
      {
        title: "Short-form clips, cut for a sceptical audience",
        detail:
          "Vertical clips with burned-in captions, chosen for moments where a guest makes an actual argument. Hype clips underperform badly with crypto-native audiences, who have seen a great many of them.",
      },
      {
        title: "Episode descriptions with terminology handled correctly",
        detail:
          "Written by someone who knows what a hard fork, a rollup and self-custody are, so the notes don't quietly signal that nobody involved understands the subject.",
      },
      {
        title: "Chapters and full transcript",
        detail:
          "Chapters formatted per platform, and a transcript as real text — which matters more here than in most sectors, because technical terms and project names are what people search.",
      },
      {
        title: "Distribution across platforms",
        detail:
          "Publishing to your host, YouTube and the platforms your audience actually uses, with metadata completed properly rather than left to auto-populate.",
      },
      {
        title: "A consistent sound across a long run",
        detail:
          "The thing that separates a show at episode two hundred from one at episode ten: the same open, the same levels, the same feel, regardless of what the source audio was like that week.",
      },
    ],
    footnote:
      "We do not write your market commentary, advise on your token, or produce anything that constitutes financial promotion. We produce the show.",
  },
  howItWorks: {
    heading: "How a crypto show runs week to week",
    intro:
      "Designed so a busy news week speeds the show up rather than stopping it.",
    steps: [
      {
        title: "1. Show spec, including a turnaround commitment",
        body: "Format, length, intro and outro, how tightly to cut, and — specific to this sector — the turnaround you need and what happens when an episode is time-sensitive. Agreeing that up front is what stops it becoming a favour asked every week.",
      },
      {
        title: "2. Fix capture before fixing it in post",
        body: "We set up your recording so each speaker lands on a separate track at a sensible level, and give guests a short setup note. Remote guests are the weak link in every crypto show, and five minutes of guidance beforehand saves an hour of repair afterwards.",
      },
      {
        title: "3. Record, send, edit",
        body: "Files land with us and come back edited, mastered, with descriptions, chapters, transcript and clips. Time-sensitive episodes are flagged when you send them and move to the front of the queue.",
      },
      {
        title: "4. Clip selection against the news cycle",
        body: "Clips are chosen for what will still make sense in a week where possible, and flagged where they won't. A clip about a specific price level ages in days; a clip about how something works does not.",
      },
      {
        title: "5. Publish and distribute",
        body: "Straight to your host and channels, or files handed to your team. Metadata completed properly, because in a sector where discovery happens through search and clips, a half-filled episode record is a wasted one.",
      },
      {
        title: "6. Batch ahead where the format allows",
        body: "Evergreen episodes — explainers, founder interviews, deep dives — recorded ahead and held. That buffer is what keeps the feed publishing through a week where everyone is too busy to record, which in this sector is a predictable event rather than a risk.",
      },
    ],
  },
  objections: {
    heading: "What crypto teams ask",
    items: [
      {
        question: "Do you actually understand this space, or will we be correcting the show notes?",
        answer:
          "Bitcoin, genuinely and in depth — we produce The Bitcoin Collective, which has run over 200 episodes since 2021, and Bitcoin and the Long Game. So Bitcoin podcast production is proven work; broader web3, DeFi and NFTs we have not worked in, and we would rather say so than imply a breadth we do not have. Terminology in your area gets confirmed in the show spec rather than guessed at.",
      },
      {
        question: "Should we use a crypto podcast agency or a general producer?",
        answer:
          "Judge it on whether the specialism changes anything operational. A crypto podcast agency is worth choosing if it means a committed turnaround, real competence at repairing remote guest audio, and someone who knows the terminology. If it just means the website mentions blockchain, that is positioning rather than capability, and a strong general producer willing to learn your subject will serve you better.",
      },
      {
        question: "How fast can you turn an episode around?",
        answer:
          "Fast enough for a news-sensitive show, agreed as a specific number of working days rather than a range, and written into the arrangement. What matters more than the headline number is that it holds during a busy week — which is a capacity question, and the reason ongoing crypto shows are better served by reserved capacity than by booking episode to episode.",
      },
      {
        question: "Our guests record on terrible setups. Can you fix it?",
        answer:
          "Substantially, and it is most of the technical work on a show like this. Noise, hum, inconsistent levels and connection artefacts all respond well to repair. What cannot be fixed is a room with hard parallel walls or a recording that clipped at source — so we send guests a short setup note beforehand, which prevents far more than post-production can repair.",
      },
      {
        question: "Is a podcast worth it when our audience lives on X and Telegram?",
        answer:
          "The episode is rarely the point in this sector — the clips are, and the podcast is the thing that generates them. An hour with a founder produces a fortnight of short-form for the channels your audience actually uses, plus a searchable transcript. If you are only going to publish the full episode and nothing else, the economics are much weaker, and we would say so.",
      },
      {
        question: "Can you keep a weekly show running through a volatile market?",
        answer:
          "That is largely a scheduling design problem rather than a production one. Batching evergreen episodes ahead gives the feed a buffer to publish from when nobody has time to record — and busy markets are exactly when a show is most valuable and least likely to get made. The Bitcoin Collective has published weekly since 2021 without a gap.",
      },
    ],
  },
  proof: {
    heading: "Bitcoin shows we produce",
    caseStudySlugs: ["bitcoin-collective", "bitcoin-and-the-long-game"],
    intro:
      "Both are Bitcoin shows rather than broader web3 work, which is the honest description. The Bitcoin Collective has run 204 episodes since 2021 — weekly, without a gap — and holds 4.8/5 on Apple Podcasts.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What crypto podcast production costs",
    body: "Priced on episode length, whether the show is filmed, clip volume, and how fast you need turnaround — speed is a real cost driver, because reserved capacity is what makes a short turnaround reliable rather than lucky. Tell us your cadence and we will send a per-episode and monthly figure.",
    caveat:
      "News-sensitive shows almost always work better on a monthly arrangement than episode by episode, for the capacity reason above.",
  },
  faqs: [
    {
      question: "What does a crypto podcast production service handle?",
      answer:
        "The full production: edit, heavy repair on remote guest audio, mastering, episode descriptions using the sector's terminology correctly, chapters, transcript, short-form clips and distribution. The two things that differ from general production are turnaround speed and how much repair the source audio typically needs.",
    },
    {
      question: "How quickly can a crypto podcast episode be turned around?",
      answer:
        "Quickly enough to stay relevant to the news cycle, agreed as a specific number of working days and written into the arrangement rather than promised loosely. The harder question is whether that turnaround holds in a busy week, which depends on reserved capacity rather than goodwill.",
    },
    {
      question: "Do you produce Bitcoin podcasts specifically?",
      answer:
        "Yes — The Bitcoin Collective, over 200 episodes since 2021 with a 4.8/5 Apple rating, and Bitcoin and the Long Game. That is Bitcoin work specifically. We have not produced DeFi, NFT or broader web3 shows, and prefer to say so rather than imply experience we do not have.",
    },
    {
      question: "Can you fix bad audio from remote crypto guests?",
      answer:
        "Most of it. Noise, hum, mismatched levels between speakers and connection artefacts all repair well. Room reverb and audio that clipped at source cannot be fully recovered. Because of that we send guests a short setup note before recording — prevention here is worth considerably more than repair.",
    },
    {
      question: "Are podcast clips effective for crypto marketing?",
      answer:
        "They are usually the main return, more than the episode itself. One recorded hour yields a fortnight of short-form for X, YouTube and LinkedIn, plus a searchable transcript. Worth noting that hype-framed clips tend to underperform with crypto-native audiences — clips where a guest explains something concrete do better.",
    },
    {
      question: "Does podcast production quality actually matter in crypto?",
      answer:
        "More than in most sectors, because so many shows in the space are unedited call recordings. Listeners cannot verify your team or your roadmap from a podcast, so production standard becomes one of the few checkable signals of whether a project is serious. The bar is low, which makes clearing it unusually cheap.",
    },
    {
      question: "How do you keep a weekly crypto show publishing during busy periods?",
      answer:
        "By batching evergreen episodes ahead — explainers and founder interviews recorded in advance and held as a buffer. Volatile weeks are when a show is most valuable and least likely to get recorded, so the schedule has to assume they will happen rather than hope they won't.",
    },
  ],
  cta: {
    heading: "Talk to us about your crypto show",
    body: "Tell us your cadence, how time-sensitive your episodes are, and where your guests record from. We will come back with a turnaround commitment and a per-episode figure.",
    buttonLabel: "Discuss a crypto podcast",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "bitcoin-collective",
    blogSlug: "why-bitcoin-podcasts-work",
    relatedServiceSlug: "fintech-podcast-production-company",
  },
  formTag: "crypto-podcast-production",
  schemaServiceName: "Crypto podcast production service",
};
