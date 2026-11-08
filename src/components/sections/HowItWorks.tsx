import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/content/pages";

export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <Section tone="surface" id="how-it-works">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How IRA Healthcare works"
            title="Five simple steps from first contact to care at home"
            text={
              compact
                ? undefined
                : "Whether you apply online, call us or visit the office, the journey is the same: assess, plan, deliver and review — with your family kept informed throughout."
            }
            align="center"
          />
        </Reveal>
        <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-11 hidden h-0.5 bg-linear-to-r from-brand-200 via-teal-200 to-leaf-100 lg:block"
          />
          {howItWorks.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 90}
              className="card-lift relative rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-600 font-display text-base font-bold text-white ring-4 ring-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
