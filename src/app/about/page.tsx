import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ImagePlaceholder } from "@/components/sections/ImagePlaceholder";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBand } from "@/components/sections/CtaBand";
import { MessageBand } from "@/components/sections/MessageBand";
import { values } from "@/content/pages";
import { keyMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "IRA Healthcare is a multidisciplinary home healthcare organisation in Pokhara, Nepal, integrating medical, nursing, rehabilitation and personal care with international specialist collaboration.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About IRA Healthcare"
        title="Who We Are"
        text="A multidisciplinary home healthcare organisation committed to improving access to high-quality medical and supportive care in Nepal."
      />

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              We believe that patients should have the opportunity to receive appropriate healthcare in
              familiar surroundings, without unnecessary hospital visits or disruption to family life.
            </p>
            <p>
              Our approach integrates medical expertise, nursing, physiotherapy, occupational therapy,
              rehabilitation and compassionate personal care.
            </p>
            <p>
              Through collaboration between locally based healthcare professionals and international
              medical experts, we aim to bring specialist knowledge into everyday patient care.
            </p>
          </div>
          <ImagePlaceholder label="Photograph: the IRA Healthcare team" />
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">Our Mission</p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-brand-900">
              To provide accessible, compassionate and comprehensive home-based healthcare that
              improves quality of life, promotes independence and supports patients and their
              families.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">Our Vision</p>
            <p className="mt-4 font-display text-2xl font-semibold leading-snug text-brand-900">
              To become a leading provider of integrated home healthcare in Nepal, combining local
              clinical expertise with international medical collaboration and modern digital
              healthcare.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="What guides every visit"
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v.name} className="rounded-2xl border border-line p-6">
                <h3 className="text-lg font-semibold text-brand-700">{v.name}</h3>
                <p className="mt-2 text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <MessageBand message={keyMessages[3]} />

      <HowItWorks compact />

      <Section>
        <Container className="text-center">
          <SectionHeading
            title="Meet the people behind IRA Healthcare"
            text="Local clinical and organisational leadership, supported by an international clinical advisory team."
            align="center"
          />
          <Button href="/team" className="mt-8">
            Our Leadership
          </Button>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
