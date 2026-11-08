/** Shared brand and contact information for Pooja's brow studio. */
export const site = {
  name: "Pooja Sharma Brows",
  legalName: "Pooja Sharma",
  descriptor: "Brow Artist · Caversham, Perth",
  tagline: "A little shape. A lot of confidence.",
  supportingStatement: "Thoughtful brow styling, close to home in Caversham.",
  description: "Personal brow shaping by Pooja Sharma in Caversham, Perth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_AU",
  address: {
    line1: "Caversham",
    city: "Perth",
    country: "Australia",
    full: "Caversham, Perth, WA",
    mapsEmbedUrl: "https://www.google.com/maps?q=Caversham%2C%20Perth&output=embed",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Caversham%2C+Perth+WA",
  },
  contact: {
    phone: "0413 165 226",
    phoneHref: "tel:+61413165226",
    whatsapp: "0413 165 226",
    whatsappHref: "https://wa.me/61413165226",
    email: "",
  },
  hours: [{ days: "By appointment", time: "Message to arrange" }],
  leadership: { director: "Pooja Sharma", ceo: "Pooja Sharma" },
} as const;

export const navGroups = [
  { label: "Explore", items: [
    { href: "/#services", label: "Brow services", text: "A simple brow refresh", icon: "sparkles" },
    { href: "/#about", label: "Meet Pooja", text: "A little about your brow artist", icon: "heart" },
  ] },
  { label: "Visit", items: [
    { href: "/#contact", label: "Caversham, Perth", text: "Appointments by arrangement", icon: "map-pin" },
  ] },
] as const;

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About Pooja" },
  { href: "/#contact", label: "Contact" },
] as const;

export const keyMessages = [
  "A little shape. A lot of confidence.",
  "Thoughtful brows, close to home.",
  "Your features. Your shape. Your brow moment.",
  "Natural definition, made personal.",
  "A warm welcome from Pooja.",
  "Brow care in Caversham, Perth.",
] as const;
