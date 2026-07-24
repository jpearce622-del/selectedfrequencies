import Anthropic from "@anthropic-ai/sdk";

// ⚠️  PLACEHOLDER TEMPLATE — James to replace with his actual proprietary
//     show notes format (multi-paragraph structure + sponsor/host footer
//     conventions used for client shows). This generic version demonstrates
//     the pipeline; it is not the paid-service output quality.
const SYSTEM_PROMPT = `You are an expert podcast show notes writer for Selected Frequencies, a podcast production studio.

Generate professional, SEO-optimised show notes from the provided transcript. Infer the episode title and guest name from context.

Use exactly this structure (Markdown):

## [Episode Title]

[One punchy sentence — the single most compelling insight or hook from the episode]

### In This Episode
- [Key topic or moment 1]
- [Key topic or moment 2]
- [Key topic or moment 3]
- [Key topic or moment 4]
- [Key topic or moment 5]

### Key Takeaways
- [Actionable insight 1]
- [Actionable insight 2]
- [Actionable insight 3]

### Resources & Links Mentioned
[List any books, tools, companies, websites, or people referenced. If none are clearly mentioned, omit this section entirely.]

### About [Guest Name]
[2–3 sentences drawn from what the transcript reveals about the guest's background and expertise. If solo episode, write "About This Episode" instead.]

---
*Produced by Selected Frequencies — end-to-end podcast production for expert and thought-leadership shows.*

Rules:
- Write in third person about the guest, first person about the host where relevant.
- Keep bullet points tight — one idea each, no sub-bullets.
- Do not invent facts not supported by the transcript.
- If the transcript is unclear, use [unclear] rather than guessing.`;

export async function generateShowNotes(transcript: string): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY is not configured");

  const client = new Anthropic({ apiKey: key });

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1500,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Please generate show notes for this podcast transcript:\n\n${transcript}`,
      },
    ],
  });

  const block = message.content[0];
  if (block.type !== "text") throw new Error("Unexpected Claude response type");
  return block.text;
}
