import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Thermometer, Wind } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SeasonTabs from "../components/SeasonTabs";
import RenewVsReplace from "../components/RenewVsReplace";
import HealthCheck from "../components/HealthCheck";
import CTASection from "../components/CTASection";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

const THREATS = [
  {
    icon: Snowflake,
    k: "Lake-effect snow",
    b: "West Michigan sits downwind of Lake Michigan. Heavy, wet snow can sit on a roof for weeks, and every melt soaks and dries the shingles again.",
    img: IMG.snowEdge,
  },
  {
    icon: Thermometer,
    k: "Freeze–thaw cycles",
    b: "Temperatures bounce above and below freezing all winter. Shingles that have dried out and turned brittle crack and shed granules faster with every cycle.",
    img: IMG.iciclesEdge,
  },
  {
    icon: Wind,
    k: "Wind off the lake",
    b: "Strong west winds flex and lift shingles. Flexible shingles bend and settle back; dry, brittle ones are the ones that crack and blow off.",
    img: IMG.stormLake,
  },
];

export default function MichiganRoofs() {
  useSEO({
    title: "Michigan Roof Guide: Why Shingles Age & When to Renew | Roof-Renew",
    description: "How lake-effect snow, freeze-thaw cycles, summer heat and lake wind age asphalt shingles in West Michigan — and how to tell if your roof can be renewed instead of replaced.",
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
        sub="Lake-effect snow, freeze-thaw cycles, summer heat and lake wind slowly dry out your shingles. Here's what that means — and when a roof can be renewed instead of replaced."
        image={IMG.whiteHomeSnow}
        imageAlt="Home with a heavy snow-covered roof in winter"
        crumbs={[{ label: "Michigan Roofs" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">The big three</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What West Michigan weather does to your shingles.</h2>
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
            <p className="eyebrow">Renew vs. replace</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Aging roof? You may not need a full replacement.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <RenewVsReplace />
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
            <p className="eyebrow">60-second candidate check</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Can your roof be renewed?</h2>
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

      <CTASection title="Renew your shingles before the next Michigan winter." image={IMG.redHomeSnow} />
    </>
  );
}
