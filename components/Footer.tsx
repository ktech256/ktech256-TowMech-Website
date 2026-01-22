import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/safety", label: "Safety" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/provider-agreement", label: "Provider Agreement" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Image
            src="/images/towmech-logo.svg"
            alt="TowMech"
            width={140}
            height={40}
          />
          <p className="text-sm text-white/60">
            TowMech connects customers with verified towing providers and
            mechanics in minutes.
          </p>
          <p className="text-sm text-white/70">support@towmech.com</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/providers" className="hover:text-white">
                Providers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TowMech. A product of Texas Computer Hub.
      </div>
    </footer>
  );
}
