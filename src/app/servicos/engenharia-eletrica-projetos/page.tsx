
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Engenharia Elétrica Especializada | Laudos e Projetos | ${company.name}`,
    description: "Precisa de regularizar sua obra ou aumentar a carga? Projetos elétricos, laudos de vistoria e subestações com quem entende do assunto.",
    keywords: [
        "engenharia elétrica",
        "projetos elétricos",
        "laudo técnico elétrico",
        "aumento de carga",
        "subestação de energia",
    ],
    openGraph: {
        title: `Engenharia Elétrica - Segurança e Técnica | ${company.name}`,
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

                {/* HERO SECTION - HOOK */}
                <section className="lp-hero parallax-bg" style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                <span className="badge badge-info text-uppercase mb-3 px-3 py-2" style={{ letterSpacing: '1px' }}>Soluções Técnicas</span>
                                <h1 className="display-3 fw-bold">Engenharia Elétrica<br />sem burocracia</h1>
                                <p className="lead mt-3">Projetos, laudos e execuções de alta complexidade. Resolvemos sua demanda técnica com agilidade e responsabilidade (ART).</p>
                                <div className="d-flex gap-3 flex-wrap mt-4">
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

                {/* PAIN SECTION - AGITATION */}
                <section className="lp-section-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center" data-aos="fade-up">
                                <h2 className="mb-4 text-dark font-weight-bold">Obras travadas por falta de documentação?</h2>
                                <p className="lead text-muted">A falta de um projeto elétrico adequado ou laudos em dia pode gerar multas, embargos e, pior, acidentes graves. Não deixe a burocracia parar seu negócio.</p>
                            </div>
                        </div>
                        <div className="lp-features-grid mt-5">
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-file-signature lp-feature-icon"></i>
                                <h3>Regularização</h3>
                                <p>Emitimos laudos e ARTs para regularização junto aos Bombeiros, Seguradoras e Concessionária de Energia.</p>
                            </div>
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-bolt lp-feature-icon"></i>
                                <h3>Segurança Elétrica</h3>
                                <p>Instalações antigas ou mal dimensionadas são a causa #1 de incêndios. Proteja seu patrimônio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION - THE BRIDGE */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2" data-aos="fade-left">
                                <div className="glass-card">
                                    <h3 className="mb-4 font-weight-bold">Responsabilidade Técnica</h3>
                                    <p>Na Dwalt, você trata direto com engenheiros experientes. Garantimos a aprovação do seu projeto e a segurança da execução.</p>
                                    <div className="mt-4">
                                        <Link href="/contato" className="btn btn-outline-primary btn-block rounded-pill">
                                            Conhecer a Equipe
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                                <h2 className="mb-4 text-dark font-weight-bold">Expertise além do Solar</h2>
                                <ul className="list-unstyled check-list-modern">
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span className="h6 mb-0">Subestações de Média Tensão</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span className="h6 mb-0">Correção de Fator de Potência</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span className="h6 mb-0">Padrão de Entrada e Aumento de Carga</span>
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle"></i>
                                        <span className="h6 mb-0">Consultoria para Mercado Livre</span>
                                    </li>
                                </ul>
                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Consultar Engenheiro Agora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP - OFFER */}
                <section className="lp-cta-strip parallax-bg" style={{ backgroundImage: "url(/images/banner/banner4.jpg)" }}>
                    <div className="container" data-aos="zoom-in">
                        <h2>Precisa de um projeto urgente?</h2>
                        <p className="lead mb-4 text-white-50">Evite atrasos na sua obra. Nossa equipe entrega com agilidade.</p>
                        <Link href="/contato" className="btn btn-light btn-lg font-weight-bold display-4 rounded-pill px-5">
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
