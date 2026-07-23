import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL."
    );
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please try again later." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
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

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
