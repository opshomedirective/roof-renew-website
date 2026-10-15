import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AREAS, BUSINESS, areaPath } from "../data/site";

/**
 * Radar-style service-area map. Cities are plotted from real lat/lng
 * inside the 50-mile radius centered on ZIP 49512 — no map API needed.
 * A soft band on the left hints at the Lake Michigan shoreline.
 * Every dot links to that town's SEO page; `highlight` marks one town.
 */
const SIZE = 600;
const C = SIZE / 2;
const { lat: cLat, lng: cLng, radiusMiles } = BUSINESS.serviceCenter;
const MI_PER_LAT = 69;
const MI_PER_LNG = 69 * Math.cos((cLat * Math.PI) / 180);
const R = 280;
const scale = R / radiusMiles;
const CYAN = "#2fc6ff";

const project = (lat: number, lng: number) => ({
  x: C + (lng - cLng) * MI_PER_LNG * scale,
  y: C - (lat - cLat) * MI_PER_LAT * scale,
});

const LABELS: Record<string, [number, number, "start" | "end" | "middle"]> = {
  "Grand Rapids": [0, -12, "middle"],
  Holland: [-10, 4, "end"],
  "Grand Haven": [-10, 4, "end"],
  Muskegon: [-10, 4, "end"],
  Rockford: [10, 4, "start"],
  Greenville: [10, 4, "start"],
  Ionia: [10, 4, "start"],
  Lowell: [10, 4, "start"],
  Hastings: [10, 4, "start"],
  Kalamazoo: [0, 18, "middle"],
  "Battle Creek": [10, 4, "start"],
  Allegan: [-10, 4, "end"],
  Hudsonville: [-10, 14, "end"],
};

// Approximate Lake Michigan shoreline (lat, lng), north → south
const SHORE: [number, number][] = [
  [43.6, -86.45], [43.35, -86.38], [43.23, -86.33], [43.06, -86.25], [42.9, -86.22], [42.78, -86.21], [42.6, -86.24], [42.4, -86.28], [42.2, -86.36],
];

export default function AreaMap({ highlight }: { highlight?: string }) {
  const [hover, setHover] = useState<string | null>(null);
  const navigate = useNavigate();
  const shore = SHORE.map(([la, ln]) => project(la, ln));
  const lakePath = `M -40 -40 L ${shore.map((p) => `${p.x} ${p.y}`).join(" L ")} L -40 ${SIZE + 40} Z`;

  return (
    <div className="relative mx-auto w-full max-w-[640px]">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-label="Map of the Roof-Renew service area: 50 miles around Grand Rapids, Michigan">
        <defs>
          <radialGradient id="radar" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0.22" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={CYAN} stopOpacity="0" />
            <stop offset="100%" stopColor={CYAN} stopOpacity="0.32" />
          </linearGradient>
          <clipPath id="disc">
            <circle cx={C} cy={C} r={R} />
          </clipPath>
        </defs>

        <g clipPath="url(#disc)">
          <path d={lakePath} fill="#1f6bff" fillOpacity="0.22" />
          <path d={`M ${shore.map((p) => `${p.x} ${p.y}`).join(" L ")}`} fill="none" stroke={CYAN} strokeOpacity=".5" strokeWidth="2" />
        </g>
        <text x={shore[5].x - 18} y={shore[5].y + 40} fill="#9fb0cf" fontSize="12" fontWeight="700" fontFamily="Manrope" transform={`rotate(-80 ${shore[5].x - 18} ${shore[5].y + 40})`}>
          LAKE MICHIGAN
        </text>

        <circle cx={C} cy={C} r={R} fill="url(#radar)" stroke={CYAN} strokeOpacity="0.6" strokeDasharray="4 6" />
        {[0.25, 0.5, 0.75].map((f) => (
          <circle key={f} cx={C} cy={C} r={R * f} fill="none" stroke="#fff" strokeOpacity="0.08" />
        ))}
        <g clipPath="url(#disc)">
          <path d={`M ${C} ${C} L ${C + R} ${C} A ${R} ${R} 0 0 0 ${C + R * Math.cos(-Math.PI / 4)} ${C + R * Math.sin(-Math.PI / 4)} Z`} fill="url(#sweep)">
            <animateTransform attributeName="transform" type="rotate" from={`0 ${C} ${C}`} to={`360 ${C} ${C}`} dur="8s" repeatCount="indefinite" />
          </path>
        </g>
        <text x={C + R * Math.cos(Math.PI / 4) + 6} y={C + R * Math.sin(Math.PI / 4) + 6} fill={CYAN} fontSize="12" fontWeight="800" fontFamily="Manrope">
          50 mi
        </text>

        {AREAS.map((a) => {
          const { x, y } = project(a.lat, a.lng);
          const on = hover === a.name || highlight === a.name;
          const lab = LABELS[a.name];
          const [dx, dy, anchor] = lab ?? [10, 4, "start"];
          return (
            <g
              key={a.name}
              role="link"
              tabIndex={0}
              aria-label={`Roof rejuvenation in ${a.name}, MI`}
              onClick={() => navigate(areaPath(a))}
              onKeyDown={(e) => e.key === "Enter" && navigate(areaPath(a))}
              onMouseEnter={() => setHover(a.name)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer outline-none"
            >
              <circle cx={x} cy={y} r={12} fill="transparent" />
              <circle cx={x} cy={y} r={on ? 6.5 : 3.5} fill={on ? CYAN : "#ffffff"} />
              {(lab || on) && (
                <text x={x + dx} y={y + dy} textAnchor={anchor} fill={on ? CYAN : "#ffffffcc"} fontSize={on ? 15 : 12} fontWeight={on ? 800 : 600} fontFamily="Manrope" paintOrder="stroke" stroke="#0a1733" strokeWidth={on ? 4 : 3}>
                  {a.name}
                </text>
              )}
            </g>
          );
        })}

        <circle cx={C} cy={C} r="10" fill={CYAN}>
          <animate attributeName="r" values="8;34;8" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values=".6;0;.6" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx={C} cy={C} r="7" fill="#1f6bff" stroke="#fff" strokeWidth="2.5" />
      </svg>
      <div className="glass absolute bottom-2 left-2 rounded-2xl px-4 py-3 text-xs text-white">
        <p className="font-bold tracking-widest text-cyan uppercase">Coverage</p>
        <p className="font-display text-lg font-extrabold">{radiusMiles}-mile radius</p>
        <p className="text-mist">around ZIP {BUSINESS.serviceCenter.zip} · click a town</p>
      </div>
    </div>
  );
}
