import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass gradient-border rounded-3xl p-6 transition-all duration-300 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
