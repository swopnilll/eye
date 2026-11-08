import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-linear-to-b from-brand-50/80 to-white">
      <div aria-hidden="true" className="bg-cross-pattern pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="animate-breathe pointer-events-none absolute -right-24 -top-24 hidden size-96 rounded-full border-[18px] border-teal-100/60 sm:block"
      />
      <Container className="hero-in relative py-12 sm:py-20">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} text={text} />
        {children ? (
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap [&>a]:w-full sm:[&>a]:w-auto">
            {children}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
