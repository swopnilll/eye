import type { Metadata } from "next";
import { Lock, Smartphone } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTile } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { EmergencyNotice } from "@/components/sections/EmergencyNotice";
import { MessageBand } from "@/components/sections/MessageBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { appFeatures } from "@/content/pages";
import { keyMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Family App – Stay Connected to Your Loved Ones",
  description:
    "IRA Healthcare is developing a secure digital platform for patients, families and healthcare professionals — care updates, appointments, medication information and secure messaging. Coming soon.",
};

export default function FamilyAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital health and family app"
        title="Stay Connected to Your Loved Ones"
        text="IRA Healthcare plans to develop a secure digital platform allowing patients, families and healthcare professionals to communicate more effectively."
      >
        <Badge tone="amber">IRA Healthcare App – Coming Soon</Badge>
      </PageHero>

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Coming soon"
              title="One place for care plans, visits and updates"
              text="The app is in development and will be released once it has been fully built and tested. Until then, your care team will keep you and authorised family members updated directly."
            />
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <Lock className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                Designed with strong security, role-based access controls, patient consent, privacy
                protection and appropriate data retention policies.
              </li>
              <li className="flex gap-3">
                <Smartphone className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                Built to integrate with this website and our planned virtual ward and remote monitoring
                service.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 rounded-[2.5rem] border-8 border-brand-900 bg-white p-4 shadow-card">
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-brand-900/60" />
              <div className="space-y-3">
                <div className="rounded-2xl bg-brand-50 p-3">
                  <p className="text-xs font-semibold text-brand-900">Next visit</p>
                  <p className="text-xs text-muted">Physiotherapy · Tomorrow, 10:00</p>
                </div>
                <div className="rounded-2xl bg-teal-50 p-3">
                  <p className="text-xs font-semibold text-brand-900">Care update</p>
                  <p className="text-xs text-muted">Nursing visit completed · observations stable</p>
                </div>
                <div className="rounded-2xl bg-leaf-50 p-3">
                  <p className="text-xs font-semibold text-brand-900">Message</p>
                  <p className="text-xs text-muted">Request a callback from the care team</p>
                </div>
                <div className="h-20 rounded-2xl bg-surface" />
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-muted">
                Illustrative preview
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="Proposed features" title="What the app will offer" align="center" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appFeatures.map((f) => (
              <li key={f.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <IconTile name={f.icon} tone="teal" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <EmergencyNotice />
        </Container>
      </Section>

      <MessageBand message={keyMessages[4]} />

      <CtaBand
        title="Want to be told when the app launches?"
        text="Register your interest and we'll let you know when the IRA Healthcare app is available."
        primary={{ href: "/contact", label: "Register interest" }}
        secondary={{ href: "/services#virtual-ward", label: "About remote monitoring" }}
      />
    </>
  );
}
