/**
 * Data and scoring for the growth diagnostic.
 *
 * Kept separate from the component so the scoring is testable on its own and
 * the question set can be edited without touching any rendering code. Three
 * questions per layer, four options each, scored 0–3 in the order written —
 * so options must always run worst to best.
 */

export type LayerId =
  | "discovery"
  | "packaging"
  | "retention"
  | "consistency"
  | "measurement";

export interface Layer {
  id: LayerId;
  name: string;
  /** Funnel position. Ties in scoring are broken by this: upstream wins. */
  order: number;
  /** Anchor id of the matching article section, for the jump link. */
  sectionId: string;
  /** One line describing the layer, used above the bars. */
  summary: string;
  /** What being weakest here means in practice. */
  meaning: string;
  /** Why fixing the layers below this one first won't move anything. */
  whyFirst: string;
  /** Which offer is actually relevant to this weakness. */
  cta: "show-notes" | "services";
}

export const LAYERS: Record<LayerId, Layer> = {
  discovery: {
    id: "discovery",
    name: "Discovery",
    order: 1,
    sectionId: "discovery",
    summary: "Whether anybody finds the show at all.",
    meaning:
      "Not enough people are encountering the show for anything else to matter. Your episodes might be excellent, and almost nobody is in a position to find that out.",
    whyFirst:
      "Every other layer operates on people who have already arrived. Improving your cold open or your artwork raises the percentage of a number that is currently too small to move your totals. Fix the top of the funnel and the same improvements downstream start compounding against real volume.",
    cta: "services",
  },
  packaging: {
    id: "packaging",
    name: "Packaging",
    order: 2,
    sectionId: "packaging",
    summary: "Whether the people who find it decide to press play.",
    meaning:
      "People are reaching your show and choosing not to listen. That is a more expensive problem than it looks, because you are already paying the cost of discovery and then discarding the result at the last step.",
    whyFirst:
      "Work on retention only applies to listeners who pressed play. If your titles, artwork and descriptions are losing people before that point, a better edit improves the experience of an audience that never assembles.",
    cta: "show-notes",
  },
  retention: {
    id: "retention",
    name: "Retention",
    order: 3,
    sectionId: "retention",
    summary: "Whether the people who press play stay.",
    meaning:
      "You are acquiring listeners and losing them inside the episode. This is the layer that quietly caps everything, because a show people leave halfway through does not get recommended, does not build habit, and does not convert attention into anything durable.",
    whyFirst:
      "Pushing harder on discovery while this is unfixed means paying to fill a container with a hole in it. More arrivals produce more departures and the underlying numbers barely move.",
    cta: "services",
  },
  consistency: {
    id: "consistency",
    name: "Consistency",
    order: 4,
    sectionId: "consistency",
    summary: "Whether anything compounds from one episode to the next.",
    meaning:
      "Individual episodes may be working, but nothing accumulates. Podcast growth is a compounding process, and compounding needs a predictable base to work against.",
    whyFirst:
      "Improvements to any other layer are one-off gains if the show appears unpredictably. Habit is what turns a good episode into a returning listener, and habit needs something to attach to.",
    cta: "services",
  },
  measurement: {
    id: "measurement",
    name: "Measurement",
    order: 5,
    sectionId: "measurement",
    summary: "Whether you can tell which of the above is actually wrong.",
    meaning:
      "You may not have a growth problem at all. Without a new-versus-returning split and a completion rate, a flat line is unreadable, and you are as likely to be fixing something that works as something that doesn't.",
    whyFirst:
      "This is the one layer where being weakest is arguably good news. Everything else on this page is a guess until you can see which stage is leaking. Measurement is cheap to fix and it tells you where to spend the rest of your effort.",
    cta: "services",
  },
};

/** Funnel order, used for rendering and for tie-breaks. */
export const LAYER_ORDER: LayerId[] = [
  "discovery",
  "packaging",
  "retention",
  "consistency",
  "measurement",
];

export interface QuestionOption {
  label: string;
  /** 0 worst, 3 best. Index in the array must equal the score. */
  score: 0 | 1 | 2 | 3;
}

export interface Question {
  id: string;
  layer: LayerId;
  prompt: string;
  /** Exactly four, ordered worst to best. */
  options: QuestionOption[];
  /**
   * The action to take when this question is one of the weak ones. Written as
   * an instruction rather than a restatement of the problem, because the
   * result panel shows these as the reader's next steps.
   */
  fix: string;
}

const opts = (...labels: string[]): QuestionOption[] =>
  labels.map((label, i) => ({ label, score: i as 0 | 1 | 2 | 3 }));

