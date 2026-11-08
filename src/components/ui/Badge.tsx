import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "amber" | "blue" | "green";
}) {
  const tones = {
    teal: "bg-teal-50 text-teal-700 ring-teal-500/20",
    amber: "bg-amber-50 text-amber-800 ring-amber-500/30",
    blue: "bg-brand-50 text-brand-700 ring-brand-500/20",
    green: "bg-leaf-50 text-leaf-600 ring-leaf-500/30",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Brief §14: planned services must be identified as upcoming until operational. */
export function PlannedBadge() {
  return <Badge tone="amber">Planned service – coming soon</Badge>;
}
