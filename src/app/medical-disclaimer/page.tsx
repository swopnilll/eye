import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { EmergencyNotice } from "@/components/sections/EmergencyNotice";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important information about the scope of IRA Healthcare's services, international medical input and emergency care.",
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage title="Medical Disclaimer" updated="30 October 2026">
      <EmergencyNotice />

      <h2>General information only</h2>
      <p>
        The content on this website is provided for general information about IRA Healthcare&apos;s
        services. It is not medical advice and should not be used to diagnose or treat any condition.
        Always seek the advice of a qualified healthcare professional about your individual situation.
      </p>

      <h2>Service availability</h2>
      <p>
        Services are delivered subject to clinical assessment, staffing, equipment and resource
        availability. Services described as planned or coming soon are not yet operational. The scope
        of any service is confirmed in the individual care plan.
      </p>

      <h2>International medical input</h2>
      <p>
        International healthcare professionals may contribute to case discussions, clinical guidance,
        education and second-opinion input. They do not provide direct patient care or prescribe in
        Nepal. All direct patient care and prescribing remains the responsibility of appropriately
        registered and authorised clinicians in Nepal, in accordance with applicable professional
        registration and healthcare regulations.
      </p>

      <h2>Remote monitoring and the family app</h2>
      <p>
        Remote monitoring and digital communication features, when available, support — but do not
        replace — clinical care. They do not guarantee immediate emergency assistance and are not
        continuously monitored. If a patient&apos;s condition deteriorates urgently, seek emergency
        medical care.
      </p>

      <h2>Professional review</h2>
      <p>
        All clinical service descriptions, professional biographies and medical claims on this website
        are subject to review and approval by IRA Healthcare&apos;s clinical leadership.
      </p>
    </LegalPage>
  );
}
