import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <Container size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">404</p>
        <h1 className="mt-3 text-4xl font-bold">We couldn&apos;t find that page</h1>
        <p className="mt-4 text-lg text-muted">
          The page may have moved or the link may be out of date.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/services" variant="outline">
            Our services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
