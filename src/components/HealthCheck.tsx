import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Phone, RotateCcw } from "lucide-react";
import { BUSINESS, HEALTH_CHECK } from "../data/site";

const RESULTS = [
  { max: 2, tone: "bg-emerald-500", title: "Looking healthy", body: "Your roof sounds like it's in good shape. A free check every spring — after the snow melts — will keep it that way." },
  { max: 5, tone: "bg-amber-500", title: "Worth a closer look", body: "A few warning signs. Small problems caught now are usually simple repairs. Let's get eyes on it before the next storm or snowfall." },
  { max: 99, tone: "bg-red-500", title: "Time to talk renewal", body: "Several signs point to a roof near the end of its life — or a leak that needs attention now. Book a free inspection so you know exactly where you stand." },
];

/** "Roof Health Check" — a 4-question self-assessment that ends in a CTA. */
export default function HealthCheck() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const done = step >= HEALTH_CHECK.length;
  const result = RESULTS.find((r) => score <= r.max)!;

  return (
    <div className="card relative overflow-hidden p-6 sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-ice">
        <motion.div className="h-full bg-gradient-to-r from-blue to-cyan" animate={{ width: `${(Math.min(step, HEALTH_CHECK.length) / HEALTH_CHECK.length) * 100}%` }} />
      </div>
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
            <p className="eyebrow">
              Question {step + 1} of {HEALTH_CHECK.length}
            </p>
            <h3 className="mt-4 text-2xl text-navy sm:text-3xl">{HEALTH_CHECK[step].q}</h3>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {HEALTH_CHECK[step].options.map(([label, pts]) => (
                <button
                  key={label}
                  onClick={() => {
                    setScore((s) => s + pts);
                    setStep((s) => s + 1);
                  }}
                  className="rounded-2xl border border-frost bg-ice/50 px-4 py-4 text-left font-semibold text-navy transition hover:border-blue hover:bg-white hover:shadow-[0_10px_30px_-18px_rgba(31,107,255,.8)]"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3">
              <span className={`h-3.5 w-3.5 rounded-full ${result.tone} shadow-[0_0_0_6px_rgba(0,0,0,.05)]`} />
              <p className="eyebrow">Your result</p>
            </div>
            <h3 className="mt-4 text-3xl text-navy sm:text-4xl">{result.title}</h3>
            <p className="mt-3 max-w-xl text-steel">{result.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-blue">
                Book a free inspection <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline text-navy">
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
            <button
              onClick={() => {
                setStep(0);
                setScore(0);
              }}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-steel hover:text-blue"
            >
              <RotateCcw className="h-4 w-4" /> Start over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
