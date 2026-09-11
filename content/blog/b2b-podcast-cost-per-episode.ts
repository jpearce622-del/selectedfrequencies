import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * Purpose-built for "what should a B2B podcast cost per episode", which
 * Search Console has at position 7 with nothing behind it that was written
 * for that query, and "b2b podcast production pricing", stranded at 83.
 *
 * Distinct from how-much-does-podcast-production-cost-per-episode by BUYER
 * and by ARGUMENT. That post covers price bands across supplier types for
 * any show. This one is for the B2B marketing lead who has to justify a
 * number to leadership, and its argument is that the right question is not
 * "what does it cost" but "what does it cost against what it replaces" —
 * which is a marketer's hours and a channel that stalls.
 *
 * The general post links here for the B2B case rather than competing, and
 * this one links back for the full band breakdown. Relevance passed, not
 * split.
 *
 * Figures: our own rate card (£110 / £165 / £335, clips at £10 and £40).
 * Nothing about "typical B2B agency pricing" is stated as a number, because
 * no source for it survives being clicked. The agency-model comparison is
 * qualitative and links to the agency-pricing post.
 */
export const b2bPodcastCostPerEpisode: BlogPost = {
  slug: "b2b-podcast-cost-per-episode",
  title: "What should a B2B podcast cost per episode?",
  seoTitle: "B2B Podcast Cost Per Episode",
  metaDescription:
    "What a B2B podcast should cost per episode, what the number has to cover, and how to justify it to leadership. Published rates from £110 to £335, and what changes them.",
  publishedAt: "2026-09-11",
  updatedAt: "2026-09-11",
  category: "Pricing",
  author: jamesPearce,
  readingTime: "9 min read",
  coverImage: {
    src: "/images/blog/founder-time-hero.svg",
    alt: "A week of time blocks, most of them taken up by podcast production tasks, illustrating the internal cost a B2B podcast replaces",
  },
  intro:
    "A B2B podcast should cost, per episode, somewhat less than the marketer's hours it replaces and somewhat more than a podcast that exists for its own sake. That's not a dodge; it's the frame that makes the number make sense to whoever signs it off.\n\nThe reason B2B cost questions are harder than consumer ones is that the show has a job. It's meant to put your people in front of a specific buyer, produce assets sales can use, and keep going for long enough to compound. Every one of those changes what the per-episode figure has to cover, and none of them show up in a generic price list.\n\nSo: what the number has to include, what our published rates are and why, what moves the price for a B2B show specifically, and how to put it in front of leadership.",
  keyTakeaways: [
    "Compare the per-episode fee against the internal hours it replaces, not against zero. That's the sum leadership will accept.",
    "B2B scope is wider than consumer scope: video, clips for LinkedIn, notes a guest will share, and a schedule that has to hold.",
    "Our published rates run from £110 (edit only) to £335 (everything from raw recording to published and promoted), per episode, no minimum.",
    "The things that move a B2B price are video, speaker count, repurposing volume and cadence. Not the length of the episode.",
    "The cheapest option is usually the one that quietly stops at episode nine.",
  ],
  sections: [
    {
      id: "what-the-number-has-to-cover",
      heading: "What a B2B episode actually has to cover",
      body:
        "A consumer podcast is finished when the audio is published. A B2B podcast isn't finished until it's done its job, and the job is usually three things.\n\n**Reaching the right people, not the most people.** The episode needs to land where your buyers are, which for most B2B shows means video on YouTube and clips on LinkedIn, rather than an audio-only feed waiting to be discovered.\n\n**Producing things other people can use.** Sales wants a clip to send a prospect. The guest wants something they're proud to share, because the guest was probably a relationship you wanted anyway. Marketing wants a written asset. One recording, five or six outputs.\n\n**Holding a schedule for long enough to matter.** B2B podcasts compound slowly and die of production friction. A show that stops at episode nine has spent its budget, used up goodwill with every guest, and left a dated public artefact of something the company started and didn't finish. The per-episode cost of a show that stops is infinite.\n\nSo when you price a B2B episode, you're pricing the edit, the video, the notes, the clips, the publishing, and the reliability. Quotes that only cover the first item look cheap for a reason.",
    },
    {
      id: "our-rates",
      heading: "What we charge per episode, and what's in each",
      body:
        "The [rate card](/services) is published, in pounds, per episode, no minimum term. Three scopes:\n\n| Scope | Per episode | What's in it |\n| --- | --- | --- |\n| Editing only | £110 | Full edit, sound cleanup, levelling, mastering to platform loudness. You handle notes and publishing. |\n| Audio and video production | £165 | Everything above plus the video cut, framing and colour consistency, export presets for YouTube and wherever else you publish. |\n| Full production | £335 | Edit, video, show notes, chapters formatted for Apple, Spotify and YouTube, thumbnails, short-form clips, and publishing to your host on your schedule. |\n\nClips beyond what's included are £10 for a captioned cut and £40 for an advanced one with titles, b-roll and animated captions, so you order what you'll actually post.\n\nFor most B2B shows the honest answer is full production, and not because it's the most expensive. It's because the things a B2B show needs (video, clips, notes a guest will share, a schedule that holds without anyone in-house chasing it) are exactly the things the two smaller scopes leave with you. Editing only makes sense if you already have someone doing the rest well. If you don't, £110 for the edit becomes £110 plus a marketer's afternoon every week, and the second number is the one that ends the show.",
    },
    {
      id: "what-moves-the-price",
      heading: "What moves a B2B podcast's price",
      body:
        "Not episode length, mostly. A 40-minute episode and a 60-minute one are close in cost, because the work is in the decisions rather than the minutes. What actually moves it:\n\n**Video.** Roughly doubles the production work, because every cut has to hold on the picture and there's a whole second set of deliverables. For B2B it's usually non-negotiable, since YouTube is where the show gets found and LinkedIn is where the clips go.\n\n**Number of speakers.** Two people is a conversation. A four-person panel is four sets of levels, crosstalk, and a structural edit to keep it followable. Panels cost more and often work less well.\n\n**Repurposing volume.** Four clips an episode is normal. Twelve, plus a written article, plus a LinkedIn carousel, is a content operation and priced as one.\n\n**Cadence.** Weekly is more per month and less per episode, because the spec is settled and the pipeline runs. Monthly is cheaper per month and each episode carries more setup.\n\n**Recording quality.** The variable you control. Separate tracks per speaker, a decent microphone, a soft room. A producer will tell you how to set this up in the first conversation, because a clean recording is cheaper for both sides than fixing a bad one every week.",
    },
    {
      id: "justifying-it",
      heading: "How to put the number in front of leadership",
      body:
        "The mistake is presenting the fee against nothing. Present it against what it replaces.\n\n**The internal hours.** Someone in marketing spending five to eight hours a week on editing, notes and clips is spending those hours at their salary, on a task nobody hired them for, instead of on work only they can do. Price those hours honestly and the per-episode fee usually lands close to or below them. The [editing cost calculator](/podcast-editing-cost-calculator) does this sum with your own figures.\n\n**The single point of failure.** A show that depends on one busy person stops when that person gets busy. That isn't a hypothetical; it's the most common way B2B podcasts end. An outside producer's fee is partly a fee for the show existing in March.\n\n**The right success metric.** Reach is the wrong measure for most B2B shows. What holds up in a board conversation is who listened, which conversations the show opened, and which guests said yes. Set that expectation before episode one, because the wrong metric agreed early is very hard to walk back. There's more on this in [why B2B podcasts stall](/blog/why-isnt-my-podcast-growing).\n\n**The comparison to an agency.** If you're also quoting agencies, make sure you're comparing the same scope. Agency pricing tends to bundle account management and a minimum term; [how that pricing works](/blog/podcast-production-agency-pricing) is its own topic. A per-episode producer rate is cheaper for the same output because you're not paying for the layer between you and the work.",
    },
    {
      id: "what-cheap-costs",
      heading: "What the cheap option actually costs",
      body:
        "There's always a cheaper quote. The question is what it's cheap at.\n\nA £40 edit implies about an hour of work on a one-hour recording, which is enough to trim the ends and not enough to level two speakers recorded on different equipment or notice that the interesting part started at minute twenty. It also implies no notes, no clips, no video, and no one responsible for the schedule. So the £40 isn't the cost; the cost is £40 plus everything it doesn't cover, done by someone in-house, until they can't.\n\nThe shows that reach episode fifty are, almost without exception, the ones where production was somebody's actual job. That's the thing you're buying, and it's why the honest per-episode price for a B2B show sits where it does rather than lower.\n\nIf you want a number against your actual show rather than a typical one, [say what it is](/contact): format, cadence, filmed or not, and what you'd want handled. You'll get a scope from the rate card and a straight answer, including \"keep it in-house\" if that's the right one. The [full breakdown of what production costs at every level](/blog/how-much-does-podcast-production-cost-per-episode) is there if you want the bands beyond ours.",
    },
  ],
  faqs: [
    {
      question: "What should a B2B podcast cost per episode?",
      answer:
        "On our published rate card, from £110 per episode for editing only to £335 for full production, which covers the edit, video, show notes, chapters, thumbnails, clips and publishing. For most B2B shows full production is the realistic scope, because the things a B2B show needs are the ones the smaller scopes leave in-house. The right comparison is against the internal hours the fee replaces, not against zero.",
    },
    {
      question: "How does B2B podcast production pricing differ from consumer podcast pricing?",
      answer:
        "The scope is wider. A B2B episode usually needs video for YouTube, clips for LinkedIn, notes a guest will share, and a schedule that holds without anyone in-house chasing it, because the show exists to reach specific buyers and produce assets sales can use. A consumer episode is finished when the audio is published; a B2B one isn't finished until it's done that job.",
    },
    {
      question: "How do I justify podcast production costs to leadership?",
      answer:
        "Present the fee against what it replaces rather than against nothing: the marketer's hours currently spent editing, the single point of failure when that person gets busy, and the cost of a show that stops at episode nine. Then agree the right success metric before episode one, which for B2B is who listened and which conversations opened, not download totals.",
    },
    {
      question: "Is it cheaper to produce a B2B podcast in-house?",
      answer:
        "Usually comparable in pure cost once the hours are priced honestly, and materially worse in reliability. The in-house version depends on one person having time every week, which is the most common way B2B podcasts end. Where keeping it in-house genuinely makes sense is when someone on the team enjoys the craft and has the capacity, and a producer should say so rather than sell around it.",
    },
    {
      question: "What makes a B2B podcast episode more expensive to produce?",
      answer:
        "Video roughly doubles the work. More speakers add levelling, crosstalk and structural editing. Higher repurposing volume turns an episode into a content operation. Cadence changes the per-episode figure in both directions. Episode length matters much less than people expect, because the work is in the decisions rather than the minutes.",
    },
    {
      question: "Should a B2B podcast be priced per episode or on a retainer?",
      answer:
        "Per episode with no minimum term is the more honest model, since you pay for exactly what's delivered and can pause without a negotiation. Retainers make sense once a show is publishing weekly and both sides want predictability, but a retainer with a minimum term is a bet on the show continuing, and it's worth being sure before making it.",
    },
  ],
};
