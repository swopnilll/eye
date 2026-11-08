import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { IconTile } from "@/components/ui/Icon";
import { PlannedBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { EmergencyNotice } from "@/components/sections/EmergencyNotice";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Doctor-led home visits, nursing, specialist respiratory care, physiotherapy, occupational therapy, elderly care, palliative care, post-hospital recovery and more — delivered at home in Pokhara.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Multidisciplinary healthcare, delivered at home"
        text="Explore each service below. Every care plan is built after a comprehensive assessment, and the frequency and intensity of care are determined by individual requirements."
      >
        <Button href="/apply">Apply for Home Healthcare</Button>
        <Button href="/care-packages" variant="outline">
          Care packages
        </Button>
      </PageHero>

      {/* Quick index: horizontal scroll on mobile, wrapping on larger screens */}
      <div className="border-b border-line bg-white">
        <Container className="py-4 sm:py-5">
          <p className="text-sm font-semibold text-brand-900">Jump to a service</p>
          <ul className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <li key={s.slug} className="shrink-0">
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="font-semibold text-teal-600">{s.letter}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section tone="surface">
        <Container>
          <div className="space-y-4">
            {services.map((s, index) => (
              <details
                key={s.slug}
                id={s.slug}
                open={index === 0}
                className="group rounded-2xl border border-line bg-white shadow-card"
              >
                <summary className="flex items-start gap-3 p-4 sm:gap-4 sm:p-6">
                  <IconTile name={s.icon} tone={s.status === "planned" ? "teal" : "blue"} />
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                        Service {s.letter}
                      </span>
                      {s.status === "planned" ? <PlannedBadge /> : null}
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold leading-snug text-brand-900 sm:text-xl">
                      {s.title}
                    </span>
                    {s.tagline ? (
                      <span className="mt-1 block text-sm font-medium italic text-teal-700">
                        {s.tagline}
                      </span>
                    ) : null}
                    <span className="mt-2 block text-sm text-muted">{s.summary}</span>
                  </span>
                  <ChevronDown
                    className="accordion-chevron mt-1 size-5 shrink-0 text-brand-600 transition-transform"
                    aria-hidden="true"
                  />
                </summary>

                <div className="border-t border-line px-4 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-6 sm:pl-22">
                  <div className="max-w-3xl space-y-4 leading-relaxed text-ink">
                    {s.intro.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.lead ? <p className="font-semibold text-brand-900">{s.lead}</p> : null}
                  </div>

                  <div
                    className={`mt-6 grid gap-6 ${
                      s.groups.length > 1 ? "md:grid-cols-2 xl:grid-cols-3" : ""
                    }`}
                  >
                    {s.groups.map((g, gi) => (
                      <div key={g.heading ?? gi} className="rounded-xl bg-surface p-5">
                        {g.heading ? (
                          <h3 className="text-base font-semibold text-brand-800">{g.heading}</h3>
                        ) : null}
                        <ul
                          className={`${g.heading ? "mt-3" : ""} ${
                            s.groups.length === 1 ? "grid gap-2 sm:grid-cols-2" : "space-y-2"
                          }`}
                        >
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm">
                              <span
                                aria-hidden="true"
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {s.closing?.length ? (
                    <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
                      {s.closing.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  ) : null}

                  {s.slug === "international-specialist-input" ? (
                    <Button href="/international-expertise" variant="outline" className="mt-6">
                      Learn more about our international model
                    </Button>
                  ) : null}
                  {s.slug === "virtual-ward" ? (
                    <div className="mt-6 space-y-4">
                      <EmergencyNotice />
                      <Button href="/family-app" variant="outline">
                        About the planned IRA Healthcare app
                      </Button>
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
            Service availability depends on clinical assessment, staffing and resources. Services
            marked as planned are not yet operational. All clinical service descriptions are subject
            to review by IRA Healthcare&apos;s clinical leadership.
          </p>
        </Container>
      </Section>

      <CtaBand
        title="Not sure which services you need?"
        text="You don't have to decide alone. Tell us about the situation and our team will arrange an assessment and recommend a personalised care plan."
      />
    </>
  );
}
