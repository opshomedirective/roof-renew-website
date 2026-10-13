import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { IMG } from "../data/images";

/**
 * "Renew" slider. LEFT = real photo of worn, mossy shingles.
 * RIGHT = an SVG illustration of a new architectural shingle system.
 * It is labeled as an illustration — it is not a before/after of one job.
 */
function NewShingles() {
  const rows = 9;
  return (
    <svg viewBox="0 0 800 520" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fb6ff" />
          <stop offset="1" stopColor="#dbe9ff" />
        </linearGradient>
        <linearGradient id="sh-tab" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a5468" />
          <stop offset="1" stopColor="#2a3142" />
        </linearGradient>
        <linearGradient id="sh-tab2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b4456" />
          <stop offset="1" stopColor="#222a39" />
        </linearGradient>
        <pattern id="grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".7" fill="#ffffff" opacity=".07" />
          <circle cx="4" cy="3.5" r=".6" fill="#000000" opacity=".18" />
        </pattern>
      </defs>
      <rect width="800" height="520" fill="url(#sh-sky)" />
      {/* roof plane */}
      <g transform="translate(0 40)">
        {Array.from({ length: rows }).map((_, r) => {
          const y = r * 56;
          const off = (r % 3) * 37;
          return (
            <g key={r}>
              <rect x="0" y={y} width="800" height="60" fill="#1b2130" />
              {Array.from({ length: 12 }).map((__, c) => {
                const x = c * 74 - off;
                const h = 40 + ((c * 7 + r * 3) % 4) * 4;
                return (
                  <g key={c}>
                    <rect x={x} y={y + 6} width="70" height={h} rx="2" fill={(c + r) % 3 ? "url(#sh-tab)" : "url(#sh-tab2)"} />
                    <rect x={x} y={y + 6} width="70" height={h} rx="2" fill="url(#grain)" />
                    <rect x={x} y={y + 6 + h - 3} width="70" height="3" fill="#0e131d" opacity=".55" />
                  </g>
                );
              })}
            </g>
          );
        })}
      </g>
      {/* ridge vent */}
      <rect x="0" y="22" width="800" height="22" fill="#151a26" />
      <rect x="0" y="40" width="800" height="4" fill="#2fc6ff" opacity=".55" />
      <rect x="0" y="0" width="800" height="22" fill="url(#sh-sky)" />
    </svg>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div>
      <div
        ref={ref}
        className="relative aspect-[16/10] w-full cursor-ew-resize touch-none overflow-hidden rounded-[1.75rem] select-none glow-blue"
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      >
        <div className="absolute inset-0">
          <NewShingles />
        </div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={IMG.mossShingles} alt="Worn asphalt shingles with moss growing on them" className="h-full w-full object-cover" draggable={false} />
        </div>
        <span className="absolute top-4 left-4 rounded-full bg-night/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">Before · worn & mossy</span>
        <span className="absolute top-4 right-4 rounded-full bg-blue px-3 py-1.5 text-xs font-bold text-white">After · renewed</span>
        <div className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(47,198,255,.9)]" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-blue shadow-xl">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        <input
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare worn and renewed roof"
          className="absolute inset-x-0 bottom-0 h-8 w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs text-steel">Drag to compare. Left: real photo of a worn roof. Right: illustration of a new architectural shingle system.</p>
    </div>
  );
}
