"use client";

import { useState } from "react";
import Link from "next/link";
import type { GenerationResult } from "@/types/show-notes";

interface ResultsViewProps extends GenerationResult {
  onStartOver: () => void;
}

interface Section {
  heading: string;
  body: string;
}

// The model outputs numbered sections: "1) YOUTUBE TITLES\n<body>". Split on
// the numbered-heading pattern, then peel the heading off each chunk's first
// line. Reliable because the prompt fixes the exact format.
function parseSections(raw: string): Section[] {
  return raw
    .split(/^\s*\d+\)\s+/m)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const nl = chunk.indexOf("\n");
      const heading = (nl === -1 ? chunk : chunk.slice(0, nl)).trim();
      const body = nl === -1 ? "" : chunk.slice(nl + 1).trim();
      return { heading, body };
    });
}

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
      }
      className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

export function ResultsView({
  transcript,
  content,
  onStartOver,
}: ResultsViewProps) {
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const sections = parseSections(content);

  function handleDownload() {
    const body = `CONTENT SUITE\n${"=".repeat(60)}\n\n${content}\n\n${"=".repeat(60)}\nFULL TRANSCRIPT\n${"=".repeat(60)}\n\n${transcript}`;
    const blob = new Blob([body], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "content-suite.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      {/* Success header */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-fog px-6 py-5 sm:flex-row sm:text-left">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Done
          </p>
          <p className="mt-1 text-base font-medium text-foreground">
            Your content suite is ready
          </p>
        </div>
        <div className="flex gap-2">
          <CopyButton text={content} label="Copy all" />
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download .txt
          </button>
        </div>
      </div>

      {/* Section cards */}
      <div className="space-y-4">
        {sections.map((section, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="flex items-center justify-between gap-4 border-b border-border bg-fog/60 px-5 py-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">
                {section.heading}
              </h3>
              <CopyButton
                text={`${section.heading}\n${section.body}`}
                label="Copy"
              />
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap px-5 py-4 font-sans text-sm leading-relaxed text-foreground">
              {section.body}
            </pre>
          </div>
        ))}
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
          <div className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-xl border border-border bg-fog p-5 text-sm leading-relaxed text-muted">
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
          The full production service includes editorial polish, chapter
          timestamps, transcript review, and distribution-ready assets — every
          week, for every episode.
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
