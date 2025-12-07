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
  metadataBase: new URL("https://www.dwalt.net"),
  applicationName: "D | Walt Engenharia",
  publisher: "D | Walt Engenharia",
  title: {
    default: "D | Walt Engenharia — Energia Solar de Alta Performance",
    template: "%s | D | Walt Engenharia",
  },
  description:
    "Economize até 95% na conta de luz com energia solar de alta performance. Projetos residenciais e empresariais, instalação rápida, suporte especializado e máxima eficiência.",
  keywords: [
    "energia solar",
    "painéis solares",
    "energia fotovoltaica",
    "energia solar Rondônia",
    "instalação de energia solar",
    "energia solar residência",
    "empresa energia solar",
    "D Walt Engenharia",
  ],
  alternates: {
    canonical: "https://www.dwalt.net/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.dwalt.net/",
    siteName: "D | Walt Engenharia",
    title: "Energia Solar de Alta Performance",
    description:
      "Economize até 95% com sistemas de energia solar para casas e empresas em Rondônia.",
    images: [
      {
        url: "https://www.dwalt.net/images/ogimages/index.webp",
        width: 1200,
        height: 630,
        alt: "Energia Solar — D Walt Engenharia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D | Walt Engenharia — Energia Solar de Alta Performance",
    description:
      "Instalação de energia solar para sua casa ou empresa com economia real.",
    images: ["https://www.dwalt.net/images/ogimages/index.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "D | Walt Engenharia" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

const Main = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "D | Walt Engenharia",
    url: "https://www.dwalt.net/",
    image: "https://www.dwalt.net/images/ogimages/index.webp",
    logo: "https://www.dwalt.net/images/ogimages/index.webp",
    telephone: "+55 69 99369-5702",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Canaã, 2500 - St. 03",
      addressLocality: "Ariquemes",
      addressRegion: "RO",
      postalCode: "76870-164",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -9.913696862508708,
      longitude: -63.043418643413105,
    },
    sameAs: [
      "https://www.facebook.com/dlwalt",
      "https://www.instagram.com/dlwalt_energia",
    ],
    description:
      "Projetos de energia solar com alta eficiência para residências e empresas. Instalação rápido e suporte especializado.",
    areaServed: "Rondônia",
    priceRange: "$$",
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
