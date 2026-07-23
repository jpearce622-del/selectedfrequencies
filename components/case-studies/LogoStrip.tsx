import Image from "next/image";
import Link from "next/link";
import { clients } from "@/content/clients";

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
            className="mx-auto h-8 w-auto object-contain grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0"
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
