import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Lower Street alternative.
 *
 * All Lower Street facts below come from lowerstreet.co, read 2026-08-12,
 * and are cited in `sources`. Nothing here is drawn from a third-party
 * listicle — that is where most wrong "facts" about agencies originate.
 *
 * Facts used, and where they come from:
 *   - "Team of 30+ producers, creatives, and strategists" — homepage
 *   - "Based across the UK, Europe, US, and Canada" — homepage
 *   - Founded late 2016 by Harry Morton — homepage
 *   - Client names (Booking.com, Adobe, HPE, PepsiCo, Lloyds Bank, Morgan
 *     Stanley, BCG, Atlassian, Audible, Adyen) — homepage client list
 *   - Pricing NOT published. Site says "Rates depend on your individual
 *     needs" and characterises itself as probably "more than a freelance
 *     editor and less than a big agency" — that self-characterisation is
 *     quoted rather than paraphrased, because paraphrasing it would put
 *     words about price in their mouth.
 *   - Service list (narrative, enterprise, private podcasting, launch,
 *     promotion, video, editing, show notes, consulting) — services nav
 *
 * [TK: verify — Lower Street's acquisition of Pacific Content (widely
 * reported as 2024) is NOT stated on their homepage and is therefore not
 * claimed on this page. Confirm from their own announcement before adding.]
 * [TK: verify — no minimum engagement or contract term is published. If they
 * later publish one, the table row must change from "Not published".]
 *
 * The concession section is real: for a buyer starting from a blank page,
 * Lower Street is genuinely the better choice and this page says so twice.
 * Do not soften that — it is the reason the page is credible.
 */
