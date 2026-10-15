import { Link } from "react-router-dom";
import { AREAS, areaPath } from "../data/site";

/** Infinite town marquee — every town links to its service-area page. */
export default function Marquee() {
  const row = [...AREAS, ...AREAS];
  return (
    <div className="mask-fade-x relative overflow-hidden bg-navy py-5">
      <div className="animate-marquee flex w-max items-center gap-8 hover:[animation-play-state:paused]">
        {row.map((a, i) => (
          <span key={i} className="flex items-center gap-8">
            <Link to={areaPath(a)} className="font-display text-2xl font-extrabold whitespace-nowrap text-white/90 transition [font-stretch:115%] hover:text-cyan sm:text-3xl">
              {a.name}
            </Link>
            <svg viewBox="0 0 40 16" className="h-4 w-10" aria-hidden>
              <path d="M2 12 C 12 2, 26 2, 38 8" fill="none" stroke="#2fc6ff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
