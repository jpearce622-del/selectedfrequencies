import { DeepgramClient } from "@deepgram/sdk";

function getClient() {
  const key = process.env.DEEPGRAM_API_KEY;
  if (!key) throw new Error("DEEPGRAM_API_KEY is not configured");
  return new DeepgramClient({ apiKey: key });
}

/**
 * Transcribe audio/video from a publicly accessible URL using Deepgram Nova-2.
 * Nova-2 is ~$0.0043/min — roughly $0.13 for a 30-min episode.
 *
 * SDK v5 restructured the API: transcription lives at
 * `listen.v1.media.transcribeUrl`, takes a single merged object
 * ({ url, ...options }), and returns the parsed body directly — it throws
 * on error rather than returning a { result, error } tuple.
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
    throw new Error("Deepgram returned an accepted (async) response, not a transcript");
  }

  const alternative = response.results?.channels?.[0]?.alternatives?.[0];
  // Prefer the paragraph-formatted transcript (readable, with breaks);
  // fall back to the flat transcript string.
  const transcript =
    alternative?.paragraphs?.transcript ?? alternative?.transcript;

  if (!transcript) throw new Error("Deepgram returned an empty transcript");

  return transcript;
}
