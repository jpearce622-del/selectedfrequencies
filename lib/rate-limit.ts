import { supabase } from "./supabase";

async function sha256(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export interface RateLimitResult {
  allowed: boolean;
  reason?: string;
}

export async function checkRateLimit(
  email: string,
  ip: string
): Promise<RateLimitResult> {
  if (!supabase) {
    // No DB — allow all in local dev
    return { allowed: true };
  }

  const emailHash = await sha256(email);

  // One completed generation per email address
  const { data: existing } = await supabase
    .from("show_notes_submissions")
    .select("id")
    .eq("email_hash", emailHash)
    .eq("status", "complete")
    .limit(1)
    .single();

  if (existing) {
    return {
      allowed: false,
      reason:
        "This email has already received a free show notes generation. Each email address gets one free episode.",
    };
  }

  // Max 3 attempts per IP per 24 hours (catches multi-email abuse)
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("show_notes_submissions")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ip)
    .gte("created_at", oneDayAgo);

  if ((count ?? 0) >= 3) {
    return {
      allowed: false,
      reason: "Too many requests from your IP address. Please try again tomorrow.",
    };
  }

  return { allowed: true };
}

export async function recordSubmission(
  email: string,
  ip: string,
  status: "processing" | "complete" | "failed",
  extras: { transcript?: string; showNotes?: string; error?: string } = {}
): Promise<void> {
  if (!supabase) return;

  const emailHash = await sha256(email);

  await supabase.from("show_notes_submissions").upsert(
    {
      email_hash: emailHash,
      ip_address: ip,
      status,
      transcript: extras.transcript ?? null,
      show_notes: extras.showNotes ?? null,
      error_message: extras.error ?? null,
      completed_at:
        status === "complete" ? new Date().toISOString() : null,
    },
    { onConflict: "email_hash" }
  );
}
