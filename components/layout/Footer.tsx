import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Waveform } from "@/components/ui/Waveform";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-deep text-background">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-6 w-14 opacity-80">
              <Waveform bars={9} barClassName="bg-amber" />
            </div>
            <p className="font-display text-xl font-semibold tracking-tight">
              Selected Frequencies
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-background/55">
            End-to-end podcast production for expert and thought-leadership
            shows — founders, coaches, and finance voices.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-background/60 transition-colors hover:text-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-deep-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Selected Frequencies. All rights reserved.
        </p>
        <p className="text-xs text-background/40">
          Podcast production, London &amp; remote {/* TODO: confirm location line */}
        </p>
      </Container>
    </footer>
  );
}
