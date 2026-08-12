import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Fame alternative.
 *
 * Facts from fame.so, read 2026-08-12:
 *   - Positioning, quoted: "The B2B Podcast Agency That Guarantees 10%
 *     Monthly Growth"
 *   - Claim, quoted: "the largest producer of B2B podcasts in the world
 *     (100+ shows live at any time)"
 *   - Guarantee terms as stated: "10% monthly, or month 7 free"
 *   - Stated launch timeline: 6–8 weeks
 *   - Stated scale: 300+ podcasts produced, 100K+ episodes published,
 *     10M+ downloads tracked, 100+ active shows
 *   - Named products: Guest Engine (booking), Production Engine, Promotion
 *     Engine / Fame Host, Growth Radar / client portal, guest-to-deal
 *     tracking, host coaching
 *   - Clients shown: Salesforce, TikTok, Dell, Canva, Ahrefs, Workday,
 *     Zendesk, Ramp, Circle, Paddle
 *   - Pricing NOT published — the site routes to a proposal request
 *   - Copyright holder shown as "Be More Bear Limited"; office location not
 *     disclosed on the page
 *
 * ⚠ The growth guarantee is described here in Fame's own words and NOT
 * assessed, endorsed or second-guessed. We have not seen the contract terms
 * and cannot know what conditions attach to it. The page says exactly that.
 * Speculating about whether a competitor honours its own guarantee would be
 * denigration and is out of bounds.
 *
 * [TK: verify — the precise conditions of the "10% monthly or month 7 free"
 * guarantee. Not published in detail on the homepage; a prospect would need
 * to see the contract. Table says "See their terms".]
 * [TK: verify — Fame's team size and registered office. Not stated on the
 * homepage; "Be More Bear Limited" is the copyright holder shown in the
 * footer, which is a company name rather than a location.]
 */
