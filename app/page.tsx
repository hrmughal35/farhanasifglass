"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Check,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Truck,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./components/language-switcher";
import { useLanguage } from "./components/language-provider";
import {
  COMPANY_NAME,
  COMPANY_NAME_AR,
  MANAGING_DIRECTOR,
} from "./lib/i18n/translations";

const LOGO_SRC = "gallery/Logo.png";

const heroFeatureIcons = [Shield, Users, Clock, Wrench];
const visionMissionIcons = [Target, Building2, Shield];
const serviceIcons = [Truck, Building2, Building2, Wrench];
const serviceFeatureIcons = [Users, Wrench, Shield, Clock];
const contactIcons = [Phone, Phone, Mail, MapPin, Clock];

const productImages = [
  "gallery/glass-grill-doors.png",
  "gallery/aluminium-doors-windows.png",
  "gallery/wood-doors-windows.png",
  "gallery/africa-delivery-showcase.png",
  "gallery/glass-partitions.png",
  "gallery/glass-grill-doors.png",
  "gallery/kitchen-cabinets.png",
  "gallery/casting-gates-grills.png",
  "gallery/wood-doors-windows.png",
  "gallery/rolling-shutters.png",
];

const projectFilters = ["All", "Residential", "Commercial", "Hospitality", "Industrial"] as const;
type ProjectFilter = (typeof projectFilters)[number];

const projectMeta: { category: ProjectFilter; image: string }[] = [
  { category: "Residential", image: "gallery/aluminium-doors-windows.png" },
  { category: "Commercial", image: "gallery/glass-partitions.png" },
  { category: "Commercial", image: "gallery/kitchen-cabinets.png" },
  { category: "Residential", image: "gallery/africa-delivery-showcase.png" },
  { category: "Hospitality", image: "gallery/glass-grill-doors.png" },
  { category: "Industrial", image: "gallery/rolling-shutters.png" },
];

const navHrefs = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "products" as const, href: "#products" },
  { key: "services" as const, href: "#services" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];

const footerLinkHrefs = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "products" as const, href: "#products" },
  { key: "services" as const, href: "#services" },
  { key: "projects" as const, href: "#projects" },
  { key: "getQuote" as const, href: "#quote" },
  { key: "contact" as const, href: "#contact" },
];

function CompanyLogo({
  compact = false,
  onDark = false,
  alt,
}: {
  compact?: boolean;
  onDark?: boolean;
  alt: string;
}) {
  return (
    <div className={onDark ? "bg-navy leading-none" : undefined}>
      <Image
        src={LOGO_SRC}
        alt={alt}
        width={compact ? 160 : 280}
        height={compact ? 48 : 100}
        priority={compact}
        className={`block h-auto w-auto shrink-0 object-contain ${compact ? "max-h-12" : "max-h-24"}`}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title mt-3">{children}</h2>;
}

function CheckListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="check-item">
      <span className="check-item__icon">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
      <span className="text-sm leading-6">{children}</span>
    </li>
  );
}

