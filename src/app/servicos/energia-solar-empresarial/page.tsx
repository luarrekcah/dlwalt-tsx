
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Energia Solar para Empresas | Reduza Custos Fixos | ${company.name}`,
    description: "Aumente a competitividade da sua empresa reduzindo custos com energia. Projetos fotovoltaicos corporativos com alto ROI em Rondônia.",
    keywords: [
        "energia solar empresarial",
        "energia solar para empresas",
        "redução de custos empresa",
        "investimento energia solar",
        "energia solar industrial",
        "Dwalt Energia Solar",
    ],
    openGraph: {
        title: `Energia Solar Empresarial - Mais Lucro para seu Negócio | ${company.name}`,
        description: "Invista em sustentabilidade e economia. Sistemas de energia solar para indústrias, comércios e agronegócio.",
        url: `${company.url}/servicos/energia-solar-empresarial`,
        type: "website",
        images: [company.seo.defaultImage],
    },
};

export default function SolarEmpresarial() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Energia Solar Comercial e Industrial",
        provider: {
            "@type": "LocalBusiness",
            name: company.name,
            telephone: company.contact.phone.display,
        },
        areaServed: {
            "@type": "State",
            name: "Rondônia",
        },
        description: "Soluções de energia solar de alta potência para empresas e indústrias.",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="landing-page-wrapper">
                <LandingNavbar />

                {/* HERO SECTION */}
                <section className="lp-hero" style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h6 className="text-uppercase text-warning font-weight-bold mb-3">Soluções Corporativas</h6>
                                <h1>Reduza Custos Fixos e<br />Aumente seu Lucro</h1>
                                <p>Transforme a conta de energia da sua empresa em investimento. Payback acelerado e alta rentabilidade para seu negócio.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Solicitar Estudo de Viabilidade
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> WhatsApp Comercial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID */}
                <section className="lp-section-light pt-0">
                    <div className="container">
                        <div className="lp-features-grid">
                            <div className="lp-feature-card">
                                <i className="fas fa-chart-line lp-feature-icon"></i>
                                <h3>Alto ROI</h3>
                                <p>Retorno sobre o investimento superior à maioria das aplicações financeiras, com payback médio de 3 a 5 anos.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-file-invoice-dollar lp-feature-icon"></i>
                                <h3>Redução de OPEX</h3>
                                <p>Elimine um dos maiores custos fixos da sua operação e ganhe competitividade no preço final do seu produto.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-leaf lp-feature-icon"></i>
                                <h3>Marketing Verde</h3>
                                <p>Posicione sua marca como sustentável e atraia consumidores conscientes com a certificação de energia limpa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY US SECTION */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
                                <img src="/images/projects/project2.jpg" alt="Instalação Empresarial" className="img-fluid rounded shadow-lg" />
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <h2 className="mb-4 text-dark">Energia para Grandes Negócios</h2>
                                <p className="lead text-muted mb-4">Entendemos que sua empresa não pode parar. Por isso, oferecemos soluções robustas e confiáveis.</p>
                                <ul className="list-unstyled">
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Projetos de Alta Tensão</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Gestão de Energia e Monitoramento</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Desconto no Imposto de Renda (Depreciação)</span>
                                    </li>
                                </ul>
                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Falar com Consultor PJ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="lp-cta-strip">
                    <div className="container">
                        <h2>Invista no futuro da sua empresa</h2>
                        <p className="lead mb-4">Solicite uma análise gratuita das suas faturas de energia.</p>
                        <Link href="/contato" className="btn btn-light btn-lg font-weight-bold display-4">
                            Quero minha proposta
                        </Link>
                    </div>
                </section>

                {/* FOOTER SIMPLE */}
                <footer className="lp-footer text-center">
                    <div className="container">
                        <p>&copy; {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</p>
                        <p className="small text-muted">{company.address.full} | CNPJ: {company.cnpj}</p>
                    </div>
                </footer>

                <FloatingWpp />
            </div>
        </>
    );
}
