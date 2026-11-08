import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Ready to talk about care at home?",
  text = "Tell us about your healthcare needs and our team will help you explore the most appropriate options — online, by phone or in person at our Pokhara office.",
  primary = { href: "/apply", label: "Apply for Home Healthcare" },
  secondary = { href: "/contact", label: "Speak to Our Team" },
}: {
  title?: string;
  text?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-700 via-brand-600 to-teal-600 px-6 py-14 text-white sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-50">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href} variant="white" size="lg">
                {primary.label}
              </Button>
              <Button
                href={secondary.href}
                size="lg"
                className="border border-white/40 text-white hover:bg-white/10"
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
