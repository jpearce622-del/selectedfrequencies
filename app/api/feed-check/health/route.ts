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

  // Which Redis-ish variables this deployment can actually see, by NAME only
  // — values are never read, let alone returned. This exists because the two
  // reasons the store can be missing look identical from outside: the
  // integration was attached after the running deployment was built (so a
  // redeploy fixes it), or it injected the credentials under a name we don't
  // read. Listing the names present separates those two in one request
  // instead of a guessing loop.
  const visibleNames = Object.keys(process.env)
    .filter((k) => /(redis|upstash|^kv_)/i.test(k))
    .sort();

  const store = await checkStoreHealth();

  return Response.json({
    ready: store.persistent && store.reachable,
    store,
    env,
    visibleNames,
    hint: store.persistent
      ? store.reachable
        ? "Shared store connected. Polling and shareable report links will work."
        : "Credentials were found but the store rejected them. Check the token was copied in full and matches the URL's database."
      : visibleNames.length > 0
        ? `Redis-related variables exist but not under a name this app reads: ${visibleNames.join(", ")}. Either rename a pair to UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN, or tell me these names and I'll read them.`
        : "No credentials visible at all. If the store was attached after this deployment was built, redeploy — Vercel does not apply new environment variables to an already-running deployment.",
  });
}
