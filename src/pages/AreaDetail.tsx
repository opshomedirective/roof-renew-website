import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, Clock, MapPin, Navigation, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import SeasonTabs from "../components/SeasonTabs";
import RenewVsReplace from "../components/RenewVsReplace";
import AreaMap from "../components/AreaMap";
import FAQ from "../components/FAQ";
import LeadForm from "../components/LeadForm";
import CTASection from "../components/CTASection";
import { AREAS, BUSINESS, areaPath, directionFrom, getArea, milesBetween, nearestAreas } from "../data/site";
import { SERVICES } from "../data/services";
import { IMG, type ImgKey } from "../data/images";
import { useSEO } from "../seo";

const GR = AREAS.find((a) => a.slug === "grand-rapids")!;

// Hero photo per region so neighboring town pages don't all look identical.
const REGION_HERO: Record<string, ImgKey> = {
  "Grand Rapids Metro": "homeDusk",
  "North & East": "fallHome",
  Lakeshore: "lakeDunePath",
  South: "brickAutumn",
};

/**
 * SEO landing page for one service-area town: /service-area/:slug
 * Unique H1, title, meta, local copy, distance from Grand Rapids,
 * nearby towns and a localized FAQ on every page.
 */
export default function AreaDetail() {
  const { slug = "" } = useParams();
  const area = getArea(slug);

  useSEO({
    title: area ? `Roof Rejuvenation in ${area.name}, MI | Roof-Renew` : "Service area not found | Roof-Renew",
    description: area
      ? `Roof rejuvenation for aging shingles in ${area.name}, MI. Renew your roof before you replace it — free owner-led inspection: ${BUSINESS.phoneDisplay}.`
      : "",
  });

  if (!area) return <Navigate to="/service-area" replace />;

  const isGR = area.slug === "grand-rapids";
  const miles = Math.round(milesBetween(GR, area));
  const dir = directionFrom(GR, area);
  const where = isGR ? "right here in Grand Rapids" : miles <= 3 ? "right next to Grand Rapids" : `about ${miles} miles ${dir} of Grand Rapids`;
  const nearby = nearestAreas(area, 4);
  const lakeshore = area.region === "Lakeshore";

  const faqs = [
    {
      q: `Do you offer roof rejuvenation in ${area.name}?`,
      a: `Yes. ${area.name} is ${where}, inside our 50-mile West Michigan service area. Call ${BUSINESS.phoneDisplay} to book your free inspection.`,
    },
    {
      q: `Who inspects roofs in ${area.name}?`,
      a: `The owner, ${BUSINESS.owner}. He inspects your ${area.name} roof himself, photographs what he finds and tells you honestly whether it's a good candidate for rejuvenation.`,
    },
    {
      q: `Can rejuvenation help ${area.name} roofs with Michigan winters?`,
      a: `Rejuvenation is designed to help restore flexibility to aging asphalt shingles — and brittle shingles are the ones that crack in freeze-thaw cycles${lakeshore ? " and heavy lake-effect snow" : ""}. A free inspection tells you if your roof is a candidate.`,
    },
    {
      q: "Is rejuvenation right for every roof?",
      a: "No. It's for asphalt shingle roofs that are aging but still intact. Roofs with leaks, missing shingles or soft decking aren't candidates — and we'll tell you that up front.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Service area · ${area.county}`}
        title={
          <>
            Roof rejuvenation in <span className="hl">{area.name}, MI.</span>
          </>
        }
        sub={`${area.note} Before you replace your roof, see if you can renew it first — free, owner-led inspections for ${area.name} homeowners.`}
        image={IMG[REGION_HERO[area.region] ?? "homeDusk"]}
        imageAlt={`West Michigan home near ${area.name}`}
        crumbs={[{ label: "Service Area", to: "/service-area" }, { label: area.name }]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-blue">
            Free inspection in {area.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>
      </PageHero>

      {/* Local intro + quick facts */}
      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow">{area.name}, Michigan</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">
              Renew your {area.name} roof <span className="hl">before you replace it.</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-steel">
              <p>
                {isGR ? "Grand Rapids is the heart of our service area." : `${area.name} sits ${where}, in ${area.county}.`} Like every roof in West Michigan, homes
                here take years of freeze-thaw winters{lakeshore ? ", heavy lake-effect snow" : ""} and summer sun — and asphalt shingles slowly dry out, turn brittle
                and shed the granules that protect them.
              </p>
              <p>
                If your {area.name} roof is aging but still intact, you may not need a full replacement. Roof rejuvenation is a spray-applied treatment designed to soak
                into aging shingles and help restore their flexibility — so your roof may keep protecting your home for longer, for far less than a new one.
              </p>
              <p>
                It starts with a free inspection. {BUSINESS.owner}, the owner, checks your shingles in person, photographs what he finds and tells you straight
                whether your roof is a candidate.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card overflow-hidden">
              <div className="bg-navy px-6 py-5 text-white">
                <p className="eyebrow on-dark">Quick facts</p>
                <p className="font-display mt-2 text-3xl font-extrabold">{area.name}, MI</p>
              </div>
              <ul className="divide-y divide-frost">
                {[
                  { I: MapPin, l: "County", v: area.county },
                  { I: Navigation, l: "From Grand Rapids", v: isGR ? "Home base" : miles <= 3 ? "Next door" : `~${miles} miles ${dir}` },
                  { I: Clock, l: "Hours", v: `${BUSINESS.hours} (${BUSINESS.hoursNote})` },
                  { I: Check, l: "Inspection", v: "Free · owner-led · no obligation" },
                ].map(({ I, l, v }) => (
                  <li key={l} className="flex items-center gap-4 px-6 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ice text-blue">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold text-steel">{l}</span>
                      <span className="block font-bold text-navy">{v}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-frost p-6">
                <p className="text-xs font-bold tracking-[0.2em] text-steel uppercase">Nearby towns we serve</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <Link key={n.slug} to={areaPath(n)} className="rounded-full border border-frost px-3 py-1.5 text-sm font-semibold text-navy transition hover:border-blue hover:text-blue">
                      {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our services in {area.name}</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Renew it first. Replace it later.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard s={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Renew vs replace */}
      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Renew vs. replace</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Is your {area.name} roof a candidate?</h2>
          </Reveal>
          <Reveal className="mt-12">
            <RenewVsReplace />
          </Reveal>
        </div>
      </section>

      {/* Seasons */}
      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Four seasons of wear</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">What a Michigan year does to {area.name} roofs.</h2>
          </Reveal>
          <Reveal className="mt-12">
            <SeasonTabs />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="dots-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow on-dark">Where {area.name} fits</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">Serving {area.name} and all of West Michigan.</h2>
            <p className="mt-5 text-lg text-white/75">
              {isGR ? "Grand Rapids is the center of our 50-mile service area." : `${area.name} is ${where} — inside our 50-mile service area.`} Click any town on the
              map to see its page.
            </p>
            <Link to="/service-area" className="btn btn-glass mt-8">
              All service areas <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <AreaMap highlight={area.name} />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Roof rejuvenation in {area.name}: your questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="dots bg-ice py-16 lg:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Book in {area.name}</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Get your free {area.name} roof inspection.</h2>
            <p className="mt-5 text-lg text-steel">Answer a few quick questions and Bill will reach out to schedule — or call {BUSINESS.phoneDisplay}.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <CTASection title={`Before you replace your ${area.name} roof, see if you can renew it.`} image={IMG[REGION_HERO[area.region] ?? "homeDusk"]} />
    </>
  );
}
