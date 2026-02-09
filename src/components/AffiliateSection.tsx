"use client";

import { Button } from "@/components/ui/button";
import { Users, DollarSign, TrendingUp, ArrowRight } from "lucide-react";

export function AffiliateSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                            <Users className="w-4 h-4" />
                            Programa de Afiliados
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Indique DWalt e <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                Ganhe Comissões
                            </span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                            Transforme sua rede de contatos em uma fonte de renda extra.
                            Indique clientes para a DWalt Energia e receba comissões atrativas por cada projeto fechado.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <DollarSign className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Renda Extra</h3>
                                    <p className="text-sm text-gray-500">Ganhos ilimitados baseados no seu desempenho.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Crescimento</h3>
                                    <p className="text-sm text-gray-500">Acompanhe suas indicações em tempo real.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button
                                className="h-14 px-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all text-lg group"
                                onClick={() => window.open('https://afiliados.dwalt.net', '_blank')}
                            >
                                Quero ser um Afiliado
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Visual/Image */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20" />
                        <div className="relative bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                            <div className="grid gap-6">
                                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">JD</div>
                                        <div>
                                            <p className="text-white font-medium">João D.</p>
                                            <p className="text-xs text-gray-500">Novo Afiliado</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-bold">+ R$ 1.500,00</span>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 opacity-80">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">MS</div>
                                        <div>
                                            <p className="text-white font-medium">Maria S.</p>
                                            <p className="text-xs text-gray-500">Parceira Ouro</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-bold">+ R$ 3.200,00</span>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 opacity-60">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">RL</div>
                                        <div>
                                            <p className="text-white font-medium">Rafael L.</p>
                                            <p className="text-xs text-gray-500">Indicou 3 projetos</p>
                                        </div>
                                    </div>
                                    <span className="text-green-400 text-sm font-bold">+ R$ 4.500,00</span>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm">Junte-se a centenas de parceiros que já estão lucrando com a energia solar.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
