"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades and lifts children in when they scroll into view. Pure CSS transition
 * toggled by IntersectionObserver; disabled automatically under
 * prefers-reduced-motion (see globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const show = () => {
      el.classList.add("is-visible");
      observer.disconnect();
      window.clearTimeout(fallback);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    // Fail-safe: if the observer never fires (odd viewport/zoom cases on some
    // mobile browsers), reveal anyway rather than leave content hidden.
    const fallback = window.setTimeout(show, 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
