import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lysandja.ao";
  const routes = ["", "/fazenda", "/producao", "/impacto", "/sustentabilidade", "/journal", "/galeria", "/contacto"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}
