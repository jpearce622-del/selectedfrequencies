import type { ServicePage } from "@/types/service-page";

/**
 * The UK page. Structurally about PROXIMITY AND CERTAINTY: same time zone,
 * same currency, a published rate card in pounds, and a producer whose
 * long-running clients are UK businesses a prospect can look up.
 *
 * Search Console shows real UK-qualified demand ("podcast production costs
 * UK", "UK B2B podcast agency") landing on pages that never say where we
 * are. This is the first page that does.
 *
 * Two honesty constraints specific to this page:
 *
 *  1. "Agency" appears in the keyword set because that is what people type.
 *     James is a solo producer. The page says so in the first section rather
 *     than letting the keyword imply headcount, and the argument is built on
 *     that being the better arrangement rather than a limitation.
 *
 *  2. No VAT claim in either direction. Whether we're VAT-registered is not
 *     something I've been told, and a wrong answer here is a wrong number on
 *     an invoice. Currency and location are stated; tax treatment is not.
 *
 * This is the only service page with a published "from" price, because it
 * is the only one whose primary query is explicitly about cost. The figure
 * is read from data/pricing.ts so it cannot drift from the rate card.
 */
export const podcastProductionUk: ServicePage = {
  slug: "podcast-production-uk",
  group: "engagement",
  primaryKeyword: "podcast production UK",
  supportingKeywords: [
    "UK podcast production company",
    "podcast production costs UK",
    "UK B2B podcast agency",
    "podcast editing services UK",
    "podcast producer UK",
  ],
  buyer:
    "A UK business or founder who has searched with a UK qualifier because they want a producer in their time zone, invoicing in pounds, with UK clients they can check. Often comparing against US agencies and unsure what the difference actually is.",
  seo: {
    title: "Podcast Production UK",
    metaDescription:
      "Podcast production UK: a published rate card in pounds, based in Northern Ireland, with UK shows running since 2021. Editing from £110 per episode.",
  },
  h1: "Podcast production in the UK, priced in pounds",
  subheadline:
    "A producer in your time zone, a rate card you can read before you email, and UK shows that have been running for years you can check.",
  sectionOrder: [
    "problem",
    "pricing",
    "included",
    "how-it-works",
    "objections",
    "proof",
    "faq",
  ],
  problem: {
    heading: "What a UK qualifier is actually asking for",
    body: [
      "If you've searched for podcast production with \"UK\" on the end, you probably aren't worried about quality. Good editing sounds the same from Belfast, Bristol or Boston. You're worried about the things around it: whether someone will be awake when you are, what the invoice will look like, and whether the case studies are businesses you've heard of.",
      "Most of what comes up for that search is either a US agency with a UK landing page, or a UK agency whose pricing is behind a form. Neither answers the question you had, which was some version of \"what does this cost and can I trust them with my show\".",
      "So this page answers it directly. Selected Frequencies is one person, James Pearce, based in Banbridge in Northern Ireland, about twenty-five minutes from Belfast. Not an agency, and deliberately not pretending to be one. The rate card is below in pounds, the clients are UK businesses whose feeds you can open, and the longest of them has been running since 2021.",
      "If you were searching for a UK B2B podcast agency specifically, the honest version is that you're choosing between a team with account management and a single producer who does the work himself. The second one is cheaper, faster to reach, and the person who edits episode 1 is the person who edits episode 100. That's the arrangement this page is offering.",
    ],
  },
  pricing: {
    mode: "from",
    heading: "Podcast production costs in the UK",
    amount: 110,
    unit: "per episode",
    body:
      "That's the editing-only rate. Audio and video production is £165 per episode and full production, which is everything from raw recording to a published and promoted episode, is £335. All three are on the rate card with what's included at each level, in pounds, with no form to fill in first. Prices are per episode with no minimum term, so a fortnightly show and a weekly one pay for exactly what they use.",
    caveat:
      "For comparison, UK agency retainers for a comparable scope commonly sit well above this, largely because you're also paying for account management and office overhead. Whether that's worth it depends on whether you want a team or a producer.",
  },
  included: {
    heading: "What's included at each level",
    intro:
      "Three scopes, on the same published rate card as every other client. Pick the one that matches what you'd rather not do yourself.",
    items: [
      {
        title: "Editing only, £110 per episode",
        detail:
          "Full episode edit, sound cleanup, levelling between speakers, and mastering to platform loudness. You handle notes and publishing.",
      },
      {
        title: "Audio and video production, £165 per episode",
        detail:
          "Everything in the edit plus the video cut, colour and framing consistency, and export presets for wherever you publish.",
      },
      {
        title: "Full production, £335 per episode",
        detail:
          "Edit, video, show notes, chapters formatted for Apple, Spotify and YouTube, thumbnails, short-form clips, and publishing to your host on your schedule.",
      },
      {
        title: "Clips as an add-on",
        detail:
          "Basic captioned clips at £10 each, or advanced clips with titles, b-roll and animated captions at £40. Priced per clip so you order what you'll actually post.",
      },
      {
        title: "Invoiced in pounds",
        detail:
          "Monthly, in GBP, from a UK business. No exchange-rate surprises and no wondering which country's invoicing rules apply.",
      },
      {
        title: "Same working day",
        detail:
          "Files sent in the morning are looked at the same morning. Not a formal SLA, just what it's like to work with someone in your time zone.",
      },
    ],
    footnote:
      "Everything on this page is the standard rate card, not a UK-specific price. The point of the page is to put the numbers where a UK search can find them.",
  },
  howItWorks: {
    heading: "How it works from here",
    steps: [
      {
        title: "Say what the show is",
        body:
          "Format, length, how often, whether it's filmed. Enough to pick a scope from the three above. If you don't know yet, say that and it's a shorter conversation.",
      },
      {
        title: "A written spec, once",
        body:
          "Tone, structure, how tightly to cut, what to leave alone. It takes one call and it's the reason episode 40 sounds like episode 4.",
      },
      {
        title: "Recordings in, episodes out",
        body:
          "You drop raw files in a shared folder. Finished episodes come back on an agreed turnaround, usually three working days, with everything your scope includes.",
      },
      {
        title: "Month to month",
        body:
          "Invoiced monthly for the episodes delivered. No minimum term, and if you want to pause, you pause.",
      },
    ],
  },
  objections: {
    heading: "What UK clients ask before they start",
    items: [
      {
        question: "Does being in Northern Ireland make any practical difference?",
        answer:
          "Only good ones. It's the UK for time zone, currency and business norms, so working with a client in Manchester or London is the same as working with one down the road. The base is a home studio rather than premises, which is why the rate card is what it is: nobody is paying for an office they'll never visit.",
      },
      {
        question: "You're one person. What happens when you're ill or on holiday?",
        answer:
          "Straight answer: I tell you in advance, and we plan the schedule around it. Holidays are known weeks ahead and a spare episode is banked. Illness is rarer and shorter. What you don't get is the agency version where a different junior picks up your show each month and nobody tells you. The shows that have been with me for years have been through several summers and several colds.",
      },
      {
        question: "Why not a UK agency with a proper team?",
        answer:
          "If you want account management, a Slack channel, and someone to run a quarterly review, an agency is the right buy and I'd rather say so. If you want the person who edits your show to be the person you email, and to pay for production rather than for the layer between you and production, this is the cheaper and more direct version of the same output.",
      },
      {
        question: "Can I see UK shows you actually produce?",
        answer:
          "Yes, and the useful thing is that the feeds are public. The Genetics Podcast, produced for Sano Genetics in Cambridge, has been with me since episode 65 in June 2021. The Assembly, for Assemble You, since it launched in 2023. Open either feed and the publication dates tell you more than a testimonial would.",
      },
      {
        question: "Do you work with businesses outside the UK too?",
        answer:
          "Yes, regularly, in the US and Europe. This page exists because a UK search deserves a UK answer, not because the work is UK-only. Most of it runs asynchronously through a shared folder, so time zones matter less than the search suggests.",
      },
    ],
  },
  proof: {
    heading: "UK shows, still running",
    intro:
      "Two of the longest-running shows on the books are UK businesses, and both feeds are public.",
    caseStudySlugs: ["genetics-podcast", "assemble-you", "bitcoin-collective"],
  },
  faqs: [
    {
      question: "How much does podcast production cost in the UK?",
      answer:
        "On this rate card, editing is £110 per episode, audio and video production is £165, and full production including show notes, clips and publishing is £335, all in pounds with no minimum term. UK agency retainers for a comparable scope commonly cost considerably more, because they include account management and overhead alongside the production itself.",
    },
    {
      question: "Where is Selected Frequencies based?",
      answer:
        "Banbridge, Northern Ireland, around twenty-five minutes from Belfast. It's a home studio rather than premises, and the work runs remotely with clients across the UK, the US and Europe.",
    },
    {
      question: "Is a UK podcast producer better than a US one for a UK show?",
      answer:
        "Not for the editing itself, which is the same craft anywhere. The practical differences are time zone, invoicing in pounds, and being able to check the producer's UK clients yourself. Those matter more than people expect once the show is running weekly and something needs a same-day answer.",
    },
    {
      question: "What's the difference between a UK podcast agency and a freelance producer?",
      answer:
        "An agency gives you a team, account management and usually a retainer. A producer gives you the person doing the work and a per-episode price. The output is comparable; the price and the directness aren't. Which one is right depends on whether you want to manage a relationship or just receive finished episodes.",
    },
    {
      question: "Do you charge in pounds?",
      answer:
        "Yes. Everything is invoiced monthly in GBP from a UK business, and the rate card is published in pounds rather than converted from dollars.",
    },
    {
      question: "How quickly can a UK show get started?",
      answer:
        "Usually within a fortnight. One call to write the show spec, then the first episode. If you already have a show running, it's often faster, because the format exists and the job is to match it rather than design it.",
    },
  ],
  cta: {
    heading: "Tell me about the show",
    body:
      "Format, cadence, whether it's filmed, and whether it's running yet. You'll get a scope from the rate card above and a straight answer on whether it's a good fit, usually within a working day.",
    buttonLabel: "Get a UK quote",
    note: "Or open one of the feeds above first. That's what they're there for.",
  },
  internalLinks: {
    caseStudySlug: "genetics-podcast",
    blogSlug: "how-much-does-podcast-production-cost-per-episode",
    relatedServiceSlug: "outsourced-podcast-production",
  },
  formTag: "uk-podcast-production",
  schemaServiceName: "Podcast production in the UK",
};
