import { Container } from "@/components/ui/Container";

/** A single prominent brand message (brief §13) with a faint ECG motif. */
export function MessageBand({ message, tone = "teal" }: { message: string; tone?: "teal" | "blue" }) {
  const tones = {
    teal: "bg-teal-500 text-white",
    blue: "bg-brand-50 text-brand-900",
  };
  const stroke = tone === "teal" ? "white" : "#0B6CB6";
  return (
    <div className={`relative overflow-hidden ${tones[tone]} py-7`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
      >
        <path
          d="M0 40 H340 L360 40 L372 14 L386 66 L398 40 H800 L820 40 L832 12 L846 68 L858 40 H1200"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <Container>
        <p className="relative text-balance text-center font-display text-lg font-bold sm:text-2xl">
          {message}
        </p>
      </Container>
    </div>
  );
}
