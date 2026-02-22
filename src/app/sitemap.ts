import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.galarilandcivil.com.au";
  const routes = ["/", "/about", "/services", "/projects", "/contact", "/sevices"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-02-20"),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
