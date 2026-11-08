import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ApplicationForm } from "@/components/apply/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for Personalised Home Healthcare",
  description:
    "Tell us about your healthcare needs and the IRA Healthcare team will help you explore the most appropriate care options at home in Pokhara.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply for care"
        title="Apply for Personalised Home Healthcare"
        text="Tell us about your healthcare needs, and our team will help you explore the most appropriate care options."
      />
      <Section tone="surface">
        <Container size="narrow">
          <ApplicationForm />
        </Container>
      </Section>
    </>
  );
}
