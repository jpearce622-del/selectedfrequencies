import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The positioning argument, placed above the services section.
 *
 * Sits before "what I do" on purpose: how long someone keeps doing it
 * matters more than the deliverable list, and the deliverable list is the
 * part any freelancer can also claim.
 */
export function ShowsThatDontStop() {
  return (
    <section className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <h2 className="font-display max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Shows that don&apos;t stop
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted">
            <p>
              Most podcasts don&apos;t die because nobody was listening. They
              die of production friction. The edit slips a week, then a
              fortnight, and the show quietly becomes something the host feels
              behind on.
            </p>
            <p>
              On a long-running show the job isn&apos;t one brilliant episode.
              It&apos;s episode 200 sounding like episode 1 without the host
              having to think about it. Same voice, same standard, same day,
              for years.
            </p>
            <p>
              That&apos;s the whole offer. Not a service list, a show that
              keeps going.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
