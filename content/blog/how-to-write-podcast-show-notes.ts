import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

export const howToWritePodcastShowNotes: BlogPost = {
  slug: "how-to-write-podcast-show-notes",
  title: "How to Write Podcast Show Notes That Actually Get Found",
  seoTitle: "How to Write Podcast Show Notes",
  metaDescription:
    "An annotated, interactive breakdown of great podcast show notes — every element explained, and why each one matters for search, AI answers, and listeners.",
  publishedAt: "2026-07-28",
  category: "SEO",
  author: shaunaMartin,
  readingTime: "10 min read",
  coverImage: {
    src: "/images/blog/show-notes-hero.svg",
    alt: "A show notes document with several sections highlighted and annotation callouts explaining each one",
  },
  intro:
    "Show notes are usually written in the last five minutes before an episode goes out. You've done the hard part — booked the guest, had the conversation, sat through the edit — and the description box is the final chore standing between you and hitting publish. So it gets a sentence, a couple of links, and a shrug.\n\nWhich is a shame, because your show notes are the only part of your episode a search engine can actually read. The audio is an opaque file. The conversation, however good, is invisible. Everything a crawler or an AI answer engine will ever know about that hour comes from the text you wrap around it — and five rushed minutes is what most shows give it.\n\nBelow is a complete worked example, annotated element by element. Hover or tap any part of it to see what that piece is doing and why it's there. If you want the wider strategy this sits inside, our [podcast SEO guide](/blog/podcast-seo-guide) covers the whole picture; this piece is the close-up on the single page element that does the most work.",
  keyTakeaways: [
    "Show notes are the only part of an episode a search engine can read — the audio itself is invisible.",
    "Lead the title with the searchable topic, not the episode number or the guest's name.",
    "The first two lines survive truncation on every platform, so put the hook and the key phrase there.",
    "Write the summary answer-first and factual — teasing copy gives AI answer engines nothing to quote.",
    "A full transcript published as real text is the highest-leverage step most shows skip.",
  ],
  sections: [
    {
      id: "annotated-example",
      heading: "The anatomy of a great set of show notes",
      body:
        "Here's what a complete set looks like for a single episode. Every element below earns its place — and the annotation on each one explains exactly what job it's doing, for the reader and for the machines deciding whether to surface your show.",
      interactive: "show-notes-anatomy",
    },
    {
      id: "order-matters",
      heading: "The order matters more than the length",
      body:
        "Almost every platform truncates. Apple and Spotify cut the description after roughly two lines in most views. Search results clip at around 160 characters. And readers, who are more ruthless than either, decide in about three seconds.\n\nSo the sequence of information matters far more than the word count. Front-load everything that has to survive a cut: the topic, the specific promise, the phrase you want to be found for. Whatever sits below the fold of a truncated description is a bonus, not a foundation — write it as though the first two lines are all anyone will ever see, because for a large share of your audience that's exactly true.\n\nThe same logic applies inside the episode title. \"Ep. 84 — Chatting with Elena\" spends its most valuable characters on information nobody searches for. Move the topic to the front and the number to the back, and the same episode becomes findable without losing anything.",
    },
    {
      id: "what-goes-wrong",
      heading: "What most show notes get wrong",
      body:
        "The failures are remarkably consistent across shows, and all five are quick to fix.\n\n**The same one-liner, every episode.** A recycled boilerplate description tells a search engine that every one of your episodes is about the same thing — which means none of them rank for anything specific. Each episode is a separate page competing for separate searches; give it its own words.\n\n**The topic buried behind the episode number.** Leading with \"Ep. 112\" is leading with the one piece of information that has no search volume at all.\n\n**Transcripts locked inside a player or a PDF.** A transcript only counts if it's real text on the page. Inside an embedded player, behind a tab that loads on click, or attached as a PDF, it's invisible to the crawler — you did the work and got none of the benefit.\n\n**No internal links.** Most shows never link one episode to another, which leaves both the listener and the search engine at a dead end.\n\n**Writing for the people who already listen.** In-jokes, first-name-only references, and \"as we discussed last week\" all assume the reader already knows your show. But show notes are read almost entirely by people who *haven't* found you yet. Write for the stranger; your regulars will cope.",
    },
    {
      id: "checklist",
      heading: "A repeatable per-episode checklist",
      body:
        "The twelve elements above, reduced to something you can run through every week without thinking about it:\n\n1. **Title** — searchable topic first, guest second, episode number last.\n2. **First two lines** — the hook and your target phrase, written to survive truncation.\n3. **Summary** — answer-first and specific, naming the actual concepts covered.\n4. **\"You'll learn\" bullets** — scannable, phrased the way people search.\n5. **Chapter timestamps** — descriptive labels, never \"Part 2.\"\n6. **Guest bio and links** — proper credit, working links, so they share it.\n7. **Resources mentioned** — link out generously.\n8. **Pull quote** — one, timestamped, ready to become a clip.\n9. **Full transcript** — real text, on the page.\n10. **Related episodes** — at least two internal links.\n11. **One clear call to action** — not a wall of platform buttons.\n12. **PodcastEpisode schema** — set it up once in your template, then forget it.\n\nThat pull quote in step eight is worth more than it looks: it's the seed of a week's worth of social content, which is the subject of our guide to [repurposing podcast content](/blog/repurpose-podcast-content).",
    },
    {
      id: "how-long",
      heading: "How long should show notes be?",
      body:
        "There's no magic number, and anyone quoting one is guessing. Length isn't a ranking factor in itself — Google doesn't reward 800 words over 400 because it counted them.\n\nWhat actually helps is *coverage*. A longer, more thorough set of notes tends to rank better because it naturally matches more specific searches: more of the concepts discussed get named, more of the questions a listener might type get reflected somewhere on the page. Depth wins as a side effect of being genuinely complete, not because the word count crossed a threshold.\n\nSo the honest answer is: enough to describe the episode properly — usually a couple of hundred words of summary and bullets — plus the full transcript. That combination is what turns one episode into a page that can answer dozens of different queries. Padding it out with filler to hit an imagined target does nothing except waste your evening.",
    },
    {
      id: "doing-it-weekly",
      heading: "The hard part is doing it every week",
      body:
        "None of the twelve elements above is difficult. Writing them properly for one episode is an enjoyable hour. Writing them properly for episode after episode, on top of booking guests, recording, and editing — that's the part that quietly eats a podcaster's week, and it's usually the first thing to get cut when the schedule tightens. If you've never put a number on that, our [editing cost calculator](/podcast-editing-cost-calculator) works out what those hours are actually costing you.\n\nFor the shows we produce, show notes, chapters, and transcripts are part of the job rather than an afterthought — alongside the edit itself, which is its own craft ([our audio quality guide](/blog/podcast-audio-quality-guide) covers that side). If handing it over sounds better than another Sunday night in the description box, [see what we do](/services) or [get a quote](/contact).",
    },
  ],
  faqs: [
    {
      question: "What should podcast show notes include?",
      answer:
        "At minimum: an episode title that leads with the searchable topic, a hook in the first two lines, an answer-first summary, scannable bullets of what listeners will learn, chapter timestamps, a guest bio with links, resources mentioned, a pull quote, a full transcript, links to related episodes, one clear call to action, and PodcastEpisode structured data.",
    },
    {
      question: "How long should podcast show notes be?",
      answer:
        "There's no magic number, and length isn't a ranking factor in itself. Aim for enough to describe the episode properly — usually a couple of hundred words of summary and bullets — plus a full transcript. Depth helps because it matches more specific searches, not because the word count crossed a threshold.",
    },
    {
      question: "Do show notes help podcast SEO?",
      answer:
        "Yes — they're the only part of an episode a search engine can read. The audio itself is an opaque file, so everything a crawler or AI answer engine knows about your episode comes from the text around it: the title, description, bullets, chapters, and transcript.",
    },
    {
      question: "Should I publish a full transcript?",
      answer:
        "Yes, and as real text on the page rather than inside a player, behind a tab that loads on click, or as a PDF. A single transcript adds five to ten thousand words of on-topic indexable text, letting the page rank for specific questions you'd never target manually. It also makes your show accessible to deaf and hard-of-hearing listeners.",
    },
  ],
};
