/**
 * Fixture harness for the check engine.
 *
 * Runs every fixture through parse + score with no network access, asserting
 * that each one trips the check it was built to trip. Network behaviour
 * (SSRF, enclosure probing) is covered separately — this file exists so a
 * change to a check can't silently stop detecting the thing it exists for.
 *
 * Run with:  npx tsx lib/feed-checker/verify.ts
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parseFeed } from "./parse";
import { score } from "./engine";
import type { CheckContext, Report } from "./types";

const FIXTURES = join(process.cwd(), "lib/feed-checker/__fixtures__");

function reportFor(xml: string): Report {
  const { feed, error } = parseFeed(xml);
  const ctx: CheckContext = {
    feedUrl: "https://example.com/feed.xml",
    chain: ["https://example.com/feed.xml"],
    httpStatus: 200,
    headers: new Headers({
      "content-type": "application/rss+xml",
      etag: '"abc"',
      "accept-ranges": "bytes",
    }),
    responseMs: 400,
    bodyBytes: Buffer.byteLength(xml),
    rawXml: xml,
    parsed: feed,
    parseError: error,
    enclosures: [],
    sampledIndices: [],
  };
  return score(ctx);
}

const statusOf = (r: Report, id: string) =>
  r.categories.flatMap((c) => c.results).find((x) => x.id === id)?.status;

interface Expectation {
  fixture: string;
  /** check id → status it must have. */
  expect: Record<string, "pass" | "warn" | "fail" | "not_applicable">;
  /** Optional assertion on the overall score. */
  scoreUnder?: number;
  scoreOver?: number;
}

const EXPECTATIONS: Expectation[] = [
  {
    fixture: "clean.xml",
    expect: {
      "structure.well_formed": "pass",
      "episodes.guid_unique": "pass",
      "episodes.guid_stable": "pass",
      "episodes.pubdate_format": "pass",
      "channel.category": "pass",
      "channel.explicit": "pass",
      "channel.language": "pass",
    },
    scoreOver: 55,
  },
  {
    fixture: "duplicate-guid.xml",
    expect: { "episodes.guid_unique": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "unstable-guid.xml",
    expect: { "episodes.guid_stable": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "iso-dates.xml",
    expect: { "episodes.pubdate_format": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "duplicate-enclosure.xml",
    expect: { "episodes.duplicate_enclosures": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "unescaped-amp.xml",
    expect: { "structure.unescaped_entities": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "bad-channel.xml",
    expect: {
      "channel.category": "fail",
      "channel.explicit": "fail",
      "channel.language": "fail",
    },
    scoreUnder: 50,
  },
  {
    fixture: "wrong-case.xml",
    expect: { "structure.tag_case": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "no-namespace.xml",
    expect: { "structure.itunes_namespace": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "malformed.xml",
    expect: { "structure.well_formed": "fail" },
    scoreUnder: 50,
  },
  {
    fixture: "blog-feed.xml",
    // A blog feed parses fine but has no enclosures and none of the podcast tags.
    expect: {
      "episodes.required_tags": "fail",
      "structure.itunes_namespace": "fail",
    },
    scoreUnder: 50,
  },
  {
    fixture: "thin-descriptions.xml",
    expect: { "episodes.descriptions": "warn" },
  },
  {
    fixture: "large-500.xml",
    expect: { "episodes.present": "pass", "episodes.guid_unique": "pass" },
  },
];

let failures = 0;
let assertions = 0;

console.log("Feed checker fixture verification\n");

for (const { fixture, expect, scoreUnder, scoreOver } of EXPECTATIONS) {
  const xml = readFileSync(join(FIXTURES, fixture), "utf8");
  const started = Date.now();
  const report = reportFor(xml);
  const ms = Date.now() - started;

  const problems: string[] = [];
  for (const [id, want] of Object.entries(expect)) {
    assertions++;
    const got = statusOf(report, id);
    if (got !== want) problems.push(`${id}: expected ${want}, got ${got ?? "(not run)"}`);
  }
  if (scoreUnder !== undefined) {
    assertions++;
    if (report.score >= scoreUnder)
      problems.push(`score ${report.score} should be under ${scoreUnder}`);
  }
  if (scoreOver !== undefined) {
    assertions++;
    if (report.score <= scoreOver)
      problems.push(`score ${report.score} should be over ${scoreOver}`);
  }

  const mark = problems.length === 0 ? "PASS" : "FAIL";
  if (problems.length) failures++;
  console.log(
    `  ${mark}  ${fixture.padEnd(26)} score ${String(report.score).padStart(3)} (${report.grade})  ${String(ms).padStart(4)}ms`
  );
  for (const p of problems) console.log(`         ↳ ${p}`);
}

console.log(
  `\n${assertions - failures}/${assertions} assertions across ${EXPECTATIONS.length} fixtures` +
    (failures ? ` — ${failures} fixture(s) failing` : " — all fixtures passing")
);

process.exit(failures === 0 ? 0 : 1);
