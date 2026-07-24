import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

export const podcastSeoGuide: BlogPost = {
  slug: "podcast-seo-guide",
  title: "Podcast SEO: How to Get Your Show Found in Search and AI Answers",
  metaDescription:
    "Podcasts are invisible to search engines by default. Here's how to make your show discoverable — episode titles, transcripts, per-episode pages, schema, and AI answers.",
  publishedAt: "2026-06-18",
  category: "SEO",
  author: shaunaMartin,
  readingTime: "11 min read",
  coverImage: {
    src: "/images/blog/seo-hero.svg",
    alt: "An abstract search magnifier examining an audio waveform, over a faux search bar",
  },
  intro:
    "Here's an uncomfortable truth about podcasting: your actual product is invisible to the machines that drive discovery. Search engines can't listen. To Google, an hour of brilliant conversation is an opaque audio file — unless you give it something to read. That's why so many genuinely great shows get no search traffic at all: not because the content is weak, but because there's nothing on the page for a crawler to understand.\n\nPodcast SEO is the work of translating your audio into text and structure that search engines — and, increasingly, AI answer engines — can actually use. Done well, it turns your back catalogue into a library that earns new listeners every month, long after release day. Here's how.",
  keyTakeaways: [
    "Search engines can't hear audio — your show notes, titles, and transcripts are the only things they can read.",
    "Episode titles are your single biggest lever: write for what people search, not clever in-jokes.",
    "A full transcript adds thousands of indexable words and is the highest-leverage SEO step most shows skip.",
    "Give every episode its own page on a site you own, with PodcastEpisode structured data.",
    "AI answer engines cite sources with clear, well-structured, factual text — the same work that helps traditional SEO.",
  ],
  sections: [
    {
      id: "the-invisibility-problem",
      heading: "Why podcasts are invisible to search",
      body:
        "A search engine works by reading text and understanding structure. It crawls a page, parses the words, weighs the headings and links, and decides what the page is about and who it should rank for. An audio file offers none of that. There are no words to read, no headings to weigh — just a binary blob the crawler skips straight past.\n\nThis is the core reason a podcast can have loyal listeners and near-zero search visibility at the same time. The fix isn't to make the audio “more SEO-friendly” — that's impossible. It's to surround every episode with text and structure that represent the audio: titles, descriptions, transcripts, and a real web page for each episode. Get that right and you're no longer competing as an invisible audio file; you're competing as a rich, readable page like any other search result.",
    },
    {
      id: "show-notes-are-the-page",
      heading: "Your show notes are the page",
      image: {
        src: "/images/blog/seo-shownotes.svg",
        alt: "A diagram of SEO-friendly show notes with each element labelled: keyword-led title, description with target phrase, chapters and timestamps, guest and resource links, and a full transcript",
        caption: "Audio is invisible to crawlers — your show notes are the page they actually read.",
      },
      body:
        "Everything a search engine knows about your episode, it learns from your show notes. So treat them as a real web page, not an afterthought pasted in five minutes before publishing.\n\nStrong show notes have a clear structure: a keyword-led title, a description whose first two lines carry your target phrase, chapters with timestamps, links to the guest and any resources mentioned, and — the big one — a full transcript. Each element does a job. The title and description tell the crawler what the page is about; the chapters give it structure it can surface directly in results; the links pass and attract authority; the transcript provides the depth of text that lets you rank for specific questions.\n\nThin, one-line show notes are the norm, which is exactly why doing this properly is such an easy way to stand out.",
    },
    {
      id: "episode-titles",
      heading: "Episode titles: your biggest lever",
      body:
        "If you change one thing, change your titles. The episode title is the strongest on-page signal you control, and most shows waste it on in-jokes and guest names that no one is searching for.\n\nThe fix is to lead with the searchable topic, then add the personality. “Ep. 47 — Chatting with Sarah” is invisible. “How to Price a SaaS Product — with Sarah Chen” tells both a human and a crawler exactly what the episode delivers, and matches the words a potential listener actually types. The guest's name still earns its place; it just isn't doing the heavy lifting.\n\nWrite titles for the person who doesn't know your show yet — the one searching for the problem your episode solves. Your existing fans will find the episode regardless; the title's job is to reach everyone else. If you're not sure what people search for, tools like Google's autocomplete and “People also ask” are a free, endless source of the exact phrasing to use.",
    },
    {
      id: "transcripts",
      heading: "Transcripts: thousands of indexable words",
      body:
        "A single episode transcript can add five to ten thousand words of relevant, on-topic text to your site — the kind of depth that lets a page rank for dozens of specific long-tail searches you'd never think to target manually. It's the highest-leverage SEO step in podcasting, and the one most shows skip because it feels like a chore.\n\nIt no longer is. Modern transcription is fast, cheap, and accurate enough that a light human clean-up pass is all it takes to get a publishable transcript. Publish it on the episode's own page — not locked inside a player — so crawlers can read every word. As a bonus, transcripts make your show accessible to deaf and hard-of-hearing audiences, which is both the right thing to do and increasingly an expectation.\n\nOne caution: publish transcripts as real text on the page, not as an image or a PDF buried behind a link. If a crawler can't read it as text, it may as well not exist.",
    },
    {
      id: "pages-and-schema",
      heading: "A page per episode, marked up with schema",
      body:
        "Discoverability compounds when every episode has its own page on a domain **you** own — not just a listing inside Apple or Spotify, where you're a tenant with no SEO equity. Your own site is the asset that accrues authority over time.\n\nOn each of those pages, add **structured data**: machine-readable markup, in the JSON-LD format Google recommends, that spells out exactly what the page is. Schema.org defines a `PodcastEpisode` type for precisely this, letting you declare the episode name, its description, the show it belongs to, the publication date, and the audio file. This is the same technique that produces the rich results — the extra detail, images, and formatting — you see decorating top search listings.\n\nStructured data doesn't directly boost your ranking, but it helps search engines understand and present your content, which improves how often people click through. For a podcast trying to escape the invisibility problem, every bit of extra clarity you can hand the crawler is worth having.",
    },
    {
      id: "ai-answers",
      heading: "Getting found in AI answers",
      body:
        "Search is no longer just ten blue links. Google's AI Overviews, ChatGPT, and other answer engines increasingly respond to a question directly and cite a handful of sources — and being one of those cited sources is the new front row of discovery.\n\nThe encouraging part: the work that earns AI citations overlaps almost entirely with good traditional SEO. Answer engines favour content that is **clearly structured, factual, and answer-first** — pages that state a direct answer up front under a descriptive heading, back it with specifics, and demonstrate genuine expertise. A well-structured episode page with a keyword-led title, a clear summary, chapters, and a full transcript is exactly the kind of source these systems can parse and quote.\n\nSo you don't need a separate “AI strategy.” Write pages that answer real questions plainly, structure them well, and publish them on a fast, crawlable site. That serves human readers, traditional search, and AI answers at the same time — three audiences, one piece of work.",
    },
    {
      id: "common-mistakes",
      heading: "Common podcast SEO mistakes",
      body:
        "A few recurring errors quietly cap the search visibility of otherwise good shows. If you fix nothing else, fix these.\n\n**Publishing only to the platforms.** Relying entirely on Apple and Spotify listings means you're building someone else's SEO, not your own. Without pages on a domain you control, you have nothing to rank.\n\n**Episode-number titles.** “Episode 52” tells a crawler — and a human scrolling search results — absolutely nothing. Every title is a chance to match a real query, and a bare number wastes it.\n\n**Transcripts locked in players or PDFs.** If the words aren't readable as plain text on the page, search engines can't index them. A transcript trapped inside an embedded player might as well not exist.\n\n**Thin, identical show notes.** One recycled line per episode gives crawlers nothing to distinguish or rank. Depth and specificity are what win long-tail searches.\n\n**A slow, bloated site.** Page speed and mobile usability are ranking factors, and a sluggish site buries good content. If your episode pages take five seconds to load, that's an SEO problem before a single word is read.\n\n**Ignoring internal links.** Linking related episodes and articles to each other helps search engines understand your site's structure and keeps readers moving through it — a simple habit most shows skip entirely.",
    },
    {
      id: "checklist",
      heading: "A per-episode SEO checklist",
      body:
        "Turn all of the above into a routine you run for every episode:\n\n- **Title** leads with the searchable topic, then the guest or hook.\n- **Description** puts the target phrase in the first two lines, written for a human.\n- **Its own page** on a site you own — not just the platform listings.\n- **Full transcript** published as real, readable text on that page.\n- **Chapters and timestamps** for structure crawlers and listeners can use.\n- **Links** to the guest and any resources mentioned.\n- **`PodcastEpisode` structured data** in JSON-LD on the page.\n- **An answer-first summary** near the top, so both readers and AI engines get the point immediately.\n\nNone of these steps is difficult on its own. The advantage comes from doing them consistently, episode after episode, until your catalogue becomes a genuine search asset. If you'd rather that happen without adding a research-and-publishing job to your week, it's part of the end-to-end production we run for the shows we work with — and a good companion to our [guide to repurposing each episode](/blog/repurpose-podcast-content) into weeks of content.",
    },
  ],
  references: [
    {
      label: "Google Search Central — structured data and rich results",
      url: "https://developers.google.com/search/docs/appearance/structured-data",
    },
    {
      label: "schema.org — PodcastEpisode type reference",
      url: "https://schema.org/PodcastEpisode",
    },
    {
      label: "Google Search Central — creating helpful, reliable content",
      url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    },
    {
      label: "Podnews — podcasting, platforms, and discovery news",
      url: "https://podnews.net/",
    },
  ],
};
