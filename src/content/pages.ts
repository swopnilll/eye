/** Static copy for non-service pages (brief sections 2, 3, 5, 6, 7, 11). */

export const homeHighlights = [
  {
    icon: "globe",
    title: "International Specialist Medical Input",
    text: "Structured case discussions and guidance from experienced international specialists, implemented locally.",
  },
  {
    icon: "stethoscope",
    title: "Doctor-Led Home Healthcare",
    text: "Medical assessment and ongoing care from locally registered doctors, in your own home.",
  },
  {
    icon: "clipboard-list",
    title: "Personalised Care Packages",
    text: "From weekly visits to 24-hour support, care is designed around each patient's needs.",
  },
  {
    icon: "activity",
    title: "Rehabilitation and Independent Living",
    text: "Physiotherapy and occupational therapy that help you stay mobile, safe and independent.",
  },
  {
    icon: "monitor",
    title: "Virtual Ward and Remote Monitoring",
    text: "Planned structured home monitoring, reviewed by your healthcare team.",
    planned: true,
  },
  {
    icon: "users",
    title: "Family Communication and Support",
    text: "Regular updates and shared decision-making with authorised family members.",
  },
] as const;

export const values = [
  { name: "Compassion", text: "Treating every patient with dignity and respect." },
  { name: "Excellence", text: "Delivering evidence-informed, high-quality healthcare." },
  {
    name: "Individualisation",
    text: "Designing care around each patient's circumstances and preferences.",
  },
  {
    name: "Collaboration",
    text: "Working closely with patients, families and healthcare professionals.",
  },
  {
    name: "Independence",
    text: "Supporting patients to maintain their abilities and quality of life.",
  },
  {
    name: "Continuity",
    text: "Providing coordinated healthcare throughout the patient's journey.",
  },
] as const;

export const howItWorks = [
  {
    title: "Contact Us",
    text: "Complete an online application, call our team or visit our office.",
  },
  {
    title: "Initial Assessment",
    text: "Our healthcare team reviews the patient's needs and arranges an appropriate assessment.",
  },
  {
    title: "Personalised Care Plan",
    text: "A multidisciplinary care plan is developed according to clinical requirements, personal goals and family circumstances.",
  },
  {
    title: "Care Begins at Home",
    text: "Our local healthcare professionals deliver the agreed services, with specialist input where appropriate.",
  },
  {
    title: "Monitoring and Review",
    text: "Care is regularly reviewed and adjusted as the patient's needs change. Authorised family members receive appropriate updates.",
  },
] as const;

export const careArrangements = [
  {
    name: "Weekly Care",
    text: "Suitable for patients requiring scheduled medical reviews, rehabilitation, monitoring or occasional nursing support.",
  },
  {
    name: "Daily Care",
    text: "Designed for patients requiring regular assistance, clinical observations, nursing support or rehabilitation.",
  },
  {
    name: "Multiple Daily Visits",
    text: "Suitable for patients requiring assistance at different times throughout the day, including medication support, mobility assistance and personal care.",
  },
  {
    name: "Extended Care",
    text: "Longer periods of support for patients with complex needs or increased dependency.",
  },
  {
    name: "24-Hour Home Care",
    text: "Continuous care arrangements for patients requiring ongoing assistance, supervision or supportive care.",
  },
] as const;

export const internationalFeatures = [
  "International specialist case discussions",
  "Multidisciplinary clinical reviews",
  "Support for complex chronic conditions",
  "Evidence-informed clinical guidance",
  "Educational collaboration",
  "Coordinated local implementation",
  "Continued follow-up and reassessment",
] as const;

export const appFeatures = [
  {
    icon: "layout-dashboard",
    title: "Patient Dashboard",
    text: "A personalised overview of the patient's care plan, scheduled visits and relevant clinical information.",
  },
  {
    icon: "users",
    title: "Family Access",
    text: "Authorised family members can view selected updates about their loved one's care.",
  },
  {
    icon: "clipboard-check",
    title: "Care Updates",
    text: "Information about completed visits, relevant observations and progress towards care goals.",
  },
  {
    icon: "calendar",
    title: "Appointments",
    text: "View upcoming appointments and scheduled home visits.",
  },
  {
    icon: "pill",
    title: "Medication Information",
    text: "Access an up-to-date medication list and relevant medication-related updates.",
  },
  {
    icon: "message-circle",
    title: "Communication",
    text: "Send non-emergency messages or request a callback from the healthcare team.",
  },
  {
    icon: "monitor",
    title: "Remote Monitoring",
    text: "View selected clinical observations where appropriate and authorised.",
  },
  {
    icon: "file-text",
    title: "Care Reports",
    text: "Access relevant summaries of clinical reviews and rehabilitation progress.",
  },
  {
    icon: "bell",
    title: "Notifications",
    text: "Receive notifications about visits, care plan updates and important communications.",
  },
  {
    icon: "user-plus",
    title: "Multiple Family Members",
    text: "Several authorised family members can access information with appropriate permissions.",
  },
] as const;

export const leadership = [
  {
    name: "Asst. Prof. Dr Prakash Bhattarai",
    role: "Director – IRA Healthcare",
    // TODO: confirm qualifications and current appointment before publication
    qualifications: "MBBS, MD (GP)",
    specialty: "General Practice and Emergency Medicine",
    appointment: "Assistant Professor, Pokhara University Teaching Hospital",
    bio: "Dr Bhattarai provides local clinical leadership, supporting multidisciplinary care delivery, clinical governance and coordination of healthcare services.",
    pendingConfirmation: true,
  },
  {
    name: "Dr Dipak Prasad Bastola",
    role: "Chief Executive Officer – IRA Healthcare",
    bio: "Dr Bastola provides organisational leadership, supporting the strategic development, administration and long-term growth of IRA Healthcare.",
    pendingConfirmation: true,
  },
] as const;

/**
 * International clinical advisers. Intentionally empty: profiles are only
 * published once participation, credentials and clinical responsibilities
 * have been confirmed (brief sections 6 and 8).
 */
export type Adviser = {
  name: string;
  qualifications: string;
  specialty: string;
  appointment: string;
  country: string;
  role: string;
  photo?: string;
};
export const advisers: Adviser[] = [];
