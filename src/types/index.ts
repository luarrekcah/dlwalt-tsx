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

export interface Project {
    id: number;
    name: string;
    category: string;
    location: string;
    description: string;
    photos: string[];
    panelCount: number;
    kwp: number;
    createdAt?: string; // Optional as not confirmed in verified files
}

export interface PaginatedProjects {
    total: number;
    page: number;
    limit: number;
    data: Project[];
}

export interface Testimonial {
    id: number;
    name: string;
    location: string;
    avatar: string;
    testimonial: string;
    stars: number;
    url: string;
}

export interface CreditAnalysis {
    id: number;
    status: string;
    energyBillValue: number;
    fullName: string;
    phone: string;
    cpf: string;
    email?: string;
    createdAt: string;
    monthlyIncome: number;
    propertyType: string;
    city: string;
    state: string;
}
