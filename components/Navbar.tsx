"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/providers", label: "Providers" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/towmech-logo.svg"
            alt="TowMech"
            width={140}
            height={40}
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-white/70 transition hover:text-white",
                  active && "text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent transition-opacity",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            href="https://towmech-admin-dashboard.onrender.com/login"
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Admin Login
          </Button>
          <Button href="/providers">Become a Provider</Button>
        </div>
      </nav>
    </header>
  );
}
