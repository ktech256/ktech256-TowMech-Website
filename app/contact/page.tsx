import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>Contact</Badge>
              <h1 className="text-4xl font-semibold text-white">We’re here 24/7.</h1>
              <p className="text-white/70">
                Reach our support team for urgent help, feedback, or provider onboarding.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Contact details</h2>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>Email: support@towmech.com</p>
                <p>Country: South Africa</p>
                <p>Phone: 072 660 1660</p>
                <p>Address: 106 Market Street, Polokwane</p>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/60">
                Map placeholder — integrate your preferred map provider here.
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Send a message</h2>
              <p className="mt-2 text-sm text-white/60">
                We’ll respond as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
