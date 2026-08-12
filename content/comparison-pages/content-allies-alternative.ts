import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Content Allies alternative.
 *
 * Facts from contentallies.com, read 2026-08-12:
 *   - Positions as "The Top B2B Podcast Production Agency" — site title
 *   - White-glove full-service, described as handling everything except the
 *     host's participation — homepage
 *   - Services: strategy aligned to business objectives, full production
 *     including guest outreach, promotion via social repurposing, podcast
 *     SEO and paid ads — homepage / services
 *   - Offices listed in Colorado Springs, CO and Denver, CO — homepage
 *   - Key claim, quoted: "At one interview per week, our podcast agency will
 *     help you build relationships with 52 ideal partners or prospects
 *     through podcast interviews over the next 12 months."
 *   - A "Podcasting for Meta" case study is linked from the homepage
 *
 * ⚠ RESEARCH LIMITATION, disclosed on the page itself: Content Allies
 * publish noticeably less than the other agencies compared on this site.
 * Their homepage shows 30+ client logos but does NOT name them in text; team
 * size and founding year are not stated; pricing is not published. The page
 * says this plainly rather than filling the gaps, and the comparison table
 * uses "Not published" for all of it.
 *
 * [TK: verify — team size, founding year, minimum term. None stated on the
 * homepage, services or about pages as read on 2026-08-12.]
 * [TK: verify — whether the 30+ homepage logos are named anywhere on their
 * site. If they are, the "named clients" row can be filled in.]
 *
 * Do NOT infer client names from logo images. Reading a logo off a page and
 * asserting it as a client relationship is exactly the kind of unverifiable
 * claim these pages must not make.
 */
