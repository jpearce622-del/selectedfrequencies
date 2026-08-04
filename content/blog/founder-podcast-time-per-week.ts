import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

// Written in James's voice — the authority here comes from having done the
// production work, so it carries his byline rather than the content team's.
//
// Every external figure is attributed inline to the source that published it,
// and repeated in `references`. Nothing is presented as our own data: the
// only first-hand claims are about how the work is structured, not numbers.
export const founderPodcastTimePerWeek: BlogPost = {
  slug: "founder-podcast-time-per-week",
  title:
    "How Much Time Does a Founder Actually Need to Spend on Their Podcast Per Week?",
  seoTitle: "Founder Podcast Time Per Week",
  metaDescription:
    "An honest, researched breakdown of the real weekly time cost of a founder-led podcast — the hours nobody mentions, and which ones you can't delegate.",
  publishedAt: "2026-08-04",
  category: "Podcast Strategy",
  author: jamesPearce,
  readingTime: "14 min read",
  coverImage: {
    src: "/images/blog/founder-time-hero.svg",
    alt: "A week of production tasks as stacked time blocks — recording is the smallest one, totalling 8.5 hours self-produced against 4.5 hours produced",
  },
  intro:
    "Every founder I've worked with has asked some version of the same question before launching a show. Usually it arrives casually, near the end of a call, phrased as though it's a formality: *\"Realistically, how much time is this going to take me each week?\"*\n\nAlmost every article answering that question is either wildly optimistic or deliberately vague. You'll see \"just a few hours a week!\" on agency landing pages, and \"one hour to record, done!\" from people selling recording software. Both are technically true and functionally useless, because they describe one task in a chain of about fourteen.\n\nI produce podcasts for a living. I've spent eight years inside the production process for business and thought-leadership shows, and the honest answer is more complicated — and more interesting — than a single number.\n\nSo here's the real breakdown: every task that goes into a published episode, roughly how long each takes, which ones you personally have to do, and which are the first to hand off. By the end you should be able to calculate your own number rather than borrowing someone else's.",
  keyTakeaways: [
    "A self-produced weekly show realistically costs 8–15 hours a week. With production handled, it's 3–5.",
    "The \"few hours a week\" figure isn't a lie — it describes a produced show, while the reader imagines a self-produced one.",
    "Recording is the smallest part of the job. Editing, show notes, clips and distribution are where the hours actually go.",
    "Most podcasts die of accumulated workload, not lack of talent — the majority never reach ten episodes.",
    "The conversation, the guest list and editorial direction are yours. Editing, show notes and repurposing should be the first things delegated.",
    "If the hours don't work, cut frequency before you cut quality — a reliable fortnightly show beats a weekly one that stops in month three.",
  ],
  sections: [
    {
      id: "why-a-few-hours-is-wrong",
      heading: "Why the \"just a few hours\" figure is wrong",
      body: "The number that gets quoted is almost always *recording time*. An hour of conversation, maybe ninety minutes with setup and small talk. That's the visible part of the process, so it's the part people anchor to.\n\nThe problem is that recording is a small minority of the total work, and the industry data on this is consistent.\n\n[The Podcast Host's guide to editing](https://www.thepodcasthost.com/editing-production/podcast-editing/) estimates that a one-hour recording needs roughly two hours of editing at a baseline level — and that with music beds, manual compression and EQ per track, and a highly produced approach, you're looking at three to five hours for that same hour of audio.\n\nPodcast consultant [Rachel Corbett puts the multiplier higher still](https://rachelcorbett.com.au/blog/how-long-does-it-take-to-create-a-podcast-episode/), suggesting editing a show properly runs at four to five times the length of your recorded audio. [Produce Your Podcast](https://produceyourpodcast.com/how-long-does-it-take-to-edit-a-podcast/) puts skilled editors at three to five minutes of work per minute of finished audio — meaning a 30-minute show can absorb 90 to 150 minutes of editing alone.\n\nEven the more efficient estimates don't get close to \"a few hours\". [Ollar Studios](https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/) suggests two to four times episode length, with a 60-minute episode landing at one to two hours if you're only cutting filler, balancing levels, and adding music.\n\nAnd that's just editing. It excludes everything before and after.\n\nThe most useful figure I've found comes from B2B production agency Rise25, whose breakdown notes that [even when you outsource some pieces, total time investment often lands in the 5–12 hour range per episode](https://rise25.com/lead-generation/what-do-podcast-production-services-include-a-complete-breakdown-for-b2b-companies/) once preparation, communication and approvals are included. Their separate analysis of repurposing is blunter: editing, transcription, blog writing, social content, distribution and promotion [can easily consume 10–20 hours per episode](https://rise25.com/lead-generation/podcast-content-repurposing-services-save-time/).\n\nSo the honest range for a fully self-managed weekly podcast is somewhere between **8 and 20 hours per week**, depending on production standard and how much you repurpose.\n\nThat's not a side project. That's a part-time job.",
    },
    {
      id: "task-inventory",
      heading: "The full task inventory",
      body: "Here's what actually happens between \"I'd like to do a podcast\" and \"the episode is live and working for the business\". Four phases, with realistic ranges for a founder doing it themselves, based on a weekly interview show with 45–60 minute episodes.\n\n### Phase 1: Pre-production\n\n**Guest sourcing and research — 1 to 4 hours per guest.** The phase founders consistently underestimate. Rise25's pricing analysis suggests [two to four hours of research per guest](https://rise25.com/lead-generation/podcast-production-pricing/) to identify targets, understand their work, and personalise outreach — and notes that with cold outreach converting between 1% and 10%, booking four guests a month can mean contacting dozens to hundreds of prospects. For most founder-led shows this is less severe, because you're usually inviting people already in or adjacent to your network. But \"less severe\" is not \"free\".\n\n**Outreach, scheduling and coordination — 1 to 3 hours per guest.** Rise25 puts coordination at [three to six hours per confirmed guest](https://rise25.com/lead-generation/podcast-production-pricing/) covering scheduling, prep materials, calendar changes, technical setup and follow-up. That's on the high side for a founder with an established network and a decent scheduling link, but the underlying point holds: every guest generates an email thread, a reschedule, a \"sorry, can we push to Thursday\", a \"what should I prepare?\", and a tech check.\n\nThis is genuinely the most annoying hour in podcasting, and the one that quietly kills the most shows.\n\n**Episode prep — 45 minutes to 2 hours.** Reading the guest's book, listening to their recent appearances, drafting questions, structuring an arc so the conversation goes somewhere rather than meandering. Preparation is the single biggest determinant of whether an episode is worth listening to, and it's very hard to fake.\n\n### Phase 2: Recording\n\n**Setup and tech check — 15 to 30 minutes**, assuming a permanent setup. If you're building a room each time — [which can take an hour or more](https://www.mcdougallinteractive.com/blog/content-marketing/batch-recording-podcast-episodes/) with full equipment — add substantially.\n\n**The recording itself — 60 to 90 minutes.** Including pre-roll chat, the conversation, and the inevitable \"let me just re-record that intro\" at the end.\n\n### Phase 3: Post-production\n\n**Editing — 1 to 5 hours.** The range depends entirely on standard. A light cut of a clean two-person conversation sits at the bottom. A tightly-paced episode with music, chapter structure and remedial work on a guest who recorded into their laptop microphone sits at the top.\n\nAudio quality upstream matters enormously here. As Ollar Studios notes, clean recordings with proper mic placement [drastically reduce the need for heavy post-production repair](https://ollarstudios.com/how-long-does-it-take-to-edit-a-podcast/). An hour spent setting a guest up properly saves two in the edit.\n\n**Show notes, chapters and metadata — 45 minutes to 2 hours.** Title, description, chapter timestamps, tags, transcript review. Unglamorous work that most founders hate and most shows do badly — which is precisely why doing it well is an advantage. It's also the layer that makes an episode discoverable rather than merely published.\n\n**Artwork and asset prep — 30 minutes to 1 hour.** Episode graphic, quote cards, thumbnail if you're publishing to YouTube.\n\n### Phase 4: Distribution and repurposing\n\nThis is where the hours get out of hand, and where the gap between \"publishing a podcast\" and \"running a podcast that does something for the business\" lives.\n\n**Publishing and platform admin — 20 to 40 minutes.** Upload, schedule, check the feed, push to YouTube, update the site.\n\n**Clip creation — 1 to 4 hours.** A one-hour episode [can yield 10 to 20 short clips](https://www.klypse.app/blog/podcast-to-short-clips), and Content Allies recommends [three to eight vertical clips per episode](https://contentallies.com/learn/how-to-repurpose-podcast-content) in the 15–90 second range. Tooling has improved dramatically — but as Choppity points out, manually hunting for clip-worthy moments in a 60-minute episode [can take half a workday](https://www.choppity.com/blog/how-to-repurpose-podcast-into-shorts/) without it.\n\n**Written repurposing and social — 1 to 4 hours.** Content Allies' full output profile per episode includes blog posts targeting different keyword variants, email sequences, LinkedIn posts and carousels, quote graphics, audiograms and sales enablement assets. That's an aspirational ceiling rather than a baseline — but it illustrates why the 10–20 hour figure exists.\n\n**Promotion and follow-up — 30 minutes to 1 hour.** Sending the guest their assets, asking them to share, engaging with comments, following up on the relationship the episode was supposed to build.",
    },
    {
      id: "three-models",
      heading: "Adding it up: three realistic models",
      body: "Collapsing all that into three scenarios for a **weekly show**.\n\n### Model 1: Full DIY, minimal repurposing\n\nYou do everything. You publish audio, write your own show notes, post to LinkedIn once, and move on.\n\n| Task | Weekly hours |\n|---|---|\n| Guest sourcing & booking | 1.5 |\n| Prep | 1 |\n| Recording & setup | 1.5 |\n| Editing | 2.5 |\n| Show notes & metadata | 1 |\n| Publishing | 0.5 |\n| Light promotion | 0.5 |\n| **Total** | **~8.5 hours/week** |\n\nThis is the floor for a self-produced weekly show. Not a few hours. More than a full working day.\n\n### Model 2: Full DIY with serious repurposing\n\nSame as above, plus clips, written content and multi-platform distribution — the version that actually generates compounding returns.\n\n| Task | Weekly hours |\n|---|---|\n| Everything in Model 1 | 8.5 |\n| Clip creation | 2.5 |\n| Written repurposing | 2.5 |\n| Multi-platform distribution & engagement | 1.5 |\n| **Total** | **~15 hours/week** |\n\nNearly two full working days. For most founders this is simply not survivable alongside running a company — which is the mechanism behind the failure rate below.\n\n### Model 3: Produced show\n\nYou keep guest relationships, prep and recording. Everything downstream is handled.\n\n| Task | Weekly hours |\n|---|---|\n| Guest sourcing & booking\\* | 1 |\n| Prep | 1 |\n| Recording & setup | 1.5 |\n| Review & approval | 0.5 |\n| Promotion & guest follow-up | 0.5 |\n| **Total** | **~4.5 hours/week** |\n\n\\* *Can be reduced further with booking support, though most founder-led shows keep this in-house because the guest list is the strategy.*\n\nHere's the thing worth noticing: **the \"few hours a week\" figure isn't a lie — it's describing Model 3.** The people quoting it are describing a produced show while their reader imagines a self-produced one. That mismatch is where most disappointment originates.",
    },
    {
      id: "podfade",
      heading: "The failure mode nobody plans for",
      body: "Time budgeting matters more in podcasting than in most marketing channels because podcasting has an unusually brutal attrition curve, and the primary cause is time, not talent.\n\nThe phenomenon has a name — podfade — and the numbers are stark. Analysis of Podcast Index data reported by [AshMedia](https://ashmedia.org/blog/b2b-podcast-statistics) found that of 4.69 million indexed titles, only an estimated 10–11% are still releasing new episodes. Broken down by episode count: roughly a quarter of all shows published exactly one episode, another tenth stopped at two, and only 36.5% ever reached ten.\n\n[Forbes reported in January 2026](https://www.forbes.com/sites/frankracioppi/2026/01/06/why-do-so-many-podcasts-fail/) on Podnews data suggesting the vast majority of podcasts stop publishing after episode three, attributing it to creator burnout, loss of interest, and — critically — underestimating the work involved.\n\nPodbean's analysis is more specific about the mechanism: creators go [all-in early, investing heavily in recording, editing, detailed show notes and social marketing on top of existing jobs](https://blog.podbean.com/why-podcasters-quit-podcast-burnout/), and the resulting workload produces exhaustion rather than momentum.\n\nThe picture isn't uniformly grim. [WhichPodcast's 2026 survival research](https://whichpodcast.com/research/podfade), analysing 22,451 shows with episodes in their database, found 92% reached ten episodes — with attrition happening later, around 56% still publishing by episode 100. The discrepancy is mostly about what counts as a \"podcast\" in the dataset. But both readings point the same direction: **the middle years are where shows die, and they die of accumulated workload.**\n\nFor a founder, podfade isn't a failed hobby. AshMedia frames the business risk precisely: from a B2B perspective, the case for outsourcing production [is less about saving money than about protecting the consistency most solo producers cannot maintain](https://ashmedia.org/blog/b2b-podcast-statistics). A show that dies at episode eight has consumed real budget, burned goodwill with the guests you invited, and left a public artefact of an abandoned initiative attached to your company name.",
    },
    {
      id: "what-to-delegate",
      heading: "Which hours can you actually delegate?",
      body: "This is the more useful question, and the one I'd encourage any founder to work through before deciding on frequency. Not every hour is equal. Some are genuinely yours. Most aren't.\n\n**Hours only you can spend:**\n\n- **The conversation itself.** Obviously. This is the product.\n- **Guest relationships.** For most founder-led B2B shows, the guest list *is* the strategy. Fame's analysis makes the point that first-year ROI from a B2B podcast [is unlikely to come from the audience — it comes through the guests](https://www.fame.so/post/ultimate-guide-to-measuring-b2b-podcast-roi). If you're inviting target accounts, partners and people you want relationships with, that outreach carries your name and shouldn't be delegated to a booking agency on autopilot.\n- **Editorial direction.** What the show is about, who it's for, what a good episode sounds like. You can hand off execution; you can't hand off taste.\n- **Preparation.** Partly delegable — a producer can supply research briefs and question suggestions — but you have to actually absorb it.\n\n**Hours to hand off first, in order:**\n\n1. **Editing.** Highest hours, lowest strategic value, most skill-dependent. Always the first thing to go.\n2. **Show notes, chapters and metadata.** Time-consuming, easy to do badly, and directly affects discoverability.\n3. **Clip creation and repurposing.** Enormous time sink, highly systematisable.\n4. **Publishing and distribution admin.** Pure process.\n5. **Scheduling logistics.** A good scheduling system plus someone handling the back-and-forth removes the most attritional part of the workflow.\n\nRun your own version of the Model 1 table and mark each row \"mine\" or \"not mine\". Whatever's in the \"not mine\" column is your outsourcing brief, and the total is what it's worth to you. If you want that in money rather than hours, our [editing cost calculator](/podcast-editing-cost-calculator) does the arithmetic.",
    },
    {
      id: "cutting-the-number",
      heading: "How to cut the number down without cutting the show",
      body: "If you're going to run this yourself, several structural choices materially change the arithmetic.\n\n### Batch record\n\nThe single highest-leverage habit available. Rather than recording weekly, block a day and record three or four episodes back-to-back. [The Podcast Consultant](https://thepodcastconsultant.com/blog/recording-in-batches) notes most successful podcasters batch three to four episodes per session — roughly a month of content — with the ceiling set by vocal fatigue and declining quality rather than time.\n\nThe benefits compound: you eliminate the weekly cost of getting into \"podcast mode\", you stop losing setup time repeatedly, and as [Rachel Corbett points out](https://rachelcorbett.com.au/blog/podcast-batch-recording/), you build a buffer so illness, travel or a brutal work week doesn't break your publishing streak.\n\nThe caveat: batching is a poor fit for news-reactive shows, and coordinating multiple guests into one day is genuinely harder than coordinating one.\n\n### Record video by default, even if you're audio-first\n\nVideo carries real cost — Content Allies cites video as [roughly 77% more expensive than audio-only production](https://contentallies.com/learn/how-to-repurpose-podcast-content) at full scale. But their pragmatic recommendation is a hybrid approach: record video always, even single-camera with basic lighting, because it preserves every downstream repurposing option at minimal marginal cost.\n\nThe alternative — deciding six months in that you want clips and YouTube distribution, and discovering your back catalogue is audio-only — is a far more expensive mistake than a camera pointed at your desk.\n\n### Fix your inputs\n\nEvery hour of remedial editing traces back to something that went wrong at the recording stage. Guests on laptop microphones. Rooms with hard surfaces. No headphones, so every question bleeds back into their track. A five-minute pre-call tech check and a short guest prep note will save you more editing time than any software — our [guide to podcast audio quality](/blog/podcast-audio-quality-guide) covers the fundamentals no plugin can fix.\n\n### Reduce frequency before you reduce quality\n\nIf the numbers say a weekly show isn't survivable, the answer is fortnightly or monthly — not a rushed weekly show. Consistency and reliability matter more than raw frequency. A podcast that reliably delivers twice a month for three years is worth vastly more than one that publishes weekly for two months and disappears.",
    },
    {
      id: "weekly-rhythm",
      heading: "A realistic weekly rhythm",
      body: "Here's what a sustainable founder schedule looks like for a weekly show, produced:\n\n| When | What | Time |\n|---|---|---|\n| Monday | Guest outreach and follow-up, batched into one block | 45 min |\n| Wednesday | Episode prep for upcoming recordings | 1 hour |\n| Thursday | Recording block (batched — two episodes) | 2.5 hours |\n| Friday | Review edited episode, approve assets, send guest their clips | 45 min |\n| Ongoing | Comment engagement, sharing, relationship follow-up | 30 min |\n\n**Total: roughly 5.5 hours in a recording week, closer to 2 in a non-recording week.** Averaged across a batching cycle, most founders running a produced weekly show land in the 3–5 hour range.\n\nCompare that to the 8.5-hour floor or 15-hour ceiling for the self-produced versions and the trade becomes clear. It isn't really budget versus no budget. It's a question of which version of the show you'll still be publishing in eighteen months.",
    },
    {
      id: "the-actual-answer",
      heading: "The actual answer",
      body: "If you take one thing from this: **the honest number is 8 to 15 hours per week if you do it all yourself, and 3 to 5 hours per week if the production is handled.**\n\nEverything else is a variation on those two figures. The founders whose podcasts are still running years later — and generating relationships, pipeline and authority — almost universally settled into the second number early, protected their hours for the conversation and the guest list, and handed off the rest.\n\nThe ones who didn't are mostly in the statistics.\n\nBefore you launch, do the exercise properly. Write out the task list. Assign hours. Mark what's yours. Multiply by the frequency you're considering. Then ask yourself, honestly, whether you'd still do that in month nine, during a bad quarter, with a board meeting the same week.\n\nIf the answer is yes, you've got a sustainable show. If it's no, you don't have a motivation problem — you have a scope problem, and scope problems are solvable.\n\nIf you'd like to talk through what a realistic production setup looks like for your show, [get in touch](/contact).",
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
      label: "Rise25 — podcast production pricing and guest research time",
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
      label: "Choppity — time spent finding clip-worthy moments",
      url: "https://www.choppity.com/blog/how-to-repurpose-podcast-into-shorts/",
    },
    {
      label: "Klypse — how many clips an episode yields",
      url: "https://www.klypse.app/blog/podcast-to-short-clips",
    },
    {
      label: "The Podcast Consultant — recording in batches",
      url: "https://thepodcastconsultant.com/blog/recording-in-batches",
    },
    {
      label: "Rachel Corbett — podcast batch recording",
      url: "https://rachelcorbett.com.au/blog/podcast-batch-recording/",
    },
    {
      label: "McDougall Interactive — batch recording setup time",
      url: "https://www.mcdougallinteractive.com/blog/content-marketing/batch-recording-podcast-episodes/",
    },
  ],
};
