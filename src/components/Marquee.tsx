import { AREAS } from "../data/site";

export default function Marquee({ items = AREAS.map((a) => a.name) }: { items?: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="mask-fade-x relative overflow-hidden bg-navy py-5">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-extrabold whitespace-nowrap text-white/90 [font-stretch:115%] sm:text-3xl">{t}</span>
            <svg viewBox="0 0 40 16" className="h-4 w-10" aria-hidden>
              <path d="M2 12 C 12 2, 26 2, 38 8" fill="none" stroke="#2fc6ff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
