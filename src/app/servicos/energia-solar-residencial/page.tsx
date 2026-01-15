
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Energia Solar Residencial | Economia para sua Casa | ${company.name}`,
    description: "Reduza sua conta de luz em até 95% com energia solar residencial. Valorização do imóvel, sustentabilidade e instalação rápida em Rondônia.",
    keywords: [
        "energia solar residencial",
        "painel solar para casa",
        "economia de energia",
        "energia solar Rondônia",
        "instalação solar residencial",
        "financiamento solar casa",
    ],
    openGraph: {
        title: `Energia Solar Residencial - Economize em Casa | ${company.name}`,
        description: "Transforme sua casa com energia solar. Economia de até 95% na conta de luz e valorização do seu patrimônio.",
        url: `${company.url}/servicos/energia-solar-residencial`,
        type: "website",
        images: [company.seo.defaultImage],
    },
};

export default function SolarResidencial() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Energia Solar Residencial",
        provider: {
            "@type": "LocalBusiness",
            name: company.name,
            address: {
                "@type": "PostalAddress",
                streetAddress: company.address.street,
                addressLocality: company.address.city,
                addressRegion: company.address.state,
            },
            telephone: company.contact.phone.display,
        },
        areaServed: {
            "@type": "State",
            name: "Rondônia",
        },
        description: "Instalação de sistemas de energia solar para residências com foco em economia.",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="landing-page-wrapper">
                <LandingNavbar />

                {/* HERO SECTION */}
                <section className="lp-hero" style={{ backgroundImage: "url(/images/banner/banner1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1>Energia Solar para<br />Sua Casa e Família</h1>
                                <p>Pare de alugar energia da concessionária. Gere sua própria energia limpa e economize até 95% na conta de luz todos os meses.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Quero Economizar Agora
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Receber Proposta
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
                                <i className="fas fa-piggy-bank lp-feature-icon"></i>
                                <h3>Economia Real</h3>
                                <p>Reduza sua conta de energia para a taxa mínima e proteja seu orçamento contra os aumentos anuais da tarifa.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-home lp-feature-icon"></i>
                                <h3>Valorização</h3>
                                <p>Imóveis com energia solar são valorizados em até 10% no mercado e têm maior liquidez na hora da venda.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-solar-panel lp-feature-icon"></i>
                                <h3>Durabilidade</h3>
                                <p>Painéis com 25 anos de garantia de eficiência. Um investimento para a vida toda com manutenção mínima.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY US SECTION */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="/images/projects/project1.jpg" alt="Instalação Residencial" className="img-fluid rounded shadow-lg" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="mb-4 text-dark">Por que escolher a <span style={{ color: 'var(--lp-primary)' }}>{company.name}</span>?</h2>
                                <ul className="list-unstyled">
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Engenharia Própria e Especializada</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Instalação Rápida e Limpa</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Suporte Pós-Venda Vitalício</span>
                                    </li>
                                    <li className="d-flex mb-3 align-items-center">
                                        <i className="fas fa-check-circle text-primary mr-3 fa-2x"></i>
                                        <span className="h5 mb-0">Financiamento Facilitado</span>
                                    </li>
                                </ul>
                                <div className="mt-5">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Soliciturar Orçamento Grátis
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="lp-cta-strip">
                    <div className="container">
                        <h2>Pronto para zerar sua conta de luz?</h2>
                        <p className="lead mb-4">Entre em contato agora e receba um estudo de viabilidade gratuito.</p>
                        <a href={company.contact.whatsapp.link} className="btn btn-light btn-lg font-weight-bold display-4">
                            <i className="fab fa-whatsapp"></i> Falar com Especialista
                        </a>
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
