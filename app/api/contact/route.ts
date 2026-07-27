import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node.js runtime (not edge).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, service, message, company } = body as Record<string, string>;

  // Honeypot: real users never fill this hidden field.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
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
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()}${service ? ` — ${service.trim()}` : ""}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        service ? `Service interested in: ${service.trim()}` : null,
        "",
        message.trim(),
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
