import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MessageBand } from "@/components/sections/MessageBand";
import { careArrangements } from "@/content/pages";
import { keyMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Care Packages – Care That Fits Your Life",
  description:
    "From weekly visits to 24-hour home care, IRA Healthcare recommends an individual care plan after assessment, with a clear quotation based on the level and frequency of support required.",
};

export default function CarePackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Personalised care packages"
        title="Care That Fits Your Life"
        text="IRA Healthcare does not offer a single standard package for every patient. Following an initial assessment, our team recommends an individual care plan based on medical requirements, functional abilities, personal preferences and family circumstances."
      >
        <Button href="/apply">Request Your Personalised Care Plan</Button>
      </PageHero>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Available care arrangements"
            title="From Weekly Visits to 24-Hour Support."
            align="center"
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careArrangements.map((c, i) => (
              <li
                key={c.name}
                className={`rounded-2xl border border-line bg-white p-6 shadow-card ${
                  i === careArrangements.length - 1 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted">{c.text}</p>
              </li>
            ))}
            <li className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6">
              <h3 className="text-lg font-semibold">Not sure which level you need?</h3>
              <p className="mt-3 leading-relaxed text-muted">
                That&apos;s expected. Choose “Unsure – require assessment” on the application form
                and our team will recommend the right arrangement after assessment.
              </p>
            </li>
          </ol>
          <p className="mt-8 text-center text-sm text-muted">
            Staffing arrangements and clinical supervision depend on individual requirements.
          </p>
        </Container>
      </Section>

      <Section tone="brand">
        <Container size="narrow" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-100">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Personalised Care. Transparent Pricing.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-100">
            Every patient&apos;s needs are different. Following a comprehensive assessment, our team
            will develop an individual care plan and provide a clear quotation based on the level and
            frequency of support required.
          </p>
          <Button href="/apply" variant="white" size="lg" className="mt-8">
            Request Your Personalised Care Plan
          </Button>
        </Container>
      </Section>

      <HowItWorks compact />

      <MessageBand message={keyMessages[2]} />
    </>
  );
}
