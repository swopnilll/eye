import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How IRA Healthcare Works",
  description:
    "Five steps from first contact to care at home: contact us, initial assessment, personalised care plan, care begins at home, monitoring and review.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From first contact to care at home"
        text="A clear, five-step process — the same whether you apply online, call our team or visit our office."
      >
        <Button href="/apply">Apply for Home Healthcare</Button>
        <Button href="/contact" variant="outline">
          Speak to Our Team
        </Button>
      </PageHero>
      <HowItWorks compact />
      <CtaBand />
    </>
  );
}
