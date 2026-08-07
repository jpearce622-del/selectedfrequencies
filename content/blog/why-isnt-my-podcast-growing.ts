import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * Long-form diagnostic article with two embedded interactives.
 *
 * On statistics: the only figures quoted here are the two survival datasets
 * already cited and linked elsewhere in this blog. Everything else is written
 * qualitatively on purpose. Podcast analytics are not standardised across
 * Apple, Spotify and YouTube, so most "industry average" numbers in
 * circulation are unsourced or measure different things under the same name.
 *
 * TODO: verify stat — if a defensible public dataset appears for
 * completion rates or follow rates by category, the Retention and Measurement
 * sections would both be stronger with a real figure attached. Do not add one
 * without a citation that survives being clicked.
 */
export const whyIsntMyPodcastGrowing: BlogPost = {
  slug: "why-isnt-my-podcast-growing",
  title: "Why Isn't My Podcast Growing?",
  seoTitle: "Why Isn't My Podcast Growing?",
  metaDescription:
    "A five-layer diagnostic for a stalled podcast. Work out whether your problem is discovery, packaging, retention, consistency or measurement, and fix the one that's actually holding you back.",
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07",
  category: "Podcast Strategy",
  author: jamesPearce,
  readingTime: "16 min read",
  coverImage: {
    src: "/images/blog/growth-layers-hero.svg",
    alt: "Five stacked layers of podcast growth narrowing downwards, with the retention layer highlighted as the constraint",
    caption:
      "The narrowest layer sets the width of everything beneath it.",
    credit: "Selected Frequencies",
  },
  intro: `You are thirty-something episodes in. The guests are people you were genuinely pleased to book. The audio is clean. You have a publishing rhythm, a decent cover, and a folder of episodes you are not embarrassed by. And the download graph is a flat line with a slight downward tilt, which somehow feels worse than a decline.

The usual advice at this point is to try harder at whatever you are already doing. Post more clips. Ask for more reviews. Book a bigger name. Most of it is not wrong, exactly, but it is aimed at nothing in particular, and a year of untargeted effort on a stalled show is how people end up quitting.

Here is the thing that actually explains most stalled shows, and it is uncomfortable: **the real problem is almost always in a different layer from the one the host is working on.** Hosts who love the craft polish the edit while nobody is finding the episodes. Hosts who love promotion push harder on discovery while the show loses everyone at minute four. Both are working hard. Both are working on the wrong layer.

This piece breaks a podcast into the five layers a listener actually moves through, so you can find which one is capping you before you spend another quarter on the wrong fix.`,
  keyTakeaways: [
    "A listener passes through five layers: discovery, packaging, retention, consistency and measurement. The weakest one caps everything below it.",
    "Most hosts optimise the layer they enjoy, not the layer that is failing.",
    "Downloads cannot distinguish stagnation from churn, which are opposite problems that look identical on a graph.",
    "Upstream problems dominate downstream ones, so fix discovery before retention, not the other way round.",
    "For an expert-led show, reach is a proxy metric. The right 400 listeners can be worth more than the wrong 8,000.",
  ],
  sections: [
    {
      id: "five-layers",
      heading: "The five layers",
      body: `Think of your show as five layers stacked on top of each other. A listener has to clear each one to reach the next, which means the narrowest layer sets the width of everything below it. This is the whole reason untargeted effort fails: work spent on a layer that is already wide enough produces nothing at all.

In the order a listener moves through them:

1. **Discovery.** Nobody finds it.
2. **Packaging.** They find it and do not press play.
3. **Retention.** They press play and leave.
4. **Consistency.** Nothing compounds from one episode to the next.
5. **Measurement.** You are optimising the wrong number, so you cannot tell which of the four above is the problem.

The order matters more than it looks. An upstream problem constrains everything downstream of it, so a show with a discovery problem and a retention problem should fix discovery first, even though retention feels like the more serious failing. Improving retention raises the percentage of a number that is currently too small to matter. Improving discovery makes every future retention gain worth something.

Before reading the rest of this, spend three minutes on the diagnostic below. It scores you across all five layers and names the weakest one. There is no email gate and nothing is stored, and the result is easier to act on than a general sense that things could be better.`,
      interactive: "growth-diagnostic",
    },
    {
      id: "discovery",
      heading: "Layer one: discovery",
      body: `Discovery is the layer most shows are worst at, and the one most hosts think least about, because it feels like marketing rather than podcasting. It is also where the largest single gains usually sit.

### Guest-named episode titles

"Episode 84: Sarah Chen" is unsearchable. Nobody who has not already heard of Sarah Chen will ever type that, and the people who have heard of her are not the audience you are trying to reach.

Apple and Spotify both weight titles heavily in their own search, and their search is where a meaningful share of podcast discovery happens. The fix is to lead with the topic and let the guest's name follow as a credential: "How to price a services business, with Sarah Chen" rather than the episode number and a name. You lose nothing and you become findable by everyone searching for the problem your episode solves.

### No YouTube presence

Video is now a primary podcast discovery surface rather than an afterthought, and YouTube's recommendation engine has no equivalent anywhere in the audio ecosystem. A show that exists only as an RSS feed is invisible to the largest discovery machine available to it.

You do not need a studio to start. Full episodes uploaded as static artwork over the audio still get indexed, still get recommended, and still surface in search. That is a low bar and it is worth clearing this month rather than next year.

### No atomisation

One fifty-minute file a week is one chance to be found. That same recording contains six to ten clips, a set of quote graphics, a written post, and a section for your newsletter. Each of those is another surface where somebody who has never heard of you might encounter the idea.

Most hosts know this and do not do it, because it is a second job on top of the first one. That is a fair reason, and it is also exactly the kind of production work that is worth handing over, since it is systematisable in a way the conversation itself is not.

### Guest amplification never requested

Most shows send the guest a link and hope. No pre-written copy, no assets sized for each platform, no agreed timing, no follow-up.

Your guest's audience is the cheapest growth channel you will ever have access to, and sending a bare link puts the entire job of promoting you onto somebody with no particular reason to do it well. Build a small pack instead: a paragraph they can paste, an image sized for each place they post, and a date you have both agreed. The difference in reach between a link and a pack is not marginal.

### No owned surface

If there is no email list and no episode page on your own domain, nothing accrues. Every episode's audience has to be rebuilt from scratch, because you have no way to reach the people who liked the last one.

An email list is unglamorous and it is the only audience you own outright. Platforms change their recommendation logic without telling you. An inbox does not.

### Category and metadata neglect

The show-level fields are set once, usually in a hurry, on the day of launch, and then never revisited. A wrong Apple category, a generic show description with no thought given to the words people actually search, a missing author field: none of these will announce themselves, and all of them quietly limit where you can be found.

This is twenty minutes of work that most shows have never done. Go and read your own show description as though you had never heard of yourself.`,
    },
    {
      id: "packaging",
      heading: "Layer two: packaging",
      body: `Packaging is what happens in the few seconds between somebody finding your show and deciding whether to spend forty-five minutes on it. It is the cheapest layer to fix and the one where small changes move the largest percentages, because you are already paying the cost of discovery and then discarding the result at the final step.

### Artwork that fails the thumbnail test

Your cover will be seen at roughly the size of a fingernail, on a phone, in a list of competing shows. If the show name is unreadable and the subject is unguessable at that size, it is decoration rather than packaging.

Test it properly: shrink the file to about 55 pixels wide and look at it on an actual phone rather than a desktop monitor. Most covers fail this, and the failure is usually the same one. Too many words, too much detail, and a wordmark designed to be admired at full size.

### Descriptions that open with a bio

"Sarah Chen is the Chief Executive of..." is the least interesting sentence available to you, and it is the opening line of a startling number of episode descriptions.

The first line should carry the tension or the claim the episode resolves. What does this conversation argue? What does it settle? Somebody scanning a list needs a reason to stop, and a job title is not one unless they already know the name.

### No trailer, or a two-year-old one

A trailer is the only thing a cold listener will sample before committing to a full episode. If you do not have one, the sample is a random forty-five minute episode, which most people will not start. If you have one from two years ago describing a show you no longer make, it is actively misleading them.

Two minutes, recorded this month, describing the show as it currently exists. This is an afternoon of work that will keep paying out for a year.

### No entry point

A new listener arrives at episode 147. There is no "start here", no best-of, no grouping into series, nothing to indicate which episode would tell them whether this show is for them. So they pick the most recent one, which might be an unusual format or a niche subject, and they leave.

You know your back catalogue intimately and they have been in it for nine seconds. Pin something. Curate a short path in.

### Unpredictable format

Episodes running anywhere from twenty minutes to an hour and fifty, with nothing in the metadata to signal which this one is, makes every play a gamble on the listener's time. People with a commute of a known length make decisions based on that length.

You do not have to standardise the show. You do have to tell people what they are getting before they commit to it.`,
    },
    {
      id: "retention",
      heading: "Layer three: retention",
      body: `Retention is where good shows quietly fail. Everything up to this point was about getting somebody to press play, and this is the layer that decides whether that was worth doing. It is also the layer that most affects whether you get recommended, because every platform's recommendation logic is built on whether people finish things.

### The cold open failure

Theme music, then a sponsor read, then three minutes of "how has your week been" before a single idea lands. By the time the conversation reaches anything a listener came for, a meaningful share of them have already gone.

The first ninety seconds decide the episode. Take the sharpest moment from the conversation, put it at the very top before anything else, and then run the music and the introduction. This costs you nothing but a decision in the edit, and it is the single highest-return change available to most shows.

### No promise-payoff structure

A conversation is not an episode. A conversation is the raw material; an episode is something built out of it.

An episode makes a promise in the first two minutes and pays it off before the end. That promise can be a question, a claim, a problem, or an argument, but it has to exist and the listener has to be able to feel it. Two interesting people talking with no editorial shape can be a genuinely enjoyable hour in the room and still not survive contact with somebody's commute, because the listener has no reason to believe the next ten minutes will go anywhere.

### Audio that fatigues

This is rarely about bad audio. Bad audio is obvious and people fix it. The problem is tolerable audio: levels that differ noticeably between host and guest, a room with hard reflections, plosives that were never dealt with, and an overall loudness that sits below everything else in the listener's feed so they have to reach for the volume.

None of this gets articulated. Nobody emails to say the levels were uneven. They just find the episode slightly tiring, and they stop before the end, and they do not entirely know why.

### Unprepped guests

Ten minutes spent extracting a career history that anybody could have read on LinkedIn is ten minutes of an episode where nothing happens. The guest is not at fault. Preparation is a production task, and on most shows it is nobody's job.

The fix is a briefing document that both of you have read, with the questions that matter and the ground you have agreed to skip. Good preparation is what lets an interview open at the interesting part instead of arriving there at minute twelve.

### No reason to return

The episode ends, the loop closes completely, and there is nothing pulling anybody towards next week. No recurring segment, no series arc, no question left open, no reason to expect anything in particular.

Every returning listener is a person who chose you twice. Giving them something to come back for is cheaper than acquiring somebody new, and most shows do not do it at all.

### Length dictated by recording, not content

You recorded forty minutes, so you published forty minutes. But there were twenty-five minutes of substance in it, and the listener can tell.

Publishing the shorter, denser version is the harder editorial decision and it is almost always the right one. Nobody has ever abandoned a podcast because the episodes respected their time.

Below is a way to see which of these is actually costing you. Take one recent episode and fill in whatever numbers you can find.`,
      interactive: "discovery-leak",
    },
    {
      id: "consistency",
      heading: "Layer four: consistency",
      body: `Consistency is the layer that turns individual good episodes into a growing show. Without it, every episode starts from nothing.

### Irregular publishing

Both listener habit and platform behaviour reward predictability. A show that appears fortnightly-ish never becomes part of anybody's routine, because there is no routine to join.

If weekly is not sustainable, publish fortnightly and hold that line absolutely. A dependable fortnightly show beats an aspirational weekly one that misses a third of its slots, and it is far kinder to the person making it.

### Quitting before the curve

Growth in podcasting is slow and compounding, and a large share of shows stop before the compounding starts. Analysis of Podcast Index data reported by [AshMedia](https://ashmedia.org/blog/b2b-podcast-statistics) found that of 4.69 million indexed titles, only 10 to 11 per cent are still publishing, with a quarter having released exactly one episode.

That figure counts every feed anybody ever generated, so it overstates the problem for a show that is already running. [WhichPodcast's survival research](https://whichpodcast.com/research/podfade), which looked at 22,451 shows already established in their database, found around 56 per cent still going at episode 100. That is the more useful number for you, and it still means roughly two in five serious shows stop before they get there.

### Ignoring the existing audience

Two hundred people already listen to you every week. Most shows never ask them anything, never build a route for them to reply, and never give them a reason to bring somebody with them.

This is the strangest gap in podcasting. Hosts will spend months chasing strangers while the people who already chose them sit there, unasked.

### Format churn

Changing the shape of the show every ten episodes resets the audience's expectations each time. Interview show, then solo, then panel, then interview again. Each change asks existing listeners to decide all over again whether this is a show for them, and some of them decide it is not.

Experiment by all means, but let a format run long enough to know whether it works.`,
    },
    {
      id: "measurement",
      heading: "Layer five: measurement",
      body: `This is the layer that reframes everything above it, and it is the one worth reading twice. Every diagnosis in this article is a guess until you can see which stage is actually leaking.

### Downloads as the only number

A download tells you a file was requested. It does not tell you whether anybody listened, how long they stayed, whether they had heard of you the week before, or whether they will be back. It is close to the least informative thing you could know about your show, and for most hosts it is the only thing they look at.

Follower growth, completion rate, and the split between new and returning listeners each tell you something a download cannot. All three are available in Apple Podcasts Connect and Spotify for Podcasters, and most hosts have never opened those screens.

### No new-versus-returning split

This is the important one, and it is the reason a flat line is unreadable on its own.

Flat downloads can mean nobody new is arriving. Flat downloads can also mean you are acquiring new listeners at exactly the rate you are losing existing ones, which is a completely different show with a completely different problem. The first is a discovery failure and the second is a retention failure, they need opposite responses, and on a download graph they are indistinguishable.

If you take one thing from this article, take this: find that split before you decide what is wrong.

### Chart position as a goal

Charts measure velocity over a short window. They reward a burst of downloads in a few days, which is why a launch push or a well-timed guest can place a show that has no audience at all. Chasing that is optimising for a number that describes the last seventy-two hours rather than the health of the thing you are building.

### The wrong success metric entirely

For an expert-led or business show, reach is a proxy metric, and often a poor one.

If the show exists to build credibility in a narrow field, to open conversations with a specific kind of buyer, or to make you the person somebody thinks of when a particular problem lands on their desk, then the correct question is not how many people listened. It is whether the right people listened, and whether it changed what they think of you.

Four hundred of the right listeners can outperform eight thousand of the wrong ones by every measure that pays for the show. That reframing is uncomfortable because it removes the scoreboard, and it is usually the truest thing available. The better question is not "why isn't my podcast growing" but "is my podcast reaching the specific people it was built to reach, and is it changing what they think of me."`,
    },
    {
      id: "what-to-do",
      heading: "So what do you actually do",
      body: `Fix the bottleneck layer, not the one you enjoy working on.

That sounds obvious written down and it is the thing almost nobody does, because the layers are not equally pleasant to work on. Editing is satisfying and measurable. Rewriting six months of episode titles is dull. Reading your analytics properly involves finding out something you would rather not know. So hosts optimise retention when their problem is discovery, and chase discovery when their episodes do not hold anybody who arrives.

If you ran the diagnostic, you have a named layer to start with. If you did not, the shortest useful version is this. Open your analytics and find your new-versus-returning split and your completion rate. Those two numbers will tell you within about ten minutes whether you have a discovery problem or a retention problem, and that single distinction determines everything else you should do this quarter.

Then work upstream to downstream. Discovery before packaging, packaging before retention, and consistency underneath all of it. Resist the urge to fix all five at once, because you will not be able to tell what worked.

One last thing, since this is a producer writing it and you should weigh that accordingly. Production is diagnosis before it is editing. The value in handing a show over is not primarily that somebody else does the cutting. It is that somebody who has watched a lot of shows succeed and fail looks at yours and tells you which layer is broken, then fixes that one first. If you would rather do it yourself, everything above is the method, and the [show notes generator](/tools/show-notes-generator) will handle the packaging work for free. If you would rather hand it over, that is [what the studio does](/services), and the rates are published rather than hidden behind a quote form.

Either way, stop working on the layer you like. Work on the one that is costing you.`,
    },
  ],
  faqs: [
    {
      question: "Why did my podcast downloads suddenly drop?",
      answer:
        "A sudden drop is usually technical rather than editorial. Check whether your feed still validates and whether your host changed anything, since a broken enclosure or a regenerated set of episode GUIDs can cut delivery sharply without anything appearing wrong on your dashboard. Also check whether Apple or Spotify changed how they count: both have revised their download definitions in the past, and a definition change looks exactly like an audience collapse. Only once those are ruled out is it worth looking at the content itself.",
    },
    {
      question: "How long does it take for a podcast to grow?",
      answer:
        "Longer than almost anybody expects, and the growth is compounding rather than linear, which means the early months look flat even when everything is working. WhichPodcast's survival research found around 56 per cent of established shows still publishing at episode 100, so a substantial share stop before back-catalogue discovery starts contributing anything. A weekly show is realistically looking at a year before the shape of its growth is readable at all.",
    },
    {
      question: "Does YouTube actually help podcast growth?",
      answer:
        "Yes, and it is the single largest discovery surface available to most shows, because it is the only major platform with a recommendation engine that will actively push your episode to people who have never heard of you. Audio platforms mostly surface what people already search for. You do not need a filmed studio to benefit: full episodes uploaded as static artwork over the audio are still indexed and still recommended.",
    },
    {
      question: "How many downloads is good for a B2B podcast?",
      answer:
        "This is the wrong question for a business show, and asking it tends to produce bad decisions. If the show exists to build credibility with a specific group, then a few hundred of the right listeners can be worth more than several thousand of the wrong ones. The useful measures are whether the people you built it for are listening, whether they finish, and whether it changes the conversations you have. Reach is a proxy, and for a narrow audience it is a poor one.",
    },
    {
      question: "Should I fix my audio or my marketing first?",
      answer:
        "Work out which layer is actually constraining you before choosing. If people are pressing play and leaving in the first few minutes, that is retention and audio is part of it. If very few people are pressing play at all, better audio improves the experience of an audience that has not assembled yet. The new-versus-returning split in your analytics will usually settle the question in ten minutes.",
    },
    {
      question: "Is it worth restarting a podcast that never grew?",
      answer:
        "Rarely. A relaunch discards whatever back-catalogue discovery and search presence you have accumulated, and it does not address the layer that was constraining the original show, so the new one usually stalls in the same place. The exception is a genuine change of subject or audience, where the existing feed would actively confuse the people you now want. Otherwise it is almost always better to fix the bottleneck, rewrite the titles and descriptions, and keep the history.",
    },
  ],
  references: [
    {
      label:
        "AshMedia — B2B podcast statistics, including Podcast Index analysis of active versus dormant shows",
      url: "https://ashmedia.org/blog/b2b-podcast-statistics",
    },
    {
      label:
        "WhichPodcast — podfade survival research across 22,451 established shows",
      url: "https://whichpodcast.com/research/podfade",
    },
    {
      label: "Apple Podcasts — podcast requirements and metadata guidance",
      url: "https://podcasters.apple.com/support/823-podcast-requirements",
    },
  ],
};
