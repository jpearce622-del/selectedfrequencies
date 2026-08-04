import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { BitcoinMark } from "@/components/brand/BitcoinMark";
import { siteConfig } from "@/lib/metadata";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/bitcoin", label: "Bitcoin" },
  { href: "/contact", label: "Contact" },
];

// Free tools & resources — grouped separately so they read as a set.
//
// /tools is listed here deliberately. The header's "All tools" link lives
// inside a dropdown that only renders once clicked, so it never appears in
// the server HTML and crawlers can't follow it — which left /tools orphaned
// despite being in the sitemap. The footer is server-rendered on every page,
// so this is the link that actually counts.
const resourceLinks = [
  { href: "/tools", label: "All free tools" },
  { href: "/podcast-launch-roadmap", label: "Launch roadmap" },
  { href: "/podcast-editing-cost-calculator", label: "Editing cost calculator" },
  { href: "/tools/show-notes-generator", label: "Show notes generator" },
  { href: "/best-bitcoin-podcasts", label: "Best Bitcoin podcasts" },
];

export function Footer() {
  return (
    <footer className="bg-deep text-background">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 sm:items-start sm:justify-between">
        <div>
          <Logo variant="light" size="md" />
          <p className="mt-4 max-w-sm text-sm text-background/55">
            Full-service podcast editing and production — for any show, with
            deep experience in Bitcoin and finance.
          </p>
          <Link
            href="/bitcoin"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3.5 py-1.5 text-xs font-medium text-background/75 transition-colors hover:border-background/30 hover:text-background"
          >
            <BitcoinMark className="h-4 w-4" />
            We accept Bitcoin
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:justify-items-end">
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-background/40">
              Site
            </p>
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

          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-background/40">
              Free tools
            </p>
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-deep-line py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Selected Frequencies. All rights reserved.
        </p>
        <p className="text-xs text-background/40">
          {siteConfig.positioningShort}
        </p>
      </Container>
    </footer>
  );
}
