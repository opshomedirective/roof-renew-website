import { useState } from "react";
import { motion } from "motion/react";

/**
 * Animated cross-section of a roof eave in winter.
 * Toggle between a roof that forms ice dams and a properly
 * ventilated / protected roof. Numbered markers on the drawing
 * match the numbered list beside it. Pure SVG — no images.
 */
const BAD = [
  "Warm air leaks into the attic and heats the roof deck",
  "Snow melts high on the roof and runs down toward the eave",
  "At the cold eave it refreezes into an ice dam (and icicles)",
  "The next melt gets trapped, pushes under the shingles and leaks inside",
];
const GOOD = [
  "Soffit intake pulls in cold outside air",
  "A ridge vent lets attic heat escape, so the roof deck stays cold",
  "Ice & water shield seals the eave where dams try to form",
  "Insulation keeps house heat out of the attic",
];

// Marker positions on the 640×400 drawing
const BAD_PTS = [
  [330, 250],
  [300, 108],
  [74, 196],
  [150, 262],
];
const GOOD_PTS = [
  [70, 298],
  [553, 22],
  [96, 205],
  [330, 322],
];

function Marker({ n, x, y, color }: { n: number; x: number; y: number; color: string }) {
  return (
    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15 * n, type: "spring", stiffness: 260, damping: 18 }} style={{ transformOrigin: `${x}px ${y}px` }}>
      <circle cx={x} cy={y} r="14" fill={color} stroke="#fff" strokeWidth="3" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Manrope">
        {n}
      </text>
    </motion.g>
  );
}

export default function IceDamDiagram() {
  const [fixed, setFixed] = useState(false);
  const color = fixed ? "#1f6bff" : "#ea580c";
  const pts = fixed ? GOOD_PTS : BAD_PTS;
  const list = fixed ? GOOD : BAD;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="card overflow-hidden p-3 sm:p-5">
        <div className="mb-3 flex rounded-full bg-ice p-1 text-xs font-bold sm:text-sm">
          {[
            { v: false, l: "Without protection" },
            { v: true, l: "With a Roof-Renew system" },
          ].map((o) => (
            <button key={o.l} onClick={() => setFixed(o.v)} className={`relative flex-1 rounded-full px-3 py-2.5 transition ${fixed === o.v ? "text-white" : "text-steel hover:text-navy"}`}>
              {fixed === o.v && <motion.span layoutId="ice-tab" className={`absolute inset-0 rounded-full ${o.v ? "bg-blue" : "bg-navy"}`} />}
              <span className="relative">{o.l}</span>
            </button>
          ))}
        </div>

        <svg viewBox="0 0 640 400" className="h-auto w-full" role="img" aria-label="Cross-section of a roof eave showing how ice dams form and how ventilation and ice & water shield prevent leaks">
          <defs>
            <linearGradient id="id-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#cfe0ff" />
              <stop offset="1" stopColor="#f3f7ff" />
            </linearGradient>
            <linearGradient id="id-warm" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#ff7a45" stopOpacity=".6" />
              <stop offset="1" stopColor="#ff7a45" stopOpacity=".05" />
            </linearGradient>
            <linearGradient id="id-cold" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#2fc6ff" stopOpacity=".4" />
              <stop offset="1" stopColor="#2fc6ff" stopOpacity=".05" />
            </linearGradient>
          </defs>
          <rect width="640" height="400" fill="url(#id-sky)" />

          {/* attic space */}
          <path d="M122 360 L122 232 L560 62 L560 360 Z" fill={fixed ? "url(#id-cold)" : "url(#id-warm)"} />
          {/* wall + interior */}
          <rect x="100" y="232" width="22" height="168" fill="#9fb0cf" />
          <rect x="122" y="360" width="438" height="40" fill="#e7edf7" />
          {/* insulation */}
          <rect x="122" y={fixed ? 330 : 346} width="438" height={fixed ? 30 : 14} fill="#f9d77e" />

          {/* roof deck + shingles */}
          <path d="M40 262 L560 58" stroke="#3a4558" strokeWidth="16" strokeLinecap="round" />
          <path d="M40 252 L560 48" stroke="#1d2433" strokeWidth="8" strokeLinecap="round" strokeDasharray="22 4" />
          {/* snow */}
          <path d="M44 241 L556 40 L556 28 L44 229 Z" fill="#ffffff" stroke="#d9e4f5" />

          {fixed ? (
            <>
              {/* ice & water shield along the eave */}
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} d="M46 266 L230 194" stroke="#1f6bff" strokeWidth="7" strokeLinecap="round" />
              {/* ridge vent */}
              <rect x="540" y="38" width="34" height="14" rx="3" fill="#0a1733" />
              {/* soffit vent */}
              <rect x="40" y="268" width="60" height="8" fill="#0a1733" />
              {[0, 1, 2].map((i) => (
                <motion.circle key={i} r="5" fill="#2fc6ff" animate={{ cx: [70, 140, 540], cy: [290, 320, 70], opacity: [0, 1, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: "linear" }} />
              ))}
            </>
          ) : (
            <>
              {/* ice dam + icicles */}
              <path d="M40 240 Q 60 212 98 222 L 104 240 Z" fill="#bfe9ff" stroke="#7cc6ec" />
              {[48, 62, 76, 90].map((x, i) => (
                <motion.path key={x} d={`M${x} 262 l5 ${28 + (i % 2) * 14} l5 -${28 + (i % 2) * 14} z`} fill="#bfe9ff" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} style={{ transformOrigin: `${x + 5}px 262px` }} transition={{ delay: 0.1 * i }} />
              ))}
              {/* heat rising */}
              {[0, 1, 2].map((i) => (
                <motion.path key={i} d={`M${230 + i * 110} 330 q 10 -14 0 -28 q -10 -14 0 -28`} fill="none" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" animate={{ y: [0, -24], opacity: [0, 0.8, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.6 }} />
              ))}
              {/* meltwater running down, then leaking */}
              <motion.circle r="5" fill="#1f6bff" animate={{ cx: [360, 112], cy: [130, 226] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeIn" }} />
              <motion.circle r="4" fill="#1f6bff" animate={{ cx: [126, 130], cy: [240, 330], opacity: [1, 0] }} transition={{ duration: 1.4, repeat: Infinity, delay: 1.2 }} />
            </>
          )}

          {pts.map(([x, y], i) => (
            <Marker key={`${fixed}-${i}`} n={i + 1} x={x} y={y} color={color} />
          ))}
        </svg>
      </div>

      <ol className="space-y-3">
        {list.map((t, i) => (
          <motion.li key={t} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 rounded-2xl border border-frost bg-white p-4">
            <span className="font-display grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black text-white" style={{ background: color }}>
              {i + 1}
            </span>
            <span className="font-semibold text-navy">{t}</span>
          </motion.li>
        ))}
        <li className="pt-2 text-xs text-steel">Tap the toggle above the drawing to compare.</li>
      </ol>
    </div>
  );
}
