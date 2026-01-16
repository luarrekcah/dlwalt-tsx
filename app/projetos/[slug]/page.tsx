import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PROJECTS } from '@/lib/data/projects';
import { MapPin, Zap, ArrowLeft, BatteryCharging, PanelTop } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
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
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-2 text-lg text-gray-400">
                                <MapPin className="w-5 h-5 text-primary" />
                                {project.location}
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6">
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
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Potência</p>
                                        <p className="font-bold text-white">{project.size}</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <BatteryCharging className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Economia</p>
                                        <p className="font-bold text-white text-sm md:text-base">{project.savings}</p>
                                    </div>
                                    <div className="bg-black/50 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                        <PanelTop className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                                        <p className="text-xs text-gray-400 uppercase">Painéis</p>
                                        <p className="font-bold text-white">{project.panels}</p>
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
