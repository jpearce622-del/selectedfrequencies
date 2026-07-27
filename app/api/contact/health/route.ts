import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Diagnostic for the contact form's SMTP setup. Tests the connection and
// login with verify() WITHOUT sending an email, and reports the failure
// reason so misconfiguration can be fixed without digging through logs.
//
// Reports presence of credentials as booleans and returns only the SMTP
// error code/message — never the values of SMTP_USER or SMTP_PASS.
// Safe to delete once the form is working.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;

  const env = {
    SMTP_HOST: Boolean(host),
    SMTP_USER: Boolean(user),
    SMTP_PASS: Boolean(pass),
    SMTP_PORT: port,
    CONTACT_TO_EMAIL: Boolean(process.env.CONTACT_TO_EMAIL),
  };

  if (!host || !user || !pass) {
    return NextResponse.json({
      configured: false,
      verified: false,
      env,
      hint: "Missing SMTP_HOST, SMTP_USER or SMTP_PASS in this deployment. Add them in Vercel → Settings → Environment Variables, then redeploy.",
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
  });

  try {
    await transporter.verify();
    return NextResponse.json({
      configured: true,
      verified: true,
      env,
      hint: "SMTP connection and login succeeded — the contact form should send.",
    });
  } catch (err) {
    const e = err as NodeJS.ErrnoException & {
      responseCode?: number;
      command?: string;
    };

    let hint = "SMTP verification failed — see code/message.";
    if (e.responseCode === 535 || /invalid login|auth/i.test(e.message ?? "")) {
      hint =
        "Authentication rejected. SMTP_PASS must be the mailbox password for this address (not the Fasthosts account login), and SMTP/IMAP access must be enabled on the mailbox.";
    } else if (e.code === "ENOTFOUND" || e.code === "EAI_AGAIN") {
      hint = "Host not found — check SMTP_HOST.";
    } else if (e.code === "ETIMEDOUT" || e.code === "ECONNECTION") {
      hint = `Could not connect on port ${port}. Try the other port (587 for STARTTLS, 465 for implicit TLS).`;
    } else if (/wrong version number|SSL routines/i.test(e.message ?? "")) {
      hint = `TLS mismatch on port ${port}. Switch SMTP_PORT to ${port === 465 ? 587 : 465}.`;
    }

    return NextResponse.json({
      configured: true,
      verified: false,
      env,
      error: {
        code: e.code ?? null,
        responseCode: e.responseCode ?? null,
        command: e.command ?? null,
        message: (e.message ?? "").slice(0, 300),
      },
      hint,
    });
  }
}
