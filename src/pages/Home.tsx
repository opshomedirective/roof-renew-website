import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, BadgeDollarSign, Camera, Clock, MapPin, Recycle, ScanSearch, ShieldCheck, Phone, Sparkles, UserRound } from "lucide-react";
import Reveal from "../components/Reveal";
import Swoosh from "../components/Swoosh";
import Marquee from "../components/Marquee";
import ServiceCard from "../components/ServiceCard";
import BeforeAfter from "../components/BeforeAfter";
import SeasonTabs from "../components/SeasonTabs";
import RenewVsReplace from "../components/RenewVsReplace";
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
    title: "Roof-Renew | Roof Rejuvenation in Grand Rapids & Kent County, MI",
    description:
      "Before you replace your roof, see if you can renew it first. Roof rejuvenation for aging asphalt shingles in Grand Rapids, Kent County and West Michigan. Free owner-led inspections. Call (616) 265-9270.",
  });

  return (
    <>
      <Hero />
      <TrustRow />
      <ServicesSection />
      <RenewSection />
      <CompareSection />
      <SeasonsSection />
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
            Kent County & West Michigan Homeowners
          </motion.p>
          <h1 className="mt-6 text-[2.6rem] leading-[0.98] sm:text-7xl lg:text-[5rem]">
            {["Before", "you", "replace", "your", "roof…"].map((w, k) => (
              <motion.span
                key={w}
                className="mr-[0.22em] inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + k * 0.08, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span className="mt-2 block text-[0.78em]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
              see if you can{" "}
              <span className="relative inline-block">
                <span className="hl">renew it</span>
                <svg viewBox="0 0 300 30" className="absolute -bottom-3 left-0 w-full" aria-hidden>
                  <motion.path
                    d="M4 22 C 80 4, 200 4, 296 16"
                    fill="none"
                    stroke="url(#hero-sw)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1, duration: 1.1, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="hero-sw" x1="0" x2="1">
                      <stop offset="0" stopColor="#1f6bff" />
                      <stop offset="1" stopColor="#2fc6ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              first.
            </motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Roof rejuvenation may help restore aging shingles and extend your roof's life — saving you thousands compared to a new roof. Every inspection is done
            personally by the owner.
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
              The owner inspects every roof himself, shows you photos, and tells you straight whether your roof can be renewed — or if it can't.
            </p>
            <div className="relative my-6 h-px bg-white/15" />
            <ul className="relative space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-cyan" /> Roof rejuvenation for aging shingles
              </li>
              <li className="flex items-center gap-3">
                <ScanSearch className="h-4 w-4 text-cyan" /> Free, no-obligation inspections
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
    { icon: BadgeDollarSign, k: "Save thousands", v: "Renew instead of replacing" },
    { icon: ScanSearch, k: "Free inspections", v: "No pressure, no obligation" },
    { icon: MapPin, k: "Kent County + 50 mi", v: "Grand Rapids & West Michigan" },
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
              Renew your roof. <span className="hl">Keep your thousands.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="btn btn-outline text-navy !py-3">
              Our services <ArrowRight className="h-4 w-4" />
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
                <p className="font-display text-3xl font-extrabold">Can my roof be renewed?</p>
                <p className="mt-2 text-white/85">Book a free inspection or a quick phone consultation and get a straight answer — candidate or not.</p>
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
          <p className="eyebrow">What is roof rejuvenation?</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Give aging shingles <span className="hl">a second life.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            Sun, heat and Michigan freeze-thaw cycles slowly dry out the oils in asphalt shingles until they turn faded and brittle. Rejuvenation is a spray-applied
            treatment designed to soak into the shingles and help restore their flexibility — so a roof that's aging but still intact may keep protecting your home
            for longer.
          </p>
          <ul className="mt-8 space-y-3">
            {["May extend the life of your current roof", "Saves thousands compared to replacement", "No tear-off, no dumpster, no landfill waste", "Owner-led candidate check before anything else"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold text-navy">
                <ShieldCheck className="h-5 w-5 text-blue" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/services/roof-rejuvenation" className="btn btn-blue mt-9">
            How rejuvenation works <ArrowRight className="h-4 w-4" />
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
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What a Michigan year does to your shingles.</h2>
          <p className="mt-5 text-lg text-steel">Freeze-thaw winters and hot summers age asphalt shingles year after year — and some seasons are better than others to renew them.</p>
        </Reveal>
        <Reveal className="mt-12">
          <SeasonTabs />
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── RENEW VS REPLACE */
function CompareSection() {
  return (
    <section className="dots relative bg-ice py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Renew vs. replace</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Before spending thousands on a new roof, <span className="hl">find out if yours can be renewed.</span>
          </h2>
          <p className="mt-5 text-lg text-steel">Rejuvenation isn't for every roof — but when yours is a candidate, the difference is big.</p>
        </Reveal>
        <Reveal className="mt-12">
          <RenewVsReplace />
        </Reveal>
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { i: BadgeDollarSign, t: "Save money vs. replacement" },
            { i: Sparkles, t: "Extend your roof's life" },
            { i: Recycle, t: "Keep shingles out of the landfill" },
          ].map(({ i: I, t }) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full border border-frost bg-white px-4 py-2 text-sm font-bold text-navy">
              <I className="h-4 w-4 text-blue" /> {t}
            </span>
          ))}
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
              When you call Roof-Renew, the person who inspects your roof is the person responsible for the work. No pressure, no runaround — just an honest answer
              about whether your roof can be renewed.
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
          <p className="eyebrow">60-second candidate check</p>
          <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
            Can your roof <span className="hl">be renewed?</span>
          </h2>
          <p className="mt-5 text-lg text-steel">Answer four quick questions to see if your roof sounds like a rejuvenation candidate. Then let us confirm it with a free, owner-led inspection.</p>
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
            <h2 className="mt-4 max-w-3xl text-4xl sm:text-6xl">Proudly renewing roofs across Grand Rapids and Kent County.</h2>
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
          <p className="mt-5 text-steel">Still wondering if your roof can be renewed? Call — you'll talk to the owner.</p>
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
          <p className="mt-6 max-w-lg text-lg text-white/80">Answer a few quick questions and Bill will reach out to schedule your free inspection — and find out if your roof can be renewed before you replace it.</p>
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
