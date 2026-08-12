import type { CaseStudy } from "@/types/case-study";

// Client, show and service scope confirmed directly by James (August 2026):
// distribution, artwork, episode descriptions, and a multi-camera 4K video
// edit.
//
// Everything about VERMEG and the show itself was verified by public web
// search and by pulling the show's own RSS feed (feeds.buzzsprout.com/1890782),
// August 2026:
//   - VERMEG is a banking, capital markets and insurance software house,
//     founded 1993, 1600+ staff, 550+ clients across 40 countries, and has
//     supplied collateral and cash management systems to 23 central banks.
//   - The feed's own description names Jawad Akhtar as host and describes the
//     show as a RegTech and FinTech podcast running weekly.
//   - The feed's iTunes keywords are: RegTech, fintech, banking, insurance,
//     digital transformation, finance, financial services, innovation,
//     regulatory, financial regulation.
//   - A publicly listed episode, "How Basel 3.1 is Transforming Regulatory
//     Reporting", confirms the regulatory subject matter.
//
// IMPORTANT — the show appears to have been unpublished. The RSS feed is still
// live and locked (last built April 2026) but currently returns ZERO episodes;
// the iTunes lookup API returns no result for the show ID in US, GB, LU, BE or
// FR; and Spotify's oEmbed endpoint errors for the show URL. Amazon Music's
// listing still responds. So no platform links are included here rather than
// publishing a link that 404s for a visitor.
//
// Consequently there is no episode count and no outcome metric in this file.
// Both are genuinely unknown and are marked TK rather than estimated.
export const fintalkVermeg: CaseStudy = {
  slug: "fintalk-vermeg",
  clientName: "VERMEG",
  showName: "FinTalk by VERMEG",
  metaTitleName: "FinTalk by VERMEG",
  hostName: "Jawad Akhtar",
  oneLiner:
    "VERMEG builds the software banks, insurers and central banks run their regulatory reporting and collateral management on. FinTalk was its RegTech show — hosted by regulatory consultant Jawad Akhtar, filmed multi-camera in 4K, on subjects like Basel 3.1 where a mis-cut sentence changes the meaning.",
  description: `VERMEG is a financial software house rather than a media company. Founded in 1993, it supplies banking, capital markets and insurance systems — collateral management, post-trade processing, policy administration and regulatory reporting — to more than 550 clients across 40 countries, including collateral and cash management platforms used by 23 central banks. FinTalk was the show it built to talk to that market directly.

That client type sets the editorial problem before anything is recorded. The audience is compliance officers, heads of regulatory reporting and operations leads at institutions that are themselves regulated. They already know the subject. A show aimed at that room cannot simplify its way to clarity, because the simplification is precisely what a specialist listener hears as incompetence — and once they hear it, the credibility of the vendor behind the show goes with it.

The content bears that out. Episodes worked through material like how Basel 3.1 changes regulatory reporting obligations: subjects where a specific framework, a specific deadline and a specific reporting requirement all have to survive the edit intact. Cutting for pace on that kind of conversation is genuinely risky. Removing a qualifying clause because it slows a sentence down can turn an accurate statement about a regulatory obligation into an inaccurate one, and neither the editor nor the listener necessarily notices. The safe cut and the tight cut are not always the same cut, and on a show like this the safe one wins.

The production was the full scope: a multi-camera 4K video edit, episode artwork, episode descriptions, and distribution across platforms. Multi-camera adds a constraint that compounds the first problem — every cut has to work for the ear and the eye at once, and a camera change landing mid-clause is more noticeable on screen than the equivalent audio edit is in isolation. Filming a subject-matter expert who is not a broadcaster, and cutting between angles without making them look uncertain, is most of the craft in a show like this.

Episode descriptions carried their own requirement. Written for an audience that searches by framework and regulation name rather than by guest, they had to use the sector's vocabulary precisely — RegTech, regulatory reporting, collateral management — because those are the terms this listener actually types.`,
  services: [
    "Multi-camera 4K video edit",
    "Full episode audio edit",
    "Episode artwork",
    "Episode description writing",
    "Distribution across platforms",
  ],
  // TK: outcome — episode count, downloads, or any engagement figure VERMEG
  // shared. Deliberately absent rather than estimated. The show is no longer
  // publicly listed, so nothing could be counted independently.
  links: [],
  // TK: cover art. The show's artwork is on Buzzsprout's storage, but every
  // other case study uses artwork supplied by James rather than hotlinked or
  // re-hosted from a third party, so this follows that.
  themeColor: "#0B3B5C", // conservative navy; TK: resample once real cover art is added
  featured: false,
  category: "flagship",
};
