import { Activity, Globe, HeartPulse, Stethoscope } from "lucide-react";
import { Lungs } from "@/components/ui/Lungs";

/**
 * Hero "care scene": a photo frame (gradient until approved photography is
 * supplied — swap the inner <div> for <Image fill /> and keep the overlays)
 * with a breathing ring, an animated ECG trace and illustrative vitals.
 * On small screens the floating cards collapse into a compact chip row.
 * All motion is CSS and stops under prefers-reduced-motion.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 hidden size-48 rounded-full bg-leaf-100/70 blur-2xl sm:block"
      />

      {/* frame */}
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-card sm:aspect-5/4 sm:rounded-[2rem] lg:aspect-4/5">
        <div className="absolute inset-0 bg-linear-to-br from-brand-700 via-brand-600 to-teal-500" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_20%,white_0,transparent_40%),radial-gradient(circle_at_85%_85%,white_0,transparent_45%)]"
        />

        {/* breathing rings + lungs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-40 items-center justify-center sm:size-56">
            <span
              aria-hidden="true"
              className="animate-breathe absolute inset-0 rounded-full border border-white/40"
            />
            <span
              aria-hidden="true"
              className="animate-breathe absolute inset-5 rounded-full bg-white/10 [animation-delay:-3s] sm:inset-6"
            />
            <span className="relative flex size-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-sm sm:size-28">
              <Lungs className="size-11 text-white sm:size-16" strokeWidth={1.4} />
            </span>
          </div>
        </div>

        {/* mobile vitals chip inside the frame */}
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2 pr-3 text-xs font-semibold text-brand-900 shadow-card backdrop-blur sm:hidden">
          <span className="relative flex size-6 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <Activity className="size-3.5" aria-hidden="true" />
            <span aria-hidden="true" className="animate-pulse-dot absolute -right-0.5 -top-0.5 size-2 rounded-full bg-teal-500" />
          </span>
          SpO₂ 96% <span className="font-normal text-muted">· illustrative</span>
        </div>

        {/* ECG trace */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 120"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-6 h-16 w-full sm:bottom-10 sm:h-24"
        >
          <path
            d="M0 60 H120 L140 60 L155 20 L170 100 L185 60 H300 L320 60 L335 25 L350 95 L365 60 H480 L500 60 L515 22 L530 98 L545 60 H600"
            fill="none"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 60 H120 L140 60 L155 20 L170 100 L185 60 H300 L320 60 L335 25 L350 95 L365 60 H480 L500 60 L515 22 L530 98 L545 60 H600"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="animate-ecg"
            style={{ strokeDasharray: "180 1020" }}
          />
        </svg>

        <p className="absolute inset-x-0 bottom-2.5 text-center text-[11px] font-medium text-white/70 sm:hidden">
          Illustrative — photograph of care at home to be supplied
        </p>
      </div>

      {/* mobile chip row (replaces floating cards) */}
      <ul className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
        {[
          { icon: Stethoscope, label: "Doctor-led care", tone: "bg-brand-50 text-brand-600" },
          { icon: Globe, label: "International input", tone: "bg-teal-50 text-teal-600" },
          { icon: HeartPulse, label: "Weekly to 24-hour support", tone: "bg-leaf-50 text-leaf-600" },
        ].map(({ icon: ChipIcon, label, tone }) => (
          <li
            key={label}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-brand-900 shadow-card"
          >
            <span className={`flex size-7 items-center justify-center rounded-full ${tone}`}>
              <ChipIcon className="size-4" aria-hidden="true" />
            </span>
            {label}
          </li>
        ))}
      </ul>

      {/* floating cards (tablet and up) */}
      <div className="animate-float absolute -left-4 top-8 hidden w-56 rounded-2xl border border-line bg-white p-4 shadow-card sm:block lg:-left-10">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Stethoscope className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-900">Doctor-led care</p>
            <p className="text-xs text-muted">Locally registered clinicians</p>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -right-4 top-1/3 hidden w-52 rounded-2xl border border-line bg-white p-4 shadow-card sm:block lg:-right-8 [animation-delay:-2s]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">SpO₂ · illustrative</p>
            <p className="font-display text-2xl font-bold text-brand-900">
              96<span className="text-base font-semibold text-muted">%</span>
            </p>
          </div>
          <span className="relative flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Activity className="size-5" aria-hidden="true" />
            <span aria-hidden="true" className="animate-pulse-dot absolute -right-1 -top-1 size-2.5 rounded-full bg-teal-500" />
          </span>
        </div>
      </div>

      <div className="animate-float absolute -right-2 bottom-24 hidden w-60 rounded-2xl border border-line bg-white p-4 shadow-card sm:block lg:-right-10 [animation-delay:-4s]">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
            <Globe className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-900">International input</p>
            <p className="text-xs text-muted">Specialist case discussions</p>
          </div>
        </div>
      </div>

      <div className="animate-float-slow absolute -bottom-5 left-8 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-card sm:flex sm:items-center sm:gap-3 [animation-delay:-5s]">
        <span className="flex size-10 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600">
          <HeartPulse className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-900">Weekly visits to 24-hour support</p>
          <p className="text-xs text-muted">Care plans built around you</p>
        </div>
      </div>
    </div>
  );
}
