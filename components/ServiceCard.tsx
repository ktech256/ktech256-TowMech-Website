import type { ComponentType } from "react";
import { Card } from "@/components/Card";
import { SmartImage } from "@/components/SmartImage";

export function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
}: {
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <Card className="group flex h-full flex-col gap-6">
      <div className="relative h-40 w-full">
        <SmartImage
          src={image}
          alt={title}
          fill
          className="rounded-2xl object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/10 to-ink/70" />
        <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </Card>
  );
}
