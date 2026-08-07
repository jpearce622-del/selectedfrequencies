"use client";

import { useEffect, useId, useState } from "react";
import { showNotesSections, type AnnotatedSection } from "./data";

/**
 * An annotated worked example: a realistic set of show notes where every
 * element can be inspected to see why it's there.
 *
 * PROGRESSIVE ENHANCEMENT — the reason this is built the way it is:
 *
 * The annotations ARE the substance of the article, so they must exist as real
 * text in the server HTML. This is a Client Component, which Next still
 * renders on the server, and it is imported WITHOUT `ssr: false` so that
 * happens. Nothing is conditionally removed from the DOM — disclosure is
 * handled with CSS and ARIA only.
 *
 * The first render (server HTML, and any browser without JS) shows every
 * annotation expanded beneath its section: readable, crawlable, complete.
 * `enhanced` flips to true after mount, at which point the annotations
 * collapse into the hover/tap/keyboard experience. So JS improves the
 * component; it is never required to read it.
 */
export default function ShowNotesAnatomy() {
  const [enhanced, setEnhanced] = useState(false);
  // Hover/focus is transient; a tap or Enter *pins* a section so it survives
  // the pointer moving away. Keeping them separate is what stops a keyboard
  // user's Enter from immediately undoing the selection their own focus made.
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const baseId = useId();

  // Deferred a frame rather than set synchronously: the first paint must match
  // the server HTML (annotations expanded), and this avoids the cascading
  // re-render lint rule the rest of the codebase follows.
  useEffect(() => {
    const id = requestAnimationFrame(() => setEnhanced(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const annotationId = (id: string) => `${baseId}-note-${id}`;

  const active = pinned ?? hovered;

  const activeSection =
    showNotesSections.find((s) => s.id === active) ?? null;

  return (
    <div className="not-prose my-10">
      <p className="mb-4 text-sm text-muted">
        Hover any section to see why it&apos;s there — or tap on mobile.
      </p>

      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        {/* ---------------- The example document ---------------- */}
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-2 border-b border-border bg-fog px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Episode 84 — show notes
            </p>
          </div>

          <div className="divide-y divide-border">
            {showNotesSections.map((section) => (
              <Row
                key={section.id}
                section={section}
                enhanced={enhanced}
                isActive={active === section.id}
                annotationId={annotationId(section.id)}
                onHover={setHovered}
                onToggle={(id) => setPinned((p) => (p === id ? null : id))}
              />
            ))}
          </div>
        </div>

        {/* ---------------- Desktop annotation panel ----------------
            Enhancement only: on small screens, and with JS off, the
            annotation renders inline beneath its own row instead. */}
        {enhanced && (
          <aside
            className="sticky top-28 hidden rounded-2xl border border-border bg-fog p-6 lg:block"
            aria-live="polite"
          >
            {activeSection ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {activeSection.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {activeSection.annotation}
                </p>
              </>
            ) : (
              <p className="text-sm leading-7 text-muted">
                Hover or focus any part of the show notes on the left, and
                the reason it&apos;s there will appear here.
              </p>
            )}
          </aside>
        )}
      </div>

      <p className="mt-4 text-xs leading-5 text-muted-foreground">
        The show, guest, and episode above are illustrative — a fictional
        example written for this article, not a real client&apos;s episode.
      </p>
    </div>
  );
}

function Row({
  section,
  enhanced,
  isActive,
  annotationId,
  onHover,
  onToggle,
}: {
  section: AnnotatedSection;
  enhanced: boolean;
  isActive: boolean;
  annotationId: string;
  onHover: (id: string | null) => void;
  onToggle: (id: string) => void;
}) {
  return (
    <div
      // Interactive only once enhanced: without JS these are inert blocks with
      // the annotation already visible, so exposing button semantics would be
      // a lie to assistive tech.
      {...(enhanced
        ? {
            role: "button" as const,
            tabIndex: 0,
            "aria-expanded": isActive,
            "aria-describedby": annotationId,
            onMouseEnter: () => onHover(section.id),
            onMouseLeave: () => onHover(null),
            onFocus: () => onHover(section.id),
            onBlur: () => onHover(null),
            onClick: () => onToggle(section.id),
            onKeyDown: (e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onToggle(section.id);
              }
            },
          }
        : {})}
      className={`group relative block w-full px-5 py-4 text-left transition-colors motion-reduce:transition-none ${
        enhanced ? "cursor-pointer" : ""
      } ${
        isActive ? "bg-accent/[0.07]" : "hover:bg-fog"
      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset`}
    >
      {/* Active marker — a bar in the accent, rather than a colour change
          alone, so the state isn't communicated by colour only. */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-0.5 transition-colors motion-reduce:transition-none ${
          isActive ? "bg-accent" : "bg-transparent"
        }`}
      />

      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {section.label}
        </p>
        {enhanced && (
          <span
            aria-hidden="true"
            className={`shrink-0 text-[11px] font-medium ${
              isActive ? "text-accent" : "text-muted-foreground/70"
            }`}
          >
            {isActive ? "Why —" : "Why?"}
          </span>
        )}
      </div>

      {section.list ? (
        <ul className="mt-2 space-y-1.5">
          {section.lines.map((line) => (
            <li
              key={line}
              className="flex items-start gap-2.5 text-sm leading-6 text-foreground"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {line}
            </li>
          ))}
        </ul>
      ) : (
        <div className={`mt-2 space-y-1 ${section.mono ? "font-mono" : ""}`}>
          {section.lines.map((line) => (
            <p
              key={line}
              className={`leading-6 text-foreground ${
                section.mono ? "text-xs text-muted" : "text-sm"
              } ${section.id === "title" ? "font-semibold" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {/* The annotation. ALWAYS in the DOM — this is what search engines and
          AI answer engines read. Visible by default (no JS / first paint);
          once enhanced it shows inline below `lg`, and in the side panel
          above it. Never conditionally rendered away. */}
      <p
        id={annotationId}
        className={`mt-3 border-l-2 border-accent/40 pl-3 text-sm leading-6 text-muted ${
          enhanced ? (isActive ? "block lg:hidden" : "hidden") : "block"
        }`}
      >
        {section.annotation}
      </p>
    </div>
  );
}
