import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { BUSINESS } from "../data/site";
import { IMG } from "../data/images";

export default function CTASection({
  title = "Let's take a look at your roof.",
  body = "Free, owner-led inspections across Grand Rapids and West Michigan. Call, or book online and we'll confirm a time that works for you.",
  image = IMG.homeDusk,
}: {
  title?: string;
  body?: string;
  image?: string;
}) {
  return (
    <section className="px-3 py-16 sm:px-6 lg:py-24">
      <div className="relative mx-auto max-w-[86rem] overflow-hidden rounded-[2rem] bg-navy text-white">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-navy/85 to-blue/30" />
        <div className="relative px-6 py-16 sm:px-14 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow on-dark">Free inspection · No obligation</p>
            <h2 className="mt-5 text-4xl leading-[1.02] text-balance sm:text-6xl">{title}</h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-blue">
                Book my free inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-glass">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
