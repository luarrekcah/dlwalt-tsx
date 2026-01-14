import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Calculadora Solar Fotovoltaica | Simule sua Economia",
    description:
        "Descubra quanto você pode economizar com energia solar. Nossa calculadora solar fotovoltaica gratuita estima custos do sistema e retorno do investimento (payback).",
    keywords: [
        "calculadora solar",
        "energia solar",
        "simulador fotovoltaico",
        "custo energia solar",
        "economia conta de luz",
        "painel solar preço",
        "d walt energia",
    ],
    authors: [{ name: "DWALT Energia" }],
    creator: "DWALT Energia",
    publisher: "DWALT Energia",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://www.dwalt.net/calculadora-solar",
    },
    openGraph: {
        title: "Calculadora Solar Gratuita | Simule seu Projeto Fotovoltaico | DWALT Energia",
        description:
            "Faça uma simulação instantânea e descubra o tamanho do sistema ideal e a economia gerada pela energia solar na sua casa ou empresa.",
        url: "https://www.dwalt.net/calculadora-solar",
        siteName: "DWALT Energia",
        images: [
            {
                url: "/images/og-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Calculadora de Energia Solar DWALT",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Calculadora Solar Gratuita | Economize Energia",
        description:
            "Simule agora seu projeto de energia solar e pare de pagar caro na conta de luz.",
        images: ["/images/og-calculator.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora Solar D Walt",
    url: "https://www.dwalt.net/calculadora-solar",
    description:
        "Ferramenta gratuita para simulação de custos e economia com sistemas de energia solar fotovoltaica.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
    },
    author: {
        "@type": "Organization",
        name: "D Walt Energia Solar",
        url: "https://www.dwalt.net",
    },
};

export default function SolarCalculatorPage() {
    // Assuming affiliateParent might come from cookies or params in a real Scenario, 
    // currently just passing undefined or a placeholder if needed.
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <CalculatorClient />
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
}
