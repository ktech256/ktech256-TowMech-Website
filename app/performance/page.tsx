import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";

export default function PerformancePage() {
  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="space-y-4">
            <Badge>Performance</Badge>
            <h1 className="text-4xl font-semibold text-white">
              TowMech Performance Snapshot
            </h1>
            <p className="text-white/70">
              This page highlights optimizations applied to keep the public site
              fast. Use it during QA to validate load performance.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Server-rendered pages with minimal client-only islands.",
              "Deferred loading for below-the-fold sections with Suspense.",
              "Local SVG placeholders to avoid external image fetches.",
              "Reduced global page transitions to limit layout work.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6 text-sm text-accent">
            Tip: Use Lighthouse or WebPageTest in production to verify metrics
            once real content is loaded.
          </div>
        </div>
      </Section>
    </div>
  );
}
