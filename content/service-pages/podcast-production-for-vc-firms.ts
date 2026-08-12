import type { ServicePage } from "@/types/service-page";

/**
 * Industry page 3. Structurally about PARTNER TIME AS THE SCARCE RESOURCE.
 *
 * The argument: a VC show is not a marketing channel, it is a deal-flow and
 * relationship instrument that happens to publish. Everything follows from
 * the fact that the only person who can host it bills their time in deal
 * hours.
 *
 * ⚠ EVIDENCE WARNING — the weakest roster on the site. Read before editing.
 *
 * There is NO VC client in the repo. None. The proof section uses Outthinkers
 * and Strategy at Scale, which are corporate-strategy shows interviewing
 * senior operators and scaled founders — genuinely adjacent in audience and
 * guest seniority, and described here as exactly that, never as VC work.
 *
 * Do not let this page drift into implying fund experience. Specifically:
 *   - No LP communication work has been done. None.
 *   - No portfolio-company interview programme has been run.
 *   - No fund is a client.
 * The [TK:] markers below are where a real VC client would go. Until one
 * exists, this page sells transferable capability honestly, which is worth
 * publishing for search but is materially weaker than the fintech, crypto
 * and biotech pages. Flagged to James in the build summary.
 *
 * Split enforced against executive-podcast-production-service.ts:
 *   - That page is about protecting ONE executive's reputation and calendar,
 *     bought by a comms lead, and argues about discretion and sign-off.
 *   - This page is about a FUND's positioning in a founder market, bought by
 *     a platform lead, and argues about deal flow and guest relationships.
 *     Overlapping buyer seniority, different job to be done.
 */
