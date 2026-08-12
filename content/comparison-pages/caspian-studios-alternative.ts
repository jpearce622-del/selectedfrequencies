import type { ComparisonPage } from "@/types/comparison-page";

/**
 * Caspian Studios alternative.
 *
 * Facts from caspianstudios.com, read 2026-08-12:
 *   - Positioning, quoted: "#1 video podcast production for B2B"
 *   - Approach, quoted: blends "revenue-driving tactics with Hollywood
 *     storytelling"
 *   - Describes its offer as "Webby award-winning Content-as-a-Service"
 *   - States "100+ series in production"
 *   - Formats offered: interview, blended narrative, scripted narrative,
 *     business fiction podcasts and video series
 *   - "Founder Brand Content Sprint" described as a 3-week programme
 *   - Also offers guest booking, multi-use content (cover art, show notes,
 *     social video, newsletters, websites) and paid growth marketing
 *   - Clients shown: Intel, Snowflake, Slack, Dell Technologies, IBM, Zoom,
 *     Okta, Asana, Oracle, Brex, Twilio, DocuSign
 *   - Pricing NOT published
 *   - Company size, location and founding year NOT stated on the homepage
 *
 * The core contrast here is scope of craft, not quality: they do scripted
 * and narrative video work that we do not attempt. The concession section
 * says so directly, because a reader who wants business-fiction video should
 * not be talked into buying an audio edit.
 *
 * [TK: verify — Caspian's location, team size and founding year. None stated
 * on the homepage as read on 2026-08-12; table says "Not published".]
 * [TK: verify — which Webby award and in what year. The site references
 * "Webby award-winning" without specifying; not restated as a specific award
 * on this page for that reason.]
 */
