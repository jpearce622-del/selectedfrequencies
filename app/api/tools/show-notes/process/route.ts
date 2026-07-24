import { del } from "@vercel/blob";
import { transcribeUrl } from "@/lib/groq";
import { generateContentSuite } from "@/lib/show-notes-prompt";
import { DEFAULT_CONFIG } from "@/lib/content-suite-prompt";
import { checkRateLimit, recordSubmission } from "@/lib/rate-limit";
import type { ShowConfig } from "@/types/show-notes";

// Allow up to 5 minutes — transcription + Claude can take a couple of minutes
// for a 30-min episode. (Groq transcription itself is fast; Claude is the tail.)
export const maxDuration = 300;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sseMessage(event: string, data: Record<string, unknown>): Uint8Array {
  const text = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  return new TextEncoder().encode(text);
}

// Merge the client-supplied config over defaults and clamp anything
// unbounded — never trust the shape or size of the incoming object.
function normalizeConfig(raw: unknown): ShowConfig {
  const c = (raw ?? {}) as Partial<ShowConfig>;
  const guests = Array.isArray(c.guests)
    ? c.guests
        .filter((g): g is string => typeof g === "string")
        .map((g) => g.slice(0, 100))
        .slice(0, 4)
    : DEFAULT_CONFIG.guests;
  const sections = Array.isArray(c.sections)
    ? c.sections.filter((s): s is ShowConfig["sections"][number] =>
        DEFAULT_CONFIG.sections.includes(
          s as ShowConfig["sections"][number]
        )
      )
    : DEFAULT_CONFIG.sections;

  return {
    showName: typeof c.showName === "string" ? c.showName.slice(0, 120) : "",
    hostName: typeof c.hostName === "string" ? c.hostName.slice(0, 120) : "",
    guests,
    language: c.language === "US" ? "US" : "UK",
    tone:
      c.tone === "punchy" ||
      c.tone === "educational" ||
      c.tone === "professional"
        ? c.tone
        : "warm",
    showType:
      c.showType === "finance" ||
      c.showType === "health" ||
      c.showType === "legal"
        ? c.showType
        : "general",
    sections: sections.length ? sections : DEFAULT_CONFIG.sections,
  };
}

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json()) as {
    blobUrl: string;
    email: string;
    config?: unknown;
  };
  const { blobUrl, email } = body;
  const config = normalizeConfig(body.config);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: Record<string, unknown>) => {
        try {
          controller.enqueue(sseMessage(event, data));
        } catch {
          // Controller already closed
        }
      };

      try {
        // 1. Validate inputs
        if (!email || !EMAIL_RE.test(email.trim())) {
          send("error", { message: "A valid email address is required." });
          controller.close();
          return;
        }
        if (!blobUrl || !blobUrl.startsWith("https://")) {
          send("error", { message: "Invalid file URL." });
          controller.close();
          return;
        }

        send("status", { stage: "checking", message: "Checking your request…" });

        // 2. Rate limit check
        const rateLimit = await checkRateLimit(email.trim(), ip);
        if (!rateLimit.allowed) {
          send("error", { message: rateLimit.reason });
          controller.close();
          return;
        }

        // 3. Mark as processing
        await recordSubmission(email.trim(), ip, "processing");

        // 4. Transcribe via Groq-hosted Whisper
        send("status", {
          stage: "transcribing",
          message:
            "Transcribing your episode… this takes a minute or two for longer files.",
        });

        let transcript: string;
        try {
          transcript = await transcribeUrl(blobUrl);
        } catch (err) {
          await recordSubmission(email.trim(), ip, "failed", {
            error: String(err),
          });
          send("error", {
            message:
              "Transcription failed. Make sure the file is a valid audio or video recording.",
          });
          controller.close();
          return;
        }

        // 5. Generate the content suite via Claude
        send("status", {
          stage: "generating",
          message: "Writing your content suite…",
        });

        let content: string;
        try {
          content = await generateContentSuite(transcript, config);
        } catch (err) {
          await recordSubmission(email.trim(), ip, "failed", {
            error: String(err),
          });
          send("error", {
            message: "Content generation failed. Please try again.",
          });
          controller.close();
          return;
        }

        // 6. Save result + delete blob
        await recordSubmission(email.trim(), ip, "complete", {
          transcript,
          showNotes: content,
        });

        try {
          await del(blobUrl);
        } catch {
          // Non-fatal — blob will expire automatically
        }

        // 7. Return results
        send("complete", { transcript, content });
      } catch (err) {
        console.error("Show notes processing error:", err);
        send("error", { message: "An unexpected error occurred. Please try again." });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
      Connection: "keep-alive",
    },
  });
}
