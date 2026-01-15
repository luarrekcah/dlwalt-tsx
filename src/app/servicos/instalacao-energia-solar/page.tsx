
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Instalação Solar Certificada | Evite Dores de Cabeça`,
    description: "Não arrisque seu investimento. A Dwalt possui equipe própria e certificada para instalação de energia solar. Segurança total e homologação garantida.",
    keywords: [
        "instalação energia solar",
        "problemas instalação solar",
        "empresa instalação fotovoltaica",
        "Dwalt Engenharia",
    ],
    openGraph: {
        title: `Instalação Solar - Segurança e Qualidade`,
        description: "Equipe especializada e normas de segurança rigorosas. Sua usina instalada sem dores de cabeça.",
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

                {/* HERO SECTION - HOOK */}
                <section className="lp-hero parallax-bg" style={{ backgroundImage: "url(/images/banner/banner3.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                <span className="badge badge-success text-uppercase mb-3 px-3 py-2" style={{ letterSpacing: '1px' }}>Segurança em Primeiro Lugar</span>
                                <h1 className="display-3 fw-bold">O barato que pode<br />sair muito caro</h1>
                                <p className="lead mt-3">Energia solar é um sistema elétrico de alta potência. Uma instalação mal feita pode causar incêndios, vazamentos e perda total do equipamento. Não arrisque.</p>
                                <div className="d-flex gap-3 flex-wrap mt-4">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Garantir Instalação Segura
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Falar com um Engenheiro
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PAIN SECTION - AGITATION */}
                <section className="lp-section-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center" data-aos="fade-up">
                                <h2 className="mb-4 text-dark font-weight-bold">Você sabia que muitas empresas terceirizam a instalação?</h2>
                                <p className="lead text-muted">Isso significa que pessoas sem treinamento e sem vínculo com a empresa sobem no seu telhado. Se algo der errado, a responsabilidade fica num jogo de empurra-empurra.</p>
                            </div>
                        </div>
                        <div className="lp-features-grid mt-5">
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-exclamation-triangle lp-feature-icon"></i>
                                <h3>Risco de Acidentes</h3>
                                <p>Instaladores sem NR-35 (trabalho em altura) e NR-10 (eletricidade) colocam sua obra em risco jurídico severo.</p>
                            </div>
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-crutch lp-feature-icon"></i>
                                <h3>Danos ao Telhado</h3>
                                <p>Goteiras e infiltrações são comuns quando a fixação dos painéis é feita por amadores.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION - THE BRIDGE */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="lp-heading-center" data-aos="fade-up">
                            <h2>O Padrão <span className="highlight">Dwalt</span> de Qualidade</h2>
                            <p>Dorme tranquilo. Cuidamos de tudo com equipe 100% própria e engenheiros responsáveis.</p>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-3 mb-4" data-aos="flip-left" data-aos-delay="100">
                                <div className="p-4 bg-white rounded shadow-sm h-100 step-card">
                                    <div className="mb-3"><i className="fas fa-clipboard-list fa-2x text-primary"></i></div>
                                    <h4 className="mt-3">1. Vistoria Técnica</h4>
                                    <p>Analisamos a estrutura do seu telhado e a rede elétrica antes de qualquer coisa.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4" data-aos="flip-left" data-aos-delay="200">
                                <div className="p-4 bg-white rounded shadow-sm h-100 step-card">
                                    <div className="mb-3"><i className="fas fa-pencil-ruler fa-2x text-primary"></i></div>
                                    <h4 className="mt-3">2. Projeto Executivo</h4>
                                    <p>Engenheiros desenham a melhor disposição para máxima geração.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4" data-aos="flip-left" data-aos-delay="300">
                                <div className="p-4 bg-white rounded shadow-sm h-100 step-card">
                                    <div className="mb-3"><i className="fas fa-tools fa-2x text-primary"></i></div>
                                    <h4 className="mt-3">3. Instalação Segura</h4>
                                    <p>Técnicos certificados com EPIs e ferramentas de precisão.</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4" data-aos="flip-left" data-aos-delay="400">
                                <div className="p-4 bg-white rounded shadow-sm h-100 step-card" style={{ border: '2px solid var(--lp-primary)' }}>
                                    <div className="mb-3"><i className="fas fa-check-double fa-2x text-primary"></i></div>
                                    <h4 className="mt-3">4. Homologação</h4>
                                    <p>Resolvemos toda a burocracia com a Energisa para você.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5" data-aos="fade-up">
                            <Link href="/contato" className="lp-btn-cta">
                                Agendar minha instalação
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP - OFFER */}
                <section className="lp-cta-strip parallax-bg" style={{ backgroundImage: "url(/images/banner/banner1.jpg)" }}>
                    <div className="container" data-aos="zoom-in">
                        <h2>Milhares de clientes satisfeitos</h2>
                        <p className="lead mb-4 text-white-50">Não entregue seu sonho na mão de qualquer um. Escolha a segurança.</p>
                        <a href={company.contact.whatsapp.link} className="btn btn-light btn-lg font-weight-bold display-4 rounded-pill px-5">
                            <i className="fab fa-whatsapp mr-2"></i> Ver Portfólio de Obras
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
