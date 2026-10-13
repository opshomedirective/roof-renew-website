/**
 * The signature "renew swoosh": the curved blue/cyan arcs from the
 * Roof-Renew logo, used as a section divider. `fill` is the color of
 * the NEXT section so the curve blends into it.
 */
export default function Swoosh({ fill = "#ffffff", className = "", flip = false }: { fill?: string; className?: string; flip?: boolean }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-x-0 bottom-[-1px] ${flip ? "-scale-x-100" : ""} ${className}`}>
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="block h-[70px] w-full sm:h-[110px]">
        <defs>
          <linearGradient id="sw-blue" x1="0" x2="1">
            <stop offset="0" stopColor="#0f4fd6" />
            <stop offset=".6" stopColor="#1f6bff" />
            <stop offset="1" stopColor="#2fc6ff" />
          </linearGradient>
        </defs>
        <path d="M0 70 C 360 140, 760 10, 1440 60 L1440 140 L0 140 Z" fill={fill} />
        <path d="M0 62 C 360 132, 760 2, 1440 52" fill="none" stroke="url(#sw-blue)" strokeWidth="6" strokeLinecap="round" />
        <path d="M0 48 C 380 112, 800 -6, 1440 38" fill="none" stroke="#c9d3e0" strokeOpacity=".7" strokeWidth="2" />
      </svg>
    </div>
  );
}
