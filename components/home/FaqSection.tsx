import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  return (
    <Section>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="space-y-4">
              <Badge>FAQs</Badge>
              <h2 className="text-3xl font-semibold text-white">
                Answers to keep you moving.
              </h2>
              <p className="text-white/70">
                Everything you need to know about booking, safety, and providers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
