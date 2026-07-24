import { head, issueSignedToken, presignUrl } from "@vercel/blob";

// Transcription via Groq-hosted Whisper (whisper-large-v3-turbo).
//
// We use Groq's `url` parameter rather than uploading the bytes: pushing a
// 30-min episode (~40 MB) through Groq's edge as multipart form-data is
// where large uploads die (Cloudflare 502s), and it's also what their
// attachment size limits apply to. Instead we mint a short-lived signed GET
// URL for the private blob and Groq fetches the file itself. The audio
// stays non-public — the signed URL is scoped to one pathname and expires.

// whisper-large-v3-turbo: ~$0.04 / hour of audio (~$0.02 for a 30-min episode).
const GROQ_MODEL = "whisper-large-v3-turbo";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/audio/transcriptions";

// Matches the upload-url route's cap; a 30-min audio file is well under it.
const MAX_FILE_BYTES = 100 * 1024 * 1024;

// How long the signed URL stays fetchable. Transcription of a 30-min file
// takes seconds, but leave slack for Groq-side queuing and retries.
const SIGNED_URL_TTL_MS = 15 * 60 * 1000;

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
 * Transcribe audio/video stored in the private Blob store using Groq-hosted
 * Whisper. Returns a paragraph-segmented transcript with inline [MM:SS]
 * timestamps.
 */
export async function transcribeUrl(audioUrl: string): Promise<string> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("GROQ_API_KEY is not configured");

  // 1. Metadata only (no download) — size guard + pathname for signing.
  const meta = await head(audioUrl);
  if (meta.size > MAX_FILE_BYTES) {
    const mb = (meta.size / (1024 * 1024)).toFixed(0);
    throw new Error(
      `This ${mb} MB file is over the 100 MB limit. Please upload a smaller or compressed recording.`
    );
  }

  // 2. Mint a short-lived signed GET URL scoped to just this file.
  const validUntil = Date.now() + SIGNED_URL_TTL_MS;
  const signedToken = await issueSignedToken({
    pathname: meta.pathname,
    operations: ["get"],
    validUntil,
  });
  const { presignedUrl } = await presignUrl(signedToken, {
    operation: "get",
    pathname: meta.pathname,
    access: "private",
    validUntil,
  });

  // 3. Hand Groq the URL — it fetches the file itself.
  const form = new FormData();
  form.append("url", presignedUrl);
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
    throw new Error(
      `Groq transcription failed (HTTP ${res.status}): ${detail.slice(0, 500)}`
    );
  }

  const data = (await res.json()) as GroqVerboseResponse;

  // 4. Prefer timestamped paragraphs; fall back to the flat transcript.
  if (data.segments?.length) {
    const built = buildTimestampedTranscript(data.segments);
    if (built) return built;
  }

  const flat = data.text?.trim();
  if (!flat) throw new Error("Groq returned an empty transcript");
  return flat;
}
