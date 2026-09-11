import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * Bridge post. Search Console shows 471 impressions on the Descript vs
 * Riverside comparison: people choosing an editing tool, which means people
 * currently editing their own show. That page answers their question and
 * then loses them. This one meets the question underneath it.
 *
 * The honest version of this post has to include the case for NOT
 * outsourcing, or it's a sales page wearing a blog post. The "keep doing it
 * yourself if" section is load-bearing.
 *
 * No invented figures. The editing-time ranges cited are the same ones
 * already sourced in founder-podcast-time-per-week (The Podcast Host, Rachel
 * Corbett), linked rather than restated as fact.
 */
export const whenToStopEditingYourOwnPodcast: BlogPost = {
  slug: "when-to-stop-editing-your-own-podcast",
  title: "When to stop editing your own podcast",
  seoTitle: "When to Stop Editing Your Own Podcast",
  metaDescription:
    "Comparing editing tools usually means you're still doing the edit yourself. Three signals it's time to stop, the real cost, and when you genuinely shouldn't hand it over.",
  publishedAt: "2026-09-11",
  updatedAt: "2026-09-11",
  category: "Podcast Strategy",
  author: jamesPearce,
  readingTime: "7 min read",
  coverImage: {
    src: "/images/blog/founder-time-hero.svg",
    alt: "A week of time blocks, most of them taken up by podcast production tasks, with only a small share left for the recording itself",
  },
  intro:
    "If you've been comparing Descript and Riverside, or Descript and anything, you're editing your own show. Nobody researches editing software for fun.\n\nThat's fine, and for a lot of shows it's the right call. But the tool comparison is usually standing in for a different question, which is whether you should still be the one doing this at all. The software is rarely the bottleneck. The bottleneck is that the edit is the only task in your week with no external deadline, and it's the one that slips.\n\nThis is how I'd think about it, including the cases where the honest answer is keep going.",
  keyTakeaways: [
    "Switching editing tools rarely fixes the problem. The problem is usually that the edit is nobody's job.",
    "Three signals: the edit takes more than three hours an episode, the schedule has slipped twice in a quarter, or you've stopped improving.",
    "Price your own time honestly. The comparison is your hourly rate against a per-episode fee, not the fee against zero.",
    "Keep editing yourself if you enjoy it, the show is a hobby, or you're under ten episodes in.",
    "The first thing to hand over is the edit. Show notes and clips come after, once the schedule holds.",
  ],
  sections: [
    {
      id: "the-tool-isnt-the-problem",
      heading: "The tool usually isn't the problem",
      body:
        "Every year there's a new piece of software that makes editing easier, and every year the same shows stall at episode eleven. That's not a coincidence. A better tool takes a three-hour edit down to two, which matters, but it doesn't change who has to sit down and do the two hours.\n\nWhat actually stops shows is that editing is elastic. It expands to fill a Sunday afternoon, then it gets pushed to Monday evening, then a launch lands at work and it doesn't happen at all. Recording has a guest waiting. Publishing has a date. Editing has neither, so it's the task that quietly absorbs every other pressure in your week.\n\nSo before choosing between Descript and Riverside, it's worth asking whether the choice you're actually making is between doing this yourself and not.",
    },
    {
      id: "three-signals",
      heading: "Three signals it's time to stop",
      body:
        "**The edit takes more than three hours an episode.** The published estimates put a basic edit of a one-hour recording at two hours and a produced one at three to five, and my experience matches that. If you're consistently past three, you're either doing production-level work (which is a job) or fighting your recordings (which is a fixable problem, and a producer will spot it in the first episode). Either way, the hours are the signal, and I've written up [where they actually go](/blog/founder-podcast-time-per-week).\n\n**The schedule has slipped twice in a quarter.** Once is life. Twice is a pattern, and patterns don't correct themselves because you've resolved to be more disciplined. If you're chasing yourself to hit a Thursday, the show has already started costing you something you can't get back, which is the audience's habit.\n\n**You've stopped getting better.** This is the quiet one. The first twenty episodes you edit, you improve fast, and it's satisfying. Then you plateau, because you're spending your editing time on the same problems (a quiet guest, a boomy room, a tangent at minute 40) rather than on craft. At that point you're not learning a skill, you're doing a chore with a skill you already have. That's when handing it over stops feeling like giving something up.",
    },
    {
      id: "the-real-cost",
      heading: "What it actually costs you",
      body:
        "The comparison most people make is a producer's per-episode fee against zero, because editing yourself doesn't send an invoice. That's the wrong sum.\n\nThe right one is your hourly value, times the hours the edit actually takes, times the number of episodes a year. Three hours an episode on a weekly show is 150 hours a year. If your time is worth anything like what a business pays for it, that number is larger than any production fee, before you count the episodes that didn't go out because the edit didn't happen.\n\nOur [editing cost calculator](/podcast-editing-cost-calculator) does that arithmetic with your own figures. It's deliberately unflattering. Most people who run it are surprised, and a few decide the honest answer is that editing themselves is still cheaper, which is a legitimate outcome and one I'd rather you reached with the numbers than without.",
    },
    {
      id: "keep-doing-it-yourself-if",
      heading: "Keep doing it yourself if",
      body:
        "This is the section a producer isn't supposed to write, so here it is.\n\n**You enjoy it.** Genuinely, not in the way you enjoy having done it. If the edit is the part of the week you look forward to, keep it. Plenty of good shows are made by people who love the cutting, and outsourcing a thing you love to save time is a bad trade.\n\n**The show is a hobby.** If it exists because you like making it and nobody's livelihood depends on it publishing on Thursday, then a slipped week costs nothing and a producer's fee is a real cost against no real problem.\n\n**You're under ten episodes in.** Early on, editing your own show teaches you things about how you talk that nothing else will. You'll hear your own filler words, your own habit of trailing off, the question you keep asking twice. Do at least a handful yourself before deciding you never want to again.\n\n**You can't yet say what you want.** A producer can match a spec. A producer can't invent your taste. If you don't yet know whether you want the conversational texture kept or a tighter cut, a few more episodes of doing it yourself will tell you, and it makes the eventual handover far better.",
    },
    {
      id: "what-to-hand-over-first",
      heading: "What to hand over first",
      body:
        "If the signals above are pointing at you, don't hand everything over at once. Sequence it.\n\n**The edit first.** It's the biggest block of hours, the most skill-dependent, and the one that's actually slipping. Handing over the edit alone is enough to make the schedule hold, and it tells you within two episodes whether you've found the right person, because you'll be able to hear it.\n\n**Then show notes and chapters.** They take longer than anyone expects and they're done badly on most shows. Once the edit is off your plate you'll notice these are the next thing eating your evening.\n\n**Then clips and publishing.** These are the most systematisable parts and the ones where a producer who already cut the episode has an unfair advantage, because they know which forty seconds actually landed.\n\nWhat you keep is the conversation, the guest list and the taste. Those are the show. Everything else is production, and production is the thing that was never really yours to begin with.",
    },
    {
      id: "if-youre-there",
      heading: "If you're there",
      body:
        "If you've read this far and recognised yourself in the three signals, the tool comparison you started with is probably not the decision you need to make.\n\nThe [services and rates](/services) are published, in pounds, with no form in the way. Editing on its own is where most people start, and it's priced so that the arithmetic in the calculator above comes out clearly one way or the other. If you'd rather talk it through, [say what the show is](/contact) and you'll get a straight answer, including \"keep doing it yourself\" if that's the right one.",
    },
  ],
  faqs: [
    {
      question: "Should I outsource my podcast editing?",
      answer:
        "If the edit takes more than three hours an episode, the schedule has slipped more than once this quarter, or you've stopped improving at it, probably yes. If you enjoy the editing, the show is a hobby with no deadline pressure, or you're fewer than ten episodes in, probably not yet. The honest test is whether the show is slipping because of the edit.",
    },
    {
      question: "How much time does editing a podcast take?",
      answer:
        "Published estimates put a basic edit of a one-hour recording at around two hours and a produced episode at three to five, before show notes, clips and publishing. If you're consistently well above that, you're either doing production-level work or fighting your recordings, and both are worth knowing.",
    },
    {
      question: "Will a better editing tool fix my podcast schedule?",
      answer:
        "Usually not. A better tool takes a three-hour edit to two, which helps, but the reason shows slip is that editing has no external deadline and absorbs every other pressure in the week. Changing who does it fixes that; changing the software rarely does.",
    },
    {
      question: "What should I outsource first on my podcast?",
      answer:
        "The edit. It's the largest block of hours, the most skill-dependent, and the task most likely to be the one slipping. Once the schedule holds, show notes and chapters are next, then clips and publishing. Keep the conversation, the guest list and the editorial taste.",
    },
    {
      question: "Is it cheaper to edit my own podcast?",
      answer:
        "Only if your time is worth less than a producer's per-episode fee divided by the hours the edit takes you. For most people running a business it isn't, once the hours are counted honestly. The editing cost calculator on this site does that sum with your own figures and sometimes says keep doing it yourself.",
    },
  ],
};
