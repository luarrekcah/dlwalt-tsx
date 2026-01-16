'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, PiggyBank, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FinancingSimulatorPage() {
    const [amount, setAmount] = useState('');
    const [installments, setInstallments] = useState('60');
    const [result, setResult] = useState<{
        monthlyPayment: number;
        totalPayment: number;
    } | null>(null);

    const calculate = (e: React.FormEvent) => {
        e.preventDefault();
        const loanAmount = parseFloat(amount);
        const months = parseInt(installments);
        if (!loanAmount || !months) return;

        // Simplified Financing Logic (Price Table with monthly interest)
        const annualRate = 0.18; // 18% a.a example
        const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;

        // PMT formula
        const pmt = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

        setResult({
            monthlyPayment: pmt,
            totalPayment: pmt * months
        });
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                            <PiggyBank className="w-4 h-4" />
                            Facilidade Financeira
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Energia Solar que Cabe <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">No Seu Bolso</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Simule seu financiamento e descubra como trocar sua conta de luz por uma parcela fixa que acaba em poucos anos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Calculator className="w-6 h-6 text-green-400" />
                                Parâmetros da Simulação
                            </h2>
                            <form onSubmit={calculate} className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300">Valor do Sistema</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">R$</span>
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Ex: 25000"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 transition-colors text-lg"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300">Prazo de Pagamento</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[12, 36, 48, 60, 72, 84].map(opt => (
                                            <button
                                                type="button"
                                                key={opt}
                                                onClick={() => setInstallments(opt.toString())}
                                                className={cn(
                                                    "py-3 rounded-xl font-medium text-sm transition-all duration-200 border",
                                                    installments === opt.toString()
                                                        ? 'bg-green-600 border-green-500 text-white shadow-lg shadow-green-900/20'
                                                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                                )}
                                            >
                                                {opt}x
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <Button type="submit" className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-900/20 transition-all">
                                    Calcular Parcelas
                                </Button>
                            </form>
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center bg-black/20">
                            {!result ? (
                                <div className="text-center text-gray-500">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                                        <PiggyBank className="w-10 h-10 text-gray-600" />
                                    </div>
                                    <p className="text-lg">Preencha os valores para visualizar <br /> o plano de pagamento.</p>
                                </div>
                            ) : (
                                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-2">Valor da Parcela</p>
                                        <p className="text-5xl lg:text-6xl font-extrabold text-green-400">
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.monthlyPayment)}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">Mensais fixas</p>
                                    </div>

                                    <div className="flex items-center justify-center gap-4">
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                                            <Calendar className="w-4 h-4" />
                                            <span>{installments} meses</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span>Sem Entrada</span>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10">
                                        <div className="flex justify-between items-center text-sm text-gray-400 mb-6 px-4">
                                            <span>Total Financiado:</span>
                                            <span className="text-white font-bold">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(result.totalPayment)}</span>
                                        </div>

                                        <Button className="w-full h-12 bg-white text-black hover:bg-gray-200 font-bold rounded-xl" onClick={() => window.open('https://wa.me/', '_blank')}>
                                            Falar com Consultor
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
