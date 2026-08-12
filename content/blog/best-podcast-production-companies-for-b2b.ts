import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

/**
 * Competitor roundup. The riskiest post on the site — read this before
 * editing anything below.
 *
 * RULES, in order of importance:
 *
 * 1. NO INVENTED FACTS ABOUT ANY COMPANY. Every claim about a competitor
 *    below traces to that company's own public site or to widely published
 *    material, researched August 2026. Where a figure could not be verified
 *    from a primary source it is a [TK: verify] in a CODE COMMENT and simply
 *    absent from the body — never a guess, never "approximately".
 *
 * 2. NO PRICING FOR COMPETITORS. Third-party listicles quote figures for
 *    these agencies; none were verifiable from the agencies themselves, and
 *    agency pricing changes constantly. The post therefore describes
 *    engagement SHAPE (retainer, programme, project) and not numbers. Do not
 *    add competitor prices without a primary source.
 *
 * 3. NO SNARK. Each entry describes what that company is genuinely good at.
 *    A roundup that rubbishes the competition destroys the credibility the
 *    post exists to build, and readers recognise it instantly.
 *
 * 4. DISCLOSURE IS NON-NEGOTIABLE. We are on this list and it is our site.
 *    That is stated in the intro, before the list, not buried at the end.
 *
 * 5. OUR OWN ENTRY IS HONEST ABOUT WHAT WE ARE NOT. We are a small studio,
 *    not a full-service agency: no guest booking, no strategy team, no paid
 *    distribution. Saying so is the point of the post.
 *
 * Verified August 2026 from company sites and public sources:
 *   - Lower Street: London, founded 2016, acquired Pacific Content in 2024,
 *     enterprise/narrative B2B, clients incl. Adobe, BCG, PepsiCo, HPE,
 *     Booking.com.
 *   - Rise25: operating since 2008, 40+ team, relationship/referral model
 *     ("Dream 100"), guest booking included.
 *   - Content Allies: B2B, positions podcasts as an ABM channel, offers
 *     analytics/attribution dashboards and paid distribution.
 *   - Resonate Recordings: Louisville KY, established 2014, states 3,000+
 *     podcasters served and 16 Apple #1 titles.
 *
 * [TK: verify — Lower Street engagement minimums. Third-party sources quote
 * an annual budget range; nothing stated on their own site. Omitted.]
 * [TK: verify — Content Allies monthly retainer range. The figure circulating
 * is described as typical for "similar agencies", not theirs. Omitted.]
 * [TK: verify — Rise25 team size of 40+ is from their own about page; confirm
 * before treating as current.]
 *
 * NOTE: no `itemList` is emitted. The BlogListItem contract requires a
 * site-relative URL per item ("the item's own page"), and we have no internal
 * pages for competitors. Emitting external URLs would break that contract,
 * and ranking competitors in ItemList schema would also assert an ordering
 * this post deliberately does not make.
 */

const comparisonTable = [
  "| Company | Based | Best for | Engagement shape |",
  "| --- | --- | --- | --- |",
  "| Lower Street | London, global team | Enterprise brands wanting narrative, story-led shows | Full-service programme |",
  "| Rise25 | US, distributed | Using a podcast to build referral relationships | Full-service, guest booking included |",
  "| Content Allies | US | Treating the show as an account-based marketing channel | Full-service with attribution reporting |",
  "| Resonate Recordings | Louisville, US | Broad production needs plus hosting in one place | Production platform and services |",
  "| Selected Frequencies | Northern Ireland, remote | Consistent production on a long-running show, direct with the editor | Per-episode or monthly retainer |",
].join("\n");

