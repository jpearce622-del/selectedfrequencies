import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * Workhorse entry in the headphone cluster.
 * Hub: /blog/best-headphones-for-podcasting
 *
 * Verified facts supplied by James, and the ONLY product claims asserted as
 * spec: closed-back, foldable; 63-ohm impedance; ten-foot coiled cable; the
 * broadcast standard since 1991; trusted in studios worldwide for accuracy and
 * clarity; flat frequency response. Nothing else is stated as a specification.
 *
 * No rating — the page shows no score, so `reviewRating` is omitted. See the
 * note in the M30x review for the full reasoning.
 *
 * IMPORTANT — the personal-history angle. The brief asked for a line tying
 * these to James's radio and production background. It is written below in a
 * form that is TRUE OF THE INDUSTRY rather than asserting a specific
 * biography, and flagged for James to personalise. Do not "improve" it by
 * adding invented detail about which studios or which years.
 */
/**
 * TODO (JAMES) — confirm from personal use.
 *
 * These were drafted as reasoned recommendations, not hands-on tests.
 * They are comments rather than page copy on purpose: an editorial note
 * that renders to a reader is worse than no note at all.
 *
 *   - add what's actually in the box on the pair you own, and whether
 *     you've replaced pads and how that went.
 *   - "How it performs" — the personal-history line. This is the pair most
 *     tied to your own background, and the brief asked for it. No specific
 *     claim about which studios or how many years is written, because that
 *     is yours to state accurately. In your own words: where you first used
 *     them, and what you now hear in them automatically that you didn't at
 *     the start.
 */
