"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Factory,
  Globe,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type GalleryItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Reach", href: "#reach" },
  { label: "Contact", href: "#contact" },
];

const arabicCompanyTitle = "فرحان آصف لتركيب الألمنيوم والزجاج ذ.م.م";

const services: Service[] = [
  {
    title: "Aluminium Doors & Windows",
    description:
      "Luxury sliding systems, fixed glazing, casement profiles, and facade-ready aluminium solutions.",
    icon: DoorOpen,
  },
  {
    title: "Glass Doors & Partitions",
    description:
      "Executive office partitions, entrance systems, and frameless glass enclosures with premium detailing.",
    icon: Layers3,
  },
  {
    title: "Kitchen Cabinets",
    description:
      "Elegant cabinetry packages crafted to combine utility, visual order, and modern interior character.",
    icon: Sparkles,
  },
  {
    title: "Rolling Shutters",
    description:
      "Smooth-operating shutter systems for retail, industrial, and mixed-use commercial environments.",
    icon: Factory,
  },
  {
    title: "Casting Gates & Grills",
    description:
      "Decorative yet durable entrance gates and grill work designed to elevate curb appeal and security.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Aluminium & Glass Work",
    description:
      "Bespoke fabrication for balconies, staircases, villas, showrooms, and one-of-a-kind architectural briefs.",
    icon: Wrench,
  },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Aluminium Doors & Windows",
    category: "Villa glazing",
    description: "Slim, modern framing systems for bright and premium living spaces.",
    image: "/gallery/aluminium-doors-windows.png",
  },
  {
    title: "Glass Partitions",
    category: "Corporate interiors",
    description: "Executive-grade partition systems crafted for clean, open office environments.",
    image: "/gallery/glass-partitions.png",
  },
  {
    title: "Kitchen Cabinets",
    category: "Luxury interiors",
    description: "Refined cabinet workmanship with premium material coordination and elegant finishes.",
    image: "/gallery/kitchen-cabinets.png",
  },
  {
    title: "Rolling Shutters",
    category: "Retail security",
    description: "Durable commercial shutters balancing security, aesthetics, and daily performance.",
    image: "/gallery/rolling-shutters.png",
  },
  {
    title: "Casting Gates & Grills",
    category: "Exterior metalwork",
    description: "Decorative entrance gates and crafted grill work for statement architectural facades.",
    image: "/gallery/casting-gates-grills.png",
  },
  {
    title: "Grill & Glass Doors",
    category: "Residential entry",
    description: "Stylish entrance systems blending privacy, elegance, and premium security presence.",
    image: "/gallery/glass-grill-doors.png",
  },
  {
    title: "Window & Wood Doors",
    category: "Mixed material design",
    description: "Warm wood finishes paired with glazing and clean-lined modern architectural frames.",
    image: "/gallery/wood-doors-windows.png",
  },
];

const craftsmanshipPoints = [
  "Dubai-based production and site execution",
  "Luxury-focused finishes with practical durability",
  "Built and delivered across African countries",
  "Custom fabrication shaped around each project brief",
];

const signatureMetrics = [
  { value: "Luxury", label: "Positioned for premium villas, offices, and commercial facades" },
  { value: "Africa", label: "Product delivery and project support across African countries" },
  { value: "Tailored", label: "Every installation aligned with material, scale, and design intent" },
];

const contactDetails = [
  {
    label: "Phone",
    value: "+971528903210",
    href: "tel:+971528903210",
    icon: Phone,
  },
  {
    label: "Email",
    value: "asif.farhanasif@yahoo.com",
    href: "mailto:asif.farhanasif@yahoo.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Frij Al Murar, Near Latif Mosque, Deira, Dubai - UAE",
    href: "https://maps.google.com/?q=Frij%20Al%20Murar%2C%20Near%20Latif%20Mosque%2C%20Deira%2C%20Dubai%20-%20UAE",
    icon: MapPin,
  },
];

