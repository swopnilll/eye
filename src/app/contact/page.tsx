import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { EmergencyNotice } from "@/components/sections/EmergencyNotice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit Our Office",
  description: `Contact IRA Healthcare or visit our office at ${site.address.full}. Call, WhatsApp, email or request a callback.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Speak to Our Team"
        text="Call, message or visit us in person — whichever is easiest for you. We'll help you understand your options and support you with your application."
      >
        <Button href="/apply">Apply for Home Healthcare</Button>
        <Button href="#callback" variant="outline">
          Request a callback
        </Button>
      </PageHero>

      <Section id="visit">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Visit our office" title="IRA Healthcare" text={site.descriptor} />
            <dl className="mt-8 space-y-5 text-ink">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Office location</dt>
                  <dd className="text-muted">{site.address.full}</dd>
                  <dd className="mt-2">
                    <a
                      href={site.address.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:underline"
                    >
                      <Navigation className="size-4" aria-hidden="true" /> Get directions
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Telephone</dt>
                  <dd>
                    <a href={site.contact.phoneHref} className="text-brand-700 hover:underline">
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">WhatsApp</dt>
                  <dd>
                    <a
                      href={site.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-700 hover:underline"
                    >
                      {site.contact.whatsapp}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className="text-brand-700 hover:underline">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold">Office opening hours</dt>
                  {site.hours.map((h) => (
                    <dd key={h.days} className="text-muted">
                      <span className="inline-block w-36">{h.days}</span> {h.time}
                    </dd>
                  ))}
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-line shadow-card">
              <iframe
                title={`Map showing the IRA Healthcare office at ${site.address.full}`}
                src={site.address.mapsEmbedUrl}
                className="aspect-4/3 w-full lg:aspect-video"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Directions: from Begnas Lake road, head towards Shishuwa; the office is in the Shishuwa
              area of Begnas, Pokhara. {/* TODO: confirm landmark-based directions */}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold">Walk-in Applications</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Prefer to speak with us in person? Visit our office to discuss your healthcare
              requirements and receive assistance with your application.
            </p>
            <p className="mt-3 text-sm text-muted">
              Patients and families can apply online or visit the office for support — whichever suits
              you best.
            </p>
            <Button
              href={site.address.mapsDirectionsUrl}
              variant="outline"
              className="mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </Button>
          </div>

          <div id="callback" className="rounded-3xl border border-line bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold">Request a callback</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Leave your details and a member of our team will call you back during office hours to
              discuss your needs. Please don&apos;t include medical details here — we&apos;ll ask
              what we need to know on the call.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.contact.phoneHref}>Call us now</Button>
              <Button href={site.contact.whatsappHref} variant="secondary" target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </Button>
              <Button href="/apply" variant="outline">
                Apply online instead
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <EmergencyNotice />
        </Container>
      </Section>
    </>
  );
}
