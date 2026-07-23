import type { ClientRosterEntry } from "@/types/case-study";

// Flagship client roster — used for the home page logo strip and the
// /work index. Only entries with hasCaseStudy: true link to a full
// case study page; the rest render as unlinked roster items until
// their case study content is supplied.
export const clients: ClientRosterEntry[] = [
  {
    slug: "outthinkers",
    clientName: "Twenty One Collective",
    showName: "Outthinkers",
    hostName: "Kaihan Krippendorff",
    logo: "/images/clients/outthinkers.svg", // TODO: replace with real logo asset
    logoAlt: "Outthinkers logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
  {
    slug: "genetics-podcast",
    clientName: "Sano Genetics",
    showName: "The Genetics Podcast",
    hostName: "Dr Patrick Short",
    logo: "/images/clients/genetics-podcast.svg", // TODO: replace with real logo asset
    logoAlt: "The Genetics Podcast logo — TODO: confirm alt text with client",
    hasCaseStudy: true,
  },
  {
    slug: "assemble-you",
    clientName: "Assemble You",
    showName: "Assemble You",
    logo: "/images/clients/assemble-you.svg", // TODO: replace with real logo asset
    logoAlt: "Assemble You logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
  {
    slug: "bitcoin-and-the-long-game",
    clientName: "Bitcoin and the Long Game",
    showName: "Bitcoin and the Long Game",
    hostName: "Peter Lane & George Boyd",
    logo: "/images/clients/bitcoin-and-the-long-game.svg", // TODO: replace with real logo asset
    logoAlt: "Bitcoin and the Long Game logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
  {
    slug: "bitcoin-collective",
    clientName: "The Bitcoin Collective",
    showName: "The Bitcoin Collective",
    hostName: "Jordan Walker",
    logo: "/images/clients/bitcoin-collective.svg", // TODO: replace with real logo asset
    logoAlt: "The Bitcoin Collective logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
  {
    slug: "career-change-coach",
    clientName: "Alice Stapleton",
    showName: "Career Change Coach",
    hostName: "Alice Stapleton",
    logo: "/images/clients/career-change-coach.svg", // TODO: replace with real logo asset
    logoAlt: "Career Change Coach logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
  {
    slug: "ec-blueprint",
    clientName: "The EC Blueprint",
    showName: "The EC Blueprint",
    logo: "/images/clients/ec-blueprint.svg", // TODO: replace with real logo asset
    logoAlt: "The EC Blueprint logo — TODO: confirm alt text with client",
    hasCaseStudy: false,
  },
];
