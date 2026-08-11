import type { ServicePage } from "@/types/service-page";

/**
 * The agency page. Structurally about CONFIDENTIALITY AND MARGIN.
 *
 * The argument runs: you have demand you can't service, hiring an editor for
 * one client is bad maths, and the thing actually stopping you outsourcing is
 * the fear that your supplier becomes your competitor. Nothing here is about
 * launching a show or growing an audience — that is the B2B page's argument
 * and this page must never drift into it.
 *
 * Nothing about headcount is claimed anywhere. James is a solo producer; the
 * capacity argument is deliberately framed as "capacity without headcount for
 * YOU", never "we have a bench".
 */
export const whiteLabelPodcastEditing: ServicePage = {
  slug: "white-label-podcast-editing",
  primaryKeyword: "white label podcast editing for agencies",
  supportingKeywords: [
    "white label podcast editing",
    "white label podcast production",
    "podcast editing for agencies",
    "outsourced podcast editing for agencies",
    "podcast editing partner for agencies",
  ],
  buyer:
    "Agency owner or ops lead who sells podcast production to clients but doesn't produce in-house. Thinks in margin, capacity and client risk.",
  seo: {
    title: "White Label Podcast Editing",
    metaDescription:
      "White label podcast editing for agencies. We work under your brand, never contact your clients, and give you a fixed per-episode cost to price against.",
  },
  h1: "White label podcast editing for agencies",
  subheadline:
    "You keep the client relationship and the margin. We do the edit, under your brand, and your client never knows we exist.",
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
    heading: "The position you're probably in",
    body: [
      "You've either sold podcast production to a client already, or you're being asked for it often enough that turning it down is starting to cost you. Neither is a comfortable place to be without a reliable editor.",
      "The maths on hiring is the problem. One client's show is nowhere near a full-time role, so a hire is only justified at three or four shows — but you can't confidently sell three or four shows without knowing you can deliver them. Freelancers solve the first half and introduce a new one: variable quality, variable availability, and a different person's judgement on each show.",
      "Meanwhile the work itself is unglamorous and specific. Levelling two speakers recorded on completely different equipment, deciding which pauses are load-bearing, getting loudness right so the episode sits correctly next to everything else in a listener's feed. It is a craft skill, it takes hours, and it is a poor use of a strategist's afternoon.",
      "The thing that actually stops most agencies outsourcing it, though, is none of the above. It's the worry that the supplier you hand the work to becomes the competitor who takes the client.",
    ],
  },
  included: {
    heading: "What you get",
    intro:
      "Delivered to your specification, in your naming convention, ready for you to hand to the client as your own work.",
    items: [
      {
        title: "Full episode edit",
        detail:
          "Content edit, sound cleanup, levelling between speakers, and mastering to platform loudness. Filler and false starts removed where they help, left where cutting them would make the speaker sound clipped.",
      },
      {
        title: "A written show spec, per show",
        detail:
          "Intro and outro placement, music beds, ad slots, how tightly to cut, what to leave alone. Written down once, then applied identically to every episode so the show doesn't drift.",
      },
      {
        title: "Video edit where the show is filmed",
        detail:
          "Multi-camera switching where there are multiple angles, framing and colour consistency, and export presets matched to wherever the client publishes.",
      },
      {
        title: "Show notes, chapters and timestamps",
        detail:
          "Chapters formatted for Apple, Spotify and YouTube, which each want them differently. Episode descriptions written to your house style rather than ours.",
      },
      {
        title: "Short-form clips",
        detail:
          "Vertical clips with burned-in captions, cut to moments that actually stand alone rather than arbitrary sixty-second slices.",
      },
      {
        title: "Delivery into your systems",
        detail:
          "Files land in your Drive, Dropbox or Frame.io in your folder structure and your file naming. Nothing arrives with our name on it.",
      },
    ],
    footnote:
      "No Selected Frequencies branding appears on any deliverable, in any file, or in any metadata. If you want us on a client call we'll join as part of your production team; if you'd rather we never appear, we never appear.",
  },
  howItWorks: {
    heading: "How the arrangement works",
    intro:
      "Designed so you aren't relaying messages between your client and your editor.",
    steps: [
      {
        title: "A paid sample edit first",
        body:
          "Send one real episode from a show you already run. You get it back edited to your spec, and you can put it in front of the client — or not — before committing anything. This is the step that answers the quality question properly, because a portfolio proves somebody edited something well once, and a sample proves they can edit yours.",
      },
      {
        title: "We write the show spec together",
        body:
          "One call per show to establish the rules: how tight, what stays, music, ad slots, delivery format, naming. That document becomes the reference, which is how consistency across a dozen episodes stops depending on anyone remembering.",
      },
      {
        title: "Files in, episodes out",
        body:
          "You drop raw recordings in a shared folder. Finished episodes come back to the same place on an agreed turnaround. You review before the client sees anything, so nothing reaches them without passing through you.",
      },
      {
        title: "Revisions go through you, in one round",
        body:
          "Notes come to us as a timestamped list, from you rather than from the client. One round is included on every episode. In practice, after the first two or three episodes on a show the spec is doing that work and revisions mostly stop.",
      },
    ],
  },
  objections: {
    heading: "The things agencies actually ask",
    items: [
      {
        question: "Will you approach my clients?",
        answer:
          "No. Not during the engagement and not after it ends. I'll sign your NDA and a non-solicit without amendments, and if you'd rather work under your own contract entirely, send it. There's no version of this business where taking one client from an agency is worth losing the agency, and it's a smaller business than people assume — that would be known about quickly. Your client never receives an email, a file, or a piece of metadata with my name on it.",
      },
      {
        question: "How do revisions work without me becoming a middleman?",
        answer:
          "The rule is that notes come from you, not from your client, and they come as timestamps rather than as feelings. \"3:40 cut the tangent about the conference, 12:05 the guest is quiet\" takes a minute to write and fixes in twenty. What you're avoiding is a three-way thread where the client says something sounds off, you relay it, and I guess. You stay the single point of contact and the actual coordination overhead stays small.",
      },
      {
        question: "What's the turnaround, and what if my client sends files late?",
        answer:
          "Standard turnaround is three working days from receiving usable files, and forty-eight hours where a show needs it. Late files are the normal state of podcast production rather than an exception, so the turnaround clock starts when files arrive, not on a fixed weekday. If a client habitually sends late and still expects a Monday release, tell me the release day and I'll work backwards from it — that's a scheduling problem with a solution, not a reason for anybody to be annoyed.",
      },
      {
        question: "Can you match a show's existing sound so the switch isn't audible?",
        answer:
          "Usually, yes, and it's a fair thing to be worried about — a listener noticing that an episode sounds different is exactly the outcome that makes you regret changing supplier. Send two or three recent episodes and I'll match the loudness, the tonal balance, the intro and outro treatment and the editing tightness. The sample edit is where you check that, and it's the reason the sample exists.",
      },
      {
        question: "How do you handle several shows with different specs?",
        answer:
          "Each show gets its own written spec, and the spec travels with the show rather than living in anyone's head. That's the mechanism that keeps a documentary-style interview show and a two-host banter show from converging on the same treatment, which is the usual failure when one editor picks up several shows at once.",
      },
      {
        question: "What if we want to scale up or stop?",
        answer:
          "Month to month, no minimum term, no notice period beyond finishing the episodes already in progress. Locking an agency into a retainer for capacity it might not need next quarter is a good way to be dropped at the first opportunity.",
      },
    ],
  },
  proof: {
    heading: "Work that's already running",
    intro:
      "[PLACEHOLDER — supply an agency reference or an anonymised white-label example. Note: none of the case studies below are white-label engagements, so this section currently shows direct client work as evidence of standard rather than as evidence of agency experience. If you have a white-label client who'd allow an anonymised mention (\"a UK content agency, three shows\"), that would be considerably stronger here.]",
    caseStudySlugs: ["outthinkers", "genetics-podcast"],
  },
  pricing: {
    mode: "enquiry",
    heading: "What it costs",
    body:
      "Agency rates are quoted per show rather than from a public rate card, because the variables that move the number — episode length, number of speakers, video or audio only, how much repurposing, how many shows — differ enough that a single figure would be wrong for almost everybody. What you get back is a fixed per-episode price, so you can set your own margin and quote your client with confidence rather than guessing at your cost base.",
    caveat:
      "[PLACEHOLDER — decide whether to publish a starting-from figure for agencies. There's a real argument either way: a number filters out the wrong enquiries before they reach you, and it also anchors the negotiation before you know the scope.]",
  },
  faqs: [
    {
      question: "What does white label podcast editing mean?",
      answer:
        "It means the editing is done by an outside producer but delivered as the agency's own work. Nothing carries the producer's branding, the client isn't told who did the work, and the agency keeps the relationship, the invoice and the margin. In practice it's the same arrangement agencies already use for design or development overflow, applied to audio.",
    },
    {
      question: "Will my client find out you edited their podcast?",
      answer:
        "Not from us. No branding appears on deliverables, in file metadata, or in any communication, and we don't publish client work from white-label engagements — including on our own case studies page. If you'd like us on a client call we'll join as part of your team; otherwise we stay invisible.",
    },
    {
      question: "Do you sign NDAs and non-solicit agreements?",
      answer:
        "Yes, both, and without asking for amendments. If your agency has its own contract you'd rather work under, send it over.",
    },
    {
      question: "How many shows can you take on at once?",
      answer:
        "That depends on what's already in the schedule, which is why the first conversation is a capacity conversation rather than a sales one. This is a deliberately small operation — you're hiring a producer, not a queue — so a straight answer about how much room there is beats an optimistic yes followed by slipping deadlines.",
    },
    {
      question: "Can you work with our existing brief and style guide?",
      answer:
        "Yes, and it's the preferred starting point. If you already have a documented house style for descriptions, clip formats and naming, that becomes the spec directly. If you don't, we write one per show during onboarding and you own it.",
    },
    {
      question: "What audio and video formats do you deliver in?",
      answer:
        "Whatever your pipeline expects. Typically WAV or MP3 at your chosen loudness target for audio, and ProRes or H.264 at your chosen resolution for video, with chapters supplied separately in the format each platform wants. If you have delivery specs, send them and they become the spec.",
    },
    {
      question: "Do you work with agencies outside the UK?",
      answer:
        "Yes. Most of the work runs asynchronously through a shared folder, so time zones matter less than you'd expect — files arriving overnight and coming back edited is the normal rhythm rather than a compromise. Invoicing is in pounds sterling.",
    },
  ],
  cta: {
    heading: "Send one episode",
    body:
      "The sensible first step is a paid sample edit on a real episode from a show you already run, not a call about capacity in the abstract. You'll know within one episode whether the quality is what you need, and you can decide whether to show it to the client or keep it to yourself.",
    buttonLabel: "Request a sample edit",
    note:
      "Or ask about current capacity before you pitch a show you're not sure you can deliver.",
  },
  internalLinks: {
    caseStudySlug: "outthinkers",
    blogSlug: "podcast-audio-quality-guide",
    // No cross-link to the B2B or thought-leadership pages. An agency owner
    // is not shopping for either, and the brief is right that a forced link
    // between them helps nobody.
  },
  formTag: "white-label-agency",
  schemaServiceName: "White label podcast editing for agencies",
};
