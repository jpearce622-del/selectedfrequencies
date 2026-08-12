import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

/**
 * Decision-stage post for the reader who doesn't know what they'd be buying.
 *
 * The organising idea: the producer's job is mostly invisible by design. Good
 * production is the absence of things — no stumbles, no level jumps, no dead
 * air — which makes it genuinely hard to value before you've bought it. So
 * the post's job is to make the invisible work concrete and countable.
 *
 * Boundaries:
 *   - Not a pricing post. Costs are linked out to, never argued here.
 *   - Not an in-house-vs-outsourced post. The role is described the same
 *     whether the person is employed or contracted; links out for that call.
 *
 * Evidence discipline: the per-episode task counts and time figures below
 * describe our own workflow and are framed that way in the body. They are
 * not industry benchmarks. Do not restate them as what "producers" generally
 * do, and do not attach a source.
 */

const stageTable = [
  "| Stage | What the producer does | Roughly how long |",
  "| --- | --- | --- |",
  "| Pre-production | Format, guest research, briefing docs, scheduling, tech setup | 1–3 hours per episode |",
  "| Recording | Levels, monitoring, backup capture, keeping the conversation on track | Episode length, plus setup |",
  "| Post-production | Content edit, cleanup, levelling, mastering, music, video | 2–4× episode length |",
  "| Assets | Show notes, chapters, transcript, artwork, clips | 1–3 hours per episode |",
  "| Distribution | Upload, metadata, scheduling, platform checks | 30–60 minutes per episode |",
].join("\n");

