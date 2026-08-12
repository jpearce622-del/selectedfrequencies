import type { ComparisonPage } from "@/types/comparison-page";

/**
 * HEAD-TO-HEAD TEMPLATE — copy this file to add another A vs B page.
 *
 * The reader searched for two companies, neither of which is us. That single
 * fact governs everything about how this page is written:
 *
 *   1. Answer their question first, properly, and without agenda. The page
 *      has to be genuinely the most useful thing on the query or it deserves
 *      to lose it.
 *   2. We appear ONCE, near the end, as a third option — in the last
 *      scenario and the CTA. The build guard in lib/comparison-pages.ts
 *      enforces that we are never the first column. Do not "improve" this by
 *      moving our case up; a head-to-head that pivots to a sales pitch in
 *      paragraph three is worthless to the reader and obvious.
 *   3. Both companies get a genuine strength and a fair trade-off. Neither
 *      is set up as the loser so the other can win.
 *
 * TO ADD A NEW HEAD-TO-HEAD: copy this file, swap the two companies, keep
 * the section shape, re-verify every fact against both companies' own sites
 * on the day you write it, and set `verifiedOn` to that date.
 *
 * Facts here are from lowerstreet.co and rise25.com, both read 2026-08-12,
 * and are cited per company in `sources`. Full detail of what came from
 * where is in the two alternative pages, which cover these companies
 * individually:
 *   - content/comparison-pages/lower-street-alternative.ts
 *   - content/comparison-pages/rise25-alternative.ts
 *
 * [TK: verify — neither company publishes a minimum term. Both table rows
 * say "Not published". Re-check on each refresh.]
 */