export const QUESTIONS: Question[] = [
  // ───────────────────────── Discovery ─────────────────────────
  {
    id: "d1",
    layer: "discovery",
    prompt: "How are your episode titles usually written?",
    options: opts(
      "Guest name only",
      "Guest name plus a vague theme",
      "Topic-led, with the guest secondary",
      "Topic-led and written against terms people actually search"
    ),
    fix: "Rewrite your titles so the topic comes first and the guest's name reads as a credential rather than the hook. Start with the most recent ten episodes and the three that have historically performed best, since those are the ones still being found.",
  },
  {
    id: "d2",
    layer: "discovery",
    prompt: "Where does the show exist beyond your podcast host?",
    options: opts(
      "Audio RSS only",
      "RSS plus the occasional social post",
      "RSS plus full video on YouTube",
      "RSS, video, and a consistent clip programme"
    ),
    fix: "Get the show onto YouTube as full episodes, even if the video is simply static artwork over the audio to begin with. A show that exists only as an RSS feed is invisible to the largest discovery surface available to it.",
  },
  {
    id: "d3",
    layer: "discovery",
    prompt: "When an episode goes out, what does the guest receive?",
    options: opts(
      "A link",
      "A link and a thank you",
      "Pre-written copy and assets",
      "Copy, assets sized per platform, and agreed timing"
    ),
    fix: "Build a guest pack: pre-written posts they can paste, images sized for each platform, and an agreed date. Your guest's audience is the cheapest growth channel you have, and sending a bare link puts the work of promoting you onto someone with no reason to do it.",
  },

  // ───────────────────────── Packaging ─────────────────────────
  {
    id: "p1",
    layer: "packaging",
    prompt:
      "At phone thumbnail size, can someone read your show name and guess the subject?",
    options: opts(
      "Neither",
      "The name only",
      "Both, just about",
      "Both instantly, and it stands apart from similar shows"
    ),
    fix: "Shrink your artwork to about 55 pixels and look at it on a phone. If the name is unreadable at that size, the artwork is decoration. Cut the wordmark down, raise the contrast, and drop any detail that disappears.",
  },
  {
    id: "p2",
    layer: "packaging",
    prompt: "What is the first sentence of a typical episode description?",
    options: opts(
      "The guest's job title and bio",
      "A summary of the topics covered",
      "A hook or question the episode answers",
      "A specific claim or tension, written to be clicked"
    ),
    fix: "Move the bio down the page. Open instead with the claim, tension or question the episode resolves — the sentence that would make someone who has never heard of your guest want the answer.",
  },
  {
    id: "p3",
    layer: "packaging",
    prompt: "What does a brand-new listener encounter first?",
    options: opts(
      "The most recent episode, whatever it happens to be",
      "The most recent episode plus a trailer",
      "A trailer and a pinned starting point",
      "A curated entry path with clear series or best-of grouping"
    ),
    fix: "Record a current trailer and pin a starting point. Somebody arriving at episode 147 with no guidance has to gamble on whether your show is for them, and most people decline that bet.",
  },

  // ───────────────────────── Retention ─────────────────────────
  {
    id: "r1",
    layer: "retention",
    prompt: "What happens in the first 90 seconds?",
    options: opts(
      "Music, then a sponsor read, then greetings",
      "Music, then a short intro",
      "A brief cold open, then the intro",
      "A sharp moment from the conversation, then the intro, then straight into substance"
    ),
    fix: "Move your strongest 20 seconds of conversation to the very top, ahead of the music and the introductions. The first 90 seconds decide the episode, and spending them on housekeeping asks for patience you have not yet earned.",
  },
  {
    id: "r2",
    layer: "retention",
    prompt: "How is the episode shaped in the edit?",
    options: opts(
      "Published essentially as recorded",
      "Light tidy-up, topped and tailed",
      "Structured edit with tangents removed",
      "Structured to a promise made early and paid off, with pacing decided deliberately"
    ),
    fix: "Decide what each episode promises in its first two minutes, then edit so that promise is paid off. A conversation is raw material; an episode is a shaped thing. Interesting people talking without editorial shape does not survive contact with a commute.",
  },
  {
    id: "r3",
    layer: "retention",
    prompt: "How consistent is audio between speakers and across episodes?",
    options: opts(
      "Noticeably variable",
      "Mostly fine, with occasional problems",
      "Consistent levels and decent rooms",
      "Loudness-normalised, rooms treated or corrected, consistent across the back catalogue"
    ),
    fix: "Level the speakers against each other and normalise loudness so your show sits at the same volume as everything else in a listener's feed. Nobody writes in to say the levels were uneven. They just stop.",
  },

  // ──────────────────────── Consistency ────────────────────────
  {
    id: "c1",
    layer: "consistency",
    prompt: "How predictable is the publishing schedule?",
    options: opts(
      "Whenever an episode is ready",
      "Roughly monthly-ish",
      "The same day most weeks",
      "The same day, every time, without exception"
    ),
    fix: "Pick one day and defend it, even if that means dropping to fortnightly to make it achievable. A show that appears when it is ready never becomes part of anyone's routine, and routine is the mechanism by which podcasts grow.",
  },
  {
    id: "c2",
    layer: "consistency",
    prompt: "How many episodes have you published?",
    options: opts("Under 10", "10 to 25", "26 to 75", "More than 75"),
    fix: "Keep going, and treat this as the least alarming result on the page. Podcast growth compounds, back-catalogue discovery takes time to start contributing, and a large share of shows stop before they reach the point where it does.",
  },
  {
    id: "c3",
    layer: "consistency",
    prompt: "What do you do with your existing listeners?",
    options: opts(
      "Nothing specific",
      "The occasional call for reviews",
      "Regular engagement and a route for feedback",
      "An email list, a community, or a way for listeners to shape the show"
    ),
    fix: "Ask the audience you already have for something. Two hundred people listen; most shows never ask them a question, never give them a way to reply, and never give them a reason to bring somebody with them.",
  },

  // ─────────────────────── Measurement ────────────────────────
  {
    id: "m1",
    layer: "measurement",
    prompt: "Which numbers do you check?",
    options: opts(
      "Downloads",
      "Downloads and chart position",
      "Downloads, followers and completion rate",
      "All of those plus new-versus-returning listener splits"
    ),
    fix: "Add completion rate and follower growth to whatever you already track. Downloads tell you how many files were requested, which is close to the least informative thing you could know about your show.",
  },
  {
    id: "m2",
    layer: "measurement",
    prompt: "Can you tell whether flat numbers mean stagnation or churn?",
    options: opts("No", "Not really", "Roughly", "Yes, I track it"),
    fix: "Find the new-versus-returning split in your host's analytics. A flat line can mean nobody new is arriving, or it can mean you are gaining and losing listeners at the same rate. Those need opposite responses and look identical on a download graph.",
  },
  {
    id: "m3",
    layer: "measurement",
    prompt: "What is this show actually for?",
    options: opts(
      "Growth for its own sake",
      "Building an audience, purpose undefined",
      "Credibility with a specific group",
      "A defined outcome, with a way to tell whether it is working"
    ),
    fix: "Write down what the show is for and who it is for, then decide how you would know it was working. For an expert-led show, reach is a proxy metric and often a poor one — 400 of the right listeners can be worth more than 8,000 of the wrong ones.",
  },
];

