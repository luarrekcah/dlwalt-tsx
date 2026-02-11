'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Zap, ArrowLeft, BatteryCharging, PanelTop } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/JsonLd';
import api from '@/lib/api';
import { notFound } from 'next/navigation';

interface Project {
    id: number;
    name: string;
    category: string;
    location: string;
    description: string;
    photos: string[];
    panelCount: number;
    kwp: string;
}

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default function ProjectDetailPage({ params }: Props) {
    // Unwrap params using React.use() or just await if in async component, but this is client component.
    // In Next.js 15 client components, params is a promise.
    // We can use `use` hook or just `useEffect`.
    // For simplicity and compatibility, I'll use `useEffect` and unwrap it if needed or just treat it as object if Next.js version allows (Next 13+ it's object, Next 15 it's promise).
    // The previous code verified it as Promise.

    // Let's use a standard useEffect to unwrap params and fetch.
    const [id, setId] = useState<string | null>(null);
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unwrapParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        };
        unwrapParams();
    }, [params]);

    useEffect(() => {
        if (!id) return;

        const fetchProject = async () => {
            try {
                const { data } = await api.get(`/projects/${id}`);
                setProject(data.data);
            } catch (error) {
                console.error("Failed to fetch project", error);
                // setProject(null); 
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-black text-white">
                <Header />
                <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
                    <p className="text-gray-500">Carregando detalhes do projeto...</p>
                </main>
                <Footer />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex flex-col min-h-screen bg-black text-white">
                <Header />
                <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
                        <Button asChild>
                            <Link href="/projetos">Voltar para projetos</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": project.name,
        "image": project.photos?.[0],
        "description": project.description,
        "brand": {
            "@type": "Brand",
            "name": "DWalt Energia"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <JsonLd data={jsonLd} />
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <Link href="/projetos" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Voltar para projetos
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase">
                                {project.category}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                {project.name}
                            </h1>
                            <div className="flex items-center gap-2 text-lg text-gray-400">
                                <MapPin className="w-5 h-5 text-primary" />
                                {project.location}
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6 whitespace-pre-line">
                                {project.description}
                            </p>

                            <div className="pt-8">
                                <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 h-12 rounded-full" asChild>
                                    <Link href="/calculadora-solar">
                                        Quero um projeto similar
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10 aspect-[4/3]">
                            <img
                                src={project.photos?.[0] || 'https://images.unsplash.com/photo-1548613053-220d938b8ca7?w=800&q=80'}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Potência</p>
                                        <p className="font-bold text-white">{project.kwp} kWp</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <BatteryCharging className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Economia</p>
                                        <p className="font-bold text-white text-sm md:text-base">-</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <PanelTop className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Painéis</p>
                                        <p className="font-bold text-white">{project.panelCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* More Sections could go here like Gallery, Testimonials etc */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
