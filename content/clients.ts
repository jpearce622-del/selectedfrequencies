import type { ClientRosterEntry } from "@/types/case-study";

// Flagship client roster — drives the /work index. Only entries with
// hasCaseStudy: true link to a full case study page; the rest render as
// unlinked roster cards until their case study content is supplied.
// (The homepage artwork marquee is driven separately by content/shows.ts.)
export const clients: ClientRosterEntry[] = [
  {
    slug: "outthinkers",
    clientName: "Twenty One Collective",
    showName: "Outthinkers",
    hostName: "Kaihan Krippendorff",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
  {
    slug: "genetics-podcast",
    clientName: "Sano Genetics",
    showName: "The Genetics Podcast",
    hostName: "Dr Patrick Short",
    logo: "/images/clients/genetics-podcast.png", // real Sano Genetics logo
    logoAlt: "Sano Genetics logo",
    hasCaseStudy: true,
  },
  {
    slug: "assemble-you",
    clientName: "Assemble You",
    showName: "Assemble You",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
  {
    slug: "bitcoin-and-the-long-game",
    clientName: "Bitcoin and the Long Game",
    showName: "Bitcoin and the Long Game",
    hostName: "Peter Lane & George Boyd",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
  {
    slug: "bitcoin-collective",
    clientName: "The Bitcoin Collective",
    showName: "The Bitcoin Collective",
    hostName: "Jordan Walker",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
  {
    slug: "career-change-coach",
    clientName: "Alice Stapleton",
    showName: "Career Change Coach",
    hostName: "Alice Stapleton",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
  {
    slug: "ec-blueprint",
    clientName: "The EC Blueprint",
    showName: "The EC Blueprint",
    // TODO: real logo asset still needed from client
    hasCaseStudy: false,
  },
];
