
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Instalação de Energia Solar | Rapidez e Segurança | ${company.name}`,
    description: "Instalação de sistemas fotovoltaicos em Rondônia com equipe própria e certificada. Projetos chave na mão com garantia e suporte técnico completo.",
    keywords: [
        "instalação energia solar",
        "instaladores de painel solar",
        "empresa instalação fotovoltaica",
        "projeto e instalação solar",
        "energia solar turn-key",
        "Dwalt Engenharia",
    ],
    openGraph: {
        title: `Instalação de Sistema Fotovoltaico - Qualidade e Segurança | ${company.name}`,
        description: "Equipe especializada em instalação de energia solar. Garantia de serviço, segurança e eficiência para seu sistema.",
        url: `${company.url}/servicos/instalacao-energia-solar`,
        type: "website",
        images: [company.seo.defaultImage],
    },
};

export default function InstalacaoSolar() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Instalação de Sistemas Fotovoltaicos",
        provider: {
            "@type": "LocalBusiness",
            name: company.name,
            telephone: company.contact.phone.display,
        },
        areaServed: {
            "@type": "State",
            name: "Rondônia",
        },
        description: "Serviço profissional de instalação de painéis solares e inversores com equipe certificada.",
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="landing-page-wrapper">
                <LandingNavbar />

                {/* HERO SECTION */}
                <section className="lp-hero" style={{ backgroundImage: "url(/images/banner/banner3.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1>Instalação Segura e<br />Certificada</h1>
                                <p>Sua usina solar em boas mãos. Equipe própria, engenheiros responsáveis e conformidade total com as normas NR-10 e NR-35.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Agendar Instalação
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Falar com Engenharia
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
                                <i className="fas fa-hard-hat lp-feature-icon"></i>
                                <h3>Segurança Total</h3>
                                <p>Seguimos rigorosamente as normas de segurança do trabalho para proteger nossa equipe e seu patrimônio durante a obra.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-award lp-feature-icon"></i>
                                <h3>Equipe Própria</h3>
                                <p>Não terceirizamos a instalação. Nossos técnicos são treinados e capacitados pela própria Dwalt para garantir o padrão de qualidade.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-check-double lp-feature-icon"></i>
                                <h3>Homologação</h3>
                                <p>Cuidamos de toda a burocracia junto à concessionária (Energisa) até a troca do medidor e ativação do sistema.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STEP BY STEP SECTION */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="lp-heading-center">
                            <h2>Processo <span className="highlight">Chave na Mão</span></h2>
                            <p>Você não se preocupa com nada. Entregamos o sistema gerando energia.</p>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-3 mb-4">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <span className="display-4 text-muted font-weight-bold">1</span>
                                    <h4 className="mt-3">Vistoria</h4>
                                    <p>Análise técnica do local.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <span className="display-4 text-muted font-weight-bold">2</span>
                                    <h4 className="mt-3">Projeto</h4>
                                    <p>Dimensionamento e engenharia.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <span className="display-4 text-muted font-weight-bold">3</span>
                                    <h4 className="mt-3">Instalação</h4>
                                    <p>Montagem rápida e segura.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="p-4 bg-white rounded shadow-sm h-100">
                                    <span className="display-4 text-primary font-weight-bold">4</span>
                                    <h4 className="mt-3">Economia</h4>
                                    <p>Sistema ativado e gerando.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link href="/contato" className="lp-btn-cta">
                                Quero meu sistema instalado
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="lp-cta-strip">
                    <div className="container">
                        <h2>Qualidade que gera confiança</h2>
                        <p className="lead mb-4">Milhares de instalações realizadas em todo o estado de Rondônia.</p>
                        <a href={company.contact.whatsapp.link} className="btn btn-light btn-lg font-weight-bold display-4">
                            Ver Portfólio no WhatsApp
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
