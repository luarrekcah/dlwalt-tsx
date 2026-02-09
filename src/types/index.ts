export interface Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    thumbnailUrl?: string; // API might return this
    imageUrl?: string; // keeping for compatibility if mapped
    author?: string;
    category?: string;
    createdAt: string;
    updatedAt: string;
    status: 'draft' | 'published';
}

export interface PaginatedPosts {
    total: number;
    page: number;
    limit: number;
    data: Post[];
}