export const fameAlternative: ComparisonPage = {
  slug: "fame-alternative",
  kind: "alternative",
  primaryKeyword: "Fame alternative",
  supportingKeywords: [
    "Fame.so alternative",
    "Fame podcast agency pricing",
    "alternatives to Fame",
    "Fame podcast agency competitors",
    "is Fame worth it",
  ],
  seo: {
    title: "Fame Alternative (fame.so)",
    metaDescription:
      "An honest Fame alternative comparison: where their growth guarantee and scale win, where a small production studio costs less, and how to choose.",
  },
  h1: "Fame alternative: an honest comparison",
  answerFirst:
    "Fame sell audience growth with a commercial commitment attached — their site states a guarantee of 10% monthly growth, or month seven free — alongside guest booking, production, hosting and ROI tracking at considerable scale. If growing the audience is the outcome you're buying and you want a supplier willing to put terms around it, we have nothing equivalent to offer and you should talk to them. If you have the audience you need and the job is producing the show well at a known price, that is a smaller and cheaper purchase. Most people looking for a Fame alternative want production without the growth programme.",
  disclosure:
    "We're Selected Frequencies, a small production studio, and we're one of the options on this page — so read it with that in mind. Every claim about Fame here comes from fame.so and is quoted rather than characterised, including their growth guarantee, which we describe in their words and don't attempt to assess.",
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
      name: "Selected Frequencies",
      url: "https://selectedfrequencies.com/",
      positioning:
        "A small production studio. We produce shows that already have a host, a format and — usually — an audience: editing, mastering, video, show notes, chapters, transcripts, clips and publishing, on a published per-episode rate card.",
      strength:
        "Cost transparency and craft consistency. Published rates from £110 per episode, no minimum term, and the person editing your show is the person you talk to. Long-catalogue evidence: 248 episodes for The Genetics Podcast, 204 weekly without a gap for The Bitcoin Collective.",
      tradeOff:
        "We make no promises about audience size, because we don't control distribution and wouldn't be able to keep them. No guest booking, no paid promotion, no growth guarantee. If the show's problem is that nobody is listening, we are not the fix.",
      sources: [
        { label: "Our published rate card", url: "https://selectedfrequencies.com/services", checkedOn: "2026-08-12" },
        { label: "Our case studies", url: "https://selectedfrequencies.com/work", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "What you're buying", values: ["Audience growth as a programme", "Production of an existing show"] },
    { label: "Growth guarantee", values: ["Stated as 10% monthly, or month 7 free — see their terms", "None. We don't control distribution"] },
    { label: "Published prices", values: ["Not published", "Yes — £110, £165 and £335 per episode by tier"] },
    { label: "Minimum commitment", values: ["Not published", "None. Per-episode, or monthly with notice"] },
    { label: "Guest booking", values: ["Yes — \"Guest Engine\"", "No"] },
    { label: "Hosting included", values: ["Yes — \"Fame Host\"", "No — you keep your own host account"] },
    { label: "Paid promotion", values: ["Yes", "No"] },
    { label: "ROI / attribution tracking", values: ["Yes — guest-to-deal tracking", "No"] },
    { label: "Host coaching", values: ["Yes", "No"] },
    { label: "Full production & video", values: ["Yes", "Yes"] },
    { label: "Stated launch time", values: ["6–8 weeks", "1–2 weeks for an existing show"] },
    { label: "Stated scale", values: ["300+ podcasts produced, 100+ live at any time", "Small studio — direct with the editor"] },
  ],
  competitorWins: {
    heading: "Where Fame is the better choice",
    body: [
      "There is one reason above all, and it's a good one.",
      "**They put terms around an outcome, and almost nobody else does.** Their site states a guarantee of 10% monthly growth or month seven free. We haven't seen the contract and can't tell you what conditions attach to it — you should read those carefully, as you would with any guarantee — but the willingness to commit commercially to a result is unusual in this market, and it transfers risk in a way a production fee never does. If your problem is genuinely that the audience isn't growing, a supplier prepared to be measured on that is a fundamentally different proposition from one selling you hours.",
      "**Scale means capability we don't have.** 300+ podcasts produced and 100+ shows live at any time is a large operation. That buys pattern recognition across a lot of shows, a bench that absorbs a bad week, and the ability to run a launch and a live event in the same month. A small studio can't do all of that at once and shouldn't pretend it can.",
      "**They own the whole chain.** Guest booking, production, their own hosting, promotion and guest-to-deal tracking under one supplier means one point of accountability. When something isn't working there's no argument about whose fault it is — which sounds like a small thing and is not, if you've ever run a channel across three suppliers.",
      "**Host coaching is genuinely undervalued.** Most agencies will fix your audio; far fewer will help the person actually talking get better at it. Since the host is the single largest variable in whether an interview show is good, coaching them is often higher leverage than anything that happens in post-production. We don't offer it.",
      "**And the client roster does real work.** Salesforce, TikTok, Dell, Canva, Workday and Zendesk on a client list makes an internal recommendation considerably easier to defend. If you're proposing a podcast budget to a sceptical exec team, that matters more than a per-episode rate does.",
    ],
  },
  ourCase: {
    heading: "Where a small production studio is the better choice",
    body: [
      "The case rests on a question worth asking yourself honestly: **is your problem the audience, or the work?**",
      "**If the audience is fine, growth machinery is spend you don't need.** Plenty of B2B shows have exactly the listeners they want — a few hundred people who are all buyers, or a guest list that's the real return. If your show is doing its job, paying for a growth programme optimises a number that isn't your constraint. Buying production alone is straightforwardly cheaper for the same finished episode.",
      "**We tell you the price without a call.** £110 per episode for audio editing, £165 for audio and video, £335 for full production with show notes, artwork, clips and publishing. That's the complete rate card. You can compare it against a proposal in a minute rather than sitting through a discovery call to find out whether you're in range.",
      "**You keep your own hosting and your own feed.** We work inside your accounts rather than ours. Nothing to reclaim if you leave, no feed to migrate, no dependency to unwind. That's worth thinking about before any arrangement where the supplier also owns the hosting.",
      "**No minimum, no lock-in.** Per-episode while you're testing, monthly once settled. Most podcasts don't survive their first year and being able to stop cleanly is worth real money when you're not yet sure.",
      "**We won't guarantee growth, and that's deliberate.** We don't control Apple's charts, Spotify's recommendations or whether your guests share the episode — so a promise about audience size would be one we couldn't reliably keep. What we will commit to is a turnaround in working days and a consistent standard across a long catalogue: 248 episodes for The Genetics Podcast, 204 weekly without a gap for The Bitcoin Collective. Those are the things we actually control.",
    ],
  },
  scenarios: [
    {
      situation: "Your show has run 30 episodes, sounds fine, and almost nobody listens.",
      recommendation: "Fame",
      why: "That's a growth and distribution problem, not a production one. Re-editing a show that already sounds good won't change the audience, and they'll put terms around the outcome.",
    },
    {
      situation: "You publish weekly to a small, valuable audience and just want the production handled.",
      recommendation: "Selected Frequencies",
      why: "Growth isn't your constraint, so the programme built around it is removable cost. Published per-episode rates make the saving easy to work out.",
    },
    {
      situation: "You're proposing a podcast budget to a sceptical executive team who want accountability.",
      recommendation: "Fame",
      why: "A supplier willing to attach commercial terms to an outcome is far easier to defend internally than one billing per episode. Read the guarantee conditions closely first.",
    },
  ],
  checklist: {
    heading: "What to ask about any growth guarantee",
    intro:
      "Guarantees are worth having and worth reading. These questions apply to any supplier offering one, not just this one.",
    items: [
      "What exactly is being measured — downloads, unique listeners, subscribers? Growth of what, from what baseline?",
      "What are the conditions on my side? Most guarantees require a publishing cadence, guest availability or promotion from you.",
      "What does the remedy actually mean in cash terms — a free month, a refund, or continued work at no charge?",
      "What happens if I miss a recording or the format changes mid-term?",
      "Does the guarantee survive if I don't buy the paid promotion element?",
      "Who owns the podcast feed and hosting, and what does migration look like if I leave?",
      "Is the growth figure compounding month on month, or measured against the starting point?",
      "What's the minimum term, and does the guarantee require me to stay past it?",
      "Which parts of the fee are production and which are growth? Ask for the split — it tells you the cost of the guarantee.",
      "Can I speak to a client whose show is a similar size and format to mine?",
    ],
  },
  faqs: [
    {
      question: "Is Fame any good?",
      answer:
        "Their public record is substantial — they state 300+ podcasts produced, 100+ shows live at any time, and a client list including Salesforce, TikTok, Dell and Canva. They also attach commercial terms to audience growth, which very few agencies do. Whether they suit you depends on whether growth is genuinely your constraint.",
    },
    {
      question: "How much does Fame cost?",
      answer:
        "Fame don't publish pricing — their site routes to a proposal request. We won't repeat figures from third-party roundups because we couldn't verify any at source. Our own rates are published: £110 per episode for audio editing up to £335 for full production.",
    },
    {
      question: "Does Fame's 10% monthly growth guarantee actually hold?",
      answer:
        "We can't tell you — we haven't seen the contract and it would be unfair to speculate. Their site states the terms as 10% monthly growth or month seven free. Ask them directly what's measured, from what baseline, what's required of you, and what the remedy is in practice.",
    },
    {
      question: "What's a good Fame alternative if I don't need audience growth?",
      answer:
        "A production studio. If your show reaches the people it needs to, a growth programme optimises a number that isn't your constraint. Look for published per-episode rates, a contractual turnaround, a named editor, no minimum term, and hosting that stays in your own account.",
    },
    {
      question: "Should I choose a podcast agency that guarantees growth?",
      answer:
        "It's genuinely attractive if audience size is your problem, provided you read the conditions. Understand what's measured, what's required of you, and what the remedy is worth. If the show already reaches the right people, the guarantee is solving something you don't have.",
    },
    {
      question: "Is it a problem if my agency also hosts my podcast feed?",
      answer:
        "Not inherently, but know what leaving involves before you start. Feeds can be migrated, though it takes coordination and carries some risk of listener disruption. Hosting in your own account avoids that entirely and costs very little — usually £10–£25 a month.",
    },
    {
      question: "Can a small studio produce a show at the same quality as a large agency?",
      answer:
        "For editing, mixing and finishing, yes — that's craft work and it doesn't scale with headcount. What a large agency provides is breadth: simultaneous projects, guest booking, paid promotion and cover during illness or holiday. That's a capacity difference rather than a quality one.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "outsourced-podcast-production",
      "monthly-podcast-editing-retainer",
      "podcast-repurposing-service-b2b",
    ],
    blogSlugs: [
      "why-isnt-my-podcast-growing",
      "podcast-production-agency-pricing",
      "best-podcast-production-companies-for-b2b",
    ],
    caseStudySlugs: ["bitcoin-collective", "outthinkers"],
    comparisonSlugs: ["lower-street-alternative", "caspian-studios-alternative"],
  },
  cta: {
    heading: "Work out whether your problem is growth or production",
    body: "Send us an episode. We'll tell you honestly whether what you have is a production problem we can fix or a distribution problem we can't — and if it's the latter, we'll say so rather than sell you an edit.",
    buttonLabel: "Get an honest read",
  },
  formTag: "fame-alternative",
};
