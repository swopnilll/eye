import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How IRA Healthcare collects, uses, stores and shares personal and health information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="30 October 2026">
      <p>
        {site.name} (“we”, “us”) is committed to protecting the privacy of patients, families and
        visitors to this website. This policy explains what information we collect, how we use it,
        how we keep it secure and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Contact and identity information</strong> — names, dates of birth, addresses,
          telephone numbers and email addresses provided through our application form, by phone or in
          person.
        </li>
        <li>
          <strong>Health information</strong> — medical conditions, medications, allergies, mobility
          and care needs, and any documents you choose to upload (such as discharge summaries or
          prescriptions). This is sensitive information and we treat it with additional safeguards.
        </li>
        <li>
          <strong>Applicant information</strong> — where someone applies on behalf of a patient, the
          applicant&apos;s name, relationship to the patient and contact details.
        </li>
        <li>
          <strong>Website usage information</strong> — aggregated analytics about how visitors use the
          website. We do not use analytics to identify individuals.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries and arrange assessments.</li>
        <li>To plan, deliver, coordinate and review healthcare services.</li>
        <li>To communicate with patients and, with consent, authorised family members.</li>
        <li>To meet professional, clinical governance and legal obligations.</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2>Consent and applying on behalf of someone else</h2>
      <p>
        If you complete an application for another person, you confirm that you have their consent to
        share their information, or that you have the legal authority to act on their behalf. We may
        contact the patient directly to confirm consent before care begins.
      </p>

      <h2>How we keep information secure</h2>
      <ul>
        <li>Information is transmitted over encrypted (HTTPS) connections.</li>
        <li>Enquiry records and uploaded documents are stored in access-controlled systems.</li>
        <li>Access is limited to authorised staff on a need-to-know basis.</li>
        <li>Medical information is never included in ordinary email notifications.</li>
      </ul>

      <h2>Sharing information</h2>
      <p>
        We share information only where necessary to provide care — for example with the clinicians
        involved in your care, laboratories, equipment suppliers or hospitals — or where required by
        law. International clinical advisers may be involved in case discussions; where this happens,
        information is shared with appropriate safeguards and, wherever possible, in a de-identified
        form. We do not sell personal information.
      </p>

      <h2>Retention</h2>
      <p>
        We keep enquiry records for as long as needed to respond to the enquiry and, where care is
        provided, in line with clinical record-keeping requirements. Records that are no longer
        needed are securely deleted.
      </p>

      <h2>Your rights</h2>
      <p>
        You may ask to access, correct or delete the information we hold about you, or withdraw
        consent, by contacting us at{" "}
        <a href={`mailto:${site.contact.email}`} className="text-brand-700 underline">
          {site.contact.email}
        </a>{" "}
        or at our office in {site.address.full}.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be published here.</p>
    </LegalPage>
  );
}
