// content/bitcoin-podcasts.ts
//
// Spotify/Apple links were researched via web search + the iTunes Lookup API
// (July 2026) and each came from a real result — but VERIFY before promoting:
//   • "What Bitcoin Did" (id1317356120) now reports as "The Peter McCormack
//     Show" on Apple — the feed rebranded. Name + Spotify link left for you
//     to confirm; the cover art is the current (rebranded) feed art.
//   • "Bitcoin Fundamentals" lives inside the parent "We Study Billionaires"
//     feed, so its cover art is the parent show's art.
//   • Some shows had no clean Spotify *show* URL in results (only episodes),
//     so spotifyUrl is left empty rather than guessed — add the real ones.
//   • Cover art is each show's Apple Podcasts artwork (our two shows use our
//     own supplied artwork). Empty url fields simply hide that link.
//
// Shows render in array order; the two we produce appear first with a
// "Produced by Selected Frequencies" badge (linking to caseStudyUrl).

export type BitcoinPodcast = {
  name: string;
  host: string;
  description: string;
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  websiteUrl?: string;
  /** Square cover art under /public (Apple Podcasts art, or our own for our shows) */
  artwork?: string;
  producedByUs?: boolean;
  caseStudyUrl?: string; // only for our own shows
};

export const bitcoinPodcasts: BitcoinPodcast[] = [
  {
    name: "The Bitcoin Collective",
    host: "Jordan Walker",
    description:
      "A weekly UK Bitcoin show of real conversations with founders and business owners — jargon left at the door. 200+ episodes and a 4.8/5 Apple rating.",
    topics: ["Bitcoin", "UK", "Interviews"],
    spotifyUrl: "https://open.spotify.com/show/06sBiOznJDxuhafDmkE9VK",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-bitcoin-collective/id1561573613",
    websiteUrl: "https://bitcoincollective.co",
    artwork: "/images/clients/bitcoin-collective.jpeg",
    producedByUs: true,
    caseStudyUrl: "/work/bitcoin-collective",
  },
  {
    name: "Bitcoin and the Long Game",
    host: "Peter Lane & George Boyd",
    description:
      "A show built on a simple idea — sport, money, and life all reward patience. Full audio and video, every week.",
    topics: ["Bitcoin", "Macro", "Long-term thinking"],
    // No public Spotify/Apple listing found — add the real links.
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
    artwork: "/images/clients/bitcoin-and-the-long-game.jpeg",
    producedByUs: true,
    caseStudyUrl: "/work/bitcoin-and-the-long-game",
  },
  {
    name: "What Bitcoin Did",
    host: "Peter McCormack",
    description:
      "Long-form Bitcoin interviews on technology, macro, and policy — made accessible for newcomers and veterans alike.",
    topics: ["Bitcoin", "Macro", "Interviews"],
    // NOTE: Apple feed id1317356120 now reads "The Peter McCormack Show".
    spotifyUrl: "",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/what-bitcoin-did-with-peter-mccormack/id1317356120",
    websiteUrl: "",
    artwork: "/images/podcasts/what-bitcoin-did.jpg",
  },
  {
    name: "TFTC: A Bitcoin Podcast",
    host: "Marty Bent",
    description:
      "Bitcoin news, freedom tech, and interviews with the builders shaping the network.",
    topics: ["Bitcoin", "Freedom tech", "News"],
    spotifyUrl: "https://open.spotify.com/show/0Vd8E5vWnCfB4xucu87WNZ",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/tftc-a-bitcoin-podcast/id1292381204",
    websiteUrl: "https://www.tftc.io",
    artwork: "/images/podcasts/tftc.jpg",
  },
  {
    name: "Stephan Livera Podcast",
    host: "Stephan Livera",
    description:
      "Austrian economics, Bitcoin tech, self-custody, and Lightning — one of the most respected technical/economic shows in Bitcoin.",
    topics: ["Bitcoin", "Economics", "Technical"],
    spotifyUrl: "https://open.spotify.com/show/3mFUF9kSYpvrCGWLbskRr8",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/stephan-livera-podcast/id1415720320",
    websiteUrl: "",
    artwork: "/images/podcasts/stephan-livera.jpg",
  },
  {
    name: "Bitcoin Fundamentals (We Study Billionaires)",
    host: "Preston Pysh",
    description:
      "Bitcoin viewed through an investing and macroeconomics lens, from The Investor's Podcast Network.",
    topics: ["Bitcoin", "Investing", "Macro"],
    // Part of the parent "We Study Billionaires" feed (id928933489).
    spotifyUrl: "",
    appleUrl: "https://podcasts.apple.com/us/podcast/id928933489",
    websiteUrl: "https://www.theinvestorspodcast.com/bitcoin-fundamentals/",
    artwork: "/images/podcasts/bitcoin-fundamentals.jpg",
  },
  {
    name: "The Pomp Podcast",
    host: "Anthony Pompliano",
    description:
      "Bitcoin, finance, and entrepreneurship with a rotating cast of founders and investors.",
    topics: ["Bitcoin", "Finance", "Business"],
    spotifyUrl: "https://open.spotify.com/show/0bn8XQHWGxXULjhp1jRmOJ",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-pomp-podcast/id1434060078",
    websiteUrl: "",
    artwork: "/images/podcasts/pomp.jpg",
  },
  {
    name: "The Breakdown",
    host: "Nathaniel Whittemore (NLW)",
    description:
      "Daily Bitcoin and macro news analysis — sharp, timely, and widely followed.",
    topics: ["Bitcoin", "Macro", "Daily news"],
    spotifyUrl: "https://open.spotify.com/show/538vuul1PuorUDwgkC8JWF",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-breakdown/id1438693620",
    websiteUrl: "",
    artwork: "/images/podcasts/the-breakdown.jpg",
  },
  {
    name: "Coin Stories",
    host: "Natalie Brunell",
    description:
      "Bitcoin, money, and macro with a mainstream, journalistic feel and high-profile guests.",
    topics: ["Bitcoin", "Macro", "Interviews"],
    spotifyUrl: "",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/coin-stories-with-natalie-brunell/id1569130932",
    websiteUrl: "",
    artwork: "/images/podcasts/coin-stories.jpg",
  },
  {
    name: "Bitcoin Audible",
    host: "Guy Swann",
    description:
      "Narrated readings of the most important Bitcoin articles and essays, with commentary.",
    topics: ["Bitcoin", "Education", "Readings"],
    spotifyUrl: "https://open.spotify.com/show/16c6WR2znCZM1wveeeJoSz",
    appleUrl: "https://podcasts.apple.com/us/podcast/bitcoin-audible/id1359544516",
    websiteUrl: "",
    artwork: "/images/podcasts/bitcoin-audible.jpg",
  },
  {
    name: "Citadel Dispatch",
    host: "Matt Odell",
    description:
      "A live, freedom-tech-focused Bitcoin show on privacy, self-custody, and sovereignty.",
    topics: ["Bitcoin", "Privacy", "Freedom tech"],
    spotifyUrl: "",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/citadel-dispatch/id1546393840",
    websiteUrl: "",
    artwork: "/images/podcasts/citadel-dispatch.jpg",
  },
  {
    name: "The Bitcoin Standard Podcast",
    host: "Saifedean Ammous",
    description:
      "Austrian economics and the theory behind sound money, from the author of The Bitcoin Standard.",
    topics: ["Bitcoin", "Economics", "Sound money"],
    spotifyUrl: "",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-bitcoin-standard-podcast/id1403202032",
    websiteUrl: "",
    artwork: "/images/podcasts/bitcoin-standard.jpg",
  },
  {
    name: "Once Bitten",
    host: "Daniel Prince",
    description:
      "A Bitcoin-first show on freedom, family, and the human side of the rabbit hole.",
    topics: ["Bitcoin", "Lifestyle", "Freedom"],
    spotifyUrl: "https://open.spotify.com/show/4wWzXFEyAJtM6aOLA6c4Q2",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/once-bitten-a-bitcoin-podcast/id1497540130",
    websiteUrl: "https://www.once-bitten.com",
    artwork: "/images/podcasts/once-bitten.jpg",
  },
  {
    name: "The Bitcoin Layer",
    host: "Nik Bhatia",
    description:
      "Global macro, the monetary system, and Bitcoin's place within it — rigorous and analytical.",
    topics: ["Bitcoin", "Macro", "Monetary system"],
    spotifyUrl: "https://open.spotify.com/show/69AABOXxSynCpfFzwIYK9v",
    appleUrl: "https://podcasts.apple.com/us/podcast/the-bitcoin-layer/id1650029331",
    websiteUrl: "",
    artwork: "/images/podcasts/bitcoin-layer.jpg",
  },
  {
    name: "Unchained",
    host: "Laura Shin",
    description:
      "Journalistic interviews across crypto, with significant Bitcoin coverage. (Crypto-wide.)",
    topics: ["Crypto", "Bitcoin", "Interviews"],
    spotifyUrl: "https://open.spotify.com/show/1cJrrfGY1SKBIRn5noKSAf",
    appleUrl: "https://podcasts.apple.com/us/podcast/unchained/id1123922160",
    websiteUrl: "",
    artwork: "/images/podcasts/unchained.jpg",
  },
  {
    name: "The Coin Bureau Podcast",
    host: "Coin Bureau (Guy)",
    description:
      "Accessible education, market analysis, and ecosystem coverage across the wider crypto space. (Crypto-wide.)",
    topics: ["Crypto", "Education", "Markets"],
    spotifyUrl: "https://open.spotify.com/show/41TtLE0AKsokP5XBbSoLwe",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/the-coin-bureau-podcast-crypto-without-the-hype/id1608944138",
    websiteUrl: "",
    artwork: "/images/podcasts/coin-bureau.jpg",
  },
  {
    name: "Bankless",
    host: "Ryan Sean Adams & David Hoffman",
    description:
      "One of crypto's biggest shows, covering DeFi, markets, and finance. (Crypto-wide, Ethereum-leaning.)",
    topics: ["Crypto", "DeFi", "Markets"],
    spotifyUrl: "https://open.spotify.com/show/41TNnXSv5ExcQSzEGLlGhy",
    appleUrl: "https://podcasts.apple.com/us/podcast/bankless/id1499409058",
    websiteUrl: "https://www.bankless.com",
    artwork: "/images/podcasts/bankless.jpg",
  },
];
