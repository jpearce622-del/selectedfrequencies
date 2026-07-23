import Image from "next/image";
import Link from "next/link";
import { shows } from "@/content/shows";

function ShowTile({ show }: { show: (typeof shows)[number] }) {
  const tile = (
    <Image
      src={show.artwork}
      alt={show.name}
      width={112}
      height={112}
      className="h-14 w-14 rounded-xl object-cover shadow-sm ring-1 ring-border transition duration-300 hover:scale-105 sm:h-16 sm:w-16"
    />
  );

  return (
    <div className="shrink-0 px-4" title={show.name}>
      {show.caseStudySlug ? (
        <Link href={`/work/${show.caseStudySlug}`}>{tile}</Link>
      ) : (
        tile
      )}
    </div>
  );
}

/**
 * Infinite, seamless artwork marquee of shows produced by the studio.
 * The list is rendered twice and the track translated -50%, so the loop
 * is gapless. Pauses on hover; frozen under prefers-reduced-motion
 * (see .sf-marquee in globals.css).
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
        {shows.map((show) => (
          <ShowTile key={show.name} show={show} />
        ))}
        {/* Duplicate set for the seamless loop */}
        {shows.map((show) => (
          <ShowTile key={`${show.name}-dup`} show={show} />
        ))}
      </div>
    </div>
  );
}
