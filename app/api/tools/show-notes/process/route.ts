import { del } from "@vercel/blob";
import { transcribeUrl } from "@/lib/deepgram";
import { generateShowNotes } from "@/lib/show-notes-prompt";
import { checkRateLimit, recordSubmission } from "@/lib/rate-limit";

// Allow up to 5 minutes — Deepgram + Claude can take ~2 min for a 30-min episode.
export const maxDuration = 300;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sseMessage(event: string, data: Record<string, unknown>): Uint8Array {
  const text = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  return new TextEncoder().encode(text);
}

export async function POST(request: Request): Promise<Response> {
  const { blobUrl, email } = (await request.json()) as {
    blobUrl: string;
    email: string;
  };

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

        // 4. Transcribe via Deepgram
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

        // 5. Generate show notes via Claude
        send("status", {
          stage: "generating",
          message: "Writing your show notes…",
        });

        let showNotes: string;
        try {
          showNotes = await generateShowNotes(transcript);
        } catch (err) {
          await recordSubmission(email.trim(), ip, "failed", {
            error: String(err),
          });
          send("error", {
            message: "Show notes generation failed. Please try again.",
          });
          controller.close();
          return;
        }

        // 6. Save result + delete blob
        await recordSubmission(email.trim(), ip, "complete", {
          transcript,
          showNotes,
        });

        try {
          await del(blobUrl);
        } catch {
          // Non-fatal — blob will expire automatically
        }

        // 7. Return results
        send("complete", { transcript, showNotes });
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
