import {
  ArrowUpRight,
  BatteryCharging,
  Car,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

export const services = [
  {
    title: "Towing",
    description: "Rapid response towing with verified providers across South Africa.",
    icon: Truck,
    image: "/images/service-towing.svg",
  },
  {
    title: "Roadside Assistance",
    description: "On-demand help for breakdowns, lockouts, and urgent roadside needs.",
    icon: ShieldCheck,
    image: "/images/service-roadside.svg",
  },
  {
    title: "Vehicle Recovery",
    description: "Expert recovery for accidents, off-road incidents, and heavy vehicles.",
    icon: ArrowUpRight,
    image: "/images/service-recovery.svg",
  },
  {
    title: "Battery Jumpstart",
    description: "Power your vehicle fast with safe jumpstart support.",
    icon: BatteryCharging,
    image: "/images/service-battery.svg",
  },
  {
    title: "Tyre Change",
    description: "Quick tyre replacements and inspections on-site.",
    icon: Car,
    image: "/images/service-tyre.svg",
  },
  {
    title: "Mobile Mechanic",
    description: "Trusted mobile mechanics for diagnostics and quick repairs.",
    icon: Wrench,
    image: "/images/service-mechanic.svg",
  },
];

export const howItWorks = [
  {
    title: "Request Help",
    description: "Open TowMech and share your location and vehicle issue.",
    icon: MapPin,
  },
  {
    title: "Get Matched",
    description: "We connect you with a verified towing or roadside provider nearby.",
    icon: Zap,
  },
  {
    title: "Track & Resolve",
    description: "Track arrival in real time and get back on the road safely.",
    icon: CheckCircle2,
  },
];

export const faqs = [
  {
    question: "Is TowMech available nationwide?",
    answer:
      "TowMech connects you with providers across South Africa, expanding coverage every month.",
  },
  {
    question: "How are providers verified?",
    answer:
      "All providers go through identity checks, credential validation, and service quality reviews.",
  },
  {
    question: "Can I schedule a tow in advance?",
    answer:
      "Yes, you can pre-book towing or mechanic assistance directly from the app.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "TowMech supports secure in-app payments and provider-approved alternatives.",
  },
];

export const testimonials = [
  {
    name: "Lerato M.",
    role: "Toyota Hilux Owner",
    quote:
      "TowMech had a verified tow truck at my location in under 20 minutes. Premium experience.",
  },
  {
    name: "Kabelo T.",
    role: "Fleet Manager",
    quote:
      "We use TowMech for our fleet recovery. Reliable updates and transparent pricing every time.",
  },
  {
    name: "Anita R.",
    role: "Roadside Customer",
    quote:
      "The safety checklist and live tracking made me feel secure. Highly recommended.",
  },
];

export const team = [
  {
    name: "Ongus Killian",
    title: "Chief Executive Officer",
    bio: "Drives TowMech's mission to deliver safe, premium roadside support.",
  },
  {
    name: "Musa Nkosi",
    title: "Chief Operating Officer",
    bio: "Leads provider operations and response excellence across regions.",
  },
  {
    name: "Naledi Dlamini",
    title: "Head of Product",
    bio: "Builds seamless digital experiences for customers and partners.",
  },
  {
    name: "Jared Naidoo",
    title: "Head of Partnerships",
    bio: "Strengthens TowMech's nationwide provider network.",
  },
  {
    name: "Aisha Patel",
    title: "Customer Experience Lead",
    bio: "Ensures premium support with empathy and speed.",
  },
  {
    name: "Sipho Khumalo",
    title: "Safety & Compliance",
    bio: "Sets rigorous standards for verification and on-road safety.",
  },
];

export const providerSteps = [
  "Apply",
  "Verification",
  "Go Live",
  "Earn",
];
