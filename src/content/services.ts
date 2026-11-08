/**
 * Service content (brief section 4). Kept as structured data so it can be
 * moved into a CMS later without touching the page components.
 *
 * `status` drives the "Planned service" badge required by brief section 14:
 * planned services must be identified as upcoming until operational.
 * TODO: clinical leadership to confirm the status of each service before launch.
 */
export type ServiceStatus = "available" | "planned";

export type ServiceGroup = { heading?: string; items: string[] };

export type Service = {
  slug: string;
  letter: string;
  title: string;
  tagline?: string;
  icon:
    | "stethoscope"
    | "globe"
    | "home"
    | "heart-handshake"
    | "wind"
    | "lungs"
    | "activity"
    | "house-plus"
    | "syringe"
    | "monitor"
    | "test-tube"
    | "hand-heart"
    | "bed"
    | "users";
  status: ServiceStatus;
  summary: string;
  intro: string[];
  lead?: string;
  groups: ServiceGroup[];
  closing?: string[];
};

export const services: Service[] = [
  {
    slug: "personalised-medical-care",
    letter: "A",
    title: "Comprehensive Personalised Medical Care",
    icon: "stethoscope",
    status: "available",
    summary:
      "Individually tailored care plans developed after a comprehensive medical and functional assessment.",
    intro: [
      "Every patient has unique medical, physical, psychological and social needs.",
      "IRA Healthcare provides individually tailored care plans developed following a comprehensive assessment.",
    ],
    lead: "Our approach includes:",
    groups: [
      {
        items: [
          "Initial medical and functional assessment",
          "Review of existing medical conditions",
          "Medication review and reconciliation",
          "Development of individual care goals",
          "Personalised treatment and monitoring plans",
          "Regular reassessment",
          "Coordination with existing treating clinicians",
          "Preventive healthcare and health education",
        ],
      },
    ],
    closing: ["The frequency and intensity of care are determined by individual requirements."],
  },
  {
    slug: "international-specialist-input",
    letter: "B",
    title: "International Specialist Medical Input",
    tagline: "International Expertise. Local Healthcare.",
    icon: "globe",
    status: "available",
    summary:
      "Access to advice from appropriately qualified international healthcare professionals, with care delivered by locally registered clinicians.",
    intro: [
      "One of IRA Healthcare's distinguishing features is access to medical advice from appropriately qualified international healthcare professionals.",
      "Our aim is to connect patients with specialist expertise while maintaining continuity of care through locally registered healthcare professionals.",
    ],
    lead: "Depending on clinical requirements and specialist availability, international input may include:",
    groups: [
      {
        items: [
          "Respiratory medicine",
          "General internal medicine",
          "Geriatric and elderly care medicine",
          "General practice",
          "Chronic disease management",
          "Complex medical case discussions",
          "Supportive and palliative care advice",
        ],
      },
    ],
    closing: [
      "International medical experts may provide multidisciplinary case discussions, clinical guidance, educational support and second-opinion input where appropriate.",
      "All direct patient care and prescribing remains the responsibility of appropriately registered and authorised clinicians in Nepal.",
    ],
  },
  {
    slug: "general-practice-home-visits",
    letter: "C",
    title: "General Practice and Home Medical Visits",
    icon: "home",
    status: "available",
    summary:
      "General medical assessment and ongoing care at home from locally registered medical practitioners.",
    intro: [
      "IRA Healthcare offers general medical assessment and ongoing care through locally registered medical practitioners.",
    ],
    lead: "Services may include:",
    groups: [
      {
        items: [
          "Home medical consultations",
          "Chronic disease management",
          "Review of acute but non-emergency illnesses",
          "Medication assessment",
          "Diabetes and hypertension monitoring",
          "Preventive healthcare",
          "Post-hospital discharge reviews",
          "Coordination of specialist referrals",
          "Support for patients with multiple medical conditions",
        ],
      },
    ],
    closing: [
      "Our goal is to provide continuity of care and reduce avoidable hospital visits where clinically appropriate.",
    ],
  },
  {
    slug: "elderly-care",
    letter: "D",
    title: "Elderly Care and Geriatric Support",
    icon: "heart-handshake",
    status: "available",
    summary:
      "Multidisciplinary support helping older adults maintain health, dignity and independence at home.",
    intro: [
      "We provide multidisciplinary support for older adults who require additional assistance to maintain their health and independence.",
    ],
    lead: "Services include:",
    groups: [
      {
        items: [
          "Comprehensive geriatric assessment",
          "Frailty assessment",
          "Falls risk assessment",
          "Medication review",
          "Mobility and balance support",
          "Cognitive and functional assessment",
          "Support for people living with dementia",
          "Nutrition and hydration monitoring",
          "Assistance with daily activities",
          "Support for families and caregivers",
        ],
      },
    ],
    closing: [
      "Care plans focus on maintaining dignity, independence, comfort and quality of life.",
    ],
  },
  {
    slug: "respiratory-care",
    letter: "E",
    title: "Specialist Respiratory Care",
    tagline: "Breathe Better. Live Better.",
    icon: "lungs",
    status: "available",
    summary:
      "Coordinated medical and rehabilitation support for people living with chronic respiratory conditions.",
    intro: [
      "Respiratory care is a key specialist focus of IRA Healthcare.",
      "We aim to support patients with chronic respiratory conditions through coordinated medical and rehabilitation services.",
    ],
    lead: "Services may include:",
    groups: [
      {
        heading: "Chronic Respiratory Disease Management",
        items: [
          "COPD",
          "Asthma",
          "Bronchiectasis",
          "Interstitial lung disease",
          "Chronic respiratory failure",
        ],
      },
      {
        heading: "Breathlessness Management",
        items: [
          "Assessment of chronic breathlessness",
          "Breathing techniques",
          "Symptom management",
          "Exercise tolerance improvement",
          "Patient and caregiver education",
        ],
      },
      {
        heading: "Pulmonary Rehabilitation",
        items: [
          "Individualised exercise programmes",
          "Respiratory physiotherapy",
          "Functional assessment",
          "Breathing exercises",
          "Education and self-management support",
        ],
      },
      {
        heading: "Home Oxygen Support",
        items: [
          "Assessment and review of oxygen requirements",
          "Oxygen safety education",
          "Monitoring of prescribed oxygen therapy",
          "Coordination with oxygen suppliers and treating clinicians",
        ],
      },
      {
        heading: "Sleep and Ventilatory Support",
        items: [
          "Support for patients with sleep-related breathing disorders",
          "CPAP and NIV adherence support",
          "Mask and equipment education",
          "Monitoring and troubleshooting",
          "Specialist review where indicated",
        ],
      },
    ],
    closing: [
      "All specialist respiratory interventions depend on clinical assessment, available resources and appropriately trained staff.",
    ],
  },
  {
    slug: "physiotherapy-rehabilitation",
    letter: "F",
    title: "Physiotherapy and Rehabilitation",
    icon: "activity",
    status: "available",
    summary:
      "Improving mobility, strength, balance and physical independence through tailored rehabilitation.",
    intro: [
      "Our physiotherapy services aim to improve mobility, strength, balance and physical independence.",
    ],
    lead: "Services may include:",
    groups: [
      {
        items: [
          "Rehabilitation following hospital admission",
          "Stroke rehabilitation support",
          "Mobility and gait training",
          "Falls prevention",
          "Muscle strengthening",
          "Balance exercises",
          "Respiratory physiotherapy",
          "Postoperative rehabilitation",
          "Rehabilitation for chronic neurological and musculoskeletal conditions",
          "Exercise programmes for older adults",
        ],
      },
    ],
    closing: [
      "Physiotherapy programmes are tailored to individual abilities and rehabilitation goals.",
    ],
  },
  {
    slug: "occupational-therapy",
    letter: "G",
    title: "Occupational Therapy and Independent Living",
    tagline: "Making Your Home Work for You.",
    icon: "house-plus",
    status: "available",
    summary:
      "Enabling people to perform meaningful daily activities safely and confidently in their own homes.",
    intro: [
      "IRA Healthcare aims to help patients remain as independent as possible in their own homes.",
      "Occupational therapy focuses on enabling individuals to perform meaningful daily activities safely and confidently.",
    ],
    lead: "Services may include:",
    groups: [
      {
        heading: "Home Environment Assessment",
        items: [
          "Assessment of mobility and accessibility",
          "Identification of falls and injury risks",
          "Bathroom and toilet safety",
          "Bedroom accessibility",
          "Kitchen and living-space adaptations",
        ],
      },
      {
        heading: "Independent Living Support",
        items: [
          "Dressing and personal hygiene",
          "Eating and meal preparation",
          "Transfers from bed to chair",
          "Toileting",
          "Safe movement around the home",
          "Energy conservation techniques",
        ],
      },
      {
        heading: "Assistive Equipment and Home Adaptations",
        items: [
          "Walking aids",
          "Wheelchairs",
          "Shower chairs",
          "Raised toilet seats",
          "Grab rails",
          "Adjustable beds",
          "Pressure-relieving mattresses",
          "Transfer aids",
          "Other suitable rehabilitation equipment",
        ],
      },
    ],
    closing: [
      "Our occupational therapy team recommends appropriate equipment and home modifications based on individual assessments. Equipment may be arranged through approved suppliers where available.",
      "The overall goal is to maximise independence, reduce caregiver burden and create a safer home environment.",
    ],
  },
  {
    slug: "nursing-personal-care",
    letter: "H",
    title: "Nursing and Personal Care",
    icon: "syringe",
    status: "available",
    summary:
      "Professional nursing and supportive personal care delivered in the patient's home.",
    intro: [
      "IRA Healthcare provides professional nursing and supportive personal care in the patient's home.",
    ],
    lead: "Depending on the care plan and staff availability, services may include:",
    groups: [
      {
        items: [
          "Vital-sign monitoring",
          "Medication administration by authorised staff",
          "Wound assessment and dressing",
          "Pressure-area care",
          "Catheter care",
          "Blood glucose monitoring",
          "Nutrition and hydration monitoring",
          "Personal hygiene assistance",
          "Mobility and transfer support",
          "Monitoring of long-term medical conditions",
          "Patient and caregiver education",
        ],
      },
    ],
    closing: [
      "Care is delivered by appropriately qualified nursing professionals and trained care assistants within their respective scopes of practice.",
    ],
  },
  {
    slug: "virtual-ward",
    letter: "I",
    title: "Virtual Ward and Remote Patient Monitoring",
    tagline: "Your Healthcare Team, Just a Button Away.",
    icon: "monitor",
    status: "planned",
    summary:
      "Structured home-based monitoring inspired by established virtual ward models.",
    intro: [
      "IRA Healthcare aims to introduce a home-based remote monitoring service inspired by established virtual ward models.",
      "Suitable patients may receive structured monitoring while remaining in their own homes.",
    ],
    lead: "Depending on their care requirements, monitoring may include:",
    groups: [
      {
        items: [
          "Blood pressure",
          "Heart rate",
          "Oxygen saturation",
          "Temperature",
          "Blood glucose",
          "Symptoms and wellbeing",
          "Medication adherence",
          "Other clinically relevant observations",
        ],
      },
    ],
    closing: [
      "Monitoring information may be recorded through a secure digital platform and reviewed by designated healthcare professionals. Patients and authorised caregivers will be able to request contact with the healthcare team through an accessible communication feature. Clinical concerns are assessed and escalated according to established protocols.",
      "This service does not replace hospital admission or emergency medical services when urgent assessment is required.",
    ],
  },
  {
    slug: "home-diagnostics",
    letter: "J",
    title: "Home-Based Diagnostics and Monitoring",
    icon: "test-tube",
    status: "available",
    summary:
      "Selected diagnostic tests and clinical monitoring without unnecessary hospital attendance.",
    intro: [
      "We aim to facilitate selected diagnostic tests and clinical monitoring without requiring patients to attend hospital unnecessarily.",
    ],
    lead: "Depending on availability, services may include:",
    groups: [
      {
        items: [
          "Blood sample collection",
          "Blood glucose testing",
          "Blood pressure monitoring",
          "Oxygen saturation monitoring",
          "Basic clinical observations",
          "Collection of appropriate laboratory samples",
          "Coordination of laboratory investigations",
          "Review and communication of results",
          "Monitoring of chronic medical conditions",
        ],
      },
    ],
    closing: [
      "Diagnostic investigations are arranged through qualified professionals and appropriate laboratory partners.",
    ],
  },
  {
    slug: "palliative-supportive-care",
    letter: "K",
    title: "Palliative and Supportive Care",
    tagline: "Comfort. Dignity. Compassion.",
    icon: "hand-heart",
    status: "available",
    summary:
      "Compassionate care focused on comfort, dignity, symptom management and family support.",
    intro: [
      "IRA Healthcare recognises the importance of providing compassionate care for patients living with serious, progressive or life-limiting illnesses.",
      "Our palliative and supportive care services focus on comfort, dignity, symptom management and family support.",
    ],
    lead: "Services may include:",
    groups: [
      {
        items: [
          "Symptom assessment and management",
          "Breathlessness management",
          "Pain management in coordination with authorised prescribers",
          "Nursing and personal care",
          "Emotional and psychological support",
          "Family and caregiver guidance",
          "Advance care planning",
          "Support with decisions about future care",
          "Coordination with hospitals and specialist palliative care teams",
          "End-of-life care at home where clinically appropriate",
        ],
      },
    ],
    closing: [
      "For patients requiring continuous assistance, 24-hour home care packages may be arranged according to individual needs, staffing and clinical suitability.",
      "Our goal is to support patients and their families through every stage of their healthcare journey.",
    ],
  },
  {
    slug: "post-hospital-recovery",
    letter: "L",
    title: "Post-Hospital Discharge and Recovery",
    icon: "bed",
    status: "available",
    summary:
      "Supporting a safe transition from hospital to home and reducing avoidable readmissions.",
    intro: [
      "A dedicated service for patients returning home following hospital admission.",
    ],
    lead: "Services may include:",
    groups: [
      {
        items: [
          "Discharge care planning",
          "Medication reconciliation",
          "Nursing assessment",
          "Physiotherapy and rehabilitation",
          "Wound care",
          "Monitoring for deterioration",
          "Follow-up medical review",
          "Coordination with hospital teams",
          "Support for family caregivers",
        ],
      },
    ],
    closing: [
      "The aim is to support a safe transition from hospital to home and reduce avoidable readmissions.",
    ],
  },
  {
    slug: "family-caregiver-support",
    letter: "M",
    title: "Family and Caregiver Support",
    icon: "users",
    status: "available",
    summary:
      "Regular communication, shared decision-making and practical guidance for family caregivers.",
    intro: [
      "IRA Healthcare recognises that family members are essential partners in patient care.",
      "Our services encourage regular communication and shared decision-making.",
    ],
    lead: "With appropriate patient consent, authorised family members may receive:",
    groups: [
      {
        items: [
          "Updates about the patient's condition",
          "Care plan reviews",
          "Progress reports",
          "Medication and treatment updates",
          "Rehabilitation progress",
          "Information about upcoming visits",
          "Opportunities to discuss concerns with the healthcare team",
        ],
      },
    ],
    closing: [
      "We also provide education and practical guidance for family caregivers.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
