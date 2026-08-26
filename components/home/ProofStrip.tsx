import { continuityFacts } from "@/data/continuity";
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
      </Container>
    </section>
  );
}
