import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "../data/services";
import { IMG } from "../data/images";

export default function ServiceCard({ s, index }: { s: Service; index?: number }) {
  return (
    <Link to={`/services/${s.slug}`} className="card group flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:border-blue/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={IMG[s.hero]} alt={`${s.title} by Roof-Renew in West Michigan`} loading="lazy" className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <span className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-blue shadow-lg backdrop-blur transition group-hover:bg-blue group-hover:text-white">
          <Icon name={s.icon} className="h-5 w-5" />
        </span>
        {index !== undefined && <span className="font-display absolute top-4 right-4 text-sm font-extrabold text-white/80">{String(index + 1).padStart(2, "0")}</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl text-navy">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{s.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue">
          Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}
