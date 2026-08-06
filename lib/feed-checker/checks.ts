import type { Check, CheckContext } from "./types";
import { attr, first, text } from "./parse";

/**
 * The check registry.
 *
 * Every check is a plain object with a `run(ctx)`. The engine maps over this
 * array and knows nothing about any individual check, so adding one means
 * appending an object here and nothing else. Sections below mirror the report
 * categories; they're in one file because the engine only ever sees the
 * flattened array, and splitting per category is a mechanical move later.
 */

const APPLE_DOCS =
  "https://podcasters.apple.com/support/823-podcast-requirements";
const PODCAST_NS_DOCS = "https://podcasting2.org/podcast-namespace";

// Apple's top-level categories. An invalid category name is a silent
// rejection — the feed looks fine and simply never appears.
const APPLE_CATEGORIES = new Set([
  "Arts","Business","Comedy","Education","Fiction","Government","History",
  "Health & Fitness","Kids & Family","Leisure","Music","News","Religion & Spirituality",
  "Science","Society & Culture","Sports","Technology","True Crime","TV & Film",
]);

// Analytics prefixes redirect enclosures by design. Flagging these as a
// problem would fire on a large share of professionally hosted shows.
const ANALYTICS_HOSTS = [
  "podtrac.com","chartable.com","chrt.fm","blubrry.com","mgln.ai","megaphone.fm",
  "pdst.fm","claritaspod.com","podscribe.com","verifi.podscribe.com",
];

const ISO_639 = new Set([
  "en","en-us","en-gb","en-au","en-ca","en-ie","en-nz","en-za","fr","fr-fr","fr-ca",
  "de","de-de","de-at","de-ch","es","es-es","es-mx","es-ar","it","it-it","pt","pt-br",
  "pt-pt","nl","nl-nl","nl-be","sv","sv-se","no","nb","nn","da","da-dk","fi","fi-fi",
  "is","ga","gd","cy","pl","cs","sk","hu","ro","bg","hr","sr","sl","et","lv","lt",
  "el","tr","ru","uk","be","he","ar","fa","hi","bn","ta","te","ur","th","vi","id",
  "ms","tl","ja","ko","zh","zh-cn","zh-tw","zh-hk","sw","af","zu","xh",
]);

const RFC2822 =
  /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s+\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}\s+\d{2}:\d{2}(:\d{2})?\s+([+-]\d{4}|UT|GMT|EST|EDT|CST|CDT|MST|MDT|PST|PDT|[A-IK-Z])$/;

/** GUIDs that look regenerated rather than stable. */
const UNSTABLE_GUID = [
  /[?&](t|ts|time|timestamp|v|ver|version|cb|cache|rand|_)=/i,
  /\b\d{10,13}\b/, // bare unix timestamp
  /\/\d{4}\/\d{2}\/\d{2}\//, // date path that moves if the post date changes
];

const ch = (ctx: CheckContext, tag: string) =>
  ctx.parsed ? text(first(ctx.parsed.channel[tag] as never)) : undefined;

const chNode = (ctx: CheckContext, tag: string) =>
  ctx.parsed ? first(ctx.parsed.channel[tag] as never) : undefined;

