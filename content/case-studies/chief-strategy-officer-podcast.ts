import type { CaseStudy } from "@/types/case-study";

// Host, focus, and guests researched via public web search
// (outthinker.com / podcasts.apple.com), July 2026 — also hosted by
// Kaihan Krippendorff, part of the same Outthinker network as
// Outthinkers and Strategy at Scale, hence the same client
// attribution. Cover art supplied by James. Service scope NOT yet
// confirmed for this client — left as an explicit placeholder.
// Outcome uses only sourced guest/company names; testimonial unknown.
export const chiefStrategyOfficerPodcast: CaseStudy = {
  slug: "chief-strategy-officer-podcast",
  clientName: "Outthinkers Network",
  showName: "The Chief Strategy Officer Podcast",
  metaTitleName: "Chief Strategy Officer",
  hostName: "Kaihan Krippendorff",
  oneLiner:
    "Kaihan Krippendorff — who has advised more than 300 of the world's top companies — sits down monthly with sitting Chief Strategy Officers from businesses like WestRock, IDEX, and Anywhere Real Estate, plus Google's Chief Strategist Neil Hoyne. Conversations at that level need production that never once gets in the way.",
  description: `The Chief Strategy Officer Podcast puts Kaihan Krippendorff — who has advised more than 300 of the world's largest companies — in conversation with people holding the strategy brief at major organisations. Guests have included sitting Chief Strategy Officers from WestRock, IDEX and Anywhere Real Estate, and Google's Chief Strategist Neil Hoyne. It runs monthly, and sits alongside Outthinkers and Strategy at Scale in the same network.

Guests at that level change what production has to protect. A sitting CSO discussing how their company actually makes decisions is being candid in public on behalf of an employer, and they are giving up an hour of a genuinely scarce diary to do it. Both facts raise the cost of a bad edit. A clumsy cut that alters the sense of an answer is not a rough listen — it is a misrepresentation of a named executive, and the kind of thing that stops the next guest saying yes.

So the editorial instinct here runs the opposite way to most podcast editing. The temptation with a long strategic answer is to tighten it, because tightening usually improves things. But senior people qualify their statements deliberately, and the qualifications are frequently the substance. Removing a hedge to improve pace can turn a careful position into a firmer claim than the speaker made. Anything ambiguous stays, and anything cut has to leave the meaning exactly as it was.

A monthly release schedule helps, in that each episode gets more attention than a weekly cadence allows. It also raises the stakes: with twelve episodes a year, there is nowhere for a weak one to hide.`,
  services: [],
  outcome:
    "Guests include Google's Chief Strategist Neil Hoyne and sitting Chief Strategy Officers from WestRock, IDEX, and Anywhere Real Estate.",
  links: [
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-chief-strategy-officer-podcast/id1742792507" },
    { label: "Website", url: "https://outthinker.com/csopodcast/" },
  ],
  logo: "/images/clients/chief-strategy-officer-podcast.jpeg", // real show artwork
  logoAlt: "The Chief Strategy Officer Podcast cover art",
  themeColor: "#1D5FA8", // sampled from the show's deep-blue cover art
  featured: true,
  category: "flagship",
};
