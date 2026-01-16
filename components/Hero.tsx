"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sun } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="home"
            ref={ref}
            className="relative flex h-screen min-h-[800px] w-full items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 h-[120%] w-full"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
                {/* Placeholder for actual Solar Panel Image */}
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2664&auto=format&fit=crop")',
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="container relative z-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
                >
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-white">
                        Energia limpa para um futuro sustentável
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    Transforme o Sol em <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                        Economia Real
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl"
                >
                    Reduza sua conta de luz em até 95% e valorize seu imóvel.
                    Projetos personalizados para residências, condomínios e empresas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                    <Button size="lg" className="text-lg h-14 px-8 rounded-full">
                        Simular Economia
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-lg h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                        Conheça Nossos Projetos
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-white/50 uppercase tracking-widest">ROLE PARA BAIXO</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
