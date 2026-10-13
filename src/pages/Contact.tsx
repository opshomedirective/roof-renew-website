import { Clock, MapPin, Phone, PhoneCall, UserRound } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import LeadForm from "../components/LeadForm";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function Contact() {
  useSEO({
    title: "Contact Roof-Renew | Free Roof Inspection in Grand Rapids, MI",
    description: "Book a free, owner-led roof inspection or phone consultation with Roof-Renew. Call (616) 265-9270 — open 7AM to 8PM.",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's take a look at <span className="hl">your roof.</span>
          </>
        }
        sub="Book a free inspection or start with a quick phone consultation — whichever is easier for you."
        image={IMG.cozyPorch}
        imageAlt="Cozy home with a front porch"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">Talk to the owner</p>
            <h2 className="mt-4 text-4xl text-navy sm:text-5xl">Call, text or book online.</h2>
            <p className="mt-5 text-lg text-steel">When you call Roof-Renew, you reach {BUSINESS.owner} — the same person who'll inspect your roof.</p>
            <div className="mt-10 space-y-4">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-deep to-blue p-5 text-white shadow-[0_20px_40px_-20px_rgba(31,107,255,.9)] transition hover:-translate-y-0.5">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs text-white/75">Call or text</span>
                  <span className="font-display text-2xl font-extrabold">{BUSINESS.phoneDisplay}</span>
                </span>
              </a>
              {[
                { icon: Clock, l: "Hours", v: `${BUSINESS.hours} (${BUSINESS.hoursNote})` },
                { icon: PhoneCall, l: "Phone consultations", v: "Available — describe the problem and we'll advise" },
                { icon: UserRound, l: "Your inspector", v: `${BUSINESS.owner}, owner` },
                { icon: MapPin, l: "Service area", v: "Grand Rapids & a 50-mile radius" },
              ].map(({ icon: I, l, v }) => (
                <div key={l} className="flex items-center gap-4 rounded-2xl border border-frost bg-ice/40 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-blue shadow-sm">
                    <I className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-steel">{l}</span>
                    <span className="font-bold text-navy">{v}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
