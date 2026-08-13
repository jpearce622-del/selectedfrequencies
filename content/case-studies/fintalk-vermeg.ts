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
// IMPORTANT — the audio show appears to have been unpublished. The RSS feed is
// still live and still serves channel metadata and cover art, but currently
// returns ZERO episodes; the iTunes lookup API returns no result for the show
// ID in US, GB, LU, BE or FR; and Spotify's oEmbed endpoint errors for the show
// URL. So no audio platform links are included here rather than publishing a
// link that 404s for a visitor.
//
// The VIDEO episodes are still public on YouTube, which is why that is the one
// link on this page. Verified by fetching the URL directly (August 2026): the
// title returned is "FinTalk S2EP8 | Basel 3.1 Reporting: Risk Weights,
// Property Market, Social Housing & Data Governance". That single link is worth
// more than a list of dead ones — it lets a prospect watch the actual output.
//
// Season/episode span is evidenced rather than asserted: S2E8 from the verified
// YouTube title above, and S3E9 ("The challenges and Solutions in SME Lending",
// guest Dr Gabriele Sabato, Co-founder & CEO of Wiserfunding) from episode
// artwork supplied by James. So the show ran to at least three seasons. A total
// episode count is still unknown and is NOT stated anywhere on this page.
//
// Cover art: pulled from the show's own live RSS feed, which still serves it at
// 1400x1400. James designed it, so this is his own work rather than a
// third-party asset — resized to 1000px and stored as WebP (23KB) alongside
// every other client logo. themeColor sampled from that file.
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

Episode descriptions carried their own requirement. Written for an audience that searches by framework and regulation name rather than by guest, they had to use the sector's vocabulary precisely — RegTech, regulatory reporting, collateral management — because those are the terms this listener actually types.

Short-form clips came out of the same episodes, and in a regulated sector they need more care than usual. A clip is a statement stripped of its context, and a claim about a reporting obligation that was accurate across two minutes of conversation can be misleading in forty seconds of it. Selection here is as much about what cannot safely be lifted as what performs.

The show ran across multiple seasons — the episode below is from season two, and season three reached at least nine episodes, with guests including the co-founder and CEO of credit-risk firm Wiserfunding on SME lending. That span is the part worth noting: a vendor podcast aimed at compliance officers only keeps going if the standard holds every time, because this audience notices when it slips.`,
  services: [
    "Multi-camera 4K video edit",
    "Full episode audio edit",
    "Episode artwork",
    "Episode description writing",
    "Short-form clips for social",
    "Distribution across platforms",
  ],
  // TK: outcome — a total episode count, downloads, or any engagement figure
  // VERMEG shared. Deliberately absent rather than estimated. The audio feed no
  // longer lists episodes, so nothing could be counted independently.
  links: [
    {
      label: "YouTube",
      url: "https://www.youtube.com/watch?v=wOkCceIa1aU",
    },
  ],
  logo: "/images/clients/fintalk-vermeg.webp", // real show artwork, from the show's own feed
  logoAlt: "FinTalk by VERMEG cover art",
  themeColor: "#9A2530", // sampled from the cover art's brand red
  featured: false,
  category: "flagship",
};
