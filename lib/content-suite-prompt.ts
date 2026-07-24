import type {
  Language,
  SectionKey,
  ShowConfig,
  ShowType,
  Tone,
} from "@/types/show-notes";

// Pure prompt assembly — NO SDK imports here so this module is safe to
// import from client components (the config panel needs the section
// metadata and defaults). All conditional logic is resolved here in code
// so the model never sees an unused branch or empty placeholder.

interface SectionMeta {
  key: SectionKey;
  /** Checkbox label in the config panel. */
  label: string;
  /** Exact heading the model must emit (after the "N) " prefix). */
  heading: string;
  /** Body of the section instruction. May depend on resolved vars. */
  body: (vars: ResolvedVars) => string;
}

interface ResolvedVars {
  disclaimerClause: string;
  tagSeeds: string;
  ukTerms: string;
}

// Canonical order — sections always appear in this order, renumbered
// sequentially over whichever ones are ticked.
export const SECTION_META: readonly SectionMeta[] = [
  {
    key: "titles",
    label: "Titles",
    heading: "YOUTUBE TITLES",
    body: () =>
      "5 titles. Each must be a curiosity gap, bold claim, or specific outcome taken from the transcript. 45–70 characters. Mark the strongest with ⭐.",
  },
  {
    key: "thumbnails",
    label: "Thumbnails",
    heading: "THUMBNAIL TEXT",
    body: () =>
      "5 options. 1–4 words, ALL CAPS. Each states a stake, number, or contrast from the episode. No arrows or symbols.",
  },
  {
    key: "description",
    label: "Description",
    heading: "YOUTUBE DESCRIPTION",
    body: (v) =>
      `120–180 words. Line 1–2: the single most compelling idea in the episode, stated as a hook. Then 4–6 bullet topics. Then: "Watch / listen here: [LINK]"${v.disclaimerClause}`,
  },
  {
    key: "chapters",
    label: "Chapters",
    heading: "CHAPTERS",
    body: () =>
      "5–10 chapters using the transcript's timestamps. Format per line: MM:SS Title (3–6 words). First chapter is 00:00.",
  },
  {
    key: "tags",
    label: "Tags",
    heading: "YOUTUBE TAGS",
    body: (v) =>
      `One comma-separated line, max 500 characters, no duplicates. Must include: ${v.tagSeeds}. Fill remaining space with topic search terms${v.ukTerms}. End with character count in brackets.`,
  },
  {
    key: "pinned",
    label: "Pinned Comment",
    heading: "PINNED COMMENT",
    body: () =>
      "1–2 sentences ending in a question viewers will answer, then 👇",
  },
  {
    key: "xpost",
    label: "X Post",
    heading: "X POST",
    body: () =>
      `Exactly 3 lines:
Line 1: the episode's most surprising fact/moment, stated bluntly with no setup.
Line 2: the twist or consequence.
Line 3: 🧵👇
Shape (do not copy content): "He sold everything in 2019. / Six years later that decision looks very different. / 🧵👇"`,
  },
  {
    key: "linkedin",
    label: "LinkedIn Post",
    heading: "LINKEDIN POST",
    body: () =>
      `120–180 words. Open mid-story with the episode's most interesting moment — never with a greeting, "I just", or the show name. Short sentences. Line break every 1–2 sentences. Build to why it matters, then end with: "Full episode in the comments 👇"
Shape: hook line → 2–3 short story beats → the insight → CTA line.`,
  },
] as const;

export const ALL_SECTION_KEYS: SectionKey[] = SECTION_META.map((s) => s.key);

export const DEFAULT_CONFIG: ShowConfig = {
  showName: "",
  hostName: "",
  guests: [],
  language: "UK",
  tone: "warm",
  showType: "general",
  sections: [...ALL_SECTION_KEYS],
};

const TONE_RULES: Record<Tone, string> = {
  punchy: "Tone: short punchy sentences, zero fluff.",
  warm: "Tone: natural and warm, like a smart friend explaining it.",
  educational: "Tone: clear and plain; assume an intelligent non-expert reader.",
  professional: "Tone: polished and credible but still human.",
};

const DISCLAIMERS: Record<ShowType, string> = {
  general: "",
  finance: '. Final line: "For education only — not financial advice."',
  health: '. Final line: "For information only — not medical advice."',
  legal: '. Final line: "For information only — not legal advice."',
};

function languageRule(language: Language): string {
  return language === "UK"
    ? "UK English spelling throughout (favour, colour, organisation)."
    : "US English spelling throughout (favor, color, organization).";
}

/** Assemble the full system prompt for the given show configuration. */
export function buildSystemPrompt(config: ShowConfig): string {
  const showName = config.showName.trim() || "this podcast";
  const hostName = config.hostName.trim() || "the host";
  const guests = config.guests.map((g) => g.trim()).filter(Boolean);
  const guestClause = guests.length ? `; guests: ${guests.join(" and ")}` : "";

  const vars: ResolvedVars = {
    disclaimerClause: DISCLAIMERS[config.showType],
    tagSeeds: [showName, hostName, ...guests].join(", "),
    ukTerms: config.language === "UK" ? " including UK-specific ones" : "",
  };

  // Fall back to all sections if somehow none are ticked.
  const ticked = config.sections.length ? config.sections : ALL_SECTION_KEYS;

  // Iterate canonical order, keep only ticked, renumber from 1.
  const blocks = SECTION_META.filter((s) => ticked.includes(s.key)).map(
    (s, i) => `${i + 1}) ${s.heading}\n${s.body(vars)}`
  );

  return `You produce a social content suite for the podcast ${showName} (host: ${hostName}${guestClause}) from the episode transcript the user provides.

HARD RULES
- Use only facts, names, stats and quotes found in the transcript. If a guest name or detail is unclear, write [UNCLEAR — check transcript] instead of guessing.
- ${languageRule(config.language)}
- ${TONE_RULES[config.tone]}
- Only placeholder links: [LINK]
- Never use: "operators", "sit tight", "great question", "insider insights", "delve", "game-changer", "in today's episode"
- Output ONLY the numbered sections below. No intro, no summary, no commentary before, between, or after sections.

SECTIONS — produce in this exact order with these exact headings:
${blocks.join("\n\n")}`;
}

/**
 * Light transcript clean-up before sending — the transcript is ~95% of the
 * input cost. Strips standalone filler tokens and collapses excess blank
 * lines. NEVER touches timestamps (only word tokens and whitespace).
 */
export function cleanTranscript(transcript: string): string {
  return transcript
    .replace(/\b(?:um+|uh+|erm+|hmm+|mm+)\b[,.]?/gi, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ +\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Output cap scaled to how many sections are requested: ~400 tokens per
 * section + 300 buffer, capped at 2500. The full 8-section suite fits
 * comfortably; the cap prevents runaway output charges.
 */
export function maxTokensFor(sectionCount: number): number {
  return Math.min(2500, 400 * Math.max(1, sectionCount) + 300);
}