export const contentAlliesAlternative: ComparisonPage = {
  slug: "content-allies-alternative",
  kind: "alternative",
  primaryKeyword: "Content Allies alternative",
  supportingKeywords: [
    "Content Allies vs Selected Frequencies",
    "Content Allies pricing",
    "alternatives to Content Allies",
    "Content Allies competitors",
    "is Content Allies worth it",
  ],
  seo: {
    title: "Content Allies Alternative",
    metaDescription:
      "An honest Content Allies alternative comparison: where their full-service ABM model wins, where a production studio costs less, and how to decide.",
  },
  h1: "Content Allies alternative: an honest comparison",
  answerFirst:
    "Content Allies run a full-service B2B programme where the host's only job is to turn up — strategy, guest outreach, production and promotion are all theirs, and the show is framed as a relationship channel aimed at 52 target accounts a year. If you want one supplier accountable for the whole thing and a marketing team that needs the podcast to report alongside its other channels, that is the shape you want. If your show already runs and you want the production done well for less, without buying strategy and promotion alongside it, a production studio is the cheaper answer. Most people searching for a Content Allies alternative want the second.",
  disclosure:
    "We're Selected Frequencies, a production studio — one of the two options here, so weigh this accordingly. Everything about Content Allies comes from their own site. They publish less detail than most agencies we've looked at, and rather than fill the gaps with guesses we've marked them \"not published\" and said so openly below.",
  companies: [
    {
      name: "Content Allies",
      url: "https://contentallies.com/",
      positioning:
        "Describes itself as \"The Top B2B Podcast Production Agency\", offering a white-glove full-service programme covering strategy, production including guest outreach, and promotion through social repurposing, podcast SEO and paid ads. Based in Colorado Springs and Denver, Colorado.",
      strength:
        "A genuinely hands-off programme with a clear account-based framing. Their stated proposition is that at one interview a week you build relationships with 52 ideal partners or prospects over twelve months — which is a concrete, testable way to think about a B2B show, and considerably more useful than a download target. For a marketing team that needs the podcast to sit alongside its other channels with promotion attached, that's a coherent package.",
      tradeOff:
        "It's a bundled programme, so strategy, outreach and promotion are funded whether or not you need them — and they publish less than most competitors, with no pricing, team size or founding year stated, which makes it harder to compare them fairly before a call.",
      sources: [
        { label: "contentallies.com homepage", url: "https://contentallies.com/", checkedOn: "2026-08-12" },
        { label: "Content Allies services", url: "https://contentallies.com/services", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Selected Frequencies",
      url: "https://selectedfrequencies.com/",
      positioning:
        "A production studio working on shows that already have a host and a format. Audio and video editing, mastering, show notes, chapters, transcripts, clips and publishing, on a published per-episode rate card with no minimum term.",
      strength:
        "Transparency and unit cost. Rates are published, so you can budget before speaking to anyone, and you work directly with the person editing the show. Proven on long catalogues — 248 episodes for The Genetics Podcast, 204 weekly without a gap for The Bitcoin Collective.",
      tradeOff:
        "We produce; we don't market. No guest outreach, no paid distribution, no attribution reporting and no strategy function. If your show needs an audience built rather than episodes made, we are not the supplier for that.",
      sources: [
        { label: "Our published rate card", url: "https://selectedfrequencies.com/services", checkedOn: "2026-08-12" },
        { label: "Our case studies", url: "https://selectedfrequencies.com/work", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Core model", values: ["Full-service B2B programme with an ABM framing", "Production and finishing only"] },
    { label: "Published prices", values: ["Not published", "Yes — £110, £165 and £335 per episode by tier"] },
    { label: "Minimum commitment", values: ["Not published", "None. Per-episode, or monthly with notice"] },
    { label: "Guest outreach", values: ["Yes — part of the programme", "No"] },
    { label: "Strategy", values: ["Yes", "No"] },
    { label: "Paid promotion / ads", values: ["Yes", "No"] },
    { label: "Podcast SEO & repurposing", values: ["Yes", "Show notes, chapters, transcripts and clips"] },
    { label: "Full production", values: ["Yes", "Yes"] },
    { label: "Video", values: ["Yes", "Yes"] },
    { label: "Works inside your own tools", values: ["Not published", "Yes — Slack, Notion, Monday, WhatsApp or email"] },
    { label: "Ad-hoc advice outside production", values: ["Not published", "Included — distribution, analytics, monetisation"] },
    { label: "Team size", values: ["Not published", "Small studio — direct with the editor"] },
    { label: "Founded", values: ["Not published", "See our case studies"] },
    { label: "Based", values: ["Colorado Springs and Denver, CO", "Northern Ireland — remote"] },
  ],
  competitorWins: {
    heading: "Where Content Allies is the better choice",
    body: [
      "Three situations where they're clearly the right call, and one framing of theirs that's genuinely worth stealing whoever you hire.",
      "**If you want to do nothing but show up, they're built for it.** Their stated proposition is a white-glove service handling everything except the host's participation. That includes guest outreach, which is the hardest recurring task on a B2B show and the reason most of them stop. We don't do outreach at all. If your podcast has stalled because nobody has time to fill the calendar, hiring a production studio fixes the visible problem and not the actual one.",
      "**If the show has to justify itself in marketing reporting, they've built more of an answer.** Podcast attribution is genuinely hard, and most production companies — us included — will tell you honestly that it mostly lives in your own analytics. Content Allies attach promotion, podcast SEO and paid ads to the production, which gives a marketing team something to report against. If you're accountable to a CMO who wants the podcast in the same dashboard as paid search, that's worth paying for.",
      "**If you want one supplier accountable for the whole channel,** a bundled programme is simply less work than assembling production plus promotion plus a freelancer for outreach. The coordination cost of running three suppliers is real, and it lands on whoever inside your company is least able to absorb it.",
      "**And the framing is good.** Their line — that at one interview a week you build relationships with 52 ideal partners or prospects over twelve months — is a better way to think about a B2B podcast than a download target, and it's true regardless of who produces the show. If you take nothing else from this page, take that: judge the show on who you got into the room, not how many people heard it.",
      "One fair caveat, offered as an observation rather than a criticism: they publish less about themselves than most agencies we've researched. No pricing, no team size, no founding year, and the client logos on their homepage aren't named in text. That's a legitimate commercial choice — plenty of agencies keep rates off the site — but it does mean you'll need a call to learn things you can read directly on other agencies' sites, and it's worth knowing that before you start comparing.",
    ],
  },
  ourCase: {
    heading: "Where a production studio is the better choice",
    body: [
      "The distinction is between buying a **channel** and buying **production**. If you need the former, they're right. If you need the latter, here's the case for us.",
      "**You already have the marketing function.** Most B2B companies with a podcast already employ people who do SEO, social and paid. Buying those from a podcast agency means paying a second time for capability you have in-house, and it usually produces worse results, because your own team knows your positioning and their audience better than any external supplier will.",
      "**You can see the price now.** £110 per episode for audio editing, £165 for audio and video, £335 for full production including show notes, artwork, clips and publishing. That's the whole rate card, published. When a competitor doesn't publish anything, the only way to compare is a discovery call — and it's worth noticing how much of the sales process exists because the price is hidden.",
      "**You want to stop whenever you like.** No minimum term. Per-episode while you're testing, monthly once it's settled. For a channel that might be reviewed at the end of the financial year, that flexibility has real value.",
      "**You need the standard held over hundreds of episodes.** This is where we're strongest and it's evidenced rather than claimed. The Genetics Podcast has run to 248 episodes with Cambridge researchers and biotech CEOs as guests; The Bitcoin Collective has published weekly since 2021 without a single gap. Consistency across a long catalogue is a spec-and-process problem, and it's the one we've solved most often.",
      "**Your subject is technical.** Where accuracy through the edit matters — a mis-cut qualifying clause changing what a claim asserts — we've built specific workflows for that, in [regulated fintech](/services/fintech-podcast-production-company) and [life sciences](/services/biotech-podcast-production) especially. That's a craft argument rather than a marketing one, and it's the kind of thing a generalist programme doesn't optimise for.",
      "**We work inside your setup, not alongside it.** This is the difference clients mention most and the hardest one to see from a website. Slack, Notion, Monday, WhatsApp, email — whatever your marketing team already runs on, we join it rather than adding another tool and another standing meeting. In practice the person editing your show sits in the same channel as the people planning the campaign, so a question about episode forty gets answered in minutes instead of becoming a scheduled call. What you end up with is closer to a producer on the team than a supplier at the end of an email chain.",
      "**We've had a client leave for a larger agency and come back.** That is the honest version of this argument and it is worth saying plainly rather than dressing up. Scale reads well on a proposal — more people, more capability, more reassurance — and what tends to get missed until you have lived with it is the proximity: being able to ask a question and have it answered by the person actually doing the work, rather than routed through someone whose job is to route it. We would much rather you weighed that up front than discovered it a quarter in. For some teams the capacity is worth the distance, and that is a fair trade to make deliberately.",
      "**You get the podcasting experience, not just the episodes.** Being that close to your team means the questions that come up around a show — what your download numbers actually mean, whether a sponsorship offer is worth taking, why a platform isn't showing your chapters, how to handle a back-catalogue migration — get answered as part of the relationship rather than scoped as consultancy. That is years of production experience available to your team directly, and it is a real part of what you are buying even though nobody puts it on a rate card.",
      "**And it makes us quick when it actually matters.** With no queue and no account layer between you and the person doing the work, an urgent episode can move immediately — we have turned one around in under twelve hours when a client needed it to ship. That is not a standing promise on every episode, and it is genuinely hard for a larger operation to offer at all, because at scale work has to be scheduled in advance. It is a real advantage of buying from a small studio, and worth weighing against the capacity a bigger team gives you.",
    ],
  },
  scenarios: [
    {
      situation: "You want a podcast to open doors at 50 named target accounts, and you have no marketing team.",
      recommendation: "Content Allies",
      why: "Outreach plus promotion in one programme is exactly their shape, and both are things we don't do at all.",
    },
    {
      situation: "You publish weekly, your in-house team handles social and SEO, and production is the only gap.",
      recommendation: "Selected Frequencies",
      why: "Buying strategy and promotion from a podcast agency duplicates capability you already employ. Production-only is materially cheaper for the same finished episode.",
    },
    {
      situation: "Your show covers regulated or highly technical subject matter and accuracy is the main risk.",
      recommendation: "Selected Frequencies",
      why: "The edit standard and the review workflow are the product here, not the audience growth. We've built that for fintech and life sciences clients specifically.",
    },
  ],
  checklist: {
    heading: "What to ask an agency that doesn't publish its prices",
    intro:
      "Most don't. That's normal, and it means the first call has to do more work. These questions get you to a comparable number quickly.",
    items: [
      "What's the all-in monthly figure for my episode count, and what would change it?",
      "Which parts of that are production, and which are strategy, outreach or promotion? Ask for the split — it tells you exactly what unbundling would save.",
      "What's the minimum term, and what notice do I need to give?",
      "If guest outreach is included, how many confirmed bookings a month is that in practice?",
      "Is paid promotion budget included in the fee, or billed on top?",
      "What reporting do I get, and which numbers come from your systems rather than mine?",
      "Who edits my show week to week, and is it the same person every time?",
      "What's the turnaround in working days from receipt, and is it contractual?",
      "Do I keep the raw recordings, project files and show spec if I leave?",
      "Can I hear a full section of an episode from a client with a similar show and setup?",
    ],
  },
  faqs: [
    {
      question: "Is Content Allies any good?",
      answer:
        "Their public positioning is coherent and their ABM framing of B2B podcasting is genuinely useful — building relationships with 52 target accounts a year is a better goal than a download number. They publish less detail than most competitors, so you'll need a call to assess fit properly, but nothing in their public material suggests otherwise.",
    },
    {
      question: "How much does Content Allies cost?",
      answer:
        "They don't publish pricing. Figures circulate in third-party roundups but we couldn't verify any from Content Allies themselves, so we won't repeat them. You'd need to speak to them for a figure. Our own rates are published: £110 to £335 per episode depending on tier.",
    },
    {
      question: "What's the best Content Allies alternative for production only?",
      answer:
        "A studio rather than another full-service agency. If you already have marketing people doing SEO, social and paid, buying those again from a podcast agency duplicates spend. Look for published per-episode rates, a contractual turnaround, a named editor and no minimum term.",
    },
    {
      question: "Should a podcast agency handle our promotion too?",
      answer:
        "Only if you don't already have that capability. Your own team knows your positioning and audience better than an external supplier will, and promotion is usually the easiest part of the bundle to bring in-house. Where an agency genuinely adds value is outreach and attribution, which are harder to replicate.",
    },
    {
      question: "Why do so few podcast agencies publish prices?",
      answer:
        "Partly because scope varies enormously, and partly because a discovery call converts better than a price page. Both are reasonable. The practical effect is that comparing quotes requires getting every supplier to price the same written list of line items, rather than comparing headline numbers.",
    },
    {
      question: "Can we split production and marketing between two suppliers?",
      answer:
        "Yes, and many companies do. Production is a well-defined deliverable that's easy to buy on its own; promotion tends to work better close to your brand. The cost is coordination — someone internally has to own the handoff, and that person needs to actually have the time.",
    },
    {
      question: "How do we measure whether a B2B podcast is working?",
      answer:
        "Track who you got into the room rather than downloads: guests who became customers, partners or introductions, and whether sales conversations are shorter because someone listened first. Those are the outcomes that justify the spend, and they're visible in your CRM rather than in podcast analytics.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "outsourced-podcast-production",
      "podcast-post-production-services",
      "podcast-repurposing-service-b2b",
    ],
    blogSlugs: [
      "podcast-production-agency-pricing",
      "best-podcast-production-companies-for-b2b",
      "in-house-vs-outsourced-podcast-production",
    ],
    caseStudySlugs: ["genetics-podcast", "strategy-at-scale"],
    comparisonSlugs: ["lower-street-alternative", "rise25-alternative"],
  },
  cta: {
    heading: "Get a production-only number to compare",
    body: "Send us your episode count and what you need done to each one, and we'll come back with a per-episode and monthly figure you can hold next to a full-service quote. If the bundle is genuinely better value for you, that comparison will show it.",
    buttonLabel: "Get a production quote",
  },
  formTag: "content-allies-alternative",
};
