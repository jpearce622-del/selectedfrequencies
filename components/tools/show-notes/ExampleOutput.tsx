// Static example shown ungated on the landing page — real indexable content
// for SEO. Fictional episode; quality intentionally demonstrates what the
// tool produces.
export function ExampleOutput() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-fog px-6 py-3.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Example output
        </p>
      </div>

      <div className="grid divide-y divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        {/* Transcript excerpt */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
            Transcript
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            &ldquo;The thing most companies get wrong about strategy is they
            treat it as a planning exercise. They spend three days offsite,
            fill whiteboards, and leave with a 40-page document that nobody
            reads. Real strategy is a set of choices — not a plan, but a
            positioning. You&rsquo;re deciding what you won&rsquo;t do as
            much as what you will. And the discipline to hold that line when
            a shiny opportunity shows up? That&rsquo;s actually harder than
            writing the strategy in the first place.&rdquo;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            &ldquo;We ran into this at scale. We had 12 strategic priorities
            — which is 11 too many. Eventually the CEO just drew a circle on
            the whiteboard and said: everything inside is core, everything
            outside we kill or outsource. That became our filter for the
            next three years.&rdquo;
          </p>
          <p className="mt-3 text-xs text-muted italic">
            ↑ A short excerpt — the full transcript is returned in your results
          </p>
        </div>

        {/* Generated content suite */}
        <div className="p-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted">
            Generated content suite
          </p>
          <div className="space-y-5 text-sm leading-relaxed text-foreground">
            {/* YouTube titles */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                YouTube Titles
              </p>
              <ul className="space-y-1 text-foreground">
                <li>⭐ Why Your Strategy Document Is Already Dead</li>
                <li>The 12-Priority Trap That Quietly Kills Companies</li>
                <li>Real Strategy Isn&rsquo;t a Plan — It&rsquo;s a Filter</li>
                <li>The Whiteboard Circle That Refocused a Company</li>
              </ul>
            </div>

            {/* Thumbnail text */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                Thumbnail Text
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["12 IS TOO MANY", "KILL THE LIST", "DRAW THE CIRCLE", "PICK ONE THING"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md bg-fog px-2 py-0.5 text-xs font-bold tracking-wide text-foreground"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* YouTube description */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                YouTube Description
              </p>
              <p className="text-muted">
                Most strategy documents get ignored the moment a new quarter
                starts — Sarah Chen explains what to do instead.
              </p>
              <ul className="mt-1.5 space-y-1 text-muted">
                <li>• Why 12 strategic priorities is 11 too many</li>
                <li>• The whiteboard-circle test for what&rsquo;s really core</li>
                <li>• Strategy as an ongoing filter, not a document</li>
              </ul>
              <p className="mt-1.5 text-muted">Watch / listen here: [LINK]</p>
            </div>

            {/* Chapters */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                Chapters
              </p>
              <ul className="space-y-1 text-muted">
                {[
                  ["00:00", "The strategy trap"],
                  ["02:14", "Why 12 priorities fail"],
                  ["05:40", "The whiteboard circle"],
                  ["09:12", "Holding the line"],
                  ["13:48", "Strategy as a filter"],
                ].map(([time, title]) => (
                  <li key={time}>
                    <span className="tabular-nums text-foreground">{time}</span>{" "}
                    {title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                YouTube Tags
              </p>
              <p className="text-muted">
                strategy, business strategy, strategic planning, prioritisation,
                leadership, Sarah Chen, decision making, focus, startup strategy{" "}
                <span className="text-muted/70">(298)</span>
              </p>
            </div>

            {/* X post */}
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-accent">
                X Post
              </p>
              <p className="whitespace-pre-line text-foreground">
                {"They had 12 strategic priorities.\nWhich is 11 too many.\n🧵👇"}
              </p>
            </div>

            <p className="pt-1 text-xs text-muted italic">
              Plus a pinned comment and a LinkedIn post — you choose which
              sections to generate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