function FeatureBox({
  title,
  description,
  icon: Icon,
  dark = false,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="feature-icon-wrap mx-auto text-gold">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <h3
        className={`mt-4 font-display text-sm font-bold uppercase tracking-wide ${dark ? "text-white" : "text-navy"}`}
      >
        {title}
      </h3>
      <p className={`mt-2 text-sm leading-6 ${dark ? "text-white/70" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("All");

  const navLinks = navHrefs.map((item) => ({
    href: item.href,
    label: t.nav[item.key],
  }));

  const projects = t.projects.items.map((item, index) => ({
    title: item.title,
    category: projectMeta[index].category,
    image: projectMeta[index].image,
  }));

  const filteredProjects =
    projectFilter === "All"
      ? projects
      : projects.filter((project) => project.category === projectFilter);

  const contactInfo = [
    {
      label: t.contact.labels.phone,
      value: "+971 52 890 3210",
      href: "tel:+971528903210",
      icon: contactIcons[0],
    },
    {
      label: t.contact.labels.phoneAlt,
      value: "+971 52 136 5299",
      href: "tel:+971521365299",
      icon: contactIcons[1],
    },
    {
      label: t.contact.labels.email,
      value: "asif.farhanasif@yahoo.com",
      href: "mailto:asif.farhanasif@yahoo.com",
      icon: contactIcons[2],
    },
    {
      label: t.contact.labels.address,
      value: t.contact.addressValue,
      href: "https://maps.google.com/?q=Frij%20Al%20Murar%2C%20Near%20Latifa%20Mosque%2C%20Deira%2C%20Dubai%20-%20UAE",
      icon: contactIcons[3],
    },
    {
      label: t.contact.labels.workingHours,
      value: t.contact.workingHoursValue,
      href: undefined,
      icon: contactIcons[4],
    },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "products", "services", "quote", "projects", "contact"];

    const updateActive = () => {
      const current =
        sectionIds.findLast((id) => {
          const el = document.getElementById(id);
          return el && window.scrollY >= el.offsetTop - 120;
        }) ?? "home";
      setActiveSection(`#${current}`);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-navy shadow-lg">
        <div className="section-shell flex items-center justify-between gap-4 py-3">
          <a href="#home" className="shrink-0">
            <CompanyLogo compact onDark alt={t.common.logoAlt} />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a href="#quote" className="btn-gold text-sm">
              {t.nav.getQuote}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={t.nav.toggleMenu}
              onClick={() => setMenuOpen((value) => !value)}
              className="text-white"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-medium text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setMenuOpen(false)} className="btn-gold mt-3 w-full">
              {t.nav.getQuote}
            </a>
          </div>
        )}
      </header>

      <main className="pt-[60px]">
        <section id="home" className="relative min-h-[560px]">
          <Image
            src="gallery/africa-delivery-showcase.png"
            alt={t.hero.imageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative section-shell flex min-h-[560px] flex-col justify-center py-20">
            <p className="text-sm font-medium text-gold/90">{COMPANY_NAME_AR}</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
              {t.hero.companyLine1}
              <br />
              {t.hero.companyLine2}
            </h1>
            <p className="mt-5 max-w-2xl font-display text-xl font-bold uppercase tracking-wide text-gold md:text-2xl">
              {t.hero.taglineLine1}{" "}
              <span className="text-white">{t.hero.taglineLine2}</span>
            </p>
            <p className="mt-4 max-w-2xl text-lg text-white/80">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#quote" className="btn-gold">
                {t.hero.getQuote}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gold"
              >
                {t.hero.ourProjects}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="navy-section py-12">
          <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.heroFeatures.map((feature, index) => (
              <FeatureBox
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={heroFeatureIcons[index]}
                dark
              />
            ))}
          </div>
        </section>

        <section className="white-section py-20">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>{t.aboutPreview.label}</SectionLabel>
              <SectionTitle>{t.aboutPreview.title}</SectionTitle>
              <p className="mt-5 text-base leading-7 text-gray-600">{t.aboutPreview.body}</p>
              <p className="mt-4 rounded-sm border border-gray-200 bg-off-white px-5 py-4 text-sm italic leading-7 text-gray-700">
                {t.aboutPreview.servicesNote}
              </p>
              <a href="#about" className="btn-gold mt-8">
                {t.aboutPreview.learnMore}
              </a>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-sm">
              <Image
                src="gallery/aluminium-doors-windows.png"
                alt={t.aboutPreview.imageAlt}
                fill
                className="object-cover image-fade-left"
              />
            </div>
          </div>
        </section>

        <section className="navy-section py-14">
          <div className="section-shell grid grid-cols-2 gap-8 lg:grid-cols-4">
            {t.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="stat-number">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-off-white py-20 md:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-4xl rounded-sm border border-gold/40 bg-navy px-6 py-12 text-center shadow-[0_24px_60px_rgba(1,14,36,0.2)] md:px-12 md:py-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {t.director.label}
              </p>
              <blockquote className="mt-6 text-lg leading-9 text-white md:text-xl md:leading-10">
                &ldquo;{t.director.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-base leading-8 text-white/85">{t.director.body}</p>
              <div className="mt-10 flex flex-col items-center">
                <span className="h-1 w-20 bg-gold" aria-hidden="true" />
                <p className="mt-8 font-display text-5xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
                  {MANAGING_DIRECTOR}
                </p>
                <p className="mt-3 font-display text-base font-bold uppercase tracking-[0.35em] text-gold md:text-lg">
                  {t.director.role}
                </p>
                <p className="mt-4 text-sm text-white/70">{COMPANY_NAME}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="white-section py-20">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>{t.about.label}</SectionLabel>
              <SectionTitle>{t.about.title}</SectionTitle>
              <p className="mt-5 text-base leading-7 text-gray-600">{t.about.body}</p>
              <p className="mt-4 text-sm font-medium text-navy">{COMPANY_NAME_AR}</p>
            </div>
            <div className="relative h-[380px] overflow-hidden rounded-sm">
              <Image
                src="gallery/glass-partitions.png"
                alt={t.about.imageAlt}
                fill
                className="object-cover image-fade-left"
              />
            </div>
          </div>
        </section>

        <section className="light-section py-16">
          <div className="section-shell grid gap-10 md:grid-cols-3">
            {t.visionMissionValues.map((item, index) => {
              const Icon = visionMissionIcons[index];
              return (
                <div key={item.title} className="text-center">
                  <div className="feature-icon-wrap mx-auto">
                    <Icon className="h-10 w-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold uppercase text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="navy-section py-20">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase text-white">
                {t.whyChooseUs.title}
              </h2>
              <ul className="mt-8 space-y-4 text-white/90">
                {t.whyChooseUs.items.map((item) => (
                  <CheckListItem key={item}>{item}</CheckListItem>
                ))}
              </ul>
            </div>
            <div className="relative h-[380px] overflow-hidden rounded-sm">
              <Image
                src="gallery/kitchen-cabinets.png"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="products" className="light-section py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>{t.products.label}</SectionLabel>
              <SectionTitle>{t.products.title}</SectionTitle>
              <p className="mt-4 text-base leading-7 text-gray-600">{t.products.body}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.products.items.map((product, index) => (
                <article key={product.title} className="product-card">
                  <div className="relative h-52">
                    <Image
                      src={productImages[index]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-navy">{product.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{product.description}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
                    >
                      {t.products.viewDetails}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="navy-section py-12">
          <div className="section-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-xl font-bold uppercase text-white md:text-2xl">
                {t.productsCta.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">{t.productsCta.body}</p>
            </div>
            <a href="#quote" className="btn-gold shrink-0">
              {t.productsCta.button}
            </a>
          </div>
        </section>

        <section id="services" className="white-section py-20">
          <div className="section-shell">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <SectionLabel>{t.services.label}</SectionLabel>
                <SectionTitle>{t.services.title}</SectionTitle>
                <p className="mt-4 text-base leading-7 text-gray-600">{t.services.body}</p>
              </div>
              <div className="relative h-64 overflow-hidden rounded-sm lg:h-72">
                <Image
                  src="gallery/wood-doors-windows.png"
                  alt={t.services.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-12 rounded-sm border border-gray-200 bg-white p-6 md:p-8">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <div key={service.title} className="service-row">
                    <div className="feature-icon-wrap shrink-0">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-navy">{service.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="navy-section py-14">
          <div className="section-shell grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.serviceFeatures.map((feature, index) => (
              <FeatureBox
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={serviceFeatureIcons[index]}
                dark
              />
            ))}
          </div>
        </section>

        <section id="quote" className="light-section py-20">
          <div className="section-shell">
            <SectionLabel>{t.quote.label}</SectionLabel>
            <SectionTitle>{t.quote.title}</SectionTitle>
            <p className="mt-3 max-w-2xl text-base text-gray-600">{t.quote.body}</p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <form className="space-y-5 rounded-sm border border-gray-200 bg-white p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.quote.fullName}
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      placeholder={t.contact.form.namePlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.quote.email}
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.quote.phone}
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-type" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.quote.projectType}
                    </label>
                    <select id="quote-type" className="form-input">
                      <option value="">{t.quote.selectProjectType}</option>
                      {t.quote.projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium text-navy">
                    {t.quote.serviceRequired}
                  </label>
                  <select id="quote-service" className="form-input">
                    <option value="">{t.quote.selectService}</option>
                    {t.footer.serviceItems.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quote-details" className="mb-1.5 block text-sm font-medium text-navy">
                    {t.quote.projectDetails}
                  </label>
                  <textarea
                    id="quote-details"
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="form-input resize-none"
                  />
                </div>
                <button type="button" className="btn-gold w-full py-3.5">
                  {t.quote.sendRequest}
                </button>
              </form>

              <div className="navy-section relative overflow-hidden rounded-sm p-6 md:p-8">
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {t.quote.whyTitle}
                </h3>
                <ul className="mt-6 space-y-3 text-white/90">
                  {t.quote.benefits.map((benefit) => (
                    <CheckListItem key={benefit}>{benefit}</CheckListItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="white-section py-20">
          <div className="section-shell">
            <SectionLabel>{t.projects.label}</SectionLabel>
            <SectionTitle>{t.projects.title}</SectionTitle>
            <p className="mt-4 max-w-2xl text-base text-gray-600">{t.projects.body}</p>

            <div className="mt-8 flex flex-wrap gap-6 border-b border-gray-200 pb-4">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setProjectFilter(filter)}
                  className={`filter-tab ${projectFilter === filter ? "active" : ""}`}
                >
                  {t.projects.filters[filter]}
                </button>
              ))}
            </div>

            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filteredProjects.map((project) => (
                <div key={project.title} className="mb-4 break-inside-avoid overflow-hidden rounded-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="navy-section relative overflow-hidden py-16">
          <div className="section-shell relative z-10">
            <h2 className="text-center font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
              {t.dubaiAreas.title}
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {t.dubaiAreas.areas.map((area) => (
                <div key={area} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xs font-medium text-white/80">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="light-section py-20">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionLabel>{t.contact.label}</SectionLabel>
                <SectionTitle>{t.contact.title}</SectionTitle>
                <p className="mt-4 text-base leading-7 text-gray-600">{t.contact.body}</p>

                <div className="mt-8 space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy">{item.label}</p>
                          <p className="mt-1 text-sm text-gray-600">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href} className="block hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              <form className="rounded-sm border border-gray-200 bg-white p-6 md:p-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.contact.form.fullName}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={t.contact.form.namePlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder={t.contact.form.phonePlaceholder}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-navy">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="form-input resize-none"
                    />
                  </div>
                  <button type="button" className="btn-gold w-full py-3.5">
                    {t.contact.form.sendMessage}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 overflow-hidden rounded-sm border border-gray-200">
              <iframe
                title={t.contact.mapTitle}
                src="https://www.google.com/maps?q=Frij%20Al%20Murar%2C%20Near%20Latifa%20Mosque%2C%20Deira%2C%20Dubai%20-%20UAE&output=embed"
                className="h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="navy-section pt-16 pb-6">
        <div className="section-shell">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <CompanyLogo onDark alt={t.common.logoAlt} />
              <p className="mt-4 text-sm leading-6 text-white/70">
                {t.footer.body}{" "}
                <strong className="font-semibold text-white">{MANAGING_DIRECTOR}</strong>,{" "}
                {t.footer.role}
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                {t.footer.quickLinks}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinkHrefs.map((link) => (
                  <li key={link.key}>
                    <a href={link.href} className="text-sm text-white/70 hover:text-white">
                      {t.footer.links[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                {t.footer.ourProducts}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.footer.productItems.map((item) => (
                  <li key={item}>
                    <a href="#products" className="text-sm text-white/70 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold">
                {t.footer.ourServices}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {t.footer.serviceItems.map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-white/70 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {COMPANY_NAME} {t.footer.rights}
            </p>
            <div className="flex gap-4 text-xs text-white/50">
              <a href="#" className="hover:text-white">
                {t.footer.privacy}
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/971528903210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsapp}
        className="whatsapp-float"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden text-sm font-semibold sm:inline">+971 52 890 3210</span>
      </a>
    </>
  );
}
