'use client';

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, Download, BarChart2, Bell, FileText, Camera, MessageSquare, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

export function AppShowcase() {
    const features = [
        { icon: BarChart2, text: "Acompanhar seus projetos em tempo real" },
        { icon: Bell, text: "Notificações instantâneas sobre o progresso" },
        { icon: FileText, text: "Acesso a todos os documentos e contratos" },
        { icon: Camera, text: "Galeria de fotos exclusiva da instalação" },
        { icon: MessageSquare, text: "Chat direto para dúvidas e chamados" },
        { icon: AlertTriangle, text: "Canal rápido para suporte técnico" },
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                                <Smartphone className="w-4 h-4" />
                                App Exclusivo Dwalt
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                O controle total da sua energia <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                                    na palma da mão
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Com o aplicativo <strong>Connect</strong>, você tem transparência total sobre seu projeto.
                                Acompanhe cada etapa, desde a aprovação até a geração de energia, sem sair de casa.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-white/5 transition-all hover:scale-105">
                                    <Download className="w-5 h-5" />
                                    Baixar na Play Store
                                </Button>
                                {/* Apple Store Button Placeholder if needed in future */}
                                {/* <Button variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 rounded-xl font-bold flex items-center gap-3">
                                    <Apple className="w-5 h-5" />
                                    App Store
                                </Button> */}
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Mockup Animation */}
                    <div className="lg:w-1/2 flex justify-center relative z-10">
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-[300px] h-[600px] bg-black border-[12px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden"
                        >
                            {/* Screen Content - Simulated App UI */}
                            <div className="absolute inset-0 bg-zinc-900 flex flex-col">
                                {/* Header */}
                                <div className="h-24 bg-primary p-6 flex items-end justify-between">
                                    <span className="text-black font-bold text-xl">Olá, Cliente</span>
                                    <div className="w-8 h-8 bg-black/20 rounded-full" />
                                </div>

                                {/* Production Graph Simulation */}
                                <div className="p-6 space-y-6">
                                    <div className="bg-zinc-800/50 p-4 rounded-2xl h-40 flex items-center justify-center border border-white/5 relative overflow-hidden">
                                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/20 to-transparent" />
                                        <span className="text-gray-500 text-xs uppercase tracking-widest relative z-10">Gráfico de Geração</span>
                                        {/* Simple SVG Line */}
                                        <svg className="absolute bottom-4 left-4 right-4 h-20 overflow-visible" viewBox="0 0 100 50">
                                            <path d="M0 50 Q 25 20 50 40 T 100 10" fill="none" stroke="#eab308" strokeWidth="3" />
                                        </svg>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-zinc-800/50 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                                            <FileText className="text-primary w-6 h-6" />
                                            <span className="text-white text-xs">Contratos</span>
                                        </div>
                                        <div className="bg-zinc-800/50 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2">
                                            <Camera className="text-primary w-6 h-6" />
                                            <span className="text-white text-xs">Fotos</span>
                                        </div>
                                    </div>

                                    {/* Notification */}
                                    <div className="bg-zinc-800/30 p-4 rounded-xl border-l-4 border-primary flex items-start gap-3">
                                        <div className="p-1 bg-yellow-500/10 rounded-full mt-1">
                                            <Bell className="w-3 h-3 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-bold">Instalação Concluída</p>
                                            <p className="text-gray-500 text-xs">Sua usina está pronta para gerar.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Action Button */}
                                <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                                    <MessageSquare className="w-6 h-6 text-black" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Glow Effect behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
