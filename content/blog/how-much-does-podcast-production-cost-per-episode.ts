import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";
import {
  getTier,
  getSetup,
  formatGBP,
  UK_AGENCY_RANGE,
} from "@/data/pricing";

/**
 * Decision-stage post: "what will this cost me?"
 *
 * Deliberate boundary against podcast-production-agency-pricing.ts:
 *   - THIS post answers the NUMBER. Price bands, what moves them, what you
 *     get at each level. The reader wants a figure they can budget against.
 *   - THAT post answers the STRUCTURE — retainer vs per-episode, contract
 *     terms, what's bundled, how to compare two quotes like for like. The
 *     reader has quotes in hand and can't tell them apart.
 * They cross-link. Keep the split: no contract-mechanics argument here, and
 * no band table there.
 *
 * Evidence discipline:
 *   - Our own tier prices are imported from data/pricing.ts (the declared
 *     single source of truth) so this post can never contradict the rate
 *     card or the cost calculator.
 *   - UK_AGENCY_RANGE is the repo's existing third-party market range and is
 *     already published on /services.
 *   - The freelancer and large-agency bands are framed IN THE BODY as ranges
 *     we observe from what clients tell us they've been quoted — not as
 *     survey data. That framing is load-bearing. Do not restate them as
 *     industry statistics, and do not attach a fabricated source.
 */

function tier(id: string) {
  const t = getTier(id);
  if (!t) throw new Error(`podcast-production-cost: unknown pricing tier "${id}"`);
  return t;
}

const editingOnly = tier("editing-only");
const audioVideo = tier("audio-video");
const fullProduction = tier("full-production");
const basicClips = tier("social-clips");
const advancedClips = tier("advanced-clips");

const multiCam = getSetup("multi-cam");
if (!multiCam) throw new Error("podcast-production-cost: missing multi-cam setup");

const ourTierTable = [
  "| Tier | Per episode | What you get |",
  "| --- | --- | --- |",
  `| ${editingOnly.name} | **${formatGBP(editingOnly.price)}** | ${editingOnly.includes.join(", ")} |`,
  `| ${audioVideo.name} | **${formatGBP(audioVideo.price)}** | ${audioVideo.includes.join(", ")} |`,
  `| ${fullProduction.name} | **${formatGBP(fullProduction.price)}** | ${fullProduction.includes.join(", ")} |`,
].join("\n");

const marketBandTable = [
  "| Who you're buying from | Typical per-episode range | What that usually buys |",
  "| --- | --- | --- |",
  "| Freelance editor (marketplace) | £30–£120 | The edit only. You brief, review, write notes and publish |",
  "| Experienced freelance producer | £100–£250 | Edit plus show notes or clips. One person, so capacity is the limit |",
  `| Boutique studio (direct) | ${formatGBP(editingOnly.price)}–${formatGBP(fullProduction.price)} | Edit through to full production. You deal with the person doing the work |`,
  "| Full-service agency | £400–£1,200+ | Production plus strategy, guest booking, account management |",
].join("\n");

const addOnTable = [
  "| Add-on | Cost | Notes |",
  "| --- | --- | --- |",
  `| ${basicClips.name} | ${formatGBP(basicClips.price)} per clip | ${basicClips.forWho} |`,
  `| ${advancedClips.name} | ${formatGBP(advancedClips.price)} per clip | ${advancedClips.forWho} |`,
  `| ${multiCam.name} recording | +${formatGBP(multiCam.supplement)} per episode | ${multiCam.description} |`,
].join("\n");

