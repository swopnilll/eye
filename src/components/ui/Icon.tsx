import {
  Activity,
  Bed,
  Bell,
  Calendar,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Globe,
  HandHeart,
  HeartHandshake,
  Home,
  HousePlus,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  Pill,
  Stethoscope,
  Syringe,
  TestTube,
  UserPlus,
  Users,
  Wind,
  type LucideProps,
} from "lucide-react";
import { Lungs } from "./Lungs";

const icons = {
  lungs: Lungs,
  activity: Activity,
  bed: Bed,
  bell: Bell,
  calendar: Calendar,
  "clipboard-check": ClipboardCheck,
  "clipboard-list": ClipboardList,
  "file-text": FileText,
  globe: Globe,
  "hand-heart": HandHeart,
  "heart-handshake": HeartHandshake,
  home: Home,
  "house-plus": HousePlus,
  "layout-dashboard": LayoutDashboard,
  "message-circle": MessageCircle,
  monitor: Monitor,
  pill: Pill,
  stethoscope: Stethoscope,
  syringe: Syringe,
  "test-tube": TestTube,
  "user-plus": UserPlus,
  users: Users,
  wind: Wind,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.75} {...props} />;
}

/** Rounded icon tile used in feature grids and service cards. */
export function IconTile({ name, tone = "blue" }: { name: IconName; tone?: "blue" | "teal" | "green" }) {
  const tones = {
    blue: "bg-brand-50 text-brand-600",
    teal: "bg-teal-50 text-teal-600",
    green: "bg-leaf-50 text-leaf-600",
  };
  return (
    <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${tones[tone]}`}>
      <Icon name={name} className="size-6" />
    </span>
  );
}
