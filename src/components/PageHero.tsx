import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Swoosh from "./Swoosh";

export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  imageAlt = "",
  crumbs = [],
  next = "#ffffff",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  image: string;
  imageAlt?: string;
  crumbs?: { label: string; to?: string }[];
  next?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-navy pt-44 pb-32 text-white lg:pb-40">
      <img src={image} alt={imageAlt} className="animate-kenburns absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-navy/60 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-night/50" />

      <div className="wrap relative">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-white/65">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.to ? (
                <Link to={c.to} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
          <p className="eyebrow on-dark">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1] text-balance sm:text-6xl lg:text-7xl">{title}</h1>
          {sub && <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">{sub}</p>}
          {children}
        </motion.div>
      </div>
      <Swoosh fill={next} />
    </section>
  );
}
