import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Bath,
  CheckCircle2,
  ChefHat,
  Hammer,
  Home,
  Layers,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

const heroImage = "https://i.imgur.com/j7W0zl4.jpeg";
const logoImage = "https://i.imgur.com/riTaD6e.png";
const officePhoneHref = "tel:18458582555";
const mobilePhoneHref = "tel:18456998832";
const emailHref = "mailto:info@donshomeimprovement.com";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 35 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const services = [
  {
    title: "Additions",
    icon: Home,
    desc: "Expand your home with seamless, code-compliant additions built to match your property.",
  },
  {
    title: "Kitchens",
    icon: ChefHat,
    desc: "Premium kitchen remodeling with custom layouts, cabinetry, tile, lighting, and finishes.",
  },
  {
    title: "Bathrooms",
    icon: Bath,
    desc: "Modern bathroom renovations designed for comfort, durability, and everyday luxury.",
  },
  {
    title: "Decks",
    icon: Layers,
    desc: "Outdoor living spaces built strong, clean, and ready for years of use.",
  },
  {
    title: "Interior Renovations",
    icon: Hammer,
    desc: "Drywall, trim, flooring, painting, repairs, and full interior upgrades.",
  },
  {
    title: "Exterior Renovations",
    icon: ShieldCheck,
    desc: "Siding, exterior repairs, curb appeal upgrades, and structural improvements.",
  },
];

const trustItems = [
  { icon: ShieldCheck, title: "Licensed", sub: "NY, NJ & PA" },
  { icon: Star, title: "35+ Years", sub: "Experience" },
  { icon: MapPin, title: "Serving", sub: "Rockland & Beyond" },
  { icon: Phone, title: "Call", sub: "(845) 858-2555" },
];

