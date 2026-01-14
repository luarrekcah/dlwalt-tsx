
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Integração Banco BV — Financiamento para Energia Solar | ${company.name}`,
  applicationName: company.name,
  publisher: company.name,
  description:
    "Financie seu sistema de energia solar com condições exclusivas pelo Banco BV. Facilite seu investimento com parcelas acessíveis e aprovação rápida.",
  keywords: [
    "financiamento energia solar",
    "banco BV energia solar",
    "parcelas energia solar",
    "crédito fotovoltaico BV"
  ],
  openGraph: {
    title: "Integração Banco BV — Financiamento para Energia Solar",
    description:
      "Conheça as condições especiais do Banco BV para financiar seu sistema de energia solar.",
    url: `${company.url}/ferramentas/banco-bv`,
  },
};


const BVBank = () => {
  return (
    <>
      <div className="body-inner">
        <Navbar />
        <section id="main-container" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-12">Integração OFF-LINE</div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BVBank;
