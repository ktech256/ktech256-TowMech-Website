import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Accordion } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { services, howItWorks, faqs, testimonials } from "@/lib/data";
import { ShieldCheck, Smartphone, Timer } from "lucide-react";

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
                  href="https://towmech-admin-dashboard.onrender.com/login"
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
                  width={520}
                  height={720}
                  className="h-auto w-full rounded-2xl"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

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

      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="space-y-4">
                <Badge>Testimonials</Badge>
                <h2 className="text-3xl font-semibold text-white">
                  Customers rate TowMech 4.9/5 for speed and care.
                </h2>
                <p className="text-white/70">
                  Verified reviews from drivers, fleets, and on-demand customers.
                </p>
                <div className="flex gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    4.9 Average Rating
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                    12k+ Completed jobs
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <TestimonialCarousel testimonials={testimonials} />
            </Reveal>
          </div>
        </div>
      </Section>

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
                  Everything you need to know about booking, safety, and
                  providers.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
