import Image from "next/image";
import Link from "next/link";
import { clients } from "@/content/clients";

function LogoItem({
  client,
}: {
  client: (typeof clients)[number];
}) {
  const logo = (
    <Image
      src={client.logo}
      alt={client.logoAlt}
      width={160}
      height={54}
      className="h-9 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
    />
  );

  return (
    <div className="shrink-0 px-8" title={client.showName}>
      {client.hasCaseStudy ? (
        <Link href={`/work/${client.slug}`}>{logo}</Link>
      ) : (
        logo
      )}
    </div>
  );
}

/**
 * Infinite, seamless logo marquee. The client list is rendered twice and the
 * track is translated -50%, so the loop is gapless. Pauses on hover; frozen
 * under prefers-reduced-motion (see .sf-marquee in globals.css).
 */
export function LogoMarquee() {
  return (
    <div
      className="sf-marquee-group relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="sf-marquee flex w-max items-center">
        {clients.map((client) => (
          <LogoItem key={client.slug} client={client} />
        ))}
        {/* Duplicate set for the seamless loop */}
        {clients.map((client) => (
          <LogoItem key={`${client.slug}-dup`} client={client} />
        ))}
      </div>
    </div>
  );
}

/** Static grid variant, kept for pages that prefer a settled layout. */
export function LogoStrip() {
  return (
    <div className="grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {clients.map((client) => {
        const logo = (
          <Image
            src={client.logo}
            alt={client.logoAlt}
            width={140}
            height={48}
            className="mx-auto h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          />
        );

        return (
          <div key={client.slug} title={client.showName}>
            {client.hasCaseStudy ? (
              <Link href={`/work/${client.slug}`}>{logo}</Link>
            ) : (
              logo
            )}
          </div>
        );
      })}
    </div>
  );
}
