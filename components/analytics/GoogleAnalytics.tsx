import Script from "next/script";

/**
 * Google Analytics 4.
 *
 * Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in the Vercel project env vars to
 * enable it. Renders nothing until set, so local and preview builds don't
 * pollute the property with traffic that isn't real.
 *
 * ⚠️  CONSENT: unlike Plausible (which this replaced), GA4 writes cookies and
 * collects personal data, so UK GDPR / PECR require consent BEFORE it runs.
 * Consent Mode is initialised below with everything denied, which is the
 * compliant default — GA then sends only cookieless pings until consent is
 * granted. To actually collect analytics you need a consent banner that calls:
 *
 *   window.gtag('consent', 'update', { analytics_storage: 'granted' })
 *
 * Without that banner this reports very little, by design. That is the honest
 * trade for GA being free where Plausible was paid and needed no banner.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) return null;

  return (
    <>
      {/* Consent defaults must run before the GA library, hence a separate
          beforeInteractive script rather than folding it into the config. */}
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