const highlights = [
  "Clean, professional job sites",
  "Honest estimates and clear communication",
  "Premium workmanship across every detail",
  "Serving Rockland, Westchester, NY, NJ & PA",
];

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f4ef] pb-24 text-slate-900 md:pb-0">
      <Header />
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#071522] pt-28 sm:pt-32 md:pt-40">
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="h-full w-full object-cover"
            alt="Luxury renovated kitchen and home interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071522] via-[#071522]/78 to-[#071522]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071522] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center px-4 py-10 sm:px-5 sm:py-14 md:min-h-[calc(100vh-160px)] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pt-6 sm:pt-8 md:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#d6a23a]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d6a23a] backdrop-blur-md md:mb-6 md:px-5 md:text-sm md:tracking-[0.22em]"
            >
              Established Since 1988
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl"
            >
              Superior <br /> Craftsmanship
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-xl md:mt-7 md:text-2xl md:leading-9"
            >
              Custom renovations, additions, kitchens, bathrooms, decks, and full home improvements built with precision and pride.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4"
            >
              <a
                href="#estimate"
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#d6a23a] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#071522] shadow-2xl transition hover:scale-[1.02] md:px-8 md:text-base"
              >
                Get a Free Estimate
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#gallery"
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white/20 md:px-8 md:text-base"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative border-t border-white/10 bg-[#071522]/95">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-5 py-5 sm:grid-cols-2 md:grid-cols-4 md:gap-4 md:py-7"
          >
            {trustItems.map(({ icon: Icon, title, sub }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-4 transition"
              >
                <Icon className="h-8 w-8 text-[#d6a23a]" />
                <div>
                  <p className="font-black uppercase text-white">{title}</p>
                  <p className="text-sm text-white/65">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#d6a23a]">What We Do</p>
            <h2 className="text-3xl font-black tracking-tight text-[#071522] sm:text-4xl md:text-6xl">
              Home Improvement Done Right
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            From small upgrades to complete transformations, Don's brings decades of skill, honesty, and dependable craftsmanship to every project.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-2xl sm:p-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071522] text-[#d6a23a] transition group-hover:bg-[#d6a23a] group-hover:text-[#071522]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-black text-[#071522]">{service.title}</h3>
                <p className="leading-7 text-slate-600">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="about" className="bg-[#071522] px-4 py-16 text-white sm:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <motion.img
              src={heroImage}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px]"
              alt="Renovated modern kitchen interior"
            />
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#d6a23a]">Why Choose Us</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Built on Trust. Finished With Pride.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/75 md:mt-6 md:text-lg md:leading-8">
              Don's Home Improvement, LLC has served homeowners since 1988 with reliable craftsmanship across additions, kitchens, bathrooms, decks, and renovations.
            </p>
            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-base font-semibold leading-7 md:items-center md:text-lg"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#d6a23a] md:mt-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="estimate" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 md:py-24">
        <motion.div
          id="gallery"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="mb-16 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:rounded-[2rem]"
        >
          <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#d6a23a]">Project Gallery</p>
          <h2 className="text-3xl font-black leading-tight text-[#071522] sm:text-4xl md:text-5xl">
            Before & After Work Preview
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            This section will connect to real project photos once the gallery is ready. The button above now scrolls here.
          </p>
        </motion.div>

        <motion.div
          id="reviews"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="mb-16 rounded-[1.5rem] bg-[#071522] p-5 text-white shadow-xl sm:p-8 md:rounded-[2rem]"
        >
          <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#d6a23a]">Reviews</p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">Customer Reviews Coming Soon</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            This section can later connect to Google Reviews or manual testimonials.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-[1.5rem] bg-[#d6a23a] p-5 shadow-2xl sm:p-8 md:rounded-[2rem] md:p-14"
        >
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-3 font-black uppercase tracking-[0.25em] text-[#071522]/70">Request an Estimate</p>
              <h2 className="text-3xl font-black leading-tight text-[#071522] sm:text-4xl md:text-6xl">
                Ready to Upgrade Your Home?
              </h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-[#071522]/75">
                Tell us about your project and we'll help you take the next step.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="grid gap-3">
                <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none" placeholder="Name" aria-label="Name" />
                <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none" placeholder="Phone" aria-label="Phone" />
                <input className="rounded-xl border border-slate-200 px-4 py-4 outline-none" placeholder="Project Type" aria-label="Project Type" />
                <a
                  href={`${emailHref}?subject=Free%20Estimate%20Request%20-%20Dons%20Home%20Improvement`}
                  className="rounded-xl bg-[#071522] px-6 py-4 text-center font-black uppercase tracking-wide text-white transition hover:scale-[1.02] hover:bg-slate-900"
                >
                  Send Request
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <MobileCta />
      <Footer />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideMobileLogo, setHideMobileLogo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        setHideMobileLogo(false);
        return;
      }

      setHideMobileLogo(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className="absolute left-0 right-0 top-0 z-50 will-change-transform border-b border-transparent bg-transparent backdrop-blur-none lg:fixed lg:border-b lg:border-white/10 lg:bg-[#071522]/90 lg:backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Left: empty on mobile to balance centered logo */}
          <div className="w-10 lg:hidden" />

          {/* Desktop logo */}
          <motion.img
            src={logoImage}
            alt="Dons Home Improvement Logo"
            className="hidden lg:block h-24 w-auto max-w-[330px] object-contain sm:h-28 sm:max-w-[430px] md:h-36 md:max-w-[620px] lg:h-40 lg:max-w-[760px] xl:h-44 xl:max-w-[860px]"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          />
          {/* Mobile logo: centered, slightly larger */}
          <motion.img
            src={logoImage}
            alt="Dons Home Improvement Logo"
            className="h-24 w-auto object-contain sm:h-28 lg:hidden"
            animate={{ opacity: hideMobileLogo ? 0 : 1, y: hideMobileLogo ? -12 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          {/* Right: hamburger on mobile, desktop nav stays */}
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 lg:flex">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={index === 0 ? "text-[#d6a23a] transition hover:text-white" : "transition hover:text-[#d6a23a]"}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#estimate"
                className="rounded-full bg-[#d6a23a] px-5 py-3 text-[#071522] shadow-lg transition hover:scale-[1.03] hover:bg-white"
              >
                Free Estimate
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d6a23a] text-[#071522] lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#071522] pt-24"
          >
            <nav className="flex flex-col items-center gap-8 px-8 py-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-wide text-white transition hover:text-[#d6a23a]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 flex flex-col gap-4"
              >
                <a
                  href={officePhoneHref}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#d6a23a] px-8 py-4 text-lg font-black uppercase text-[#071522] shadow-2xl"
                >
                  <Phone className="h-6 w-6" />
                  Call Now
                </a>
                <a
                  href="#estimate"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-2xl border-2 border-[#d6a23a] px-8 py-4 text-lg font-black uppercase text-[#d6a23a]"
                >
                  Free Estimate
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileCta() {
  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.55 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#071522]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
    >
      <div className="grid grid-cols-2 gap-3">
        <a href={mobilePhoneHref} className="flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-[#d6a23a] px-4 py-4 text-sm font-black uppercase text-[#071522] shadow-lg">
          <Phone className="h-5 w-5" />
          Call Cell
        </a>
        <a href={emailHref} className="flex min-h-[56px] items-center justify-center gap-2 rounded-2xl border border-[#d6a23a]/50 bg-white/10 px-4 py-4 text-sm font-black uppercase text-white shadow-lg">
          <Mail className="h-5 w-5 text-[#d6a23a]" />
          Estimate
        </a>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071522] px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-4">
          <motion.img
            src={logoImage}
            alt="Dons Home Improvement Footer Logo"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="h-20 w-auto max-w-[260px] object-contain md:h-24 md:max-w-[340px]"
          />
          <div>
            <p className="text-xl font-black uppercase">Dons Home Improvement, LLC</p>
            <p className="text-white/60">Superior Craftsmanship Since 1988</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white/80 md:items-end">
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#d6a23a]" />
            Office: (845) 858-2555
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#d6a23a]" />
            info@donshomeimprovement.com
          </p>
        </div>
      </div>
    </footer>
  );
}
