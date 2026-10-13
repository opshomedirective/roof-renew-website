import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, ScanSearch } from "lucide-react";
import Logo from "./Logo";
import { AREAS, BUSINESS, NAV } from "../data/site";
import { SERVICES } from "../data/services";

export default function Footer() {
  return (
    <footer className="dots-dark relative overflow-hidden bg-night pb-24 text-white lg:pb-0">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue/25 blur-[140px]" />
      <div className="wrap relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Logo className="h-24" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            Roof-Renew offers roof rejuvenation for aging asphalt shingle roofs across Grand Rapids, Kent County and West Michigan. Before you replace your roof, see
            if you can renew it first.
          </p>
          <Link to="/contact" className="btn btn-blue mt-6 !py-3">
            <ScanSearch className="h-4 w-4" /> Book a free inspection
          </Link>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Services</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition hover:text-cyan">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Company</p>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>
              <Link to="/" className="transition hover:text-cyan">
                Home
              </Link>
            </li>
            {NAV.filter((n) => n.to !== "/services").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition hover:text-cyan">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow on-dark mt-8 mb-3">Serving</p>
          <p className="text-sm leading-relaxed text-white/60">{AREAS.slice(0, 10).map((x) => x.name).join(" · ")}</p>
        </div>

        <div>
          <p className="eyebrow on-dark mb-5">Contact</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-3 transition hover:text-cyan">
                <Phone className="h-4 w-4 shrink-0 text-cyan" />
                <span className="font-display text-2xl font-extrabold">{BUSINESS.phoneDisplay}</span>
              </a>
            </li>
            <li className="flex gap-3 text-white/75">
              <Clock className="h-4 w-4 shrink-0 text-cyan" />
              <span>
                Open {BUSINESS.hours} <span className="text-white/45">({BUSINESS.hoursNote})</span>
              </span>
            </li>
            <li className="flex gap-3 text-white/75">
              <MapPin className="h-4 w-4 shrink-0 text-cyan" />
              <span>
                Serving {BUSINESS.region}
                <br />
                <span className="text-white/45">50-mile radius around Grand Rapids</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none relative select-none">
        <p className="font-display text-center text-[11.5vw] leading-[0.8] font-black whitespace-nowrap text-white/[0.05] [font-stretch:115%]">ROOF-RENEW</p>
      </div>

      <div className="wrap relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link to="/contact" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
