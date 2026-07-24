"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import type { ShowNotesResult } from "@/types/show-notes";

interface ResultsViewProps extends ShowNotesResult {
  onStartOver: () => void;
}

export function ResultsView({
  transcript,
  showNotes,
  onStartOver,
}: ResultsViewProps) {
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(showNotes).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleDownload() {
    const content = `SHOW NOTES\n${"=".repeat(60)}\n\n${showNotes}\n\n${"=".repeat(60)}\nFULL TRANSCRIPT\n${"=".repeat(60)}\n\n${transcript}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "show-notes.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      {/* Success header */}
      <div className="rounded-2xl bg-fog px-6 py-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Done
        </p>
        <p className="mt-1 text-base font-medium text-foreground">
          Your show notes are ready
        </p>
      </div>

      {/* Show notes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Show Notes
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {copied ? "Copied!" : "Copy text"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Download .txt
            </button>
          </div>
        </div>

        <div className="prose prose-sm max-w-none rounded-2xl border border-border bg-surface p-6 leading-relaxed">
          <ReactMarkdown>{showNotes}</ReactMarkdown>
        </div>
      </div>

      {/* Transcript (collapsible) */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => setTranscriptOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-xl border border-border px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          <span>Full transcript</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`shrink-0 transition-transform ${transcriptOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {transcriptOpen && (
          <div className="max-h-96 overflow-y-auto rounded-xl border border-border bg-fog p-5 text-sm leading-relaxed text-muted">
            {transcript}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-deep px-6 py-8 text-center text-background">
        <p className="font-display text-lg font-semibold tracking-tight">
          This is a single-pass draft.
        </p>
        <p className="mt-2 text-sm leading-relaxed opacity-80">
          The full production service includes polished show notes, chapter
          timestamps, transcript review, YouTube assets, and distribution-ready
          copy — every week, for every episode.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get ongoing production →
          </Link>
          <button
            type="button"
            onClick={onStartOver}
            className="text-sm font-medium opacity-60 hover:opacity-80"
          >
            Try another episode
          </button>
        </div>
      </div>
    </div>
  );
}
