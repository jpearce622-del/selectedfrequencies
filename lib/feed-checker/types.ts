export type Severity = "critical" | "warning" | "info";
export type Status = "pass" | "warn" | "fail" | "not_applicable";

export type CategoryId =
  | "transport"
  | "structure"
  | "channel"
  | "artwork"
  | "episodes"
  | "enclosures"
  | "modern";

export const CATEGORIES: Record<
  CategoryId,
  { label: string; blurb: string; additiveOnly?: boolean }
> = {
  transport: {
    label: "Feed delivery",
    blurb: "Whether platforms can reach and read the feed at all.",
  },
  structure: {
    label: "XML & namespaces",
    blurb: "Whether the file parses and declares what it needs to.",
  },
  channel: {
    label: "Show details",
    blurb: "The channel-level tags Apple rejects feeds for missing.",
  },
  artwork: {
    label: "Artwork",
    blurb: "The single most common cause of rejection.",
  },
  episodes: {
    label: "Episodes",
    blurb: "Checked across every episode in the feed.",
  },
  enclosures: {
    label: "Audio files",
    blurb: "Sampled — the 10 most recent plus 5 chosen at random.",
  },
  modern: {
    label: "Modern feed features",
    blurb:
      "Podcasting 2.0 tags. Nothing here is required by any platform, so nothing here can fail — it only ever adds to your score.",
    additiveOnly: true,
  },
};

export interface CheckResult {
  id: string;
  category: CategoryId;
  severity: Severity;
  status: Status;
  title: string;
  /** Plain English: what this means. Shown under the title. */
  detail: string;
  /** What to do about it. Omitted when the check passed. */
  fix?: string;
  docsUrl?: string;
  /** Optional supporting figures, e.g. affected episode titles. */
  evidence?: string[];
}

/** Everything a check can look at, assembled once before checks run. */
export interface CheckContext {
  feedUrl: string;
  /** Redirect chain from the original URL to the final one. */
  chain: string[];
  httpStatus: number;
  headers: Headers;
  responseMs: number;
  bodyBytes: number;
  rawXml: string;
  /** Null when the XML failed to parse — structural checks handle that. */
  parsed: ParsedFeed | null;
  parseError?: string;
  artwork?: ArtworkProbe;
  enclosures: EnclosureProbe[];
  /** Which episode indices were deep-checked. */
  sampledIndices: number[];
}

export interface ParsedFeed {
  channel: Record<string, unknown>;
  items: Array<Record<string, unknown>>;
  namespaces: Record<string, string>;
  rssVersion?: string;
}

export interface ArtworkProbe {
  url: string;
  ok: boolean;
  status?: number;
  contentType?: string;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
  /** sharp reports "cmyk" for CMYK JPEGs — a silent rejection cause. */
  space?: string;
  error?: string;
}

export interface EnclosureProbe {
  episodeTitle: string;
  url: string;
  ok: boolean;
  status?: number;
  contentType?: string;
  contentLength?: number;
  declaredLength?: number;
  declaredType?: string;
  acceptsRanges?: boolean;
  redirects: number;
  /** True when the redirect chain passes through a known analytics prefix. */
  viaAnalyticsPrefix?: boolean;
  error?: string;
}

/**
 * A check is a plain object. The engine maps over a flat registry, so adding
 * a check never means touching the engine — which is the point.
 */
export interface Check {
  id: string;
  category: CategoryId;
  severity: Severity;
  title: string;
  docsUrl?: string;
  /**
   * Return a single result, several (for per-episode checks that want to
   * report once), or null to skip entirely.
   */
  run(ctx: CheckContext): Omit<CheckResult, "id" | "category" | "severity" | "title" | "docsUrl"> | null;
}

export interface CategoryScore {
  id: CategoryId;
  label: string;
  score: number;
  max: number;
  results: CheckResult[];
}

export interface Report {
  feedUrl: string;
  finalUrl: string;
  checkedAt: string;
  score: number;
  grade: string;
  verdict: string;
  criticalCount: number;
  warningCount: number;
  passCount: number;
  categories: CategoryScore[];
  meta: {
    title?: string;
    episodeCount: number;
    sampledCount: number;
    responseMs: number;
    feedBytes: number;
  };
}
