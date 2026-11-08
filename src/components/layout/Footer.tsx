import Link from "next/link";
import { cacheLife } from "next/cache";
import { MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="bg-[#302321] px-5 py-10 text-[#f5e9e3] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div><Logo variant="light"/><p className="mt-4 max-w-xs text-sm leading-6 text-[#d7c5bb]">{site.tagline}</p></div>
        <div className="flex flex-col gap-3 text-sm sm:items-end"><p className="flex items-center gap-2 text-[#d7c5bb]"><MapPin className="size-4 text-rose-200"/>{site.address.full}</p><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/#services" className="hover:text-white">Services</Link><Link href="/#about" className="hover:text-white">About Pooja</Link><Link href="/#contact" className="hover:text-white">Contact</Link></div><p className="text-xs text-[#a9958b]">© <CurrentYear /> {site.legalName}</p></div>
      </div>
    </footer>
  );
}
