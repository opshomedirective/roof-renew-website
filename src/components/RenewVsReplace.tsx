import { useState } from "react";
import { motion } from "motion/react";
import { Check, Minus, X } from "lucide-react";
import { IMG } from "../data/images";

/**
 * The core message of the ad campaign, as an interactive comparison:
 * renew (rejuvenate) vs. replace — plus who is and isn't a candidate.
 * Wording is deliberately hedged; no specific prices or lifespans.
 */
const ROWS: { label: string; renew: string; replace: string; win: "renew" | "replace" | "tie" }[] = [
  { label: "Cost", renew: "A fraction of a new roof", replace: "Typically the most expensive option", win: "renew" },
  { label: "Tear-off & dumpster", renew: "None — your shingles stay on", replace: "Full tear-off and a dumpster in the driveway", win: "renew" },
  { label: "Old shingles to the landfill", renew: "None", replace: "Your entire old roof", win: "renew" },
  { label: "Disruption at home", renew: "Minimal", replace: "Noise, crews and debris for days", win: "renew" },
  { label: "Fixes leaks & missing shingles", renew: "No — not a repair", replace: "Yes", win: "replace" },
  { label: "Best for", renew: "Aging shingles that are still intact", replace: "Roofs that are damaged or at the end of their life", win: "tie" },
];

const GOOD = ["Asphalt shingles", "Faded, dull or dry-looking", "Some granule loss", "Stiff or brittle, but still in place", "No active leaks"];
const BAD = ["Active leaks or water damage", "Missing or blown-off shingles", "Soft spots or sagging decking", "Severe, widespread curling or cracking"];

export default function RenewVsReplace() {
  const [view, setView] = useState<"compare" | "candidate">("compare");

  return (
    <div>
      <div className="mx-auto mb-8 flex max-w-md rounded-full bg-white p-1 text-sm font-bold shadow-sm">
        {[
          { v: "compare" as const, l: "Renew vs. replace" },
          { v: "candidate" as const, l: "Is my roof a candidate?" },
        ].map((o) => (
          <button key={o.v} onClick={() => setView(o.v)} className={`relative flex-1 rounded-full px-3 py-2.5 transition ${view === o.v ? "text-white" : "text-steel hover:text-navy"}`}>
            {view === o.v && <motion.span layoutId="rvr-tab" className="absolute inset-0 rounded-full bg-blue" />}
            <span className="relative">{o.l}</span>
          </button>
        ))}
      </div>

      {view === "compare" ? (
        <motion.div key="compare" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr] text-sm sm:grid-cols-[1.1fr_1fr_1fr]">
            <div className="hidden bg-ice/60 p-5 sm:block" />
            <div className="bg-gradient-to-br from-blue-deep to-blue p-5 text-white">
              <p className="text-xs font-bold tracking-widest text-cyan uppercase">Roof-Renew</p>
              <p className="font-display text-xl font-extrabold sm:text-2xl">Rejuvenate</p>
            </div>
            <div className="bg-navy p-5 text-white">
              <p className="text-xs font-bold tracking-widest text-mist uppercase">The usual answer</p>
              <p className="font-display text-xl font-extrabold sm:text-2xl">Replace</p>
            </div>
            {ROWS.map((r, i) => (
              <motion.div key={r.label} className="contents" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="col-span-2 border-t border-frost bg-ice/60 px-5 pt-4 pb-1 font-bold text-navy sm:col-span-1 sm:py-4">{r.label}</div>
                <div className="flex items-start gap-2 border-t border-frost px-5 py-4 text-navy sm:border-t">
                  {r.win === "renew" ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> : r.win === "replace" ? <X className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-steel" />}
                  <span className={r.win === "renew" ? "font-semibold" : ""}>{r.renew}</span>
                </div>
                <div className="flex items-start gap-2 border-t border-l border-frost px-5 py-4 text-steel">
                  {r.win === "replace" ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-silver" />}
                  <span>{r.replace}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div key="candidate" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-5 md:grid-cols-2">
          <div className="card overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img src={IMG.wornTexture} alt="Aging, dry asphalt shingles that are still intact" className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute top-4 left-4 rounded-full bg-blue px-3 py-1.5 text-xs font-bold text-white">Likely a good candidate</span>
            </div>
            <ul className="space-y-2.5 p-6">
              {GOOD.map((g) => (
                <li key={g} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-blue text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="card overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img src={IMG.notCandidate} alt="Shingle roof with a missing shingle" className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute top-4 left-4 rounded-full bg-navy px-3 py-1.5 text-xs font-bold text-white">Probably not a candidate</span>
            </div>
            <ul className="space-y-2.5 p-6">
              {BAD.map((g) => (
                <li key={g} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-orange-100 text-orange-600">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
            <p className="px-6 pb-6 text-sm text-steel">If that's your roof, we'll tell you honestly — rejuvenation isn't a repair.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
