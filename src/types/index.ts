export interface Service {
  key: string;
  data: ServiceData
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