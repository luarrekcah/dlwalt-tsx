import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsOfUsePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 pb-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Termos de Uso</h1>

                    <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
                        <h2 className="text-2xl font-semibold text-slate-800">1. Termos</h2>
                        <p>
                            Ao acessar ao site DWalt Energia, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">2. Uso de Licença</h2>
                        <p>
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site DWalt Energia , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modificar ou copiar os materiais;</li>
                            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site DWalt Energia;</li>
                            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                            <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-slate-800">3. Isenção de responsabilidade</h2>
                        <p>
                            Os materiais no site da DWalt Energia são fornecidos 'como estão'. DWalt Energia não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                        </p>

                        <h2 className="text-2xl font-semibold text-slate-800">4. Limitações</h2>
                        <p>
                            Em nenhum caso o DWalt Energia ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em DWalt Energia, mesmo que DWalt Energia ou um representante autorizado da DWalt Energia tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
