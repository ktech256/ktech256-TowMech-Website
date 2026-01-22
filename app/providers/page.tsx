import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { providerSteps } from "@/lib/data";
import Link from "next/link";

export default function ProvidersPage() {
  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>Providers</Badge>
              <h1 className="text-4xl font-semibold text-white">
                Grow your towing business with TowMech.
              </h1>
              <p className="text-white/70">
                Access premium dispatch tools, verified customer requests, and nationwide
                exposure.
              </p>
              <Button href="mailto:support@towmech.com">Join as Provider</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Provider Benefits</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>• Consistent job flow with transparent pricing.</li>
                <li>• Verified customer requests and secure communication.</li>
                <li>• Dedicated support and performance insights.</li>
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Requirements</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>• Licensed towing or mechanic business.</li>
                <li>• Proof of insurance and compliance documents.</li>
                <li>• Ability to meet TowMech safety guidelines.</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>Verification Process</Badge>
              <h2 className="text-3xl font-semibold text-white">
                Join in four simple steps.
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {providerSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <Card className="text-center">
                  <p className="text-sm text-white/50">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step}</h3>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="mailto:support@towmech.com">Join as Provider</Button>
            <Link href="/provider-agreement" className="text-sm text-white/70 hover:text-white">
              Review provider agreement
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
