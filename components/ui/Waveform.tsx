/**
 * Animated equalizer — the signature "frequencies" motif. Pure CSS animation
 * (see .sf-bar in globals.css), decorative only, and frozen under
 * prefers-reduced-motion. Bar heights/delays are deterministic so it renders
 * identically on server and client.
 */
const BARS = [
  0.4, 0.7, 1.0, 0.55, 0.85, 0.35, 0.95, 0.6, 0.45, 0.8, 0.5, 0.9, 0.42, 0.72,
  1.0, 0.58, 0.38, 0.82, 0.62, 0.48, 0.92, 0.52, 0.68, 0.44,
];

export function Waveform({
  className = "",
  barClassName = "bg-accent",
  bars = BARS.length,
}: {
  className?: string;
  barClassName?: string;
  bars?: number;
}) {
  const items = BARS.slice(0, bars);

  return (
    <div
      className={`flex h-full w-full items-end gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {items.map((peak, i) => (
        <span
          key={i}
          className={`sf-bar w-full flex-1 rounded-full ${barClassName}`}
          style={{
            height: "100%",
            transform: `scaleY(${peak})`,
            animationDelay: `${(i % 8) * 0.11 + (i % 3) * 0.05}s`,
            animationDuration: `${1.2 + (i % 5) * 0.14}s`,
          }}
        />
      ))}
    </div>
  );
}
