"use client";

import { useRef, useState, useCallback } from "react";
import { upload } from "@vercel/blob/client";

interface UploadZoneProps {
  onUploadComplete: (blobUrl: string, fileName: string) => void;
  onReset: () => void;
}

const MAX_DURATION_SECONDS = 30 * 60; // 30 minutes
// Groq's transcription upload ceiling is ~100 MB; a 30-min audio file is
// well under it. Large video files won't fit — keep uploads to audio or
// lightly-compressed video.
const MAX_SIZE_BYTES = 100 * 1024 * 1024; // 100 MB

const ACCEPTED_TYPES = [
  "audio/mpeg",
  "audio/mp3",
  "audio/mp4",
  "audio/m4a",
  "audio/x-m4a",
  "audio/wav",
  "audio/wave",
  "audio/x-wav",
  "audio/ogg",
  "audio/flac",
  "audio/webm",
  "video/mp4",
  "video/quicktime",
  "video/webm",
];

async function getFileDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const el = document.createElement("video");
    el.preload = "metadata";
    const url = URL.createObjectURL(file);
    el.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(el.duration);
    };
    el.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read file duration"));
    };
    el.src = url;
  });
}

export function UploadZone({ onUploadComplete, onReset }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedName, setUploadedName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setError(null);

      // Type check
      if (!ACCEPTED_TYPES.includes(file.type) && !file.type.startsWith("audio/") && !file.type.startsWith("video/")) {
        setError("Please upload an audio or video file (MP3, MP4, WAV, M4A, etc.).");
        return;
      }

      // Size check
      if (file.size > MAX_SIZE_BYTES) {
        setError("File is too large. Maximum size is 100 MB — try an audio file or a compressed recording.");
        return;
      }

      // Duration check (before uploading — saves bandwidth on over-length files)
      try {
        const duration = await getFileDuration(file);
        if (duration > MAX_DURATION_SECONDS) {
          const mins = Math.round(duration / 60);
          setError(
            `Episode is ${mins} minutes long. The free tool supports episodes up to 30 minutes. For longer episodes, contact us about the full production service.`
          );
          return;
        }
      } catch {
        // If we can't read the duration, let the transcriber handle it server-side
      }

      // Upload to Vercel Blob
      setIsUploading(true);
      setUploadProgress(0);

      try {
        const blob = await upload(file.name, file, {
          access: "private",
          handleUploadUrl: "/api/tools/show-notes/upload-url",
          clientPayload: file.type,
          onUploadProgress: ({ percentage }) => {
            setUploadProgress(Math.round(percentage));
          },
        });

        setUploadedName(file.name);
        setIsUploading(false);
        onUploadComplete(blob.url, file.name);
      } catch (err) {
        setError(
          `Upload failed: ${err instanceof Error ? err.message : "Please try again."}`
        );
        setIsUploading(false);
      }
    },
    [onUploadComplete]
  );

  const handleReset = useCallback(() => {
    setUploadedName(null);
    setError(null);
    setUploadProgress(0);
    if (inputRef.current) inputRef.current.value = "";
    onReset();
  }, [onReset]);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  if (uploadedName && !isUploading) {
    return (
      <div className="flex items-center gap-4 rounded-2xl border-2 border-accent/30 bg-accent/[0.06] px-5 py-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">
            File ready to transcribe
          </p>
          <p className="truncate text-sm text-muted">{uploadedName}</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="shrink-0 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Replace
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => !isUploading && inputRef.current?.click()}
        onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        disabled={isUploading}
        className={`relative flex w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed px-8 py-16 text-center transition-all duration-200 ${
          isDragging
            ? "border-accent bg-accent/5"
            : "border-border hover:border-accent/50 hover:bg-fog"
        } ${isUploading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        {isUploading ? (
          <div className="w-full max-w-xs space-y-3">
            <p className="text-sm font-medium text-foreground">
              Uploading… {uploadProgress}%
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fog">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-muted"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div>
              <p className="text-base font-medium text-foreground">
                Drop your episode here or{" "}
                <span className="text-accent underline underline-offset-2">
                  browse
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">
                Audio or video · up to 30 minutes · MP3, MP4, WAV, M4A, OGG
              </p>
            </div>
          </>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="audio/*,video/*"
        className="sr-only"
        onChange={onInputChange}
        aria-label="Upload podcast episode"
      />

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
