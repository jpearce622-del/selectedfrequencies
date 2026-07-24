import { get } from "@vercel/blob";

// Transcription via Groq-hosted Whisper (whisper-large-v3-turbo).
// Groq's audio API is OpenAI-compatible and extremely fast, but — unlike
// Deepgram — it does NOT fetch from a URL. We download the file from the
// (private) Blob store with an authenticated get() and forward the bytes as
// multipart form-data. Uploads are private so the audio is never publicly
// reachable; only this server, holding BLOB_READ_WRITE_TOKEN, can read it.

// whisper-large-v3-turbo: ~$0.04 / hour of audio (~$0.02 for a 30-min episode).
const GROQ_MODEL = "whisper-large-v3-turbo";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/audio/transcriptions";

// Groq caps upload size (dev tier ~100 MB). A 30-min audio file is well
// under this; large video files are not — see UploadZone limits.
const MAX_UPLOAD_BYTES = 100 * 1024 * 1024;

interface GroqSegment {
  start?: number;
  end?: number;
  text?: string;
}

interface GroqVerboseResponse {
  text?: string;
  segments?: GroqSegment[];
}

/** Seconds → MM:SS (or H:MM:SS past the hour). */
function formatTimestamp(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

/** Derive a filename with a real extension so Groq can detect the format. */
function fileNameFor(url: string, contentType: string): string {
  const match = /\.([a-z0-9]{2,4})(?:\?|$)/i.exec(url);
  if (match) return `audio.${match[1].toLowerCase()}`;
  const ext = contentType.includes("mp4")
    ? "mp4"
    : contentType.includes("wav")
      ? "wav"
      : contentType.includes("webm")
        ? "webm"
        : contentType.includes("ogg")
          ? "ogg"
          : contentType.includes("m4a") || contentType.includes("mp4a")
            ? "m4a"
            : "mp3";
  return `audio.${ext}`;
}

/**
 * Group Whisper's short segments into readable paragraphs, each prefixed
 * with a [MM:SS] timestamp. The timestamps are what the CHAPTERS section of
 * the content suite relies on; grouping keeps the transcript readable and
 * the token count (hence Claude cost) down versus one line per segment.
 */
function buildTimestampedTranscript(segments: GroqSegment[]): string {
  const PAUSE_GAP = 2; // seconds of silence that starts a new paragraph
  const MAX_PARA_SECONDS = 45; // hard cap on paragraph length

  const paragraphs: { start: number; text: string[] }[] = [];
  let current: { start: number; text: string[] } | null = null;
  let lastEnd: number | null = null;

  for (const seg of segments) {
    const start = seg.start ?? 0;
    const text = (seg.text ?? "").trim();
    if (!text) continue;

    const gap = lastEnd === null ? 0 : start - lastEnd;
    const runLength = current ? start - current.start : 0;

    if (!current || gap > PAUSE_GAP || runLength > MAX_PARA_SECONDS) {
      current = { start, text: [] };
      paragraphs.push(current);
    }
    current.text.push(text);
    lastEnd = seg.end ?? start;
  }

  return paragraphs
    .map((p) => `[${formatTimestamp(p.start)}] ${p.text.join(" ").trim()}`)
    .join("\n\n")
    .trim();
}

/**
 * Transcribe audio/video from a publicly accessible URL using Groq-hosted
 * Whisper. Returns a paragraph-segmented transcript with inline [MM:SS]
 * timestamps.
 */
export async function transcribeUrl(audioUrl: string): Promise<string> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY is not configured");

  // 1. Download the file from the private Blob store (authenticated read).
  const result = await get(audioUrl, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) {
    throw new Error("Could not read audio from storage");
  }

  if (result.blob.size > MAX_UPLOAD_BYTES) {
    throw new Error(
      "File is too large to transcribe. Please upload an audio file (or a smaller/compressed recording)."
    );
  }

  const contentType = result.blob.contentType || "application/octet-stream";
  const bytes = await new Response(result.stream).arrayBuffer();

  // 2. Forward to Groq as multipart form-data.
  const form = new FormData();
  form.append(
    "file",
    new Blob([bytes], { type: contentType }),
    fileNameFor(audioUrl, contentType)
  );
  form.append("model", GROQ_MODEL);
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "segment");
  form.append("language", "en");
  form.append("temperature", "0");

  const res = await fetch(GROQ_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    // Groq caps upload size per tier (free ~25 MB, dev ~100 MB). A 413 (or a
    // size-related 400) is the common real-world failure for full episodes.
    if (res.status === 413 || /max.*size|too large|25 ?MB/i.test(detail)) {
      const mb = (bytes.byteLength / (1024 * 1024)).toFixed(0);
      throw new Error(
        `This ${mb} MB file is over the transcription size limit. Groq's free tier allows 25 MB; upgrade to the dev tier (100 MB) or upload a smaller/compressed file.`
      );
    }
    throw new Error(`Groq transcription failed (${res.status}): ${detail}`);
  }

  const data = (await res.json()) as GroqVerboseResponse;

  // 3. Prefer timestamped paragraphs; fall back to the flat transcript.
  if (data.segments?.length) {
    const built = buildTimestampedTranscript(data.segments);
    if (built) return built;
  }

  const flat = data.text?.trim();
  if (!flat) throw new Error("Groq returned an empty transcript");
  return flat;
}
