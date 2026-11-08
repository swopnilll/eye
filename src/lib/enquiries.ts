import "server-only";
import type { Application } from "./application-schema";

/**
 * Enquiry persistence and notification adapter.
 *
 * TODO (before launch): connect to a database with encryption at rest and
 * role-based access (e.g. Postgres via Prisma/Drizzle, or Supabase), and to
 * object storage with private ACLs for uploaded documents. The interface below
 * is the only thing the server action depends on.
 *
 * Brief §9: no medical information may be included in ordinary email
 * notifications — `notifyAdministrator` therefore only receives the reference,
 * applicant name and contact details.
 */

export type StoredDocument = { name: string; type: string; size: number };

export type EnquiryRecord = {
  reference: string;
  receivedAt: string;
  application: Application;
  documents: StoredDocument[];
};

export function generateReference(): string {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `IRA-${date}-${random}`;
}

export async function saveEnquiry(record: EnquiryRecord): Promise<void> {
  // TODO: persist `record` to the secure enquiry store.
  if (process.env.NODE_ENV !== "production") {
    console.info(`[enquiry] ${record.reference} received (${record.documents.length} document(s))`);
  }
}

export async function storeDocuments(reference: string, files: File[]): Promise<StoredDocument[]> {
  // TODO: upload to private object storage under `enquiries/${reference}/…`.
  void reference;
  return files.map((f) => ({ name: f.name, type: f.type, size: f.size }));
}

export async function notifyAdministrator(summary: {
  reference: string;
  applicantName: string;
  contactNumber: string;
  preferredCommunication: string;
}): Promise<void> {
  // TODO: send via transactional email / SMS to the designated administrator.
  // Deliberately contains no medical information.
  if (process.env.NODE_ENV !== "production") {
    console.info(`[enquiry] notify admin: ${summary.reference} from ${summary.applicantName}`);
  }
}
