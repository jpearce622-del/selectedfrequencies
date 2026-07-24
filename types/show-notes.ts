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
  showNotes: string;
}

export interface ShowNotesResult {
  transcript: string;
  showNotes: string;
}

export type FlowStep = "upload" | "email" | "processing" | "results";
