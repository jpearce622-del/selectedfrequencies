"use client";

import { useState, useCallback } from "react";
import type { FlowStep, ProcessingStage, ShowNotesResult } from "@/types/show-notes";
import { UploadZone } from "./UploadZone";
import { EmailGate } from "./EmailGate";
import { ProcessingState } from "./ProcessingState";
import { ResultsView } from "./ResultsView";

interface StreamEvent {
  event: string;
  data: Record<string, unknown>;
}

function parseSSEChunk(chunk: string): StreamEvent[] {
  const events: StreamEvent[] = [];
  const messages = chunk.split("\n\n").filter(Boolean);

  for (const message of messages) {
    const lines = message.split("\n");
    let event = "message";
    let dataStr = "";

    for (const line of lines) {
      if (line.startsWith("event: ")) event = line.slice(7).trim();
      if (line.startsWith("data: ")) dataStr = line.slice(6).trim();
    }

    if (dataStr) {
      try {
        events.push({ event, data: JSON.parse(dataStr) });
      } catch {
        // malformed — skip
      }
    }
  }

  return events;
}

export function ShowNotesFlow() {
  const [step, setStep] = useState<FlowStep>("upload");
  const [blobUrl, setBlobUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [stage, setStage] = useState<ProcessingStage>("idle");
  const [stageMessage, setStageMessage] = useState<string | undefined>();
  const [result, setResult] = useState<ShowNotesResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUploadComplete = useCallback((url: string, name: string) => {
    setBlobUrl(url);
    setFileName(name);
    setStep("email");
  }, []);

  const handleEmailSubmit = useCallback(
    async (email: string) => {
      setStep("processing");
      setStage("checking");
      setError(null);

      try {
        const response = await fetch("/api/tools/show-notes/process", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blobUrl, email }),
        });

        if (!response.body) {
          setError("No response from server. Please try again.");
          setStep("email");
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            if (!part.trim()) continue;
            const parsed = parseSSEChunk(part + "\n\n");

            for (const { event, data } of parsed) {
              if (event === "status") {
                const s = data.stage as ProcessingStage;
                setStage(s);
                setStageMessage(data.message as string | undefined);
              } else if (event === "complete") {
                setResult({
                  transcript: data.transcript as string,
                  showNotes: data.showNotes as string,
                });
                setStage("complete");
                setStep("results");
              } else if (event === "error") {
                setError(data.message as string);
                setStage("error");
                setStep("email");
              }
            }
          }
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Network error. Please try again."
        );
        setStage("error");
        setStep("email");
      }
    },
    [blobUrl]
  );

  const handleStartOver = useCallback(() => {
    setBlobUrl("");
    setFileName("");
    setStage("idle");
    setStageMessage(undefined);
    setResult(null);
    setError(null);
    setStep("upload");
  }, []);

  return (
    <div>
      {/* Step indicator (hidden on results) */}
      {step !== "results" && (
        <div className="mb-8 flex items-center justify-center gap-2 text-xs font-medium text-muted">
          {(["upload", "email", "processing"] as FlowStep[]).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              {i > 0 && <div className="h-px w-6 bg-border" />}
              <span
                className={
                  step === s
                    ? "text-accent"
                    : ["upload", "email", "processing"].indexOf(step) > i
                    ? "text-foreground"
                    : "text-muted/50"
                }
              >
                {i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Error banner */}
      {error && step === "email" && (
        <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Step content */}
      {step === "upload" && (
        <UploadZone onUploadComplete={handleUploadComplete} />
      )}

      {step === "email" && (
        <EmailGate fileName={fileName} onSubmit={handleEmailSubmit} />
      )}

      {step === "processing" && (
        <ProcessingState stage={stage} message={stageMessage} />
      )}

      {step === "results" && result && (
        <ResultsView
          transcript={result.transcript}
          showNotes={result.showNotes}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}
