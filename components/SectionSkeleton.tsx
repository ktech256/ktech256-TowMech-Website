import { Section } from "@/components/Section";

export function SectionSkeleton({ title }: { title: string }) {
  return (
    <Section className="bg-midnight/50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="h-5 w-24 animate-pulse rounded-full bg-white/10" />
          <div className="mt-4 h-8 w-64 animate-pulse rounded-full bg-white/10" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
          <p className="sr-only">{title}</p>
        </div>
      </div>
    </Section>
  );
}
