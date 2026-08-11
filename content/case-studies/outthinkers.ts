import type { CaseStudy } from "@/types/case-study";

// Host, guests, and platform links researched via public web search
// (outthinker.com / open.spotify.com / podcasts.apple.com), July 2026.
// Cover art supplied by James (the show's real artwork).
//
// Cadence corrected from "weekly" to bi-weekly on James's instruction,
// August 2026. The old value was researched rather than confirmed.
//
// SERVICE SCOPE AND ENGAGEMENT HISTORY — supplied directly by James,
// August 2026, and no longer a placeholder. In his words: they came to us
// initially for editing and eventually moved to full video production,
// show notes, thumbnails, artwork, distribution and clips.
//
// Everything in the "how the engagement grew" section traces to that one
// sentence. What it does NOT claim, because James didn't say and it isn't
// ours to invent: how long the engagement has run, when each service was
// added, episode counts, download or view figures, or any performance
// result. If you want any of those on the page, get them from James first.
//
// The clip: James supplied the file and its published URL. Its content is
// described from watching it — vertical 9:16, burned-in animated captions,
// Outthinkers branding, an LHH episode-partner lockup, an animated title
// card. The guest is deliberately not named: they aren't identified in the
// clip and guessing at a real person's identity is not worth the risk.
export const outthinkers: CaseStudy = {
  slug: "outthinkers",
  clientName: "Outthinkers Network",
  showName: "Outthinkers",
  hostName: "Kaihan Krippendorff",
  oneLiner:
    "Kaihan Krippendorff's bi-weekly growth-strategy show has hosted Eric Ries (The Lean Startup), Coach's Lew Frankfort, and Experience Economy co-author Joe Pine — reaching a global network of Chief Strategy and Innovation Officers from Fortune 500 companies. A show built for that room can't sound like it was cut in a hurry.",
  metaDescription:
    "How Selected Frequencies grew from editing Outthinkers to full video production, show notes, thumbnails, artwork, distribution and short-form clips.",
  description: `Outthinkers is Kaihan Krippendorff's bi-weekly growth-strategy show, and the audience is the reason every production decision on it is what it is. It reaches a global network of Chief Strategy and Innovation Officers at Fortune 500 companies — people who are, professionally, paid to spot the difference between a real idea and a well-packaged one. Guests have included Eric Ries of The Lean Startup, Coach's Lew Frankfort, and Joe Pine, co-author of The Experience Economy.

That room sets the standard. A show made for senior operators cannot sound like it was cut in a hurry, because the audience's whole skill is noticing when something has been rushed. Production quality here is not decoration. It is the thing that signals the ideas inside are worth an hour of a very expensive diary.

The editorial instinct on a strategy show also runs against the usual advice. The reflex in podcast editing is to tighten, because tightening normally improves things. But senior people qualify their statements deliberately, and the qualifications are often the substance rather than padding around it. Cutting a hedge to improve pace can turn a careful position into a firmer claim than the speaker actually made. On a show where guests are describing how real companies make decisions, that is not a rough edit — it is a misrepresentation of a named executive, and it is the sort of thing that quietly stops the next guest saying yes.

So the rule on this show is that anything ambiguous stays, and anything removed has to leave the meaning exactly where it was. Pace is bought back everywhere else: in the openings, in the handling of tangents that genuinely go nowhere, and in the pauses that are doing no work.

A bi-weekly cadence shapes the rest of it. Every fortnight is frequent enough to hold an audience's habit and demand a real production pipeline, and spaced enough that each episode can carry a full set of assets rather than a rushed upload. It means roughly twenty-six episodes a year, each of which has to be right, and none of which can slip — a fortnightly show that misses its slot is immediately obvious in a way a weekly one is not.`,
  engagement: `Outthinkers came to us for editing. That is how most of the work we do starts, and it is the right way round: editing is the part with the clearest brief and the fastest feedback loop, so it is where a producer either earns trust or doesn't. On a show whose guests are describing how real companies make decisions, earning it means proving you can tighten an episode without ever changing what somebody said.

Over time that scope grew into the full production. Today the show comes to us as raw recordings and leaves as a finished, published fortnightly episode with everything around it: the full video production, the show notes, the custom thumbnails, the artwork, the distribution, and the short-form clips.

The reason that consolidation matters is not convenience, though it is more convenient. It is that the assets stop being separate jobs done by separate people who never hear each other's work. The person who cut the episode is the person who knows which forty seconds will actually work as a clip, because they heard the moment land in the room. The thumbnail and the title come out of the same understanding of what the episode is about. The show notes reflect the episode as it was finally cut rather than as it was recorded. When those are split across three suppliers, they drift, and the drift is visible to exactly the kind of audience this show has.

It also removes the coordination load from the client, which on a fortnightly cadence is not a small thing. A show that publishes twenty-six times a year has twenty-six deadlines, each one requiring audio, video, notes, artwork, thumbnails and clips to arrive together. Handing that over as one pipeline rather than six briefs is most of the reason the schedule holds.

Video changed the shape of the work most. An audio edit produces one asset. A video production produces a landscape episode, a set of vertical clips, thumbnails sized for two different platforms, and artwork that has to work at full size and at the size of a fingernail — all from the same session, all needing to look like the same show. The clip below is an example of what comes out of the end of that.`,
  // Ordered as the engagement actually grew — editing first, everything
  // else added over time. Sourced from James, August 2026.
  services: [
    "Full episode editing",
    "Full video production",
    "Show notes",
    "Custom thumbnails",
    "Artwork",
    "Distribution",
    "Short-form clips for social",
  ],
  video: {
    src: "/video/outthinkers-clip.mp4",
    poster: "/images/work/outthinkers-clip-poster.jpg",
    posterAlt:
      "A vertical Outthinkers clip with burned-in animated captions and the show's branding, discussing the future of junior developer roles",
    aspect: "9/16",
    caption:
      "An advanced clip cut from a full episode. Vertical 9:16 for Shorts, Reels and TikTok, with word-level animated captions timed to the speech, an animated title card, the show's branding, and the episode partner's lockup placed so it reads without covering the speaker. This is the part of the pipeline most shows either skip or hand to a template — a clip like this is a produced asset in its own right, not a cropped excerpt with subtitles bolted on.",
    sourceUrl: "https://youtube.com/shorts/YClAa_ETyc4",
    sourceLabel: "Watch it on YouTube",
  },
  outcome:
    "Guests have included Eric Ries, Coach's Lew Frankfort, and Experience Economy co-author Joe Pine — part of Outthinker's global network of Chief Strategy and Innovation Officers.",
  links: [
    { label: "Spotify", url: "https://open.spotify.com/show/0P9pQn0uYEXE7bk4FHJrLy" },
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/outthinkers/id1561681365" },
  ],
  logo: "/images/clients/outthinkers.jpeg", // real show artwork
  logoAlt: "Outthinkers cover art",
  themeColor: "#2E8FA6", // sampled from the show's teal accent
  featured: true,
  category: "flagship",
};
