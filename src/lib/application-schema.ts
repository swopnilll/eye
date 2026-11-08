import { z } from "zod";

/**
 * Shared schema for the "Apply for Personalised Home Healthcare" form
 * (brief §9). Used on the server for validation; option lists are also used
 * to render the form so the two can't drift apart.
 */

export const serviceOptions = [
  "Doctor home visits",
  "Specialist medical review",
  "Nursing care",
  "Physiotherapy",
  "Occupational therapy",
  "Elderly care",
  "Respiratory care",
  "Palliative care",
  "Personal care assistance",
  "Post-hospital rehabilitation",
  "Virtual ward monitoring",
  "Home diagnostics",
  "Other",
] as const;

export const frequencyOptions = [
  "Weekly",
  "Daily",
  "Multiple visits per day",
  "Extended care",
  "24-hour care",
  "Unsure – require assessment",
] as const;

export const genderOptions = ["Female", "Male", "Other", "Prefer not to say"] as const;
export const languageOptions = ["Nepali", "English", "Other"] as const;
export const communicationOptions = ["Phone call", "WhatsApp", "Email", "SMS"] as const;
export const applyingForOptions = ["myself", "someone-else"] as const;
export const mobilityOptions = [
  "Fully mobile",
  "Mobile with aid (stick, frame)",
  "Wheelchair user",
  "Mostly in bed",
] as const;
export const dailyActivityOptions = [
  "Independent",
  "Needs some help",
  "Needs significant help",
  "Fully dependent",
] as const;
export const yesNo = ["Yes", "No"] as const;

export const MAX_FILES = 5;
export const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
export const ACCEPTED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"] as const;

const required = (label: string) => z.string().trim().min(1, `${label} is required.`);
const optional = z.string().trim().max(2000).optional().or(z.literal(""));
const phone = (label: string) =>
  required(label).regex(/^[+\d][\d\s().-]{6,19}$/, "Enter a valid phone number.");

export const applicationSchema = z
  .object({
    // Section A – Patient details
    patientFullName: required("Patient's full name").max(120),
    patientDateOfBirth: required("Date of birth").refine((v) => {
      const d = new Date(v);
      return !Number.isNaN(d.getTime()) && d <= new Date();
    }, "Enter a valid date of birth."),
    patientGender: z.enum(genderOptions).optional().or(z.literal("")),
    patientContactNumber: phone("Patient's contact number"),
    patientAddress: required("Address").max(300),
    patientMunicipalityWard: required("Municipality / ward").max(120),
    patientDistrict: required("District").max(80),
    preferredLanguage: z.enum(languageOptions, { message: "Select a preferred language." }),
    livingArrangements: required("Current living arrangements").max(500),

    // Section B – Applicant details
    applyingFor: z.enum(applyingForOptions, { message: "Tell us who you are applying for." }),
    applicantName: optional,
    relationshipToPatient: optional,
    applicantContactNumber: optional,
    applicantEmail: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
    preferredCommunication: z.enum(communicationOptions, {
      message: "Select a preferred method of communication.",
    }),

    // Section C – Medical information
    mainCondition: required("Main medical condition or reason for requesting care").max(2000),
    otherConditions: optional,
    treatingDoctorOrHospital: optional,
    recentHospitalAdmission: z.enum(yesNo, { message: "Tell us about recent hospital admission." }),
    currentMedications: optional,
    allergies: optional,
    mobility: z.enum(mobilityOptions, { message: "Select current mobility." }),
    dailyActivities: z.enum(dailyActivityOptions, {
      message: "Select ability to perform daily activities.",
    }),
    existingSupport: optional,
    equipmentAtHome: optional,

    // Section D – Required services
    services: z.array(z.enum(serviceOptions)).min(1, "Select at least one service."),
    servicesOther: optional,

    // Section E – Preferred care frequency
    frequency: z.enum(frequencyOptions, { message: "Select a preferred care frequency." }),

    // Section F – Additional information
    goals: optional,
    concerns: optional,
    preferredStartDate: optional,
    comments: optional,

    // Section H – Consent
    consentPrivacy: z.literal(true, { message: "You must agree to the privacy notice to continue." }),
    consentAuthority: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.applyingFor === "someone-else") {
      if (!data.applicantName) {
        ctx.addIssue({ code: "custom", path: ["applicantName"], message: "Your name is required." });
      }
      if (!data.relationshipToPatient) {
        ctx.addIssue({
          code: "custom",
          path: ["relationshipToPatient"],
          message: "Relationship to the patient is required.",
        });
      }
      if (!data.applicantContactNumber) {
        ctx.addIssue({
          code: "custom",
          path: ["applicantContactNumber"],
          message: "Your contact number is required.",
        });
      }
      if (!data.consentAuthority) {
        ctx.addIssue({
          code: "custom",
          path: ["consentAuthority"],
          message:
            "Please confirm you have the patient's consent, or the authority, to share their information.",
        });
      }
    }
    if (data.services.includes("Other") && !data.servicesOther) {
      ctx.addIssue({
        code: "custom",
        path: ["servicesOther"],
        message: "Please describe the other service you need.",
      });
    }
  });

export type ApplicationInput = z.input<typeof applicationSchema>;
export type Application = z.output<typeof applicationSchema>;

export type FieldErrors = Partial<Record<keyof Application | "documents" | "form", string[]>>;

export type ApplicationState =
  | { status: "idle" }
  | { status: "error"; errors: FieldErrors; message: string }
  | { status: "success"; reference: string };
