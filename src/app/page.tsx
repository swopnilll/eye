import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const browMoments = [
  { number: "01", title: "Shape", caption: "A shape that suits you.", tone: "bg-[#eed6ca]" },
  { number: "02", title: "Define", caption: "Soft, natural definition.", tone: "bg-[#dcb7a7]" },
  { number: "03", title: "Refresh", caption: "A little lift for your day.", tone: "bg-[#c99583]" },
];

function BrowArtwork() {
  return (
    <div className="relative mx-auto aspect-[0.94] w-full max-w-[520px] overflow-hidden rounded-[48%_48%_24px_24px] bg-[#d9b8aa] shadow-[0_30px_80px_-35px_rgba(68,42,35,.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_36%,#f3d8c9_0%,#d9aa96_55%,#98695c_100%)]" />
      <div className="absolute -left-[15%] top-[17%] h-[70%] w-[130%] rotate-[-7deg] rounded-[50%] border-[25px] border-[#704a40]/60 sm:border-[34px]" />
      <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <path d="M91 203c60-62 129-80 197-45 20 10 35 24 48 43" stroke="#573830" strokeWidth="17" strokeLinecap="round" />
        <path d="M119 269c31-43 74-64 123-62 44 1 77 20 103 57-40 37-80 55-124 53-43-2-77-18-102-48Z" fill="#f4e4db" fillOpacity=".76" />
        <path d="M126 266c37-25 74-37 113-35 37 2 68 13 94 34" stroke="#68483e" strokeWidth="7" strokeLinecap="round" />
        <ellipse cx="239" cy="265" rx="34" ry="38" fill="#765345" />
        <ellipse cx="240" cy="264" rx="15" ry="21" fill="#33241f" />
        <circle cx="250" cy="249" r="7" fill="#fff8f3" />
        <path d="M120 298c48 34 102 47 159 39 24-3 45-10 66-21" stroke="#8d6254" strokeWidth="4" strokeLinecap="round" opacity=".65" />
      </svg>
      <span className="absolute right-4 top-5 flex size-14 items-center justify-center rounded-full bg-[#fbf5f0] font-display text-2xl italic text-rose-900 shadow-lg sm:right-7 sm:top-7 sm:size-[4.5rem] sm:text-3xl">P</span>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/65 px-3.5 py-2 text-[0.62rem] font-medium tracking-[0.15em] text-stone-800 backdrop-blur sm:bottom-6 sm:left-6 sm:px-4 sm:text-xs">PERSONAL · NATURAL · YOU</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7eee7]">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-[#ebc9bb]/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-5 py-8 sm:px-8 sm:py-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
          <div className="order-2 pb-3 lg:order-1 lg:pb-0">
            <p className="mb-4 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-900 sm:text-xs"><Sparkles className="size-4" /> Brow care, close to home</p>
            <h1 className="max-w-xl font-display text-[clamp(3.15rem,13vw,6.65rem)] font-medium leading-[0.9] tracking-[-0.065em] text-stone-900">Brows that feel <em className="font-normal text-rose-800">like you.</em></h1>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-stone-600 sm:mt-6 sm:text-lg">Personal brow shaping with Pooja Sharma in Caversham, Perth.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-900 px-5 text-sm font-medium text-white transition hover:bg-rose-900 sm:px-6">Ask about an appointment <ArrowRight className="size-4" /></Link>
              <Link href="/#services" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-stone-300 px-4 text-sm font-medium text-stone-800 hover:bg-white/60 sm:px-5">Explore <ArrowDown className="size-4" /></Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-stone-500 sm:mt-8"><MapPin className="size-4 text-rose-800" /> Caversham · Perth, WA</p>
          </div>
          <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"><BrowArtwork /></div>
        </div>
        <div className="h-1.5 bg-[linear-gradient(90deg,#765047,#c99583,#edd2c5,#9f7165)]" />
      </section>

      <section id="services" className="scroll-mt-20 bg-[#fbf9f6] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-11"><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-800 sm:text-xs">The little details</p><h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-stone-900 sm:mt-3 sm:text-5xl">Your brow moment.</h2></div><span className="hidden text-sm text-stone-500 sm:block">Good brows, easy mornings.</span></div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">{browMoments.map((item) => <article key={item.number} className="group overflow-hidden rounded-2xl border border-[#eadfd8] bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className={`relative flex aspect-[1.5] items-center justify-center overflow-hidden ${item.tone}`}><span className="absolute left-4 top-4 text-[0.65rem] tracking-[0.18em] text-stone-800/60 sm:left-5 sm:top-5">{item.number}</span><div className="h-10 w-[58%] -rotate-3 rounded-[100%] border-t-[9px] border-[#50352f] shadow-[0_-5px_0_-1px_#a97867] transition group-hover:-rotate-6 sm:h-12"/><span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/70 text-stone-800"><ArrowRight className="size-4" /></span></div><div className="p-4 sm:p-6"><h3 className="font-display text-lg font-semibold text-stone-900 sm:text-xl">{item.title}</h3><p className="mt-1 text-sm leading-6 text-stone-500">{item.caption}</p></div></article>)}</div>
          <p className="mt-4 text-xs text-stone-400">Ask Pooja which service is right for you.</p>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 overflow-hidden bg-[#e8d2c7] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-16"><div className="relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center overflow-hidden rounded-full bg-[#c18e7c] sm:max-w-sm"><div className="absolute inset-5 rounded-full border border-white/40"/><div className="absolute inset-10 rounded-full border border-white/40"/><span className="font-display text-[8rem] font-light italic leading-none text-[#f6e8df] sm:text-[12rem]">P</span><span className="absolute bottom-[23%] font-display text-lg italic tracking-wide text-white/90">Pooja Sharma</span></div><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-900 sm:text-xs">A warm hello</p><h2 className="mt-2 max-w-lg font-display text-3xl font-medium leading-tight tracking-tight text-stone-900 sm:mt-3 sm:text-5xl">A Nepali heart, at home in Perth.</h2><p className="mt-4 max-w-lg text-[0.95rem] leading-7 text-stone-700 sm:mt-5 sm:text-base">Hi, I’m Pooja. I’m starting my own brow service in Caversham, bringing care, patience and a personal touch to every appointment.</p></div></div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-stone-900 px-5 py-12 text-white sm:px-8 sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8"><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-rose-200 sm:text-xs">Your next brow day</p><h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:mt-3 sm:text-5xl">Let’s make time for you.</h2><p className="mt-3 text-sm text-stone-300">Caversham, Perth · By appointment</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-64"><a href={site.contact.phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f1d9ce] px-6 text-sm font-semibold text-stone-900 hover:bg-white"><Phone className="size-4"/>Call Pooja · {site.contact.phone}</a><a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-semibold text-white hover:bg-white/10"><MessageCircle className="size-4"/>WhatsApp Pooja</a></div></div></section>
    </>
  );
}
