import type { LucideProps } from "lucide-react";

/** Lungs mark (lucide has no lungs icon). Drawn to match lucide's 24px / 1.75 stroke style. */
export function Lungs({ size = 24, strokeWidth = 1.75, ...rest }: LucideProps) {
  // `absoluteStrokeWidth` is a lucide-only prop; keep it off the DOM element.
  const { absoluteStrokeWidth, ...props } = rest;
  void absoluteStrokeWidth;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v6" />
      <path d="M12 9l-2 1.5M12 9l2 1.5" />
      <path d="M10 10.5C7 10.5 3.5 14 3.5 17.8c0 1.8 1.2 2.7 2.8 2.7 2.2 0 3.7-1.5 3.7-3.7V10.5Z" />
      <path d="M14 10.5c3 0 6.5 3.5 6.5 7.3 0 1.8-1.2 2.7-2.8 2.7-2.2 0-3.7-1.5-3.7-3.7V10.5Z" />
    </svg>
  );
}
