import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Rise25 alternative.
 *
 * Facts from rise25.com, read 2026-08-12:
 *   - "Done-for-You B2B Podcasting", positioned around ROI, clients and
 *     strategic partnerships "rather than vanity metrics" — homepage
 *   - "Team of 40+ producers, creatives, and strategists" — homepage
 *   - Offices listed at Tiburon, CA and Northbrook, IL — homepage footer
 *   - "Since 2008" — homepage
 *   - Guest booking including cold email outreach; "Podcast Copilot"
 *     platform; SEO show notes; repurposing — services
 *   - Launch window 4–5 weeks — /podcast-production-services/
 *   - Clients named: NFM, Firebelly, NAIFA, Top Grading, Jotform, Sweet
 *     Process, Quiet Light, EO San Francisco — homepage
 *   - PRICING, quoted verbatim because the units are ambiguous and
 *     paraphrasing would misrepresent it: "Typically, our full-service
 *     production packages range from around $6,000 to $8,000 on the high end
 *     to around $1,500/month on the low end."
 *     (/podcast-production-services/)
 *
 * ⚠ The $6,000–$8,000 figure does NOT state a unit on the page — it is not
 * clear whether that is monthly, per quarter or per engagement. This page
 * therefore quotes the sentence and explicitly says the unit isn't stated,
 * rather than converting it into a monthly figure. Do not "tidy" this into
 * a clean number; that would be inventing a competitor's price.
 *
 * [TK: verify — whether Rise25 publish a minimum term anywhere. Not found on
 * the homepage or services page; table says "Not published".]
 *
 * Their guest-booking capability is a genuine strength we cannot match at
 * all, and the concession section leads with it. That is the honest read of
 * the market, not a rhetorical device.
 */
