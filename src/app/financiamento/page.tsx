/* eslint-disable react/no-unescaped-entities */
import FinanciamentoComponent from "@/components/FinanciamentoComponent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financiamento para Energia Solar | D | Walt Engenharia",
  applicationName: "D | Walt Engenharia",
  publisher: "D | Walt Engenharia",
  description:
    "Financie seu sistema de energia solar com condições exclusivas. Facilite seu investimento com parcelas acessíveis, aprovação rápida e total suporte técnico.",
  keywords: [
    "financiamento energia solar",
    "energia solar",
    "parcelas energia solar",
    "crédito fotovoltaico",
    "financiamento fotovoltaico",
    "economia na conta de luz",
  ],
  openGraph: {
    title: "Financiamento para Energia Solar | Condições Exclusivas",
    description:
      "Descubra como financiar seu sistema de energia solar com condições especiais, economia imediata e parceiros financeiros confiáveis.",
    url: "https://www.dwalt.net/financiamento",
  },
};

const Financiamento = () => {
  return (
    <>
      <div className="body-inner">
        <Navbar />

        <section id="main-container" className="main-container py-16">
          <div className="container">
            <div className="row flex flex-col gap-12">
              {/* FORMULÁRIO */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-center mb-6">Solicite sua simulação gratuita</h2>
                <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
                  Preencha o formulário abaixo e receba uma simulação personalizada com valores, prazos e condições exclusivas.
                </p>
                <FinanciamentoComponent />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Financiamento;