export const sonyMdr7506Review: BlogPost = {
  slug: "sony-mdr-7506-review",
  title: "Sony MDR-7506 review: still the broadcast standard, 30-odd years on",
  seoTitle: "Sony MDR-7506 Review",
  metaDescription:
    "A Sony MDR-7506 review for podcasters. The broadcast standard since 1991 — flat, revealing, and unflattering in the best way. Here's why studios still use them.",
  publishedAt: "2026-08-08",
  updatedAt: "2026-08-08",
  category: "Gear",
  author: jamesPearce,
  readingTime: "9 min read",
  hasAffiliateLinks: true,
  coverImage: {
    // TODO (JAMES): replace with your own photograph. If you have a pair with
    // worn earpads, photograph those — a genuinely used pair is a stronger
    // trust signal than a clean product shot, and it illustrates the
    // replaceable-earpads point the article makes.
    src: "/images/blog/mdr-7506-hero.svg",
    alt: "Diagram of a foldable closed-back headphone with a coiled cable, beside a flat frequency response line",
  },
  intro:
    "**Short answer: if you're going to buy one pair of headphones and not think about it again for a decade, buy the Sony MDR-7506.** Around £80–£110 at the time of writing, flat, closed-back, and the pair you'll find in radio studios and edit suites almost everywhere.\n\nThey have been the broadcast standard since 1991. That is not marketing copy — it's an unusual fact about a consumer-purchasable product, and it's the entire reason this review exists. Very little audio equipment survives three decades without being replaced by something better.\n\nThey are also, deliberately, not enjoyable. That's the point, and it's the part most reviews get wrong.\n\n*Last updated 8 August 2026. Prices move and vary by retailer — every figure here is a range at the time of writing, not a quote.*",
  keyTakeaways: [
    "The broadcast standard since 1991, trusted in studios worldwide for accuracy and clarity.",
    "Closed-back and foldable, with a 63-ohm impedance and a ten-foot coiled cable.",
    "Flat frequency response: they reveal sibilance, plosives, room tone and handling noise rather than smoothing them over.",
    "Deliberately unflattering on music, which is a feature for editing and a genuine drawback for listening.",
    "Earpads perish with age and are cheap to replace, which is why so many surviving pairs are decades old.",
  ],
  sections: [
    {
      id: "short-verdict",
      heading: "The short verdict",
      body:
        "**Good for:** editing, mixing, monitoring while recording, long production days, and anyone who wants to stop thinking about headphones permanently.\n\n**Not for:** listening to music for pleasure, anyone who hates coiled cables, or field work where weight and single-ear monitoring matter more than outright accuracy.\n\n**Buy them if** podcasting is a serious ongoing commitment and you want the pair the industry converged on. **Don't buy them if** you're recording your first three episodes to see whether you enjoy it — the [ATH-M30x](/blog/audio-technica-ath-m30x-review) is enough for that and costs less.\n\nNo score is given. I haven't assembled the independent-review comparison I did for the [Monoprice 110010](/blog/monoprice-110010-review), and a number invented to look decisive isn't worth the authority it borrows.",
    },
    {
      id: "what-you-get",
      heading: "What you get",
      body:
        "The specification is short and most of it is deliberate.\n\n**Closed-back and foldable.** Closed-back is the requirement for recording, because sound that leaks out of the cups goes into the microphone and onto the file permanently. Foldable matters more than it sounds if you ever work anywhere other than one desk — they collapse into a bag without a case.\n\n**63-ohm impedance.** In practical terms this is the useful middle ground. They'll run at a sensible volume from an audio interface, a mixer or a field recorder without needing a dedicated headphone amplifier, which is not true of every professional monitoring headphone.\n\n**A ten-foot coiled cable.** This is the single most divisive thing about them and it deserves a straight answer rather than a shrug. In a studio it's genuinely excellent: you can lean back, stand up, or cross the room to the rack without unplugging, and the cable takes up almost no space when you're sitting still. At a desk it can be a nuisance, it has weight, and it tugs. It's also non-detachable, which means a cable failure is a repair rather than a swap. Whether that's a dealbreaker depends entirely on where you work, and anyone telling you it's simply good or simply bad hasn't used them in both places.\n\n**Replaceable earpads.** The earpads perish. This is the most commonly cited complaint about the 7506 and it is completely true — the coating breaks down over a few years and flakes. It's also why I'd count it as a plus rather than a fault: replacement pads are cheap and widely available, and the reason you still see decade-old 7506s in working studios is that they're a consumable-and-serviceable product rather than a disposable one. Most headphones at this price simply die.",
    },
    {
      id: "how-it-performs",
      heading: "How it performs for podcasting",
      body:
        "The MDR-7506 is flat, and flat means unflattering. It's worth being precise about what that buys you, because \"flat response\" gets used as a marketing phrase far more often than it gets explained.\n\n**They reveal rather than smooth.** A tuning that isn't adding warmth to the low end or gloss to the top means the things that go wrong in a spoken-word recording arrive at your ear at their real size. In practice that means four things you'll hear more clearly than you want to:\n\n- **Sibilance.** The harsh edge on \"s\" and \"t\" sounds. Flattering headphones round this off, which is how people end up publishing episodes that are genuinely painful on someone else's kit.\n- **Plosives.** The low thump when a hard \"p\" hits the capsule. Bass-boosted headphones hide these inside their own low end, so you under-correct.\n- **Room tone.** The character of the space, including reflections off a hard desk or a bare wall. Once you can hear it, you stop being able to un-hear it, and your recordings improve because of where you choose to sit rather than what you buy.\n- **Handling noise.** Every bump of the desk, every adjustment of the mic arm, every chair creak.\n\nAll four are problems that are cheap to fix at the recording stage and expensive or impossible to fix afterwards. Headphones that hide them are costing you money later in exchange for a nicer hour now.\n\n**Monitoring versus editing.** While recording, the value is catching those problems live, when the fix is \"sit still\" or \"move the mic\" rather than an hour of repair work. While editing, the value is trusting that what you hear is what your listener gets. The 7506 does both, which is the reason it displaced the need for two pairs in most studios.\n\n**They are not fun.** Music through these is flat, slightly clinical, and a bit disappointing compared with almost any consumer pair. I want to be clear that this is a feature and not a flaw I'm excusing. A monitoring headphone that made everything sound great would be useless, because your job is to find the things that don't. If you want one pair for editing and enjoying music, you want two pairs.",
    },
    {
      id: "who-its-for",
      heading: "Who it's for — and who it isn't",
      body:
        "**Buy these if you're committed.** If you're publishing regularly and expect to be doing this in three years, this is the sensible landing point. The buy-once argument is real: a 30-year-old design with cheap replacement parts is about as future-proof as audio equipment gets.\n\n**Buy these if you edit for hours.** This is the practical upgrade over the budget option. The [ATH-M30x](/blog/audio-technica-ath-m30x-review) is genuinely enough to work in, but comfort across a long editing day is where budget monitoring headphones give ground, and a long editing day is exactly what a weekly show is.\n\n**Don't buy these to start.** If you're three episodes in and unsure whether you'll keep going, spend less. The M30x will not hold you back, and the money is better spent on the room.\n\n**Don't buy these for field work.** If you're recording on location, running in-person interviews in noisy spaces, or need to keep one ear on the room, the [Sennheiser HD 25](/blog/sennheiser-hd-25-review) is a better tool. Its rotating capsule lets you monitor with one ear while listening to the room with the other, which the 7506 simply cannot do.\n\n**Don't buy these if you want noise cancelling.** You don't want noise cancelling for this work at all — see the [Monoprice 110010 review](/blog/monoprice-110010-review) for why processing the signal defeats the purpose of monitoring it. But if the appeal was silence on a train, these are not that pair.\n\n**Don't buy these as your only headphones if you love music.** They'll make your favourite records sound smaller. Two pairs, or accept the trade.",
    },
    {
      id: "how-it-compares",
      heading: "How it compares",
      body:
        "| Headphones | Roughly | Type | Best for |\n| --- | --- | --- | --- |\n| [Audio-Technica ATH-M30x](/blog/audio-technica-ath-m30x-review) | ~£50–£70 | Closed-back, over-ear | The best first pair; recording and editing on a budget |\n| **Sony MDR-7506** ← this one | ~£80–£110 | Closed-back, over-ear, foldable | The buy-once workhorse; the broadcast standard |\n| [Sennheiser HD 25](/blog/sennheiser-hd-25-review) | ~£120–£150 | Closed-back, on-ear | Field recording, in-person interviews, single-ear monitoring |\n| [Monoprice 110010](/blog/monoprice-110010-review) | ~£80 | Closed-back, over-ear, ANC | Listening and travel — **not** monitoring or editing |\n\nPrices are approximate at the time of writing. The full roundup is in [the best headphones for podcasting guide](/blog/best-headphones-for-podcasting), and what to listen for once you're wearing them is in the [podcast audio quality guide](/blog/podcast-audio-quality-guide).\n\nIf the verdict above holds up for you: [check the current price of the MDR-7506](affiliate:mdr-7506). Affiliate link, placed after the recommendation rather than before it.",
    },
    {
      id: "gear-vs-craft",
      heading: "Where headphones stop mattering",
      body:
        "The MDR-7506 has survived thirty years because it is a competent tool that gets out of the way, which is the highest compliment available to a piece of studio equipment. It is not magic, and it will not make a badly recorded episode good.\n\nGear is the smallest variable in how a podcast sounds. The room beats the microphone, the microphone beats the interface, and all three matter less than whether someone competent is making the edit. Headphones earn their place on this list only because they're the instrument you make every other decision with — get them wrong and the error propagates into everything downstream.\n\nIf the editing hours are the real constraint, the [editing cost calculator](/podcast-editing-cost-calculator) prices what they're costing you annually. If you'd rather hand it over, [that's what we do](/services), or [start a conversation](/contact).",
    },
  ],
  review: {
    productName: "Sony MDR-7506 Professional Monitor Headphones",
    brand: "Sony",
    verdict:
      "The broadcast standard since 1991 and still the sensible buy-once choice for podcast production: closed-back, foldable, 63-ohm, with a flat response that reveals sibilance, plosives, room tone and handling noise instead of smoothing them over. The coiled cable divides opinion and the earpads perish, though replacements are cheap.",
  },
  faqs: [
    {
      question: "Are the Sony MDR-7506 good for podcasting?",
      answer:
        "Yes, and they're the most widely used option in professional audio for good reason. They're closed-back so nothing leaks into the microphone while recording, and their flat frequency response reveals the sibilance, plosives, room tone and handling noise you need to catch rather than flattering them. They have been the broadcast standard since 1991.",
    },
    {
      question: "Why are the Sony MDR-7506 still used in studios?",
      answer:
        "Because they're accurate, predictable and serviceable. Engineers know exactly what they sound like, which means a decision made on a pair in one studio translates to a pair in another. The earpads and other parts are cheap and replaceable, so a pair bought a decade ago can still be in daily use, which is unusual at this price.",
    },
    {
      question: "Do the Sony MDR-7506 earpads need replacing?",
      answer:
        "Yes, eventually. The earpad coating perishes and flakes after a few years, and it's the most common complaint about them. Replacement pads are inexpensive and widely available, and fitting them is straightforward. It is better understood as a consumable part than a design fault, and it's part of why so many old pairs are still working.",
    },
    {
      question: "Is the coiled cable on the MDR-7506 a problem?",
      answer:
        "It depends entirely on where you work. In a studio it's an advantage: you can move around without unplugging and it stays out of the way when you don't. At a fixed desk it has weight and can tug. It is not detachable, so a cable failure means a repair rather than a swap. It's the single most divisive thing about them.",
    },
    {
      question: "Do I need closed-back headphones for podcasting?",
      answer:
        "For recording, yes. Open-back headphones leak sound out of the cups, and anything leaking while you record is captured by your microphone and printed onto the file where it cannot be removed. Closed-back keeps the sound in. If you only ever edit and never record with a live microphone in the room, open-back becomes an option, but closed-back is the safer single purchase.",
    },
    {
      question: "Should I use noise cancelling headphones to record?",
      answer:
        "No. Active noise cancelling generates an inverse waveform to cancel outside sound, so you hear the recording plus a layer of real-time processing rather than the recording itself, and it can introduce small amounts of latency that make monitoring your own voice disorienting. Passive closed-back headphones with no active processing are what you want.",
    },
  ],
};