const reasons = [
  {
    title: "High Quality Materials",
    description: "Selected systems and finishes with a premium look and long-term durability.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled Workforce",
    description: "Experienced fabrication and fixing teams focused on detail, alignment, and finish.",
    icon: Sparkles,
  },
  {
    title: "Timely Delivery",
    description: "Structured execution for projects that demand coordination, speed, and consistency.",
    icon: Clock3,
  },
  {
    title: "Reliable Pricing",
    description: "Strong value for premium output without losing craftsmanship or presentation quality.",
    icon: BadgeCheck,
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeInUp}
      className="mb-12 max-w-3xl"
    >
      <span className="glass-outline inline-flex rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}

function MonogramLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`fa-monogram ${compact ? "h-14 w-14" : "h-24 w-24 md:h-28 md:w-28"}`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <circle cx="60" cy="60" r="56" fill="#ffffff" stroke="#0f1f32" strokeWidth="6" />
        <circle cx="60" cy="60" r="43" fill="none" stroke="#101d2d" strokeWidth="2.2" />
        <path d="M13 25l18-11 19 19-15 8-22-16Z" fill="#ffffff" stroke="#0f1f32" strokeWidth="2.8" />
        <path d="M23 7l15-6 25 24-13 7L23 7Z" fill="#ffffff" stroke="#0f1f32" strokeWidth="2.8" />
        <text x="35" y="78" fill="#0f1f32" fontSize="58" fontWeight="700" letterSpacing="-4" fontFamily="Times New Roman, serif">
          F
        </text>
        <text x="54" y="81" fill="#0f1f32" fontSize="62" fontWeight="700" letterSpacing="-4" fontFamily="Times New Roman, serif">
          A
        </text>
        <path d="M22 64c15-7 40-8 76 0" stroke="#0f1f32" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        size: 4 + (index % 4) * 3,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 19) % 100}%`,
        duration: 7 + (index % 5),
        delay: index * 0.25,
      })),
    []
  );

  useEffect(() => {
    const sectionIds = ["home", "about", "gallery", "services", "reach", "contact"];

    const updateNavbarState = () => {
      setIsScrolled(window.scrollY > 24);

      const currentSection =
        sectionIds.findLast((id) => {
          const element = document.getElementById(id);

          if (!element) {
            return false;
          }

          return window.scrollY >= element.offsetTop - 180;
        }) ?? "home";

      setActiveSection(`#${currentSection}`);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbarState);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/25"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              boxShadow: "0 0 24px rgba(216, 188, 128, 0.16)",
            }}
            animate={{ y: [0, -18, 0], opacity: [0.18, 0.75, 0.18] }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          animate={{ paddingTop: isScrolled ? 10 : 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="section-shell"
        >
          <motion.nav
            animate={{ scale: isScrolled ? 0.985 : 1, y: isScrolled ? -2 : 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden rounded-[30px] border px-4 py-4 shadow-[0_28px_80px_rgba(2,10,20,0.5)] backdrop-blur-[30px] md:px-6 ${
              isScrolled
                ? "border-[rgba(216,188,128,0.22)] bg-[linear-gradient(135deg,rgba(7,13,23,0.96),rgba(14,26,40,0.92))]"
                : "border-white/12 bg-[linear-gradient(135deg,rgba(10,19,31,0.84),rgba(17,34,52,0.68))]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div className="absolute left-6 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[rgba(216,188,128,0.12)] blur-3xl" />
              <div className="absolute right-8 top-0 h-28 w-36 rounded-full bg-white/6 blur-3xl" />
            </div>

            <div className="relative flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1.1fr_auto_1fr]">
              <a href="#home" className="flex min-w-0 items-center gap-4">
                <MonogramLogo compact />
                <div className="min-w-0">
                  <p className="hidden truncate text-[11px] font-medium text-slate-200 md:block">
                    {arabicCompanyTitle}
                  </p>
                  <p className="truncate font-display text-sm font-semibold tracking-[0.34em] text-white">
                    FARHAN ASIF
                  </p>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-300">
                    <span className="truncate">Aluminium & Glass Fixing L.L.C.</span>
                    <span className="hidden h-1 w-1 rounded-full bg-[color:var(--gold)] md:block" />
                    <span className="hidden uppercase tracking-[0.28em] text-[color:var(--gold-soft)] md:block">
                      Dubai
                    </span>
                  </div>
                </div>
              </a>

              <div className="hidden lg:flex lg:justify-center">
                <div className="rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
                  <div className="flex items-center gap-1">
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.href;

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`rounded-full px-4 py-2.5 text-sm transition ${
                            isActive
                              ? "bg-white/12 text-white shadow-[0_0_18px_rgba(216,188,128,0.14)]"
                              : "text-slate-300 hover:bg-white/8 hover:text-white"
                          }`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-end gap-3 md:flex">
                <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-right backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-slate-400">
                    Delivering
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">Dubai to Africa</p>
                </div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full border border-[rgba(216,188,128,0.3)] bg-[linear-gradient(135deg,rgba(216,188,128,0.24),rgba(255,255,255,0.08))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(216,188,128,0.16)] transition hover:shadow-[0_18px_50px_rgba(216,188,128,0.26)]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                  Get a Quote
                </a>
              </div>

              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((current) => !current)}
                className="flex h-12 w-12 items-center justify-center rounded-[20px] border border-white/15 bg-white/[0.06] text-white backdrop-blur-xl md:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <AnimatePresence>
              {menuOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-2">
                      {navLinks.map((link) => {
                        const isActive = activeSection === link.href;

                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block rounded-2xl px-4 py-3 text-sm transition ${
                              isActive
                                ? "bg-white/12 text-white"
                                : "text-slate-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[24px] border border-[rgba(216,188,128,0.28)] bg-[linear-gradient(135deg,rgba(216,188,128,0.24),rgba(255,255,255,0.08))] px-4 py-3.5 text-sm font-semibold text-white"
                    >
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.nav>
        </motion.div>
      </header>

      <section id="home" className="relative min-h-screen pt-28">
        <div className="section-shell py-6 md:py-10">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="/gallery/africa-delivery-showcase.png"
              alt="Premium aluminium and glass delivery showcase across Africa"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,12,21,0.92)_8%,rgba(6,12,21,0.7)_42%,rgba(6,12,21,0.46)_68%,rgba(6,12,21,0.84)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,188,128,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,194,255,0.12),transparent_30%)]" />

            <div className="relative grid min-h-[700px] gap-10 px-6 pb-10 pt-8 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:pb-12 lg:pt-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col justify-start pt-4 lg:pt-10"
              >
                <div className="inline-flex max-w-max items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.36em] text-[color:var(--gold-soft)] backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                  Luxury Aluminium Craftsmanship
                </div>

                <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-7xl">
                  Romantic luxury in{" "}
                  <span className="text-gradient-luxury">aluminium, glass, and crafted detail.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                  Premium aluminium doors, partitions, grill and glass doors, kitchen
                  cabinets, casting gates, windows, wood doors, and rolling shutters
                  designed in Dubai and delivered for projects across African countries.
                </p>

                <div className="mt-8 flex items-center gap-5">
                  <MonogramLogo />
                  <div className="max-w-sm">
                    <p className="text-sm text-slate-200">{arabicCompanyTitle}</p>
                    <p className="font-display text-xl text-white md:text-2xl">
                      Farhan Asif Aluminium and Glass Fixing L.L.C.
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      A more elegant identity for a company that builds refined aluminium,
                      glass, gate, shutter, and cabinet solutions with a luxury finish.
                    </p>
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(216,188,128,0.3)] bg-[linear-gradient(135deg,rgba(216,188,128,0.3),rgba(255,255,255,0.08))] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(216,188,128,0.22)]"
                  >
                    Request Luxury Quote
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href="#gallery"
                    className="glass-outline inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View Product Gallery
                  </motion.a>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                  {signatureMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.value}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl"
                    >
                      <p className="font-display text-2xl text-white">{metric.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-end justify-center lg:justify-end"
              >
                <div className="grid w-full max-w-[520px] gap-4 md:grid-cols-[0.8fr_1fr] lg:translate-y-8">
                  <div className="space-y-4 md:pt-12">
                    <div className="glass-card rounded-[30px] p-4">
                      <div className="relative h-[260px] overflow-hidden rounded-[24px]">
                        <Image
                          src="/gallery/glass-grill-doors.png"
                          alt="Luxury grill and glass entrance door"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="rounded-[28px] border border-[rgba(216,188,128,0.22)] bg-[linear-gradient(135deg,rgba(15,18,28,0.7),rgba(255,255,255,0.05))] p-5 backdrop-blur-xl">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                        Signature Promise
                      </p>
                      <p className="mt-3 text-lg leading-8 text-white">
                        Beautiful materials, cleaner lines, and installations that feel
                        premium at first sight.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="glass-card rounded-[34px] p-4">
                      <div className="relative h-[360px] overflow-hidden rounded-[28px]">
                        <Image
                          src="/gallery/aluminium-doors-windows.png"
                          alt="Premium aluminium doors and windows"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,12,21,0.55))]" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                            Featured Product
                          </p>
                          <p className="mt-2 font-display text-3xl text-white">
                            Aluminium Doors & Windows
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                          Product Range
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-200">
                          Partitions, cabinets, shutters, gates, grills, balcony structures,
                          and custom facade work.
                        </p>
                      </div>
                      <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                          Delivery Reach
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-200">
                          From Dubai manufacturing and coordination to African market delivery
                          support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            <SectionHeader
              eyebrow="The Brand"
              title="Less like a contractor. More like a luxury fabrication house."
              description="The website now leans into beauty, refinement, and presentation so that customers feel they are dealing with a premium company, not a generic supplier."
            />
            <div className="max-w-2xl space-y-6 text-base leading-8 text-slate-300 md:text-lg">
              <p>
                Farhan Asif Aluminium and Glass Fixing L.L.C. creates elegant aluminium
                and glass solutions for villas, offices, storefronts, and bespoke spaces.
                The focus is not only performance, but beauty: polished proportions, luxury
                material presence, and clean installation.
              </p>
              <p>
                From refined partitions to decorative gates and rolling shutters, each
                project is approached with an eye for sophistication and a commitment to
                dependable execution from Dubai to clients across African countries.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {craftsmanshipPoints.map((point, index) => (
                <motion.div
                  key={point}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-xl"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold-soft)]" />
                  <span className="text-sm leading-7 text-slate-200">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="glass-card rounded-[36px] p-4">
              <div className="relative h-[520px] overflow-hidden rounded-[30px]">
                <Image
                  src="/gallery/kitchen-cabinets.png"
                  alt="Luxury kitchen cabinets by Farhan Asif Aluminium and Glass Fixing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,23,0.08),rgba(7,13,23,0.62))]" />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-[rgba(216,188,128,0.24)] bg-[linear-gradient(145deg,rgba(9,15,24,0.9),rgba(19,28,39,0.78))] p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(4,8,14,0.48)]">
              <Quote className="h-8 w-8 text-[color:var(--gold-soft)]" />
              <p className="mt-4 text-lg leading-9 text-white md:text-[1.35rem]">
                We do not only fix aluminium and glass. We shape the feeling of a space:
                how it welcomes, how it reflects light, and how it leaves an impression of
                quality, beauty, and trust.
              </p>
              <div className="mt-5">
                <p className="font-display text-xl text-white">Farhan Asif</p>
                <p className="mt-1 text-sm uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                  Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Product Gallery"
            title="A visual gallery of the products we build and deliver."
            description="Real product imagery makes the brand feel established and trustworthy. This gallery showcases the kind of aluminium and glass work your company is known for."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[34px] border border-white/10 ${
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 || index === 3 ? "h-[420px]" : "h-[360px]"}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(6,12,21,0.78)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)] backdrop-blur-xl">
                      {item.category}
                    </span>
                    <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
          >
            <SectionHeader
              eyebrow="Services"
              title="A broader service offering, presented with more elegance."
              description="Instead of stacking everything into heavy boxes, the service section is now cleaner and more editorial while still making the offering easy to scan."
            />
            <div className="rounded-[34px] border border-[rgba(216,188,128,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-7 backdrop-blur-2xl">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                Signature Scope
              </p>
              <p className="mt-4 text-lg leading-8 text-white">
                Aluminium doors, windows, glass partitions, kitchen cabinets,
                casting gates, grills, wood doors, rolling shutters, balcony
                structures, and custom aluminium and glass work.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold-soft)]"
              >
                Discuss your requirement
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={fadeInUp}
                  className="group flex gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-[rgba(216,188,128,0.24)] hover:bg-white/[0.06]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.06] text-[color:var(--gold-soft)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white">{service.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reach" className="py-20 md:py-28">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src="/gallery/africa-delivery-showcase.png"
              alt="Delivery and project support across African countries"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,12,21,0.9)_10%,rgba(6,12,21,0.72)_45%,rgba(6,12,21,0.78)_100%)]" />

            <div className="relative grid gap-8 px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                  Africa Delivery Reach
                </span>
                <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold text-white md:text-5xl">
                  Products we build in Dubai and deliver across African countries.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                  The company positioning now speaks beyond a local workshop. It presents
                  Farhan Asif Aluminium and Glass Fixing L.L.C. as a premium fabrication
                  and delivery partner serving clients with architectural ambition across
                  multiple African markets.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                  <Truck className="h-7 w-7 text-[color:var(--gold-soft)]" />
                  <p className="mt-4 font-display text-2xl text-white">Delivery support</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Coordinated supply and product movement for aluminium and glass orders.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                  <Globe className="h-7 w-7 text-[color:var(--gold-soft)]" />
                  <p className="mt-4 font-display text-2xl text-white">Regional presence</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    A brand story that speaks to clients outside Dubai with confidence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Premium presentation backed by practical execution."
            description="This section stays useful, but it is lighter, cleaner, and less visually crowded than before."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
                >
                  <Icon className="h-6 w-6 text-[color:var(--gold-soft)]" />
                  <h3 className="mt-4 font-display text-xl text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Contact"
            title="Start the conversation for your next premium project."
            description="The contact section remains practical, but now sits inside a stronger luxury brand presentation."
          />

          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="glass-card rounded-[34px] p-6 md:p-8"
            >
              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "Location" ? "_blank" : undefined}
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl transition hover:border-[rgba(216,188,128,0.25)] hover:bg-white/[0.07]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                        <Icon className="h-5 w-5 text-[color:var(--gold-soft)]" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-100">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10">
                <iframe
                  title="Farhan Asif Aluminium and Glass Fixing location"
                  src="https://www.google.com/maps?q=Frij%20Al%20Murar%2C%20Near%20Latif%20Mosque%2C%20Deira%2C%20Dubai%20-%20UAE&output=embed"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="glass-card rounded-[34px] p-7 md:p-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--gold-soft)]">
                Enquiry Form
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                Request a quote, product supply, or delivery discussion.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                The form is ready for connection to your preferred email, CRM, or lead
                collection workflow when you are ready to launch.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="glass-outline w-full rounded-2xl px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-[rgba(216,188,128,0.4)] focus:bg-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+971"
                    className="glass-outline w-full rounded-2xl px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-[rgba(216,188,128,0.4)] focus:bg-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project or product requirements"
                    className="glass-outline w-full rounded-2xl px-4 py-4 text-white outline-none placeholder:text-slate-400 focus:border-[rgba(216,188,128,0.4)] focus:bg-white/10"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(216,188,128,0.28)] bg-[linear-gradient(135deg,rgba(216,188,128,0.26),rgba(255,255,255,0.08))] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(216,188,128,0.18)] transition hover:shadow-[0_18px_50px_rgba(216,188,128,0.24)]"
                >
                  Send Enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="pb-8">
        <div className="section-shell">
          <div className="glass-card rounded-[34px] px-6 py-8 md:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <MonogramLogo />
                <div>
                  <p className="text-sm text-slate-200">{arabicCompanyTitle}</p>
                  <p className="font-display text-2xl font-semibold text-white">
                    Farhan Asif Aluminium and Glass Fixing L.L.C.
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    Premium aluminium, glass, cabinet, grill, and shutter solutions
                    shaped in Dubai and positioned for clients across African countries.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:min-w-[420px]">
                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { href: "tel:+971528903210", label: "Phone", icon: Phone },
                    { href: "mailto:asif.farhanasif@yahoo.com", label: "Email", icon: Mail },
                    { href: "https://wa.me/971528903210", label: "WhatsApp", icon: MessageCircle },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === "WhatsApp" ? "_blank" : undefined}
                        rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        aria-label={item.label}
                        className="glass-outline flex h-11 w-11 items-center justify-center rounded-2xl text-slate-100 transition hover:bg-white/[0.12] hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/971528903210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float group"
      >
        <span className="whatsapp-float__icon">
          <MessageCircle className="h-5 w-5 text-emerald-200" />
        </span>
        <span className="whatsapp-float__label">
          <span className="block text-[11px] uppercase tracking-[0.3em] text-emerald-100/80">
            WhatsApp
          </span>
          <span className="block text-sm font-semibold">+971 52 890 3210</span>
        </span>
      </a>
    </main>
  );
}