export const bestPodcastProductionCompaniesForB2b: BlogPost = {
  slug: "best-podcast-production-companies-for-b2b",
  title: "The Best Podcast Production Companies for B2B in 2026",
  seoTitle: "B2B Podcast Production Companies",
  metaDescription:
    "The best podcast production companies for B2B, compared honestly — including us. What each one is genuinely good at, and which type of show suits which.",
  publishedAt: "2026-08-12",
  category: "Podcast Strategy",
  author: shaunaMartin,
  readingTime: "11 min read",
  coverImage: {
    src: "/images/blog/b2b-companies-hero.svg",
    alt: "A shortlist of the best podcast production companies for B2B compared across specialism and engagement type",
  },
  intro:
    "There is no single best B2B podcast production company, and any roundup claiming otherwise hasn't thought about it very hard. The best podcast production companies for B2B split into four distinct groups, and the one you need depends entirely on what you're missing. There are companies that suit **enterprise narrative shows**, companies built around **turning a podcast into referral relationships**, companies that treat the show as an **account-based marketing channel**, and studios that just produce your show **reliably, every week, for years**. Those are different products.\n\n**Disclosure, up front: this is our website, and we're on the list.** We've put ourselves where we honestly belong rather than at the top, and we've described our competitors as accurately as we can from their own public material. If you'd rather read a roundup with no vested interest, that's a completely reasonable instinct — read this one for the framing of *which type* you need, then verify the specifics yourself.\n\nBelow: how to work out which category you're actually shopping in, then the companies worth knowing in each.",
  keyTakeaways: [
    "Pick the category before the company — full-service agency, relationship-led, ABM-focused, or production studio.",
    "Full-service agencies bundle strategy, guest booking and distribution. You pay for all of it whether you use it or not.",
    "If you already know your format and just need it produced well, an agency programme is usually overspend.",
    "Ask every shortlisted company for a sample episode from a show like yours. Ninety seconds tells you more than a proposal.",
    "This is our site and we're on the list — treat the framing as useful and verify the specifics.",
  ],
  sections: [
    {
      id: "which-category",
      heading: "The best podcast production companies for B2B, at a glance",
      body:
        `Every company on this shortlist is good at something different:\n\n${comparisonTable}\n\nMost bad agency decisions come from shopping in the wrong category rather than picking the wrong company. There are broadly four, and they solve different problems:\n\n**1. Full-service branded podcast agencies.** Strategy, format development, production, promotion, sometimes hosting the show themselves. You're buying a programme. Right when the podcast is a significant marketing investment with a budget to match and internal capacity is thin. Expensive, and much of the value is in the strategy — so if you already know exactly what your show is, you're paying for advice you don't need.\n\n**2. Relationship and referral-led agencies.** Same production, but the model is built around who you interview rather than how many people listen. The podcast is an excuse to build relationships with people you want as clients or partners. Genuinely different thinking, and it suits high-value B2B where one relationship pays for the programme.\n\n**3. ABM and demand-gen focused agencies.** Production plus attribution, targeting and paid distribution. For companies that need the show to report into a marketing dashboard alongside everything else.\n\n**4. Production studios.** They make your show, well, consistently. No strategy team, no guest booking, no paid media. Right when you know your format, you have someone to host it, and what you need is for the work to be done properly and on time — indefinitely.\n\nThe honest test: **do you need someone to tell you what your podcast should be, or do you need someone to make the one you've already got?** Category one or two for the first, category four for the second. Getting this wrong in either direction is where the money goes.`,
    },
    {
      id: "lower-street",
      heading: "Lower Street — best for enterprise, story-led shows",
      body:
        "London-based, founded in 2016, with a distributed team. In 2024 they acquired Pacific Content, one of the best-known names in branded podcasting, which consolidated a lot of high-end capability in one place.\n\nTheir strength is narrative and story-driven work — shows that are properly produced pieces of media rather than recorded conversations. That's a genuinely different craft from interview production: scripting, sound design, structure across a series. Their published client list includes Adobe, BCG, PepsiCo, HPE and Booking.com, which tells you the tier they operate at.\n\n**Best for:** enterprise brands who want a flagship show with real production values, and who have the budget and internal patience for a strategy-led process.\n\n**Probably not for you if:** you publish a weekly interview show and need it edited. That's not what they're built for, and you'd be paying for capability you wouldn't use.",
    },
    {
      id: "rise25",
      heading: "Rise25 — best for podcasts as a referral engine",
      body:
        "Operating in business podcasting since 2008, with a distributed team. Their model is the most distinctive on this list and the most misunderstood.\n\nRise25 treat the podcast primarily as a relationship-building mechanism rather than a content channel. The framing is around a \"Dream 100\" — the clients, partners and referral sources you most want a relationship with — and the show is the reason to get an hour with each of them. Downloads are almost beside the point; the return is the conversation and what follows it. They include guest booking, which most production companies don't.\n\nThat's a legitimate and often underrated strategy. For a B2B business with high lifetime client value, one relationship can pay for years of production, and a podcast is a far warmer approach than a cold email.\n\n**Best for:** B2B companies with high-value clients, where the point is who you talk to rather than how many people hear it.\n\n**Probably not for you if:** you want audience growth as the primary outcome, or you already have strong relationships with your target accounts and need reach instead.",
    },
    {
      id: "content-allies",
      heading: "Content Allies — best for ABM-minded marketing teams",
      body:
        "A US agency positioning B2B podcasts explicitly as an account-based marketing channel. Production plus the surrounding apparatus: SEO show notes, human-verified transcription, multi-channel publishing, social repurposing, and reporting and attribution dashboards, along with paid distribution options.\n\nThe distinguishing thing is the measurement layer. Most production companies — us included — will tell you honestly that podcast attribution is hard and largely lives in your own analytics. Content Allies have built more of an answer to that question, which matters if you're accountable to a CMO who wants the podcast in the same report as paid search.\n\n**Best for:** established B2B companies where the show has to justify itself in marketing reporting, and where a long-term programme is realistic.\n\n**Probably not for you if:** you're early, still testing the format, or your show is a founder's project rather than a marketing channel with targets attached.",
    },
    {
      id: "resonate",
      heading: "Resonate Recordings — best for breadth in one place",
      body:
        "Established in 2014 and based in Louisville, Kentucky. They combine production services with their own hosting platform, and state they've worked with over 3,000 podcasters, including 16 shows that reached number one on Apple Podcasts. Their published client list includes Honda, Amazon, EA Sports, Stanford and Mars.\n\nThe appeal is breadth and self-service alongside full production — launch help, audio and video, hosting, marketing support. If you want fewer suppliers and are happy to work through a platform, that consolidation is genuinely convenient.\n\n**Best for:** teams who want production and hosting from one company, or who want to scale services up and down without renegotiating.\n\n**Probably not for you if:** you want a single named producer who knows your show intimately. Platform-scale operations and deep individual familiarity pull in different directions.",
    },
    {
      id: "us",
      heading: "Selected Frequencies — best for long-run consistency, direct with the editor",
      body:
        "Us. Small studio, based in Northern Ireland, working remotely with clients across the UK, US and Europe.\n\nWhat we're genuinely good at is the unglamorous thing: producing a show to the same standard, every week, for years, so that episode 200 sits correctly next to episode 12. That's a process-and-spec problem rather than a creative one, and it's what most long-running shows actually need. We produce The Genetics Podcast for Sano Genetics — 248 episodes and counting — and The Bitcoin Collective, which has published weekly since 2021 without a gap. You can see the [full client list and case studies](/work) rather than taking that on trust.\n\nThe other difference is structural: you deal directly with the person editing your show. There's no account manager relaying notes, and no scheduling a call to get a change made. For some buyers that's the main attraction; for others it's a limitation, because it means there's no team to escalate to.\n\nWe also publish our rates rather than requiring a discovery call to find out whether we're in your budget.\n\n**Best for:** shows that know what they are and need reliable, high-standard production — particularly long-running catalogues, and regulated or technical sectors where accuracy through the edit matters.\n\n**Probably not for you if:** you need a full agency programme. We don't book your guests, we don't run paid distribution, and we don't have a strategy department. If what you need is someone to design a show from scratch and take it to market, one of the agencies above is a better fit and we'd tell you so on a call.",
    },
    {
      id: "others",
      heading: "Others worth a look",
      body:
        "A few more that come up regularly and may suit depending on your situation:\n\n- **Pacific Content** — now part of Lower Street following the 2024 acquisition, historically one of the most respected names in branded podcasting\n- **Casted** — closer to a podcast and video content platform for B2B marketing teams than a production agency, if tooling rather than service is your gap\n- **Sweet Fish Media** — long associated with B2B podcasting and content-led growth\n- **JAR Audio** — branded podcast agency working with larger brands\n\nWe haven't written these up in detail because we haven't verified enough about their current services to describe them fairly, and a vague paragraph is worse than none. Check their own sites rather than any roundup, including this one.",
    },
    {
      id: "how-to-choose",
      heading: "How to choose between the best podcast production companies for B2B",
      body:
        "Five things worth doing, in order:\n\n**1. Decide your category first.** Strategy programme, referral engine, ABM channel, or production studio. This single decision eliminates most of the market and saves you six discovery calls.\n\n**2. Ask for a sample episode from a show like yours.** Similar format, similar length, similar recording conditions. Listen properly — a full section on decent headphones, not thirty seconds. Production quality is nearly impossible to judge from a proposal and obvious in ninety seconds of output.\n\n**3. Ask who does the work.** At larger agencies, the person selling isn't the person editing. That's fine, but ask whether you get a consistent editor. Familiarity with your hosts compounds, and losing it every month is a real quality cost.\n\n**4. Get the quotes onto the same basis.** \"Show notes included\" and \"clips included\" mean wildly different things at different companies. Our guide to [podcast production agency pricing](/blog/podcast-production-agency-pricing) has a line-by-line checklist for this, and it's the single highest-return hour you'll spend on the decision.\n\n**5. Ask what they don't do.** A company that names its exclusions is describing scope accurately. \"Everything's included\" means nobody has read the proposal properly.\n\nIf your show is in a sector with particular constraints, that should weigh heavily — regulated industries especially. We've written specifically about [fintech podcast production](/services/fintech-podcast-production-company), [biotech and life sciences](/services/biotech-podcast-production) and [podcast production for SaaS companies](/services/podcast-production-for-saas-companies), because the compliance and vocabulary requirements in those sectors change the workflow rather than just the marketing copy.\n\nAnd if you want to work out the budget before you shortlist at all, [how much podcast production costs per episode](/blog/how-much-does-podcast-production-cost-per-episode) sets out the bands.\n\nWant us on your shortlist? [Send us an episode](/contact) and we'll tell you what we'd do differently. If we're not the right fit, we'll point you at whoever on this list is — that costs us nothing and it's a better outcome for both of us than a mismatched engagement.",
    },
  ],
  faqs: [
    {
      question: "What is the best podcast production company for B2B?",
      answer:
        "There isn't one — it depends which of four categories you need. Full-service agencies suit enterprise narrative shows, relationship-led agencies suit high-value referral building, ABM-focused agencies suit marketing teams needing attribution, and production studios suit established shows that need reliable weekly output.",
    },
    {
      question: "How much do B2B podcast production agencies charge?",
      answer:
        "Full-service agency programmes typically run as monthly retainers and sit well above per-episode production rates, because they bundle strategy, promotion and account management. Production studios charge per episode or on a smaller monthly retainer. Get every quote onto the same line items before comparing — the headline number rarely describes the same work.",
    },
    {
      question: "Do B2B podcast agencies book guests for you?",
      answer:
        "Some do, most don't. Rise25 include guest booking as part of their model. Many production companies deliberately exclude it, on the basis that outreach from your own team converts considerably better than outreach from a supplier. Check, because it's a significant workload either way.",
    },
    {
      question: "Should I hire a podcast agency or a production studio?",
      answer:
        "Ask whether you need someone to tell you what your podcast should be, or to make the one you already have. If the format, host and audience are settled, an agency programme means paying for strategy you don't need. If you're starting from a blank page, that strategy is the most valuable part.",
    },
    {
      question: "How do I compare podcast production quotes fairly?",
      answer:
        "Send every company the same list of line items — audio edit depth, video, show notes, transcript, clip count, revision rounds, turnaround in working days, publishing and asset ownership — and ask them to price against it. Then request a sample episode from a comparable show and listen to it properly.",
    },
    {
      question: "Can a small studio handle a B2B podcast as well as an agency?",
      answer:
        "For production quality and consistency, yes — and usually for less, since you're not funding account management. What a small studio can't offer is a strategy team, guest booking or paid distribution. If you need those, an agency is the right call; if you need the show made well every week, it's overspend.",
    },
  ],
  references: [
    { label: "Lower Street", url: "https://lowerstreet.co/" },
    { label: "Rise25", url: "https://rise25.com/" },
    { label: "Content Allies", url: "https://contentallies.com/" },
    { label: "Resonate Recordings", url: "https://resonaterecordings.com/" },
  ],
};
