import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Thermometer, Wind } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SeasonTabs from "../components/SeasonTabs";
import IceDamDiagram from "../components/IceDamDiagram";
import HealthCheck from "../components/HealthCheck";
import CTASection from "../components/CTASection";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const THREATS = [
  {
    icon: Snowflake,
    k: "Lake-effect snow",
    b: "West Michigan sits downwind of Lake Michigan. Heavy, wet lake-effect snow can sit on a roof for weeks, adding weight and feeding ice dams.",
    img: IMG.snowEdge,
  },
  {
    icon: Thermometer,
    k: "Freeze–thaw cycles",
    b: "Temperatures bounce above and below freezing all winter. Water gets into tiny gaps, freezes, expands — and every cycle makes the gap a little bigger.",
    img: IMG.iciclesEdge,
  },
  {
    icon: Wind,
    k: "Wind off the lake",
    b: "Strong west and southwest winds lift shingle tabs and break their seal. Once a tab is loose, the next storm usually takes it.",
    img: IMG.stormLake,
  },
];

export default function MichiganRoofs() {
  useSEO({
    title: "Michigan Roof Guide: Ice Dams, Snow & Storms | Roof-Renew",
    description: "How lake-effect snow, ice dams, freeze-thaw cycles and lake wind affect West Michigan roofs — plus a free 60-second roof health check.",
  });

  return (
    <>
      <PageHero
        eyebrow="West Michigan roof guide"
        title={
          <>
            Michigan is hard on roofs. <span className="hl">Here's why.</span>
          </>
        }
        sub="Lake-effect snow, ice dams, freeze-thaw cycles and lake wind — what they do to your roof, and how to stay ahead of them."
        image={IMG.whiteHomeSnow}
        imageAlt="Home with a heavy snow-covered roof in winter"
        crumbs={[{ label: "Michigan Roofs" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The big three</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What West Michigan weather throws at your roof.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {THREATS.map(({ icon: I, k, b, img }, i) => (
              <Reveal key={k} delay={i * 0.08} className="card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img} alt={k} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-blue">
                    <I className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-navy">{k}</h3>
                  <p className="mt-2 text-steel">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Ice dams, explained</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">How an ice dam turns into a leak.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <IceDamDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Season by season</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Your Michigan roof calendar.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <SeasonTabs />
          </Reveal>
        </div>
      </section>

      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="eyebrow">60-second roof health check</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">How's your roof holding up?</h2>
            <p className="mt-5 text-lg text-steel">Four quick questions. Then confirm it with a free, owner-led inspection.</p>
            <Link to="/services/roof-inspections" className="btn btn-outline mt-8 text-navy">
              About our inspections <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <HealthCheck />
          </Reveal>
        </div>
      </section>

      <CTASection title="Get ahead of the next Michigan winter." image={IMG.redHomeSnow} />
    </>
  );
}
