import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Swoosh from "../components/Swoosh";
import { IMG } from "../data/images";
import { useSEO } from "../seo";

export default function NotFound() {
  useSEO({ title: "Page not found | Roof-Renew", description: "The page you're looking for doesn't exist." });
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy pt-32 text-white">
      <img src={IMG.snowyStreet} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-navy/85 to-navy/30" />
      <div className="wrap relative">
        <p className="eyebrow on-dark">404</p>
        <h1 className="mt-5 text-6xl sm:text-8xl">
          Lost in the <span className="hl">snow.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/75">We couldn't find that page. Let's get you back on solid ground.</p>
        <Link to="/" className="btn btn-blue mt-10">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <Swoosh fill="#050b1a" />
    </section>
  );
}
