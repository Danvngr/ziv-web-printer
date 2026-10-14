import {
  Cable,
  Cctv,
  Laptop,
  Layers,
  Megaphone,
  Monitor,
  Presentation,
  Printer,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  it: Laptop,
  networks: Cable,
  "computer-rooms": Monitor,
  classrooms: Presentation,
  paging: Megaphone,
  security: Cctv,
  "learning-spaces": Layers,
  printers: Printer,
};

export function DomainIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = icons[slug] ?? Layers;
  return <Icon className={className} aria-hidden="true" />;
}
