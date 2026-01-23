import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
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
  );
}
