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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-100">
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
                                <Button className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-white/5 transition-all hover:scale-105" onClick={()=> {alert("Ainda estamos trabalhando na disponibilização do app, por favor, aguarde!")}}>
                                    <Download className="w-5 h-5" />
                                    Baixar na Google Play
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
                            className="relative z-10"
                        >
                            <img
                                src="/app/celular.webp"
                                alt="App Connect Dwalt"
                                className="w-full max-w-[320px] h-auto drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Glow Effect behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-3xl -z-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}
