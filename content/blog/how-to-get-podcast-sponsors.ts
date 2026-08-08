import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";
// Same source list the calculator cites — imported rather than restated so the
// two pages can never disagree about where the CPM figures came from.
import { sources } from "@/data/sponsorship-benchmarks";

export const howToGetPodcastSponsors: BlogPost = {
  slug: "how-to-get-podcast-sponsors",
  title: "How to Get Podcast Sponsors: A Practical Guide for 2026",
  seoTitle: "How to Get Podcast Sponsors",
  metaDescription:
    "When to start looking, what to charge, how to pitch, and what to put in a media kit — a practical guide to landing podcast sponsors, whatever your downloads.",
  publishedAt: "2026-07-29",
  category: "Growth",
  author: shaunaMartin,
  readingTime: "14 min read",
  coverImage: {
    src: "/images/blog/sponsors-hero.svg",
    alt: "A podcast episode timeline with pre-roll, mid-roll, and post-roll ad slots marked, with the mid-roll slot highlighted as the premium placement",
  },
  intro:
    "Most advice on podcast sponsorship either assumes you already have 50,000 downloads, or tells you to \"just reach out to brands.\" Neither helps.\n\nThis is the practical version: when you're actually ready, what your show is genuinely worth, how to pitch it, and what to do if your numbers are still small. The short answer to that last one is that small shows sign sponsors all the time — they just don't do it by selling downloads.",
  keyTakeaways: [
    "Major networks want 10,000–20,000 downloads an episode, but affiliate and flat-rate deals have no minimum at all.",
    "Mid-roll is the premium slot at $25–$50 CPM, roughly double post-roll.",
    "Host-read ads earn $25–$40 CPM against $12–$20 for programmatic — the gap is trust.",
    "Under about 1,000 downloads, flat-rate and affiliate deals beat CPM maths every time.",
    "Never inflate your numbers. Sponsors check, and it ends the relationship before it starts.",
  ],
  sections: [
    {
      id: "are-you-ready",
      heading: "First: are you ready?",
      body:
        "Sponsorship is not the first monetisation route for most shows, and treating it as the obvious next step after episode ten leads to a lot of unanswered emails.\n\nWhat sponsors are really buying is predictability and definition: a show that publishes consistently, to an audience someone can describe in a sentence. A fortnightly show with 900 committed listeners in a specific field is a far easier sell than an irregular one with 3,000 casual ones, because the first can be reasoned about and the second can't.\n\nThe download thresholds are worth knowing plainly. Major ad networks typically want **10,000–20,000 downloads per episode**. Many networks set minimums around **5,000–10,000**. Some platforms start at **500**. And affiliate, flat-rate, and lead-based deals have **no minimum at all** — shows with 200–1,000 downloads sign sponsors regularly.\n\nSo the honest test isn't \"am I big enough?\" It's \"can I describe who listens, and do I publish reliably enough that a brand can plan around me?\" If you want a number rather than a feeling, the [sponsorship calculator](/podcast-sponsorship-calculator) will estimate what your show is worth at its current size, and tell you which tier of deal is realistically open to you.",
    },
    {
      id: "what-youre-worth",
      heading: "What your show is actually worth",
      body:
        "Podcast advertising is priced on **CPM** — cost per *mille*, meaning cost per 1,000 downloads. A $25 CPM on an episode doing 2,000 downloads makes that ad slot worth $50. That's the whole formula; everything else is which CPM applies.\n\nHere's where the 2026 market sits:\n\n| Placement | CPM |\n| --- | --- |\n| Pre-roll | $15–$25 |\n| Mid-roll | $25–$50 |\n| Post-roll | $10–$20 |\n\nAnd by how the ad is made:\n\n| Ad type | CPM |\n| --- | --- |\n| Programmatic | $12–$20 |\n| Pre-recorded network ads | $15–$30 |\n| Host-read sponsorships | $25–$40 |\n| Niche high-value audiences (business, finance, tech) | often $40+ |\n\n**Mid-roll is worth the most because of what it proves.** Anyone can trigger a pre-roll by pressing play. Only a genuinely engaged listener is still there twenty minutes in — and that attention is precisely what an advertiser is paying for. It's the same logic that makes host-read spots worth double programmatic ones: a recommendation in your own voice converts like a recommendation, not like an ad.\n\nOne caution on the numbers you quote: make sure you're measuring downloads the way the industry does, which is per episode over the first 30 days. Our guide to [the podcast metrics that actually matter](/blog/podcast-analytics-metrics-that-matter) covers what counts as a download and which figures a sponsor will actually ask for. To put your own numbers through the maths, the [sponsorship calculator](/podcast-sponsorship-calculator) breaks it down slot by slot.",
    },
    {
      id: "deal-structures",
      heading: "The three ways sponsorship deals are structured",
      body:
        "**CPM deals** price each 1,000 downloads at an agreed rate. This is the standard model for networks and larger direct deals. It's predictable and easy to justify on both sides, but it needs scale to produce a meaningful number — which is exactly why it feels so discouraging when you're small.\n\n**Flat-rate deals** set a fixed fee per episode or per series, regardless of downloads. This is usually the better deal for smaller shows, because you stop selling volume and start selling relevance. A B2B software company doesn't care that you have 700 listeners; it cares that 700 of the right people will hear a considered recommendation from someone they trust.\n\n**Affiliate and performance deals** pay you on results — a promo code, a signup, a sale. There's no download minimum whatsoever, which makes this the most accessible entry point in podcasting. The income is unpredictable and usually modest at first, but it proves the concept: once you can show a brand that your audience actually acts, you have a case for a flat fee next time.\n\nFor shows under roughly 1,000 downloads an episode, flat-rate and affiliate deals will almost always beat what CPM maths suggests. Don't let a discouraging CPM number talk you out of an approach that would have worked.",
    },
    {
      id: "where-to-find",
      heading: "Where to find sponsors",
      body:
        "**Brands you genuinely use.** The easiest pitch you will ever write is to a company whose product is already open on your desk. You can speak about it credibly, the ad writes itself, and your endorsement is true — which listeners can hear.\n\n**Your guests and their companies.** They already know the show, they've already had a good experience with it, and they've already got a reason to care about your audience. This is the warmest list you have and most hosts never use it.\n\n**Listeners who run businesses.** Survey your audience. A surprising share of the people listening to a specialist show run something relevant to it, and the answer to \"who should sponsor us?\" is frequently already sitting in your inbox.\n\n**Ad networks and marketplaces.** Genuinely useful once you're at the scale they require, and they handle the selling. They also take a cut, and you lose some control over what gets read on your show.\n\n**The sponsors of shows like yours.** If a brand is already sponsoring a similar podcast, you don't have to sell them on the medium — only on your audience. That's half the pitch already done.",
    },
    {
      id: "media-kit",
      heading: "The media kit",
      body:
        "A media kit is just a one- or two-page document that answers everything a sponsor would otherwise have to email you about. Include:\n\n- **Show description and positioning** — what it is, who it's for, in plain language.\n- **Audience size** — downloads per episode over the first 30 days, which is the standard measure. State it plainly.\n- **Audience demographics and location** — roles, industries, countries. Whatever your host gives you.\n- **Engagement signals** — reviews, completion rate, community size, email list. These matter more than raw downloads for a small show.\n- **Example placements** — short audio samples of ads you've read, so they can hear what they're buying.\n- **Past sponsor results** — if you have any, even modest ones.\n- **Your rates** — and what each includes.\n- **Contact details** — one clear route.\n\nOne rule above all: **be honest about size**. Sponsors check, and many run their own attribution. A padded download number doesn't win you a deal; it ends the relationship at the point it would otherwise have started. A small number presented confidently, next to a sharp description of who those listeners are, is a far stronger position than an inflated one you can't stand behind.",
    },
    {
      id: "how-to-pitch",
      heading: "How to pitch (with a template)",
      body:
        "Keep it short, specific, and free of pleading. Lead with fit — why *this* brand and *this* audience — and make the ask a single clear next step.\n\n> **Subject:** [Show name] — potential fit with [Brand]\n>\n> Hi [name],\n>\n> I host [show name], a [weekly/fortnightly] podcast for [specific audience]. We do around [X] downloads an episode, and the audience is mostly [role/industry/location].\n>\n> I've been using [product] for [time] and mention it unprompted often enough that a proper partnership seems worth asking about. Our listeners are [specific reason they're a fit — the problem the product solves].\n>\n> I've attached a short media kit with audience numbers and a sample host-read placement. Would you be open to a 15-minute call next week to see if there's a fit?\n>\n> Best,\n> [name]\n\nThat's it. No apologising for your size, no paragraph about how passionate you are, no five options to choose between. If you don't hear back, follow up once after ten days and then leave it — silence is usually budget timing rather than rejection, and the same brand may say yes next quarter.",
    },
    {
      id: "what-to-charge",
      heading: "What to charge if you're small",
      body:
        "Price on relevance, not reach. That single reframe changes the conversation from one you'll lose (you have fewer downloads than a bigger show) to one you can win (your listeners are exactly the people this brand is trying to reach).\n\nPractical tactics that work at small scale:\n\n- **Flat rates per episode**, rather than CPM, so the conversation isn't about volume.\n- **Bundle several episodes** — a four- or six-episode run is worth more to a sponsor than a one-off, because repetition is what actually shifts behaviour, and it's more money and less admin for you.\n- **Offer a trial run** — two episodes at a modest rate, with results reported honestly afterwards. Low risk for them, and it gets you a case study.\n- **Charge for the extras**, if you're producing them: a dedicated social clip, a newsletter mention, a link in the show notes.\n\nRemember that specialist audiences command premium rates — business, finance, and tech shows often clear $40+ CPM, well above a general-interest show of the same size. A small, sharply-defined audience is a genuine asset, and it should be priced like one. The [sponsorship calculator](/podcast-sponsorship-calculator) has a reverse mode that tells you what downloads you'd need to hit a given monthly target, which is a useful sanity check before you name a number.",
    },
    {
      id: "delivering-the-ad",
      heading: "Delivering the ad well",
      body:
        "Host-read ads outperform pre-recorded ones — that's the entire reason they command $25–$40 CPM against $12–$20 for programmatic. But that premium only holds if the read is actually good.\n\n**Write it in your own voice.** Take the brand's talking points and rewrite them as something you'd plausibly say out loud. A script read verbatim off a brand deck is instantly recognisable and destroys the advantage you're being paid for.\n\n**Place it after the hook, not cold at the top.** Give listeners a reason to stay first, then run the ad. A sponsor message before anyone has decided to care is the fastest skip in podcasting.\n\n**Be honest.** Don't claim to use something you don't. Listeners are unusually good at detecting this, and you're spending trust you can't easily rebuild.\n\n**Mix it properly.** An ad noticeably louder or thinner than the rest of the episode jars, and the jarring gets attributed to the brand. It should sit at the same level and tone as everything around it — which is a mixing job as much as an editing one, covered in our [audio quality guide](/blog/podcast-audio-quality-guide).",
    },
    {
      id: "renewals",
      heading: "Renewals are where the money is",
      body:
        "Winning a sponsor is expensive in time; keeping one is nearly free. Yet most hosts deliver the campaign, invoice, and go quiet.\n\n**Report back with real numbers.** Downloads on the sponsored episodes, promo code redemptions, link clicks. Even modest results, presented clearly and without spin, put you ahead of most of the shows a brand works with.\n\n**Use unique promo codes or tracked links.** Without attribution the sponsor has no way to justify renewing, and \"it felt like it went well\" is not a renewal case.\n\n**Make renewing easy.** Propose the next run before the current one ends, with dates and a price. A renewed sponsor is worth several new pitches, and a small show with three renewing sponsors is in a much better position than one endlessly chasing new ones.",
    },
    {
      id: "mistakes",
      heading: "Common mistakes",
      body:
        "- **Inflating download numbers.** The fastest way to end a relationship before it starts.\n- **Pitching brands with no audience overlap.** A scattergun list of 200 companies converts worse than five genuinely relevant ones.\n- **Burying the ad** at the very end, or somewhere nobody reaches. If you're paid for attention, put it where the attention is.\n- **No media kit.** Making a sponsor ask basic questions adds friction at exactly the wrong moment.\n- **Giving up after one round of silence.** Budget cycles are slow. One polite follow-up costs nothing.\n- **Underpricing out of nervousness.** A rate that's obviously too low reads as a lack of confidence in the audience — and it's very hard to raise later.\n\nOne more, less obvious: treating sponsorship as the only route. Clips, search traffic, and an email list all compound in ways a single sponsor doesn't — our guides to [repurposing each episode](/blog/repurpose-podcast-content) and [podcast SEO](/blog/podcast-seo-guide) cover the parts that keep working after the campaign ends.",
    },
    {
      id: "well-made-show",
      heading: "Sponsors are buying a well-made show",
      body:
        "Underneath all of the above sits something simple: a sponsor is lending you their reputation for sixty seconds, and they're reading every signal available about whether that's safe. Consistent audio, proper show notes, clips that travel, episodes that arrive when you said they would — these read as competence, and competence is what makes a show easy to say yes to.\n\nThat's the part we handle. If the production side is what's stopping your show from looking sponsor-ready, [see what we do](/services) or [get a quote](/contact).",
    },
  ],
  faqs: [
    {
      question: "How many downloads do I need to get a podcast sponsor?",
      answer:
        "Major ad networks typically want 10,000–20,000 downloads per episode, and many networks set minimums around 5,000–10,000. Some platforms start at 500. Affiliate, flat-rate, and lead-based deals have no minimum at all — shows with 200–1,000 downloads sign sponsors regularly by selling relevance rather than reach.",
    },
    {
      question: "How much do podcast sponsors pay?",
      answer:
        "Sponsorship is usually priced on CPM — cost per 1,000 downloads. In 2026, pre-roll runs about $15–$25 CPM, mid-roll $25–$50, and post-roll $10–$20. Across all formats and genres the market sits roughly between $12 and $55 CPM.",
    },
    {
      question: "Should I use an ad network or sell directly?",
      answer:
        "Networks handle the selling and are genuinely useful once you meet their download thresholds, but they take a cut and you lose some control over what runs on your show. Selling directly takes more of your time but pays more per deal and works at any size — it's the only realistic option for shows below network minimums.",
    },
    {
      question: "What is a good CPM for a podcast?",
      answer:
        "It depends on placement and format. Mid-roll is the premium slot at $25–$50 CPM, against $15–$25 for pre-roll and $10–$20 for post-roll. Host-read sponsorships earn $25–$40 while programmatic ads pay $12–$20. Niche high-value audiences in business, finance, and tech often clear $40+ CPM.",
    },
    {
      question: "Can a small podcast get sponsors?",
      answer:
        "Yes. Affiliate, flat-rate, and lead-based deals have no download minimum, and shows with 200–1,000 downloads sign sponsors regularly. Below roughly 1,000 downloads an episode, flat-rate and affiliate arrangements almost always earn more than CPM pricing would, because you're selling how relevant your audience is rather than how large.",
    },
  ],
  references: sources,
};
