"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitApplication } from "@/app/apply/actions";
import {
  applyingForOptions,
  communicationOptions,
  dailyActivityOptions,
  frequencyOptions,
  genderOptions,
  languageOptions,
  MAX_FILES,
  mobilityOptions,
  serviceOptions,
  yesNo,
  type ApplicationState,
} from "@/lib/application-schema";
import { Button } from "@/components/ui/Button";
import { EmergencyNotice } from "@/components/sections/EmergencyNotice";
import { site } from "@/lib/site";
import { ChoiceGroup, FormSection, SelectField, TextArea, TextField } from "./fields";

const initialState: ApplicationState = { status: "idle" };

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(submitApplication, initialState);
  const [applyingFor, setApplyingFor] = useState<string>("");
  const [otherSelected, setOtherSelected] = useState(false);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Time-to-fill stamp for spam protection; set after hydration so server and
  // client markup match.
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, []);

  // Move focus to the status message after a submission.
  useEffect(() => {
    if (state.status !== "idle") topRef.current?.focus();
  }, [state]);

  const errors = state.status === "error" ? state.errors : {};
  const forSomeoneElse = applyingFor === "someone-else";

  if (state.status === "success") {
    return (
      <div
        ref={topRef}
        tabIndex={-1}
        className="rounded-3xl border border-teal-100 bg-teal-50 p-8 text-center sm:p-12"
      >
        <CheckCircle2 className="mx-auto size-14 text-teal-600" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Thank you for contacting IRA Healthcare.</h2>
        <p className="mt-3 text-lg text-ink">
          Our team will review your enquiry and contact you to discuss the next steps.
        </p>
        <p className="mt-6 text-sm text-muted">
          Your reference: <span className="font-mono font-semibold text-brand-900">{state.reference}</span>
          <br />
          Please quote this if you call or visit our office.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Contact details
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-8" encType="multipart/form-data">
      <div ref={topRef} tabIndex={-1} className="outline-none">
        {state.status === "error" ? (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <p className="font-semibold">{state.message}</p>
            {errors.form?.length ? <p className="mt-1">{errors.form[0]}</p> : null}
          </div>
        ) : null}
      </div>

      {/* Spam protection: honeypot (hidden from users) and time-to-fill. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <FormSection step="A" title="Patient Details" text="About the person who will receive care.">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField name="patientFullName" label="Full name" required autoComplete="name" errors={errors.patientFullName} />
          <TextField name="patientDateOfBirth" label="Date of birth" type="date" required errors={errors.patientDateOfBirth} />
          <SelectField name="patientGender" label="Gender" optional options={genderOptions} errors={errors.patientGender} />
          <TextField name="patientContactNumber" label="Contact number" type="tel" required autoComplete="tel" errors={errors.patientContactNumber} />
        </div>
        <TextField name="patientAddress" label="Address" required autoComplete="street-address" errors={errors.patientAddress} />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField name="patientMunicipalityWard" label="Municipality / ward" required errors={errors.patientMunicipalityWard} />
          <TextField name="patientDistrict" label="District" required defaultValue="Kaski" errors={errors.patientDistrict} />
          <SelectField name="preferredLanguage" label="Preferred language" required options={languageOptions} errors={errors.preferredLanguage} />
        </div>
        <TextArea
          name="livingArrangements"
          label="Current living arrangements"
          hint="For example: lives alone, lives with family, has a live-in carer."
          required
          rows={2}
          errors={errors.livingArrangements}
        />
      </FormSection>

      <FormSection step="B" title="Applicant Details" text="About you, if you are completing this form for someone else.">
        <ChoiceGroup
          name="applyingFor"
          label="Are you applying for yourself or someone else?"
          type="radio"
          required
          columns={2}
          options={[
            { value: applyingForOptions[0], label: "Myself" },
            { value: applyingForOptions[1], label: "Someone else (family member, friend or carer)" },
          ]}
          onChange={(v) => setApplyingFor(v)}
          errors={errors.applyingFor}
        />
        {forSomeoneElse ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField name="applicantName" label="Your name" required errors={errors.applicantName} />
            <TextField name="relationshipToPatient" label="Relationship to patient" required errors={errors.relationshipToPatient} />
            <TextField name="applicantContactNumber" label="Your contact number" type="tel" required errors={errors.applicantContactNumber} />
            <TextField name="applicantEmail" label="Email address" type="email" optional autoComplete="email" errors={errors.applicantEmail} />
          </div>
        ) : (
          <TextField name="applicantEmail" label="Email address" type="email" optional autoComplete="email" errors={errors.applicantEmail} />
        )}
        <SelectField
          name="preferredCommunication"
          label="Preferred method of communication"
          required
          options={communicationOptions}
          errors={errors.preferredCommunication}
        />
      </FormSection>

      <FormSection
        step="C"
        title="Medical Information"
        text="Share what you can. Our team will ask for anything else during the assessment."
      >
        <TextArea name="mainCondition" label="Main medical condition or reason for requesting care" required errors={errors.mainCondition} />
        <TextArea name="otherConditions" label="Other relevant medical conditions" optional rows={2} errors={errors.otherConditions} />
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField name="treatingDoctorOrHospital" label="Current treating doctor or hospital" optional errors={errors.treatingDoctorOrHospital} />
          <SelectField
            name="recentHospitalAdmission"
            label="Recent hospital admission (last 3 months)?"
            required
            options={yesNo}
            errors={errors.recentHospitalAdmission}
          />
        </div>
        <TextArea name="currentMedications" label="Current medications, if known" optional rows={2} errors={errors.currentMedications} />
        <TextField name="allergies" label="Relevant allergies" optional errors={errors.allergies} />
        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField name="mobility" label="Current mobility" required options={mobilityOptions} errors={errors.mobility} />
          <SelectField
            name="dailyActivities"
            label="Ability to perform daily activities"
            hint="Washing, dressing, eating, toileting."
            required
            options={dailyActivityOptions}
            errors={errors.dailyActivities}
          />
        </div>
        <TextArea name="existingSupport" label="Existing nursing or caregiver support" optional rows={2} errors={errors.existingSupport} />
        <TextArea
          name="equipmentAtHome"
          label="Relevant medical equipment already used at home"
          hint="For example: oxygen concentrator, CPAP, wheelchair, hospital bed."
          optional
          rows={2}
          errors={errors.equipmentAtHome}
        />
      </FormSection>

      <FormSection step="D" title="Required Services" text="Select all that apply.">
        <ChoiceGroup
          name="services"
          label="Which services are you interested in?"
          type="checkbox"
          required
          columns={3}
          options={serviceOptions.map((s) => ({ value: s, label: s }))}
          onChange={(v, checked) => {
            if (v === "Other") setOtherSelected(checked);
          }}
          errors={errors.services}
        />
        {otherSelected ? (
          <TextField name="servicesOther" label="Please describe the other service" required errors={errors.servicesOther} />
        ) : null}
      </FormSection>

      <FormSection step="E" title="Preferred Care Frequency" text="Choose the closest option — we'll confirm after assessment.">
        <ChoiceGroup
          name="frequency"
          label="How often do you think care is needed?"
          type="radio"
          required
          columns={3}
          options={frequencyOptions.map((f) => ({ value: f, label: f }))}
          errors={errors.frequency}
        />
      </FormSection>

      <FormSection step="F" title="Additional Information">
        <TextArea name="goals" label="Main goals of care" optional rows={2} errors={errors.goals} />
        <TextArea name="concerns" label="Specific concerns" optional rows={2} errors={errors.concerns} />
        <TextField name="preferredStartDate" label="Preferred start date" type="date" optional errors={errors.preferredStartDate} />
        <TextArea name="comments" label="Additional comments" optional rows={2} errors={errors.comments} />
      </FormSection>

      <FormSection
        step="G"
        title="Documents"
        text="Optional. Upload discharge summaries, prescriptions or medical reports if you have them."
      >
        <div>
          <label htmlFor="documents" className="field-label">
            Upload documents <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="documents"
            name="documents"
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
            aria-describedby="documents-hint documents-error"
            className="field file:mr-4 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-brand-700"
          />
          <p id="documents-hint" className="field-hint">
            Up to {MAX_FILES} files, PDF, JPG or PNG, 10 MB each. Documents are stored securely with
            restricted access.
          </p>
          {errors.documents?.length ? (
            <p id="documents-error" className="field-error" role="alert">
              {errors.documents[0]}
            </p>
          ) : null}
        </div>
      </FormSection>

      <FormSection step="H" title="Consent and Privacy">
        <div className="rounded-xl bg-surface p-4 text-sm leading-relaxed text-muted">
          <p>
            IRA Healthcare collects the information in this form to assess your healthcare needs,
            contact you about your enquiry and plan appropriate care. Medical information is stored
            securely, accessed only by authorised staff on a need-to-know basis and is never included
            in ordinary email notifications. We do not sell your information. Read our{" "}
            <Link href="/privacy" className="font-medium text-brand-700 underline">
              Privacy Policy
            </Link>{" "}
            for full details, including retention and your rights.
          </p>
        </div>
        <label className="flex cursor-pointer items-start gap-3 text-sm">
          <input type="checkbox" name="consentPrivacy" className="mt-0.5 size-4 accent-brand-600" />
          <span>
            I have read and agree to the privacy notice and consent to IRA Healthcare collecting and
            using this information to respond to my enquiry. <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consentPrivacy?.length ? (
          <p className="field-error" role="alert">
            {errors.consentPrivacy[0]}
          </p>
        ) : null}
        {forSomeoneElse ? (
          <>
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <input type="checkbox" name="consentAuthority" className="mt-0.5 size-4 accent-brand-600" />
              <span>
                I confirm that I have the patient&apos;s consent to share their information, or that I
                have the legal authority to act on their behalf. <span className="text-red-600">*</span>
              </span>
            </label>
            {errors.consentAuthority?.length ? (
              <p className="field-error" role="alert">
                {errors.consentAuthority[0]}
              </p>
            ) : null}
          </>
        ) : null}
      </FormSection>

      <EmergencyNotice />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Prefer to talk? Call{" "}
          <a href={site.contact.phoneHref} className="font-medium text-brand-700">
            {site.contact.phone}
          </a>{" "}
          or{" "}
          <Link href="/contact#visit" className="font-medium text-brand-700">
            visit our office
          </Link>
          .
        </p>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" /> Submitting…
            </>
          ) : (
            "Submit application"
          )}
        </Button>
      </div>
    </form>
  );
}
