import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

/**
 * Decision-stage post: "how do agencies CHARGE?"
 *
 * Deliberate boundary against how-much-does-podcast-production-cost-per-
 * episode.ts:
 *   - THAT post owns the NUMBER — price bands by supplier type, what moves
 *     them, what you get at each level. It has the band table.
 *   - THIS post owns the STRUCTURE — retainer vs per-episode, minimum terms,
 *     rollover, what's bundled, the costs that appear later, and how to get
 *     two quotes onto the same basis. The reader already has quotes.
 *
 * Rule for future edits: no price band table here, and no contract mechanics
 * over there. The moment this post starts answering "what will it cost",
 * the two are competing for the same query.
 *
 * Evidence discipline: this post makes claims about how agencies commonly
 * structure pricing. Those are framed as what we see in the market and in
 * client-supplied quotes, never as survey data, and no named competitor's
 * terms are described. Do not add a "typical agency charges £X" line — that
 * belongs in the cost post and would need a source.
 */

const modelTable = [
  "| | Per episode | Monthly retainer |",
  "| --- | --- | --- |",
  "| **You pay for** | Each episode produced | A fixed number of episodes per month |",
  "| **Unit cost** | Higher | Lower — usually 10–25% below per-episode rates |",
  "| **Turnaround** | Queue-based. You're fitted in | Contracted. Capacity is reserved for you |",
  "| **Quiet month** | You pay nothing | You pay in full, used or not |",
  "| **Busy month** | Available if they have capacity | Overflow billed at an agreed rate |",
  "| **Commitment** | None beyond the episode | Notice period, sometimes a minimum term |",
  "| **Best for** | Testing a format, irregular publishing | An established show on a fixed schedule |",
].join("\n");

const compareTable = [
  "| Line item | Ask specifically | Why it matters |",
  "| --- | --- | --- |",
  "| Audio edit | Light clean-up or full content edit? | A threefold difference in labour, often described identically |",
  "| Video | Included, extra, or single-camera only? | The single biggest cost variable between quotes |",
  "| Show notes | Written per episode, or a template? | \"Show notes included\" can mean two lines of boilerplate |",
  "| Transcript | Raw machine output or reviewed? | Unreviewed AI transcripts need correcting before publishing |",
  "| Clips | How many, and produced or straight cut-downs? | \"Social clips\" ranges from a trim to a designed asset |",
  "| Revisions | How many rounds are included? | The most common source of unexpected invoices |",
  "| Turnaround | Working days from receipt, in writing? | A range is not a commitment |",
  "| Publishing | Do they upload and schedule, or hand over files? | The last mile is often quietly excluded |",
  "| Rush work | What's the surcharge, and when does it apply? | Worth knowing before you need it |",
  "| Asset ownership | Do you keep project files and raw recordings? | Decides how hard it is to leave |",
].join("\n");

