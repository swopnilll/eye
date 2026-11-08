import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/sections/PageHero";
import { AdvisersSection } from "@/components/sections/Advisers";
import { CtaBand } from "@/components/sections/CtaBand";
import { leadership } from "@/content/pages";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership of IRA Healthcare — local clinical and organisational leadership in Pokhara, supported by an international clinical advisory team.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Our Leadership"
        text="Local clinical leadership and organisational leadership, working with an international clinical advisory team."
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Leadership" title="Leading IRA Healthcare" />
          <ul className="mt-10 grid gap-8 lg:grid-cols-2">
            {leadership.map((person) => (
              <li
                key={person.name}
                className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-6 shadow-card sm:flex-row"
              >
                {/* TODO: replace with professional photograph */}
                <div className="flex size-28 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <UserRound className="size-12" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="mt-1 font-medium text-teal-700">{person.role}</p>
                  {"qualifications" in person ? (
                    <dl className="mt-3 space-y-1 text-sm text-muted">
                      <div>
                        <dt className="inline font-medium text-ink">Qualifications: </dt>
                        <dd className="inline">{person.qualifications}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-ink">Specialty: </dt>
                        <dd className="inline">{person.specialty}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-ink">Appointment: </dt>
                        <dd className="inline">{person.appointment}</dd>
                      </div>
                    </dl>
                  ) : null}
                  <p className="mt-4 leading-relaxed text-muted">{person.bio}</p>
                  {person.pendingConfirmation ? (
                    <div className="mt-4">
                      <Badge tone="amber">Details to be confirmed before publication</Badge>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Additional professional qualifications and biographical information will be added
            following confirmation.
          </p>
        </Container>
      </Section>

      <div className="bg-surface">
        <AdvisersSection />
      </div>

      <CtaBand />
    </>
  );
}
