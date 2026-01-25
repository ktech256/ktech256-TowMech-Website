import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { SectionSkeleton } from "@/components/SectionSkeleton";
import { howItWorks } from "@/lib/data";
import { ShieldCheck, Smartphone, Timer } from "lucide-react";

// ✅ FIX: remove `{ suspense: true }` from next/dynamic options
// Keep Suspense wrappers exactly as you had them (no functionality change).
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"));

const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection"),
);

const FaqSection = dynamic(() => import("@/components/home/FaqSection"));

export default function HomePage() {
  return (
    <div className="bg-ink">
      <Section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="animated-gradient absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
        <div className="animated-gradient absolute bottom-0 left-10 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-6">
              <Badge>Premium roadside assistance</Badge>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Fast. Safe. Reliable Towing & Roadside Help.
              </h1>
              <p className="text-lg text-white/70">
                TowMech connects customers with verified towing providers and
                mechanics in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#download">Download App</Button>
                <Button href="/providers" variant="secondary">
                  Become a Provider
                </Button>
                <Button
                  href="https://admin.towmech.com/login"
                  variant="ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Admin Login
                </Button>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-3">
                {[
                  { label: "Verified providers", value: "300+" },
                  { label: "Avg. response", value: "18 min" },
                  { label: "Safety rating", value: "4.9/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-br from-primary/40 via-transparent to-accent/30 blur-2xl" />
              <div className="glass gradient-border relative rounded-[32px] p-6">
                <SmartImage
                  src="/images/phone-mockup.svg"
                  alt="TowMech app preview"
                  width={720}
                  height={920}
                  className="h-auto w-full rounded-2xl"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Suspense fallback={<SectionSkeleton title="Services" />}>
        <ServicesSection />
      </Suspense>

      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="space-y-6">
                <Badge>How it works</Badge>
                <h2 className="text-3xl font-semibold text-white">
                  Assistance in three seamless steps.
                </h2>
                <p className="text-white/70">
                  TowMech makes it easy to request help, track arrival, and get
                  back on the road with confidence.
                </p>
                <div className="grid gap-4">
                  {howItWorks.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <step.icon className="h-4 w-4 text-accent" />
                        Step {index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass gradient-border rounded-3xl p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                    <p className="text-white">Verified Safety Checklist</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="h-6 w-6 text-accent" />
                    <p className="text-white">Live ETA Tracking</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-accent" />
                    <p className="text-white">24/7 App Support</p>
                  </div>
                  <Button href="/safety" variant="secondary">
                    View safety guidelines
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Suspense fallback={<SectionSkeleton title="Testimonials" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton title="FAQs" />}>
        <FaqSection />
      </Suspense>
    </div>
  );
}
