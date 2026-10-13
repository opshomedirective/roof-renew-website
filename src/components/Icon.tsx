import { CloudLightning, Home, ScanSearch, Snowflake, Wrench, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { CloudLightning, Home, ScanSearch, Snowflake, Wrench };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Home;
  return <C className={className} strokeWidth={1.75} />;
}
