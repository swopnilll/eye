"use server";

import {
  ACCEPTED_FILE_TYPES,
  MAX_FILES,
  MAX_FILE_BYTES,
  applicationSchema,
  type ApplicationState,
  type FieldErrors,
} from "@/lib/application-schema";
import {
  generateReference,
  notifyAdministrator,
  saveEnquiry,
  storeDocuments,
} from "@/lib/enquiries";

const MIN_FILL_TIME_MS = 4000;

export async function submitApplication(
  _prev: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  // Spam protection: honeypot field + minimum time-to-fill. Bots that trip
  // these get a success response so they don't learn what was detected.
  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("startedAt"));
  if (honeypot || (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_FILL_TIME_MS)) {
    return { status: "success", reference: generateReference() };
  }

  const text = (key: string) => {
    const v = formData.get(key);
    return typeof v === "string" ? v : "";
  };

  const parsed = applicationSchema.safeParse({
    patientFullName: text("patientFullName"),
    patientDateOfBirth: text("patientDateOfBirth"),
    patientGender: text("patientGender"),
    patientContactNumber: text("patientContactNumber"),
    patientAddress: text("patientAddress"),
    patientMunicipalityWard: text("patientMunicipalityWard"),
    patientDistrict: text("patientDistrict"),
    preferredLanguage: text("preferredLanguage"),
    livingArrangements: text("livingArrangements"),
    applyingFor: text("applyingFor"),
    applicantName: text("applicantName"),
    relationshipToPatient: text("relationshipToPatient"),
    applicantContactNumber: text("applicantContactNumber"),
    applicantEmail: text("applicantEmail"),
    preferredCommunication: text("preferredCommunication"),
    mainCondition: text("mainCondition"),
    otherConditions: text("otherConditions"),
    treatingDoctorOrHospital: text("treatingDoctorOrHospital"),
    recentHospitalAdmission: text("recentHospitalAdmission"),
    currentMedications: text("currentMedications"),
    allergies: text("allergies"),
    mobility: text("mobility"),
    dailyActivities: text("dailyActivities"),
    existingSupport: text("existingSupport"),
    equipmentAtHome: text("equipmentAtHome"),
    services: formData.getAll("services").filter((v): v is string => typeof v === "string"),
    servicesOther: text("servicesOther"),
    frequency: text("frequency"),
    goals: text("goals"),
    concerns: text("concerns"),
    preferredStartDate: text("preferredStartDate"),
    comments: text("comments"),
    consentPrivacy: formData.get("consentPrivacy") === "on",
    consentAuthority: formData.get("consentAuthority") === "on",
  });

  const errors: FieldErrors = {};
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const key = (issue.path[0] ?? "form") as keyof FieldErrors;
      (errors[key] ??= []).push(issue.message);
    }
  }

  // Section G – optional documents
  const files = formData
    .getAll("documents")
    .filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    errors.documents = [`You can upload up to ${MAX_FILES} documents.`];
  } else {
    for (const f of files) {
      if (f.size > MAX_FILE_BYTES) {
        (errors.documents ??= []).push(`"${f.name}" is larger than 10 MB.`);
      }
      if (!(ACCEPTED_FILE_TYPES as readonly string[]).includes(f.type)) {
        (errors.documents ??= []).push(`"${f.name}" must be a PDF, JPG or PNG.`);
      }
    }
  }

  if (!parsed.success || Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      message: "Please check the highlighted fields and try again.",
    };
  }

  const application = parsed.data;
  const reference = generateReference();

  try {
    const documents = await storeDocuments(reference, files);
    await saveEnquiry({
      reference,
      receivedAt: new Date().toISOString(),
      application,
      documents,
    });
    await notifyAdministrator({
      reference,
      applicantName:
        application.applyingFor === "someone-else" && application.applicantName
          ? application.applicantName
          : application.patientFullName,
      contactNumber:
        application.applyingFor === "someone-else" && application.applicantContactNumber
          ? application.applicantContactNumber
          : application.patientContactNumber,
      preferredCommunication: application.preferredCommunication,
    });
  } catch (err) {
    console.error("[enquiry] failed to save", err);
    return {
      status: "error",
      errors: {},
      message:
        "Sorry — we couldn't submit your application just now. Please try again, or call our office.",
    };
  }

  return { status: "success", reference };
}
