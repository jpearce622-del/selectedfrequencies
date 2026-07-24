export type ProcessingStage =
  | "idle"
  | "uploading"
  | "checking"
  | "transcribing"
  | "generating"
  | "complete"
  | "error";

export interface SSEEvent {
  stage: ProcessingStage;
  message?: string;
}

export interface SSECompleteEvent {
  transcript: string;
  content: string;
}

export interface GenerationResult {
  transcript: string;
  /** Full model output — numbered sections, parsed client-side into cards. */
  content: string;
}

export type FlowStep = "upload" | "email" | "processing" | "results";

// ── Show configuration ──────────────────────────────────────────────

export type Language = "UK" | "US";

export type Tone = "punchy" | "warm" | "educational" | "professional";

export type ShowType = "general" | "finance" | "health" | "legal";

export type SectionKey =
  | "titles"
  | "thumbnails"
  | "description"
  | "chapters"
  | "tags"
  | "pinned"
  | "xpost"
  | "linkedin";

export interface ShowConfig {
  showName: string;
  hostName: string;
  /** One entry per guest; length is the guest count (0–4). */
  guests: string[];
  language: Language;
  tone: Tone;
  showType: ShowType;
  /** Ticked sections, stored in canonical order. */
  sections: SectionKey[];
}