export const QUESTIONS_PER_LAYER = 3;
export const MAX_LAYER_SCORE = QUESTIONS_PER_LAYER * 3;

/** An answer array holds one option index per question, or null if unanswered. */
export type Answers = (number | null)[];

export const emptyAnswers = (): Answers => QUESTIONS.map(() => null);

export interface LayerScore {
  layer: Layer;
  /** Raw 0–9. */
  raw: number;
  /** 0–100. */
  percent: number;
}

export interface DiagnosticResult {
  scores: LayerScore[];
  bottleneck: Layer;
  /**
   * Actions for the bottleneck layer, weakest question first, and only for
   * questions that didn't score full marks — advice about something the
   * reader already does well is noise.
   */
  actions: { question: Question; score: number; fix: string }[];
}

export function scoreAnswers(answers: Answers): DiagnosticResult {
  const scores: LayerScore[] = LAYER_ORDER.map((id) => {
    const raw = QUESTIONS.reduce((sum, q, i) => {
      if (q.layer !== id) return sum;
      const a = answers[i];
      return sum + (a == null ? 0 : q.options[a].score);
    }, 0);
    return {
      layer: LAYERS[id],
      raw,
      percent: Math.round((raw / MAX_LAYER_SCORE) * 100),
    };
  });

  // Lowest percentage wins. On a tie the earlier funnel layer wins, because an
  // upstream problem constrains everything below it — there is no point
  // sending someone to fix retention when discovery is equally broken.
  const bottleneck = [...scores].sort(
    (a, b) => a.percent - b.percent || a.layer.order - b.layer.order
  )[0].layer;

  const actions = QUESTIONS.map((question, i) => ({
    question,
    index: i,
    score: answers[i] == null ? 0 : question.options[answers[i] as number].score,
  }))
    .filter((x) => x.question.layer === bottleneck.id && x.score < 3)
    .sort((a, b) => a.score - b.score)
    .map(({ question, score }) => ({ question, score, fix: question.fix }));

  return { scores, bottleneck, actions };
}

// ───────────────────────── URL encoding ─────────────────────────

/**
 * Answers encode as one base-4 digit per question, so a completed run is a
 * 15-character string like "231023102310231". Short enough to share in a
 * message without a shortener, and trivially validated on the way back in.
 */
export function encodeAnswers(answers: Answers): string {
  return answers.map((a) => (a == null ? "-" : String(a))).join("");
}

export function decodeAnswers(raw: string | null): Answers | null {
  if (!raw || raw.length !== QUESTIONS.length) return null;
  const out: Answers = [];
  for (const ch of raw) {
    if (ch === "-") {
      out.push(null);
      continue;
    }
    const n = Number(ch);
    if (!Number.isInteger(n) || n < 0 || n > 3) return null;
    out.push(n);
  }
  // A partial run isn't a shareable result, so treat it as no result at all
  // rather than rendering a bottleneck derived from unanswered questions.
  return out.some((a) => a == null) ? null : out;
}

export const RESULT_PARAM = "d";
