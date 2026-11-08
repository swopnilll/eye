"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Pooja" },
  { href: "/#contact", label: "Find me" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#eee3dd] bg-[#fbf9f6]/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:px-12">
        <Logo withDescriptor={false} />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-stone-600 transition hover:text-rose-900">{link.label}</Link>)}
        </nav>
        <Link href="/#contact" className="hidden rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-900 sm:inline-flex">Book an appointment</Link>
        <button type="button" className="inline-flex size-10 items-center justify-center rounded-full text-stone-900 hover:bg-rose-100 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? <nav aria-label="Mobile" className="border-t border-[#eee3dd] bg-[#fbf9f6] px-4 py-4 md:hidden"><div className="mx-auto grid max-w-7xl gap-1">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-stone-800 hover:bg-rose-50">{link.label}</Link>)}<Link href="/#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-stone-900 px-3 py-3 text-center text-sm font-medium text-white">Book an appointment</Link></div></nav> : null}
    </header>
  );
}
