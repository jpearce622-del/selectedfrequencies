// content/bitcoin-podcasts.ts
// NOTE (James): fill in the empty url fields with the real links before publishing.
// Verify each host is still current — shows rebrand and change hosts.
//
// Shows render in array order, so the two we produce appear first with a
// "Produced by Selected Frequencies" badge (linking to caseStudyUrl). Empty
// url fields are hidden on the page, so there are no dead links until filled.

export type BitcoinPodcast = {
  name: string;
  host: string;
  description: string;
  topics: string[];
  spotifyUrl?: string;
  appleUrl?: string;
  websiteUrl?: string;
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
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
    producedByUs: true,
    caseStudyUrl: "/work/bitcoin-collective",
  },
  {
    name: "Bitcoin and the Long Game",
    host: "Peter Lane & George Boyd",
    description:
      "A show built on a simple idea — sport, money, and life all reward patience. Full audio and video, every week.",
    topics: ["Bitcoin", "Macro", "Long-term thinking"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
    producedByUs: true,
    caseStudyUrl: "/work/bitcoin-and-the-long-game",
  },
  {
    name: "What Bitcoin Did",
    host: "Peter McCormack",
    description:
      "Long-form Bitcoin interviews on technology, macro, and policy — made accessible for newcomers and veterans alike.",
    topics: ["Bitcoin", "Macro", "Interviews"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "TFTC: A Bitcoin Podcast",
    host: "Marty Bent",
    description:
      "Bitcoin news, freedom tech, and interviews with the builders shaping the network.",
    topics: ["Bitcoin", "Freedom tech", "News"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Stephan Livera Podcast",
    host: "Stephan Livera",
    description:
      "Austrian economics, Bitcoin tech, self-custody, and Lightning — one of the most respected technical/economic shows in Bitcoin.",
    topics: ["Bitcoin", "Economics", "Technical"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Bitcoin Fundamentals (We Study Billionaires)",
    host: "Preston Pysh",
    description:
      "Bitcoin viewed through an investing and macroeconomics lens, from The Investor's Podcast Network.",
    topics: ["Bitcoin", "Investing", "Macro"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "The Pomp Podcast",
    host: "Anthony Pompliano",
    description:
      "Bitcoin, finance, and entrepreneurship with a rotating cast of founders and investors.",
    topics: ["Bitcoin", "Finance", "Business"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "The Breakdown",
    host: "Nathaniel Whittemore (NLW)",
    description:
      "Daily Bitcoin and macro news analysis — sharp, timely, and widely followed.",
    topics: ["Bitcoin", "Macro", "Daily news"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Coin Stories",
    host: "Natalie Brunell",
    description:
      "Bitcoin, money, and macro with a mainstream, journalistic feel and high-profile guests.",
    topics: ["Bitcoin", "Macro", "Interviews"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Bitcoin Audible",
    host: "Guy Swann",
    description:
      "Narrated readings of the most important Bitcoin articles and essays, with commentary.",
    topics: ["Bitcoin", "Education", "Readings"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Citadel Dispatch",
    host: "Matt Odell",
    description:
      "A live, freedom-tech-focused Bitcoin show on privacy, self-custody, and sovereignty.",
    topics: ["Bitcoin", "Privacy", "Freedom tech"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "The Bitcoin Standard Podcast",
    host: "Saifedean Ammous",
    description:
      "Austrian economics and the theory behind sound money, from the author of The Bitcoin Standard.",
    topics: ["Bitcoin", "Economics", "Sound money"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Once Bitten",
    host: "Daniel Prince",
    description:
      "A Bitcoin-first show on freedom, family, and the human side of the rabbit hole.",
    topics: ["Bitcoin", "Lifestyle", "Freedom"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "The Bitcoin Layer",
    host: "Nik Bhatia",
    description:
      "Global macro, the monetary system, and Bitcoin's place within it — rigorous and analytical.",
    topics: ["Bitcoin", "Macro", "Monetary system"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Unchained",
    host: "Laura Shin",
    description:
      "Journalistic interviews across crypto, with significant Bitcoin coverage. (Crypto-wide.)",
    topics: ["Crypto", "Bitcoin", "Interviews"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "The Coin Bureau Podcast",
    host: "Coin Bureau (Guy)",
    description:
      "Accessible education, market analysis, and ecosystem coverage across the wider crypto space. (Crypto-wide.)",
    topics: ["Crypto", "Education", "Markets"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
  {
    name: "Bankless",
    host: "Ryan Sean Adams & David Hoffman",
    description:
      "One of crypto's biggest shows, covering DeFi, markets, and finance. (Crypto-wide, Ethereum-leaning.)",
    topics: ["Crypto", "DeFi", "Markets"],
    spotifyUrl: "",
    appleUrl: "",
    websiteUrl: "",
  },
];
