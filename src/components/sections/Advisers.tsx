import { UserRound } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { advisers } from "@/content/pages";

/**
 * International Clinical Advisory Team. Profiles are only shown once
 * participation and credentials have been confirmed (brief §6 and §8).
 */
export function AdvisersSection() {
  return (
    <Section id="advisers">
      <Container>
        <SectionHeading
          eyebrow="International Clinical Advisory Team"
          title="Our international clinical advisers"
          text="Experienced international healthcare professionals who have formally agreed to support IRA Healthcare through case discussions, clinical guidance and education."
          align="center"
        />

        {advisers.length === 0 ? (
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-8 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
              <UserRound className="size-7" aria-hidden="true" />
            </span>
            <p className="mt-4 font-semibold text-brand-900">Adviser profiles coming soon</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Profiles — including qualifications, specialty, current appointment and country of
              practice — will be published once each adviser&apos;s participation, professional
              credentials and clinical responsibilities have been confirmed.
            </p>
            <div className="mt-4">
              <Badge tone="amber">Pending confirmation</Badge>
            </div>
          </div>
        ) : (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisers.map((a) => (
              <li key={a.name} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex size-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <UserRound className="size-9" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{a.name}</h3>
                <p className="text-sm font-medium text-teal-700">{a.qualifications}</p>
                <dl className="mt-3 space-y-1 text-sm text-muted">
                  <div>
                    <dt className="inline font-medium text-ink">Specialty: </dt>
                    <dd className="inline">{a.specialty}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink">Appointment: </dt>
                    <dd className="inline">{a.appointment}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink">Country of practice: </dt>
                    <dd className="inline">{a.country}</dd>
                  </div>
                  <div>
                    <dt className="inline font-medium text-ink">Role: </dt>
                    <dd className="inline">{a.role}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
}
