import type { ServicePage } from "@/types/service-page";

/**
 * The content-multiplication page. Structurally about ASSET VOLUME.
 *
 * The argument is arithmetic: one recorded hour already contains a month of
 * content, and B2B marketing teams are commissioning that content separately
 * while the recording sits unused. The page should feel like a supply-chain
 * argument, not a creative one.
 *
 * Split enforced against podcast-production-for-saas-companies.ts:
 *   - That page argues WHY a SaaS company should have a show, and mentions
 *     repurposing only as one output among several.
 *   - This page assumes the show exists — possibly produced by someone else
 *     entirely — and sells only the downstream asset production. It is
 *     buyable standalone, and that is the point of it existing separately.
 *
 * TODO (JAMES): the per-episode asset counts below describe the standard
 * package shape. Confirm the clip and quote-card volumes match what you
 * actually want to commit to before this goes live — they are the numbers a
 * client will hold you to.
 */
export const podcastRepurposingServiceB2b: ServicePage = {
  slug: "podcast-repurposing-service-b2b",
  primaryKeyword: "podcast repurposing service for B2B",
  supportingKeywords: [
    "podcast content repurposing",
    "turn podcast episodes into social content",
    "b2b podcast clips service",
    "podcast to linkedin content",
  ],
  buyer:
    "B2B content lead or social manager who already has a podcast and a content calendar, and is commissioning both separately. Thinks in assets per month and channel coverage.",
  seo: {
    title: "Podcast Repurposing for B2B",
    metaDescription:
      "A podcast repurposing service for B2B teams: one episode becomes clips, audiograms, LinkedIn posts, a newsletter and an article. Assets, not just audio.",
  },
  h1: "Podcast repurposing service for B2B",
  subheadline:
    "One recorded hour already contains a month of content. We turn each episode into the clips, posts and written assets your calendar is currently commissioning separately.",
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
    heading: "The arithmetic most B2B teams are getting wrong",
    body: [
      "Somewhere in your content calendar this month there is a LinkedIn cadence to fill, a newsletter to write, and probably a blog post nobody is excited about. Somewhere else in your organisation there is a sixty-minute recording of a genuine expert answering exactly the questions your buyers ask, and it is being used once.",
      "That is the whole problem. A single episode contains, on any reasonable count, four to six clip-worthy moments, half a dozen quotable lines, enough structure for an article, and a week or two of social posts. Most teams extract one audiogram and move on, then commission the rest from scratch.",
      "The reason is not ignorance — it is that repurposing is unglamorous, fiddly, sequential work. Finding the good sixty seconds means re-listening to sixty minutes. Cutting it vertically, captioning it, checking the caption timing, exporting for three platforms with different specs, then writing the post around it. Per asset it is twenty minutes. Per episode it is an afternoon. Per month it is a role nobody has.",
      "So it gets deprioritised behind things with deadlines, and the most expensive content you produce — an hour of a senior expert's time — generates one asset instead of fifteen.",
    ],
  },
  included: {
    heading: "What you get from each episode",
    intro:
      "A podcast repurposing service for B2B has to deliver against a calendar, so this arrives as a standard package per episode — a full set on a known date rather than assets drip-fed through the week. Volumes are agreed up front so your calendar can be planned against them.",
    items: [
      {
        title: "Short-form vertical clips",
        detail:
          "Cut to moments that genuinely stand alone — a complete thought with a hook and a payoff — rather than arbitrary sixty-second slices. Burned-in captions, formatted for LinkedIn, Instagram, TikTok and YouTube Shorts.",
      },
      {
        title: "Audiograms for audio-only moments",
        detail:
          "Waveform-animated clips with captions for the moments where the audio is strong but the video isn't usable, which is most remote-recorded shows.",
      },
      {
        title: "Written LinkedIn posts",
        detail:
          "Drafted around each clip in your house voice, with the argument made in the post itself rather than 'link in comments'. Posts are what makes a clip travel; a clip posted bare underperforms.",
      },
      {
        title: "Quote cards",
        detail:
          "Branded static graphics for the lines worth reading rather than watching. Cheap to produce, and the format that still performs when someone is scrolling without sound.",
      },
      {
        title: "A newsletter section",
        detail:
          "A written summary of the episode's actual argument, sized to drop into your existing newsletter without a rewrite.",
      },
      {
        title: "A blog article from the transcript",
        detail:
          "The episode restructured as a readable article — not a transcript dump — so the ideas are indexable as text and the page can rank for questions the audio never could.",
      },
      {
        title: "A timestamped insight pull",
        detail:
          "The three or four most reusable moments flagged with timestamps, so your team can lift them into decks, enablement or paid without re-listening to the episode.",
      },
      {
        title: "Guest-ready assets",
        detail:
          "A clip and a graphic packaged for the guest to post themselves. A guest sharing to their own network is the cheapest distribution in the entire programme.",
      },
    ],
    footnote:
      "We do not run your posting schedule, manage your social accounts or buy your paid distribution. We produce the assets; your team publishes them.",
  },
  howItWorks: {
    heading: "How repurposing runs each month",
    intro:
      "Built to fit a content calendar, which means predictable volume on a predictable date.",
    steps: [
      {
        title: "1. Brand and voice setup",
        body: "Fonts, colours, caption styling, clip templates, and how your written posts should sound. Done once so every asset afterwards is on-brand without review.",
      },
      {
        title: "2. Agree volume and channel mix",
        body: "How many clips, whether you want quote cards, whether the newsletter and article are in scope. This sets what lands each month, so your calendar can be built against a known number rather than a hopeful one.",
      },
      {
        title: "3. You send the episode",
        body: "Audio and video, plus the transcript if you already have one. If we're also producing the show, this step doesn't exist — the assets come with the episode.",
      },
      {
        title: "4. Selection pass",
        body: "We go through the full episode and pick the moments that actually stand alone. This is the step that determines whether the clips perform, and it's the one most automated tools get wrong — an algorithm finds a loud moment, not a complete argument.",
      },
      {
        title: "5. Production",
        body: "Clips cut and captioned, graphics built, posts and written assets drafted. Everything formatted per platform rather than one export resized four times.",
      },
      {
        title: "6. Delivery as a batch",
        body: "The full set lands together in your Drive or Dropbox, named and organised so a social manager can schedule a fortnight in one sitting rather than chasing assets.",
      },
    ],
  },
  objections: {
    heading: "What content leads ask before buying this",
    items: [
      {
        question: "Why not use an AI clipping tool for this?",
        answer:
          "For the mechanical part — cutting, captioning, resizing — the tools are genuinely good and getting better. What they do badly is selection: they find moments that are loud or fast rather than moments that contain a complete argument. A clip that starts mid-thought gets scrolled past regardless of how well it's captioned. The judgement is the part worth paying for; the cutting isn't.",
      },
      {
        question: "Our episodes are quite dry. Is there enough in them?",
        answer:
          "Usually more than teams expect, though the assets look different. A dry expert interview may not produce a viral clip, but it produces excellent quote cards, a genuinely useful newsletter section and an article that ranks — because the value is in the substance rather than the delivery. If an episode really doesn't contain reusable material we'll tell you rather than pad the count.",
      },
      {
        question: "Can you do this if someone else produces our podcast?",
        answer:
          "Yes, and a good share of this work is exactly that. We take finished episodes from whoever produces them and handle only the downstream assets. Your existing producer doesn't need to be involved or replaced, and we don't need access to your raw multitrack.",
      },
      {
        question: "How do we know which assets are actually working?",
        answer:
          "That reporting sits in your channel analytics rather than with us, and we'd rather be honest about that than claim attribution we can't see. What we do is look at what performed and weight the next batch's selection towards it — if three-minute explainer clips outperform thirty-second hooks for your audience, the mix changes.",
      },
      {
        question: "Is this worth it if we only publish twice a month?",
        answer:
          "Often more worth it, proportionally. Two episodes producing a fortnight of assets each covers most of a month's calendar, whereas a weekly show generates more material than most B2B teams can distribute anyway. Low episode volume is an argument for repurposing harder, not less.",
      },
      {
        question: "Why does this need to be B2B-specific?",
        answer:
          "Because the assets that work are different ones. A podcast repurposing service for B2B is optimising for LinkedIn and a newsletter read by professionals, where a clip earns attention by making an argument a peer would find useful — not by being fast or funny. The selection criteria, the post copy and the channel mix all follow from that, and consumer-tuned repurposing tends to produce clips that perform nowhere your buyers actually are.",
      },
      {
        question: "Who writes the posts — do they sound like us?",
        answer:
          "We draft them, calibrated during setup against posts you've already published and told us worked. First month usually takes some correcting, after which the voice settles. Your team keeps editing rights on everything, and plenty of clients treat the drafts as a strong first pass rather than final copy — that's a perfectly reasonable way to use them.",
      },
    ],
  },
  proof: {
    heading: "B2B shows we cut assets from",
    caseStudySlugs: ["outthinkers", "strategy-at-scale"],
    intro:
      "Expert-interview shows aimed at senior professional audiences, where the clips have to carry an argument rather than a punchline.",
  },
  pricing: {
    mode: "enquiry",
    heading: "What repurposing costs",
    body: "A podcast repurposing service for B2B is priced per episode against the asset volume you want — the number of clips is usually the variable that moves it most. Tell us your episode length, monthly volume and which written assets you need, and we will send a per-episode and monthly figure.",
    caveat:
      "Cheaper per episode when bundled with production, since the selection pass happens during the edit rather than as a separate listen.",
  },
  faqs: [
    {
      question: "What is a podcast repurposing service?",
      answer:
        "It turns each finished episode into the downstream assets a marketing team actually distributes: short vertical clips, audiograms, quote cards, written social posts, a newsletter section and a blog article. The recording stays the same; what changes is how many usable pieces of content come out of it.",
    },
    {
      question: "How many assets can you get from one podcast episode?",
      answer:
        "A typical hour-long B2B interview yields four to six clips that genuinely stand alone, several quote cards, a newsletter section, an article, and written posts to carry the clips. Volumes are agreed up front so your content calendar can be planned against a known number.",
    },
    {
      question: "Can you turn podcast episodes into LinkedIn content?",
      answer:
        "That's the main use case for B2B. Each clip comes with a drafted post in your house voice that makes the argument in the post itself rather than pointing at a link — which is what determines whether a clip travels on LinkedIn. Quote cards cover the sound-off scroll.",
    },
    {
      question: "Do you repurpose podcasts you didn't produce?",
      answer:
        "Yes, and it's a common arrangement. Send finished episodes from whoever produces your show and we handle only the asset production. There's no need to move production or give us access to raw multitrack files — we work from the published episode.",
    },
    {
      question: "How do you choose which moments to clip?",
      answer:
        "By listening to the whole episode and finding complete arguments — a hook, a point, a payoff — rather than the loudest or fastest sections. That selection judgement is the difference between clips that get watched and clips that get scrolled past, and it's the part automated tools reliably get wrong.",
    },
    {
      question: "How quickly do assets arrive after an episode?",
      answer:
        "As a batch on an agreed turnaround from receiving the episode, delivered together rather than drip-fed. Batching matters for planning: a social manager can schedule a fortnight in one sitting instead of chasing individual files through the week.",
    },
    {
      question: "Do you post the content for us?",
      answer:
        "No — we produce the assets, your team publishes them. Posting from your own accounts performs better, keeps you in control of timing around campaigns, and means we're not another dependency in your publishing chain. Everything arrives named and organised for scheduling.",
    },
  ],
  cta: {
    heading: "Get more out of the episodes you already have",
    body: "Tell us how many episodes you publish a month and which channels you're feeding. We will come back with an asset package and a per-episode figure.",
    buttonLabel: "Get a repurposing quote",
    note: "Works whether or not we produce your show.",
  },
  internalLinks: {
    caseStudySlug: "outthinkers",
    blogSlug: "repurpose-podcast-content",
    relatedServiceSlug: "podcast-production-for-saas-companies",
  },
  formTag: "b2b-repurposing",
  schemaServiceName: "Podcast repurposing service for B2B",
};
