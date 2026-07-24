// Config diagnostic for the show-notes tool. Reports ONLY whether each
// required env var is present (booleans) — never the values themselves —
// so a deployment's configuration can be checked without a full upload.
export const dynamic = "force-dynamic";

export function GET(): Response {
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

  const env = {
    GROQ_API_KEY: Boolean(process.env.GROQ_API_KEY),
    ANTHROPIC_API_KEY: Boolean(process.env.ANTHROPIC_API_KEY),
    BLOB_READ_WRITE_TOKEN: Boolean(blobToken),
    // A correctly-copied read-write token starts with this public prefix;
    // catches a wrong/partial paste (no secret is revealed).
    BLOB_READ_WRITE_TOKEN_looks_valid: Boolean(
      blobToken?.startsWith("vercel_blob_rw_")
    ),
    BLOB_STORE_ID: Boolean(process.env.BLOB_STORE_ID),
    // Optional — rate limiting only
    SUPABASE_URL: Boolean(process.env.SUPABASE_URL),
    SUPABASE_SERVICE_KEY: Boolean(process.env.SUPABASE_SERVICE_KEY),
  };

  const ready =
    env.GROQ_API_KEY &&
    env.ANTHROPIC_API_KEY &&
    env.BLOB_READ_WRITE_TOKEN_looks_valid;

  return Response.json({ ready, env });
}
