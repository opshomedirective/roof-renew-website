import { Home, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Home, ScanSearch, Sparkles };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Home;
  return <C className={className} strokeWidth={1.75} />;
}
