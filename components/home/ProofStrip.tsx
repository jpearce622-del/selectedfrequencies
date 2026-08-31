import { episodes2026 } from "@/data/continuity";
import { Container } from "@/components/ui/Container";

/**
 * A single quiet line under the hero.
 *
 * This used to be a four-cell grid of per-client retention facts (5 years on
 * The Genetics Podcast, 189 episodes, Assemble You since Nov 2022, Outthinker
 * Network since 2023). It was too much specific detail about named clients
 * for a homepage: a visitor who has just arrived does not yet care which
 * episode of which show was taken over in which month, and four large figures
 * demanded that they did.
 *
 * All of it still exists, in the place where someone actively looking for it
 * will find it: the `continuity` block on each case study renders the same
 * facts as hero chips and a "Still running" section. Detail belongs where the
 * reader has already chosen the subject.
 *
 * What stays here is the one non-client-specific claim: total volume. It says
 * this is a working business without naming anybody, which is the right
 * amount of assertion for a homepage.
 *
 * `continuityFacts` in data/continuity.ts is deliberately kept even though
 * nothing renders it today. It is the audited record of what was verified,
 * and it is the source to reach for if a proof strip is ever wanted again.
 */
export function ProofStrip() {
  return (
    <section aria-label="Production volume" className="border-b border-border bg-fog">
      <Container className="py-5 sm:py-6">
        <p className="text-xs leading-5 text-muted sm:text-sm">
          <span className="font-medium text-foreground">
            {episodes2026.claim} episodes produced so far in 2026,
          </span>{" "}
          including private and paywalled series.
        </p>
      </Container>
    </section>
  );
}
