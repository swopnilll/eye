import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
            light ? "text-teal-100" : "text-teal-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-balance text-[clamp(1.75rem,8.5vw,2.25rem)] font-bold sm:text-4xl ${light ? "text-white" : ""} ${
          Tag === "h1" ? "lg:text-5xl" : ""
        }`}
      >
        {title}
      </Tag>
      {text ? (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-brand-100" : "text-muted"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
