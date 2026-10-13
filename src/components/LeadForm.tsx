import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { BUSINESS } from "../data/site";

/**
 * Multi-step inspection request (design placeholder).
 * In GoHighLevel, replace this with a native GHL multi-step Form/Survey
 * asking the same questions so every lead lands in the CRM pre-qualified.
 */
const STEPS = [
  {
    key: "issue",
    q: "What's going on with your roof?",
    options: ["Roof looks old or faded", "Granules in the gutters", "Was told I need a new roof", "Want to see if I can renew it", "Leak or missing shingles", "Just want an inspection"],
  },
  {
    key: "property",
    q: "Tell us about the property.",
    options: ["Home I live in", "Rental property", "Home I'm buying or selling", "Other"],
  },
  {
    key: "start",
    q: "How would you like to start?",
    options: ["Free on-site inspection", "Phone consultation first"],
  },
  {
    key: "timeline",
    q: "When do you want it handled?",
    options: ["ASAP — it's urgent", "Within 2 weeks", "Within a month", "Just planning ahead"],
  },
] as const;

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const total = STEPS.length + 1;
  const pct = ((step + (done ? 1 : 0)) / total) * 100;

  const pick = (key: string, v: string) => {
    setAnswers((a) => ({ ...a, [key]: v }));
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  return (
    <div className={`card relative overflow-hidden ${compact ? "p-6" : "p-6 sm:p-10"}`}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-ice">
        <motion.div className="h-full bg-gradient-to-r from-blue to-cyan" animate={{ width: `${Math.max(pct, 6)}%` }} transition={{ duration: 0.5 }} />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="eyebrow">{done ? "All set" : `Step ${step + 1} of ${total}`}</p>
        {step > 0 && !done && (
          <button onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-1 text-xs font-semibold text-steel hover:text-blue">
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <motion.div key="done" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="py-6 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan text-white">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-3xl text-navy">Request received!</h3>
            <p className="mx-auto mt-3 max-w-sm text-steel">Bill will reach out shortly to confirm your inspection or phone consultation. Need us sooner? Call now.</p>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-blue mt-6">
              <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
            </a>
          </motion.div>
        ) : step < STEPS.length ? (
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl text-navy sm:text-3xl">{STEPS[step].q}</h3>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {STEPS[step].options.map((o) => {
                const active = answers[STEPS[step].key] === o;
                return (
                  <button
                    key={o}
                    onClick={() => pick(STEPS[step].key, o)}
                    className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition ${
                      active ? "border-blue bg-blue/5 text-navy" : "border-frost bg-ice/40 text-navy hover:border-blue/60 hover:bg-white"
                    }`}
                  >
                    {o}
                    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${active ? "border-blue bg-blue text-white" : "border-silver bg-white"}`}>
                      {active && <Check className="h-3 w-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="contact"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h3 className="text-2xl text-navy sm:text-3xl">Where can we reach you?</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { n: "name", l: "Full name", t: "text", ac: "name" },
                { n: "phone", l: "Phone", t: "tel", ac: "tel" },
                { n: "email", l: "Email", t: "email", ac: "email" },
                { n: "address", l: "Property address", t: "text", ac: "street-address" },
              ].map((f) => (
                <label key={f.n} className="block">
                  <span className="mb-1.5 block text-xs font-bold text-steel">{f.l}</span>
                  <input
                    required
                    name={f.n}
                    type={f.t}
                    autoComplete={f.ac}
                    className="w-full rounded-xl border border-frost bg-ice/40 px-4 py-3.5 text-sm text-navy outline-none transition focus:border-blue focus:bg-white"
                  />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-bold text-steel">Best time to call</span>
                <select name="best_time" className="w-full rounded-xl border border-frost bg-ice/40 px-4 py-3.5 text-sm text-navy outline-none focus:border-blue">
                  <option>Morning (7–11AM)</option>
                  <option>Midday (11AM–2PM)</option>
                  <option>Afternoon (2–5PM)</option>
                  <option>Evening (5–8PM)</option>
                </select>
              </label>
            </div>
            <button type="submit" className="btn btn-blue mt-6 w-full">
              Request my free inspection <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-steel">No pressure, no obligation. If your roof is fine, we'll tell you.</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
