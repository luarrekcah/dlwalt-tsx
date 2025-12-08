export interface Service {
  key: string;
  data: ServiceData;
}

interface ServiceData {
  id: number;
  title: string;
  desc: string;
  bannerSrc: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photoSrc: string;
  testimonial: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  status: string;
  excerpt: string;
  thumbnailUrl: string;
  author: Author;
  published: boolean;
  content: string;
  views: number;
  publishedAd: string;
};

export type Author = {
  id: number;
  name: string;
}