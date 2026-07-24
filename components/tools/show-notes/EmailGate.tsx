"use client";

import { useState } from "react";

interface EmailGateProps {
  fileName: string;
  onSubmit: (email: string) => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailGate({ fileName, onSubmit }: EmailGateProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    onSubmit(email.trim());
  }

  return (
    <div className="mx-auto max-w-md space-y-6 text-center">
      <div className="rounded-xl bg-fog px-5 py-3 text-sm text-muted">
        <span className="font-medium text-foreground">Ready to process:</span>{" "}
        {fileName}
      </div>

      <div className="space-y-2">
        <p className="text-base font-medium text-foreground">
          Where should we send your show notes?
        </p>
        <p className="text-sm text-muted">
          Your transcript and draft show notes will appear on screen. We&rsquo;ll
          also send a copy to your email so you have it to hand.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Generate my show notes →
        </button>
      </form>

      <p className="text-xs text-muted">
        Your audio is deleted after processing. Your email is used to deliver
        results and for occasional follow-up from Selected Frequencies — never
        sold or shared.
      </p>
    </div>
  );
}
