import type { BlogPost } from "@/types/blog";
import { shaunaMartin } from "@/content/authors";

export const podcastAudioQualityGuide: BlogPost = {
  slug: "podcast-audio-quality-guide",
  title: "Podcast Audio Quality: A Producer's Guide to Sounding Broadcast-Ready",
  metaDescription:
    "How to make your podcast sound professional — room and mic technique, the gear that matters, the signal chain, editing, and the loudness target most shows get wrong.",
  publishedAt: "2026-07-02",
  category: "Production",
  author: shaunaMartin,
  readingTime: "11 min read",
  coverImage: {
    src: "/images/blog/audio-hero.svg",
    alt: "An abstract orange audio waveform on a deep navy background",
  },
  intro:
    "Listeners forgive a lot. They'll forgive a stumble, a tangent, even a slightly boring middle. The one thing they won't forgive is audio that's tiring to listen to — the boxy echo of a hard room, a guest who sounds like they're calling from inside a tin, levels that lurch from a whisper to a shout. Bad audio doesn't just sound amateur; it quietly signals that the ideas might be amateur too.\n\nGood sound is a trust signal. The good news is that broadcast-ready audio is mostly a matter of getting a few fundamentals right, in order — not of spending thousands on gear. This guide walks through the whole chain, from the room you record in to the loudness target you export at.",
  keyTakeaways: [
    "Quality is won at capture — a quiet, soft-furnished room and good mic technique beat any plugin.",
    "One decent USB or dynamic mic per person matters more than an expensive interface.",
    "Every stage of the signal chain can only preserve what the previous one captured.",
    "Edit for the ear, not the eye — pacing and clean cuts matter more than removing every breath.",
    "Master to around −16 LUFS (stereo), the widely recommended podcast loudness target, with true peaks under −1 dBTP.",
  ],
  sections: [
    {
      id: "quality-is-trust",
      heading: "Why audio quality is a trust signal",
      body:
        "Human ears are unforgiving of effort. When audio is muddy, echoey, or uneven, the brain works harder to decode it — and that fatigue gets subconsciously attributed to the content, not the recording. People don't think “poor microphone technique”; they think “I'm not enjoying this” and leave.\n\nThat's why audio quality shows up directly in your analytics as consumption and retention. A clean, warm, consistent sound is the baseline that lets everything else — the ideas, the guest, the story — actually land. It's also the cheapest credibility you can buy: the fundamentals below cost far less than the audience you lose without them.",
    },
    {
      id: "capture",
      heading: "It all starts at capture",
      body:
        "No plugin can un-echo a room. The single biggest jump in quality most shows can make is recording in a space that doesn't fight them.\n\n**Tame the room.** Echo comes from sound bouncing off hard, parallel surfaces. Soft furnishings absorb it: record in a room with a carpet, curtains, a sofa, and bookshelves, and avoid bare kitchens and glass-walled offices. In a pinch, a walk-in wardrobe full of clothes is one of the best-sounding rooms in most homes.\n\n**Get the mic technique right.** Speak across the mic, not straight into it, to avoid plosive pops on “p” and “b” sounds — a pop filter helps too. Keep a consistent distance, ideally a hand-span away, so your level doesn't wander. Closer is generally better: it raises your voice relative to the room, which means less echo and less background noise.\n\nA great edit can rescue a mediocre take. It cannot rescue a bad room. Get this stage right and everything downstream becomes easier.",
    },
    {
      id: "gear",
      heading: "The gear that actually matters",
      body:
        "Gear matters far less than the internet would have you believe, and the priorities are counter-intuitive.\n\n**The microphone is the one thing worth caring about.** A dynamic microphone (the kind that rejects room sound and background noise) is far more forgiving in an untreated space than a sensitive condenser. Popular, genuinely good options run from budget USB mics to broadcast staples, and any of them will sound professional in a decent room.\n\n**Headphones, always.** Everyone recording should wear closed-back headphones so no one talks over each other and so you catch problems live rather than in the edit.\n\n**Don't over-invest in the interface.** For most shows a simple USB microphone, or one audio interface if you've gone the dynamic-mic route, is plenty. Spending the mic budget on the interface instead is the most common gear mistake we see.\n\n**Recording remote guests?** Use a tool that records each speaker on a separate local track (Riverside, Zencastr, and similar). Separate tracks let you fix one person's audio without touching the other's — the difference between a salvageable episode and a compromised one.",
    },
    {
      id: "signal-chain",
      heading: "The signal chain, stage by stage",
      image: {
        src: "/images/blog/audio-signal-chain.svg",
        alt: "A diagram of the podcast signal chain: capture, interface, record, edit, and master, connected in sequence",
        caption: "Each stage can only preserve what the one before it captured.",
      },
      body:
        "Think of your audio as passing through a chain, where each link can only preserve or degrade what it receives — never recover what was lost earlier.\n\n**Capture** is the microphone and the room, as above. **Interface** converts the mic's signal to digital; set your input gain so peaks land comfortably below the maximum, leaving headroom, rather than pushing hot and clipping. **Record** into any competent DAW — the software matters less than getting clean levels into it. **Edit** shapes pacing and removes problems. **Master** brings the finished episode to a consistent, correct loudness for every platform.\n\nThe order is the lesson. A brilliant master can't fix a clipped recording; a clean capture makes every later stage almost effortless. Invest your attention front-to-back, and spend the most of it at the start.",
    },
    {
      id: "editing",
      heading: "Editing: the invisible craft",
      body:
        "The best edits are the ones you never notice. The goal isn't to sterilise the conversation — it's to keep it moving and remove anything that pulls a listener out.\n\n**Cut for pacing.** Trim the slow start, tighten long-winded setups, and lift the dead weight from the middle. Most conversations improve when the first two minutes are the tightest of the episode.\n\n**Leave it human.** Resist the urge to remove every breath and “um.” A little natural texture keeps the show feeling like real people talking; a ruthlessly gated, breathless edit sounds unsettling and robotic.\n\n**Process gently and in order:** clean up obvious noise, then even out the level differences between speakers so no one is dramatically louder than the other, then a light touch of EQ to add warmth or remove boxiness. Subtlety wins — if a listener can hear the processing, it's too much.\n\nThis is the stage that eats the most hours, and the one where experience shows most. It's also, not coincidentally, the part most hosts are happiest to hand off.",
    },
    {
      id: "loudness",
      heading: "Loudness: the number most shows get wrong",
      body:
        "Here's the fundamental most independent shows miss. Loudness is not measured by the peaks on a waveform — it's measured in **LUFS** (Loudness Units Full Scale), which model how loud audio actually *feels* to a human over time.\n\nThe widely recommended target for podcasts, echoed by the Audio Engineering Society's streaming loudness guidance and Apple's own specifications, is around **−16 LUFS integrated for stereo** files (and roughly −19 LUFS for mono), with **true peaks kept under −1 dBTP** to avoid distortion on playback. Hit that target and your show sits at a comfortable, consistent volume next to professional podcasts and radio — listeners never have to lunge for the volume dial between your show and the next.\n\nMaster too quiet and you sound thin and amateurish; master too loud and streaming platforms may turn you down anyway, often making you sound worse. Any competent loudness meter (many are free) will show you your integrated LUFS and true peak, and most modern editors can normalise to a target automatically. It's a five-minute step that separates shows that sound professional from shows that don't.",
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes that quietly ruin good audio",
      body:
        "Even shows with decent gear routinely lose quality to a handful of avoidable errors. Watch for these:\n\n**Recording too far from the mic.** Sit back a foot or two and you invite the whole room in — echo, keyboard clicks, traffic. Close and consistent almost always wins.\n\n**Monitoring on speakers instead of headphones.** Without headphones you can't hear the problems as they happen, and you risk echo bleeding between mics. Everyone wears them, every time.\n\n**Chasing loudness with a limiter.** Slamming the audio to make it “louder” crushes the life out of a voice and adds distortion. Set a correct loudness target instead and let the master do the work.\n\n**Over-gating and over-processing.** Aggressive noise removal leaves a voice sounding underwater and swallows the natural breaths that make speech feel human. Gentle and transparent beats heavy every time.\n\n**Ignoring the guest's setup.** Your host chain can be flawless and the episode still sounds bad if the guest is on laptop speakers in a tiled bathroom. Send a one-line setup note in advance — headphones, a quiet soft room, close to the mic — and record separate tracks so you can treat their audio independently.\n\nNone of these is exotic. They're just the small, boring disciplines that separate audio that sounds handled from audio that sounds hopeful.",
    },
    {
      id: "checklist",
      heading: "A quick pre-publish checklist",
      body:
        "Before an episode goes out, run through this:\n\n- Recorded in a soft, quiet room, mics a hand-span away, everyone on headphones.\n- Each speaker on a separate track (especially for remote guests).\n- Levels even between speakers; no one dramatically louder than anyone else.\n- Obvious noise, clicks, and long dead air removed — but breaths and personality left in.\n- The first two minutes are the tightest in the episode.\n- Mastered to ≈ −16 LUFS (stereo) with true peak under −1 dBTP.\n- Exported as MP3 at 128 kbps or higher for spoken word.\n- Listened back end-to-end on the kind of cheap earbuds most of your audience actually uses.\n\nGet those right and your show will sound broadcast-ready — which, for a listener deciding whether to trust you, is most of the battle. If working through that chain every week is more than you want to take on, it's exactly the work we handle for the shows we produce.",
    },
  ],
  references: [
    {
      label: "Audio Engineering Society — loudness recommendation for streaming and file playback (TD1004)",
      url: "https://www.aes.org/technical/documents/AESTD1004_1_15_10.pdf",
    },
    {
      label: "Apple Podcasts for Creators — audio requirements and best practices",
      url: "https://podcasters.apple.com/",
    },
    {
      label: "EBU R 128 — loudness normalisation standard",
      url: "https://tech.ebu.ch/publications/r128/",
    },
    {
      label: "Transom — microphones, technique, and audio craft",
      url: "https://transom.org/",
    },
  ],
};
