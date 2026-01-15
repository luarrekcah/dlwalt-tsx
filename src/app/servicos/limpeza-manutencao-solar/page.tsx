
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Limpeza e Manutenção de Placas Solares | ${company.name}`,
    description: "Aumente a geração de energia do seu sistema com limpeza e manutenção especializada. Evite perdas de até 25% na sua produção solar.",
    keywords: [
        "limpeza de painéis solares",
        "manutenção energia solar",
        "lavagem placa solar",
        "assistência técnica inverter",
        "manutenção fotovoltaica Rondônia",
    ],
    openGraph: {
        title: `Manutenção e Limpeza Solar - Maximize sua Geração | ${company.name}`,
        description: "Serviço profissional de limpeza e manutenção preventiva para sistemas fotovoltaicos. Recupere a eficiência do seu gerador.",
        url: `${company.url}/servicos/limpeza-manutencao-solar`,
        type: "website",
        images: [company.seo.defaultImage],
    },
};

export default function ManutencaoSolar() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Limpeza e Manutenção Fotovoltaica",
        provider: {
            "@type": "LocalBusiness",
            name: company.name,
            telephone: company.contact.phone.display,
        },
        areaServed: {
            "@type": "State",
            name: "Rondônia",
        },
        description: "Limpeza técnica e manutenção preventiva de sistemas de energia solar.",
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
                                <h1>Recupere 100% da<br />Sua Potência</h1>
                                <p>Painéis sujos podem perder até 25% de eficiência. Aumente sua geração hoje mesmo com nossa limpeza técnica especializada.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Agendar Limpeza
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Orçamento Rápido
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
                                <i className="fas fa-broom lp-feature-icon"></i>
                                <h3>Limpeza Técnica</h3>
                                <p>Uso de equipamentos adequados e água tratada para não riscar os painéis ou causar choques térmicos.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-shield-alt lp-feature-icon"></i>
                                <h3>Proteção da Garantia</h3>
                                <p>Manter a manutenção em dia é essencial para preservar a garantia de fábrica dos seus equipamentos.</p>
                            </div>
                            <div className="lp-feature-card">
                                <i className="fas fa-search-plus lp-feature-icon"></i>
                                <h3>Check-up Completo</h3>
                                <p>Além de limpar, inspecionamos inversores, cabos e conectores para prevenir falhas elétricas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMPARISON SECTION */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-center mb-4">O Impacto da Sujeira</h3>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Poeira acumulada
                                            <span className="badge badge-danger badge-pill">-5% a -10%</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dejetos de aves
                                            <span className="badge badge-danger badge-pill">-15% a -20%</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Sujeira extrema (musgo/lodo)
                                            <span className="badge badge-danger badge-pill">até -30%</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-center">
                                        <p className="font-italic text-muted">Não jogue dinheiro fora. Mantenha seu sistema limpo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="mb-4 text-dark">Serviço Profissional e Seguro</h2>
                                <p className="lead text-muted mb-4">Subir no telhado é perigoso. Deixe isso com quem entende e tem os equipamentos certos.</p>
                                <p>Nossa equipe utiliza EPIs completos e segue normas rígidas de segurança. Além disso, utilizamos produtos biodegradáveis que não agridem o meio ambiente nem a estrutura do seu telhado.</p>
                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Solicitar Manutenção Agora
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP */}
                <section className="lp-cta-strip">
                    <div className="container">
                        <h2>Seu sistema parou de funcionar?</h2>
                        <p className="lead mb-4">Nossa equipe de assistência técnica resolve seu problema rapidamente.</p>
                        <Link href="/contato" className="btn btn-light btn-lg font-weight-bold display-4">
                            Pedir Suporte Técnico
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
