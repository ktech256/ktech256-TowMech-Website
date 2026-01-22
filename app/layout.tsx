import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TowMech | Fast. Safe. Reliable Towing & Roadside Help",
  description:
    "TowMech connects customers with verified towing providers and mechanics in minutes across South Africa.",
  openGraph: {
    title: "TowMech | Fast. Safe. Reliable Towing & Roadside Help",
    description:
      "TowMech connects customers with verified towing providers and mechanics in minutes across South Africa.",
    url: "https://towmech.com",
    siteName: "TowMech",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "TowMech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TowMech | Fast. Safe. Reliable Towing & Roadside Help",
    description:
      "TowMech connects customers with verified towing providers and mechanics in minutes across South Africa.",
    images: ["/images/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="overflow-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}