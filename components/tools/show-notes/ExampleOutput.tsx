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

        {/* Generated show notes */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
            Generated show notes
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-foreground">
            <p className="font-semibold text-base">
              Why Your Strategic Plan Is Already Dead — And What to Do Instead
            </p>
            <p className="text-muted text-sm italic">
              Most strategy documents get ignored the moment a new quarter starts. Sarah Chen explains why.
            </p>
            <div>
              <p className="font-medium mb-1.5">In This Episode</p>
              <ul className="space-y-1 text-muted">
                <li>• Why having 12 strategic priorities means you have zero</li>
                <li>• The whiteboard circle exercise that focused an entire organisation</li>
                <li>• Strategy as a filter, not a document</li>
                <li>• How to say no to &ldquo;shiny opportunity&rdquo; without killing morale</li>
                <li>• The discipline gap between writing strategy and holding the line</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1.5">Key Takeaways</p>
              <ul className="space-y-1 text-muted">
                <li>• Real strategy is a set of choices, not a planning document</li>
                <li>• If everything is a priority, nothing is</li>
                <li>• Build a simple filter and apply it consistently to every new decision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
