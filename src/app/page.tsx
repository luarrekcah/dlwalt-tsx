import React from "react";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import HeaderCarrossel from "@/components/HeaderCarrossel";
import Navbar from "@/components/Navbar";
import SectionFeatures from "@/components/SectionFeatures";
import SectionServices from "@/components/SectionServices";
import SectionTestimonial from "@/components/SectionTestimonial";
import FloatingWpp from "@/components/FloatingWhatsapp";

export const metadata: Metadata = {
  title: "D | Walt Engenharia — Energia Solar de Alta Performance",
  description:
    "Economize até 95% na conta de luz com projetos de energia solar personalizados para residências e empresas. Instalação rápida, suporte especializado e máxima eficiência.",
  keywords: [
    "energia solar",
    "painéis solares",
    "economizar energia",
    "energia fotovoltaica",
    "energia solar para residência",
    "energia solar para empresas",
    "instalação de energia solar",
    "D Walt Engenharia",
  ],
  openGraph: {
    title: "D | Walt Engenharia — Energia Solar de Alta Performance",
    description:
      "Energia solar para residências e empresas, com economia real e suporte especializado. Descubra como reduzir seus custos hoje!",
    url: "https://www.dwalt.net/",
    siteName: "D | Walt Engenharia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D | Walt Engenharia - Energia Solar",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

const Main = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "D | Walt Engenharia",
    url: "https://www.dlwalt.com/",
    logo: "/images/ogimages/index.jpg",
    sameAs: [
      "https://www.facebook.com/dlwalt",
      "https://www.instagram.com/dlwalt.engenharia/",
    ],
    description:
      "Somos a D | Walt Engenharia, empresa especializada em Energia Solar, entre no nosso site para nos conhecer melhor!",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.dlwalt.com/pesquisa?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <div className="body-inner">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <Navbar />
        <HeaderCarrossel />
        {/*SECTIONS*/}
        {/**
         * DEPOIMENTOS
         *
         * <SectionAbout />
         */}
        <SectionFeatures />
        <SectionServices />
        {/**<SectionProjects data={projects} /> */}
        <SectionTestimonial />
        {/*SECTIONS*/}
        <FloatingWpp />
        <Footer />
      </div>
    </>
  );
};

export default Main;
