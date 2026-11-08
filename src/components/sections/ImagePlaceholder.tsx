import { LogoMark } from "@/components/Logo";

/**
 * Stand-in for photography until approved images are supplied.
 * Swap for <Image> with the final asset; keep the same aspect/radius.
 */
export function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-4/3",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-50 via-teal-50 to-leaf-50 ${aspect} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <LogoMark className="size-16 opacity-80" />
        <p className="text-sm font-medium text-brand-800/70">{label}</p>
      </div>
    </div>
  );
}