export const podcastProductionAgencyPricing: BlogPost = {
  slug: "podcast-production-agency-pricing",
  title: "Podcast Production Agency Pricing: How It Actually Works",
  seoTitle: "Podcast Production Agency Pricing",
  metaDescription:
    "How podcast production agency pricing works: retainers vs per-episode, minimum terms, what's bundled, hidden costs, and how to compare quotes fairly.",
  publishedAt: "2026-08-12",
  category: "Podcast Strategy",
  author: shaunaMartin,
  readingTime: "10 min read",
  coverImage: {
    src: "/images/blog/agency-pricing-hero.svg",
    alt: "Two podcast production agency pricing quotes side by side with mismatched line items being aligned for comparison",
  },
  intro:
    "Podcast production agency pricing comes in two shapes: **per episode**, where you pay for what you publish, and **monthly retainer**, where you pay a fixed fee for an agreed number of episodes. Retainers usually work out 10–25% cheaper per episode and come with a contracted turnaround; per-episode billing costs more but commits you to nothing.\n\nThat much is simple. What makes agency quotes hard to compare is that two proposals at the same headline price routinely contain different amounts of work — and the differences sit in line items that sound identical.\n\nThis post covers how the models actually work, what's typically bundled, the costs that surface later, and a checklist for getting competing quotes onto the same basis. If what you want is the number rather than the structure, [how much podcast production costs per episode](/blog/how-much-does-podcast-production-cost-per-episode) has the price bands.",
  keyTakeaways: [
    "Two models dominate: per-episode and monthly retainer. Retainers trade flexibility for a lower unit cost and reserved capacity.",
    "\"Show notes included\" and \"social clips included\" are the two phrases that most often hide a large difference in scope.",
    "Revision rounds are the most common source of invoices clients didn't expect.",
    "A turnaround range is not a commitment. Ask for working days from receipt, in writing.",
    "Ask who owns the project files and raw recordings before you sign, not when you leave.",
  ],
  sections: [
    {
      id: "two-models",
      heading: "Podcast production agency pricing: the two models, compared",
      body:
        `Nearly all of it reduces to one of these, or a blend:\n\n${modelTable}\n\nThe trade is straightforward once you see it: **a retainer buys you a lower unit price and a guaranteed slot; per-episode buys you the freedom to stop.** Neither is better in the abstract.\n\nWhat's less obvious is why retainers are cheaper, because it isn't generosity. Reserved capacity lets a studio plan its week, and a settled show spec means episode forty is faster to produce than episode four — the format decisions are already made and written down. That efficiency is real, and it gets shared with you. It also means an agency offering a retainer discount without asking about your schedule is discounting for sales reasons rather than production ones, which is worth noticing.\n\nA third model exists and is worth avoiding for ongoing work: **hourly billing.** It aligns incentives badly — you're paying more when the work takes longer, which is exactly when something has gone wrong — and it makes budgeting impossible. It's reasonable for one-off consultancy and poor for recurring production.`,
    },
    {
      id: "retainer-detail",
      heading: "What to check inside a retainer",
      body:
        "Retainers vary far more than the headline number suggests. The terms that matter:\n\n**Does unused capacity roll over?** If you're contracted for four episodes and publish three, does the fourth carry into next month, expire, or convert to credit? Expiry is normal and defensible — the studio held the slot — but you should know before you sign rather than discover it in a quiet quarter.\n\n**What's the minimum term?** Month-to-month with a notice period is the most client-friendly and increasingly common. Twelve-month lock-ins with no exit exist and should make you ask what's being protected. Notice periods of one to two months are reasonable, because capacity is genuinely being held for you.\n\n**How is overflow priced?** If you publish six episodes in a four-episode month, what do the extra two cost? A pre-agreed overflow rate is a good sign. \"We'll sort it out\" is how relationships get awkward in month five.\n\n**Is turnaround contractual or aspirational?** This is the one worth pressing hardest on, because it's the main thing a retainer is supposed to buy. \"Usually three to five days\" is a hope. \"Four working days from receipt of files\" is a commitment. Ask which you're getting, and get it written down.\n\n**Who actually does the work?** At larger agencies the person selling you the retainer is rarely the person editing. That isn't inherently bad, but you should know whether you get a consistent editor or whoever is free that week — familiarity with your hosts compounds, and losing it every month is a real quality cost.\n\nWe set out how we handle each of these on our [monthly podcast editing retainer](/services/monthly-podcast-editing-retainer) page, including rollover and overflow, so you have something concrete to compare other proposals against.",
    },
    {
      id: "whats-bundled",
      heading: "What's actually bundled — and what usually isn't",
      body:
        "The gap between quotes is mostly here rather than in the rate.\n\n**Usually included at most price levels:** the audio edit, sound cleanup, levelling and mastering, and a basic episode description.\n\n**Included at mid and upper tiers, but always worth confirming:** video editing, chapter timestamps, a reviewed transcript, episode artwork, short-form clips, and uploading and scheduling to your host.\n\n**Frequently *not* included, even at high price points:**\n\n- **Guest booking and outreach.** Usually excluded, and reasonably so — outreach converts far better from you than from a supplier\n- **Strategy and format development.** Sometimes a separate onboarding fee\n- **Music licensing.** Often your cost, not theirs\n- **Hosting fees.** Almost always yours\n- **Rush turnaround.** Typically a surcharge\n- **Extra revision rounds** beyond the first\n- **YouTube channel management** as distinct from delivering video files\n- **Ad insertion and sponsorship fulfilment**\n\nTwo phrases deserve particular scrutiny. **\"Show notes included\"** can mean a researched, structured, SEO-considered page — or two sentences and a guest link. **\"Social clips included\"** can mean designed assets with b-roll, captions and titles, or a straight sixty-second trim exported vertically. Both are truthfully described as included, and they're not remotely the same amount of work. Ask to see an example of each from a real client before you compare on price.",
    },
    {
      id: "hidden-costs",
      heading: "The costs that show up later",
      body:
        "Not usually deception — more often things nobody thought to mention. In rough order of how often they surprise people:\n\n**Revision rounds.** The most common one by a distance. Most quotes include one round. If your organisation has three stakeholders who each want changes, you will exceed that regularly. Ask what a second and third round cost, and whether internal disagreement counts as one round or three.\n\n**Onboarding or setup fees.** Some agencies charge separately for the first month — format design, brand assets, templates, the show spec. Often legitimate work, but it should appear in the proposal rather than the first invoice.\n\n**Rush surcharges.** Reasonable in principle. Worth knowing the trigger and the multiplier in advance, because you'll need it eventually.\n\n**Long or multi-speaker episodes.** Some suppliers quote against an assumed episode length and bill above it. If your show runs long or has panels, confirm where the boundary sits.\n\n**Additional formats.** Audiograms, a square cut for one platform, a version with different branding — often billed as extras.\n\n**Storage and archive.** Rare, but some agencies charge to retain raw files beyond a period. Ask what happens to your recordings after twelve months.\n\n**Exit costs.** The one nobody asks about. If you leave, do you get project files, templates and raw recordings? Some agencies hand over everything; some hand over finished episodes only, which makes moving supplier significantly more expensive. Ask before signing — the answer is very different when you're a prospect than when you're leaving.",
    },
    {
      id: "compare-quotes",
      heading: "How to compare quotes like for like",
      body:
        `Two quotes are rarely comparable as written. Send every supplier the same list and ask them to price against it:\n\n${compareTable}\n\nThen do one more thing, which is worth more than the whole checklist: **ask each supplier for a sample episode they've produced for a client whose show resembles yours** — similar format, similar length, similar recording conditions. Listen to it properly, on decent headphones, all the way through a section rather than the first thirty seconds.\n\nProduction quality is difficult to assess from a proposal and obvious in ninety seconds of output. A studio confident in the work will send something without hesitation. Reluctance to share is itself informative.\n\nIf what you're pricing is the technical finishing rather than a full programme, [podcast post production services](/services/podcast-post-production-services) sets out how that narrower scope is normally quoted.\n\nIf you're an agency buying production to deliver under your own brand rather than buying for your own show, the terms you need are different again — [white label podcast editing for agencies](/services/white-label-podcast-editing) covers how that's normally structured, including confidentiality and client contact.`,
    },
    {
      id: "questions",
      heading: "Eight questions to ask about podcast production agency pricing",
      body:
        "Short version, if you want something to take into a call:\n\n1. **Who edits my show, and is it the same person every week?**\n2. **What's the turnaround in working days from receipt, and is it contractual?**\n3. **How many revision rounds are included, and what do further rounds cost?**\n4. **What exactly do \"show notes\" and \"clips\" mean here — can I see an example?**\n5. **What happens to unused episodes in a quiet month?**\n6. **What's the notice period, and is there a minimum term?**\n7. **Do I keep the project files and raw recordings if I leave?**\n8. **What's not included that I'm likely to need?**\n\nThat last question is the most useful one on the list. A supplier who answers it openly — naming the things they don't do — is describing their scope accurately. A supplier who says \"everything's included\" is either not listening or hasn't read their own proposal.\n\nOne further thing worth watching for: whether the agency asks *you* questions before quoting. A price given without knowing your episode length, speaker count, recording setup or cadence is a price that will change later. The proposals that hold are the ones that came after a proper conversation about the show.\n\nIf you'd like a quote structured this way — every line item priced separately, turnaround in working days, and the exclusions listed plainly — [tell us about your show](/contact) and we'll put one together. It's also fine to use the checklist above on us.",
    },
  ],
  faqs: [
    {
      question: "How does podcast production agency pricing usually work?",
      answer:
        "Two models dominate: per-episode billing, where you pay for what you publish, and monthly retainers, where a fixed fee covers an agreed episode count. Retainers typically run 10–25% below per-episode rates and include a contracted turnaround, because reserved capacity and a settled show format make production faster.",
    },
    {
      question: "Is a podcast retainer better than paying per episode?",
      answer:
        "It depends on how predictably you publish. A retainer is cheaper per episode and guarantees turnaround, but you pay in full during quiet months. Per-episode billing costs more and commits you to nothing. Established shows on a fixed schedule suit retainers; formats still being tested suit per-episode.",
    },
    {
      question: "What's usually not included in podcast production pricing?",
      answer:
        "Guest booking, music licensing, hosting fees, rush turnaround, revision rounds beyond the first, and format strategy are commonly excluded. Onboarding is sometimes billed separately. Ask directly what isn't included — suppliers who name their exclusions are describing scope accurately rather than overselling.",
    },
    {
      question: "How many revisions should a podcast production quote include?",
      answer:
        "One round is standard. That's usually enough once a show spec has settled, but organisations with several stakeholders regularly exceed it. Ask what additional rounds cost and whether conflicting internal feedback counts as one round or several — this is the most frequent source of unexpected invoices.",
    },
    {
      question: "Should I sign a long-term podcast production contract?",
      answer:
        "Rarely necessary. Month-to-month with a one or two month notice period is common and reasonable, since capacity is genuinely being reserved. Twelve-month lock-ins with no exit are worth questioning — ask what the commitment protects, and what happens if the show's format or volume changes.",
    },
    {
      question: "Who owns the podcast files if I leave an agency?",
      answer:
        "Ask before signing. Practice varies: some hand over project files, templates and raw recordings; others provide finished episodes only, which makes changing supplier considerably more expensive. Working inside your own hosting account and keeping your raw recordings is the simplest protection.",
    },
  ],
};
