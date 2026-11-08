import type { ReactNode } from "react";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={`Last updated: ${updated}`} />
      <Section>
        <Container size="narrow">
          <div className="space-y-6 leading-relaxed text-ink [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
            {children}
          </div>
          <p className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Draft for review. This document must be reviewed by IRA Healthcare&apos;s leadership and
            legal adviser, and aligned with applicable Nepali law, before publication.
          </p>
        </Container>
      </Section>
    </>
  );
}
