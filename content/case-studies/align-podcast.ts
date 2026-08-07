import type { CaseStudy } from "@/types/case-study";

// Show details confirmed from the show's own site (alignpodcast.com →
// alignbreathing.com/podcast), July 2026: host, positioning line, the
// 1M+ monthly viewers figure, and the named guests below are all the
// show's own public claims rather than ours.
//
// On the service scope: an earlier note here called this "the studio's
// standard archive-era list". That was wrong — the standard list, carried by
// thirteen other archive entries, is "Full episode edit / Sound cleanup &
// mixing / Episode description writing". This one is bespoke and was written
// to match the prose above.
//
// It has been left as-is rather than swapped to the standard list, because
// every item here is editing craft — the constituent parts of a full edit of
// a two-person interview show — and the show is in the archive strip, so the
// editing unambiguously happened. Adopting the standard list would have meant
// adding "Episode description writing", a separate deliverable that may never
// have been part of this engagement. Under a heading that reads "What we do"
// on a page naming a real client, the narrower claim is the correct one.
//
// Outcome and testimonial stay omitted rather than invented.
export const alignPodcast: CaseStudy = {
  slug: "align-podcast",
  clientName: "Aaron Alexander",
  showName: "The Align Podcast",
  hostName: "Aaron Alexander",
  metaDescription:
    "How The Align Podcast — Aaron Alexander's movement, breath and consciousness show — is edited to hold long, unhurried conversations together.",
  oneLiner:
    "Aaron Alexander's long-form show where ancient wisdom meets modern science — movement, breath, psychology and consciousness, with guests including Wim Hof, Gabor Maté and Bruce Lipton.",
  description: `The Align Podcast sits in a genuinely awkward place for an editor, and that is exactly what makes it interesting to work on. Aaron Alexander describes the show as the place "where ancient wisdom meets modern science to help you understand yourself", and it means it literally. One week the conversation is a physiologist explaining what sunlight does to the body; the next it is a physicist arguing for simulation theory, or a psychologist unpacking how childhood shapes the nervous system. Guests have included Wim Hof, Gabor Maté, Bruce Lipton, Anita Moorjani and Tom Campbell. The show reports over a million monthly viewers across YouTube, Spotify and Apple Podcasts.

A roster like that creates a specific editorial problem. These are not interviews that can be tightened into soundbites. The value in a Gabor Maté conversation is in the pauses — the moment where he stops, reconsiders, and comes back with something more precise than his first answer. Cut for pace the way you would a news segment and you strip out the thinking, which is the entire product. But leave everything and a two-hour episode sags in the middle and loses the listener somewhere around minute forty.

The work, then, is knowing which silences are load-bearing. A pause before a difficult admission stays. A pause because someone lost their thread, or a guest's connection stuttered, goes. That distinction cannot be automated and it cannot be delegated to a noise gate — it needs somebody actually listening to the conversation as a conversation, deciding each time whether the space is doing work or wasting the listener's attention.

The second challenge is consistency across wildly different source material. A show booking guests of this profile records however the guest can record: a well-treated home studio one week, a hotel room on a press tour the next, a laptop microphone in a kitchen the week after. Aaron's own audio stays constant; everything arriving from the other side of the conversation does not. Left alone, that difference is jarring — the listener physically adjusts their volume when the guest speaks, and every adjustment is a small invitation to stop listening.

Levelling that gap is unglamorous work. It means matching tonal balance between two people recorded on completely different equipment in different rooms, controlling the dynamics so a guest who leans in and out of their microphone stays intelligible throughout, and mastering the finished episode so it sits at the same loudness as the last one. Done well, none of it is noticeable. The listener simply hears two people in the same room, and the guest's setup stops being a variable they have to think about.

For a show whose subject matter is attention, breath, and being present, that mattered more than usual. A listener following a conversation about the nervous system should not be pulled out of it by a level jump or a room tone change. The technical work exists to keep them inside the idea — which, on a show about understanding yourself, is the whole point.`,
  services: [
    "Full episode edit",
    "Sound cleanup & mixing",
    "Guest audio matching & levelling",
    "Mastering for platform delivery",
  ],
  links: [
    { label: "Website", url: "https://alignbreathing.com/podcast" },
  ],
  logo: "/images/clients/aaron-alexander.jpeg",
  logoAlt: "The Align Podcast cover art",
  themeColor: "#3D4A3A",
  featured: false,
  category: "archive",
};
