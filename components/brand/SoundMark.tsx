/**
 * The Selected Frequencies icon: a center-anchored soundwave, recreated
 * from the brand logo artwork. Renders with `fill="currentColor"` so it
 * inherits colour from its parent (navy on light backgrounds, white on
 * dark) — pair with a text-* utility class rather than passing a colour.
 *
 * This is distinct from `Waveform` (components/ui/Waveform.tsx), which is
 * a bottom-anchored, animated bar-chart used purely as decorative texture
 * (hero band, CTA strips) — never as a stand-in for the logo itself.
 */
const BAR_HEIGHTS = [26, 57, 88, 104, 78, 52, 36, 52, 78, 104, 88, 57, 26];
const BAR_WIDTH = 8;
const BAR_GAP = 6;
const CENTER_Y = 60;
const START_X = 12;

export function SoundMark({
  className = "",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {BAR_HEIGHTS.map((h, i) => {
        const x = START_X + i * (BAR_WIDTH + BAR_GAP);
        const y = CENTER_Y - h / 2;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={BAR_WIDTH}
            height={h}
            rx={BAR_WIDTH / 2}
            className={animated ? "sf-mark-bar" : undefined}
            style={
              animated
                ? {
                    transformOrigin: `${x + BAR_WIDTH / 2}px ${CENTER_Y}px`,
                    animationDelay: `${i * 0.07}s`,
                  }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}
