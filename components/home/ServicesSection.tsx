import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <Section id="download" className="bg-midnight">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <Badge>Core services</Badge>
              <h2 className="text-3xl font-semibold text-white">
                Roadside help built for speed & transparency.
              </h2>
              <p className="text-white/70">
                From towing to mobile mechanics, TowMech keeps you safe with
                verified providers and live updates.
              </p>
            </div>
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
