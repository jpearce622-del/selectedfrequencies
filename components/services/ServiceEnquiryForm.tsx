"use client";

import { useState, type FormEvent } from "react";

/**
 * Enquiry form for the service landing pages.
 *
 * Six fields, which is already at the limit of what a conversion form should
 * ask. Everything here either routes the enquiry or is needed to answer it;
 * nothing is collected because it might be interesting later.
 *
 * `formTag` is per page, so James can tell which landing page produced which
 * enquiry without any analytics setup. It's a hidden field rather than a
 * query parameter so it survives a visitor arriving from anywhere.
 */

const SITUATIONS = [
  "Launching a new show",
  "I have an existing show",
  "Agency with client work",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ServiceEnquiryForm({
  formTag,
  submitLabel,
  /** Agencies are asked about client shows; founders about their own. */
  showKindLabel = "What kind of show?",
  showKindPlaceholder = "e.g. weekly B2B interview show, filmed",
}: {
  formTag: string;
  submitLabel: string;
  showKindLabel?: string;
  showKindPlaceholder?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Set once on mount so the server can reject submissions that arrive
  // faster than a human could have typed them.
  const [renderedAt] = useState(() => Date.now());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, renderedAt }),
      });
      const result = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-lg font-medium">Thanks — that&rsquo;s come through.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          You&rsquo;ll get a reply from James, usually within one working day.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 min-h-[44px] w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";
  const label = "block text-sm font-medium text-foreground";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot. Real people never fill a field they cannot see. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />
      {/* Which page produced this enquiry. */}
      <input type="hidden" name="source" value={formTag} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formTag}-name`} className={label}>
            Name
          </label>
          <input
            id={`${formTag}-name`}
            name="name"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${formTag}-email`} className={label}>
            Email
          </label>
          <input
            id={`${formTag}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formTag}-org`} className={label}>
          Company <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id={`${formTag}-org`}
          name="organisation"
          autoComplete="organization"
          className={field}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formTag}-show`} className={label}>
            {showKindLabel}
          </label>
          <input
            id={`${formTag}-show`}
            name="showKind"
            placeholder={showKindPlaceholder}
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${formTag}-situation`} className={label}>
            Where you are
          </label>
          <select
            id={`${formTag}-situation`}
            name="situation"
            defaultValue=""
            className={field}
          >
            <option value="" disabled>
              Choose one
            </option>
            {SITUATIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formTag}-message`} className={label}>
          Anything else
        </label>
        <textarea
          id={`${formTag}-message`}
          name="message"
          rows={4}
          placeholder="What you need, and anything that isn't working now."
          className={field}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[48px] w-full rounded-full bg-accent px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