export const podcastProductionForVcFirms: ServicePage = {
  slug: "podcast-production-for-vc-firms",
  group: "industry",
  primaryKeyword: "podcast production for VC firms",
  supportingKeywords: [
    "venture capital podcast production",
    "podcast production for investment firms",
    "vc podcast agency",
    "private equity podcast production",
  ],
  buyer:
    "Platform, marketing or content lead at a venture fund. Producing a show hosted by a partner whose time is the firm's scarcest resource, aimed at founders the fund wants to be top of mind with.",
  seo: {
    title: "Podcast Production for VC Firms",
    metaDescription:
      "Podcast production for VC firms: a show that builds founder relationships and partner profile, designed around partner time being your scarcest resource.",
  },
  h1: "Podcast production for VC firms",
  subheadline:
    "A fund's podcast is a deal-flow instrument that happens to publish. We build it around the one constraint that decides whether it survives: how little of a partner's week it can credibly take.",
  sectionOrder: [
    "problem",
    "included",
    "how-it-works",
    "objections",
    "proof",
    "pricing",
    "faq",
  ],
  problem: {
    heading: "Why fund podcasts stop after eight episodes",
    body: [
      "The pattern is consistent enough to be predictable. A fund launches a show, publishes strongly for a quarter, and then the gap between episodes stretches from one week to three to indefinitely. It is almost never a content problem. It is that the show was designed around a partner's enthusiasm rather than around a partner's calendar, and enthusiasm is the resource that runs out first.",
      "Partner time is the binding constraint on everything a fund does, and a podcast competes directly with the activities that generate returns. An hour recording is an hour not spent in a first meeting, on a board, or with an LP. That comparison is made — consciously or not — every time an episode is scheduled, and a show that requires prep, a re-record and a review round will lose that comparison inside a quarter.",
      "The second issue is what the show is actually for, which funds often leave unexamined. Venture capital podcast production sold as brand awareness is a weak proposition — a fund does not need reach, it needs to be the name a specific founder thinks of first. Those are different objectives and they imply different shows. A hundred thousand generic downloads is worth considerably less than four hundred listeners who are all building companies in your thesis.",
      "There is a third thing worth saying plainly, because it is the failure mode that damages a fund rather than merely wasting its time. A show that functions as portfolio promotion is transparent to founders, who are the most marketing-literate audience there is. A partner interviewing their own portfolio company about how well it is going reads as an advert, and the reputational cost of that is real. The shows that work are the ones where the partner is genuinely curious and occasionally disagrees.",
    ],
  },
  included: {
    heading: "What podcast production for VC firms covers",
    intro:
      "Scoped so that the partner's total commitment is a recording hour, and the platform team's is an approval.",
    items: [
      {
        title: "Guest research and a partner briefing pack",
        detail:
          "A one-page brief per episode: the guest's background, what they are actually known for, the three or four lines of questioning worth pursuing, and what has already been asked to death on every other podcast they have done. Readable in five minutes between meetings.",
      },
      {
        title: "Full edit, audio and video",
        detail:
          "Content edit, cleanup, levelling and mastering, multi-camera where filmed. Edited so the partner sounds considered without sounding coached — over-editing a senior investor reads as inauthentic to a founder audience.",
      },
      {
        title: "Founder-facing short-form clips",
        detail:
          "Clips selected for moments a founder would send to another founder. That is a narrower and more useful test than what performs generally, and it is the mechanism by which a fund show reaches the people it is actually for.",
      },
      {
        title: "Episode descriptions and chapters",
        detail:
          "Written so an episode is findable by the problem it discusses — pricing, hiring a first sales leader, a specific market — rather than only by the guest's name.",
      },
      {
        title: "Full transcript",
        detail:
          "Published as real text. A fund's show is often searched for a specific argument a partner made months ago, and audio is not searchable.",
      },
      {
        title: "Guest-ready assets",
        detail:
          "A clip and a graphic packaged for the guest to share. When your guest is a founder in your thesis, them posting it to their own network is the entire distribution strategy working correctly.",
      },
      {
        title: "Batch recording scheduling",
        detail:
          "Sessions structured so several episodes are recorded in one calendar block, because getting one three-hour slot from a partner is far more achievable than getting six one-hour slots across six weeks.",
      },
    ],
    footnote:
      "We do not book your guests. Outreach from a partner converts and outreach from a production company does not, so that stays with you — we supply the assets that make founders say yes and share afterwards.",
  },
  howItWorks: {
    heading: "How a fund's show runs",
    intro:
      "Front-loaded deliberately: the decisions happen once, so the recurring ask on a partner is only the recording.",
    steps: [
      {
        title: "1. Positioning session — with the platform team",
        body: "What the show is for, which founders it should reach, what the fund wants to be known for having a view on, and what is off-limits. Booked with the platform or marketing lead rather than the partner, because it is a positioning conversation and it does not need partner time.",
      },
      {
        title: "2. Show spec and sign-off chain",
        body: "Format, length, tone, whether portfolio companies appear and on what terms, and who approves an episode. That portfolio question is worth settling in writing early — it is the one that causes awkwardness later if left implicit.",
      },
      {
        title: "3. Batch recording days",
        body: "Three or four episodes in a single block. This is the scheduling change that most reliably keeps a fund's show alive, and it is the reason a partner can sustain a fortnightly feed on a handful of calendar commitments per year.",
      },
      {
        title: "4. Briefing packs, 48 hours ahead",
        body: "One page per guest, in time to actually be read. A partner who arrives having read a brief conducts a noticeably better interview than one working from a name and a company, and it costs them five minutes.",
      },
      {
        title: "5. Production and clip selection",
        body: "Full edit, descriptions, chapters, transcript and clips. Clips chosen on the founder-to-founder test rather than on general engagement.",
      },
      {
        title: "6. Approval and publishing on a buffer",
        body: "Platform team approves; we publish to schedule. Because episodes are batched, the feed runs on a buffer of finished episodes — so a quarter where the partner is closing a fund does not produce a gap in the feed.",
      },
    ],
  },
  objections: {
    heading: "What platform leads ask",
    items: [
      {
        question: "Have you worked with a venture fund before?",
        answer:
          "Not a fund directly, and we would rather be straight about that than stretch a definition. What we do produce is the adjacent thing: Outthinkers and Strategy at Scale, shows interviewing scaled founders and Fortune 500 strategy leaders for a senior professional audience — including Veeva co-founder Matt Wallach on taking the company to nearly $2.75bn in revenue. The transferable part is handling senior guests, briefing a busy host, and producing for an audience that detects marketing instantly.",
      },
      {
        question: "How little partner time can this realistically take?",
        answer:
          "The recording plus about five minutes with a brief. Everything else runs through your platform team. Batching several episodes into one block is what makes a fortnightly show cost a partner a handful of calendar commitments a year rather than a recurring weekly obligation — and that structural difference is usually what decides whether the show is still running in a year.",
      },
      {
        question: "Should we interview our own portfolio companies?",
        answer:
          "Sparingly, and never as the format's backbone. Founders are the most marketing-literate audience there is, and a partner interviewing their own portfolio about how well it is going reads as an advert immediately. Portfolio founders work well when the episode is genuinely about a hard problem they solved — including the parts that went badly.",
      },
      {
        question: "How do we know it is generating deal flow?",
        answer:
          "Mostly you will not, in an attributable way, and we would be sceptical of anyone claiming otherwise. The realistic mechanism is that a founder who has heard a partner think out loud for an hour arrives at a first meeting already knowing how the fund thinks. That shows up as warmer inbound and shorter first meetings rather than as a tracked source, so it is worth agreeing internally what would count as working before you start.",
      },
      {
        question: "Does this work for private equity or growth funds too?",
        answer:
          "The structure transfers, though the emphasis moves. Podcast production for investment firms outside venture — private equity, growth, credit — tends to be less about founder mindshare and more about sector credibility with management teams and intermediaries, which usually means fewer, longer, more analytical episodes. Private equity podcast production still runs on the same partner-time constraint, and the batch-recording answer to it is identical.",
      },
      {
        question: "Our partner is not a natural interviewer. Is that a problem?",
        answer:
          "Less than you would think, and it is mostly fixed by briefing rather than editing. A partner who knows the three questions worth asking performs very differently from one improvising. Genuine curiosity plus preparation beats broadcast polish with this audience — founders respond to an investor who is actually interested, not one who sounds like a presenter.",
      },
    ],
  },
  proof: {
    heading: "Adjacent work: senior-audience business shows",
    // NB: neither of these is a VC client. The intro says so explicitly.
    // Replace with a real fund case study when one exists — see [TK] below.
    caseStudySlugs: ["strategy-at-scale", "outthinkers"],
    intro:
      "Being straight about this: neither is a venture fund. Both are corporate-strategy shows for senior operators — Strategy at Scale interviews founders who have scaled, including Veeva co-founder Matt Wallach, and Outthinkers reaches Chief Strategy Officers at Fortune 500 companies. The transferable capability is senior guests, a busy host, and an audience that detects promotion immediately.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What a fund's podcast costs",
    body: "Podcast production for VC firms is priced on cadence, whether the show is filmed, how much guest research each episode needs, and clip volume. Guest research is a larger share of the cost here than on most shows, because the briefing is what protects the partner's time and the quality of the interview. Tell us the shape and we will send a figure.",
    caveat:
      "Funds usually work on a monthly arrangement built around batch recording days rather than paying per episode.",
  },
  faqs: [
    {
      question: "Why do venture capital firms produce podcasts?",
      answer:
        "To be the fund a specific founder thinks of first. It is a relationship and positioning instrument rather than a reach play — a few hundred listeners who are all building in your thesis is a better outcome than a large general audience. It also gives partners a non-transactional reason to talk to founders they would like to back.",
    },
    {
      question: "How much partner time does a VC podcast take?",
      answer:
        "Roughly the recording hour plus five minutes reading a brief, if production and guest research are handled externally. Batch recording several episodes in one block is the structural change that matters most — it turns a fortnightly show into a handful of calendar commitments a year instead of a recurring weekly ask.",
    },
    {
      question: "Should a VC podcast feature portfolio companies?",
      answer:
        "Occasionally, not structurally. Founders read promotional content instantly, and a partner interviewing their own portfolio about how well things are going costs credibility with exactly the audience the show exists to reach. Portfolio founders work when the subject is a hard problem handled honestly, including what went wrong.",
    },
    {
      question: "Can a podcast generate deal flow for a fund?",
      answer:
        "Indirectly, and rarely in a way you can attribute cleanly. The mechanism is that a founder arrives at a first meeting already understanding how the fund thinks, which shows up as warmer inbound and faster first conversations. Anyone offering attribution on this is overstating what is measurable.",
    },
    {
      question: "How often should a VC firm publish episodes?",
      answer:
        "Fortnightly suits most funds better than weekly. It fits batch recording, it is sustainable through a quarter when a partner is closing a fund, and consistency matters far more than frequency with this audience. A reliable fortnightly show beats a weekly one with three-week gaps.",
    },
    {
      question: "Who should own the podcast inside the firm?",
      answer:
        "The platform or marketing team, with a partner as host. Platform owns the process, the guest pipeline and the approvals; the partner supplies the hour and the point of view. Shows owned entirely by a partner tend to stall, because there is nobody whose job it is to keep them moving.",
    },
    {
      question: "What do you need from us to produce a fund's show?",
      answer:
        "Guest names and introductions, a recording block in the diary, and one person on the platform side who can approve an episode. Guest booking stays with you because outreach from a partner converts and outreach from a production company does not. Everything after the recording sits with us.",
    },
    {
      question: "Do you need a specialist VC podcast agency?",
      answer:
        "Not necessarily — what matters is whether the producer designs around partner time and understands a founder audience. A VC podcast agency that cannot explain how batch recording protects the schedule is offering positioning rather than process. Judge on the workflow, not the sector label on the website.",
    },
  ],
  cta: {
    heading: "Talk to us about your fund's show",
    body: "Tell us which founders you want the show to reach, how much of a partner's calendar you can realistically protect, and whether portfolio companies are in scope. We will come back with a format and a schedule built around the partner-time constraint.",
    buttonLabel: "Discuss a fund podcast",
    note: "We reply within one working day.",
  },
  internalLinks: {
    caseStudySlug: "strategy-at-scale",
    blogSlug: "how-to-book-great-podcast-guests",
    relatedServiceSlug: "executive-podcast-production-service",
  },
  formTag: "vc-podcast-production",
  schemaServiceName: "Podcast production for VC firms",
};
