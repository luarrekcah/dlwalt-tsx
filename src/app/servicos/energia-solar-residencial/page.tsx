
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Energia Solar Residencial | Diga Adeus à Conta de Luz`,
    description: "Cansado de pagar caro na conta de luz? Descubra como zerar sua fatura com energia solar residencial. Simule sua economia com a Dwalt Energia.",
    keywords: [
        "energia solar residencial",
        "reduzir conta de luz",
        "painel solar para casa",
        "economia de energia",
        "energia solar Rondônia",
        "Dwalt Energia",
    ],
    openGraph: {
        title: `Energia Solar Residencial - Economize em Casa`,
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

                {/* HERO SECTION - HOOK */}
                <section className="lp-hero parallax-bg" style={{ backgroundImage: "url(/images/banner/banner1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                <span className="badge badge-warning text-uppercase mb-3 px-3 py-2" style={{ letterSpacing: '1px' }}>Chega de aumentos</span>
                                <h1 className="display-3 fw-bold">Por que continuar<br />pagando caro na<br />Conta de Luz?</h1>
                                <p className="lead mt-3">Você trabalha duro, mas vê boa parte do seu dinheiro indo embora com a concessionária de energia. Existe um jeito inteligente de mudar isso.</p>
                                <div className="d-flex gap-3 flex-wrap mt-4">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Quero Parar de Pagar Caro
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Simular Minha Economia
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
                                <h2 className="mb-4 text-dark font-weight-bold">Você não tem controle sobre a tarifa...</h2>
                                <p className="lead text-muted">A inflação energética no Brasil supera a inflação oficial. Todo ano, sua conta sobe, e você paga a conta calado. Até quando você vai aceitar ser refém das bandeiras tarifárias?</p>
                            </div>
                        </div>
                        <div className="lp-features-grid mt-5">
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-chart-line lp-feature-icon"></i>
                                <h3>Aumentos Constantes</h3>
                                <p>O custo da energia elétrica dobrou nos últimos 10 anos. Se você paga R$ 500 hoje, pagará mais de R$ 1.000 em breve.</p>
                            </div>
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-hand-holding-usd lp-feature-icon"></i>
                                <h3>Dinheiro Perdido</h3>
                                <p>Pagar conta de luz é como pagar aluguel. É um dinheiro que sai do seu bolso e nunca mais volta, sem criar patrimônio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION - THE BRIDGE */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                                <div className="position-relative">
                                    <div className="absolute-bg" style={{ position: 'absolute', top: -20, left: -20, width: '100%', height: '100%', background: 'var(--lp-primary)', opacity: 0.1, borderRadius: 20, zIndex: 0 }}></div>
                                    <img src="/images/projects/project1.jpg" alt="Instalação Residencial" className="img-fluid rounded shadow-lg position-relative" style={{ zIndex: 1 }} />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left">
                                <h2 className="mb-4 text-dark font-weight-bold">A Solução Definitiva: <span className="highlight">Gerar sua Própria Energia</span></h2>
                                <p className="lead text-muted mb-4">Imagine trocar sua fatura mensal infinita por um equipamento que é SEU e se paga sozinho com a economia gerada.</p>

                                <div className="glass-card p-4 mb-4">
                                    <h5 className="font-weight-bold text-primary mb-3">Como funciona a troca inteligente:</h5>
                                    <ul className="list-unstyled check-list-modern">
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>Ao invés de pagar a Energisa, você paga o financiamento do seu sistema.</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>O valor da parcela é muito próximo (ou menor) que sua conta atual.</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle"></i>
                                            <span>Em 4 ou 5 anos, o sistema está pago. Depois, é só lucro por +20 anos.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Ver planos de financiamento
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
                            <h2>Por que a <span className="highlight">Dwalt Energia</span>?</h2>
                            <p className="lead text-muted">Não somos apenas instaladores de painéis. Somos engenheiros especializados em eficiência e segurança.</p>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
                                <h1 className="display-4 font-weight-bold text-primary">500+</h1>
                                <p className="text-muted font-weight-bold text-uppercase">Lares Transformados</p>
                            </div>
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
                                <h1 className="display-4 font-weight-bold text-primary">95%</h1>
                                <p className="text-muted font-weight-bold text-uppercase">Redução Média na Conta</p>
                            </div>
                            <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
                                <h1 className="display-4 font-weight-bold text-primary">25 Anos</h1>
                                <p className="text-muted font-weight-bold text-uppercase">Garantia de Performance</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP - OFFER */}
                <section className="lp-cta-strip parallax-bg" style={{ backgroundImage: "url(/images/banner/banner3.jpg)" }}>
                    <div className="container" data-aos="zoom-in">
                        <h2 className="mb-3">Pare de jogar dinheiro fora hoje mesmo</h2>
                        <p className="lead mb-4 text-white-50">Solicite uma simulação gratuita e descubra quanto você vai economizar.</p>
                        <Link href="/calculadora-solar" className="btn btn-light btn-lg font-weight-bold display-4 rounded-pill px-5 mr-md-3 mb-3 mb-md-0">
                            <i className="fas fa-calculator mr-2"></i> Usar Calculadora Solar
                        </Link>
                        <a href={company.contact.whatsapp.link} className="btn btn-outline-light btn-lg font-weight-bold display-4 rounded-pill px-5">
                            <i className="fab fa-whatsapp mr-2"></i> Falar no WhatsApp
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
