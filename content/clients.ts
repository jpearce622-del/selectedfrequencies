import type { ClientRosterEntry } from "@/types/case-study";

// Flagship client roster — drives the /work index. Only entries with
// hasCaseStudy: true link to a full case study page; the rest render as
// unlinked roster cards until their case study content is supplied.
// (The homepage artwork marquee is driven separately by content/shows.ts.)
//
// Order note: the three Outthinkers Network shows are deliberately
// interspersed (positions 1, 5, 7) rather than grouped, so they don't
// form a single row on the /work grid.
export const clients: ClientRosterEntry[] = [
  {
    slug: "outthinkers",
    clientName: "Outthinkers Network",
    showName: "Outthinkers",
    hostName: "Kaihan Krippendorff",
    logo: "/images/clients/outthinkers.jpeg", // real show artwork
    logoAlt: "Outthinkers cover art",
    hasCaseStudy: true,
  },
  {
    slug: "genetics-podcast",
    clientName: "Sano Genetics",
    showName: "The Genetics Podcast",
    hostName: "Dr Patrick Short",
    logo: "/images/clients/genetics-podcast-cover.jpeg", // real show artwork
    logoAlt: "The Genetics Podcast cover art",
    hasCaseStudy: true,
  },
  {
    slug: "bitcoin-collective",
    clientName: "The Bitcoin Collective",
    showName: "The Bitcoin Collective",
    hostName: "Jordan Walker",
    logo: "/images/clients/bitcoin-collective.jpeg", // real show artwork
    logoAlt: "The Bitcoin Collective cover art",
    hasCaseStudy: true,
  },
  {
    slug: "assemble-you",
    clientName: "Assemble You",
    showName: "The Assembly", // real show title (Assemble You is the company)
    hostName: "Adam Lacey & Brigid McCormack",
    logo: "/images/clients/the-assembly.jpeg", // real show artwork
    logoAlt: "The Assembly cover art",
    hasCaseStudy: true,
  },
  {
    slug: "strategy-at-scale",
    clientName: "Outthinkers Network",
    showName: "Strategy at Scale",
    hostName: "Kaihan Krippendorff",
    logo: "/images/clients/strategy-at-scale.jpeg", // real show artwork
    logoAlt: "Strategy at Scale cover art",
    hasCaseStudy: true,
  },
  {
    slug: "bitcoin-and-the-long-game",
    clientName: "Peter Lane and George Boyd",
    showName: "Bitcoin and the Long Game",
    hostName: "Peter Lane & George Boyd",
    logo: "/images/clients/bitcoin-and-the-long-game.jpeg", // real show artwork
    logoAlt: "Bitcoin and the Long Game cover art",
    hasCaseStudy: true,
  },
  {
    slug: "chief-strategy-officer-podcast",
    clientName: "Outthinkers Network",
    showName: "The Chief Strategy Officer Podcast",
    hostName: "Kaihan Krippendorff",
    logo: "/images/clients/chief-strategy-officer-podcast.jpeg", // real show artwork
    logoAlt: "The Chief Strategy Officer Podcast cover art",
    hasCaseStudy: true,
  },
  {
    slug: "career-change-coach",
    clientName: "Alice Stapleton",
    showName: "The Career Change Diaries", // real show title (Career Change Coach is Alice's coaching brand)
    hostName: "Alice Stapleton",
    logo: "/images/clients/career-change-diaries.jpeg", // real show artwork
    logoAlt: "The Career Change Diaries cover art",
    hasCaseStudy: true,
  },
];
