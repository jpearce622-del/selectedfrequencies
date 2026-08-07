// The worked example rendered by ShowNotesAnatomy.
//
// The show, guest, and episode are FICTIONAL — deliberately so. Using a real
// client's episode here would put words in their mouth and imply they endorsed
// the commentary. The page says as much in a visible caption.
//
// Annotation text is the SEO substance of the article, so it lives here as
// plain data and is rendered into the server HTML (never injected on
// interaction).

export interface AnnotatedSection {
  id: string;
  /** Short label for the section, e.g. "Episode title" */
  label: string;
  /** The example content itself. Lines render as separate rows. */
  lines: string[];
  /** Rendered as a bulleted list rather than plain lines */
  list?: boolean;
  /** Monospace treatment — used for the schema block */
  mono?: boolean;
  /** Why it's there and what job it does */
  annotation: string;
}

export const showNotesSections: AnnotatedSection[] = [
  {
    id: "title",
    label: "Episode title",
    lines: ["How to Actually Value Bitcoin — with Dr Elena Marsh | Ep. 84"],
    annotation:
      "The single biggest lever you control. Lead with the searchable topic, then the guest, then the episode number — never the other way round. “Ep. 84 — Chatting with Elena” is invisible to someone searching for the problem you solve. The number still earns its place; it just doesn't go first, because nobody searches for it.",
  },
  {
    id: "hook",
    label: "The first two lines (the hook)",
    lines: [
      "Most Bitcoin valuation models are borrowed from equities — and that's exactly why they break. Dr Elena Marsh explains what a monetary asset is actually worth, and how to think about price without pretending it's a stock.",
    ],
    annotation:
      "Apple, Spotify, and Google all truncate descriptions after roughly two lines. Everything that matters — your target phrase and the reason to press play — has to survive that cut. Write these two sentences for a human deciding in three seconds, and make sure the phrase you want to rank for appears naturally inside them.",
  },
  {
    id: "summary",
    label: "Episode summary",
    lines: [
      "In this episode we get into why traditional discounted cash flow models can't be applied to an asset with no cash flows, what monetary premium actually means, and the three frameworks Elena uses instead. We also cover the most common mistake retail investors make when they try to time the four-year cycle, and why institutional allocators are increasingly treating Bitcoin as a separate asset class rather than a tech proxy.",
    ],
    annotation:
      "This is the paragraph that answer engines quote. Write it answer-first and factual, not teasing — “we discuss some fascinating ideas” gives an AI nothing to cite. Name the specific concepts covered. This is also where long-tail search terms live naturally: someone searching “can you use DCF for Bitcoin” should find their exact question reflected here.",
  },
  {
    id: "learn",
    label: "“In this episode you'll learn”",
    list: true,
    lines: [
      "Why discounted cash flow analysis fails for non-yielding assets",
      "What “monetary premium” means, in plain English",
      "Three valuation frameworks that work better than DCF",
      "The most common mistake in four-year cycle timing",
      "How institutional allocators categorise Bitcoin in 2026",
    ],
    annotation:
      "Scannable bullets do two jobs. Humans skim them to decide whether to listen. Search engines and AI answer engines parse them as a structured list of topics — which is exactly the format that gets pulled into “People also ask” boxes and AI summaries. Phrase each one close to how someone would actually search it.",
  },
  {
    id: "chapters",
    label: "Chapter timestamps",
    lines: [
      "00:00 — Intro",
      "02:14 — Why DCF doesn't apply to Bitcoin",
      "09:41 — Monetary premium explained",
      "18:07 — Three frameworks that work better",
      "27:33 — The four-year cycle timing mistake",
      "36:52 — How institutions actually categorise Bitcoin",
      "44:10 — What Elena would tell a first-time allocator",
    ],
    annotation:
      "Chapters improve completion rates — listeners who can navigate stay longer — and YouTube reads them directly to build its chapter bar. Each label is also a miniature keyword-rich heading, so a well-titled chapter can surface for a specific query on its own. Write them as descriptive phrases, never “Part 2” or “More discussion.”",
  },
  {
    id: "guest",
    label: "Guest bio and links",
    lines: [
      "Dr Elena Marsh is a monetary economist and former central bank analyst. She writes the Hard Money Letter and lectures on monetary theory.",
      "→ Website · X/Twitter · Her book, The Price of Scarcity",
    ],
    annotation:
      "Two reasons this matters. First, linking out to credible sources is a trust signal — pages that cite real people and real work read as more authoritative to both readers and search engines. Second, and more practically: guests share episodes that feature them properly. A proper bio with working links dramatically increases the chance your guest posts it, which is how you earn backlinks without asking.",
  },
  {
    id: "resources",
    label: "Resources mentioned",
    list: true,
    lines: [
      "The Bitcoin Standard — Saifedean Ammous",
      "BIS Working Paper 1049 on monetary premia",
      "Elena's 2025 lecture series on non-yielding assets",
    ],
    annotation:
      "Genuinely useful to listeners, and it makes your page the most complete resource for that conversation — which is what earns links from other sites. It also gives crawlers additional context about your subject matter. Link out generously; hoarding link equity is a myth that costs you credibility.",
  },
  {
    id: "quote",
    label: "Pull quote",
    lines: [
      "“You can't discount cash flows that don't exist. The moment you accept that, you stop asking the wrong question.” — Dr Elena Marsh, 21:04",
    ],
    annotation:
      "A ready-made social asset sitting inside your show notes. Timestamped so you or your editor can cut the clip in seconds, and quotable enough that other writers can lift it with attribution — which usually comes with a link. One good quote per episode is enough.",
  },
  {
    id: "transcript",
    label: "Full transcript",
    lines: ["[Full episode transcript, published as readable text on this page]"],
    annotation:
      "The highest-leverage step most shows skip. A single episode transcript adds five to ten thousand words of on-topic, indexable text, letting the page rank for dozens of specific questions you'd never target manually. Publish it as real text on the page — not inside a player, not as a PDF, not behind a tab that loads on click. If a crawler can't read it, it may as well not exist. It also makes your show accessible to deaf and hard-of-hearing listeners, which matters on its own terms.",
  },
  {
    id: "related",
    label: "Related episodes",
    lines: [
      "If you found this useful, try Ep. 71 — Monetary Premium and the Gold Comparison, and Ep. 62 — What Institutional Allocation Actually Looks Like.",
    ],
    annotation:
      "Internal links help search engines understand how your catalogue fits together, and they keep listeners moving from one episode to the next instead of leaving. It's the simplest habit on this list and the one almost every show ignores.",
  },
  {
    id: "subscribe",
    label: "Subscribe and follow",
    lines: [
      "Listen on Apple Podcasts · Spotify · YouTube — and if this was useful, a rating genuinely helps new listeners find the show.",
    ],
    annotation:
      "Every page needs an action. Keep it to one clear ask rather than a wall of platform buttons — and put it at the end, where someone who's read this far is most likely to act.",
  },
  {
    id: "schema",
    label: "Structured data (behind the scenes)",
    mono: true,
    lines: [
      '<script type="application/ld+json">',
      '  { "@type": "PodcastEpisode", ... }',
      "</script>",
    ],
    annotation:
      "Invisible to readers, meaningful to machines. PodcastEpisode schema spells out the episode name, description, show, publication date, and audio file in a format search engines read directly. It won't lift your ranking by itself, but it helps engines understand and present your page — which improves how often people click.",
  },
];
