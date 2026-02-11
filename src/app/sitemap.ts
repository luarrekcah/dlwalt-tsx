import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/lib/data/blog';
import axios from 'axios';

const BASE_URL = 'https://dwalt.net'; // Use env var in production

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

    let projectRoutes: MetadataRoute.Sitemap = [];
    try {
        // Fetch projects from API
        // Adjust URL based on environment or hardcode public API
        const { data } = await axios.get('https://api.dwalt.net/api/projects');
        let projects = [];
        if (Array.isArray(data.data)) {
            projects = data.data;
        } else if (data.data?.data && Array.isArray(data.data.data)) {
            projects = data.data.data;
        }

        projectRoutes = projects.map((project: any) => ({
            url: `${BASE_URL}/projetos/${project.id}`,
            lastModified: new Date(project.updatedAt || new Date()),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Failed to fetch projects for sitemap', error);
    }

    return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
