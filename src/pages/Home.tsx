import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, Camera, Clock, MapPin, PhoneCall, ScanSearch, ShieldCheck, Phone, UserRound } from "lucide-react";
import Reveal from "../components/Reveal";
import Swoosh from "../components/Swoosh";
import Marquee from "../components/Marquee";
import ServiceCard from "../components/ServiceCard";
import BeforeAfter from "../components/BeforeAfter";
import SeasonTabs from "../components/SeasonTabs";
import IceDamDiagram from "../components/IceDamDiagram";
import HealthCheck from "../components/HealthCheck";
import AreaMap from "../components/AreaMap";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import { BUSINESS, HOME_FAQ, PROCESS, PROMISES, REGIONS } from "../data/site";
import { SERVICES } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const SLIDES = [
  { src: IMG.homeDusk, alt: "Two-story home at dusk with the porch lights on" },
  { src: IMG.fallHome, alt: "West Michigan home surrounded by golden fall trees" },
  { src: IMG.whiteHomeSnow, alt: "White home with a snow-covered roof in winter" },
  { src: IMG.stoneRanch, alt: "Stone ranch home with a new shingle roof" },
];

export default function Home() {
  useSEO({
    title: "Roof-Renew | Roofing Contractor in Grand Rapids & West Michigan",
    description:
      "Roof replacement, roof repair, free owner-led inspections, storm damage and ice dam protection for homes in Grand Rapids, Kentwood, Wyoming and West Michigan. Call (616) 265-9270.",
  });

  return (
    <>
      <Hero />
      <TrustRow />
      <ServicesSection />
      <RenewSection />
      <SeasonsSection />
      <IceDamSection />
      <OwnerSection />
      <ProcessSection />
      <HealthSection />
      <LocalBand />
      <AreaSection />
      <FaqSection />
      <LeadSection />
    </>
  );
}

