import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime (not edge).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Cold-outreach spam (SEO/ads/web-design solicitation) passes the honeypot
// because it fills the visible fields like a real person would. Scored
// rather than matched on single words: James's own clients and blog talk
// about SEO and keywords, so one hit must never be enough to block.
//
// Phrases that are effectively only ever sales solicitation.
const STRONG_SPAM = [
  /top of (the )?search results?/i,
  /you pick the keywords/i,
  /first page of google/i,
  /guarantee\w*\s+(rankings?|traffic|results)/i,
  /rank(ing)? (you|your site|your business) (higher|#?1|first)/i,
  /we (can )?put your (banner|ad|business|website)/i,
  /increase your (website )?traffic/i,
];

// Weaker signals — meaningful only in combination.
const WEAK_SPAM = [
  /\bbacklinks?\b/i,
  /\bbanner\b/i,
  /no contracts?\b/i,
  /\bseo (services|agency|expert|company)\b/i,
  /web ?(site)? design services/i,
  /digital marketing (services|agency)/i,
  /\bcold ?call/i,
  /\bbulk email/i,
  /prepare a few keyword options/i,
];

/**
 * Score a submission. 2+ blocks it: a strong phrase alone is decisive, or
 * two weak signals together. A genuine enquiry that happens to mention SEO
 * or keywords scores 1 and still gets through.
 */
function spamScore(text: string): number {
  let score = 0;
  for (const re of STRONG_SPAM) if (re.test(text)) score += 2;
  for (const re of WEAK_SPAM) if (re.test(text)) score += 1;
  return score;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, message, company } = body as Record<string, string>;
  const { renderedAt } = body as { renderedAt?: number };

  // All three checks below return { ok: true } rather than an error: a bot
  // that's told it failed just retunes and tries again, whereas a silent
  // success gives it nothing to work with. Each is logged so a false
  // positive is visible in the runtime logs rather than vanishing.

  // 1. Honeypot: real users never fill this hidden field.
  if (company) {
    console.warn("[contact] blocked: honeypot filled");
    return NextResponse.json({ ok: true });
  }

  // 2. Timing trap: the form records when it rendered. A human cannot read
  //    the page, type a name, an email and a message inside three seconds;
  //    scripted submissions almost always post immediately. Skipped
  //    entirely when the timestamp is missing or implausible, so a slow
  //    hydrate or a stale open tab never blocks a real person.
  if (typeof renderedAt === "number" && Number.isFinite(renderedAt)) {
    const elapsed = Date.now() - renderedAt;
    if (elapsed >= 0 && elapsed < 3000) {
      console.warn(`[contact] blocked: submitted in ${elapsed}ms`);
      return NextResponse.json({ ok: true });
    }
  }

  // 3. Solicitation scoring across the whole submission.
  const score = spamScore(`${name ?? ""} ${message ?? ""}`);
  if (score >= 2) {
    console.warn(`[contact] blocked: spam score ${score} from ${email ?? "?"}`);
    return NextResponse.json({ ok: true });
  }

  // Only name and email are required — the message is optional so an
  // enquiry is never blocked by a blank text box.
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // SMTP config (Fasthosts mailbox). Set these in Vercel → Environment
  // Variables. SMTP_PASS is the mailbox password — keep it out of git.
  // Trim: values pasted into the Vercel dashboard routinely carry a stray
  // tab/newline, which makes DNS try to resolve "\tsmtp.example.com".
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT?.trim()) || 587;

  // Enquiries always go to James; CONTACT_TO_EMAIL can override.
  const to = process.env.CONTACT_TO_EMAIL?.trim() || "james@selectedfrequencies.com";

  // Reply-To normally carries the enquirer's address, and that difference is
  // what makes the message read as a forwarded enquiry rather than mail we
  // sent ourselves. When someone types one of our own addresses into the form,
  // From, To and Reply-To collapse onto the same address — the self-addressed
  // pattern phishing uses, which mail clients junk on sight. Drop Reply-To in
  // that case; the address is still recorded in the body below.
  const senderDomain = (user ?? "").split("@")[1]?.toLowerCase() ?? "";
  const replyAddress = email.trim();
  const replyIsOurs =
    replyAddress.toLowerCase() === (user ?? "").toLowerCase() ||
    replyAddress.toLowerCase() === to.toLowerCase() ||
    (senderDomain !== "" &&
      replyAddress.toLowerCase().endsWith(`@${senderDomain}`));

  if (!host || !user || !pass) {
    console.error(
      "Contact form is not configured: missing SMTP_HOST, SMTP_USER, or SMTP_PASS."
    );
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // Most SMTP servers require the From to be the authenticated mailbox.
      from: `Selected Frequencies Website <${user}>`,
      to,
      ...(replyIsOurs ? {} : { replyTo: replyAddress }),
      subject: `New enquiry from ${name.trim()}${service ? ` — ${service.trim()}` : ""}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}${replyIsOurs ? "  ⚠️ our own address — reply-to omitted, likely a test or spoof" : ""}`,
        service ? `Service interested in: ${service.trim()}` : null,
        "",
        message?.trim() || "(No message — they'd rather talk it through.)",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("SMTP send failed:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
