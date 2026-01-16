'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sun, DollarSign, Zap, ArrowRight, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SolarCalculatorPage() {
    const [bill, setBill] = useState('');
    const [state, setState] = useState('');
    const [result, setResult] = useState<{
        systemSize: number;
        monthlySavings: number;
        annualSavings: number;
        panels: number;
        payback: number;
    } | null>(null);

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        const billValue = parseFloat(bill);
        if (!billValue || !state) return;

        // Simplified Logic
        const kwhPrice = 0.95; // Avg Price
        const monthlyKwh = billValue / kwhPrice;
        const generationFactor = 130; // kWh/kWp/month (approx)

        const systemSize = monthlyKwh / generationFactor;
        const monthlySavings = billValue * 0.95; // 95% savings
        const systemCost = systemSize * 3800; // R$ 3800/kWp
        const paybackYears = systemCost / (monthlySavings * 12);
        const panels = Math.ceil(systemSize / 0.55); // 550W panels

        setResult({
            systemSize,
            monthlySavings,
            annualSavings: monthlySavings * 12,
            panels,
            payback: paybackYears
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            Simulador Inteligente
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Descubra seu Potencial de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Economia Solar</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Utilize nossa calculadora para estimar o tamanho do sistema ideal para sua casa ou empresa e veja quanto você pode economizar.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Simulator Form */}
                        <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Sun className="text-yellow-500" />
                                Seus Dados
                            </h2>
                            <form onSubmit={calculate} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Valor Médio da Conta de Luz (R$)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                                        <input
                                            type="number"
                                            value={bill}
                                            onChange={(e) => setBill(e.target.value)}
                                            placeholder="Ex: 500"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Estado</label>
                                    <select
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                                        required
                                    >
                                        <option value="" className="bg-black">Selecione seu estado...</option>
                                        <option value="SP" className="bg-black">São Paulo</option>
                                        <option value="MG" className="bg-black">Minas Gerais</option>
                                        <option value="RJ" className="bg-black">Rio de Janeiro</option>
                                        <option value="PR" className="bg-black">Paraná</option>
                                        <option value="SC" className="bg-black">Santa Catarina</option>
                                        <option value="RS" className="bg-black">Rio Grande do Sul</option>
                                        <option value="Other" className="bg-black">Outro</option>
                                    </select>
                                </div>

                                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity text-white">
                                    Calcular Agora
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </form>
                        </div>

                        {/* Results Display */}
                        <div className="lg:col-span-7">
                            {!result ? (
                                <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-3xl border-dashed">
                                    <Sun className="w-16 h-16 text-white/10 mb-4" />
                                    <p className="text-xl text-gray-500 font-medium text-center">
                                        Preencha os dados ao lado para ver <br /> sua estimativa personalizada.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    {/* Highlights */}
                                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Economia Mensal Estimada</p>
                                        <p className="text-5xl md:text-7xl font-extrabold text-white mb-2">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.monthlySavings)}
                                        </p>
                                        <p className="text-gray-400">
                                            Isso representa uma economia anual de <strong className="text-white">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.annualSavings)}</strong>.
                                        </p>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-500">
                                                <Zap className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Potência Necessária</p>
                                                <p className="text-2xl font-bold text-white">{result.systemSize.toFixed(2)} kWp</p>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-yellow-500/20 text-yellow-400">
                                                <Sun className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Média de Placas</p>
                                                <p className="text-2xl font-bold text-white">~{result.panels} unidades</p>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
                                            <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                                                <Wallet className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Payback Estimado</p>
                                                <p className="text-2xl font-bold text-white">{result.payback.toFixed(1)} anos</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-gray-400 mb-4">Gostou da estimativa? Solicite um orçamento oficial com nossos engenheiros.</p>
                                        <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-black">
                                            Solicitar Proposta Detalhada
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