export const whatDoesAPodcastProducerActuallyDo: BlogPost = {
  slug: "what-does-a-podcast-producer-actually-do",
  title: "What Does a Podcast Producer Actually Do?",
  seoTitle: "What Does a Podcast Producer Do?",
  metaDescription:
    "What does a podcast producer actually do? A stage-by-stage walkthrough of pre-production, recording, editing, assets and distribution — and the invisible work.",
  publishedAt: "2026-08-12",
  category: "Production",
  author: shaunaMartin,
  readingTime: "10 min read",
  coverImage: {
    src: "/images/blog/producer-role-hero.svg",
    alt: "The stages of what a podcast producer does, from pre-production briefing through recording and editing to distribution",
  },
  intro:
    "A podcast producer takes responsibility for everything that isn't the conversation itself. In practice that means five things: **planning the format and briefing the guests, running the recording, editing and mastering the audio and video, producing the assets around the episode, and publishing it.**\n\nWhat does a podcast producer actually do that a host can't do themselves? Mostly, the work that's invisible when done well. Nobody notices that a guest's sibilance was tamed, that four restarts were removed, or that the episode sits at the same loudness as the last forty. They notice immediately when none of that happened.\n\nThis post walks through the role stage by stage, with the hidden work made explicit — because a producer's value is genuinely difficult to see before you've worked with one.",
  keyTakeaways: [
    "A producer owns everything except the conversation: format, briefing, recording, edit, assets and publishing.",
    "Post-production typically takes 2–4× the episode length, which is why it's the first thing hosts outsource.",
    "The most valuable work is preventative — fixing capture so problems never reach the edit.",
    "Good production is invisible by design: it's the absence of stumbles, level jumps and dead air.",
    "\"Producer\" means different things at different price points — check which definition you're buying.",
  ],
  sections: [
    {
      id: "stages",
      heading: "What does a podcast producer actually do? The five stages",
      body:
        `Here's the shape of the job before we go through it properly:\n\n${stageTable}\n\nThose time figures describe how we work rather than an industry benchmark — but the ratio is the part that generalises. **For every hour of conversation, expect three to six hours of work around it.** That ratio is the entire reason podcast production exists as a service.\n\nIt's also why the first thing almost every host outsources is post-production. Recording is enjoyable and takes an hour. Everything after it is unglamorous, sequential, and takes most of a day.`,
    },
    {
      id: "pre-production",
      heading: "Pre-production: the work that decides everything after it",
      body:
        "The least visible stage and the highest leverage one. A well-prepared recording is faster to edit, better to listen to, and less likely to need rescuing.\n\n**Format design.** How long episodes run, whether there's a cold open, how the intro works, whether it's interview or solo, where any ads or calls to action sit. Getting this wrong is expensive because it's audible in every episode until you fix it — and formats are much harder to change at episode forty than at episode four.\n\n**Guest research and briefing.** Working out what a guest is actually known for, which questions they've answered on twenty other podcasts, and which three or four lines of questioning would produce something new. Then writing that into a brief the host can read in five minutes. This single document does more for episode quality than any amount of editing.\n\n**Guest preparation.** Sending the guest their own brief, plus setup instructions — use headphones, find a soft room, sit close to the microphone, don't record next to a window. Five minutes of guidance here prevents hours of repair later, and it's the clearest example of a producer's job being prevention rather than cure.\n\n**Scheduling and logistics.** Calendars across timezones, recording links, reminders, rescheduling. Tedious, and it's where shows quietly stall.\n\n**Technical setup.** Checking the recording platform is configured for separate tracks per speaker, that levels are sensible, and that a backup is running. Separate tracks are the difference between fixing one person's audio and compromising everyone's.",
    },
    {
      id: "recording",
      heading: "During the recording: watching what the host can't",
      body:
        "The host is doing something cognitively demanding — listening, thinking, following up. They cannot simultaneously monitor audio. That's the producer's job.\n\n**Monitoring levels and quality.** Catching a guest who's clipping, a microphone knocked off-axis, a laptop fan, a phone buzzing on a desk, an air conditioning unit that started halfway through. Catching it live means a thirty-second re-record. Catching it in the edit means an unfixable episode.\n\n**Running backup capture.** A local recording alongside the platform's, so a dropped connection doesn't cost you the episode. Anyone who has lost a recording does this forever afterwards.\n\n**Timekeeping.** Knowing that the conversation has been on one subject for twenty minutes and the three best topics are still unasked.\n\n**Flagging moments.** Noting timestamps for clip-worthy sections and anything that might need review. Two minutes of note-taking during the recording saves an hour of re-listening later.\n\n**Managing re-records.** When something needs saying again, doing it immediately while everyone is still in the room — rather than discovering it in the edit when the guest has gone.\n\nOn many small shows this role doesn't exist, and the host absorbs it. That's workable, and it costs you something: a host monitoring audio is a host conducting a slightly worse interview.",
    },
    {
      id: "post-production",
      heading: "Post-production: where the hours actually go",
      body:
        "The largest block of work, and the one people most underestimate. It splits into three distinct jobs that get lumped together as \"editing\".\n\n**The content edit — deciding what stays.** Removing false starts, tangents that went nowhere, the two minutes of setup before the good bit, and the section where the guest circled the same point three times. This is editorial judgement, not a technical task, and it's what separates an episode that holds attention from one that sags in the middle. It's also where a producer can do real damage — cut too tightly and a thoughtful speaker sounds clipped and coached.\n\n**The technical edit — making it sound right.** Noise reduction, removing hum and rumble, de-essing fatiguing sibilance, corrective EQ, and levelling so a guest on a laptop and a host on a studio microphone sit together comfortably. Then mastering the whole thing to a consistent loudness so it matches the rest of your feed and the rest of the listener's.\n\n**The assembly — making it a show.** Intro and outro, music beds ducked properly under speech, transitions that don't clip the first word, and any ad or CTA placement. Done consistently, this is what makes episode fifty sound like episode one.\n\nAdd video and you're doing a second full edit that has to work visually as well as audibly — cutting between angles, captions, framing and colour. That's why video roughly doubles most production quotes.\n\nIf this is the part you want handed over while you keep recording and publishing yourself, that's exactly what [podcast post production services](/services/podcast-post-production-services) covers — edit, mix, master and deliverables to a written spec.",
    },
    {
      id: "assets",
      heading: "The assets nobody counts",
      body:
        "An episode isn't just audio. A producer typically also delivers:\n\n- **Episode description and show notes** — written so the episode is findable by the problem it discusses, not just the guest's name\n- **Chapter timestamps** — formatted correctly for Apple, Spotify and YouTube, which each expect them differently\n- **A transcript** — as real text, which is what makes an hour of conversation searchable at all\n- **Episode artwork and thumbnails** — consistent with the show's brand across the catalogue\n- **Short-form clips** — cut to moments that stand alone, captioned, formatted per platform\n- **Guest assets** — a clip and a graphic packaged so the guest can share it to their own audience\n\nEach is small. Together they're an afternoon a week, and they're the tasks that get skipped first when a host is busy — which is a shame, because they're where most of an episode's reach actually comes from. The audio serves people who already found you. The written assets and clips are how anyone new arrives.\n\nThis is also the stage that turns one recording into a month of marketing, which is a whole discipline in itself — [repurposing podcast content](/blog/repurpose-podcast-content) covers how that works in practice.",
    },
    {
      id: "distribution",
      heading: "Distribution: the last mile that gets rushed",
      body:
        "The shortest stage and the most visibly wrong when it fails.\n\nUploading to the host, completing the metadata properly rather than letting it auto-populate, setting the episode number and season, scheduling the release, and then — the step almost everyone skips — **checking it actually appeared correctly on Apple, Spotify and YouTube.**\n\nFeeds break. Artwork fails to propagate. An episode publishes with last week's description attached. None of it is complicated, and all of it is embarrassing in a way that's visible to exactly the people you most want to impress.\n\nA producer also watches the things that only show up over time: whether episode titles are consistent, whether the back catalogue's metadata is a mess, whether chapters are formatted right on each platform. Small, cumulative, and the reason a two-year-old show either looks professional or looks like it was assembled by six different people.\n\nWhere this matters most is on a long run, which is what an ongoing [monthly podcast editing retainer](/services/monthly-podcast-editing-retainer) is built to protect — the same person, the same spec, every week.",
    },
    {
      id: "what-they-dont-do",
      heading: "What does a podcast producer actually do — and not do?",
      body:
        "Worth being clear, because \"producer\" is used loosely and the gap between expectation and scope causes most of the friction in these relationships.\n\n**Guest booking and outreach** is usually yours. Not because it's beneath a producer, but because an invitation from you converts and one from a production company doesn't.\n\n**Editorial opinions.** A producer shapes how your ideas land. They don't supply the ideas, and you shouldn't want them to.\n\n**Audience growth as a guarantee.** A producer makes the show good and consistent, which are necessary for growth and not sufficient. Anyone promising download numbers is selling something else.\n\n**Sponsorship sales.** Occasionally offered, usually a separate service with a separate commercial model.\n\nAnd one genuine variation to check: at the lower end of the market, \"producer\" often means \"editor\" — someone who takes your files and returns a finished episode, with no involvement before the recording. At the upper end it means someone who shapes the format, briefs the guests and is in the room. Both are legitimate. They are very different purchases at very different prices, and confirming which one a quote describes will save you a difficult conversation later.",
    },
    {
      id: "do-you-need-one",
      heading: "Do you need one?",
      body:
        "The honest test is arithmetic rather than ambition. **Multiply your realistic hourly value by the three to six hours an episode takes, then compare it to what production costs.** For most people running a business, the sum answers itself — and if it doesn't, that's a genuine answer too.\n\nThere's a second test that matters more, though. Ask what happens to your show during your busiest month of the year. If the honest answer is \"it stops,\" you have a continuity problem, and continuity is what production actually buys. Podcasts overwhelmingly die of accumulated workload rather than lack of ideas.\n\nIf you'd rather keep the parts you enjoy — the conversation, the guests, the direction — and hand over everything else, that's the standard arrangement and it's what [done-for-you podcast production](/services/done-for-you-podcast-production) is built around: you record, everything between the raw files and the published episode is someone else's problem.\n\nAnd if you're weighing whether that person should be an employee or an external studio, [in-house vs outsourced podcast production](/blog/in-house-vs-outsourced-podcast-production) works through the cost and risk of each. For what it costs either way, [podcast production cost per episode](/blog/how-much-does-podcast-production-cost-per-episode) has the numbers.\n\nWant to know what we'd actually do with your show? [Send us an episode](/contact) and we'll tell you specifically what we'd change and why — including the parts you could fix yourself without paying anyone.",
    },
  ],
  faqs: [
    {
      question: "What does a podcast producer actually do?",
      answer:
        "They own everything except the conversation: designing the format, researching and briefing guests, running the recording, editing and mastering audio and video, producing show notes, chapters, transcripts, artwork and clips, and publishing the episode. Roughly three to six hours of work per hour of recorded conversation.",
    },
    {
      question: "What's the difference between a podcast producer and an editor?",
      answer:
        "An editor takes your recording and returns a finished episode. A producer is involved before the recording too — shaping the format, briefing guests, and often running the session itself. At lower price points \"producer\" frequently means editor, so confirm which one a quote describes.",
    },
    {
      question: "How long does it take to produce one podcast episode?",
      answer:
        "Typically three to six hours per hour of recorded conversation. Post-production alone runs two to four times episode length, with pre-production, assets and distribution on top. Video roughly doubles the post-production element, because it's effectively a second full edit.",
    },
    {
      question: "Do I need a producer for the recording itself?",
      answer:
        "Not always, but it helps. A host concentrating on the conversation cannot reliably monitor audio at the same time. A producer catches clipping, background noise and knocked microphones live — a thirty-second re-record instead of an unfixable episode — and runs backup capture in case the connection drops.",
    },
    {
      question: "Does a podcast producer book guests?",
      answer:
        "Usually not. Outreach converts far better coming from the host or their company than from a production supplier, so booking normally stays with you. Producers typically handle guest research, briefing documents, setup instructions and scheduling logistics once a guest has said yes.",
    },
    {
      question: "Can a podcast producer help my show grow?",
      answer:
        "Indirectly. Consistency, sound quality, findable show notes and clips all support growth, and a show that publishes reliably outperforms one that stops. But no producer can guarantee download numbers, and anyone promising specific audience figures is selling something other than production.",
    },
  ],
};
