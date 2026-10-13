import { Link, Navigate, useParams } from "react-router-dom";
import { AlertTriangle, ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import LeadForm from "../components/LeadForm";
import Marquee from "../components/Marquee";
import { getService, SERVICES } from "../data/services";
import { BUSINESS, PROCESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const s = getService(slug);

  useSEO({
    title: s ? `${s.title} in Grand Rapids, MI | Roof-Renew` : "Service not found | Roof-Renew",
    description: s?.tagline ?? "",
  });

  if (!s) return <Navigate to="/services" replace />;
  const related = s.related.map((r) => SERVICES.find((x) => x.slug === r)!).filter(Boolean);

  return (
    <>
      <PageHero eyebrow="Roof-Renew services" title={s.title} sub={s.tagline} image={IMG[s.hero]} imageAlt={`${s.title} — Roof-Renew`} crumbs={[{ label: "Services", to: "/services" }, { label: s.title }]}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-blue">
            Book a free inspection <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {s.badges.map((b) => (
            <span key={b} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold">
              <Check className="h-3.5 w-3.5 text-cyan" /> {b}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Grand Rapids & West Michigan</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">{s.headline}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-steel">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative pb-10">
            <img src={IMG[s.images[0]]} alt={`${s.title} — Roof-Renew`} className="aspect-[4/5] w-[78%] rounded-[2rem] object-cover" loading="lazy" />
            <img src={IMG[s.images[1]]} alt={`${s.title} detail`} className="absolute right-0 bottom-0 aspect-square w-[50%] rounded-[2rem] border-8 border-white object-cover shadow-2xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Signs */}
      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Know the signs</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">{s.signsTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.signs.map((x, i) => (
              <Reveal key={x} delay={(i % 3) * 0.06} className="card flex items-start gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue to-cyan text-white">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <p className="font-semibold text-navy">{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Includes + form */}
      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Roof-Renew way</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">{s.includesTitle}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.includes.map((l) => (
                <li key={l} className="flex gap-3 rounded-2xl border border-frost bg-ice/40 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-navy">{l}</span>
                </li>
              ))}
            </ul>
            <ol className="mt-10 space-y-4 border-l-2 border-blue/25 pl-6">
              {PROCESS.map((p) => (
                <li key={p.step} className="relative">
                  <span className="absolute top-1 -left-[33px] h-4 w-4 rounded-full bg-gradient-to-br from-blue to-cyan ring-4 ring-white" />
                  <p className="font-display font-extrabold text-navy">
                    {p.step} · {p.title}
                  </p>
                  <p className="text-sm text-steel">{p.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-36">
              <LeadForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">{s.title}: your questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={s.faqs} />
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-16 lg:py-24">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Related services</p>
            <h2 className="mt-4 text-4xl text-navy">Keep exploring.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <ServiceCard s={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={IMG[s.images[1]]} />
    </>
  );
}
