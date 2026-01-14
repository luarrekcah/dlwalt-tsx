
/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `Media Kit — ${company.name}`,
  applicationName: company.name,
  publisher: company.name,
  description:
    `Logotipos, diretrizes de marca e materiais oficiais da ${company.name}. Baixe o media kit atualizado para uso institucional.`,
  keywords: [
    "media kit D Walt",
    "identidade visual D Walt",
    "marca D Walt",
    "logotipos D Walt"
  ],
  openGraph: {
    title: `Media Kit — ${company.name}`,
    description:
      "Baixe materiais oficiais, logotipos e diretrizes da marca.",
    url: `${company.url}/ferramentas/mediakit`,
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
              <div className="col-12">Clique abaixo para baixar o mediakit:
                <a href="/mediaKit.rar" target="_blank" rel="noopener noreferrer">Download Mediakit</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default BVBank;