export const lowerStreetAlternative: ComparisonPage = {
  slug: "lower-street-alternative",
  kind: "alternative",
  primaryKeyword: "Lower Street alternative",
  supportingKeywords: [
    "Lower Street vs Selected Frequencies",
    "Lower Street pricing",
    "alternatives to Lower Street",
    "Lower Street competitors",
    "is Lower Street worth it",
  ],
  seo: {
    title: "Lower Street Alternative",
    metaDescription:
      "An honest Lower Street alternative comparison: where Lower Street is the better choice, where a smaller studio wins, and how to decide between them.",
  },
  h1: "Lower Street alternative: an honest comparison",
  answerFirst:
    "If you need a podcast designed from a blank page — format, narrative structure, sonic branding, a strategy team and an enterprise-grade client roster to justify the spend internally — Lower Street is very likely the better choice, and this page will not try to talk you out of it. If your show already exists and what you actually need is for it to be produced to a high standard every week, at a published price, without an account-management layer, that is a different purchase and it is the one we sell. Most people searching for a Lower Street alternative are in the second group.",
  disclosure:
    "We're Selected Frequencies, a podcast production studio — so we have an obvious interest in how this comparison reads. We've written it from Lower Street's own public material, we've said plainly where they're the better choice, and we've listed the things we don't do at all. If you spot something inaccurate, tell us and we'll fix it.",
  companies: [
    {
      name: "Lower Street",
      url: "https://lowerstreet.co/",
      positioning:
        "Describes itself as offering \"next-level podcast production services for ambitious companies\" — a full-service branded podcast agency covering strategy, production and growth, with stated specialisms in narrative, enterprise and private podcasting.",
      strength:
        "Story-led, narrative production at a standard very few agencies reach, backed by a client list — Booking.com, Adobe, HPE, PepsiCo, Lloyds Bank, Morgan Stanley, BCG, Atlassian — that makes them an easy internal recommendation at a large company. If your show needs to be a properly designed piece of media rather than a well-edited conversation, this is the capability you're looking for.",
      tradeOff:
        "The model is a programme rather than a service line: strategy, production and growth are bought together. That is exactly right when you're starting from nothing, and it means a buyer who already knows their format is paying for capability they won't use. Pricing isn't published, so you need a call before you know whether you're in range.",
      sources: [
        { label: "lowerstreet.co homepage", url: "https://lowerstreet.co/", checkedOn: "2026-08-12" },
        { label: "Lower Street services", url: "https://lowerstreet.co/services/narrative-podcasting", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Selected Frequencies",
      url: "https://selectedfrequencies.com/",
      positioning:
        "A small production studio. We produce and finish shows that already have a host, a format and an audience — audio and video edit, mastering, show notes, chapters, transcripts, clips and publishing — on a published rate card.",
      strength:
        "Consistency across a long catalogue, and direct access to the person editing your show. We produce The Genetics Podcast for Sano Genetics (248 episodes) and The Bitcoin Collective (204 episodes, weekly since 2021 without a gap, 4.8/5 on Apple Podcasts).",
      tradeOff:
        "We're small, and we don't do strategy, guest booking, sonic branding or paid distribution. If your show needs designing rather than producing, we're the wrong supplier and we'll say so on the first call rather than take the work.",
      sources: [
        { label: "Our published rate card", url: "https://selectedfrequencies.com/services", checkedOn: "2026-08-12" },
        { label: "Our case studies", url: "https://selectedfrequencies.com/work", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Pricing model", values: ["Not published — quoted per engagement", "Published per-episode rates, or a monthly retainer"] },
    { label: "Published prices", values: ["No. States \"rates depend on your individual needs\"", "Yes — £110, £165 and £335 per episode by tier"] },
    { label: "Minimum commitment", values: ["Not published", "None. Per-episode, or monthly with a notice period"] },
    { label: "Strategy & format design", values: ["Yes — a core part of the offer", "No"] },
    { label: "Narrative / scripted production", values: ["Yes — a stated specialism", "No"] },
    { label: "Guest booking", values: ["Not stated as a service", "No"] },
    { label: "Video production", values: ["Yes", "Yes"] },
    { label: "Clips & repurposing", values: ["Yes, via promotion services", "Yes"] },
    { label: "Private / internal podcasts", values: ["Yes — a stated specialism", "Yes"] },
    { label: "Team size", values: ["\"Team of 30+ producers, creatives, and strategists\"", "Small studio — you work with the editor directly"] },
    { label: "Based", values: ["UK, Europe, US and Canada — remote", "Northern Ireland — remote"] },
    { label: "Typical client", values: ["Enterprise and large brands", "Founder-led, B2B and technical shows already running"] },
  ],
  competitorWins: {
    heading: "Where Lower Street is the better choice",
    body: [
      "Start here, because for a large share of the people reading this it settles the question.",
      "**If you're starting from a blank page, they're better.** Designing a show properly — deciding what it's actually for, who it's aimed at, what format carries the idea, what it sounds like in the first fifteen seconds — is a genuine discipline, and it's the part most companies get wrong on their own. Lower Street sell that as a core capability. We don't sell it at all. A buyer who hires us with no format in mind will get well-produced episodes of a show that hasn't worked out what it is, which is a waste of everyone's money.",
      "**If you want narrative or scripted work, they're better.** A documentary-style series with a script, archive, sound design and a producer shaping a story arc is a different craft from editing an interview well. Lower Street list narrative podcasting as a specialism. We don't do it, and a studio that claims every capability is telling you something about how carefully it describes the rest.",
      "**If you're buying inside a large organisation, they're easier to justify.** A team of 30+ with Adobe, PepsiCo, Morgan Stanley, BCG and Lloyds Bank on the roster de-risks an internal recommendation in a way a small studio simply cannot. That's not a marketing point — procurement, legal review, and the question \"who else have you done this for at our scale?\" are real obstacles, and they clear them. If your show is a board-visible investment, that matters more than a per-episode rate.",
      "**If you need capacity guarantees across multiple shows,** a 30-person team absorbs a launch, a live event and a schedule change in the same month. A small studio can't do all three at once, and it would be dishonest to suggest otherwise.",
      "There's also a fair point to make about their pricing. Not publishing rates is often a red flag, but Lower Street do at least characterise where they sit — describing themselves as probably \"more than a freelance editor and less than a big agency\". That's more candour than most agencies offer, and it's a useful sentence for working out quickly whether you're in the right conversation.",
    ],
  },
  ourCase: {
    heading: "Where a smaller studio is the better choice",
    body: [
      "The case for us is narrower, and it rests on one distinction: **whether your show needs designing or producing.**",
      "**Your format is settled and the work is now execution.** If you know who hosts it, who it's for, how long it runs and what it sounds like, the strategy component of an agency programme is capability you're paying for and not using. What you need instead is for the edit to be right, the loudness consistent, the notes written, the clips cut and the episode published — on time, indefinitely. That's the entire job we do.",
      "**You want to know the price before the call.** Our rates are published: £110 per episode for audio editing, £165 for audio and video, £335 for full production including show notes, artwork, clips and publishing. You can work out your annual cost in about a minute without speaking to anyone. Six of the nine agencies we looked at while researching this page publish nothing at all, and a discovery call is an expensive way to find out you're not in range.",
      "**You want the person editing your show, not an account manager.** At a 30-person agency the person who sells you the work is rarely the person who does it — that's not a criticism, it's how agencies function at scale. With us there's no relay: you send a note about episode forty and the person who cut it reads it. The trade is that there's nobody to escalate to, which is a real limitation if that matters to you.",
      "**You need consistency across a long run, in a technical subject.** This is where we're genuinely strong and it's evidenced rather than asserted. The Genetics Podcast has run to 248 episodes with guests from Cambridge researchers to biotech CEOs; The Bitcoin Collective has published weekly since 2021 without a gap and holds 4.8/5 on Apple Podcasts. Episode 200 sitting correctly next to episode 12 is a process problem, and it's the one we've solved most often.",
      "**You want to start without committing.** No minimum term. Per-episode if you're testing, monthly if you're settled. For a show that might not exist in a year — which is most new shows — that flexibility is worth more than a lower unit price.",
    ],
  },
  scenarios: [
    {
      situation: "You're a Series B SaaS company with no podcast yet, and marketing has budget to launch one properly.",
      recommendation: "Lower Street",
      why: "You need the show designed before it's produced, and that's their core capability. Hiring a production studio at this stage means paying someone to execute a plan nobody has written.",
    },
    {
      situation: "You've published 60 episodes, your producer just left, and the schedule is starting to slip.",
      recommendation: "Selected Frequencies",
      why: "The format is proven and the problem is execution and continuity. Buying a strategy programme to fix a capacity gap is the expensive way to solve it.",
    },
    {
      situation: "You want a scripted, documentary-style series with sound design and archive.",
      recommendation: "Lower Street",
      why: "Narrative production is a stated specialism of theirs and not something we do. We'd turn this down.",
    },
  ],
  checklist: {
    heading: "What to ask either of us before you sign",
    intro:
      "Useful regardless of who you pick, and worth sending to every agency on your shortlist in the same email so the answers are comparable.",
    items: [
      "Who actually edits my show week to week, and is it the same person each time? Familiarity with your hosts compounds; losing it every month is a real quality cost.",
      "What's the turnaround in working days from receipt of files, and is that contractual or aspirational? \"Usually three to five days\" is a hope, not a commitment.",
      "How many revision rounds are included, and what does a further round cost? This is the single most common source of invoices clients didn't expect.",
      "What exactly do \"show notes\" and \"clips\" mean here — can I see a real example from a client show? Both phrases cover a threefold range of actual work.",
      "Is there a minimum term or notice period, and what happens if we pause for a quarter?",
      "Do I keep the project files, templates and raw recordings if I leave? Ask before you sign; the answer is different when you're a prospect.",
      "Which parts of this are subcontracted, and to whom?",
      "What's explicitly not included that I'm likely to need? An agency that names its exclusions is describing scope accurately.",
      "Can I hear a full section of an episode you've produced for a show like mine — same format, same length, similar recording conditions?",
      "If our format changes in six months, how does the arrangement change with it?",
    ],
  },
  faqs: [
    {
      question: "Is Lower Street any good?",
      answer:
        "By any reasonable reading of their public work, yes. They're a full-service branded podcast agency with a stated team of 30+ and a client list including Adobe, PepsiCo, Morgan Stanley and BCG, with narrative production as a specialism. The honest question isn't whether they're good — it's whether you need a full programme or just production.",
    },
    {
      question: "How much does Lower Street cost?",
      answer:
        "They don't publish prices. Their site says rates depend on your individual needs, and characterises the agency as probably costing more than a freelance editor and less than a big agency. You'd need a call to get a figure. Our own rates are published at £110 to £335 per episode by tier.",
    },
    {
      question: "What's the best Lower Street alternative for a show that already exists?",
      answer:
        "A production studio rather than another full-service agency. If your format, host and audience are settled, the strategy component of an agency programme is capability you won't use. Look for published rates, a named editor, a contractual turnaround and no minimum term.",
    },
    {
      question: "Do I need a full-service agency or just a producer?",
      answer:
        "Ask whether you need someone to tell you what your podcast should be, or to make the one you already have. Blank page means agency. Existing show with a slipping schedule means studio. Getting this wrong in either direction is where most of the money goes.",
    },
    {
      question: "Is a small studio risky compared with a 30-person agency?",
      answer:
        "There's a real trade. A larger team absorbs illness, holiday and simultaneous projects more easily, and is easier to justify in enterprise procurement. A small studio gives you direct access to the editor and lower cost. Which risk matters more depends on your organisation, not on podcasting.",
    },
    {
      question: "Does Lower Street do video podcasts?",
      answer:
        "Yes — video podcast production is listed among their services, alongside launch, promotion, private podcasting, editing, show notes and consulting. We produce video too, at £165 per episode for audio and video, or £335 for full production including artwork, clips and publishing.",
    },
    {
      question: "Can you take over a podcast mid-run from another agency?",
      answer:
        "Yes, and it's common. We listen through recent episodes, write a show spec that preserves whatever is already working, and pick up from the next recording. Listeners shouldn't notice a handover — if the show suddenly sounds different, something has gone wrong.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "done-for-you-podcast-production",
      "outsourced-podcast-production",
      "monthly-podcast-editing-retainer",
    ],
    blogSlugs: [
      "podcast-production-agency-pricing",
      "how-much-does-podcast-production-cost-per-episode",
      "best-podcast-production-companies-for-b2b",
    ],
    caseStudySlugs: ["genetics-podcast", "bitcoin-collective"],
    comparisonSlugs: ["rise25-alternative", "content-allies-alternative"],
  },
  cta: {
    heading: "See how we'd compare on your actual show",
    body: "Send us an episode and tell us what you're paying now. We'll tell you what we'd do differently, what it would cost, and — genuinely — if we think a full-service agency is the better fit for what you're trying to do.",
    buttonLabel: "Get an honest comparison",
  },
  formTag: "lower-street-alternative",
};
