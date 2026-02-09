import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Shield className="w-4 h-4" />
                            Transparência e Segurança
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Política de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-100">Privacidade</span>
                        </h1>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="prose prose-lg prose-invert max-w-none
                            prose-headings:text-white prose-headings:font-bold
                            prose-p:text-gray-300 prose-p:leading-relaxed
                            prose-strong:text-white prose-ul:text-gray-300">

                            <p>
                                A sua privacidade é importante para nós. É política da DWalt Energia respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site DWalt Energia, e outros sites que possuímos e operamos.
                            </p>

                            <h2>1. Informações que coletamos</h2>
                            <p>
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            </p>

                            <h2>2. Uso de informações</h2>
                            <p>
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            </p>

                            <h2>3. Compartilhamento de dados</h2>
                            <p>
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            </p>

                            <h2>4. Cookies</h2>
                            <p>
                                O nosso site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com o uso de cookies.
                            </p>

                            <p className="text-sm text-gray-500 pt-8 border-t border-white/10 mt-8">
                                Esta política é efetiva a partir de Janeiro/2026.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