export const lowerStreetVsRise25: ComparisonPage = {
  slug: "lower-street-vs-rise25",
  kind: "head-to-head",
  primaryKeyword: "Lower Street vs Rise25",
  supportingKeywords: [
    "Lower Street or Rise25",
    "Rise25 vs Lower Street",
    "Lower Street Rise25 comparison",
    "best B2B podcast agency",
  ],
  seo: {
    title: "Lower Street vs Rise25",
    metaDescription:
      "Lower Street vs Rise25 compared on scope, pricing, guest booking and client type — and a straight answer on which suits which kind of B2B show.",
  },
  h1: "Lower Street vs Rise25: which suits your show?",
  answerFirst:
    "These two agencies are less similar than they look. Lower Street build shows — format design, narrative production, sonic branding — for enterprise brands like Adobe, PepsiCo and Morgan Stanley, and the output is the point. Rise25 build relationships, booking your guests including cold outreach so the podcast becomes a route to clients and partners, and the guest list is the point. Choose Lower Street if you want a show that sounds outstanding. Choose Rise25 if you want an hour with fifty people you'd otherwise struggle to reach. Neither is a worse version of the other.",
  disclosure:
    "Quick disclosure: we're Selected Frequencies, a podcast production studio, so we compete with both companies on this page. We've written it from their own public material because a genuinely useful comparison is the only kind worth publishing. We're not in the comparison table — we've put our own case at the end, where you can ignore it.",
  companies: [
    {
      name: "Lower Street",
      url: "https://lowerstreet.co/",
      positioning:
        "A full-service branded podcast agency describing itself as offering \"next-level podcast production services for ambitious companies\", covering strategy, production and growth, with narrative, enterprise and private podcasting as stated specialisms. Founded late 2016, team of 30+ across the UK, Europe, US and Canada.",
      strength:
        "Show design and narrative craft, at a standard that stands up as a brand asset. Their client list — Booking.com, Adobe, HPE, PepsiCo, Lloyds Bank, Morgan Stanley, BCG, Atlassian — is the kind that clears internal procurement at a large company without an argument.",
      tradeOff:
        "A programme rather than a service line, so strategy and growth are bought alongside production whether or not your format is already settled. Pricing isn't published, though they do say rates depend on individual needs and place themselves above a freelance editor and below a big agency.",
      sources: [
        { label: "lowerstreet.co homepage", url: "https://lowerstreet.co/", checkedOn: "2026-08-12" },
        { label: "Lower Street narrative podcasting", url: "https://lowerstreet.co/services/narrative-podcasting", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Rise25",
      url: "https://rise25.com/",
      positioning:
        "Describes itself as \"Done-for-You B2B Podcasting\" oriented around ROI, client acquisition and strategic partnerships rather than, in their phrasing, vanity metrics. Operating since 2008, team of 40+, based in Tiburon, California and Northbrook, Illinois.",
      strength:
        "Guest booking and outreach as an operational capability, including cold email campaigns — the hardest recurring task on a B2B interview show and one most producers exclude entirely. The model treats each episode as a warm introduction to someone you want as a client or partner.",
      tradeOff:
        "You're funding a business-development system, which is dead weight if your guest pipeline is already full. Their published range — \"around $6,000 to $8,000 on the high end to around $1,500/month on the low end\" — doesn't state a unit for the upper figure, so a call is still needed for a real annual number.",
      sources: [
        { label: "rise25.com homepage", url: "https://rise25.com/", checkedOn: "2026-08-12" },
        { label: "Rise25 podcast production services", url: "https://rise25.com/podcast-production-services/", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Core proposition", values: ["A well-designed, well-made show", "Relationships with people you want to reach"] },
    { label: "Guest booking & cold outreach", values: ["Not stated as a service", "Yes — a core part of the offer"] },
    { label: "Strategy & format design", values: ["Yes — a core capability", "Yes"] },
    { label: "Narrative / scripted production", values: ["Yes — a stated specialism", "Not stated"] },
    { label: "Private / internal podcasts", values: ["Yes — a stated specialism", "Not stated"] },
    { label: "Video", values: ["Yes", "Yes"] },
    { label: "Repurposing & SEO content", values: ["Yes, via promotion services", "Yes — SEO show notes, snippets"] },
    { label: "Client platform", values: ["Not stated", "Yes — \"Podcast Copilot\""] },
    { label: "Published prices", values: ["No — \"rates depend on your individual needs\"", "Partial — a range, unit not stated for the upper figure"] },
    { label: "Minimum commitment", values: ["Not published", "Not published"] },
    { label: "Stated launch time", values: ["Not published", "4–5 weeks"] },
    { label: "Team size", values: ["\"Team of 30+\"", "\"Team of 40+\""] },
    { label: "Operating since", values: ["2016", "2008"] },
    { label: "Based", values: ["UK, Europe, US, Canada — remote", "Tiburon, CA and Northbrook, IL"] },
    { label: "Typical client", values: ["Enterprise and large brands", "B2B firms with high lifetime client value"] },
  ],
  competitorWins: {
    heading: "Lower Street vs Rise25: what each is genuinely best at",
    body: [
      "The useful way to read this comparison is that they're solving different problems, and the wrong question is which is better.",
      "**Lower Street are better when the show itself has to be excellent.** If the podcast carries your brand in front of a large audience — or if it's a narrative series, or an internal show for thousands of employees — the production standard is the deliverable. Format design, story structure, sonic branding and a genuinely high finishing standard are what they sell, and the enterprise roster tells you they've done it repeatedly at scale. A show for Adobe or Morgan Stanley is judged against professional media, not against other company podcasts, and clearing that bar is a specific skill.",
      "**They're also the safer internal recommendation at a large company.** A team of 30+ with recognisable brands on the client list survives procurement, legal review and the inevitable question about who else they've done this for at your scale. That sounds bureaucratic and it's often the actual constraint on getting a podcast approved.",
      "**Rise25 are better when your problem is access.** Most B2B podcasts don't fail because the audio is poor — they fail because nobody has time to fill the guest calendar, and after two months of scrambling the show quietly stops. Rise25 run that as an operational function, including cold outreach. If the people you want to reach are the point, this is the harder capability to buy and the one that actually determines whether the show survives.",
      "**Their commercial framing is also more honest about what a B2B podcast is for.** Optimising for partnerships and clients rather than downloads is the right instinct for most B2B shows, where a few hundred listeners who are all buyers beats a large general audience. Sixteen years of operating on that thesis is a meaningful amount of accumulated practice.",
      "**Where each is weaker is the mirror image.** Lower Street don't state guest booking as a service, so if outreach is your bottleneck you'd still need to solve it. Rise25 don't position around narrative or scripted work, so if you want a produced series they aren't the natural fit. Neither is a criticism — they're both clear about what they do, which is more than many agencies manage.",
    ],
  },
  ourCase: {
    heading: "The third option: if you don't need either programme",
    body: [
      "This section exists because plenty of people arrive at a comparison like this and discover the honest answer is neither.",
      "Both of these are **programmes**. You buy strategy, production and either growth or outreach as a bundle, at a price that reflects all of it. That's the right purchase when you're starting from a blank page, or when access to guests is your constraint. It's the wrong purchase when your show already exists, the format works, you have guests lined up, and what's actually broken is that nobody has time to edit.",
      "For that situation you want production rather than a programme, and it costs meaningfully less. For transparency about who's writing this: that's what we sell. Our rates are published — £110 per episode for audio editing, £165 for audio and video, £335 for full production including show notes, artwork, clips and publishing — with no minimum term, and you deal directly with the person editing the show.",
      "What we don't do is the thing each of these agencies is best at. No strategy or format design, no narrative production, no guest booking, no outreach, no paid distribution. If either of those is what you need, one of the two companies above is your answer and we'd tell you so on a call rather than take the work.",
      "Where we're genuinely strong is holding a standard across a long catalogue, particularly on technical subjects: 248 episodes for The Genetics Podcast, and 204 weekly episodes without a gap for The Bitcoin Collective. That's a narrow claim, deliberately. If you'd like to see the wider market before deciding, our [roundup of B2B podcast production companies](/blog/best-podcast-production-companies-for-b2b) covers more of it, including companies we compete with.",
    ],
  },
  scenarios: [
    {
      situation: "You're an enterprise brand launching a flagship show and internal approval is the hard part.",
      recommendation: "Lower Street",
      why: "Show design plus a client roster that clears procurement. The production standard is the deliverable and they're built for that tier.",
    },
    {
      situation: "You sell a high-value B2B service and want an hour with fifty target accounts.",
      recommendation: "Rise25",
      why: "Guest outreach is the product, not an add-on. One relationship can pay for the engagement, which is a completely different return calculation.",
    },
    {
      situation: "Your show already runs, guests are booked, and the edit is what keeps slipping.",
      recommendation: "A production studio — including us",
      why: "Neither programme addresses this, and both charge for capability you'd leave unused. What you need is execution at a known price.",
    },
  ],
  checklist: {
    heading: "What to ask both agencies before you decide",
    intro:
      "The Lower Street vs Rise25 decision usually turns on details neither proposal volunteers. Send this list to both in the same email — the answers side by side will tell you more than either proposal will.",
    items: [
      "What's the all-in monthly figure for my episode count, and what would move it?",
      "How much of that is production, and how much is strategy, outreach or promotion? The split tells you what unbundling would save.",
      "If guest booking is included, how many confirmed bookings a month does that mean in practice — and what happens in a month with no yeses?",
      "Is outreach sent under my brand or yours, and do I approve the messages first?",
      "Who edits my show week to week, and is it the same person every time?",
      "What's the turnaround in working days from receipt, and is that contractual or aspirational?",
      "How many revision rounds are included, and what does a further one cost?",
      "What's the minimum term and the notice period?",
      "Do I keep the raw recordings, project files and show spec if I leave?",
      "What's explicitly not included that I'm likely to need by month three?",
      "Can I hear a full section from a client show with a similar format, length and recording setup?",
    ],
  },
  faqs: [
    {
      question: "Lower Street or Rise25 — which is better?",
      answer:
        "Neither, in the abstract. Lower Street are stronger on show design, narrative craft and enterprise credibility. Rise25 are stronger on guest booking and turning a podcast into business relationships. Decide by asking whether your constraint is the quality of the show or access to the right guests.",
    },
    {
      question: "Which of the two is cheaper?",
      answer:
        "Impossible to say fairly. Lower Street don't publish rates at all. Rise25 publish a range — around $1,500 per month at the low end up to around $6,000–$8,000 at the high end, though the unit for the upper figure isn't stated. Get both to quote against the same written line items.",
    },
    {
      question: "Does Lower Street book podcast guests?",
      answer:
        "Guest booking isn't stated as a service on their site — their listed offer covers launch, promotion, video, private podcasting, editing, show notes, narrative, enterprise and consulting. If outreach is your bottleneck, ask them directly, since scope of this kind is often negotiable on larger engagements.",
    },
    {
      question: "Is Rise25 only for lead generation?",
      answer:
        "Lead generation and partnerships are the organising idea, but the offer is full production — strategy, recording, editing, video, SEO show notes, repurposing and distribution. The difference is what it's optimised for: who ends up in the room rather than how many people hear it.",
    },
    {
      question: "Which is better for an enterprise brand?",
      answer:
        "Lower Street, on public evidence. A stated team of 30+ and clients including Adobe, PepsiCo, Morgan Stanley, BCG and Lloyds Bank suggests they operate comfortably inside large-company procurement, brand review and legal processes — which is frequently the real obstacle to getting an enterprise podcast approved.",
    },
    {
      question: "Do I need a full-service agency at all?",
      answer:
        "Only if you need strategy, outreach or growth alongside production. If your format is settled, guests are booked and the problem is that episodes aren't getting made, a production studio does that part for considerably less. Buying a programme to solve a capacity gap is the expensive route.",
    },
    {
      question: "How should I compare two agency proposals fairly?",
      answer:
        "Send both the same written list of line items — audio edit depth, video, show notes, transcript, clip count, revision rounds, turnaround in working days, publishing and asset ownership — and ask each to price against it. Headline numbers almost never describe the same amount of work.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "outsourced-podcast-production",
      "done-for-you-podcast-production",
      "monthly-podcast-editing-retainer",
    ],
    blogSlugs: [
      "best-podcast-production-companies-for-b2b",
      "podcast-production-agency-pricing",
      "how-much-does-podcast-production-cost-per-episode",
    ],
    caseStudySlugs: ["outthinkers", "genetics-podcast"],
    comparisonSlugs: ["lower-street-alternative", "rise25-alternative"],
  },
  cta: {
    heading: "If neither programme fits, we can price the production side",
    body: "If you've read this and concluded you don't need strategy or outreach, tell us your episode count and what you need done to each one. We'll send a per-episode figure you can hold against both proposals.",
    buttonLabel: "Get a production quote",
  },
  formTag: "ls-vs-rise25",
};