export const caspianStudiosAlternative: ComparisonPage = {
  slug: "caspian-studios-alternative",
  kind: "alternative",
  primaryKeyword: "Caspian Studios alternative",
  supportingKeywords: [
    "Caspian Studios vs Selected Frequencies",
    "Caspian Studios pricing",
    "alternatives to Caspian Studios",
    "Caspian Studios competitors",
    "B2B video podcast agency",
  ],
  seo: {
    title: "Caspian Studios Alternative",
    metaDescription:
      "An honest Caspian Studios alternative comparison: where their video and narrative work wins, where a leaner audio-first studio fits, and how to choose.",
  },
  h1: "Caspian Studios alternative: an honest comparison",
  answerFirst:
    "Caspian Studios make high-production-value video for B2B — including scripted narrative and business-fiction formats that almost nobody else attempts — for clients like Intel, Snowflake, Slack, IBM and Oracle. If you want a show that looks like a produced series rather than a recorded conversation, that is a specialist craft and we do not offer it. If your show is an interview format where the audio is the product and the video exists to generate clips, that is a much smaller job and a much smaller bill. Most people searching for a Caspian Studios alternative are producing conversations, not series.",
  disclosure:
    "We're Selected Frequencies, a production studio, and we're one of the two options compared here — so factor that in. Everything about Caspian comes from their own site. Where their capability genuinely exceeds ours, which is most of the video and narrative work, this page says so plainly rather than reframing it.",
  companies: [
    {
      name: "Caspian Studios",
      url: "https://caspianstudios.com/",
      positioning:
        "Describes itself as \"#1 video podcast production for B2B\", blending in its own words \"revenue-driving tactics with Hollywood storytelling\", and offers what it calls Webby award-winning Content-as-a-Service. States 100+ series in production, spanning interview, blended narrative, scripted narrative and business-fiction formats.",
      strength:
        "Production values and format range that very few B2B studios can match. Scripted narrative and business fiction are genuinely difficult — they need writers, sound design, direction and a story structure that holds across a series — and Caspian sell them as standard offerings alongside straight video podcasts. With Intel, Snowflake, Slack, IBM, Zoom, Oracle and Twilio on the client list, they operate at a tier where the show is a flagship brand asset rather than a content line item.",
      tradeOff:
        "It's built for video-first, high-production work. If your show is an audio interview where video exists mainly to cut clips from, you're buying a capability far beyond what the format needs — and pricing isn't published, so establishing whether you're in range takes a call.",
      sources: [
        { label: "caspianstudios.com homepage", url: "https://caspianstudios.com/", checkedOn: "2026-08-12" },
      ],
    },
    {
      name: "Selected Frequencies",
      url: "https://selectedfrequencies.com/",
      positioning:
        "A production studio working primarily on interview and conversation formats. Audio-first, with video produced to a solid standard where the show is filmed — edit, mastering, show notes, chapters, transcripts, clips and publishing, on a published rate card.",
      strength:
        "Doing the ordinary thing extremely consistently, at a price you can see before you call. £110 to £335 per episode by tier, no minimum term, and direct access to the editor. Proven across long catalogues: 248 episodes for The Genetics Podcast, 204 weekly without a gap for The Bitcoin Collective.",
      tradeOff:
        "We don't do scripted narrative, sound design, business fiction or studio-grade multi-camera cinematography. Our video is competent and clean rather than cinematic, and for a flagship brand series that isn't enough.",
      sources: [
        { label: "Our published rate card", url: "https://selectedfrequencies.com/services", checkedOn: "2026-08-12" },
        { label: "Our case studies", url: "https://selectedfrequencies.com/work", checkedOn: "2026-08-12" },
      ],
    },
  ],
  comparisonRows: [
    { label: "Primary medium", values: ["Video-first", "Audio-first, with video where the show is filmed"] },
    { label: "Scripted / narrative formats", values: ["Yes — a stated specialism", "No"] },
    { label: "Business fiction / drama", values: ["Yes", "No"] },
    { label: "Interview-format production", values: ["Yes", "Yes"] },
    { label: "Sound design & original scoring", values: ["Yes", "Music beds and branded intros only"] },
    { label: "Published prices", values: ["Not published", "Yes — £110, £165 and £335 per episode by tier"] },
    { label: "Minimum commitment", values: ["Not published", "None. Per-episode, or monthly with notice"] },
    { label: "Guest booking", values: ["Yes", "No"] },
    { label: "Paid growth marketing", values: ["Yes", "No"] },
    { label: "Multi-use content & repurposing", values: ["Yes — cover art, social video, newsletters, websites", "Show notes, chapters, transcripts and clips"] },
    { label: "Team size", values: ["Not published", "Small studio — direct with the editor"] },
    { label: "Typical client", values: ["Enterprise tech brands", "Founder-led, B2B and technical shows already running"] },
  ],
  competitorWins: {
    heading: "Where Caspian Studios is the better choice",
    body: [
      "This is the most clear-cut of the comparisons on this site, because the capability gap is real and specific.",
      "**If you want a scripted or narrative series, they can make it and we can't.** Business fiction, blended narrative, scripted documentary — these need a writer, a director, sound design, original scoring and a story arc that holds a listener across eight episodes. It's a different discipline from editing an interview, and it is not something you should buy from a studio that doesn't do it. Caspian list these as standard offerings. If that's what you want, stop reading and go and talk to them.",
      "**If the show is a flagship brand asset, production values matter more than unit cost.** A series carrying Intel or Oracle's name in front of a large audience is judged against television, not against other podcasts. At that level the difference between competent and cinematic is the whole point, and the per-episode rate is close to irrelevant next to the brand risk of it looking cheap.",
      "**If video is the primary medium rather than a byproduct,** their whole operation is built around that. Our video is clean and well-cut; it is not multi-camera cinematography with colour grading and motion design. Being straight about that is more useful to you than a paragraph explaining why it doesn't matter, because for some shows it plainly does.",
      "**They also cover the surrounding content properly.** Cover art, social video, newsletters and websites as multi-use content from the same production means one team producing everything the series needs, in a consistent visual language. Assembling that from a production studio plus a designer plus a video freelancer is cheaper and noticeably less coherent.",
      "**And their client list tells you something real.** Intel, Snowflake, Slack, Dell, IBM, Zoom, Okta, Asana, Oracle, Brex, Twilio and DocuSign is an enterprise tech roster. Those companies have procurement processes, brand guidelines and legal review, and an agency that operates smoothly inside them has capabilities — insurance, contracting, security review, account structure — that a small studio simply doesn't need to have and therefore doesn't.",
    ],
  },
  ourCase: {
    heading: "Where a leaner audio-first studio is the better choice",
    body: [
      "The case is narrow and it applies to a lot of shows: **most B2B podcasts are conversations, and conversations don't need cinema.**",
      "**If the audio is the product, video spend has a ceiling on its return.** Plenty of well-performing B2B shows are two people talking, filmed adequately so clips can be cut. Beyond a certain point, better cinematography doesn't make the argument more convincing or the guest more insightful — it just costs more. Working out whether your show is in that category is worth ten minutes before you brief anyone.",
      "**You can see our price now.** £110 per episode for audio editing, £165 for audio and video, £335 for full production with show notes, artwork, clips and publishing. Multi-camera adds £95 an episode. That's the whole rate card. You can budget a year of production in a minute, which is not possible with any agency on this page that doesn't publish.",
      "**Smaller scope means faster turnaround and easier changes.** A produced series has a long pipeline by necessity — scripting, recording, sound design, review. An interview show we produce goes from raw files to published episode in an agreed number of working days, and changing the format is a conversation rather than a re-scoping exercise.",
      "**Long-run consistency is our strongest suit.** Where we're genuinely good is holding a standard across hundreds of episodes: 248 for The Genetics Podcast, 204 weekly without a gap for The Bitcoin Collective. A flagship series is judged on peak quality; a long-running interview show is judged on whether episode 200 is as good as episode 12. Those need different things from a producer, and we're built for the second.",
      "**And you keep everything.** Your hosting, your feed, your raw recordings, your show spec. No minimum term. For a show that might change shape next year, that flexibility is worth more than production value it doesn't need.",
    ],
  },
  scenarios: [
    {
      situation: "You want an eight-part scripted series with sound design, as a flagship brand campaign.",
      recommendation: "Caspian Studios",
      why: "Scripted narrative is their specialism and outside what we do. We'd decline this rather than attempt it.",
    },
    {
      situation: "You film a weekly two-person interview show and want good clips from it.",
      recommendation: "Selected Frequencies",
      why: "That's a well-defined production job at £165–£335 an episode. Cinematic capability wouldn't change the outcome for this format.",
    },
    {
      situation: "Your show is technical — research, regulation, deep subject matter — and accuracy is the main risk.",
      recommendation: "Selected Frequencies",
      why: "The risk here is a mis-cut qualifying clause changing what a claim says, not production values. We've built specific edit standards for that in life sciences and fintech.",
    },
  ],
  checklist: {
    heading: "What to ask before buying video podcast production",
    intro:
      "Video is the single largest cost variable in any podcast quote, so it's worth being precise about what you're getting.",
    items: [
      "How many cameras, and is switching between them included or extra?",
      "Is colour grading included, and will episodes match visually across a season?",
      "What exactly do \"social clips\" mean here — a vertical trim with captions, or a designed asset with b-roll, titles and music?",
      "Who handles the YouTube channel itself — thumbnails, titles, descriptions, chapters — as distinct from delivering the video file?",
      "Is the video edit priced per episode or per finished minute?",
      "If we drop video after six months, what does the audio-only price become?",
      "What's the turnaround in working days, and does video extend it?",
      "How many revision rounds cover both the audio and the video cut?",
      "Do we get the project files and raw footage, or only the finished exports?",
      "Can I see a full episode — not a showreel — from a client with a similar format and budget?",
    ],
  },
  faqs: [
    {
      question: "Is Caspian Studios any good?",
      answer:
        "Their public work suggests a high standard — they state 100+ series in production, describe themselves as Webby award-winning, and list Intel, Snowflake, Slack, IBM and Oracle among clients. They're specialists in video and narrative formats, which is a genuinely difficult craft. Fit depends on whether your show needs that level of production.",
    },
    {
      question: "How much does Caspian Studios cost?",
      answer:
        "They don't publish pricing. Given the enterprise client base and the scripted formats they offer, engagements are likely to sit well above per-episode production rates, but we won't put a number on someone else's work. Our own rates are published, from £110 to £335 per episode.",
    },
    {
      question: "Do I need cinematic video for a B2B podcast?",
      answer:
        "Usually not. If your show is an interview and video exists mainly to generate clips, adequate filming with a good edit does the job. Cinematic production earns its cost when the series is a flagship brand asset judged against television rather than against other podcasts.",
    },
    {
      question: "What's a good Caspian Studios alternative for interview shows?",
      answer:
        "A studio built around conversation formats rather than produced series. Look for published per-episode rates, competent multi-camera handling if you film, clip production included, and no minimum term. You'd be trading cinematography you don't need for a substantially lower unit cost.",
    },
    {
      question: "How much does video add to podcast production costs?",
      answer:
        "Roughly double, because it's effectively a second full edit that has to work visually as well as audibly. Multi-camera adds more again — syncing, angle switching and colour matching. Our own rates go from £110 audio-only to £165 with video, with multi-camera at £95 extra per episode.",
    },
    {
      question: "Can a small studio handle multi-camera recording?",
      answer:
        "Yes — syncing, switching and colour matching are standard craft work rather than a scale problem. What a small studio typically won't provide is a crewed shoot with lighting, direction and set design. If your format needs those, you want a video-first agency rather than a podcast producer.",
    },
    {
      question: "Should our podcast be scripted or conversational?",
      answer:
        "Conversational suits most B2B shows: it's cheaper, faster, and expert guests carry it. Scripted works when the story is the point and you have budget for writing and sound design. The failure mode is choosing scripted for prestige and discovering it needs a writer you didn't budget for.",
    },
  ],
  verifiedOn: "2026-08-12",
  internalLinks: {
    servicePageSlugs: [
      "done-for-you-podcast-production",
      "podcast-post-production-services",
      "podcast-production-for-saas-companies",
    ],
    blogSlugs: [
      "how-much-does-podcast-production-cost-per-episode",
      "what-does-a-podcast-producer-actually-do",
      "best-podcast-production-companies-for-b2b",
    ],
    caseStudySlugs: ["bitcoin-and-the-long-game", "genetics-podcast"],
    comparisonSlugs: ["lower-street-alternative", "fame-alternative"],
  },
  cta: {
    heading: "Find out what your format actually needs",
    body: "Tell us how you record and what you do with the video, and we'll price it — and tell you if the format would genuinely benefit from a video-first agency instead. That's a short conversation and it saves an expensive mistake.",
    buttonLabel: "Price your show",
  },
  formTag: "caspian-alternative",
};
