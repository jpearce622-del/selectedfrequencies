import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

/**
 * DRAFT — for James to rewrite in his own voice.
 *
 * The structure and the research are finished. The sentences are not
 * precious: rewrite freely, and particularly the opening, which is the part
 * that has to sound like a person who has actually picked up an abandoned
 * show rather than someone describing the idea of one.
 *
 * Written to the brief's tone rules and checked against them: first person,
 * UK English, contractions throughout, NO em dashes anywhere, no rhetorical
 * questions opening a section, short paragraphs.
 *
 * On statistics: the only figures here are the ones already verified against
 * public feeds for this site (episode 65, June 2021, 189 episodes). Nothing
 * about industry-wide editor churn is claimed, because no source for it
 * exists that survives being clicked.
 *
 * The commercial job of this post is the asset checklist. Someone who has
 * just realised they don't control their own RSS feed is the most motivated
 * reader this site will ever get, and the honest advice (get the feed first,
 * decide about the person second) is also the advice that makes them trust
 * whoever gave it.
 */
export const podcastEditorGoneQuiet: BlogPost = {
  slug: "podcast-editor-gone-quiet",
  title: "What to do when your podcast editor goes quiet",
  seoTitle: "Podcast Editor Gone Quiet?",
  metaDescription:
    "Your editor hasn't replied since Monday and the episode is due. What to ship this week, how to get your files and feed back, and what to ask the next one.",
  publishedAt: "2026-08-26",
  updatedAt: "2026-08-26",
  category: "Podcast Strategy",
  author: jamesPearce,
  readingTime: "6 min read",
  coverImage: {
    src: "/images/blog/growth-layers-hero.svg",
    alt: "Five stacked layers of podcast production narrowing downwards, illustrating where a show stalls when the producer stops replying",
  },
  intro:
    "It's Wednesday. The episode goes out Thursday. You messaged your editor on Monday, again yesterday, and there's nothing back.\n\nMaybe they're ill. Maybe they've taken on too much work and yours is the client they've quietly decided to drop. You can't tell from here, and it doesn't change what you have to do in the next twenty-four hours.\n\nSo this is in order of urgency. Ship something first, recover your files second, decide about the person third.",
  keyTakeaways: [
    "Ship something this week, even if it isn't the episode you planned.",
    "Get your RSS feed back before anything else. It's the only asset you genuinely cannot rebuild.",
    "Ask for project files, stems, artwork and logins in one written message, not a conversation.",
    "One missed reply is a bad week. Three is a pattern, and patterns don't fix themselves.",
    "When hiring the next one, ask how long their longest-running client has been with them, and ask to see that feed.",
  ],
  sections: [
    {
      id: "ship-something",
      heading: "First, ship something this week",
      body:
        "You have three options and they're all fine. Nobody outside your show will remember which one you picked.\n\n**Publish a rougher edit.** If you have the raw recording, you can top and tail it, cut the worst two minutes, and put it out. A slightly loose episode that arrives on time does less damage than a polished one that arrives a fortnight late. Your regular listeners have heard you clear your throat before.\n\n**Skip the week and say so.** Post a short note in your feed, or just a line on the platforms you use. \"No episode this week, back next Thursday.\" People are remarkably forgiving about a break they were told about, and remarkably unforgiving about silence. If you're going to skip, skipping loudly is the version that costs you least.\n\n**Republish something.** If you have a back catalogue, an older episode with a fresh introduction is a legitimate week. Shows do this deliberately in August.\n\nThe thing to avoid is the fourth option, which is doing nothing while you wait for a reply that might not come. That's how a one-week gap becomes a three-week gap, and three weeks is where a lot of shows quietly stop.",
    },
    {
      id: "get-your-assets-back",
      heading: "Get your things back, starting with the feed",
      body:
        "Most people worry about the project files. The project files matter least.\n\nYour RSS feed is the show. It's the address every listener's app is subscribed to, and it's the only thing on this list you genuinely cannot rebuild. If your editor set up your hosting account under their own email, they control it, and if they disappear you can lose the audience rather than just the episodes. That's the bit worth checking today, before you do anything else.\n\nSend one written message asking for all of it at once. Not a conversation, a list. It gives them something easy to action and it gives you something to point at later.\n\n**The list, roughly in order of how badly you'd miss it:**\n\n1. **Podcast hosting login.** Whoever holds this holds the feed. If the account is in their name, ask for the transfer, not the password.\n2. **The RSS feed URL itself**, plus confirmation of which host it points at.\n3. **Domain and any redirect** you use in front of the feed.\n4. **Raw recordings** for every episode, not just the recent ones.\n5. **Finished masters**, in whatever format they were published in.\n6. **Project files** from the editing software, with any templates or presets.\n7. **Intro and outro stems**, the music beds, and any licences that came with them.\n8. **Artwork**, the show cover and any episode templates, ideally the layered originals rather than flattened exports.\n9. **Show notes and transcripts** for anything not already published.\n10. **YouTube, Spotify and Apple logins** if they were set up on your behalf.\n\nIf you get silence on this too, escalate once in writing, then go to the platforms directly. Apple, Spotify and most hosting companies have processes for proving you own a show. They're slow and they exist.",
    },
    {
      id: "wait-or-move",
      heading: "Whether to wait or move on",
      body:
        "One missed week is a bad week. People get ill, families have emergencies, and a good editor who has been reliable for two years has earned the benefit of the doubt.\n\nWhat matters is whether it's happened before. If this is the third time this year that an episode has gone out late because you couldn't reach someone, you're not dealing with a bad week. You're dealing with how this arrangement works now, and it isn't going to correct itself because you had a difficult conversation about it.\n\nThe honest test is whether you're building your week around whether they reply. If you're chasing on a Monday to protect a Thursday, you're already doing the coordination job you paid someone else to do.\n\nMoving is less disruptive than most people expect. Your show doesn't stop while you switch. A competent producer can take a spec, match your existing sound closely enough that your listeners don't notice, and pick the schedule up from the next episode.",
    },
    {
      id: "what-to-ask-next",
      heading: "What to ask the next one",
      body:
        "Everyone's portfolio sounds good. A portfolio proves somebody made one episode sound nice once, and that isn't the thing that went wrong for you.\n\nSo ask a different question. **How long has your longest-running client been with you, and can I see the feed?**\n\nIt's a hard question to answer well and an easy one to check. A public feed shows the publication date of every episode, so a producer who says they've had a show for four years is handing you the means to verify it in about a minute. It also shows the gaps. A feed with an unbroken weekly run is a different kind of evidence from a portfolio clip.\n\nTwo follow-ups worth asking:\n\n**Have you ever taken over a show mid-run?** Picking up someone else's format, matching their sound, and doing it without the audience noticing is a specific skill, and it's the exact skill you need right now.\n\n**What happens if you're ill?** You want a straight answer rather than a reassuring one. A one-person operation that tells you honestly what its limits are is more reliable than an agency that implies it has infinite cover.\n\nAsk me the same questions, by the way. I took over [The Genetics Podcast](/work/genetics-podcast) at episode 65 in June 2021 and I'm still on it 189 episodes later, and the feed will confirm that without you having to take my word for it. There are more of those in [the case studies](/work), tagged where the show was already running when I picked it up.\n\nIf you're in the middle of this right now and you need next Thursday to happen, [get in touch](/contact). The first useful conversation is usually about the feed rather than about the edit.",
    },
  ],
  faqs: [
    {
      question: "My podcast editor has stopped replying. What should I do first?",
      answer:
        "Publish something this week before you do anything else, even if it's a rougher edit or a note saying you're skipping. Then check who controls your podcast hosting account, because that's the asset you cannot rebuild. Decisions about the working relationship come third, once the show is safe.",
    },
    {
      question: "Who owns my podcast RSS feed?",
      answer:
        "You should, but it depends on whose email the hosting account was set up under. If your editor created it in their own name they control the feed, which means they control the address every listener is subscribed to. Ask for the account to be transferred to you rather than for the password, and do it before any disagreement gets difficult.",
    },
    {
      question: "What files should I ask my podcast editor to hand over?",
      answer:
        "Hosting login and feed URL first, then raw recordings and finished masters for every episode, project files with any templates, intro and outro stems with their licences, artwork in layered originals where possible, unpublished show notes and transcripts, and any platform logins created on your behalf. Ask for all of it in one written message rather than piecemeal.",
    },
    {
      question: "Can I change podcast editor without my listeners noticing?",
      answer:
        "Usually yes. A producer who is given two or three recent episodes can match the loudness, the tonal balance, the intro treatment and the editing tightness closely enough that the switch isn't audible. Ask for a sample edit on one of your own episodes before committing, since that is the only way to check it properly.",
    },
    {
      question: "How do I know if a podcast producer is reliable before hiring them?",
      answer:
        "Ask how long their longest-running client has been with them and ask to see that show's feed. A public feed dates every episode, so it shows both the length of the relationship and whether there were gaps in it. That is verifiable in a way a portfolio clip or a testimonial is not.",
    },
    {
      question: "How long should I wait before replacing my podcast editor?",
      answer:
        "One missed week is a bad week and worth the benefit of the doubt, particularly from someone who has been reliable for a long time. A pattern is different. If you are chasing on a Monday to protect a Thursday, you have already taken back the coordination work you were paying to hand over, and that rarely corrects itself.",
    },
  ],
};
