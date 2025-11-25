/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import { getAllItems } from "../../services/database";
import Footer from "../components/Footer";
import HeaderCarrossel from "../components/HeaderCarrossel";
import HelmetHeader from "../components/HelmetHeader";
import Navbar from "../components/Navbar";
import SectionAbout from "./components/SectionAbout";
import SectionFeatures from "./components/SectionFeatures";
import SectionProjects from "./components/SectionProjects";
import SectionServices from "./components/SectionServices";
import SectionTestimonial from "./components/SectionTestimonial";
import SectionBYD from "./components/SectionBYD";

const Main = () => {
  const [projects, setProjects] = React.useState<any[]>([]);
  const whatsRef = React.useRef<any>(null);

  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

  React.useEffect(() => {
    getAllItems("dlwalt/projects").then((response: any) => {
      setProjects(response);
    });
    setTimeout(() => {
      if (whatsRef.current) {
        const button = whatsRef.current.querySelector(
          ".floating-whatsapp-button"
        );
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
      <HelmetHeader
        title={`Página Principal`}
        description="Somos a D | Walt Engenharia, empresa especializada em Energia Solar, entre no nosso site para nos conhecer melhor!"
      />
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
      <div ref={whatsRef}>
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
      </div>

      <Footer />
    </div>
  );
};

export default Main;
function fbq(arg0: string, action: any) {
  throw new Error("Function not implemented.");
}
