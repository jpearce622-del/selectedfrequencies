import Image from "next/image";
import { companies } from "@/content/companies";

/** Static row of company logos — distinct from the podcast client marquee. */
export function CompanyLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {companies.map((company) => (
        <Image
          key={company.name}
          src={company.logo}
          alt={company.name}
          width={160}
          height={44}
          className="h-7 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8"
        />
      ))}
    </div>
  );
}
