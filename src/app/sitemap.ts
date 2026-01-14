import { cities } from "@/data/cities";
import { Post } from "@/types";

export default async function sitemap() {
  const cityRoutes = Object.keys(cities).map((slug) => ({
    url: `https://www.dwalt.net/${slug}`,
    lastModified: new Date(),
  }));

  let blogRoutes: { url: string; lastModified: Date }[] = [];

  try {
    const response = await fetch("https://api.dwalt.net/api/posts?limit=1000");
    const { data } = await response.json();
    blogRoutes = data.data.map((post: Post) => ({
      url: `https://www.dwalt.net/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt || new Date()),
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts for sitemap", error);
  }

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
    ...blogRoutes,
  ];
}
