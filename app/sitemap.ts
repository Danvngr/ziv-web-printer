import type { MetadataRoute } from "next";
import { domains } from "@/data/domains";
import { machineGuideLinks, machines } from "@/data/printers";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/guides",
    "/projects",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    ...domains.map((domain) => `/solutions/${domain.slug}`),
    ...machines.flatMap((machine) => [
      `/printers/${machine.id}`,
      ...machineGuideLinks(machine).map((kind) => `/printers/${machine.id}/${kind}`),
    ]),
  ];
  return paths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
