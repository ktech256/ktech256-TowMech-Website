import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>Services</Badge>
              <h1 className="text-4xl font-semibold text-white">
                Premium towing and roadside services.
              </h1>
              <p className="text-white/70">
                TowMech matches you with verified providers for every emergency or scheduled
                service.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl space-y-8 px-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Card className="grid gap-6 md:grid-cols-[220px_1fr]">
                <div className="relative h-40 w-full md:h-full">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-2xl object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="text-white/70">{service.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button href="/contact">Get Help</Button>
                    <Button href="/providers" variant="secondary">
                      Become a Provider
                    </Button>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
          <p className="text-sm text-white/60">
            Pricing may vary depending on distance, vehicle type, and condition.
          </p>
        </div>
      </Section>
    </div>
  );
}
