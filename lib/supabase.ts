import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

// Supabase is optional — tool degrades gracefully (no rate-limiting) without it.
export const supabase = url && key ? createClient(url, key) : null;
