import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary:
      "bg-primary text-white shadow-glow hover:shadow-[0_0_35px_rgba(0,51,160,0.55)]",
    secondary:
      "bg-white/10 text-white border border-white/15 hover:bg-white/20",
    ghost: "text-white/80 hover:text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(base, styles[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles[variant], className)}>{children}</button>
  );
}
