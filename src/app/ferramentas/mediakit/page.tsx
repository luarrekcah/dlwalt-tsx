"use client";

/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit — D | Walt Engenharia",
  description:
    "Logotipos, diretrizes de marca e materiais oficiais da D | Walt Engenharia. Baixe o media kit atualizado para uso institucional.",
  keywords: [
    "media kit D Walt",
    "identidade visual D Walt",
    "marca D Walt",
    "logotipos D Walt"
  ],
  openGraph: {
    title: "Media Kit — D | Walt Engenharia",
    description:
      "Baixe materiais oficiais, logotipos e diretrizes da marca.",
    url: "https://www.dwalt.net/ferramentas/mediakit",
  },
};


const BVBank = () => {
  return (
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
  );
};

export default BVBank;
