import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ImagePlaceholder } from "@/components/sections/ImagePlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { MessageBand } from "@/components/sections/MessageBand";
import { AdvisersSection } from "@/components/sections/Advisers";
import { internationalFeatures } from "@/content/pages";
import { getService } from "@/content/services";
import { keyMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "International Expertise, Delivered Locally",
  description:
    "IRA Healthcare connects Nepal-based clinicians with experienced international medical specialists through structured case discussions and clinical guidance, while care stays with locally registered professionals.",
};

export default function InternationalExpertisePage() {
  const service = getService("international-specialist-input");

  return (
    <>
      <PageHero
        eyebrow="International expertise"
        title="International Expertise, Delivered Locally"
        text="IRA Healthcare believes that geographical boundaries should not prevent patients from benefiting from specialist medical knowledge."
      >
        <Button href="/apply">Apply for Home Healthcare</Button>
        <Button href="/team#advisers" variant="outline">
          International advisory team
        </Button>
      </PageHero>

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Our model aims to connect Nepal-based healthcare professionals with experienced
              international medical specialists through structured clinical discussions, educational
              collaboration and specialist guidance.
            </p>
            <p>
              This collaborative approach is designed to support complex medical decision-making while
              ensuring that patients receive care from locally registered healthcare professionals.
            </p>
            <p>
              Our thinking draws on established UK community healthcare and virtual ward models,
              adapted to the realities of care at home in Nepal.
            </p>
          </div>
          <ImagePlaceholder label="Photograph: multidisciplinary case discussion" />
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Key features"
            title="How international input supports your care"
            align="center"
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {internationalFeatures.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-card"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-medium text-brand-900">{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {service ? (
        <Section>
          <Container className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Areas of specialist input"
                title="International Expertise. Local Healthcare."
                text="Depending on clinical requirements and specialist availability, international input may include the following."
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
              {service.groups[0].items.map((item) => (
                <li key={item} className="rounded-xl bg-brand-50/70 px-4 py-3 font-medium text-brand-900">
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section tone="tint">
        <Container size="narrow">
          <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <ShieldCheck className="mt-1 size-7 shrink-0 text-brand-600" aria-hidden="true" />
            <div className="space-y-3 text-sm leading-relaxed text-ink">
              <p className="font-semibold text-brand-900">Professional standards and responsibility</p>
              <p>
                International medical experts may provide multidisciplinary case discussions, clinical
                guidance, educational support and second-opinion input where appropriate.
              </p>
              <p>
                All direct patient care and prescribing remains the responsibility of appropriately
                registered and authorised clinicians in Nepal. International advice is provided in
                accordance with applicable professional registration and healthcare regulations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <AdvisersSection />

      <MessageBand message={keyMessages[1]} />

      <CtaBand />
    </>
  );
}
