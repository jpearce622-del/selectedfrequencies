import type { BlogPost } from "@/types/blog";
import { jamesPearce } from "@/content/authors";

// Moved from the standalone /best-bitcoin-podcasts page into the blog and
// rewritten in James's voice. The old URL 301s to this one.
//
// The conflict of interest is declared in the opening rather than buried:
// James produces two of the shows listed. Hiding that in a recommendation
// piece would be the dishonest choice, and declaring it costs nothing.
export const bestBitcoinPodcasts: BlogPost = {
  slug: "best-bitcoin-podcasts",
  title: "The Bitcoin Podcasts Actually Worth Your Time in 2026",
  seoTitle: "Best Bitcoin Podcasts 2026",
  metaDescription:
    "Sixteen Bitcoin and crypto podcasts worth following in 2026, sorted by what you're actually after — from a producer who works on two of them.",
  publishedAt: "2026-08-05",
  category: "Bitcoin",
  author: jamesPearce,
  readingTime: "9 min read",
  coverImage: {
    src: "/images/blog/bitcoin-hero.svg",
    alt: "A Bitcoin logo beside an audio waveform on a deep navy background",
  },
  intro:
    "Declaring the obvious first: I produce two of the shows on this list. The Bitcoin Collective and Bitcoin and the Long Game are clients, and I'm not going to pretend otherwise halfway down the page. Discount those two entries as heavily as you like — the other fourteen I have no stake in whatsoever.\n\nWhat I do have is an unusual vantage point. I spend most weeks inside Bitcoin and finance shows, listening to hours of them at a level of attention nobody sane applies to a podcast. You notice things that way. Which hosts actually prepare. Which ones are running the same three questions past every guest. Which shows have quietly stopped trying.\n\nSo this isn't a scrape of the charts. It's what I'd tell someone who asked me at a conference.",
  keyTakeaways: [
    "Pick by what you're after — technical depth, macro, daily news or narrative — not by download rank.",
    "Two of the sixteen are shows I produce. Both are flagged.",
    "The Bitcoin-first shows and the crypto-wide shows are different products; mixing them up is why people bounce off recommendations.",
    "Consistency beats star power. A show that's published weekly for four years knows what it is.",
  ],
  sections: [
    {
      id: "start-here",
      heading: "If you're new and want one show",
      body: "Start with **[The Bitcoin Collective](/work/bitcoin-collective)**, hosted by Jordan Walker. Weekly, UK-based, conversations with founders and business owners, and — the thing that makes it work — the jargon gets left at the door. Over 200 episodes without a gap since 2021 and a 4.8 rating on Apple.\n\nThat's one of mine, so weigh it accordingly. My reason for putting it first is narrower than \"it's good\": it's the show I send people to when they've asked what Bitcoin actually is and every other answer has made them feel stupid. That's a specific job and very few shows do it.\n\nIf you want the same accessibility without the UK business framing, **Coin Stories** with Natalie Brunell is the closest thing. Journalistic, mainstream in tone, decent guests. It's the one that works on people who don't yet care.\n\nThe show I'd steer a beginner away from — and I realise this is heresy — is anything technical, however highly recommended. Starting with Lightning implementation details is how people conclude Bitcoin isn't for them. Come back to that in six months when you've got a reason to care.\n\n[Listen: [Spotify](https://open.spotify.com/show/06sBiOznJDxuhafDmkE9VK) · [Apple](https://podcasts.apple.com/us/podcast/the-bitcoin-collective/id1561573613) · [episodes](https://bitcoincollective.co/bitcoin-podcast-episodes/)]",
    },
    {
      id: "technical-and-economic",
      heading: "For the technically serious",
      body: "**Stephan Livera Podcast** is the one I'd defend hardest. Austrian economics, self-custody, Lightning, actual protocol detail. Livera prepares properly, which sounds like faint praise until you've listened to enough interview shows to realise how rare it is. He also lets guests finish, and that patience is why the technical episodes hold up years later.\n\n**The Bitcoin Standard Podcast** — Saifedean Ammous, and you already know whether you want this. The economics are the point. He is combative and unusually willing to be unpopular, which makes for better listening than the consensus-seeking alternative, whatever you make of the positions.\n\n**Citadel Dispatch** with Matt Odell covers privacy, self-custody and freedom tech, live. Rougher round the edges than the others here. Deliberately so, and it's part of the appeal.\n\n**Bitcoin Audible** does something nobody else bothers with: Guy Swann reads the important essays aloud and then talks about them. Sounds like a gimmick. It isn't. A significant chunk of Bitcoin's actual thinking lives in long blog posts nobody gets round to reading, and this is the format that fixes that.\n\n**TFTC** with Marty Bent sits between news and freedom tech, heavy on builders. Good if you want to know what's being made rather than what's being priced.\n\nListen: Livera on [Spotify](https://open.spotify.com/show/6vGWnyOWqiIkYqbFPfg7O3) and [Apple](https://podcasts.apple.com/us/podcast/stephan-livera-podcast/id1415720320); Bitcoin Standard on [Apple](https://podcasts.apple.com/us/podcast/the-bitcoin-standard-podcast/id1524657433); Citadel Dispatch on [Apple](https://podcasts.apple.com/us/podcast/citadel-dispatch/id1588151076); Bitcoin Audible on [Apple](https://podcasts.apple.com/us/podcast/bitcoin-audible/id1359544516); TFTC on [Apple](https://podcasts.apple.com/us/podcast/tftc-a-bitcoin-podcast/id1420551516).",
    },
    {
      id: "macro",
      heading: "For macro and money",
      body: "**The Bitcoin Layer** with Nik Bhatia is the most rigorous of these. Global macro, the plumbing of the monetary system, Bitcoin's place inside it. If you find most Bitcoin macro commentary a bit hand-wavy, this is the corrective.\n\n**Bitcoin Fundamentals** — Preston Pysh, part of We Study Billionaires. Investing lens rather than ideological one. Worth it for the guests he can get.\n\n**The Breakdown** with Nathaniel Whittemore is daily, which is either exactly what you want or precisely what you don't. He's fast, well-briefed, and genuinely good at explaining why a piece of news matters rather than simply that it happened. Daily shows usually degrade into filler within a year. This one hasn't, and I'd like to know how.\n\n**Bitcoin and the Long Game** — Peter Lane and George Boyd, and my second client on this list, so the same caveat applies. Sport, money and life all rewarding patience. Full audio and video weekly. I'd put it here rather than in the macro tier proper because it's more reflective than analytical, which is the point of it.\n\nListen: The Bitcoin Layer on [Apple](https://podcasts.apple.com/us/podcast/the-bitcoin-layer/id1641341356); Bitcoin Fundamentals on [Apple](https://podcasts.apple.com/us/podcast/we-study-billionaires-the-investors-podcast-network/id928933489); The Breakdown on [Apple](https://podcasts.apple.com/us/podcast/the-breakdown/id1483108718); [Bitcoin and the Long Game](/work/bitcoin-and-the-long-game).",
    },
    {
      id: "people-and-culture",
      heading: "For the human side",
      body: "**Once Bitten** with Daniel Prince is about freedom, family and what the rabbit hole does to a life. Less chart, more person. It's the show I'd recommend to someone whose partner has gone very deep and who wants to understand why.\n\n**The Pomp Podcast** covers Bitcoin, finance and entrepreneurship with a rotating cast. Pompliano's reach gets him guests other shows can't, and the business-building episodes are stronger than the price ones.\n\nListen: Once Bitten on [Apple](https://podcasts.apple.com/us/podcast/once-bitten/id1461732340); Pomp on [Apple](https://podcasts.apple.com/us/podcast/the-pomp-podcast/id1434060078).",
    },
    {
      id: "crypto-wide",
      heading: "Wider crypto, if that's what you're after",
      body: "These aren't Bitcoin shows and I've kept them separate on purpose. Handing someone who asked about Bitcoin a DeFi podcast is how you lose them.\n\n**Unchained** — Laura Shin, properly journalistic, does actual reporting rather than vibes. **Bankless** is one of the biggest shows in the space, Ethereum-leaning, strong on DeFi and markets. **The Coin Bureau Podcast** is the accessible-education end, good market analysis, broad coverage.\n\nAll three are well made. None of them are what you want if your question was specifically about sound money.\n\nListen: [Unchained](https://podcasts.apple.com/us/podcast/unchained/id1123922160) · [Bankless](https://podcasts.apple.com/us/podcast/bankless/id1499409058) · [Coin Bureau](https://podcasts.apple.com/us/podcast/the-coin-bureau-podcast-crypto-without-the-hype/id1631354691)",
    },
    {
      id: "what-separates-them",
      heading: "What separates the ones that last",
      body: "Having sat inside this genre for years, the pattern is duller than you'd hope.\n\nIt isn't production budget. Some of the most valuable shows on this list sound like two people on a call, because that's what they are. It isn't guest quality either, though it helps.\n\nIt's showing up. Bitcoin runs in violent cycles, and every bull market produces a wave of shows that vanish within eighteen months when attention moves on. The ones people still recommend are the ones that kept publishing through the part where nobody was listening. Audiences notice that, and they're right to — it's the only real evidence you have that a show is about the subject rather than the moment.\n\nThe second thing, and this is where I'm speaking as an editor rather than a listener: the durable shows almost all translate. They explain the term the first time it appears. They ask the naive question on the listener's behalf instead of nodding along. A host who is willing to look slightly less clever in exchange for their audience following the argument will outlast one who isn't, every time.\n\n[MY EXAMPLE HERE — a moment from an edit where a host stopped and explained something, or where I could hear an episode losing a listener. Useful detail: what specifically made the difference in the file.]\n\nIf you're running a Bitcoin show yourself and want it produced properly, [that's what I do](/contact). I've written separately on [why podcasts work so well for Bitcoin specifically](/blog/why-bitcoin-podcasts-work).",
    },
  ],
  references: [
    {
      label: "The Bitcoin Collective — episodes and show",
      url: "https://bitcoincollective.co/bitcoin-podcast-episodes/",
    },
    {
      label: "Stephan Livera Podcast",
      url: "https://podcasts.apple.com/us/podcast/stephan-livera-podcast/id1415720320",
    },
    {
      label: "The Bitcoin Layer",
      url: "https://podcasts.apple.com/us/podcast/the-bitcoin-layer/id1641341356",
    },
    {
      label: "Bitcoin Audible",
      url: "https://podcasts.apple.com/us/podcast/bitcoin-audible/id1359544516",
    },
    {
      label: "Unchained — Laura Shin",
      url: "https://podcasts.apple.com/us/podcast/unchained/id1123922160",
    },
  ],
};
