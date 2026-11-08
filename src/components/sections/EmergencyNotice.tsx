import { AlertTriangle } from "lucide-react";

/** Brief §14: patients in a medical emergency must seek emergency care, not the website/app. */
export function EmergencyNotice({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 ${className}`}
    >
      <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <p>
        <strong className="font-semibold">In a medical emergency,</strong> go to the nearest hospital
        emergency department or call local emergency services. IRA Healthcare, this website and the
        planned family app are not emergency services and cannot guarantee an immediate response.
      </p>
    </div>
  );
}
