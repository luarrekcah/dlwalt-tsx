import React from "react";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import HeaderCarrossel from "@/components/HeaderCarrossel";
import Navbar from "@/components/Navbar";
import SectionFeatures from "@/components/SectionFeatures";
import SectionServices from "@/components/SectionServices";
import SectionTestimonial from "@/components/SectionTestimonial";
import FloatingWpp from "@/components/FloatingWhatsapp";
import SectionBlog from "@/components/SectionBlog";

import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  applicationName: company.name,
  publisher: company.name,
  title: company.seo.title,
  description: company.description,
  keywords: company.seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: company.seo.locale,
    url: "/",
    siteName: company.seo.siteName,
    title: "Energia Solar de Alta Performance",
    description: "Economize até 95% com sistemas de energia solar para casas e empresas em Rondônia.",
    images: [
      {
        url: company.seo.defaultImage,
        width: 1200,
        height: 630,
        alt: `Energia Solar — ${company.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.title.default,
    description: "Instalação de energia solar para sua casa ou empresa com economia real.",
    images: [company.seo.defaultImage],
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
  authors: [{ name: company.name }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

const Main = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: company.url,
    image: company.seo.defaultImage,
    logo: company.seo.defaultImage,
    telephone: company.contact.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.address.geo.latitude,
      longitude: company.address.geo.longitude,
    },
    sameAs: [
      company.social.facebook,
      company.social.instagram,
    ],
    description: "Projetos de energia solar com alta eficiência para residências e empresas. Instalação rápido e suporte especializado.",
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
        <SectionBlog />
        <SectionTestimonial />
        {/*SECTIONS*/}
        <FloatingWpp />
        <Footer />
      </div>
    </>
  );
};

export default Main;