/* ───────────────────────────── HERO */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy pt-40 pb-40 text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={i}
            src={SLIDES[i].src}
            alt={SLIDES[i].alt}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 8, ease: "easeOut" } }}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/95 via-navy/70 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-night/60" />
      <div aria-hidden className="absolute top-1/3 -left-40 h-[520px] w-[520px] rounded-full bg-blue/30 blur-[140px]" />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow on-dark">
            Grand Rapids & West Michigan Roofing
          </motion.p>
          <h1 className="mt-6 text-[2.9rem] leading-[0.98] sm:text-7xl lg:text-[5.4rem]">
            {["Your", "roof,"].map((w, k) => (
              <motion.span
                key={w}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + k * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="hl">renewed.</span>
              <svg viewBox="0 0 300 30" className="absolute -bottom-4 left-0 w-full" aria-hidden>
                <motion.path
                  d="M4 22 C 80 4, 200 4, 296 16"
                  fill="none"
                  stroke="url(#hero-sw)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.1, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="hero-sw" x1="0" x2="1">
                    <stop offset="0" stopColor="#1f6bff" />
                    <stop offset="1" stopColor="#2fc6ff" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.span>
            <motion.span className="mt-2 block text-[0.62em] text-white/90" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              Built for Michigan winters.
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Roof replacement, leak repair and storm damage for homes across Grand Rapids and West Michigan — with every inspection done personally by the owner.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-blue">
              Book a free inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="hidden lg:block">
          <div className="glass animate-float relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan/30 blur-3xl" />
            <div className="relative flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-cyan">
                <UserRound className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-widest text-cyan uppercase">Owner-led inspections</p>
                <p className="font-display text-2xl font-extrabold">{BUSINESS.owner}</p>
              </div>
            </div>
            <p className="relative mt-5 text-white/80">
              The owner inspects every roof himself, shows you photos of what he finds, and gives you a straight answer — even when that answer is “your roof is fine.”
            </p>
            <div className="relative my-6 h-px bg-white/15" />
            <ul className="relative space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <ScanSearch className="h-4 w-4 text-cyan" /> Free, no-obligation inspections
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-cyan" /> Phone consultations available
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-cyan" /> Open {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-6 bottom-32 z-10 hidden gap-2 md:flex lg:right-10">
        {SLIDES.map((s, k) => (
          <button key={s.src} onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`} className="h-1.5 w-10 overflow-hidden rounded-full bg-white/25">
            {k === i && <motion.span layoutId="hero-dot" className="block h-full w-full bg-cyan" />}
          </button>
        ))}
      </div>
      <Swoosh fill="#ffffff" />
    </section>
  );
}

/* ───────────────────────────── TRUST ROW */
function TrustRow() {
  const items = [
    { icon: UserRound, k: "Owner on every job", v: `${BUSINESS.owner} inspects personally` },
    { icon: ScanSearch, k: "Free inspections", v: "No pressure, no obligation" },
    { icon: PhoneCall, k: "Phone consultations", v: "Start with a quick call" },
    { icon: MapPin, k: "50-mile radius", v: "Grand Rapids & West Michigan" },
  ];
  return (
    <section className="relative bg-white pt-6 pb-10">
      <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: I, k, v }, n) => (
          <Reveal key={k} delay={n * 0.06} className="flex items-center gap-4 rounded-2xl border border-frost bg-ice/50 p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-blue shadow-sm">
              <I className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div>
              <p className="font-display font-extrabold text-navy">{k}</p>
              <p className="text-sm text-steel">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── SERVICES */
function ServicesSection() {
  return (
    <section className="dots relative bg-white py-20 lg:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-2xl text-4xl text-navy sm:text-5xl">
              Roofing, done right <span className="hl">the first time.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="btn btn-outline text-navy !py-3">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className={i === 0 ? "lg:row-span-1" : ""}>
              <ServiceCard s={s} index={i} />
            </Reveal>
          ))}
          <Reveal delay={0.16}>
            <Link to="/contact" className="group flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-blue-deep via-blue to-cyan p-7 text-white">
              <ScanSearch className="h-10 w-10" strokeWidth={1.5} />
              <div>
                <p className="font-display text-3xl font-extrabold">Not sure what you need?</p>
                <p className="mt-2 text-white/85">Book a free inspection or a quick phone consultation and get a straight answer.</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-extrabold">
                  Get started <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── RENEW SLIDER */
function RenewSection() {
  return (
    <section className="relative bg-ice py-20 lg:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
        <Reveal>
          <p className="eyebrow">Renew, don't just repair</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            From tired and mossy to <span className="hl">clean and tight.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            Moss, curling tabs and missing granules mean your shingles have stopped protecting your home. A full renewal replaces the whole system — decking repairs,
            ice & water shield, underlayment, flashing, ventilation and new architectural shingles.
          </p>
          <ul className="mt-8 space-y-3">
            {["Full tear-off — no layering over problems", "Ice & water shield at every eave and valley", "Balanced ventilation to fight ice dams", "Clean job site and a final walkthrough"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold text-navy">
                <ShieldCheck className="h-5 w-5 text-blue" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/services/roof-replacement" className="btn btn-blue mt-9">
            Roof replacement <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <BeforeAfter />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── SEASONS */
function SeasonsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Four seasons of wear</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What a Michigan year does to your roof.</h2>
          <p className="mt-5 text-lg text-steel">Lake-effect snow, spring wind, summer heat and fall leaves — every season tests a different part of your roof.</p>
        </Reveal>
        <Reveal className="mt-12">
          <SeasonTabs />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── ICE DAMS */
function IceDamSection() {
  return (
    <section className="dots relative bg-ice py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Ice dams, explained</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Big icicles aren't charming. <span className="hl">They're a warning.</span>
          </h2>
          <p className="mt-5 text-lg text-steel">Toggle the diagram to see how ice dams form — and how the right roof system stops winter leaks.</p>
        </Reveal>
        <Reveal className="mt-12">
          <IceDamDiagram />
        </Reveal>
        <Reveal className="mt-10">
          <Link to="/services/ice-dams-ventilation" className="btn btn-outline text-navy">
            Ice dams & ventilation <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── OWNER + PROMISES */
function OwnerSection() {
  return (
    <section className="dots-dark relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      <div aria-hidden className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-blue/25 blur-[140px]" />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={IMG.ladderRoof} alt="Ladder set against a shingle roof for an inspection" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          </div>
          <div className="glass absolute right-4 -bottom-6 max-w-[260px] rounded-2xl p-5 sm:-right-6">
            <p className="text-xs font-bold tracking-widest text-cyan uppercase">Your inspector</p>
            <p className="font-display mt-1 text-2xl font-extrabold">{BUSINESS.owner}</p>
            <p className="text-sm text-mist">Owner, Roof-Renew</p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow on-dark">Why Roof-Renew</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              You talk to the owner. <span className="hl">Not a salesperson.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              When you call Roof-Renew, the person who inspects your roof is the person responsible for the work. No pressure, no runaround — just honest answers and
              roofs done right.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-lg font-extrabold">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── PROCESS */
function ProcessSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">How it works</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Four simple steps to a renewed roof.</h2>
        </Reveal>
        <div className="relative mt-16">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute top-7 left-0 hidden h-14 w-full lg:block" aria-hidden>
            <defs>
              <linearGradient id="proc-sw" x1="0" x2="1">
                <stop offset="0" stopColor="#1f6bff" />
                <stop offset="1" stopColor="#2fc6ff" />
              </linearGradient>
            </defs>
            <motion.path
              d="M60 30 C 300 -10, 500 70, 600 30 S 900 -10, 1140 30"
              fill="none"
              stroke="url(#proc-sw)"
              strokeWidth="4"
              strokeDasharray="10 10"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6 }}
            />
          </svg>
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.12} className="text-center">
                <span className="font-display mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan text-xl font-black text-white shadow-[0_14px_30px_-12px_rgba(31,107,255,.9)] ring-8 ring-white">
                  {p.step}
                </span>
                <h3 className="mt-6 text-xl text-navy">{p.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-steel">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── HEALTH CHECK */
function HealthSection() {
  return (
    <section className="dots relative bg-ice py-20 lg:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">60-second roof health check</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Is it time to <span className="hl">renew your roof?</span>
          </h2>
          <p className="mt-5 text-lg text-steel">Answer four quick questions and get an instant read on your roof. Then let us confirm it with a free, owner-led inspection.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-navy">
            <Camera className="h-5 w-5 text-blue" /> Every real inspection includes photos of what we find.
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <HealthCheck />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── LOCAL BAND */
function LocalBand() {
  return (
    <section className="relative">
      <div className="relative h-[420px] overflow-hidden sm:h-[520px]">
        <img src={IMG.grSkylineBridge} alt="Grand Rapids skyline over the Grand River" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
        <div className="wrap relative flex h-full flex-col justify-end pb-12 text-white">
          <Reveal>
            <p className="eyebrow on-dark">Local to West Michigan</p>
            <h2 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Proudly roofing Grand Rapids and the towns around it.</h2>
          </Reveal>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

/* ───────────────────────────── AREA */
function AreaSection() {
  return (
    <section className="dots-dark relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow on-dark">Service area</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">50 miles around Grand Rapids.</h2>
            <p className="mt-5 text-lg text-white/75">From the Lakeshore to Ionia, and from Muskegon down to Kalamazoo — if you're in West Michigan, give us a call.</p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {REGIONS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="font-display text-lg font-extrabold">{r.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{r.body}</p>
              </Reveal>
            ))}
          </div>
          <Link to="/service-area" className="btn btn-blue mt-10">
            See the full service area <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Reveal delay={0.1}>
          <AreaMap />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── FAQ */
function FaqSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Questions homeowners ask us.</h2>
          <p className="mt-5 text-steel">Still wondering about something? Call — you'll talk to the owner.</p>
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-display mt-6 inline-block text-3xl font-extrabold text-blue">
            {BUSINESS.phoneDisplay}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={HOME_FAQ} />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── LEAD */
function LeadSection() {
  return (
    <section id="book" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <img src={IMG.snowyStreet} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-br from-night via-navy/90 to-blue/40" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <p className="eyebrow on-dark">Free inspection · No obligation</p>
          <h2 className="mt-5 text-5xl leading-[1] sm:text-6xl">
            Let's get eyes on <span className="hl">your roof.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/80">Answer a few quick questions and Bill will reach out to schedule your free inspection — or a phone consultation if you'd rather start there.</p>
          <div className="mt-10 space-y-3 text-white/85">
            <p className="flex items-center gap-3">
              <UserRound className="h-5 w-5 text-cyan" /> Owner-led inspection with photos
            </p>
            <p className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-cyan" /> Open {BUSINESS.hours}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan" /> Grand Rapids + 50 miles
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
