import { DeepgramClient } from "@deepgram/sdk";

function getClient() {
  const key = process.env.DEEPGRAM_API_KEY;
  if (!key) throw new Error("DEEPGRAM_API_KEY is not configured");
  return new DeepgramClient({ apiKey: key });
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
 * Transcribe audio/video from a publicly accessible URL using Deepgram Nova-2.
 * Nova-2 is ~$0.0043/min — roughly $0.13 for a 30-min episode.
 *
 * Returns a paragraph-segmented transcript with an inline [MM:SS] timestamp
 * on each paragraph. The timestamps are what the CHAPTERS section of the
 * content suite relies on — a flat transcript would leave it nothing to
 * work from — while the paragraph breaks keep it readable.
 *
 * SDK v5 note: transcription lives at listen.v1.media.transcribeUrl, takes a
 * single merged { url, ...options } object, and returns the parsed body
 * directly (throws on error) rather than a { result, error } tuple.
 */
export async function transcribeUrl(audioUrl: string): Promise<string> {
  const deepgram = getClient();

  const response = await deepgram.listen.v1.media.transcribeUrl({
    url: audioUrl,
    model: "nova-2",
    smart_format: true,
    paragraphs: true,
    punctuate: true,
    language: "en",
  });

  // Sync (non-callback) requests return a ListenV1Response; the async
  // ListenV1AcceptedResponse (which only carries a request_id) shouldn't
  // occur here since we don't pass a callback URL.
  if (!("results" in response)) {
    throw new Error(
      "Deepgram returned an accepted (async) response, not a transcript"
    );
  }

  const alternative = response.results?.channels?.[0]?.alternatives?.[0];
  const paragraphs = alternative?.paragraphs?.paragraphs;

  // Preferred: one [timestamp] per paragraph, sentences joined into text.
  if (paragraphs?.length) {
    const lines = paragraphs.map((p) => {
      const text = (p.sentences ?? [])
        .map((sentence) => sentence.text ?? "")
        .join(" ")
        .trim();
      return `[${formatTimestamp(p.start ?? 0)}] ${text}`;
    });
    const joined = lines.join("\n\n").trim();
    if (joined) return joined;
  }

  // Fallbacks: paragraph-formatted flat transcript, then the raw transcript.
  const transcript =
    alternative?.paragraphs?.transcript ?? alternative?.transcript;
  if (!transcript) throw new Error("Deepgram returned an empty transcript");

  return transcript;
}
