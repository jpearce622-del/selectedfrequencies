import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";
import { getTier, formatGBP, UK_AGENCY_RANGE } from "@/data/pricing";

/**
 * Decision-stage post. The reader is choosing between HIRING and BUYING.
 *
 * Deliberate boundary against founder-podcast-time-per-week.ts:
 *   - That post answers "how many hours a week will this cost ME?" for a
 *     founder producing their own show. It owns the hours argument.
 *   - This post answers "should we staff this or buy it?" — salary versus
 *     fees, hiring risk, capacity, single points of failure. It links to the
 *     hours post rather than re-running that argument, and must stay off it.
 *
 * Pricing is imported from data/pricing.ts rather than typed out, because
 * that file is the declared single source of truth and this post shows the
 * same numbers as /services and the cost calculator. Hard-coding them here
 * would let the post drift from the rate card, which is exactly the kind of
 * contradiction a reader comparing quotes will find.
 *
 * [TK: UK podcast producer salary band — junior / mid / senior, from a source
 * we'd be happy to cite.] and [TK: the on-cost percentage to use above salary
 * — commonly quoted as 20–30%, unverified.]
 *
 * Both are deliberately NOT in the rendered body. A "[TK:" in a section body
 * publishes straight to the reader, so the in-house cost section is written to
 * work as a method the reader applies to their own salary figure instead of
 * quoting a band. Adding verified numbers later would strengthen it; the post
 * is honest and complete without them. Do not paste TK markers into `body`.
 */

function tier(id: string) {
  const t = getTier(id);
  if (!t) throw new Error(`in-house-vs-outsourced: unknown pricing tier "${id}"`);
  return t;
}

const editingOnly = tier("editing-only");
const audioVideo = tier("audio-video");
const fullProduction = tier("full-production");

/** Annual spend at a given per-episode rate. */
const perYear = (price: number, episodes: number) => formatGBP(price * episodes);

const outsourcedCostTable = [
  "| What you buy | Per episode | Fortnightly (26/yr) | Weekly (52/yr) |",
  "| --- | --- | --- | --- |",
  `| ${editingOnly.name} | ${formatGBP(editingOnly.price)} | ${perYear(editingOnly.price, 26)} | ${perYear(editingOnly.price, 52)} |`,
  `| ${audioVideo.name} | ${formatGBP(audioVideo.price)} | ${perYear(audioVideo.price, 26)} | ${perYear(audioVideo.price, 52)} |`,
  `| ${fullProduction.name} | ${formatGBP(fullProduction.price)} | ${perYear(fullProduction.price, 26)} | ${perYear(fullProduction.price, 52)} |`,
].join("\n");

const comparisonTable = [
  "| | In-house | Outsourced |",
  "| --- | --- | --- |",
  "| **Cost shape** | Fixed. Same whether you publish 12 episodes or 100 | Variable. Scales directly with episode count |",
  "| **Cost at low volume** | Poor — you pay a full salary for partial use | Strong — you pay only for what you publish |",
  "| **Cost at high volume** | Strong — marginal episodes are nearly free | Weaker — every episode carries a fee |",
  "| **Time to productive** | 2–4 months (recruit, notice period, ramp) | 1–2 weeks |",
  "| **Editorial control** | Total, immediate, in the room | High, but exercised through a spec and revision rounds |",
  "| **Turnaround** | Same-day possible | An agreed number of working days |",
  "| **Institutional knowledge** | Deep. Knows your business, your people, your history | Deep on the show; shallow on your organisation |",
  "| **Cover for holiday and sickness** | You provide it, or the show stops | Built into the arrangement |",
  "| **Single point of failure** | Severe — one person leaving can end the show | Low — capacity is the supplier's problem |",
  "| **Breadth of skill** | One person's range | Editing, video, design and writing as separate specialisms |",
  "| **Kit and software** | Your capital cost | Included in the fee |",
  "| **Confidentiality** | Strongest — no external party | Manageable via NDA, but an external party exists |",
  "| **Flexibility to stop** | Redundancy process | Notice period |",
].join("\n");

