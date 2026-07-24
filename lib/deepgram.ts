import { DeepgramClient } from "@deepgram/sdk";

function getClient() {
  const key = process.env.DEEPGRAM_API_KEY;
  if (!key) throw new Error("DEEPGRAM_API_KEY is not configured");
  return new DeepgramClient(key);
}

/**
 * Transcribe audio/video from a publicly accessible URL using Deepgram Nova-2.
 * Nova-2 is ~$0.0043/min — roughly $0.13 for a 30-min episode.
 */
export async function transcribeUrl(audioUrl: string): Promise<string> {
  const deepgram = getClient();

  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    { url: audioUrl },
    {
      model: "nova-2",
      smart_format: true,
      paragraphs: true,
      punctuate: true,
      language: "en",
    }
  );

  if (error) throw new Error(`Deepgram error: ${error.message}`);

  const transcript =
    result?.results?.channels?.[0]?.alternatives?.[0]?.transcript;
  if (!transcript) throw new Error("Deepgram returned an empty transcript");

  return transcript;
}
