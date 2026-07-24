"use client";

import type { ProcessingStage } from "@/types/show-notes";

interface ProcessingStateProps {
  stage: ProcessingStage;
  message?: string;
}

const stages: { key: ProcessingStage; label: string }[] = [
  { key: "checking", label: "Checking request" },
  { key: "transcribing", label: "Transcribing audio" },
  { key: "generating", label: "Writing show notes" },
];

function stageIndex(stage: ProcessingStage): number {
  return stages.findIndex((s) => s.key === stage);
}

export function ProcessingState({ stage, message }: ProcessingStateProps) {
  const current = stageIndex(stage);

  return (
    <div className="mx-auto max-w-sm space-y-8 text-center">
      {/* Animated icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-fog">
        <svg
          className="h-8 w-8 animate-spin text-accent"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>

      <div className="space-y-1.5">
        <p className="text-base font-medium text-foreground">
          {message ?? "Processing your episode…"}
        </p>
        <p className="text-sm text-muted">
          Don&rsquo;t close this tab — results appear here when ready.
        </p>
      </div>

      {/* Stage progress */}
      <div className="space-y-3">
        {stages.map((s, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div
              key={s.key}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                active
                  ? "bg-accent/8 text-foreground"
                  : done
                  ? "text-muted"
                  : "text-muted/50"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  done
                    ? "bg-accent text-white"
                    : active
                    ? "border-2 border-accent text-accent"
                    : "border-2 border-border text-border"
                }`}
              >
                {done ? "✓" : i + 1}
              </span>
              {s.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
