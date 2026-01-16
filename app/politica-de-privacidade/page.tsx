import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidade</h1>

                    <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
                        <p>
                            A sua privacidade é importante para nós. É política da DWalt Energia respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site DWalt Energia, e outros sites que possuímos e operamos.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">1. Informações que coletamos</h2>
                        <p>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">2. Uso de informações</h2>
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">3. Compartilhamento de dados</h2>
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">4. Cookies</h2>
                        <p>
                            O nosso site usa cookies para melhorar a experiência do usuário. Ao continuar navegando, você concorda com o uso de cookies.
                        </p>

                        <p className="mt-8 text-sm text-gray-500">
                            Esta política é efetiva a partir de Janeiro/2026.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
