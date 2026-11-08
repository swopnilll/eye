import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  const width = size === "narrow" ? "max-w-3xl" : "max-w-7xl";
  return <div className={`mx-auto w-full ${width} px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "white" | "surface" | "brand" | "tint";
  id?: string;
}) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
    tint: "bg-brand-50/60",
    brand: "bg-brand-900 text-white",
  };
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
