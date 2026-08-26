import { continuityFacts, episodes2026 } from "@/data/continuity";
import { Container } from "@/components/ui/Container";

/**
 * Retention proof, directly under the hero.
 *
 * Deliberately undesigned: no icons, no counting-up animation, no Reveal
 * wrapper. A number that animates reads as a marketing device, and the claim
 * here only works if it reads as a fact someone wrote down. The restraint is
 * the argument.
 *
 * Server-rendered with no client JS, so it's in the initial HTML and costs
 * nothing on Core Web Vitals.
 */
export function ProofStrip() {
  return (
    <section
      aria-label="Client retention"
      className="border-b border-border bg-fog"
    >
      <Container className="py-8 sm:py-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
          {continuityFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-display text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                {fact.value}
              </dt>
              <dd className="mt-1.5 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Volume, under the retention cells rather than in them: the strip
            argues that shows stay, and this argues that there are a lot of
            them. "Including private and paywalled series" is doing real work
            — public feeds only account for 133 of these, and naming why the
            rest are invisible is better than leaving a prospect to find the
            gap and draw their own conclusion. */}
        <p className="mt-7 border-t border-border pt-5 text-xs leading-5 text-muted sm:text-sm">
          {/* Comma inside the span: JSX preserves the newline between a
              closing tag and following punctuation as a space, which renders
              as "2026 , including". */}
          <span className="font-medium text-foreground">
            {episodes2026.claim} episodes produced so far in 2026,
          </span>{" "}
          including private and paywalled series.
        </p>
      </Container>
    </section>
  );
}
