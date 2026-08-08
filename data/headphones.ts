// data/headphones.ts
//
// SINGLE SOURCE OF TRUTH for the headphone review cluster. The comparison
// table appears on all four reviews plus the hub, so it lives here once —
// otherwise five copies drift apart the first time a price changes.
//
// Every spec below traces to the verified fact list. Prices are deliberately
// RANGES with an "at time of writing" caveat, never a quoted figure.

export interface Headphone {
  id: string;
  name: string;
  slug: string;
  /** Approximate street price range, GBP, at time of writing */
  price: string;
  type: string;
  /** The one thing that defines it */
  standout: string;
  bestFor: string;
  /** Shown on the hub's quick-pick cards */
  pickLabel: string;
  /** Set on the pair we'd steer podcasters away from */
  notRecommended?: boolean;
}

export const headphones: Headphone[] = [
  {
    id: "ath-m30x",
    name: "Audio-Technica ATH-M30x",
    slug: "/blog/audio-technica-ath-m30x-review",
    price: "~£50–£70",
    type: "Closed-back, over-ear",
    standout: "Flat enough to edit on, at the lowest sensible price",
    bestFor: "A first proper pair — recording and editing on a budget",
    pickLabel: "Best budget",
  },
  {
    id: "mdr-7506",
    name: "Sony MDR-7506",
    slug: "/blog/sony-mdr-7506-review",
    price: "~£80–£110",
    type: "Closed-back, over-ear, foldable",
    standout: "The broadcast standard since 1991 — revealing, not flattering",
    bestFor: "The buy-once pair for recording and editing at a desk",
    pickLabel: "Best all-round",
  },
  {
    id: "hd-25",
    name: "Sennheiser HD 25",
    slug: "/blog/sennheiser-hd-25-review",
    price: "~£120–£150",
    type: "Closed-back, on-ear",
    standout: "Rotating capsule for single-ear monitoring; built for the field",
    bestFor: "Location recording, in-person interviews, noisy environments",
    pickLabel: "Best for field & in-person",
  },
  {
    id: "monoprice-110010",
    name: "Monoprice 110010",
    slug: "/blog/monoprice-110010-review",
    price: "~£80",
    type: "Closed-back, over-ear, active noise cancelling",
    standout: "Good ANC listening headphones — but ANC colours what you hear",
    bestFor: "Travel and casual listening. Not for monitoring or editing",
    pickLabel: "Popular, but not for podcasting",
    notRecommended: true,
  },
];

export function otherHeadphones(currentId: string): Headphone[] {
  return headphones.filter((h) => h.id !== currentId);
}

export const HUB_SLUG = "/blog/best-headphones-for-podcasting";

/** Shared FAQ answers, so the same question never gets two different answers. */
export const sharedFaqs = {
  closedBack: {
    question: "Do I need closed-back headphones for podcasting?",
    answer:
      "For recording, yes. Closed-back headphones keep sound inside the cups so it doesn't leak out and get picked up by your microphone, which would leave you with bleed you can't remove later. Open-back headphones sound more natural but are only safe for editing in a room where nothing is being recorded.",
  },
  anc: {
    question: "Should I use noise cancelling headphones to record?",
    answer:
      "No. Active noise cancelling generates an inverse waveform to cancel outside sound, so you're hearing a processed version of your audio rather than the audio itself, and it can add small amounts of latency that make monitoring your own voice disorienting. For recording and editing you want passive closed-back headphones with no active processing.",
  },
};

/**
 * Markdown comparison table for the whole cluster, with `currentId` marked and
 * every other model linked to its review. Generated rather than hand-written
 * so the table is identical on all five pages and can never fall out of sync.
 */
export function comparisonTable(currentId: string): string {
  const rows = headphones.map((h) => {
    const isCurrent = h.id === currentId;
    const name = isCurrent
      ? `**${h.name}** *(this review)*`
      : `[${h.name}](${h.slug})`;
    return `| ${name} | ${h.price} | ${h.type} | ${h.bestFor} |`;
  });
  return [
    "| Headphones | Price | Type | Best for |",
    "| --- | --- | --- | --- |",
    ...rows,
  ].join("\n");
}
