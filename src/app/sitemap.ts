import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/data/blog';
import { PROJECTS } from '@/lib/data/projects';

const BASE_URL = 'https://dwalt.net'; // Use env var in production

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/blog',
        '/projetos',
        '/calculadora-solar',
        '/simular-financiamento',
        '/unidades',
        '/politica-de-privacidade',
        '/termos-de-uso'
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(), // Should come from post.date if possible
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const projectRoutes = PROJECTS.map((project) => ({
        url: `${BASE_URL}/projetos/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
