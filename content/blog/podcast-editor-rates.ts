import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * The freelance-rates cluster: "podcast editor rates", "podcast producer
 * rates", "podcast editing prices", "how much to edit a podcast", "how long
 * does it take to edit a podcast". Bottom-funnel, and until now homeless —
 * the two existing pricing posts cover production PACKAGES and AGENCY
 * models, not what an individual charges or how long the work takes.
 *
 * The time dimension is what makes this post distinct. A rate on its own
 * is meaningless; a rate against hours is a number you can reason with.
 *
 * On figures: the only rate quoted as fact is our own (£110, from the rate
 * card). Market ranges are described by MODEL (hourly vs per-episode, what
 * each implies) rather than by invented averages. Editing-time figures are
 * the four sources already cited on founder-podcast-time-per-week and are
 * attributed inline again here rather than restated as fact.
 */
export const podcastEditorRates: BlogPost = {
  slug: "podcast-editor-rates",
  title: "Podcast editor rates: what editing costs, and how long it actually takes",
  seoTitle: "Podcast Editor Rates & Editing Time",
  metaDescription:
    "What podcast editors charge, how long an edit really takes, and how to read a quote so you know what you're paying for. Per-episode vs hourly, from a working editor.",
  publishedAt: "2026-09-11",
  updatedAt: "2026-09-11",
  category: "Pricing",
  author: jamesPearce,
  readingTime: "8 min read",
  coverImage: {
    src: "/images/blog/start-podcast-cost.svg",
    alt: "A breakdown of podcast costs laid out as stacked blocks, with editing the largest single block",
  },
  intro:
    "Podcast editor rates are hard to compare because they hide the thing that actually determines the price, which is time. A cheap hourly rate on a slow editor costs more than an expensive one on a fast editor, and a per-episode price tells you nothing until you know what an episode involves.\n\nSo this is the version I'd want if I were hiring: how the two pricing models work, how long an edit genuinely takes, what my own rate is and why, and how to read a quote so you're comparing the same thing twice.",
  keyTakeaways: [
    "Editors price either per hour or per episode. Per episode is better for you, because the risk of a slow edit sits with the editor.",
    "A one-hour recording takes roughly two hours to edit at the basic level and three to five with real production, according to the published estimates.",
    "A rate only means something against hours. Ask what the per-episode price assumes about length, speakers and revisions.",
    "Our editing rate is £110 per episode, published, and the rest of this post explains what that buys.",
    "The cheapest quote usually costs more, because the hours it implies aren't enough to do the work.",
  ],
  sections: [
    {
      id: "two-pricing-models",
      heading: "The two ways podcast editors charge",
      body:
        "**Per hour.** The editor tracks time and bills it. Simple, transparent, and the wrong model for you, because every inefficiency, every re-listen, every bad recording you sent them is on your invoice. You can't budget, and you have no idea whether a four-hour bill was a hard episode or a slow afternoon.\n\n**Per episode.** A fixed price for an episode of an agreed shape: roughly this length, this many speakers, this much production. The editor absorbs the variance. A difficult episode costs them, not you, and an easy one is their gain. This is the model to insist on, because it turns editing from an open-ended cost into a line item.\n\nThe catch with per-episode pricing is that \"an episode\" has to be defined, and most disputes come from it not being. A 45-minute two-hander and a 90-minute four-person panel are not the same episode. Any per-episode rate that doesn't say what it assumes is a rate you'll renegotiate later.\n\nThere's a third model, the monthly retainer, which is a per-episode rate with a minimum volume attached. It's covered properly in [how agency pricing works](/blog/podcast-production-agency-pricing), and it makes sense once you're publishing weekly and want predictability on both sides.",
    },
    {
      id: "how-long-editing-takes",
      heading: "How long does it take to edit a podcast?",
      body:
        "This is the number that makes every rate legible, and it's the one nobody puts on their pricing page.\n\nThe published estimates line up with what the work feels like. [The Podcast Host](https://www.thepodcasthost.com/editing-production/podcast-editing/) puts a one-hour recording at roughly two hours of editing at baseline, rising to three-to-five hours for a highly produced episode with music, per-track processing and EQ. [Rachel Corbett](https://rachelcorbett.com.au/blog/how-long-does-it-take-to-create-a-podcast-episode/) reckons four to five times the length of the recording. [Produce Your Podcast](https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/) puts it at three to five minutes of work per finished minute. Even the optimistic end, [Ollar Studios](https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/) at two to four times episode length for a light edit, doesn't get a one-hour recording done in under two hours.\n\nWhat moves it, in my experience, in order of impact:\n\n**The recording quality.** A clean recording with separate tracks per speaker edits in a fraction of the time of a single muddy file. This is the single biggest variable and it's entirely on your side of the arrangement.\n\n**How many speakers.** Two voices are a conversation. Four are a scheduling problem in audio form, with crosstalk to untangle and four sets of levels to match.\n\n**How much structure.** Tidy up filler and false starts, or reorder the conversation so it opens where it gets interesting? Those are different jobs by an hour or more.\n\n**Whether it's filmed.** Video roughly doubles the work, because every audio cut has to hold on the picture too.\n\nSo when you see a rate, the question is: how many hours does this price imply, and is that enough hours to do the work? A per-episode price that implies ninety minutes of work on a one-hour recording is telling you what kind of edit you'll get.",
    },
    {
      id: "what-we-charge",
      heading: "What I charge, and what it assumes",
      body:
        "Our editing-only rate is **£110 per episode**, published on the [rate card](/services) alongside the two larger scopes. It's worth spelling out what that assumes, because that's the part most rates leave vague.\n\nIt assumes an interview or conversation episode of typical length, recorded with reasonable care, with one round of timestamped revisions included. It covers the content edit, sound cleanup, levelling between speakers, and mastering to platform loudness so the episode sits correctly against everything else in a listener's feed. It doesn't include show notes, clips or publishing, which are the next two scopes up at £165 and £335.\n\nAgainst the hours above, £110 implies the edit is being done at a rate that makes sense for an experienced editor working efficiently on decent recordings. It would not make sense for an editor who takes five hours on every episode, and it's not designed to. The reason it works is that after a few episodes of any show, the spec is written, the recording setup is sorted, and the edit stops being a fresh problem every week.\n\nIf a show arrives with a recording problem that turns a two-hour edit into a four-hour one, the first thing I'll do is fix the recording setup, because that's cheaper for both of us than charging for the extra hours forever.",
    },
    {
      id: "how-to-read-a-quote",
      heading: "How to read a podcast editing quote",
      body:
        "Five things to ask before comparing any two rates, because without them you're comparing numbers that mean different things.\n\n**What episode length and how many speakers does this assume?** If the answer is \"any\", the rate will move.\n\n**How many revision rounds are included?** One is standard. Zero is a rate that will grow. Unlimited is a rate that's priced to cover people who never sign off.\n\n**Is the recording setup part of it?** A good editor will tell you how to record so the edit is cheaper. One who doesn't is happy to bill for the problem instead.\n\n**What's the turnaround, and from when?** Three working days from receiving usable files is normal. The \"from when\" matters more than the number.\n\n**Who owns the files?** Project files, masters, stems and, above all, the hosting account. If an editor controls your feed, you don't own your show, and [that becomes a problem the week they go quiet](/blog/podcast-editor-gone-quiet).\n\nThen do the sum the other way round. Take the rate, estimate the hours it implies, and ask whether that's enough hours to do the work described. The cheapest quote is often the one that implies the fewest hours, and the fewest hours produces an edit you'll be redoing yourself.",
    },
    {
      id: "editor-or-producer",
      heading: "Editor rates versus producer rates",
      body:
        "The two words get used interchangeably and they aren't the same job, which is why producer rates are higher.\n\nAn editor takes a recording and returns a finished episode. A producer takes responsibility for the show: the spec, the recording setup, the notes, the clips, the publishing, and the schedule holding. The edit is inside that, but it's maybe a third of it. There's a [longer piece on what the producer actually does](/blog/what-does-a-podcast-producer-actually-do) if the distinction matters for what you're hiring.\n\nFor most people starting out, editor rates are the right thing to compare. For a show that's meant to run weekly for years without you thinking about it, you're shopping for a producer, and the sensible comparison is the [full per-episode cost](/blog/how-much-does-podcast-production-cost-per-episode) rather than the edit alone.\n\nIf you'd like a rate against your actual show rather than a typical one, [say what it is](/contact) and you'll get one, including the assumptions written down.",
    },
  ],
  faqs: [
    {
      question: "How much do podcast editors charge?",
      answer:
        "Either an hourly rate or a fixed price per episode. Per-episode is the better model for you, since the risk of a slow edit sits with the editor rather than on your invoice. Our own editing rate is £110 per episode, published, for a typical interview episode with one revision round included. Any rate is only meaningful once you know what episode length and speaker count it assumes.",
    },
    {
      question: "How long does it take to edit a one-hour podcast?",
      answer:
        "Published estimates put it at roughly two hours for a basic edit and three to five hours for a produced episode with music and per-track processing. Recording quality is the biggest variable: clean separate tracks edit far faster than one muddy file, and it's the part of the arrangement that's on your side.",
    },
    {
      question: "Should I pay a podcast editor per hour or per episode?",
      answer:
        "Per episode. An hourly rate puts every inefficiency and every bad recording on your bill, and you can't budget for it. A per-episode price for an agreed shape of episode makes editing a fixed line item and puts the variance on the editor, which is where it belongs.",
    },
    {
      question: "What's the difference between a podcast editor and a podcast producer?",
      answer:
        "An editor turns a recording into a finished episode. A producer is responsible for the whole show: the spec, recording setup, show notes, clips, publishing and the schedule holding. The edit is part of the producer's job but only around a third of it, which is why producer rates are higher.",
    },
    {
      question: "Why is the cheapest podcast editing quote usually a mistake?",
      answer:
        "Because a price implies a number of hours, and the cheapest quote usually implies too few to do the work. An edit rushed to fit ninety minutes on a one-hour recording produces an episode you end up fixing yourself. Compare quotes by the hours and assumptions behind them rather than by the headline number.",
    },
    {
      question: "What should a podcast editing quote include?",
      answer:
        "The assumed episode length and speaker count, the number of revision rounds, the turnaround and what starts the clock, whether recording-setup guidance is part of it, and who owns the files and the hosting account afterwards. A quote without those is a starting point for a negotiation rather than a price.",
    },
  ],
  references: [
    {
      label: "The Podcast Host — How long does podcast editing take?",
      url: "https://www.thepodcasthost.com/editing-production/podcast-editing/",
    },
    {
      label: "Rachel Corbett — How long does it take to create a podcast episode?",
      url: "https://rachelcorbett.com.au/blog/how-long-does-it-take-to-create-a-podcast-episode/",
    },
    {
      label: "Produce Your Podcast — How long does it take to edit a podcast?",
      url: "https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/",
    },
    {
      label: "Ollar Studios — How long does it take to edit a podcast?",
      url: "https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/",
    },
  ],
};
