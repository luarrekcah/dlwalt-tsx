
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Engenharia Elétrica e Projetos | Soluções Técnicas | ${company.name}`,
    description: "Projetos elétricos residenciais, comerciais e industriais. Engenharia especializada, laudos e consultoria técnica em Rondônia.",
    keywords: [
        "engenharia elétrica",
        "projetos elétricos",
        "laudo técnico elétrico",
        "consultoria energia",
        "projeto fotovoltaico engenheiro",
        "Dwalt Engenharia",
    ],
    openGraph: {
        title: `Engenharia Elétrica e Projetos - Segurança e Técnica | ${company.name}`,
        description: "Soluções completas em engenharia elétrica. Projetos, laudos e execuções com responsabilidade técnica.",
        url: `${company.url}/servicos/engenharia-eletrica-projetos`,
        type: "website",
        images: [company.seo.defaultImage],
    },
};

export default function EngenhariaEletrica() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Engenharia Elétrica e Projetos",
        provider: {
            "@type": "LocalBusiness",
            name: company.name,
            telephone: company.contact.phone.display,
        },
        areaServed: {
            "@type": "State",
            name: "Rondônia",
        },
        description: "Serviços de engenharia elétrica, projetos e consultoria técnica.",
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
                                <h1>Engenharia Elétrica de<br />Alta Complexidade</h1>
                                <p>Soluções técnicas completas para sua obra. Projetos, laudos, subestações e consultoria com quem entende do assunto.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Solicitar Proposta
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Falar com Engenheiro
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
                                <i className="fas fa-pencil-ruler lp-feature-icon"></i>
                                <h3>Projetos Elétricos</h3>
                                <p>Dimensionamento seguro e eficiente para residências, condomínios, indústrias e comércios, seguindo a NBR 5410.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-clipboard-check lp-feature-icon"></i>
                                <h3>Laudos Técnicos</h3>
                                <p>Vistoria e emissão de laudos para regularização junto aos bombeiros (SPDA), seguradoras e concessionárias.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-bolt lp-feature-icon"></i>
                                <h3>Subestações</h3>
                                <p>Projeto, execução e manutenção de subestações de média tensão para grandes consumidores de energia.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY US SECTION */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
                                <div className="p-5 bg-white shadow-lg rounded">
                                    <h3 className="mb-4">Responsabilidade Técnica</h3>
                                    <p>Toda obra elétrica exige um responsável técnico (ART). Na Dwalt, garantimos a segurança jurídica e física do seu empreendimento.</p>
                                    <p className="mb-0">Não arrisque seu patrimônio com instalações amadoras. Contrate engenharia de verdade.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <h2 className="mb-4 text-dark">Além da Energia Solar</h2>
                                <ul className="list-unstyled">
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Eficiência Energética e Correção de Fator de Potência</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Padrão de Entrada de Energia (Individual e Coletivo)</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Automação Residencial e Industrial</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3"></i>
                                        <span>Consultoria para Mercado Livre de Energia</span>
                                    </li>
                                </ul>
                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Consultar Engenheiro
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="lp-cta-strip">
                    <div className="container">
                        <h2>Precisa regularizar sua obra?</h2>
                        <p className="lead mb-4">Entre em contato para emissão de laudos e projetos aprovados.</p>
                        <Link href="/contato" className="btn btn-light btn-lg font-weight-bold display-4">
                            Solicitar Orçamento
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
