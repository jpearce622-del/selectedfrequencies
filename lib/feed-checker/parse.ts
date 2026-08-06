import { XMLParser, XMLValidator } from "fast-xml-parser";
import type { ParsedFeed } from "./types";

/**
 * XML parsing for arbitrary, untrusted feeds.
 *
 * fast-xml-parser was chosen over xml2js and libxmljs specifically because of
 * what it does NOT do: it has no DTD processing, so external entity
 * resolution (XXE) and recursive entity expansion (billion laughs) aren't
 * features that need switching off — they were never there. libxmljs wraps
 * libxml2, where both are a config flag away from being enabled, and it needs
 * a native build on Vercel for no benefit here.
 *
 * `processEntities: false` goes further and stops even the built-in named
 * entities being expanded, so a feed full of &amp; sequences can't be used to
 * inflate memory. Feed text is decoded explicitly where it matters instead.
 */
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  // Namespaces are meaningful here (itunes:, podcast:), so prefixes stay.
  removeNSPrefix: false,
  parseAttributeValue: false,
  parseTagValue: false,
  trimValues: true,
  processEntities: false,
  // A channel with one <item> must still be an array, or every episode check
  // needs a "was it an array?" branch.
  isArray: (name, jpath) =>
    jpath === "rss.channel.item" || name === "itunes:category",
});

export interface ParseOutcome {
  feed: ParsedFeed | null;
  error?: string;
}

/** Decode the handful of entities we deliberately left unexpanded. */
export function decodeEntities(input: string): string {
  return input
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, "&"); // last, so &amp;lt; doesn't become <
}

/** Pull xmlns:* declarations off the root element. */
function readNamespaces(xml: string): Record<string, string> {
  const out: Record<string, string> = {};
  const root = xml.match(/<rss\b[^>]*>/i);
  if (!root) return out;
  for (const m of root[0].matchAll(/xmlns:([\w-]+)\s*=\s*["']([^"']+)["']/g)) {
    out[m[1].toLowerCase()] = m[2];
  }
  return out;
}

export function parseFeed(xml: string): ParseOutcome {
  const trimmed = xml.replace(/^﻿/, "").trim();

  if (!trimmed) {
    return { feed: null, error: "The feed was empty." };
  }

  const validity = XMLValidator.validate(trimmed, { allowBooleanAttributes: true });
  if (validity !== true) {
    const err = validity.err;
    return {
      feed: null,
      error: `${err.msg}${err.line ? ` (line ${err.line})` : ""}`,
    };
  }

  let doc: Record<string, unknown>;
  try {
    doc = parser.parse(trimmed) as Record<string, unknown>;
  } catch (e) {
    return { feed: null, error: (e as Error).message };
  }

  const rss = doc.rss as Record<string, unknown> | undefined;
  if (!rss) {
    return {
      feed: null,
      error:
        "No <rss> element. This might be Atom or JSON Feed, which podcast platforms don't accept.",
    };
  }

  const channel = rss.channel as Record<string, unknown> | undefined;
  if (!channel) {
    return { feed: null, error: "No <channel> element inside <rss>." };
  }

  const items = (channel.item as Array<Record<string, unknown>>) ?? [];

  return {
    feed: {
      channel,
      items: Array.isArray(items) ? items : [items],
      namespaces: readNamespaces(trimmed),
      rssVersion: (rss["@_version"] as string) ?? undefined,
    },
  };
}

/** Read a tag's text whether the parser gave us a string or a node. */
export function text(node: unknown): string | undefined {
  if (node == null) return undefined;
  if (typeof node === "string") return node.trim() || undefined;
  if (typeof node === "number") return String(node);
  if (typeof node === "object") {
    const t = (node as Record<string, unknown>)["#text"];
    if (typeof t === "string") return t.trim() || undefined;
    if (typeof t === "number") return String(t);
  }
  return undefined;
}

/** Read an attribute off a tag node. */
export function attr(node: unknown, name: string): string | undefined {
  if (node && typeof node === "object") {
    const v = (node as Record<string, unknown>)[`@_${name}`];
    if (typeof v === "string") return v.trim() || undefined;
    if (typeof v === "number") return String(v);
  }
  return undefined;
}

/** First value when a tag may legitimately repeat. */
export function first<T>(value: T | T[] | undefined): T | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}
