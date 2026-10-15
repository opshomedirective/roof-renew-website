import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import AreaMap from "../components/AreaMap";
import CTASection from "../components/CTASection";
import { AREAS, REGIONS, areaPath } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function ServiceArea() {
  useSEO({
    title: "Service Area | Roof Rejuvenation in Grand Rapids, Kent County & West Michigan | Roof-Renew",
    description:
      "Roof-Renew serves a 50-mile radius around Grand Rapids: Kentwood, Wyoming, Grandville, Walker, Rockford, Lowell, Ada, Holland, Grand Haven, Muskegon, Hastings and more.",
  });

  return (
    <>
      <PageHero
        eyebrow="Service area"
        title={
          <>
            Grand Rapids <span className="hl">+ 50 miles.</span>
          </>
        }
        sub="Roof rejuvenation and free inspections for homeowners across Kent County, plus Ottawa, Allegan, Barry, Ionia, Montcalm and Muskegon counties."
        image={IMG.grSunset}
        imageAlt="Grand Rapids skyline at sunset"
        next="#0a1733"
        crumbs={[{ label: "Service Area" }]}
      />

      <section className="dots-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <p className="eyebrow on-dark">Where we work</p>
              <h2 className="mt-4 text-4xl sm:text-5xl">From the Lakeshore to Ionia.</h2>
              <p className="mt-5 text-lg text-white/75">We're based in the Grand Rapids area and cover a 50-mile radius — and we plan to keep growing.</p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {REGIONS.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="font-display text-lg font-extrabold">{r.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{r.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <AreaMap />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Communities we serve</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Find your town.</h2>
          </Reveal>
          {REGIONS.map((r) => (
            <div key={r.name} className="mt-10">
              <p className="eyebrow mb-4">{r.name}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {AREAS.filter((a) => a.region === r.name).map((a, i) => (
                  <Reveal key={a.name} delay={(i % 4) * 0.05}>
                    <Link to={areaPath(a)} className="group flex items-center justify-between rounded-2xl border border-frost bg-ice/40 px-5 py-4 transition hover:border-blue hover:bg-white">
                      <span className="flex items-center gap-2.5 font-bold text-navy">
                        <MapPin className="h-4 w-4 text-blue" /> {a.name}, MI
                      </span>
                      <ArrowRight className="h-4 w-4 text-silver transition group-hover:translate-x-1 group-hover:text-blue" />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <p className="mt-10 text-sm text-steel">Don't see your town? If you're within about 50 miles of Grand Rapids, give us a call — we likely serve you.</p>
        </div>
      </section>

      <CTASection image={IMG.lakeDunePath} />
    </>
  );
}
