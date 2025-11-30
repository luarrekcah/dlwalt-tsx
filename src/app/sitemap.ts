import { cities } from "@/data/cities";

export default function sitemap() {
  const cityRoutes = Object.keys(cities).map((slug) => ({
    url: `https://www.dwalt.net/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://www.dwalt.net",
      lastModified: new Date(),
    },
    {
      url: "https://www.dwalt.net/contato",
      lastModified: new Date(),
    },
    {
      url: "https://www.dwalt.net/termos/politica-de-privacidade",
      lastModified: new Date(),
    },
    {
      url: "https://www.dwalt.net/termos/termos-de-uso",
      lastModified: new Date(),
    },
    {
      url: "https://www.dwalt.net/ferramentas/banco-bv",
      lastModified: new Date(),
    },
    {
      url: "https://www.dwalt.net/ferramentas/mediakit",
      lastModified: new Date(),
    },
    ...cityRoutes,
  ];
}
