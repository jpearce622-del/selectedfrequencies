import { checkStoreHealth } from "@/lib/feed-checker/store";

/**
 * Config diagnostic for the feed checker.
 *
 * Reports which env var names were found (booleans only — never the values)
 * and whether a write/read round-trip against the store actually succeeds.
 * The round-trip is the point: credentials being present proves only that
 * something was configured, and a typo'd token deploys perfectly happily and
 * fails on first real use.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  const env = {
    UPSTASH_REDIS_REST_URL: Boolean(process.env.UPSTASH_REDIS_REST_URL),
    UPSTASH_REDIS_REST_TOKEN: Boolean(process.env.UPSTASH_REDIS_REST_TOKEN),
    // The names the Vercel Marketplace integration may use instead.
    KV_REST_API_URL: Boolean(process.env.KV_REST_API_URL),
    KV_REST_API_TOKEN: Boolean(process.env.KV_REST_API_TOKEN),
  };

  const store = await checkStoreHealth();

  return Response.json({
    ready: store.persistent && store.reachable,
    store,
    env,
    hint: store.persistent
      ? store.reachable
        ? "Shared store connected. Polling and shareable report links will work."
        : "Credentials were found but the store rejected them. Check the token was copied in full and matches the URL's database."
      : "No credentials found under either name. Reports run but can't be read back — set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN, then redeploy.",
  });
}
