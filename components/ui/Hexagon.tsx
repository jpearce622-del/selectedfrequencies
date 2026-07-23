import { type ReactNode } from "react";

// Flat-top hexagon matching the Selected Frequencies logo mark.
const HEX_CLIP =
  "polygon(25% 1%, 75% 1%, 99% 50%, 75% 99%, 25% 99%, 1% 50%)";
const HEX_POINTS = "25,1 75,1 99,50 75,99 25,99 1,50";

/**
 * Brand hexagon. Renders an outlined hex (optionally filled) with content
 * clipped inside — used to frame the equalizer motif, echoing the logo.
 */
export function Hexagon({
  children,
  className = "",
  stroke = "var(--accent)",
  strokeWidth = 1.4,
  fill = "none",
}: {
  children?: ReactNode;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
}) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <polygon
          points={HEX_POINTS}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
      {children && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: HEX_CLIP }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
