import Anthropic from "@anthropic-ai/sdk";
import type { ShowConfig } from "@/types/show-notes";
import {
  buildSystemPrompt,
  cleanTranscript,
  maxTokensFor,
} from "./content-suite-prompt";

/**
 * Generate the podcast content suite (YouTube titles, thumbnails,
 * description, chapters, tags, pinned comment, X + LinkedIn posts) from a
 * transcript and the show configuration.
 *
 * Cost controls (all per the prompt spec):
 * - Instructions go in the cached `system` block — show settings rarely
 *   change between episodes, so repeat runs hit the prompt cache (~10% of
 *   normal input cost).
 * - The transcript (95%+ of input cost) goes raw in the user message, after
 *   a light filler/whitespace clean-up. Timestamps are preserved.
 * - max_tokens scales with the number of ticked sections, capped at 2500.
 * - Streamed accumulation keeps the connection alive so long generations
 *   don't trip an intermediate idle timeout.
 */
export async function generateContentSuite(
  transcript: string,
  config: ShowConfig
): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY is not configured");

  const client = new Anthropic({ apiKey: key });

  const systemPrompt = buildSystemPrompt(config);
  const cleaned = cleanTranscript(transcript);
  const maxTokens = maxTokensFor(config.sections.length);

  const stream = client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: maxTokens,
    // temperature left at default (1) — copy variety matters more than
    // determinism; lowering it flattens the marketing copy.
    system: [
      {
        type: "text",
        text: systemPrompt,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: cleaned }],
  });

  const message = await stream.finalMessage();

  const text = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("")
    .trim();

  if (!text) throw new Error("Claude returned an empty response");
  return text;
}
