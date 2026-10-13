import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { BUSINESS, PROCESS, PROMISES } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function About() {
  useSEO({
    title: "About Roof-Renew | Owner-Led Roofing in Grand Rapids, MI",
    description: "Roof-Renew is an owner-led roofing company serving Grand Rapids and West Michigan. Every inspection is done personally by the owner, Bill Roberson.",
  });

  return (
    <>
      <PageHero
        eyebrow="About Roof-Renew"
        title={
          <>
            A West Michigan roofer <span className="hl">you can actually reach.</span>
          </>
        }
        sub="Owner-led, local and straightforward — roofing for homeowners across Grand Rapids and the communities around it."
        image={IMG.brickAutumn}
        imageAlt="Brick home with autumn trees in West Michigan"
        crumbs={[{ label: "About" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Renewing West Michigan roofs, one home at a time.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-steel">
              <p>
                Roof-Renew was built on a simple idea: homeowners deserve a straight answer about their roof from the person who's actually responsible for the work.
              </p>
              <p>
                That's why every inspection is done by the owner, {BUSINESS.owner}. He gets on the roof, photographs what he finds, explains it in plain English, and tells
                you honestly whether you need a repair, a full renewal — or nothing at all.
              </p>
              <p>
                We serve Grand Rapids and a 50-mile radius around it, and we're growing — with plans to add crews and expand our service area as more West Michigan
                homeowners find us.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-blue">
                Book a free inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline text-navy">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative pb-10">
            <img src={IMG.grRiverSkyline} alt="Grand Rapids skyline along the Grand River" className="aspect-[4/5] w-[78%] rounded-[2rem] object-cover" loading="lazy" />
            <img src={IMG.atticInsulation} alt="Inspecting attic insulation with a flashlight" className="absolute right-0 bottom-0 aspect-square w-[50%] rounded-[2rem] border-8 border-white object-cover shadow-2xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="dots-dark bg-navy py-16 text-white lg:py-24">
        <div className="wrap">
          <Reveal className="max-w-3xl">
            <p className="eyebrow on-dark">Our promises</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">What you can count on.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROMISES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="font-display text-sm font-black text-cyan">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">How it works</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Simple, honest, owner-led.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="card p-7">
                <span className="font-display grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan font-black text-white">{p.step}</span>
                <h3 className="mt-5 text-xl text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection image={IMG.fallRoad} />
    </>
  );
}
