'use client';

import React, { useState } from 'react';
import { Star, MapPin, Play, Quote } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Testimonial {
    id: number;
    name: string;
    location: string;
    image: string;
    text: string;
    rating?: number;
    videoUrl?: string; // YouTube Embed URL
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Carlos Eduardo",
        location: "Ariquemes - RO",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "A equipe da DWalt foi fantástica. Desde o primeiro atendimento até a instalação final, tudo foi muito transparente. A economia na conta de luz já no primeiro mês foi surpreendente!",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=TESTE" // Exemplo
    },
    {
        id: 2,
        name: "Fernanda Lima",
        location: "Porto Velho - RO",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Instalei o sistema na minha empresa e o retorno sobre o investimento superou as expectativas. O aplicativo Connect é muito útil para acompanhar a geração diária.",
        rating: 5
    },
    {
        id: 3,
        name: "Roberto Campos",
        location: "Ji-Paraná - RO",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        text: "Profissionalismo nota 10. Os engenheiros explicaram tudo detalhadamente e o pós-venda é excelente. Recomendo de olhos fechados para quem quer economia e sustentabilidade.",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=TESTE"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <Quote className="w-4 h-4" />
                        O que dizem nossos clientes
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Histórias de quem já <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                            gera a própria energia
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col backdrop-blur-sm hover:border-primary/30 transition-colors group">
                            {/* Video Thumbnail if exists */}
                            {t.videoUrl && (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="w-full aspect-video rounded-xl bg-zinc-800 mb-6 relative overflow-hidden cursor-pointer group/video border border-white/5">
                                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors z-10" />
                                            <img
                                                // Placeholder thumbnail generation based on reliable source or just using a generic solar image
                                                src={`https://images.unsplash.com/photo-1548613053-220d938b8ca7?w=800&q=80`}
                                                className="w-full h-full object-cover opacity-60"
                                                alt="Thumbnail do depoimento"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover/video:scale-110 transition-transform">
                                                    <Play className="w-5 h-5 text-black fill-black ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="bg-black border-zinc-800 p-0 overflow-hidden max-w-4xl aspect-video">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={t.videoUrl}
                                            title={`Depoimento de ${t.name}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </DialogContent>
                                </Dialog>
                            )}

                            {/* Stars */}
                            {t.rating && (
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            )}

                            {/* Text */}
                            <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">"{t.text}"</p>

                            {/* Author Profile */}
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                                <div>
                                    <h4 className="font-bold text-white leading-tight mb-1">{t.name}</h4>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <MapPin className="w-3 h-3 text-primary" />
                                        <span>{t.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
