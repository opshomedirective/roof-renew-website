import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, CloudRain, Leaf, Snowflake, Sun } from "lucide-react";
import { SEASONS } from "../data/site";
import { IMG } from "../data/images";

const ICONS = { Winter: Snowflake, Spring: CloudRain, Summer: Sun, Fall: Leaf } as const;

/** What each Michigan season does to a roof — tabbed, with a photo per season. */
export default function SeasonTabs() {
  const [i, setI] = useState(0);
  const s = SEASONS[i];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
      <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem]">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={s.key}
            src={IMG[s.img]}
            alt={`${s.key} in West Michigan — ${s.title}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
        <p className="font-display absolute bottom-5 left-6 text-6xl font-black text-white/95 [font-stretch:125%] sm:text-7xl">{s.key}</p>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 gap-2">
          {SEASONS.map((x, k) => {
            const I = ICONS[x.key];
            return (
              <button
                key={x.key}
                onClick={() => setI(k)}
                className={`flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 text-xs font-bold transition ${
                  k === i ? "border-blue bg-blue text-white shadow-[0_14px_30px_-14px_rgba(31,107,255,.9)]" : "border-frost bg-white text-steel hover:border-blue/50"
                }`}
              >
                <I className="h-5 w-5" />
                {x.key}
              </button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={s.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="card mt-4 flex-1 p-7">
            <h3 className="text-2xl text-navy sm:text-3xl">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-steel">{s.body}</p>
            <ul className="mt-6 space-y-2.5">
              {s.tips.map((t) => (
                <li key={t} className="flex items-center gap-3 font-semibold text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ice text-blue">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
