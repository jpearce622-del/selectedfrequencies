"use client";

import { useState } from "react";
import type {
  Language,
  ShowConfig,
  ShowType,
  Tone,
} from "@/types/show-notes";
import { SECTION_META } from "@/lib/content-suite-prompt";

interface ConfigPanelProps {
  config: ShowConfig;
  onChange: (patch: Partial<ShowConfig>) => void;
  disabled?: boolean;
}

const TONES: { value: Tone; label: string }[] = [
  { value: "punchy", label: "Punchy" },
  { value: "warm", label: "Warm" },
  { value: "educational", label: "Educational" },
  { value: "professional", label: "Professional" },
];

const SHOW_TYPES: { value: ShowType; label: string }[] = [
  { value: "general", label: "General" },
  { value: "finance", label: "Finance" },
  { value: "health", label: "Health" },
  { value: "legal", label: "Legal" },
];

const MAX_GUESTS = 4;

export function ConfigPanel({ config, onChange, disabled }: ConfigPanelProps) {
  // Collapsed by default on mobile; always open on desktop (sm:block).
  const [open, setOpen] = useState(false);

  const guestCount = config.guests.length;

  function setGuestCount(next: number) {
    const clamped = Math.max(0, Math.min(MAX_GUESTS, next));
    const guests = [...config.guests];
    while (guests.length < clamped) guests.push("");
    guests.length = clamped;
    onChange({ guests });
  }

  function setGuestName(index: number, name: string) {
    const guests = [...config.guests];
    guests[index] = name;
    onChange({ guests });
  }

  function toggleSection(key: (typeof SECTION_META)[number]["key"]) {
    const has = config.sections.includes(key);
    // Keep at least one section ticked.
    if (has && config.sections.length === 1) return;
    const sections = has
      ? config.sections.filter((s) => s !== key)
      : SECTION_META.map((m) => m.key).filter(
          (k) => config.sections.includes(k) || k === key
        );
    onChange({ sections });
  }

  return (
    <div className="rounded-2xl border border-border bg-surface">
      {/* Header — doubles as the mobile collapse toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-5 py-4 text-left sm:cursor-default"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold tracking-tight">
            Show settings
          </span>
          <span className="hidden text-xs text-muted sm:inline">
            Tune the output to your show
          </span>
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-muted transition-transform sm:hidden ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`${open ? "block" : "hidden"} space-y-6 border-t border-border px-5 pb-6 pt-5 sm:block`}
      >
        {/* Group: Show */}
        <fieldset disabled={disabled} className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-widest text-muted">
            Show
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-foreground">
                Show name
              </span>
              <input
                type="text"
                value={config.showName}
                onChange={(e) => onChange({ showName: e.target.value })}
                placeholder="e.g. The Long Game"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-foreground">
                Host name
              </span>
              <input
                type="text"
                value={config.hostName}
                onChange={(e) => onChange({ hostName: e.target.value })}
                placeholder="e.g. Sam Rivera"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </label>
          </div>
        </fieldset>

        {/* Group: Guests */}
        <fieldset disabled={disabled} className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-widest text-muted">
            Guests
          </legend>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">
              Number of guests
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setGuestCount(guestCount - 1)}
                disabled={guestCount === 0}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-lg leading-none text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
                aria-label="Fewer guests"
              >
                −
              </button>
              <span className="w-4 text-center text-sm font-semibold tabular-nums">
                {guestCount}
              </span>
              <button
                type="button"
                onClick={() => setGuestCount(guestCount + 1)}
                disabled={guestCount === MAX_GUESTS}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-lg leading-none text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
                aria-label="More guests"
              >
                +
              </button>
            </div>
          </div>
          {guestCount > 0 && (
            <div className="grid gap-2 sm:grid-cols-2">
              {config.guests.map((name, i) => (
                <input
                  key={i}
                  type="text"
                  value={name}
                  onChange={(e) => setGuestName(i, e.target.value)}
                  placeholder={`Guest ${i + 1} name`}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              ))}
            </div>
          )}
        </fieldset>

        {/* Group: Output */}
        <fieldset disabled={disabled} className="space-y-4">
          <legend className="text-xs font-semibold uppercase tracking-widest text-muted">
            Output
          </legend>

          {/* Language */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-foreground">Language</span>
            <div className="inline-flex rounded-lg border border-border p-0.5">
              {(["UK", "US"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onChange({ language: lang })}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    config.language === lang
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {lang} English
                </button>
              ))}
            </div>
          </div>

          {/* Tone */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-foreground">Tone</span>
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
              {TONES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => onChange({ tone: t.value })}
                  className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${
                    config.tone === t.value
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Show type */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-foreground">
              Show type
            </span>
            <select
              value={config.showType}
              onChange={(e) =>
                onChange({ showType: e.target.value as ShowType })
              }
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              {SHOW_TYPES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sections */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-foreground">Sections</span>
            <div className="grid grid-cols-2 gap-1.5">
              {SECTION_META.map((s) => {
                const checked = config.sections.includes(s.key);
                return (
                  <label
                    key={s.key}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                      checked
                        ? "border-accent/40 bg-accent/5 text-foreground"
                        : "border-border text-muted hover:border-accent/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSection(s.key)}
                      className="h-3.5 w-3.5 accent-accent"
                    />
                    {s.label}
                  </label>
                );
              })}
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