export const howMuchDoesPodcastProductionCostPerEpisode: BlogPost = {
  slug: "how-much-does-podcast-production-cost-per-episode",
  title: "How Much Does Podcast Production Cost Per Episode?",
  seoTitle: "Podcast Production Cost Per Episode",
  metaDescription:
    "How much does podcast production cost per episode? Real price bands from £30 to £1,200+, what drives the number, and what's included at each level.",
  publishedAt: "2026-08-12",
  category: "Podcast Strategy",
  author: shaunaMartin,
  readingTime: "10 min read",
  coverImage: {
    src: "/images/blog/podcast-cost-hero.svg",
    alt: "A price ladder showing podcast production cost per episode rising from freelance editing through boutique studio to full-service agency",
  },
  intro:
    "**Podcast production costs between roughly £30 and £1,200+ per episode.** Most business podcasts land between £110 and £400.\n\nThe spread is that wide because \"production\" describes anything from a single audio edit to a full operation including video, artwork, show notes, clips and publishing. So the honest answer to how much podcast production costs per episode is: it depends entirely on how much of the work you're handing over, and how much of it is video.\n\nBelow are the real bands by supplier type, our own published rates, the five things that actually move the number, and what you should expect to be included at each level. If what you need is help comparing two quotes you've already received, [how podcast production agency pricing works](/blog/podcast-production-agency-pricing) covers contract structures and hidden costs instead.",
  keyTakeaways: [
    "Typical range: £30–£1,200+ per episode. Most business podcasts sit between £110 and £400.",
    "Video is the single biggest cost multiplier — it can roughly double an audio-only rate.",
    "Editing is priced on the work, not the runtime. A messy 40-minute recording costs more than a clean 90-minute one.",
    "Per-episode rates almost always fall on an ongoing arrangement versus one-off bookings.",
    "The cheapest quote is rarely the cheapest outcome once your own review time is counted.",
  ],
  sections: [
    {
      id: "price-bands",
      heading: "How much does podcast production cost per episode, by supplier type",
      body:
        `Here's the market, roughly, from cheapest to most expensive:\n\n${marketBandTable}\n\nOne caveat worth stating plainly: the freelance and full-service agency ranges above are what we consistently see from clients telling us what they've been quoted elsewhere — they're observed ranges, not survey data, and I'm not going to dress them up as research. The middle row is our own published pricing, which you can check on our [services page](/services) rather than taking on trust.\n\nFor UK context specifically, the wider industry range sits at about ${UK_AGENCY_RANGE} per episode depending on scope and supplier.\n\nWhat the table doesn't show is that these bands overlap heavily in quality. A good freelancer at £150 can comfortably out-produce a mediocre agency at £600, because most of what you're buying at the top end is account management and strategy rather than better editing. Which of those you actually need is the real question.`,
    },
    {
      id: "our-rates",
      heading: "What we charge, and what's in it",
      body:
        `Rather than talk in abstractions, here's our own rate card. It's a reasonable reference point for a UK studio where you work directly with the person editing your show:\n\n${ourTierTable}\n\nAnd the common add-ons:\n\n${addOnTable}\n\nSo a weekly, fully-produced show with video comes to about ${formatGBP(fullProduction.price * 52)} a year. The same show with audio editing only is closer to ${formatGBP(editingOnly.price * 52)}.\n\nIf you want the figure for your specific show rather than a band, our [podcast editing cost calculator](/podcast-editing-cost-calculator) prices it against episode length, format and volume in about thirty seconds.`,
    },
    {
      id: "what-drives-cost",
      heading: "What decides how much podcast production costs per episode",
      body:
        "Quotes vary far more than people expect for what sounds like the same job. These are the reasons.\n\n**1. Video, by a distance.** This is the biggest single multiplier. Video editing adds a second full edit — one that has to work visually as well as audibly — plus captions, and colour and framing work. A multi-camera setup adds syncing, angle switching and colour matching on top, which is why our multi-cam supplement is " +
        formatGBP(multiCam.supplement) +
        " per episode. If budget is tight and you're not certain video is earning its cost, audio-only is where the savings are.\n\n**2. How much repair the raw audio needs.** Editing is priced on the work involved, not the runtime. A clean 90-minute conversation between two people on decent microphones is a quicker job than a messy 40-minute one with a noisy room, mismatched levels and a guest on laptop audio. Suppliers who quote purely on episode length either don't know this or are averaging the risk into everyone's price.\n\n**3. Number of speakers.** Each additional speaker adds a track to clean, level and cut between. A four-person panel is considerably more work than a two-person interview of the same length, and crosstalk makes every edit decision slower.\n\n**4. How tightly you want it cut.** \"Remove the obvious mistakes\" and \"make it feel tight and paced\" are different jobs with different price tags. A heavy content edit — cutting tangents, restructuring, removing every filler — can take three or four times as long as a light clean-up pass.\n\n**5. What comes with it.** Show notes, chapters, transcripts, artwork, thumbnails and clips are each real work. A £110 edit and a £335 full production aren't the same service at different margins; they're different amounts of labour. The [full breakdown of what post production includes](/services/podcast-post-production-services) is worth reading if you're trying to work out which line items you actually need.",
    },
    {
      id: "what-you-get",
      heading: "How much does podcast production cost per episode at each tier",
      body:
        "A rough guide to what's reasonable to expect, so you can sense-check a quote.\n\n**Under £100 per episode.** A basic audio edit. Cuts, some cleanup, levels. You should not expect show notes, video, clips, or much in the way of judgement about pacing. At the very bottom of this band you're often buying someone's first few months of experience, which can be fine for a simple two-person show and is risky for anything else.\n\n**£100–£200.** A proper audio edit from someone who knows what they're doing, mastered to a sensible loudness target, often with show notes or basic clips. This is where most solo shows and small business podcasts sit, and it's genuinely good value.\n\n**£200–£400.** Audio and video, or audio plus a full set of assets — notes, chapters, transcript, clips, artwork. This is the band most B2B podcasts land in, because it covers everything between recording and publishing without an agency's overhead on top.\n\n**£400–£800.** Full production with video, more clips, faster turnaround, and usually some strategic input on format. Reasonable for a company show that matters commercially.\n\n**£800+.** You're buying strategy, guest booking, account management and often a named producer alongside the production itself. Justifiable when the podcast is a significant channel with a budget to match; hard to justify for a show finding its feet.\n\nOne pattern worth knowing: the jump from £200 to £400 usually buys you meaningfully more work. The jump from £600 to £1,000 more often buys you more *people involved* — account managers, strategists, coordinators. Both can be worth it. They're not the same purchase.",
    },
    {
      id: "cheaper",
      heading: "How to bring the cost per episode down",
      body:
        "Five things that genuinely reduce the number, in rough order of impact.\n\n**Record better.** The single most effective cost control there is. Separate tracks per speaker, decent microphones, a room without hard echo, and levels that don't clip. Every problem you avoid at capture is repair work nobody has to bill you for — and unlike the other items on this list, it improves the show as well as the invoice.\n\n**Commit to volume.** Almost every supplier prices ongoing work below one-off work, because reserved capacity and a settled show spec make each episode faster. A [monthly podcast editing retainer](/services/monthly-podcast-editing-retainer) with a fixed episode count is normally the cheapest per-episode arrangement available, and it also fixes turnaround, which one-off booking doesn't.\n\n**Drop video if it isn't earning.** If you're producing video because it felt necessary rather than because clips are performing, this is the biggest single line item you can remove. Check your analytics before you cut it — but check.\n\n**Take fewer assets, not lower quality.** If budget is tight, buy the edit and write your own show notes. That's a much better trade than paying someone cheaper to do everything worse. You can add assets back once the show proves itself. If you'd rather hand over the whole operation in one go, [done-for-you podcast production](/services/done-for-you-podcast-production) is the other end of that scale.\n\n**Batch your recordings.** Doesn't reduce the per-episode fee directly, but it reduces your own time cost substantially and stops the schedule slipping — which is where the real money leaks on a show that stops and restarts.\n\nWhat rarely works is simply asking for a discount without changing the scope. The work is the work; a supplier who cuts their price 30% without cutting scope is either overcharging you now or will make it back somewhere you'd rather they didn't.",
    },
    {
      id: "hidden-costs",
      heading: "The costs that aren't in the per-episode fee",
      body:
        "Budgeting only for production is how podcasts overrun. The other line items:\n\n- **Hosting** — typically £10–£25 a month for a business-grade plan\n- **Recording software** — Riverside, Zencastr, Descript and similar, roughly £15–£30 a month\n- **Music licensing** — a few pounds a month for a library subscription, or a one-off fee per track\n- **Equipment** — microphones, interfaces, headphones; a decent two-person setup is a few hundred pounds once\n- **Your own time** — recording, prep, guest booking and review. This is the biggest hidden cost by a wide margin, and it's the one nobody budgets\n\nThat last one deserves emphasis. If you're spending eight hours a week on a show, that time has a cost whether or not it appears on an invoice — [how much time a founder podcast actually takes per week](/blog/founder-podcast-time-per-week) breaks that down properly.\n\nStarting from scratch rather than already running a show? [How to start a podcast in 2026](/blog/how-to-start-a-podcast-in-2026) covers the one-off setup costs, which are a different question to per-episode production.",
    },
    {
      id: "worth-it",
      heading: "Is it worth paying more?",
      body:
        "Sometimes, and it depends on a single question: **what is the show for?**\n\nIf it's a marketing channel for a business selling a considered, high-value product, the arithmetic is usually straightforward. One client won from the podcast typically covers a year of production. At that point arguing about £100 an episode is optimising the wrong variable — the risk isn't overpaying, it's the show quietly stopping because nobody had time to edit it.\n\nIf it's a personal project, a passion show, or something you're testing, the calculation is completely different and cheaper is genuinely better. Start at the bottom of the range, see whether you enjoy it and whether anyone listens, and increase spend when the show has earned it. There is no virtue in buying full production for a show that might not exist in six months.\n\nThe consistent mistake is buying the most expensive tier at launch, when what a new show most needs is the flexibility to change format cheaply. Formats change a lot in the first ten episodes. Buying artwork and clip packages around a format you're about to abandon is money spent twice.\n\nAnd the reverse mistake, which is subtler: buying the cheapest possible edit for a show that carries commercial weight. If your buyers hear the podcast before they hear from your sales team, the production standard is doing brand work whether you intended it or not.\n\nIf you want a real figure for your show rather than a band, [tell us what you're publishing](/contact) and we'll price it. And if the answer is that you'd be better served by a freelancer at half our rate, we'll say so — it's true more often than you'd expect from a production company's website.",
    },
  ],
  faqs: [
    {
      question: "How much does podcast production cost per episode?",
      answer:
        "Between roughly £30 and £1,200+ per episode, with most business podcasts landing between £110 and £400. The range is wide because production covers anything from a single audio edit to a full operation with video, artwork, show notes, clips and publishing. Scope and video are what move the number.",
    },
    {
      question: "How much does it cost to edit a podcast episode?",
      answer:
        "Audio editing alone typically runs £30–£250 per episode depending on experience and how much repair the recording needs. Our own audio editing rate is £110. Adding video roughly doubles it, because video is a second full edit that has to work visually as well as audibly.",
    },
    {
      question: "Why do podcast production quotes vary so much?",
      answer:
        "Five factors: whether video is included, how much repair the raw audio needs, the number of speakers, how tightly you want it cut, and which assets come with it. Two quotes for the same episode length can differ threefold simply because one includes show notes, clips and publishing.",
    },
    {
      question: "Is podcast production cheaper on a monthly retainer?",
      answer:
        "Almost always. Ongoing work is priced below one-off bookings because reserved capacity and a settled show spec make each episode faster to produce. A retainer usually fixes turnaround too, which per-episode booking doesn't — you join a queue rather than holding a slot.",
    },
    {
      question: "How much should a small business budget for a podcast?",
      answer:
        "For a fortnightly show with a solid audio edit and show notes, budget around £3,000–£6,000 a year in production. Add video and it roughly doubles. Include hosting, recording software and music licensing at £30–£70 a month on top of production fees.",
    },
    {
      question: "Does episode length change the price?",
      answer:
        "Less than people expect. Editing is priced on the work involved rather than the runtime, so a clean 90-minute conversation is often a quicker job than a messy 40-minute one with poor audio and four speakers. Suppliers pricing purely per minute are averaging risk across all clients.",
    },
  ],
};
