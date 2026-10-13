import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import Icon from "../components/Icon";
import { SERVICES } from "../data/services";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function Services() {
  useSEO({
    title: "Roofing Services | Roof-Renew — Grand Rapids & West Michigan",
    description: "Roof replacement, roof repair & leaks, free roof inspections, storm & wind damage and ice dam protection for homes across Grand Rapids and West Michigan.",
  });

  return (
    <>
      <PageHero
        eyebrow="Roofing services"
        title={
          <>
            Everything your roof needs. <span className="hl">Nothing it doesn't.</span>
          </>
        }
        sub="From a single leak to a full roof renewal — handled personally by the owner, for homes across Grand Rapids and West Michigan."
        image={IMG.aerialGrayRoof}
        imageAlt="Aerial view of a suburban home with a gray shingle roof"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <Link to={`/services/${s.slug}`} className="card group grid overflow-hidden transition hover:border-blue/40 lg:grid-cols-2">
                <div className={`relative min-h-[260px] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={IMG[s.hero]} alt={`${s.title} — Roof-Renew`} className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  <span className="font-display absolute bottom-4 left-5 text-6xl font-black text-white/90 [font-stretch:125%]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ice text-blue">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-3xl text-navy sm:text-4xl">{s.title}</h2>
                  <p className="mt-3 text-steel">{s.short}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.includes.slice(0, 4).map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm font-semibold text-navy">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> {x}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-1.5 font-extrabold text-blue">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection image={IMG.fallDriveway} />
    </>
  );
}