export const checks: Check[] = [
  // ───────────────────────── Feed delivery ─────────────────────────
  {
    id: "transport.reachable",
    category: "transport",
    severity: "critical",
    title: "Feed responds with 200 OK",
    docsUrl: APPLE_DOCS,
    run: (ctx) =>
      ctx.httpStatus === 200
        ? { status: "pass", detail: "The feed loaded normally." }
        : {
            status: "fail",
            detail: `The feed returned HTTP ${ctx.httpStatus}.`,
            fix: "Platforms retry for a while and then stop. Check the URL is right and that your host isn't blocking non-browser requests.",
          },
  },
  {
    id: "transport.https",
    category: "transport",
    severity: "critical",
    title: "Feed is served over HTTPS",
    docsUrl: APPLE_DOCS,
    run: (ctx) =>
      ctx.feedUrl.startsWith("https://")
        ? { status: "pass", detail: "Served over HTTPS." }
        : {
            status: "fail",
            detail: "The feed is served over plain HTTP.",
            fix: "Apple and Spotify both require HTTPS for the feed, the artwork and the audio files. Most hosts offer this free — switch and submit the new URL.",
          },
  },
  {
    id: "transport.content_type",
    category: "transport",
    severity: "warning",
    title: "Content-Type is an XML type",
    run: (ctx) => {
      const ct = (ctx.headers.get("content-type") ?? "").toLowerCase();
      if (!ct) {
        return {
          status: "warn",
          detail: "The server sent no Content-Type header.",
          fix: "Set it to application/rss+xml. Some aggregators refuse to parse a response they can't identify.",
        };
      }
      const ok = /(application\/rss\+xml|application\/xml|text\/xml)/.test(ct);
      return ok
        ? { status: "pass", detail: `Served as ${ct.split(";")[0]}.` }
        : {
            status: "warn",
            detail: `Served as ${ct.split(";")[0]}, which isn't an XML type.`,
            fix: "Ask your host to serve the feed as application/rss+xml.",
          };
    },
  },
  {
    id: "transport.range_requests",
    category: "transport",
    severity: "warning",
    title: "Server advertises byte-range support",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      const ar = ctx.headers.get("accept-ranges");
      return ar === "bytes"
        ? { status: "pass", detail: "Accept-Ranges: bytes is present." }
        : {
            status: "warn",
            detail: "The feed host didn't advertise byte-range support.",
            fix: "This matters most on the audio files, which are checked separately below. On the feed itself it's harmless.",
          };
    },
  },
  {
    id: "transport.redirects",
    category: "transport",
    severity: "warning",
    title: "Redirect chain is short",
    run: (ctx) => {
      const hops = ctx.chain.length - 1;
      if (hops === 0) return { status: "pass", detail: "No redirects." };
      if (hops <= 2)
        return {
          status: "pass",
          detail: `${hops} redirect${hops > 1 ? "s" : ""} — normal, often a host migration.`,
          evidence: ctx.chain,
        };
      return {
        status: "warn",
        detail: `${hops} redirects before the feed loaded.`,
        fix: "Long chains slow every platform poll and occasionally get truncated. Point your submitted URL at the final destination.",
        evidence: ctx.chain,
      };
    },
  },
  {
    id: "transport.response_time",
    category: "transport",
    severity: "warning",
    title: "Feed responds quickly",
    run: (ctx) =>
      ctx.responseMs <= 5000
        ? { status: "pass", detail: `Responded in ${(ctx.responseMs / 1000).toFixed(1)}s.` }
        : {
            status: "warn",
            detail: `Took ${(ctx.responseMs / 1000).toFixed(1)}s to respond.`,
            fix: "Slow feeds get polled less often, so new episodes appear late. Usually a host problem rather than a feed one.",
          },
  },
  {
    id: "transport.caching",
    category: "transport",
    severity: "info",
    title: "Cache headers present",
    run: (ctx) => {
      const has = ctx.headers.get("etag") || ctx.headers.get("last-modified");
      return has
        ? { status: "pass", detail: "ETag or Last-Modified is set." }
        : {
            status: "warn",
            detail: "Neither ETag nor Last-Modified is set.",
            fix: "Platforms poll your feed constantly. Cache headers let them skip unchanged fetches, which makes them poll more willingly.",
          };
    },
  },
  {
    id: "transport.size",
    category: "transport",
    severity: "warning",
    title: "Feed size is manageable",
    run: (ctx) => {
      const mb = ctx.bodyBytes / (1024 * 1024);
      return mb <= 5
        ? { status: "pass", detail: `${mb.toFixed(2)} MB.` }
        : {
            status: "warn",
            detail: `The feed is ${mb.toFixed(1)} MB.`,
            fix: "Some aggregators choke above 5 MB. Most hosts can cap the feed at the most recent 300 episodes while keeping the full back catalogue on your site.",
          };
    },
  },

  // ───────────────────────── XML & namespaces ─────────────────────────
  {
    id: "structure.well_formed",
    category: "structure",
    severity: "critical",
    title: "XML is well-formed",
    run: (ctx) =>
      ctx.parsed
        ? { status: "pass", detail: "Parsed without errors." }
        : {
            status: "fail",
            detail: ctx.parseError ?? "The file could not be parsed as XML.",
            fix: "Nothing else can be checked until this is fixed. The usual cause is an unescaped & or < in a title or description.",
          },
  },
  {
    id: "structure.unescaped_entities",
    category: "structure",
    severity: "critical",
    title: "No unescaped special characters",
    run: (ctx) => {
      // Bare & that isn't the start of an entity, ignoring CDATA blocks.
      const withoutCdata = ctx.rawXml.replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, "");
      const bad = [...withoutCdata.matchAll(/&(?!#?\w+;)/g)];
      return bad.length === 0
        ? { status: "pass", detail: "Special characters are escaped properly." }
        : {
            status: "fail",
            detail: `${bad.length} unescaped ampersand${bad.length > 1 ? "s" : ""} outside CDATA.`,
            fix: "Replace bare & with &amp;, or wrap the text in CDATA. This is the most common single cause of a feed failing to parse.",
          };
    },
  },
  {
    id: "structure.rss_version",
    category: "structure",
    severity: "critical",
    title: "Declares RSS 2.0",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      return ctx.parsed.rssVersion === "2.0"
        ? { status: "pass", detail: "<rss version=\"2.0\"> is present." }
        : {
            status: "fail",
            detail: `RSS version is ${ctx.parsed.rssVersion ?? "not declared"}.`,
            fix: 'Podcast platforms expect <rss version="2.0">.',
          };
    },
  },
  {
    id: "structure.itunes_namespace",
    category: "structure",
    severity: "critical",
    title: "iTunes namespace declared",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const ns = ctx.parsed.namespaces.itunes;
      return ns?.includes("itunes.com/dtds/podcast-1.0.dtd")
        ? { status: "pass", detail: "Declared on the root element." }
        : {
            status: "fail",
            detail: "The itunes: namespace isn't declared.",
            fix: 'Add xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" to the <rss> element. Without it every itunes: tag in the feed is ignored.',
          };
    },
  },
  {
    id: "structure.tag_case",
    category: "structure",
    severity: "critical",
    title: "Tag names use correct case",
    run: (ctx) => {
      const bad = [...ctx.rawXml.matchAll(/<\/?(iTunes|ITunes|ITUNES|Podcast):/g)];
      return bad.length === 0
        ? { status: "pass", detail: "Namespace prefixes are lowercase." }
        : {
            status: "fail",
            detail: `Found ${bad.length} tag${bad.length > 1 ? "s" : ""} using the wrong case, e.g. <iTunes:category>.`,
            fix: "XML is case-sensitive. These tags are silently ignored — write them as itunes: and podcast:, all lowercase.",
          };
    },
  },
  {
    id: "structure.encoding",
    category: "structure",
    severity: "warning",
    title: "Character encoding declared",
    run: (ctx) => {
      const m = ctx.rawXml.match(/<\?xml[^>]*encoding=["']([^"']+)["']/i);
      if (!m)
        return {
          status: "warn",
          detail: "No encoding declared in the XML prolog.",
          fix: 'Add <?xml version="1.0" encoding="UTF-8"?> as the first line.',
        };
      return /utf-?8/i.test(m[1])
        ? { status: "pass", detail: "UTF-8." }
        : {
            status: "warn",
            detail: `Declared as ${m[1]}.`,
            fix: "UTF-8 is what every platform expects. Anything else risks mangled apostrophes and accents.",
          };
    },
  },

  // ───────────────────────── Show details ─────────────────────────
  ...(
    [
      ["title", "Show title", "critical"],
      ["link", "Website link", "critical"],
      ["itunes:author", "Author", "critical"],
    ] as const
  ).map(([tag, label, severity]) => ({
    id: `channel.${tag.replace(":", "_")}`,
    category: "channel" as const,
    severity: severity as "critical",
    title: `${label} is present`,
    docsUrl: APPLE_DOCS,
    run: (ctx: CheckContext) => {
      if (!ctx.parsed) return null;
      const v = ch(ctx, tag);
      return v
        ? { status: "pass" as const, detail: `<${tag}> is set.` }
        : {
            status: "fail" as const,
            detail: `<${tag}> is missing.`,
            fix: `Apple rejects feeds without <${tag}>.`,
          };
    },
  })),
  {
    id: "channel.description",
    category: "channel",
    severity: "critical",
    title: "Show description is present",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const d = ch(ctx, "description") ?? ch(ctx, "itunes:summary");
      if (!d)
        return {
          status: "fail",
          detail: "Neither <description> nor <itunes:summary> is set.",
          fix: "Apple rejects feeds with no show description.",
        };
      if (d.length < 200)
        return {
          status: "warn",
          detail: `The description is ${d.length} characters.`,
          fix: "Short descriptions convert badly in directory listings and give search engines almost nothing. Two or three sentences on who the show is for is the minimum worth writing.",
        };
      return { status: "pass", detail: `${d.length} characters.` };
    },
  },
  {
    id: "channel.language",
    category: "channel",
    severity: "critical",
    title: "Language is a valid code",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const lang = ch(ctx, "language");
      if (!lang)
        return {
          status: "fail",
          detail: "<language> is missing.",
          fix: "Apple requires it. Use an ISO 639 code such as en-gb.",
        };
      return ISO_639.has(lang.toLowerCase())
        ? { status: "pass", detail: `Set to ${lang}.` }
        : {
            status: "fail",
            detail: `"${lang}" isn't a language code Apple recognises.`,
            fix: "Use a two-letter ISO 639 code, optionally with a region — en, en-gb, es-mx.",
          };
    },
  },
  {
    id: "channel.explicit",
    category: "channel",
    severity: "critical",
    title: "Explicit flag is set correctly",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const v = ch(ctx, "itunes:explicit")?.toLowerCase();
      if (!v)
        return {
          status: "fail",
          detail: "<itunes:explicit> is missing.",
          fix: "This causes rejection even for shows with no explicit content. It must be exactly true or false.",
        };
      if (v === "true" || v === "false")
        return { status: "pass", detail: `Set to ${v}.` };
      if (v === "yes" || v === "no")
        return {
          status: "warn",
          detail: `Set to "${v}", which is the legacy value.`,
          fix: "Change it to true or false. yes/no still works in most places but is deprecated.",
        };
      return {
        status: "fail",
        detail: `Set to "${v}", which isn't valid.`,
        fix: "It must be exactly true or false.",
      };
    },
  },
  {
    id: "channel.category",
    category: "channel",
    severity: "critical",
    title: "Category is one Apple recognises",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const raw = ctx.parsed.channel["itunes:category"];
      const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
      if (list.length === 0)
        return {
          status: "fail",
          detail: "<itunes:category> is missing.",
          fix: "Apple requires at least one category, and it must match their list exactly.",
        };
      const names = list
        .map((c) => attr(c, "text"))
        .filter((n): n is string => Boolean(n));
      const invalid = names.filter((n) => !APPLE_CATEGORIES.has(n));
      return invalid.length === 0
        ? { status: "pass", detail: `Set to ${names.join(", ")}.` }
        : {
            status: "fail",
            detail: `${invalid.map((i) => `"${i}"`).join(", ")} ${invalid.length > 1 ? "aren't categories" : "isn't a category"} Apple recognises.`,
            fix: "Category names must match Apple's list character for character. An invalid one is a silent failure — the feed looks fine and simply never appears under any category.",
            evidence: invalid,
          };
    },
  },
  {
    id: "channel.owner",
    category: "channel",
    severity: "critical",
    title: "Owner name and email are set",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const owner = chNode(ctx, "itunes:owner") as Record<string, unknown> | undefined;
      if (!owner)
        return {
          status: "fail",
          detail: "<itunes:owner> is missing.",
          fix: "Apple emails this address to verify ownership. Without it you cannot claim the show.",
        };
      const name = text(first(owner["itunes:name"] as never));
      const email = text(first(owner["itunes:email"] as never));
      if (!email)
        return {
          status: "fail",
          detail: "<itunes:owner> has no <itunes:email>.",
          fix: "This is the address Apple sends the verification email to.",
        };
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return {
          status: "fail",
          detail: `"${email}" isn't a valid email address.`,
          fix: "Verification will never arrive at an address that doesn't parse.",
        };
      return {
        status: name ? "pass" : "warn",
        detail: name ? "Name and email are both set." : "Email is set but the name is missing.",
        ...(name ? {} : { fix: "Add <itunes:name> inside <itunes:owner>." }),
      };
    },
  },
  {
    id: "channel.type",
    category: "channel",
    severity: "info",
    title: "Show type declared",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const t = ch(ctx, "itunes:type")?.toLowerCase();
      if (!t)
        return {
          status: "warn",
          detail: "<itunes:type> isn't set.",
          fix: "Set it to episodic (newest first) or serial (start from episode one). Serial shows especially need this or listeners land in the middle.",
        };
      return ["episodic", "serial"].includes(t)
        ? { status: "pass", detail: `Set to ${t}.` }
        : {
            status: "warn",
            detail: `Set to "${t}".`,
            fix: "Only episodic and serial are valid.",
          };
    },
  },
  {
    id: "channel.new_feed_url",
    category: "channel",
    severity: "info",
    title: "Migration tag",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const v = ch(ctx, "itunes:new-feed-url");
      if (!v) return { status: "not_applicable", detail: "Not migrating." };
      return {
        status: "pass",
        detail: `Redirecting to ${v}.`,
        fix: "Keep this in place for at least four weeks so every platform picks the change up. Removing it early strands listeners on the old feed.",
      };
    },
  },
  {
    id: "channel.link_resolves",
    category: "channel",
    severity: "warning",
    title: "Website link is a real URL",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const link = ch(ctx, "link");
      if (!link) return null;
      try {
        const u = new URL(link);
        return u.protocol === "https:"
          ? { status: "pass", detail: "Points at an HTTPS page." }
          : {
              status: "warn",
              detail: "The show link uses plain HTTP.",
              fix: "Use the HTTPS version — some apps refuse to open insecure links.",
            };
      } catch {
        return {
          status: "warn",
          detail: `"${link}" isn't a valid URL.`,
          fix: "The <link> tag should be your show's homepage, with the scheme included.",
        };
      }
    },
  },
  {
    id: "channel.stale_build",
    category: "channel",
    severity: "info",
    title: "Feed has been updated recently",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const raw = ch(ctx, "lastBuildDate") ?? ch(ctx, "pubDate");
      if (!raw) return { status: "not_applicable", detail: "No build date set." };
      const when = new Date(raw);
      if (Number.isNaN(when.getTime()))
        return { status: "warn", detail: `"${raw}" isn't a readable date.` };
      const days = (Date.now() - when.getTime()) / 86_400_000;
      return days <= 120
        ? { status: "pass", detail: `Last built ${Math.round(days)} days ago.` }
        : {
            status: "warn",
            detail: `The feed says it was last built ${Math.round(days)} days ago.`,
            fix: "If you've published since then, your host isn't updating this tag — which usually means something in the publishing pipeline is broken.",
          };
    },
  },

  // ───────────────────────── Artwork ─────────────────────────
  {
    id: "artwork.present",
    category: "artwork",
    severity: "critical",
    title: "Artwork is declared and reachable",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;

      // Two different states that must not be conflated: the feed doesn't
      // declare artwork at all (a real failure), versus it declares artwork
      // we didn't fetch. Reporting the second as "missing" would tell people
      // their artwork is absent when it's fine.
      const declared =
        attr(first(ctx.parsed.channel["itunes:image"] as never), "href") ??
        (() => {
          const img = first(ctx.parsed.channel.image as never) as
            | Record<string, unknown>
            | undefined;
          return img ? text(first(img.url as never)) : undefined;
        })();

      if (!declared)
        return {
          status: "fail",
          detail: "<itunes:image> is missing.",
          fix: "Apple rejects feeds without artwork. It must be a direct href attribute, not a nested <url> tag.",
        };

      if (!ctx.artwork)
        return {
          status: "not_applicable",
          detail: "Artwork is declared but wasn't fetched on this run.",
        };

      if (!ctx.artwork.ok)
        return {
          status: "fail",
          detail: ctx.artwork.error ?? `Artwork returned HTTP ${ctx.artwork.status}.`,
          fix: "The image must be publicly reachable with no login. Check it isn't behind a private bucket or a hotlink block.",
        };
      return { status: "pass", detail: "Loaded successfully." };
    },
  },
  {
    id: "artwork.dimensions",
    category: "artwork",
    severity: "critical",
    title: "Artwork is 1400–3000px and square",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      const a = ctx.artwork;
      if (!a?.ok || !a.width || !a.height) return null;
      const problems: string[] = [];
      if (a.width !== a.height)
        problems.push(`it's ${a.width}×${a.height}, not square`);
      if (Math.min(a.width, a.height) < 1400)
        problems.push(`the shortest side is ${Math.min(a.width, a.height)}px, under the 1400px minimum`);
      if (Math.max(a.width, a.height) > 3000)
        problems.push(`the longest side is ${Math.max(a.width, a.height)}px, over the 3000px maximum`);
      return problems.length === 0
        ? { status: "pass", detail: `${a.width}×${a.height}.` }
        : {
            status: "fail",
            detail: `Artwork rejected because ${problems.join(", and ")}.`,
            fix: "Export a square JPEG or PNG between 1400×1400 and 3000×3000. 3000×3000 is the safe choice.",
          };
    },
  },
  {
    id: "artwork.format",
    category: "artwork",
    severity: "critical",
    title: "Artwork is JPEG or PNG",
    run: (ctx) => {
      const a = ctx.artwork;
      if (!a?.ok || !a.format) return null;
      const ok = ["jpeg", "jpg", "png"].includes(a.format.toLowerCase());
      return ok
        ? { status: "pass", detail: `${a.format.toUpperCase()}.` }
        : {
            status: "fail",
            detail: `The artwork is ${a.format.toUpperCase()}.`,
            fix: "Only JPEG and PNG are accepted. WebP, AVIF, HEIC and GIF are all rejected regardless of how good they look.",
          };
    },
  },
  {
    id: "artwork.colour_space",
    category: "artwork",
    severity: "critical",
    title: "Artwork is RGB, not CMYK",
    run: (ctx) => {
      const a = ctx.artwork;
      if (!a?.ok || !a.space) return null;
      const cmyk = /cmyk/i.test(a.space);
      return cmyk
        ? {
            status: "fail",
            detail: "The artwork is in CMYK colour.",
            fix: "Re-export it as RGB. This one catches people out constantly — artwork designed for print looks perfect on screen and gets rejected without a useful error. If a designer sent you the file, ask for an RGB version.",
          }
        : { status: "pass", detail: `${a.space.toUpperCase()} colour.` };
    },
  },
  {
    id: "artwork.file_size",
    category: "artwork",
    severity: "warning",
    title: "Artwork file size is reasonable",
    run: (ctx) => {
      const a = ctx.artwork;
      if (!a?.ok || !a.bytes) return null;
      const kb = a.bytes / 1024;
      if (kb <= 500) return { status: "pass", detail: `${Math.round(kb)} KB.` };
      if (kb <= 1024)
        return {
          status: "warn",
          detail: `${Math.round(kb)} KB.`,
          fix: "Spotify prefers artwork under 500 KB. Re-save at 80% JPEG quality — at this size nobody will see the difference.",
        };
      return {
        status: "fail",
        detail: `${(kb / 1024).toFixed(1)} MB.`,
        fix: "Over 1 MB causes slow loads and some platforms reject it outright. Re-save as JPEG at 80% quality.",
      };
    },
  },

  // ───────────────────────── Episodes ─────────────────────────
  {
    id: "episodes.present",
    category: "episodes",
    severity: "critical",
    title: "Feed contains episodes",
    run: (ctx) => {
      if (!ctx.parsed) return null;
      return ctx.parsed.items.length > 0
        ? { status: "pass", detail: `${ctx.parsed.items.length} episodes.` }
        : {
            status: "fail",
            detail: "The feed has no <item> elements.",
            fix: "Apple rejects empty feeds. Publish at least one episode before submitting.",
          };
    },
  },
  {
    id: "episodes.required_tags",
    category: "episodes",
    severity: "critical",
    title: "Every episode has title, enclosure and GUID",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const missing: string[] = [];
      ctx.parsed.items.forEach((item, i) => {
        const title = text(first(item.title as never)) ?? `Episode ${i + 1}`;
        const enc = first(item.enclosure as never);
        const gaps: string[] = [];
        if (!text(first(item.title as never))) gaps.push("title");
        if (!enc) gaps.push("enclosure");
        else {
          if (!attr(enc, "url")) gaps.push("enclosure url");
          if (!attr(enc, "length")) gaps.push("enclosure length");
          if (!attr(enc, "type")) gaps.push("enclosure type");
        }
        if (!text(first(item.guid as never))) gaps.push("guid");
        if (gaps.length) missing.push(`${title} — missing ${gaps.join(", ")}`);
      });
      return missing.length === 0
        ? { status: "pass", detail: "All episodes have the required tags." }
        : {
            status: "fail",
            detail: `${missing.length} of ${ctx.parsed.items.length} episodes are missing required tags.`,
            fix: "Every item needs a title, a guid, and an enclosure carrying url, length and type. Episodes missing any of these are dropped silently.",
            evidence: missing.slice(0, 12),
          };
    },
  },
  {
    id: "episodes.guid_unique",
    category: "episodes",
    severity: "critical",
    title: "Every GUID is unique",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const seen = new Map<string, number>();
      for (const item of ctx.parsed.items) {
        const g = text(first(item.guid as never));
        if (g) seen.set(g, (seen.get(g) ?? 0) + 1);
      }
      const dupes = [...seen.entries()].filter(([, n]) => n > 1);
      return dupes.length === 0
        ? { status: "pass", detail: "No duplicate GUIDs." }
        : {
            status: "fail",
            detail: `${dupes.length} GUID${dupes.length > 1 ? "s are" : " is"} used by more than one episode.`,
            fix: "Apps use the GUID to tell episodes apart. Duplicates mean some episodes never appear, and which ones vanish varies by app.",
            evidence: dupes.map(([g, n]) => `${g} (${n}×)`).slice(0, 10),
          };
    },
  },
  {
    id: "episodes.guid_stable",
    category: "episodes",
    severity: "critical",
    title: "GUIDs look stable",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const suspect: string[] = [];
      for (const item of ctx.parsed.items) {
        const g = text(first(item.guid as never));
        if (!g) continue;
        if (UNSTABLE_GUID.some((re) => re.test(g))) {
          const t = text(first(item.title as never)) ?? "(untitled)";
          suspect.push(`${t} — ${g}`);
        }
      }
      return suspect.length === 0
        ? { status: "pass", detail: "GUIDs look like permanent identifiers." }
        : {
            status: "fail",
            detail: `${suspect.length} GUID${suspect.length > 1 ? "s look" : " looks"} like it changes when the feed is rebuilt.`,
            fix: "A GUID containing a timestamp, cache-buster or version parameter regenerates every time your host rebuilds the feed. Apps then treat old episodes as brand new and re-notify everyone — or duplicate your entire back catalogue. This is invisible until it has already happened, and it cannot be undone once subscribers have the duplicates.",
            evidence: suspect.slice(0, 10),
          };
    },
  },
  {
    id: "episodes.pubdate_format",
    category: "episodes",
    severity: "critical",
    title: "Publication dates are RFC 2822",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const bad: string[] = [];
      let missing = 0;
      for (const item of ctx.parsed.items) {
        const d = text(first(item.pubDate as never));
        if (!d) { missing++; continue; }
        if (!RFC2822.test(d)) {
          const t = text(first(item.title as never)) ?? "(untitled)";
          bad.push(`${t} — ${d}`);
        }
      }
      if (missing === 0 && bad.length === 0)
        return { status: "pass", detail: "All dates are correctly formatted." };
      const parts: string[] = [];
      if (missing) parts.push(`${missing} missing <pubDate>`);
      if (bad.length) parts.push(`${bad.length} in the wrong format`);
      return {
        status: "fail",
        detail: parts.join(", ") + ".",
        fix: 'Dates must look like "Fri, 21 Nov 2025 09:00:00 +0000". ISO 8601 dates (2025-11-21T09:00:00Z) parse fine to a human and are silently rejected by Apple, which is why this one is so easy to miss.',
        evidence: bad.slice(0, 10),
      };
    },
  },
  {
    id: "episodes.duplicate_enclosures",
    category: "episodes",
    severity: "critical",
    title: "No two episodes share an audio file",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const seen = new Map<string, number>();
      for (const item of ctx.parsed.items) {
        const url = attr(first(item.enclosure as never), "url");
        if (url) seen.set(url, (seen.get(url) ?? 0) + 1);
      }
      const dupes = [...seen.entries()].filter(([, n]) => n > 1);
      return dupes.length === 0
        ? { status: "pass", detail: "Every episode points at its own file." }
        : {
            status: "fail",
            detail: `${dupes.length} audio file${dupes.length > 1 ? "s are" : " is"} used by more than one episode.`,
            fix: "Apple ignores episodes that share an enclosure URL, so the duplicates simply never appear. Usually a copy-paste error when scheduling.",
            evidence: dupes.map(([u, n]) => `${u} (${n}×)`).slice(0, 8),
          };
    },
  },
  {
    id: "episodes.chronology",
    category: "episodes",
    severity: "warning",
    title: "Episodes are in date order",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length < 2) return null;
      const dates = ctx.parsed.items
        .map((i) => new Date(text(first(i.pubDate as never)) ?? ""))
        .filter((d) => !Number.isNaN(d.getTime()));
      if (dates.length < 2) return null;
      let outOfOrder = 0;
      for (let i = 1; i < dates.length; i++)
        if (dates[i].getTime() > dates[i - 1].getTime()) outOfOrder++;
      return outOfOrder === 0
        ? { status: "pass", detail: "Newest first, as expected." }
        : {
            status: "warn",
            detail: `${outOfOrder} episode${outOfOrder > 1 ? "s are" : " is"} out of chronological order.`,
            fix: "Feeds should list newest first. Out-of-order feeds confuse some apps into showing the wrong episode as latest.",
          };
    },
  },
  {
    id: "episodes.future_dated",
    category: "episodes",
    severity: "info",
    title: "No unintended future dates",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const now = Date.now();
      const future = ctx.parsed.items.filter((i) => {
        const d = new Date(text(first(i.pubDate as never)) ?? "");
        return !Number.isNaN(d.getTime()) && d.getTime() > now;
      });
      return future.length === 0
        ? { status: "pass", detail: "No future-dated episodes." }
        : {
            status: "warn",
            detail: `${future.length} episode${future.length > 1 ? "s are" : " is"} dated in the future.`,
            fix: "If that's scheduled publishing, ignore this. If it isn't, those episodes stay hidden in most apps until the date passes.",
          };
    },
  },
  {
    id: "episodes.descriptions",
    category: "episodes",
    severity: "warning",
    title: "Episodes have real descriptions",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const thin: string[] = [];
      for (const item of ctx.parsed.items) {
        const d =
          text(first(item.description as never)) ??
          text(first(item["itunes:summary"] as never)) ??
          "";
        const stripped = d.replace(/<[^>]*>/g, "").trim();
        if (stripped.length < 50) {
          thin.push(text(first(item.title as never)) ?? "(untitled)");
        }
      }
      const pct = Math.round((thin.length / ctx.parsed.items.length) * 100);
      return thin.length === 0
        ? { status: "pass", detail: "Every episode has a description." }
        : {
            status: "warn",
            detail: `${thin.length} of ${ctx.parsed.items.length} episodes (${pct}%) have little or no description.`,
            fix: "Episode descriptions are the only text search engines can read — the audio is invisible to them. They're also what a listener reads when deciding whether to press play.",
            evidence: thin.slice(0, 10),
          };
    },
  },
  {
    id: "episodes.duration",
    category: "episodes",
    severity: "warning",
    title: "Durations are present and valid",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      let missing = 0;
      const bad: string[] = [];
      for (const item of ctx.parsed.items) {
        const d = text(first(item["itunes:duration"] as never));
        if (!d) { missing++; continue; }
        if (!/^(\d+|\d{1,2}:\d{2}(:\d{2})?)$/.test(d)) {
          bad.push(`${text(first(item.title as never)) ?? "(untitled)"} — ${d}`);
        }
      }
      if (missing === 0 && bad.length === 0)
        return { status: "pass", detail: "All durations are valid." };
      const parts: string[] = [];
      if (missing) parts.push(`${missing} missing`);
      if (bad.length) parts.push(`${bad.length} malformed`);
      return {
        status: "warn",
        detail: `Durations: ${parts.join(", ")}.`,
        fix: "Use seconds (3600) or HH:MM:SS (01:00:00). Apps show a blank runtime without it, which costs you plays.",
        evidence: bad.slice(0, 8),
      };
    },
  },
  {
    id: "episodes.duplicate_titles",
    category: "episodes",
    severity: "warning",
    title: "Episode titles are distinct",
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const seen = new Map<string, number>();
      for (const item of ctx.parsed.items) {
        const t = text(first(item.title as never));
        if (t) seen.set(t, (seen.get(t) ?? 0) + 1);
      }
      const dupes = [...seen.entries()].filter(([, n]) => n > 1);
      return dupes.length === 0
        ? { status: "pass", detail: "No repeated titles." }
        : {
            status: "warn",
            detail: `${dupes.length} title${dupes.length > 1 ? "s appear" : " appears"} more than once.`,
            fix: "Listeners can't tell repeated titles apart in an app's episode list.",
            evidence: dupes.map(([t, n]) => `${t} (${n}×)`).slice(0, 8),
          };
    },
  },

  // ───────────────────────── Audio files (sampled) ─────────────────────────
  {
    id: "enclosures.reachable",
    category: "enclosures",
    severity: "critical",
    title: "Sampled audio files load",
    run: (ctx) => {
      if (ctx.enclosures.length === 0) return null;
      const broken = ctx.enclosures.filter((e) => !e.ok);
      return broken.length === 0
        ? { status: "pass", detail: `All ${ctx.enclosures.length} sampled files loaded.` }
        : {
            status: "fail",
            detail: `${broken.length} of ${ctx.enclosures.length} sampled files didn't load.`,
            fix: "A broken enclosure means that episode won't play for anyone. Check the file still exists at that URL.",
            evidence: broken.map((e) => `${e.episodeTitle} — ${e.error ?? `HTTP ${e.status}`}`),
          };
    },
  },
  {
    id: "enclosures.https",
    category: "enclosures",
    severity: "critical",
    title: "Audio files use HTTPS",
    run: (ctx) => {
      if (ctx.enclosures.length === 0) return null;
      const insecure = ctx.enclosures.filter((e) => e.url.startsWith("http://"));
      return insecure.length === 0
        ? { status: "pass", detail: "All sampled files are HTTPS." }
        : {
            status: "fail",
            detail: `${insecure.length} sampled file${insecure.length > 1 ? "s are" : " is"} served over plain HTTP.`,
            fix: "Apple and Spotify require HTTPS for audio. Insecure files fail to play in most modern apps.",
            evidence: insecure.map((e) => e.episodeTitle),
          };
    },
  },
  {
    id: "enclosures.range",
    category: "enclosures",
    severity: "critical",
    title: "Audio host supports byte-range requests",
    docsUrl: APPLE_DOCS,
    run: (ctx) => {
      if (ctx.enclosures.length === 0) return null;
      const reachable = ctx.enclosures.filter((e) => e.ok);
      if (reachable.length === 0) return null;
      const no = reachable.filter((e) => e.acceptsRanges === false);
      return no.length === 0
        ? { status: "pass", detail: "Range requests supported." }
        : {
            status: "fail",
            detail: `${no.length} sampled file${no.length > 1 ? "s don't" : " doesn't"} support range requests.`,
            fix: "Without Accept-Ranges: bytes, listeners can't skip forward and the episode must download fully before it plays. Apple treats this as a requirement.",
            evidence: no.map((e) => e.episodeTitle),
          };
    },
  },
  {
    id: "enclosures.length_accuracy",
    category: "enclosures",
    severity: "warning",
    title: "Declared file sizes are accurate",
    run: (ctx) => {
      const checked = ctx.enclosures.filter(
        (e) => e.ok && e.contentLength && e.declaredLength
      );
      if (checked.length === 0) return null;
      const wrong = checked.filter((e) => {
        const delta = Math.abs((e.contentLength ?? 0) - (e.declaredLength ?? 0));
        return delta > Math.max(1024, (e.contentLength ?? 0) * 0.01);
      });
      return wrong.length === 0
        ? { status: "pass", detail: "Declared sizes match the actual files." }
        : {
            status: "warn",
            detail: `${wrong.length} file${wrong.length > 1 ? "s have" : " has"} a length attribute that doesn't match the real size.`,
            fix: "Apps use the declared length for the progress bar and for download estimates. A wrong value breaks seeking.",
            evidence: wrong.map(
              (e) =>
                `${e.episodeTitle} — declared ${e.declaredLength}, actual ${e.contentLength}`
            ),
          };
    },
  },
  {
    id: "enclosures.type_match",
    category: "enclosures",
    severity: "warning",
    title: "Declared MIME types match",
    run: (ctx) => {
      const checked = ctx.enclosures.filter((e) => e.ok && e.contentType && e.declaredType);
      if (checked.length === 0) return null;
      const mismatched = checked.filter((e) => {
        const served = (e.contentType ?? "").split(";")[0].trim().toLowerCase();
        const declared = (e.declaredType ?? "").trim().toLowerCase();
        return served !== declared && !(served.startsWith("audio/") && declared.startsWith("audio/"));
      });
      return mismatched.length === 0
        ? { status: "pass", detail: "Types match what the server sends." }
        : {
            status: "warn",
            detail: `${mismatched.length} file${mismatched.length > 1 ? "s have" : " has"} a type mismatch.`,
            fix: "The type in the feed should match what the server actually returns, or some apps refuse to play the file.",
            evidence: mismatched.map(
              (e) => `${e.episodeTitle} — feed says ${e.declaredType}, server sends ${e.contentType}`
            ),
          };
    },
  },
  {
    id: "enclosures.redirects",
    category: "enclosures",
    severity: "info",
    title: "Audio redirect behaviour",
    run: (ctx) => {
      const reachable = ctx.enclosures.filter((e) => e.ok);
      if (reachable.length === 0) return null;
      const viaAnalytics = reachable.filter((e) => e.viaAnalyticsPrefix);
      const longChains = reachable.filter((e) => e.redirects > 3 && !e.viaAnalyticsPrefix);
      if (longChains.length === 0)
        return {
          status: "pass",
          detail: viaAnalytics.length
            ? `${viaAnalytics.length} file${viaAnalytics.length > 1 ? "s route" : " routes"} through an analytics prefix, which is normal.`
            : "No unusual redirects.",
        };
      return {
        status: "warn",
        detail: `${longChains.length} file${longChains.length > 1 ? "s take" : " takes"} more than three redirects to reach.`,
        fix: "Every hop adds latency before playback starts. Analytics prefixes are fine; stacked ones aren't.",
        evidence: longChains.map((e) => `${e.episodeTitle} — ${e.redirects} hops`),
      };
    },
  },

  // ───────────────────────── Modern feed features ─────────────────────────
  {
    id: "modern.namespace",
    category: "modern",
    severity: "info",
    title: "Podcasting 2.0 namespace declared",
    docsUrl: PODCAST_NS_DOCS,
    run: (ctx) => {
      if (!ctx.parsed) return null;
      const ns = ctx.parsed.namespaces.podcast;
      return ns
        ? { status: "pass", detail: "Declared — the modern tags below will be read." }
        : {
            status: "warn",
            detail: "Not declared.",
            fix: 'Add xmlns:podcast="https://podcastindex.org/namespace/1.0" to the <rss> element. Nothing breaks without it, but none of the features below will work.',
          };
    },
  },
  {
    id: "modern.transcripts",
    category: "modern",
    severity: "info",
    title: "Transcripts",
    docsUrl: PODCAST_NS_DOCS,
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const withT = ctx.parsed.items.filter((i) => i["podcast:transcript"]).length;
      const total = ctx.parsed.items.length;
      if (withT === total)
        return { status: "pass", detail: `Present on all ${total} episodes.` };
      if (withT > 0)
        return {
          status: "warn",
          detail: `Present on ${withT} of ${total} episodes.`,
          fix: "Worth completing. Transcripts are the only way search engines can read what was actually said, and they make the show usable for deaf and hard-of-hearing listeners.",
        };
      return {
        status: "warn",
        detail: "No episodes carry a transcript.",
        fix: "This is the biggest single miss in most feeds. Your audio is invisible to search — a transcript turns every episode into indexable text, and it's the difference between a show that's findable and one that isn't. It also makes the show accessible to anyone who can't hear it.",
      };
    },
  },
  ...(
    [
      ["podcast:guid", "Show GUID", "A permanent ID for the show that survives moving host."],
      ["podcast:locked", "Import lock", "Stops anyone else importing your feed to a different host."],
      ["podcast:funding", "Funding link", "Surfaces a support link inside the app."],
      ["podcast:person", "Credits", "Names hosts and guests in a machine-readable way."],
    ] as const
  ).map(([tag, label, why]) => ({
    id: `modern.${tag.replace(":", "_")}`,
    category: "modern" as const,
    severity: "info" as const,
    title: label,
    docsUrl: PODCAST_NS_DOCS,
    run: (ctx: CheckContext) => {
      if (!ctx.parsed) return null;
      const present =
        Boolean(ctx.parsed.channel[tag]) ||
        ctx.parsed.items.some((i) => Boolean(i[tag]));
      return present
        ? { status: "pass" as const, detail: "Present." }
        : { status: "warn" as const, detail: "Not present.", fix: why };
    },
  })),
  {
    id: "modern.chapters",
    category: "modern",
    severity: "info",
    title: "Chapters",
    docsUrl: PODCAST_NS_DOCS,
    run: (ctx) => {
      if (!ctx.parsed || ctx.parsed.items.length === 0) return null;
      const withC = ctx.parsed.items.filter((i) => i["podcast:chapters"]).length;
      const total = ctx.parsed.items.length;
      if (withC === 0)
        return {
          status: "warn",
          detail: "No episodes carry chapters.",
          fix: "Chapters let a listener jump to the part they came for, which matters most on long interviews. They also show up as clickable segments in several apps.",
        };
      return withC === total
        ? { status: "pass", detail: `Present on all ${total} episodes.` }
        : { status: "warn", detail: `Present on ${withC} of ${total} episodes.` };
    },
  },
];
