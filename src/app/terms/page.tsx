import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the IRA Healthcare website and online application.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="30 October 2026">
      <p>
        These terms apply to your use of the {site.name} website and online application form. By using
        the website you agree to these terms.
      </p>

      <h2>Use of the website</h2>
      <p>
        The website provides information about our services and a way to enquire about care. It does
        not create a clinician–patient relationship. Submitting an application is a request for
        assessment, not a guarantee that services will be provided; availability depends on clinical
        assessment, staffing and resources.
      </p>

      <h2>Not an emergency service</h2>
      <p>
        The website, the application form and any future IRA Healthcare app are not emergency
        services and are not monitored continuously. In a medical emergency, go to the nearest
        hospital emergency department or call local emergency services.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        We take care to describe our services accurately and to identify planned services as
        upcoming. Information on the website is general in nature and may change. See our{" "}
        <Link href="/medical-disclaimer" className="text-brand-700 underline">
          Medical Disclaimer
        </Link>
        .
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide information that is accurate and complete to the best of your knowledge.</li>
        <li>Only submit information about another person with their consent or lawful authority.</li>
        <li>Do not misuse the website, attempt to gain unauthorised access or submit spam.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The content, design and branding of this website belong to {site.legalName} and may not be
        reproduced without permission.
      </p>

      <h2>Privacy</h2>
      <p>
        Our handling of personal and health information is described in our{" "}
        <Link href="/privacy" className="text-brand-700 underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Nepal.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${site.contact.email}`} className="text-brand-700 underline">
          {site.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
