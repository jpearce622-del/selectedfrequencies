import Script from "next/script";

// Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. selectedfrequencies.com) in your
// Vercel project env vars to enable analytics. Renders nothing until set,
// so local/dev builds don't send traffic to Plausible.
export function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
