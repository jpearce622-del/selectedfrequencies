import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Fame vs Content Allies. Both sell a bundled B2B podcast programme with
 * guest outreach at the centre, which is exactly why people search them
 * together: the question is which programme, not whether.
 *
 * Verification. Content Allies re-read 2026-09-11 (headline, "52 ideal
 * partners or prospects", services, and the absence of pricing, team size
 * and founding year all confirmed). Fame's site returned HTTP 429 to every
 * fetch on 2026-09-11, so its facts carry the 2026-08-12 date from
 * fame-alternative.ts and are cited as such per source. `verifiedOn` is the
 * earlier of the two, because that is the honest reading of "verified".
 *
 * [TK: re-fetch fame.so — their stated scale figures (300+ podcasts, 100K+
 * episodes) and the growth-guarantee terms change; re-check before the next
 * refresh.]
 */
export const fameVsContentAllies: ComparisonPage = {
  slug: "fame-vs-content-allies",
  kind: "head-to-head",
  primaryKeyword: "Fame vs Content Allies",
  supportingKeywords: [
    "Fame podcast agency vs Content Allies",
    "Content Allies vs Fame",
    "Fame.so vs Content Allies",
    "Content Allies alternative Fame",
  ],
  seo: {
    title: "Fame vs Content Allies",
    metaDescription:
      "Fame vs Content Allies for B2B podcasts: a growth guarantee against an account-based programme, what each publishes, and when neither is the right buy.",
  },
  h1: "Fame vs Content Allies: which suits your show?",
  answerFirst:
    "Fame and Content Allies are both full-programme B2B podcast agencies with guest outreach at the centre. Fame's distinguishing move is a stated growth guarantee — 10% monthly growth or month seven free — and their own hosting and guest-to-deal tracking. Content Allies' is an account-based framing: one interview a week, fifty-two ideal partners or prospects a year. If audience growth is the target you'll be judged on, Fame have put terms around it. If the relationships from each interview are the point and downloads aren't, Content Allies frame the work that way from the start. Neither publishes prices.",
  disclosure:
    "This comparison is written by Selected Frequencies, a UK podcast production studio that competes with both companies on the production part of what they do and with neither on outreach or growth. Every fact about them is from their own websites and is cited with the date it was checked. We appear once, near the end, as a third option.",
  companies: [
    {
      name: "Fame",
      url: "https://www.fame.so/",
      positioning:
        "Describes itself as \"The B2B Podcast Agency That Guarantees 10% Monthly Growth\" and as \"the largest producer of B2B podcasts in the world (100+ shows live at any time)\". The offer spans guest booking, production, hosting, promotion and ROI tracking, with stated scale of 300+ podcasts produced and 100K+ episodes published.",
      strength:
        "A commercial commitment to an outcome, which is genuinely rare in this market — their stated terms are 10% monthly growth or month seven free. Add guest booking, their own hosting, guest-to-deal tracking and host coaching, and it's an unusually complete growth programme with a client roster including Salesforce, TikTok, Dell, Canva and Workday. If audience growth is what you're actually buying, very few suppliers will put terms around it at all.",
      tradeOff:
        "A guarantee at that scale implies a repeatable, standardised process — that's how you make such a commitment safely, and it means less room for an unusual format or a show that doesn't fit the model. Pricing isn't published, so fit and budget both need a call, and you're buying growth machinery whether or not audience size is your constraint.",
      sources: [
        { label: "fame.so homepage", url: "https://www.fame.so/", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Content Allies",
      url: "https://contentallies.com/",
      positioning:
        "Describes itself as \"The Top B2B Podcast Production Agency\" under the headline \"Drive Revenue with a B2B Podcast Agency\", offering white-glove full-service production covering strategy, guest outreach, production with dedicated engineers, publishing, social repurposing, podcast SEO and paid advertising support.",
      strength:
        "A genuinely hands-off programme with a clear account-based framing. Their stated proposition is that at one interview a week you build relationships with 52 ideal partners or prospects over twelve months — a concrete, testable way to think about a B2B show and considerably more useful than a download target. For a marketing team that needs the podcast to sit alongside its other channels with promotion attached, that's a coherent package.",
      tradeOff:
        "It's a bundled programme, so strategy, outreach and promotion are funded whether or not you need them — and they publish less than most competitors, with no pricing, team size or founding year stated, which makes it harder to compare them fairly before a call.",
      sources: [
        { label: "contentallies.com homepage", url: "https://contentallies.com/", checkedOn: "2026-09-11" },
        { label: "Content Allies services", url: "https://contentallies.com/services", checkedOn: "2026-09-11" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Core proposition", values: ["Guaranteed audience growth", "Relationships with ideal accounts"] },
    { label: "Stated commercial commitment", values: ["Yes — 10% monthly growth or month seven free", "None stated"] },
    { label: "Guest booking & outreach", values: ["Yes", "Yes"] },
    { label: "Own hosting platform", values: ["Yes — stated", "Not stated"] },
    { label: "Guest-to-deal / ROI tracking", values: ["Yes — stated", "Not stated as a named feature"] },
    { label: "Host coaching", values: ["Yes — stated", "Not stated"] },
    { label: "Podcast SEO & repurposing", values: ["Yes, via promotion", "Yes — SEO, social repurposing"] },
    { label: "Paid advertising support", values: ["Not stated", "Yes — stated"] },
    { label: "Published prices", values: ["No", "No"] },
    { label: "Team size", values: ["Not stated", "Not stated"] },
    { label: "Founding year", values: ["Not stated", "Not stated"] },
    { label: "Stated scale", values: ["300+ podcasts, 100K+ episodes, 100+ live shows", "Not stated"] },
    { label: "Based", values: ["Not stated on homepage", "Colorado Springs and Denver, Colorado"] },
    { label: "Named clients", values: ["Salesforce, TikTok, Dell, Canva, Workday", "Not listed on homepage"] },
  ],
  competitorWins: {
    heading: "Fame vs Content Allies: where each is genuinely stronger",
    body: [
      "Read side by side, these two are closer than most head-to-heads on this site. Both sell a programme: strategy, outreach, production and promotion as one purchase. The difference is what each is organised around.",
      "**Fame are stronger when you'll be measured on growth.** A guarantee with money behind it — 10% monthly growth or month seven free — is the kind of clause that survives a procurement conversation, because it converts a vague hope into a term someone can be held to. Their own hosting and guest-to-deal tracking close the loop from episode to pipeline in a way you'd otherwise assemble from three tools. And the stated scale, 100+ shows live at once, means whatever process they run has been run a great many times.",
      "**Fame are also the better fit for a marketing team that wants a dashboard.** ROI tracking and host coaching as stated features suggest a programme designed to be reported on, which matters if the podcast has to justify itself quarterly to someone who wasn't in the room when it was approved.",
      "**Content Allies are stronger when the relationships are the deliverable.** The fifty-two-interviews framing is a genuinely different way to buy a podcast: not \"how many people heard it\" but \"who did we spend an hour with\". For a firm selling something expensive to a narrow market, one of those conversations can be worth the year's fee, and Content Allies build the programme around that arithmetic rather than around a download curve.",
      "**They also state paid advertising support as part of promotion**, which Fame don't list on their homepage. If the plan is to put budget behind episodes on LinkedIn, that's already inside the Content Allies package.",
      "**Where each is weaker is the mirror image.** Fame's guarantee implies a standardised process, which is exactly what you don't want if your format is unusual. Content Allies publish the least of any agency compared on this site — no prices, no team size, no founding year — so you learn less before the call than you would elsewhere. Neither tells you what it costs, and that is the single biggest gap for anyone trying to compare them fairly.",
    ],
  },
  ourCase: {
    heading: "The third option: if you don't need outreach at all",
    body: [
      "Plenty of people arrive at this comparison and discover the honest answer is neither, because both are programmes and the thing they need is production.",
      "Both companies fund guest outreach, promotion and strategy inside the fee. That's right when your guest calendar is empty and the show has to be built from nothing. It's wrong when the show exists, the format works, guests are already saying yes, and the actual problem is that episodes take a week to come back or don't come back at all.",
      "For that situation, and to be transparent about who's writing this, that's what we sell. Rates are published — £110 per episode for audio editing, £165 for audio and video, £335 for full production including show notes, clips, artwork and publishing — with no minimum term, and you deal with the person editing the show.",
      "What we don't do is what each of these two is best at. No growth guarantee, because we don't control Apple's charts or Spotify's recommendations and nobody honestly does. No guest booking, no cold outreach, no paid promotion. If one of those is your constraint, one of the two companies above is your answer and we'd say so on a call.",
      "Where we're genuinely strong is holding a standard across a long catalogue in technical subjects: 189 episodes for The Genetics Podcast since taking it over at episode 65, and 122 for The Assembly since it launched. Both feeds are public. If you'd like the wider market first, our [roundup of B2B podcast production companies](/blog/best-podcast-production-companies-for-b2b) covers more of it.",
    ],
  },
  scenarios: [
    {
      situation: "Your podcast has a growth target in the marketing plan and someone will ask about it every quarter.",
      recommendation: "Fame",
      why: "A stated guarantee with terms, plus ROI tracking, gives you something to report against. That's the whole job of the programme.",
    },
    {
      situation: "You sell to a narrow, high-value market and the fifty best conversations matter more than fifty thousand listens.",
      recommendation: "Content Allies",
      why: "The programme is built around who you interview, not how many hear it. That's the right frame for account-based B2B, and it's the one they lead with.",
    },
    {
      situation: "Guests are booked, the format works, and the problem is that episodes aren't getting made.",
      recommendation: "A production studio — including us",
      why: "Neither programme addresses that, and both charge for outreach and promotion you'd leave unused. You need execution at a known per-episode price.",
    },
  ],
  checklist: {
    heading: "What to ask both before you decide",
    intro:
      "Neither agency publishes pricing, so the Fame vs Content Allies decision will turn on the answers to a short list. Send it to both in the same email.",
    items: [
      "What's the all-in monthly figure for my episode count, and what would move it?",
      "How much of that is production, and how much is outreach and promotion? The split tells you what unbundling would save.",
      "For Fame: how is the 10% monthly growth measured, over what window, and what exactly triggers month seven free?",
      "For Content Allies: how many confirmed guest bookings a month does 'one interview a week' translate to in practice, and what happens in a month with no yeses?",
      "Is outreach sent under my brand or yours, and do I approve messages first?",
      "Who owns the hosting account and the RSS feed, and what happens to them if I leave?",
      "Who edits my show week to week, and is it the same person every time?",
      "What's the minimum term and the notice period?",
      "Can I hear a full section from a client show with a similar format and recording setup?",
    ],
  },
  faqs: [
    {
      question: "Fame or Content Allies — which is better for a B2B podcast?",
      answer:
        "Neither in the abstract. Fame are organised around audience growth, with a stated guarantee, their own hosting and ROI tracking. Content Allies are organised around relationships, framed as fifty-two ideal partners or prospects a year from weekly interviews. Decide by which outcome you'll actually be judged on.",
    },
    {
      question: "Does either Fame or Content Allies publish pricing?",
      answer:
        "No. Neither states prices on their site as of the dates cited on this page. Content Allies also don't state team size or founding year. Both require a call to establish whether you're in range, so send both the same written scope and ask them to price against it.",
    },
    {
      question: "What is Fame's growth guarantee?",
      answer:
        "Their stated terms are 10% monthly growth or month seven free. How growth is measured, over what window, and what triggers the free month are the questions to ask before signing, since a guarantee is only as good as its definitions.",
    },
    {
      question: "Does Content Allies book podcast guests?",
      answer:
        "Yes. Guest outreach is listed as part of their production offer, and their headline proposition — 52 ideal partners or prospects over twelve months at one interview a week — is built on it.",
    },
    {
      question: "Which of the two handles paid promotion?",
      answer:
        "Content Allies state paid advertising support as part of their promotion services. Fame's homepage lists promotion and ROI tracking but doesn't state paid ads as a named service. Ask both directly if putting budget behind episodes is part of your plan.",
    },
    {
      question: "Do I need a full-programme agency at all?",
      answer:
        "Only if you need outreach, growth or strategy alongside production. If guests are booked and the format works, a production studio does the remaining part for considerably less per episode. Buying a programme to solve a capacity gap is the expensive route.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: ["outsourced-podcast-production", "done-for-you-podcast-production", "monthly-podcast-editing-retainer"],
    blogSlugs: ["best-podcast-production-companies-for-b2b", "podcast-production-agency-pricing", "b2b-podcast-cost-per-episode"],
    caseStudySlugs: ["genetics-podcast", "assemble-you"],
    comparisonSlugs: ["fame-alternative", "content-allies-alternative"],
  },
  cta: {
    heading: "If neither programme fits, we can price the production side",
    body: "If you've read this and concluded you don't need outreach or a growth guarantee, tell us your episode count and what needs doing to each one. You'll get a per-episode figure you can hold against both proposals.",
    buttonLabel: "Get a production quote",
  },
  formTag: "fame-vs-content-allies",
};
