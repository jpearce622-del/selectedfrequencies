import type { CaseStudy } from "@/types/case-study";

// Hosts, rebrand history, and platform links researched via public
// web search (podcasts.apple.com / open.spotify.com /
// assembleyou.com), July 2026. Service scope confirmed directly by
// James. Outcome and testimonial are genuinely unknown — left as
// placeholders rather than invented. Cover art supplied by James (the
// show's real Spotify/Apple artwork).
export const theAssembly: CaseStudy = {
  slug: "assemble-you",
  clientName: "Assemble You",
  showName: "The Assembly",
  hostName: "Adam Lacey & Brigid McCormack",
  oneLiner:
    "Adam Lacey, co-founder of Assemble You, and Brigid McCormack host The Assembly — relaunched from L&D Challenges into a sharper weekly show unpacking what's actually working in workplace learning, backed by its own blog and newsletter. Growing a media brand on that schedule starts with an edit that's never late and never sounds like an afterthought.",
  description: `The Assembly is the show Assemble You built after deciding L&D Challenges had outgrown its own name. Adam Lacey, the company's co-founder, and Brigid McCormack use it to work through what is actually landing in workplace learning — not the theory, but what practitioners are finding works when they try it on real teams. It runs weekly, alongside a blog and a newsletter, which makes it one part of a media operation rather than a side project.

That distinction shapes the production. A weekly show attached to a wider content calendar cannot slip. If the episode is late, the newsletter that references it is late, and the whole week's publishing moves. So the brief here is less about elaborate treatment and more about absolute reliability: the edit lands when it is supposed to, at the same standard, every week, without the hosts having to chase it.

The show also carries a branded intro clip at the top of every episode and a custom music bed at the open and close. Those exist to do a specific job. A podcast attached to a company brand has to sound like that brand from the first few seconds, before a new listener has decided whether to stay. A consistent open tells them, without anyone saying it, that this is a produced show from an organisation that takes it seriously — and a consistent close leaves them somewhere deliberate rather than trailing off.

Keeping that identical week after week is more work than setting it up once. Levels have to match across episodes recorded in different conditions, the music has to sit under speech without fighting it, and the join between the branded open and the conversation has to feel like one thing rather than two files stuck together. Done properly, none of it is noticeable — which is the point.`,
  services: [
    "Weekly episode audio edit",
    "Branded intro clip added to the top of every episode",
    "Custom music bed at the open and close",
  ],
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/4iu3PejaNtPJuDSNMRlMVV" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/gb/podcast/the-assembly/id1682879103" },
  ],
  logo: "/images/clients/the-assembly.jpeg", // real show artwork
  logoAlt: "The Assembly cover art",
  themeColor: "#1FCB82", // sampled from the show's mint-green cover art
  // Not a takeover. James's records put the Assemble You relationship at
  // 21 Nov 2022, five months before The Assembly's first episode on
  // 13 Apr 2023, so he was there from the start.
  //
  // Cadence is "Weekly" on James's instruction, which is his to state. Note
  // it does not match the public feed: 122 episodes between Apr 2023 and
  // Aug 2026 works out at roughly three a month, and that was the figure
  // here before. The likeliest explanation is that the public feed doesn't
  // carry everything he delivers for Assemble You, since their standalone
  // paywalled series sit behind a wall by design. Worth knowing that a
  // prospect counting the public feed will arrive at a lower number.
  continuity: {
    takeover: false,
    joined: "From launch, April 2023",
    cadence: "Weekly",
    episodesDelivered: 122,
    duration: "Client since November 2022",
    stillRunning: true,
    note: "The longest client relationship here, and the one that has widened most: alongside the show, Assemble You commission standalone paywalled series.",
  },
  featured: true,
  category: "flagship",
};
