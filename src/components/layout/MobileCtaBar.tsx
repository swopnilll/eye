import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <>
      <div aria-hidden="true" className="h-16 sm:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#eadfd8] bg-[#fbf9f6]/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur sm:hidden">
        <a href={site.contact.phoneHref} className="mx-auto flex min-h-11 max-w-md items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-semibold text-white active:bg-rose-900">Call Pooja · {site.contact.phone}</a>
      </div>
    </>
  );
}
