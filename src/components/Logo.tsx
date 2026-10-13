import { Link } from "react-router-dom";
import { IMG } from "../data/images";
import { BUSINESS } from "../data/site";

export default function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${BUSINESS.name} — home`} className="shrink-0">
      <img src={IMG.logo} alt="Roof-Renew logo" className={`${className} w-auto drop-shadow-[0_0_18px_rgba(47,198,255,.35)]`} />
    </Link>
  );
}
