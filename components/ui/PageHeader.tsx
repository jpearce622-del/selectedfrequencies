import { type ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal
          as="h1"
          delay={80}
          className="font-display mt-4 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
        >
          {title}
        </Reveal>
        {intro && (
          <Reveal delay={160} className="mt-6 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">{intro}</p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
