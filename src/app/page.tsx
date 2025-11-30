/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";

import Navbar from "../components/Navbar";
import SectionFeatures from "@/components/SectionFeatures";
import SectionServices from "@/components/SectionServices";
import SectionTestimonial from "@/components/SectionTestimonial";
import Image from "next/image";
import { Metadata } from "next";


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
    "D Walt Engenharia"
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
  const [projects, setProjects] = React.useState<Array<unknown>>([]);
  const whatsRef = React.useRef<HTMLDivElement>(null);

  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

  React.useEffect(() => {
    setTimeout(() => {
      if (whatsRef.current) {
        const button = whatsRef.current.querySelector(
          ".floating-whatsapp-button"
        ) as HTMLButtonElement;
        if (button) button.click();
      }
    }, 1000); // delay opcional
  }, []);

  const handleWhatsClick = (action: any) => {
    if (typeof fbq !== "undefined") {
      fbq("track", action);
    }
  };

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
      {isMobile ? (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 999,
          }}
        >
          {/* Balão de mensagem */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "8px 14px",
              borderRadius: "20px",
              fontSize: "14px",
              color: "#333",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            Vamos fazer seu orçamento?
          </div>

          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/5569993695702?text=Olá!%20Quero%20realizar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsClick("ClicouWhatsApp")}
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#25D366",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={32}
              height={32}
            />
          </a>
        </div>
      ) : (
        <FloatingWhatsApp
          phoneNumber="+5569993695702"
          accountName="Atendimento D | Walt"
          placeholder="Olá! Preciso de um orçamento de 500kW"
          chatMessage="Vamos realizar seu orçamento agora mesmo?"
          statusMessage="Geralmente responde em 5 minutos"
          onClick={() => {
            handleWhatsClick("ClicouWhatsApp");
          }}
          onSubmit={() => {
            handleWhatsClick("EnviouWhatsApp");
          }}
          avatar="https://firebasestorage.googleapis.com/v0/b/banco-geral-412b6.appspot.com/o/popup.png?alt=media&token=d684ed46-a3cb-4c6e-a496-1ed47955d27f"
          buttonStyle={{
            width: isMobile ? 48 : 60,
            height: isMobile ? 48 : 60,
          }}
          chatboxHeight={isMobile ? 260 : 320}
        />
      )}

      <Footer />
    </div>
  );
};

export default Main;
