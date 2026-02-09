'use client';

import React, { useState, useEffect } from 'react';
import { Star, MapPin, Play, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

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
        name: "Édson Lopes Leal",
        location: "Ariquemes - RO",
        image: "/testemunhas/edson.png",
        text: "Comprei o sistema de energia solar da DWalt Energia na Black Friday há 8 meses. Antes, minha conta de luz era em torno de R$ 800 e hoje pago apenas R$ 160, praticamente só a taxa mínima. Estou extremamente satisfeito com o resultado. Além disso, fui o ganhador do sorteio de um BYD Dolphin. Nunca tinha ganhado nada na vida, e agora ganhei um carro avaliado em mais de R$ 100 mil. Até hoje, ainda não caiu a ficha.",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/_dNoknmsouo" // Exemplo
    },
    {
        id: 2,
        name: "Joelma",
        location: "Rondônia",
        image: "/testemunhas/joelma.png",
        text: "Tenho o prazer de chegar em casa à noite e aproveitar o conforto que a energia solar me proporciona. A DWalt me ofereceu o melhor plano, explicou todo o processo presencialmente e transmitiu muita confiança. Realizei um sonho ao adquirir energia solar com a DWalt, escolhida pela credibilidade, pelo excelente atendimento e pelo bem-estar da minha família.",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/0P_d8ghlMww"
    },
    {
        id: 3,
        name: "Janaína Brito",
        location: "Rondônia",
        image: "/testemunhas/janaina.png",
        text: "Cliente da Dwalt Energia desde dezembro e super satisfeita! Além do atendimento impecável e suporte presencial, o resultado é incrível: ar-condicionado ligado o dia todo e zero preocupação com a conta de luz. Liberdade e economia de verdade!",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/3QNLMXys2L8"
    },
    {
        id: 4,
        name: "Cleberson do Tio Porquinho",
        location: "Rondônia",
        image: "/testemunhas/cleberson.png",
        text: "...",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/MkkH5T10tA8"
    },
    {
        id: 5,
        name: "Jeane Bastos",
        location: "Presidente Médici - Rondônia",
        image: "/testemunhas/jeane.png",
        text: "...",
        rating: 5,
        videoUrl: "https://www.youtube.com/embed/qW4rQUGwkC8"
    }
];

// Helper function to extract YouTube ID
const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

    // Default to Desktop (3 items) during SSR to avoid hydration mismatch if possible, 
    // or better, use a simpler conditional.
    // However, hooks run on client. 
    // To be safe with hydration:
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const itemsToShow = mounted ? (isDesktop ? 3 : isTablet ? 2 : 1) : 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + 1 > TESTIMONIALS.length - itemsToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? TESTIMONIALS.length - itemsToShow : prev - 1
        );
    };

    // Auto visual adjust if resizing window
    useEffect(() => {
        const maxIndex = TESTIMONIALS.length - itemsToShow;
        if (currentIndex > maxIndex) {
            setCurrentIndex(Math.max(0, maxIndex));
        }
    }, [itemsToShow, currentIndex]);

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

                <div className="relative group/slider">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                width: `${(TESTIMONIALS.length * 100) / itemsToShow}%`,
                            }}
                        >
                            {TESTIMONIALS.map((t) => {
                                const videoId = t.videoUrl ? getYouTubeId(t.videoUrl) : null;
                                const thumbnailUrl = videoId
                                    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                                    : `https://images.unsplash.com/photo-1548613053-220d938b8ca7?w=800&q=80`;
                                const embedUrl = videoId
                                    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
                                    : t.videoUrl;

                                return (
                                    <div
                                        key={t.id}
                                        className="px-4" // Use padding to simulate gap
                                        style={{ width: `${100 / TESTIMONIALS.length}%` }}
                                    >
                                        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col backdrop-blur-sm hover:border-primary/30 transition-colors group h-full">
                                            {/* Video Thumbnail if exists */}
                                            {t.videoUrl && (
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <div className="w-full aspect-video rounded-xl bg-zinc-800 mb-6 relative overflow-hidden cursor-pointer group/video border border-white/5">
                                                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors z-10" />
                                                            <img
                                                                src={thumbnailUrl}
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
                                                        <DialogTitle className="sr-only">Depoimento de {t.name}</DialogTitle>
                                                        <iframe
                                                            width="100%"
                                                            height="100%"
                                                            src={embedUrl}
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
                                            <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed line-clamp-6">"{t.text}"</p>

                                            {/* Author Profile */}
                                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20 object-cover" />
                                                <div>
                                                    <h4 className="font-bold text-white leading-tight mb-1">{t.name}</h4>
                                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                                        <MapPin className="w-3 h-3 text-primary" />
                                                        <span>{t.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors z-20"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors z-20"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: TESTIMONIALS.length - itemsToShow + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Ir para a página ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
