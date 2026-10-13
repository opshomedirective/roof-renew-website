import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Clock, Menu, Phone, ScanSearch, X } from "lucide-react";
import Logo from "./Logo";
import Icon from "./Icon";
import { BUSINESS, NAV } from "../data/site";
import { SERVICES } from "../data/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
    setDrop(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || drop;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Info bar */}
      <div className="bg-night text-white">
        <div className="wrap flex h-9 items-center justify-center gap-6 text-[11px] font-semibold sm:justify-between sm:text-xs">
          <p className="flex items-center gap-2">
            <ScanSearch className="h-3.5 w-3.5 text-cyan" />
            Free roof inspections — done by the owner
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="inline-flex items-center gap-1.5 text-white/75">
              <Clock className="h-3.5 w-3.5 text-cyan" /> Open {BUSINESS.hours}
            </span>
            <a href={`tel:${BUSINESS.phoneTel}`} className="inline-flex items-center gap-1.5 hover:text-cyan">
              <Phone className="h-3.5 w-3.5 text-cyan" /> {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${solid ? "bg-navy/95 shadow-[0_20px_40px_-30px_rgba(0,0,0,.8)] backdrop-blur-xl" : "bg-gradient-to-b from-night/70 to-transparent"}`}
        onMouseLeave={() => setDrop(false)}
      >
        <nav className="wrap flex h-20 items-center justify-between gap-6 sm:h-24">
          <Logo className="h-14 sm:h-[4.6rem]" />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isSvc = item.to === "/services";
              return (
                <li key={item.to} onMouseEnter={() => setDrop(isSvc)} className="relative">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-bold transition ${
                        isActive || (isSvc && drop) ? "bg-white/10 text-cyan" : "text-white/90 hover:text-white"
                      }`
                    }
                  >
                    {item.label}
                    {isSvc && <ChevronDown className={`h-4 w-4 transition ${drop ? "rotate-180" : ""}`} />}
                  </NavLink>
                  <AnimatePresence>
                    {isSvc && drop && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-[420px] pt-3"
                      >
                        <div className="card overflow-hidden p-2">
                          {SERVICES.map((s) => (
                            <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-ice">
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ice text-blue transition group-hover:bg-blue group-hover:text-white">
                                <Icon name={s.icon} className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block font-bold text-navy">{s.title}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-steel">{s.short}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn btn-blue hidden !py-3 sm:inline-flex">
              Free Inspection
            </Link>
            <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="dots-dark fixed inset-0 z-50 overflow-y-auto bg-navy text-white lg:hidden">
            <div className="wrap flex h-24 items-center justify-between">
              <Logo className="h-14" />
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/25" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="wrap pb-16">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {[{ label: "Home", to: "/" }, ...NAV].map((item, i) => (
                  <motion.li key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link to={item.to} className="font-display flex items-center justify-between py-5 text-2xl font-extrabold">
                      {item.label} <ArrowUpRight className="h-6 w-6 text-cyan" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="eyebrow on-dark mt-8 mb-3">Services</p>
              <div className="grid gap-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold">
                    <Icon name={s.icon} className="h-4 w-4 text-cyan" /> {s.title}
                  </Link>
                ))}
              </div>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-blue mt-8 w-full">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
