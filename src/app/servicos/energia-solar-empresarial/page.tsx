
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Energia Solar para Empresas | Lucro Líquido Real | ${company.name}`,
    description: "Transforme sua conta de energia em lucro. Reduza o custo fixo da sua empresa e aumente sua margem competitiva com a Dwalt Energia.",
    keywords: [
        "energia solar empresarial",
        "redução de custos empresa",
        "investimento energia solar",
        "lucro energia solar",
        "Dwalt Energia Solar",
    ],
    openGraph: {
        title: `Energia Solar Empresarial - Aumente seu Lucro | ${company.name}`,
        description: "Invista em eficiência. Sistemas fotovoltaicos para empresas que querem cortar custos fixos e crescer.",
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

                {/* HERO SECTION - HOOK */}
                <section className="lp-hero parallax-bg" style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                <span className="badge badge-warning text-uppercase mb-3 px-3 py-2" style={{ letterSpacing: '1px' }}>Para gestores inteligentes</span>
                                <h1 className="display-3 fw-bold">Quanto do seu Lucro<br />vira Conta de Luz?</h1>
                                <p className="lead mt-3">Energia é um dos maiores custos fixos da sua operação. Transforme essa despesa em investimento e blinde seu caixa contra a inflação energética.</p>
                                <div className="d-flex gap-3 flex-wrap mt-4">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Quero Reduzir meu Custo Fixo
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Falar com Consultor PJ
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
                                <h2 className="mb-4 text-dark font-weight-bold">Sua competitividade está em risco</h2>
                                <p className="lead text-muted">Enquanto você paga bandeira vermelha, seu concorrente que já tem energia solar está investindo a economia em marketing e expansão. Não fique para trás.</p>
                            </div>
                        </div>
                        <div className="lp-features-grid mt-5">
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-money-bill-wave lp-feature-icon"></i>
                                <h3>Custo Irrecuperável</h3>
                                <p>Cada real pago na conta de luz é um real a menos na última linha do seu balanço. É queima de capital sem retorno.</p>
                            </div>
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-chart-line lp-feature-icon"></i>
                                <h3>Inflação no Custo Fixo</h3>
                                <p>A energia sobe acima do IPCA. Fica impossível planejar custos a longo prazo dependendo da concessionária.</p>
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
                                    <h3 className="mb-4 font-weight-bold">O Melhor Investimento Corporativo</h3>
                                    <p>A Energia Solar oferece um retorno (ROI) muito superior a CDBs e poupança, com a segurança de um ativo físico instalado no seu telhado.</p>
                                    <div className="text-center mt-4">
                                        <img src="/images/projects/project2.jpg" alt="Instalação Empresarial" className="img-fluid rounded shadow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                                <h2 className="mb-4 text-dark font-weight-bold">Transforme Despesa em <span className="highlight">Ativo</span></h2>
                                <p className="lead text-muted mb-4">A Dwalt desenvolve projetos de engenharia robustos para empresas que não podem parar.</p>

                                <div className="p-4 bg-white rounded shadow-sm mb-4">
                                    <h5 className="font-weight-bold text-dark">Benefícios Fiscais e Financeiros:</h5>
                                    <ul className="list-unstyled check-list-modern mt-3">
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>Payback acelerado (3 a 5 anos de retorno médio).</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>Proteção de fluxo de caixa por 25+ anos.</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>Marketing Verde: Selo de empresa sustentável.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Solicitar Análise de Viabilidade
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AUTHORITY & DATA SECTION */}
                <section className="lp-section-light">
                    <div className="container">
                        <div className="lp-heading-center" data-aos="fade-up">
                            <h2>Engenharia de <span className="highlight">Alta Performance</span></h2>
                            <p className="lead text-muted">Grandes empresas confiam na Dwalt. Nossa engenharia garante a potência que seu negócio precisa.</p>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
                                <i className="fas fa-industry fa-3x text-primary mb-3"></i>
                                <h4 className="font-weight-bold">Industrial</h4>
                                <p className="text-muted">Projetos de alta tensão e subestações.</p>
                            </div>
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
                                <i className="fas fa-store fa-3x text-primary mb-3"></i>
                                <h4 className="font-weight-bold">Comercial</h4>
                                <p className="text-muted">Lojas, mercados e escritórios.</p>
                            </div>
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
                                <i className="fas fa-tractor fa-3x text-primary mb-3"></i>
                                <h4 className="font-weight-bold">Rural</h4>
                                <p className="text-muted">Soluções para o agronegócio e irrigação.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP - OFFER */}
                <section className="lp-cta-strip parallax-bg" style={{ backgroundImage: "url(/images/banner/banner4.jpg)" }}>
                    <div className="container" data-aos="zoom-in">
                        <h2>Sua empresa merece lucrar mais</h2>
                        <p className="lead mb-4 text-white-50">Não deixe seu lucro ir embora em forma de boleto de energia.</p>
                        <Link href="/calculadora-solar" className="btn btn-light btn-lg font-weight-bold display-4 rounded-pill px-5 mr-md-3 mb-3 mb-md-0">
                            <i className="fas fa-calculator mr-2"></i> Calcular ROI
                        </Link>
                        <a href={company.contact.whatsapp.link} className="btn btn-outline-light btn-lg font-weight-bold display-4 rounded-pill px-5">
                            <i className="fab fa-whatsapp mr-2"></i> Falar com Consultor
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