export const rise25Alternative: ComparisonPage = {
  slug: "rise25-alternative",
  kind: "alternative",
  primaryKeyword: "Rise25 alternative",
  supportingKeywords: [
    "Rise25 vs Selected Frequencies",
    "Rise25 pricing",
    "alternatives to Rise25",
    "Rise25 competitors",
    "is Rise25 worth it",
  ],
  seo: {
    title: "Rise25 Alternative",
    metaDescription:
      "An honest Rise25 alternative comparison: where Rise25's guest-booking model wins, where a production-only studio is cheaper, and how to choose.",
  },
  h1: "Rise25 alternative: an honest comparison",
  answerFirst:
    "Rise25 sell a relationship engine that happens to produce a podcast — they book your guests, including cold outreach, and the return they optimise for is partnerships and clients rather than downloads. If getting the right people into the room is your bottleneck, that is a genuinely differentiated capability and we cannot match it. If you already have guests lined up and what you need is the show produced well and cheaply, you are paying for outreach machinery you won't use. That is the whole decision, and most people looking for a Rise25 alternative have already solved the guest problem.",
  disclosure:
    "We're Selected Frequencies, a production studio, so read this knowing we sell one of the two options. Everything about Rise25 comes from their own site, we've quoted their published pricing verbatim rather than interpreting it, and we've been explicit that their core capability is one we don't offer at all.",
  companies: [
    {
      name: "Rise25",
      url: "https://rise25.com/",
      positioning:
        "Describes itself as \"Done-for-You B2B Podcasting\" aimed at ROI, client acquisition and strategic partnerships rather than, in their words, vanity metrics. Operating since 2008 with a stated team of 40+, based in Tiburon, California and Northbrook, Illinois.",
      strength:
        "Guest booking and outreach as a built-in operational capability, including cold email campaigns. Most production companies explicitly exclude this, and it is the hardest and most valuable part of running a B2B interview show. Their model treats each episode as a warm introduction to someone you want as a client or partner — for a business with high lifetime client value, one relationship can pay for the entire engagement.",
      tradeOff:
        "You are buying a business-development system, and the outreach machinery is a large share of what you pay for. If your guest pipeline is already full — an existing network, a customer base you want to interview, inbound requests — that capability sits idle while you fund it. Their published price range also doesn't state its unit, so you need a call to know your real annual cost.",
      sources: [
        { label: "rise25.com homepage", url: "https://rise25.com/", checkedOn: "2026-08-12" },
        { label: "Rise25 podcast production services", url: "https://rise25.com/podcast-production-services/", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Selected Frequencies",
      url: "https://selectedfrequencies.com/",
      positioning:
        "A production studio. We take your recording and return a finished, published episode — audio and video edit, mastering, show notes, chapters, transcript, clips and distribution — on a published per-episode rate card.",
      strength:
        "Cost and transparency for production-only scope, and consistency across long catalogues. Published rates from £110 per episode, no minimum term, and direct contact with the person editing the show. Evidence: 248 episodes for The Genetics Podcast, and 204 weekly episodes without a gap for The Bitcoin Collective.",
      tradeOff:
        "We don't book guests, run outreach, or do business development of any kind. If your show has stalled because nobody has time to fill the guest calendar, hiring us fixes the wrong problem and the show will stall again.",
      sources: [
        { label: "Our published rate card", url: "https://selectedfrequencies.com/services", checkedOn: "2026-08-12" },
        { label: "Our case studies", url: "https://selectedfrequencies.com/work", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Core model", values: ["Relationship and business development, via a podcast", "Production and finishing of an existing show"] },
    { label: "Published prices", values: ["Partially — a range, with the unit not stated", "Yes — £110, £165 and £335 per episode by tier"] },
    { label: "Guest booking & cold outreach", values: ["Yes — a core part of the offer", "No"] },
    { label: "Strategy & format design", values: ["Yes", "No"] },
    { label: "Full production", values: ["Yes", "Yes"] },
    { label: "Video", values: ["Yes", "Yes"] },
    { label: "SEO show notes & repurposing", values: ["Yes", "Yes"] },
    { label: "Client dashboard / platform", values: ["Yes — \"Podcast Copilot\"", "No"] },
    { label: "Minimum commitment", values: ["Not published", "None. Per-episode, or monthly with notice"] },
    { label: "Stated launch time", values: ["4–5 weeks", "1–2 weeks for an existing show"] },
    { label: "Team size", values: ["\"Team of 40+\"", "Small studio — direct with the editor"] },
    { label: "Based", values: ["Tiburon, CA and Northbrook, IL", "Northern Ireland — remote"] },
    { label: "Operating since", values: ["2008", "See our case studies"] },
  ],
  competitorWins: {
    heading: "Where Rise25 is the better choice",
    body: [
      "There is one very large reason to choose them, and it is not a close call when it applies.",
      "**They book your guests, and we don't.** This is the single hardest part of running a B2B interview show, and it is the reason most of them quietly stop. Finding the right people, writing outreach that gets a reply, chasing, scheduling across timezones, rescheduling when someone drops out — it's a business development function, not a production one. Rise25 run it, including cold email campaigns. If that is your bottleneck, no amount of good editing solves it, and hiring a production studio instead means you'll have beautifully produced episodes of a show with nobody booked for next month.",
      "**Their model is aimed at a return we don't measure.** Framing the podcast as a way to build relationships with clients and referral partners is a genuinely different strategy from making a good show, and for the right business it's a stronger one. If you sell a high-value service and one new relationship covers a year of fees, the arithmetic works very differently than for a company measuring listens. That's a real insight, and it's their organising idea rather than a marketing line.",
      "**Longevity and scale.** Operating since 2008 with a stated team of 40+ is a meaningful amount of institutional experience in a market where most agencies are a few years old. That shows up in process and in the ability to absorb a problem week without your episode slipping.",
      "**They give you a system, not just output.** A client platform, SEO show notes, repurposing and distribution as one managed programme means one supplier and one point of accountability. Assembling that yourself from a production studio plus a freelancer plus a VA is cheaper on paper and more work in practice — and the coordination cost is real.",
      "Worth noting on price, in fairness: Rise25 publish more than most. Their site states that \"full-service production packages range from around $6,000 to $8,000 on the high end to around $1,500/month on the low end\". The sentence doesn't state a unit for the upper figure, so we won't guess at one — but a stated range is more than six of the nine agencies we researched offer, and it lets you work out quickly whether you're in the right conversation.",
    ],
  },
  ourCase: {
    heading: "Where a production-only studio is the better choice",
    body: [
      "The case for us is simple and it depends entirely on one question: **do you already have your guests?**",
      "**If your guest pipeline is full, outreach is dead weight.** Plenty of B2B shows interview their own customers, their partners, or people who ask to come on. If that's you, a large share of a done-for-you fee is buying a capability you'd never use. Buying production alone is straightforwardly cheaper for the same finished episode.",
      "**You know what you'll pay before you book a call.** £110 per episode for audio editing, £165 for audio and video, £335 for full production with show notes, artwork, clips and publishing. A weekly fully-produced show is a shade over £17,000 a year and you can check that arithmetic yourself in a minute. There's no discovery call required to find out whether you're in range.",
      "**No minimum, and no lock-in.** Per-episode if you're still testing the format, monthly if you've settled. Most new podcasts don't survive their first year, and being able to stop cleanly is worth real money when you're not yet sure.",
      "**Long-run consistency in technical subjects.** Where we're genuinely strong is a catalogue that has to hold its standard across hundreds of episodes, particularly where the subject matter is technical and a mis-cut sentence changes the meaning. The Genetics Podcast has run to 248 episodes with researchers and biotech CEOs as guests; The Bitcoin Collective has published weekly since 2021 without missing a week. That's a process problem rather than a creative one, and it's the one we've solved most often.",
      "**You talk to the editor.** No account layer, no note being relayed. The flip side is that there's no team to escalate to and no bench if we're at capacity, which is a genuine limitation of buying from a small studio rather than a 40-person agency.",
    ],
  },
  scenarios: [
    {
      situation: "You want to build relationships with 50 target accounts and have no way in.",
      recommendation: "Rise25",
      why: "The outreach engine is the product, and it's the part we don't offer. A production studio would leave you with the same empty guest calendar you have now.",
    },
    {
      situation: "You interview your own customers, publish weekly, and want the production cost down.",
      recommendation: "Selected Frequencies",
      why: "Your guest problem is already solved, so outreach capability is spend you can remove entirely. Published per-episode rates make the saving easy to calculate.",
    },
    {
      situation: "You're a solo consultant testing whether a podcast is worth the effort at all.",
      recommendation: "Selected Frequencies, at the entry tier",
      why: "No minimum term and a £110 audio edit lets you find out cheaply. Committing to a full done-for-you programme before you know the format works is how podcasts become an expense rather than a channel.",
    },
  ],
  checklist: {
    heading: "What to ask before committing to any done-for-you programme",
    intro:
      "These matter more on bundled programmes than on production-only work, because the bundle is where scope gets vague.",
    items: [
      "If guest booking is included, how many confirmed bookings a month am I actually getting — and what happens in a month where nobody says yes?",
      "Is outreach done under my brand or yours, and do I see the messages before they go out? This is your reputation with target accounts.",
      "What's the minimum term, and what's the notice period to stop?",
      "Which parts of this price are production, and which are strategy, outreach or promotion? Ask for the split — it tells you what you'd save by unbundling.",
      "What's the turnaround in working days from receipt, and is it contractual?",
      "How many revision rounds per episode, and what does a further one cost?",
      "Who edits my show week to week, and is it the same person each time?",
      "Do I keep the raw recordings, project files and show spec if I leave?",
      "Can I hear a full section from a client show with a similar format and recording setup?",
      "What's explicitly excluded that I'm likely to need in month three?",
    ],
  },
  faqs: [
    {
      question: "Is Rise25 any good?",
      answer:
        "Their public record is strong: operating since 2008, a stated team of 40+, and a genuinely differentiated model built around guest outreach and relationship building rather than downloads. Whether they're right for you depends on whether you need that outreach capability — if your guest calendar is already full, you'd be funding a system you don't use.",
    },
    {
      question: "How much does Rise25 cost?",
      answer:
        "Their site states that full-service packages run from around $1,500 per month at the low end to around $6,000–$8,000 at the high end, though the unit for the upper figure isn't specified. That's more transparency than most agencies offer. Our own rates are published per episode, from £110 to £335 by tier.",
    },
    {
      question: "What's a good Rise25 alternative if I don't need guest booking?",
      answer:
        "A production-only studio. If you interview customers, partners or inbound requests, outreach capability is the largest removable cost in a done-for-you programme. Look for published per-episode rates, a contractual turnaround, a named editor and no minimum term.",
    },
    {
      question: "Do podcast agencies really do cold outreach for guests?",
      answer:
        "Some do — Rise25 state cold email campaigns as part of their service, and it's a genuine differentiator. Most production companies exclude booking entirely, on the basis that an invitation from you converts better than one from a supplier. Both positions are defensible; they suit different situations.",
    },
    {
      question: "Can I buy production only and handle guests myself?",
      answer:
        "Yes, and for many B2B shows it's the cheaper and better split. Outreach converts best coming from the host or their company, so keeping it in-house often improves results as well as reducing cost. You then buy editing, assets and publishing separately at a per-episode rate.",
    },
    {
      question: "Is a podcast a reliable way to generate B2B leads?",
      answer:
        "It's a slow, compounding channel rather than a predictable one. The realistic mechanism is that a guest who has spent an hour with you is far warmer than a cold prospect, and listeners arrive at sales conversations already trusting your judgement. Anyone promising attributable pipeline from a podcast is overstating what's measurable.",
    },
    {
      question: "How quickly can an existing show be moved to a new producer?",
      answer:
        "Usually one to two weeks for a show that's already running — we listen to recent episodes, write a spec preserving what works, and pick up from the next recording. A new show being launched from scratch takes longer; Rise25 state a 4–5 week launch window for that.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "outsourced-podcast-production",
      "podcast-production-for-saas-companies",
      "monthly-podcast-editing-retainer",
    ],
    blogSlugs: [
      "podcast-production-agency-pricing",
      "how-much-does-podcast-production-cost-per-episode",
      "what-does-a-podcast-producer-actually-do",
    ],
    caseStudySlugs: ["outthinkers", "bitcoin-collective"],
    comparisonSlugs: ["lower-street-alternative", "content-allies-alternative"],
  },
  cta: {
    heading: "Work out what you'd actually save",
    body: "Tell us how you find guests and how often you publish, and we'll price the production side on its own. If it turns out the outreach is the part you really need, we'll tell you to stay where you are.",
    buttonLabel: "Price the production side",
  },
  formTag: "rise25-alternative",
};