export const inHouseVsOutsourcedPodcastProduction: BlogPost = {
  slug: "in-house-vs-outsourced-podcast-production",
  title: "In-House vs Outsourced Podcast Production: How to Decide",
  seoTitle: "In-House vs Outsourced Production",
  metaDescription:
    "In-house vs outsourced podcast production compared: real costs, break-even volume, hiring risk, and when hiring in-house is genuinely the better call.",
  publishedAt: "2026-08-12",
  category: "Podcast Strategy",
  author: shaunaMartin,
  readingTime: "11 min read",
  coverImage: {
    src: "/images/blog/in-house-outsourced-hero.svg",
    alt: "A balance scale weighing an in-house podcast producer's desk against an outsourced production workflow",
  },
  intro:
    "Here's the answer before the argument. **Outsource if you publish fewer than about two episodes a week and the podcast isn't your product.** The fixed cost of a salary doesn't earn out at that volume. **Hire in-house if you publish several episodes a week across multiple shows, if the show *is* the business, or if the content genuinely can't leave the building** — at that point the per-episode fees stop making sense and a salaried producer is cheaper and faster.\n\nMost companies asking about in-house vs outsourced podcast production are in the first group and suspect they should be in the second, usually because control feels safer than it is. Below is the arithmetic, the risks on both sides, and the break-even calculation you can run on your own numbers.\n\nThis post is about whether to *staff* production or *buy* it. If your question is how many hours a week the show will take you personally, [how much time a founder podcast takes per week](/blog/founder-podcast-time-per-week) answers that one directly.",
  keyTakeaways: [
    "Outsourcing is a variable cost; hiring is a fixed one. That single difference drives most of the decision.",
    "The break-even point is roughly: fully-loaded annual salary ÷ your per-episode rate = episodes per year you'd need to publish.",
    "In-house wins on volume, immediacy and organisational knowledge. Outsourced wins on cost at low volume, breadth of skill and cover.",
    "A salary is not the cost of an employee — add employer NI, pension, kit, software, recruitment and holiday cover.",
    "The most common real-world answer is a hybrid: keep editorial and hosting in-house, buy the production.",
  ],
  sections: [
    {
      id: "the-real-question",
      heading: "The question isn't cost, it's cost shape",
      body:
        "Both options can be the cheaper one. Which is cheaper depends almost entirely on how much you publish, because the two have completely different cost shapes.\n\nAn in-house producer is a **fixed cost**. You pay the same whether the show publishes weekly, monthly, or not at all during a quiet quarter. Outsourced production is a **variable cost** — it scales up and down with your episode count, and it goes to zero when you stop.\n\nThat difference explains nearly every real decision. At low volume the fixed cost is dreadful, because you're paying a full salary for a job that occupies a fraction of a week. At high volume it's excellent, because each additional episode costs you almost nothing on the margin.\n\nSo the useful question is not \"which is cheaper?\" It's \"at what volume does the fixed cost start winning?\" — and that has a specific answer you can calculate.",
    },
    {
      id: "outsourced-cost",
      heading: "What outsourced podcast production actually costs",
      body:
        `Start with the side that's easy to price, because it's published. These are our own rates, and they're a reasonable proxy for a UK studio working directly with you rather than through an account manager:\n\n${outsourcedCostTable}\n\nSo a weekly show, fully produced — edited, show notes, artwork, clips, published for you — runs about ${perYear(fullProduction.price, 52)} a year. A weekly show where you only need the edit is closer to ${perYear(editingOnly.price, 52)}.\n\nThe wider UK market sits at roughly ${UK_AGENCY_RANGE} per episode depending on scope and who you're buying from, so treat the numbers above as one point on a range rather than the going rate. Larger agencies with strategists and account teams sit at the upper end; individual freelancers sit below it.\n\nWhat matters for this comparison is that **the number is knowable in advance and stops when you stop**. There's no notice period beyond the contractual one, no redundancy process, and no cost at all in a month you don't publish.\n\nIf you want to see how scope changes the figure for your specific show, our [podcast editing cost calculator](/podcast-editing-cost-calculator) prices it directly, and [full done-for-you podcast production](/services/done-for-you-podcast-production) covers what the top tier actually includes.`,
    },
    {
      id: "in-house-cost",
      heading: "Where in-house vs outsourced podcast production gets miscalculated",
      body:
        "This is where comparisons usually go wrong, because people compare an agency fee against a salary. A salary is not what an employee costs.\n\nThe real figure is the salary plus:\n\n- **Employer National Insurance** — a percentage of earnings above a threshold, paid on top of salary\n- **Pension contributions** — auto-enrolment sets a minimum employer contribution\n- **Recruitment** — agency fees are commonly a percentage of first-year salary, or your own time if you hire direct\n- **Equipment and software** — a decent editing machine, plus ongoing subscriptions for editing, transcription and design tools\n- **Holiday, sickness and cover** — roughly 5–6 weeks a year when episodes still need to ship\n- **Management time** — someone senior spends real hours on hiring, onboarding, reviews and direction\n\nAs a working rule, the fully-loaded cost of an employee lands meaningfully above their headline salary once all of that is counted. Rather than quote a market salary band — they vary enormously by seniority, location and whether the role is podcast-only — take the figure you'd actually offer, add the on-costs above, and use that in the calculation below. It's your salary band that decides this, not an average.\n\nThere's also a cost that never appears on a spreadsheet. A single in-house producer is a **single point of failure**. When they're on holiday, the show either pauses or somebody less practised covers it. When they leave — and podcast producers are mobile — you lose the edit, the show spec, the template files, and the accumulated knowledge of how the hosts like things, all at once. Rebuilding that takes months, and the feed is visibly worse in the meantime.",
    },
    {
      id: "comparison",
      heading: "In-house vs outsourced podcast production, compared",
      body:
        `Cost is one row of a longer table. Here's the full comparison on the dimensions that actually differ:\n\n${comparisonTable}\n\nRead that table and one thing stands out: **the columns aren't symmetrical.** In-house wins on immediacy, organisational knowledge and marginal cost at volume. Outsourced wins on cost at low volume, breadth of specialism, and resilience. Those are genuinely different kinds of advantage, and which set matters more is a fact about your organisation rather than a fact about podcasting.`,
    },
    {
      id: "break-even",
      heading: "The break-even calculation",
      body:
        "Here's the arithmetic that settles it. It's simple enough to do in your head:\n\n> **Fully-loaded annual cost of the producer ÷ your per-episode outsourced rate = episodes per year where the two break even.**\n\nPublish more than that number, in-house is cheaper. Publish fewer, outsourcing is cheaper.\n\nA worked example using our full-production rate of " +
        formatGBP(fullProduction.price) +
        " per episode:\n\n- If a producer costs you £45,000 fully loaded, break-even is about **134 episodes a year** — roughly two and a half a week\n- If they cost £60,000 fully loaded, break-even is about **179 episodes a year** — nearly three and a half a week\n\nThose are illustrative salary figures, not researched ones — substitute your own. But the shape of the answer holds regardless of what you plug in, and it's worth sitting with: **a single weekly show, at 52 episodes a year, is nowhere near break-even on any realistic salary.** You would need to be running several shows simultaneously before the numbers converge.\n\nTwo honest adjustments to that calculation, both of which favour in-house:\n\n1. **A producer does more than produce.** If they also book guests, run the social account, manage sponsorships or edit video for the rest of marketing, they're absorbing work you'd otherwise buy or leave undone. Count that, or you'll understate their value.\n2. **Cheaper tiers move the line.** If you only need the edit rather than full production, break-even at " +
        formatGBP(editingOnly.price) +
        " per episode arrives much later — you'd need to publish a great deal more before hiring pays.\n\nAnd one that favours outsourcing: the calculation assumes your in-house producer is fully occupied. If they're producing one weekly show, they are not.",
    },
    {
      id: "when-in-house",
      heading: "When hiring in-house is genuinely the right call",
      body:
        "This is the part most agency-written comparisons skip, so let's be straight about it. There are real situations where in-house is clearly better, and if you're in one of them you should hire.\n\n**You publish at genuine volume.** Multiple shows, or several episodes a week. Past the break-even point the marginal cost of an in-house episode is close to zero, and outsourcing becomes an expensive way to buy something you could own.\n\n**The podcast is the product.** If you're a media company, a network, or a business whose primary output is audio, production capability is a core competency. Outsourcing your core competency is a strategic mistake regardless of what the spreadsheet says.\n\n**The content genuinely can't leave the building.** Some internal communications, some regulated material, some pre-announcement content. An NDA covers most situations, but not all of them, and if yours is one of the exceptions the decision is already made. That said — plenty of organisations assume they're in this category when they aren't. Ask your legal team rather than guessing.\n\n**You need same-day turnaround, repeatedly.** Not occasionally — that can be arranged with any decent supplier — but as the normal operating rhythm. A news-reactive daily show is very hard to run through an external workflow.\n\n**The role is genuinely full-time.** If the person will also run video for the wider marketing team, produce webinars, handle events audio and manage the YouTube channel, you're hiring a media producer who happens to do the podcast. That's a much easier business case than a podcast-only hire, and it's how most successful in-house hires are actually structured.\n\nIf you're reading that list and nodding, hire. This post isn't trying to talk you out of it.",
    },
    {
      id: "when-outsourced",
      heading: "When outsourcing is the right call",
      body:
        "The mirror image, and the situation most B2B companies are actually in.\n\n**You publish weekly or less.** At 52 episodes a year or fewer, the fixed cost of a salary is very hard to justify against a variable fee.\n\n**You're not sure the show will last.** Most podcasts don't survive their first year. A notice period is a much cheaper exit than a redundancy process, and being able to stop cleanly is worth real money when you're testing a format.\n\n**You need several skills at once.** A single episode can need audio editing, video editing, motion graphics, copywriting and design. One in-house hire is strong at two or three of those and adequate at the rest. Buying gets you specialists in each — which is why an outsourced episode often looks more finished than an in-house one at the same budget.\n\n**Consistency across a long run matters more than speed.** Long-running catalogues live or die on whether episode 200 sits correctly next to episode 12. That's a process-and-spec problem, and it's what an [ongoing monthly podcast editing retainer](/services/monthly-podcast-editing-retainer) is designed around — reserved capacity, a fixed turnaround, and the same person on your show every week.\n\n**The show supports the business rather than being the business.** For most B2B companies the podcast is a marketing channel among several. [Outsourced podcast production for B2B companies](/services/outsourced-podcast-production) covers what that arrangement looks like in practice, and why the operational load — not the creative work — is what usually kills a company show.",
    },
    {
      id: "hybrid",
      heading: "The hybrid most companies actually land on",
      body:
        "In practice the choice is rarely binary, and the split that works is remarkably consistent:\n\n**Keep in-house:** the hosting, the editorial direction, guest booking and relationships, and final approval. These are the parts that require being inside your business — knowing which customer to interview, which claim needs legal sign-off, which subject is politically awkward this quarter. They're also the parts that convert badly when outsourced, because guest outreach from a company converts far better than outreach from a production supplier.\n\n**Buy in:** editing, mixing and mastering, video, show notes, chapters, transcripts, artwork, clips and publishing. These are craft and process work. They benefit from specialist tooling and repetition, they don't require organisational context, and they're the tasks that pile up and stop the show.\n\nThere's a third thing worth knowing, because it collapses a lot of this argument: **the integration gap between in-house and outsourced is mostly a choice, not a law.** The reason people reach for an in-house hire is usually proximity — someone in the room, in the channel, who picks things up without being briefed. But an external producer can work inside your Slack, your Notion, your Monday board or your WhatsApp group just as easily as an employee can, and most of the day-to-day friction people attribute to outsourcing is really the friction of a supplier who insists on their own process.\n\nWhen that's set up properly you get most of the in-house benefit on the outsourced cost base: the producer is reachable where your team already works, they absorb context about campaigns and product launches without a handover, and questions that would otherwise become a scheduled call get answered in a thread. It also means the adjacent expertise — what your analytics mean, whether a sponsorship is worth taking, how to migrate a back catalogue — is available to your team rather than sitting behind a statement of work. That's worth asking any external producer about directly, because it costs nothing and very few of them offer it.\n\nThat division tracks the useful test: **does this task require knowing things only your team knows?** If yes, keep it. If no, it's a candidate for buying — and it will usually be done faster and to a higher standard by someone who does only that.\n\nA narrower version of this is to keep everything except the technical finishing, which is what [podcast post production services](/services/podcast-post-production-services) covers — you record and publish, someone else handles the edit, mix and master to a written spec.",
    },
    {
      id: "how-to-decide",
      heading: "How to actually decide, in four questions",
      body:
        "If you want to resolve this in ten minutes rather than a quarter:\n\n1. **How many episodes will you publish in the next twelve months, honestly?** Not aspirationally. Take the number you'd bet money on. Under 52, outsourcing almost certainly wins on cost.\n2. **Run the break-even sum.** Fully-loaded producer cost ÷ per-episode rate. Compare it to the number from question one. If break-even is more than double your realistic volume, the decision is made.\n3. **Would the hire be full-time on podcasting, or would they absorb other media work?** If it's genuinely podcast-only at low volume, you're buying idle capacity.\n4. **What happens if that person leaves in month seven?** If the honest answer is \"the show stops for a quarter,\" price that risk in — or structure around it.\n\nOne last thing worth saying, because it's the most common unforced error: **don't hire in-house to fix a quality problem you haven't diagnosed.** If the current show sounds poor, work out whether that's a capability problem, a time problem or a brief problem first. Hiring a producer to solve what was actually an unclear format costs a great deal more than fixing the brief.\n\nIf you want a number to put next to a salary, tell us how many episodes you publish and what you need done to each one and we'll [send you a per-episode figure](/contact). And if the arithmetic says you'd be better off hiring, we'll tell you that instead — we'd rather lose the work than take on a show that should have been staffed.",
    },
  ],
  faqs: [
    {
      question: "Is it cheaper to hire an in-house podcast producer or outsource?",
      answer:
        "It depends almost entirely on volume. Outsourcing is a variable cost that scales with episodes; a salary is fixed. Below roughly 100–150 episodes a year, outsourcing is usually cheaper. Above that, an in-house producer starts winning because each additional episode costs almost nothing at the margin.",
    },
    {
      question: "How many episodes do you need to publish to justify hiring in-house?",
      answer:
        "Divide the fully-loaded annual cost of the producer by your per-episode outsourced rate. That gives the break-even episode count. For most UK salary levels against full-production rates, it lands somewhere between two and three and a half episodes a week — well above a single weekly show.",
    },
    {
      question: "What does an in-house podcast producer cost beyond salary?",
      answer:
        "Employer National Insurance, pension contributions, recruitment, editing hardware and software subscriptions, plus cover for five to six weeks of holiday and sickness a year. Management time for hiring, onboarding and direction is real too. The fully-loaded figure sits meaningfully above the headline salary.",
    },
    {
      question: "Do you lose editorial control by outsourcing podcast production?",
      answer:
        "You lose immediacy rather than control. Direction is exercised through a written show spec and revision rounds instead of a conversation across the desk, which is slower but more consistent — the spec means corrections apply automatically to every future episode rather than being re-requested each week.",
    },
    {
      question: "What should stay in-house even if you outsource production?",
      answer:
        "Hosting, editorial direction, guest booking and final approval. These need organisational context and convert far better coming from your company than from a supplier. Editing, mixing, show notes, artwork, clips and publishing are craft work that doesn't require inside knowledge, so they outsource cleanly.",
    },
    {
      question: "Is outsourcing risky if we want to bring production in-house later?",
      answer:
        "Not if you own your assets. Work inside your own hosting account, keep the raw recordings and the written show spec, and moving in-house later is straightforward. The spec matters most — it documents every format decision, so a new hire inherits the show rather than reinventing it.",
    },
  ],
};
