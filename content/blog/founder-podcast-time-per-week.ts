import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

// James's voice: practitioner, opinionated, first-hand. See the house voice
// guide — general facts become observations, positions get taken, hedging
// gets cut. [MY EXAMPLE HERE] markers are deliberate: James fills those in
// himself rather than having anecdotes invented for him.
//
// Every figure is attributed inline to the source that published it and
// repeated in `references`. The rewrite changed the voice, not the evidence.
export const founderPodcastTimePerWeek: BlogPost = {
  slug: "founder-podcast-time-per-week",
  title:
    "How Much Time Does a Founder Actually Need to Spend on Their Podcast Per Week?",
  seoTitle: "Founder Podcast Time Per Week",
  metaDescription:
    "The real weekly time cost of a founder-led podcast, from a producer who does the work. What the hours actually are, and which ones you can't hand over.",
  publishedAt: "2026-08-04",
  category: "Podcast Strategy",
  author: jamesPearce,
  readingTime: "12 min read",
  coverImage: {
    src: "/images/blog/founder-time-hero.svg",
    alt: "A week of production tasks as stacked time blocks — recording is the smallest one, totalling 8.5 hours self-produced against 4.5 hours produced",
  },
  intro:
    "It always comes near the end of the call, after we've talked about format and guests and what the show is for. Almost as an afterthought. *\"So realistically, how much time is this going to take me each week?\"*\n\nI'll give you the answer now rather than making you scroll for it. If you produce the show yourself, eight to fifteen hours a week. If someone else handles production, three to five.\n\nThat gap is the entire article. Everything below is where it comes from, and why the number you've read elsewhere is almost certainly describing a different arrangement to the one you're imagining.",
  keyTakeaways: [
    "Self-produced weekly show: 8–15 hours a week. Produced: 3–5. Those two numbers are the whole decision.",
    "The \"few hours a week\" figure isn't dishonest — it describes a produced show while you're picturing a self-produced one.",
    "Recording is the smallest part of the job. The hours live in editing, show notes, clips and distribution.",
    "Podcasts overwhelmingly die of accumulated workload, not lack of talent or ideas.",
    "The conversation, the guest list and editorial taste are yours. Editing should be the first thing you hand over.",
    "If the hours don't work, cut frequency, not quality. A reliable fortnightly show beats a weekly one that stops in March.",
  ],
  sections: [
    {
      id: "where-the-hours-go",
      heading: "Where the hours actually go",
      body: "The number people quote is recording time. An hour of conversation, ninety minutes with setup and small talk. It's the visible part, so it's the part that anchors.\n\nIt's also the smallest part.\n\nI can usually tell within the first thirty seconds of opening a file whether I'm looking at a two-hour edit or a five-hour one. Not from the content — from the noise floor, whether the guest is wearing headphones, whether there's a hard surface behind them. That judgement has nothing to do with how good the conversation was, and everything to do with how long my week is about to become.\n\nThe published estimates line up with what the work feels like. [The Podcast Host](https://www.thepodcasthost.com/editing-production/podcast-editing/) puts a one-hour recording at roughly two hours of editing at baseline, rising to three-to-five hours for a highly produced episode with music, per-track compression and EQ. [Rachel Corbett](https://rachelcorbett.com.au/blog/how-long-does-it-take-to-create-a-podcast-episode/) goes further: four to five times the length of the recording. [Produce Your Podcast](https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/) reckons three to five minutes of work per finished minute, which turns a half-hour show into an afternoon.\n\nEven the optimistic end doesn't rescue the \"few hours\" claim. [Ollar Studios](https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/) suggests two to four times episode length if you're only cutting filler and balancing levels.\n\nAnd all of that is editing alone. It excludes booking the guest, preparing, writing the notes, cutting clips, and putting the thing out.\n\nOnce you add those, Rise25's breakdown lands at [5–12 hours per episode](https://rise25.com/lead-generation/what-do-podcast-production-services-include-a-complete-breakdown-for-b2b-companies/) even with parts outsourced. Their repurposing analysis is harsher: transcription, blog writing, social, distribution and promotion [can run to 10–20 hours](https://rise25.com/lead-generation/podcast-content-repurposing-services-save-time/).\n\nSo: eight to twenty hours a week for a self-managed weekly show. Call it a second job with worse hours.\n\n### The bit everyone underestimates\n\nIt isn't the editing. Founders expect editing to be slow.\n\nIt's the guest admin. Rise25 puts coordination at [three to six hours per confirmed guest](https://rise25.com/lead-generation/podcast-production-pricing/) — scheduling, prep notes, calendar changes, tech checks, chasing. That figure looks high to me for someone with an established network and a decent booking link. Halve it and the point survives intact.\n\nEvery guest generates a thread. A reschedule. A \"sorry, can we push to Thursday\". A \"what should I prepare?\" the night before. None of it is difficult and all of it is attritional, and it is the single most common thing I see quietly kill a show. Nobody quits podcasting because the edit was hard. They quit because there were four unanswered emails about episode nine and it was easier not to look.\n\nPreparation is the other one, and it's the one worth protecting. Forty-five minutes to two hours, depending on whether you're reading a book or skimming a bio. It's the biggest single determinant of whether the episode is worth anyone's time, and it cannot be faked. Listeners can hear an unprepared host inside two minutes.",
    },
    {
      id: "three-versions",
      heading: "Three versions of the same show",
      body: "Weekly show, 45–60 minute episodes, interview format. Here's what the week looks like depending on how much you keep.\n\n**Doing everything, publishing audio, one LinkedIn post, moving on:**\n\n| Task | Weekly hours |\n|---|---|\n| Guest sourcing & booking | 1.5 |\n| Prep | 1 |\n| Recording & setup | 1.5 |\n| Editing | 2.5 |\n| Show notes & metadata | 1 |\n| Publishing | 0.5 |\n| Light promotion | 0.5 |\n| **Total** | **~8.5 hours** |\n\nThat's the floor. Not a few hours. More than a full working day, every week, forever.\n\n**Doing everything, plus the repurposing that actually compounds:**\n\n| Task | Weekly hours |\n|---|---|\n| Everything above | 8.5 |\n| Clip creation | 2.5 |\n| Written repurposing | 2.5 |\n| Multi-platform distribution & engagement | 1.5 |\n| **Total** | **~15 hours** |\n\nNearly two working days. I've never seen a founder sustain this alongside running a company. Not once. People manage it for a quarter, occasionally two, and then something has to give and it's always the podcast.\n\n**Keeping the conversation, the guests and the prep, handing over the rest:**\n\n| Task | Weekly hours |\n|---|---|\n| Guest sourcing & booking | 1 |\n| Prep | 1 |\n| Recording & setup | 1.5 |\n| Review & approval | 0.5 |\n| Promotion & guest follow-up | 0.5 |\n| **Total** | **~4.5 hours** |\n\nThe \"few hours a week\" line isn't a lie. It's describing this last table. The people quoting it run produced shows and have forgotten that the reader is picturing the first one.",
    },
    {
      id: "podfade",
      heading: "Most podcasts die of workload",
      body: "There's a reason I keep pushing on the arithmetic rather than the strategy. Podcasting has a worse survival rate than almost any other channel a business might try, and the cause is boringly consistent.\n\nAnalysis of Podcast Index data reported by [AshMedia](https://ashmedia.org/blog/b2b-podcast-statistics) found that of 4.69 million indexed titles, only 10–11% are still publishing. A quarter released exactly one episode. Another tenth stopped at two. Just 36.5% ever reached ten. [Forbes](https://www.forbes.com/sites/frankracioppi/2026/01/06/why-do-so-many-podcasts-fail/), citing Podnews in January, put the drop-off after episode three and named the cause as burnout and underestimating the work.\n\nI should say the data isn't unanimous, because pretending otherwise would be convenient and wrong. [WhichPodcast's survival research](https://whichpodcast.com/research/podfade), looking at 22,451 shows already in their database, found 92% reached ten episodes, with the real attrition later — around 56% still going at episode 100.\n\nThose two findings are almost opposites. The difference is what counts as a podcast: one dataset includes every RSS feed anyone ever generated, the other looks at shows that had already established themselves. I find the second more useful for anyone reading this, because you're not going to abandon it after one episode. You'll abandon it at episode twenty-two, in a quarter when everything else is on fire, and it'll be the only thing on your list with no external deadline attached.\n\nPodbean's account of [why podcasters quit](https://blog.podbean.com/why-podcasters-quit-podcast-burnout/) matches what I see: people go all-in early — recording, editing, detailed notes, social — on top of a full job, and the workload produces exhaustion instead of momentum.\n\nFor a founder the cost isn't a lapsed hobby. AshMedia frames it as a consistency problem rather than a budget one, arguing the case for outsourcing [is about protecting consistency most solo producers can't maintain](https://ashmedia.org/blog/b2b-podcast-statistics). I'd put it more bluntly. A show that stops at episode eight has spent your money, used up goodwill with every guest who gave you an hour, and left a public, dated artefact of something your company started and couldn't finish.\n\n[MY EXAMPLE HERE — a show I watched fade, or one that nearly did and what changed. Useful detail: what the host's week looked like just before it stopped, and which task was the one that broke it.]",
    },
    {
      id: "what-you-cannot-hand-over",
      heading: "What you can't hand over",
      body: "This is the question I'd actually work through before choosing a frequency, because the hours aren't interchangeable.\n\nFour things are yours.\n\nThe conversation, obviously. That's the product.\n\nThe guest list, which for most founder-led B2B shows *is* the strategy rather than a supporting detail. Fame's analysis of B2B podcast returns makes the point that first-year value [comes through the guests rather than the audience](https://www.fame.so/post/ultimate-guide-to-measuring-b2b-podcast-roi), and that matches what I see: the show works because of who agreed to come on it, long before download numbers mean anything. If you're inviting target accounts and people you want to know, that invitation carries your name. Handing it to an agency to fire out on autopilot destroys the only reason it works.\n\nEditorial direction. What the show is, who it's for, what a good episode sounds like. You can delegate execution. Taste, no.\n\nAnd preparation, partly. I can hand a host a research brief and a set of questions. I can't read it for them.\n\nEverything else should go, roughly in this order: editing first, because it's the biggest block of hours and the most skill-dependent; then show notes and chapters, which take longer than anyone expects and are done badly on most shows; then clips and repurposing, which is an enormous time sink and highly systematisable; then publishing admin; then scheduling, which removes the most attritional part of the whole thing.\n\nTake the first table, and mark every row either yours or not. What's left in the second column is your brief. The total is what it's worth paying to get back — and if you want that expressed in money rather than hours, our [editing cost calculator](/podcast-editing-cost-calculator) does the sum.",
    },
    {
      id: "doing-it-yourself",
      heading: "If you're doing it yourself anyway",
      body: "Plenty of people will, and some of them should. A few choices change the maths more than any software will.\n\n**Batch record.** This is the one that genuinely moves the needle. Block a day, record three or four episodes back to back. [The Podcast Consultant](https://thepodcastconsultant.com/blog/recording-in-batches) notes most successful podcasters batch three to four per session, with vocal fatigue setting the ceiling rather than the clock. You stop paying the weekly cost of getting into podcast mode, you set up once instead of four times, and — as [Rachel Corbett](https://rachelcorbett.com.au/blog/podcast-batch-recording/) points out — you build a buffer, so flu or a bad fortnight doesn't break the streak.\n\nIt's a poor fit for anything news-reactive, and getting four guests into one Thursday is materially harder than getting one. Worth it anyway.\n\n**Record video whether or not you want video.** Content Allies puts full video production at [around 77% more expensive](https://contentallies.com/learn/how-to-repurpose-podcast-content) than audio-only, which sounds like an argument against it. It isn't, if you keep it simple. One camera, decent light, no crew.\n\nThe reason is that the alternative is worse. Deciding at month eight that you want YouTube and clips, and finding your entire back catalogue is audio-only, costs far more than a camera pointed at your desk ever would. You can throw video away. You can't retrofit it.\n\n**Fix what goes into the edit.** Nearly every hour of remedial work traces to something that went wrong at the recording end. Laptop microphones. Tiled kitchens. No headphones, so the guest's track has your voice bleeding through it and every question needs surgery. A five-minute tech check the week before saves more editing time than any plugin, and our [guide to podcast audio quality](/blog/podcast-audio-quality-guide) covers the parts software genuinely can't fix.\n\n**Publish less often.** If the numbers say weekly doesn't work, go fortnightly. Do not run a rushed weekly show instead — that's the version that stops in March. A show that turns up reliably twice a month for three years is worth more than one that publishes eight times brilliantly and vanishes, and it isn't close.",
    },
    {
      id: "the-decision",
      heading: "The decision",
      body: "Here's the exercise, and it takes twenty minutes.\n\nWrite out the tasks. Put hours against each one, honestly, including the guest admin you're tempted to round down. Mark what's genuinely yours. Multiply by the frequency you're considering.\n\nThen picture month nine. A bad quarter, a board meeting the same week, and an episode that hasn't been edited. Would you still do it?\n\nIf yes, you've got a sustainable show and you don't need me. If no, that isn't a motivation problem and it won't be solved by wanting it more. It's a scope problem, and scope problems have solutions — fewer episodes, or fewer of the tasks.\n\nThe founders whose shows are still going after three years almost all worked this out early. They kept the conversation and the guest list, gave away the rest, and stopped treating the production hours as a test of commitment.\n\nIf you want to talk through what that looks like for your show, [get in touch](/contact).",
    },
  ],
  references: [
    {
      label: "The Podcast Host — how long podcast editing takes",
      url: "https://www.thepodcasthost.com/editing-production/podcast-editing/",
    },
    {
      label: "Rachel Corbett — how long it takes to create an episode",
      url: "https://rachelcorbett.com.au/blog/how-long-does-it-take-to-create-a-podcast-episode/",
    },
    {
      label: "Produce Your Podcast — editing time per minute of audio",
      url: "https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/",
    },
    {
      label: "Ollar Studios — editing time and the cost of poor recordings",
      url: "https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/",
    },
    {
      label: "Rise25 — what B2B podcast production services include",
      url: "https://rise25.com/lead-generation/what-do-podcast-production-services-include-a-complete-breakdown-for-b2b-companies/",
    },
    {
      label: "Rise25 — podcast production pricing and guest coordination time",
      url: "https://rise25.com/lead-generation/podcast-production-pricing/",
    },
    {
      label: "Rise25 — the hours repurposing actually consumes",
      url: "https://rise25.com/lead-generation/podcast-content-repurposing-services-save-time/",
    },
    {
      label: "AshMedia — B2B podcast statistics and podfade rates",
      url: "https://ashmedia.org/blog/b2b-podcast-statistics",
    },
    {
      label: "Forbes — why so many podcasts fail (January 2026)",
      url: "https://www.forbes.com/sites/frankracioppi/2026/01/06/why-do-so-many-podcasts-fail/",
    },
    {
      label: "Podbean — why podcasters quit and podcast burnout",
      url: "https://blog.podbean.com/why-podcasters-quit-podcast-burnout/",
    },
    {
      label: "WhichPodcast — 2026 podfade survival research",
      url: "https://whichpodcast.com/research/podfade",
    },
    {
      label: "Fame — measuring B2B podcast ROI",
      url: "https://www.fame.so/post/ultimate-guide-to-measuring-b2b-podcast-roi",
    },
    {
      label: "Content Allies — repurposing output and video cost",
      url: "https://contentallies.com/learn/how-to-repurpose-podcast-content",
    },
    {
      label: "The Podcast Consultant — recording in batches",
      url: "https://thepodcastconsultant.com/blog/recording-in-batches",
    },
    {
      label: "Rachel Corbett — podcast batch recording",
      url: "https://rachelcorbett.com.au/blog/podcast-batch-recording/",
    },
  ],
};
