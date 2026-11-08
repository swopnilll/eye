import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-rose-100 text-rose-900 ${className}`} aria-hidden="true">
      <span className="font-display text-xl italic">P</span>
    </span>
  );
}

export function Logo({ variant = "default", withDescriptor = true }: { variant?: "default" | "light"; withDescriptor?: boolean }) {
  const light = variant === "light";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} – home`}>
      <LogoMark className="size-10" />
      <span className="flex flex-col">
        <span className={`font-display text-base font-semibold tracking-tight sm:text-lg ${light ? "text-white" : "text-stone-900"}`}>Pooja Sharma</span>
        {withDescriptor ? <span className={`mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] ${light ? "text-rose-100" : "text-stone-500"}`}>Brow Artist</span> : null}
      </span>
    </Link>
  );
}
