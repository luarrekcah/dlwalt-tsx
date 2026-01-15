
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import '@/styles/landing.css';
import LandingNavbar from "@/components/LandingNavbar";
import FloatingWpp from "@/components/FloatingWhatsapp";
import { company } from "@/data/company";

export const metadata: Metadata = {
    title: `Limpeza Solar Profissional | Recupere sua Economia`,
    description: "Seu sistema está gerando menos? A sujeira pode estar roubando até 25% da sua energia. Agende uma limpeza técnica hoje.",
    keywords: [
        "limpeza de painéis solares",
        "manutenção energia solar",
        "perda de geração solar",
        "lavagem placa solar",
        "assistência técnica inverter",
    ],
    openGraph: {
        title: `Manutenção Solar - Pare de Perder Dinheiro`,
        description: "Recupere a eficiência total do seu gerador solar com nossa limpeza profissional. Segurança e produtos específicos.",
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

                {/* HERO SECTION - HOOK */}
                <section className="lp-hero parallax-bg" style={{ backgroundImage: "url(/images/banner/banner1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                                <span className="badge badge-primary text-uppercase mb-3 px-3 py-2" style={{ letterSpacing: '1px' }}>Alerta de Prejuízo</span>
                                <h1 className="display-3 fw-bold">Sua conta de luz<br />voltou a subir?</h1>
                                <p className="lead mt-3">A culpa não é do sistema, é da sujeira. Painéis sujos podem perder até 25% da capacidade de geração. Você está deixando dinheiro no telhado.</p>
                                <div className="d-flex gap-3 flex-wrap mt-4">
                                    <Link href="/contato" className="lp-btn-cta">
                                        Recuperar Minha Economia
                                    </Link>
                                    <a href={company.contact.whatsapp.link} className="lp-btn-whatsapp">
                                        <i className="fab fa-whatsapp"></i> Orçamento Rápido
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
                                <h2 className="mb-4 text-dark font-weight-bold">Cada dia sujo é dinheiro perdido</h2>
                                <p className="lead text-muted">A poeira, dejetos de pássaros e poluição criam uma barreira que impede a luz de chegar nas células fotovoltaicas. O resultado? Seu inversor trabalha menos e sua conta aumenta.</p>
                            </div>
                        </div>
                        <div className="lp-features-grid mt-5">
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <i className="fas fa-percentage lp-feature-icon"></i>
                                <h3>Perda Silenciosa</h3>
                                <p>Você pode estar perdendo de 15% a 25% da produção sem perceber. No final do ano, isso representa milhares de reais.</p>
                            </div>
                            <div className="lp-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <i className="fas fa-ban lp-feature-icon"></i>
                                <h3>Risco na Garantia</h3>
                                <p>Muitos fabricantes exigem comprovação de manutenção periódica para cobrir defeitos. Não perca sua garantia de 25 anos por descuido.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOLUTION SECTION - THE BRIDGE */}
                <section className="lp-section-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="zoom-in">
                                <div className="glass-card">
                                    <h3 className="text-center mb-4 text-dark font-weight-bold">O Impacto Real</h3>
                                    <ul className="list-group list-group-flush bg-transparent">
                                        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                            Poeira fina
                                            <span className="badge badge-warning badge-pill p-2">-5% Geração</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom">
                                            Sujeira média
                                            <span className="badge badge-danger badge-pill p-2">-15% Geração</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                            Sujeira crítica (Lodo)
                                            <span className="badge badge-dark badge-pill p-2">-30% Geração</span>
                                        </li>
                                    </ul>
                                    <div className="mt-4 text-center">
                                        <p className="font-italic text-muted small">A limpeza se paga com a própria energia recuperada.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-left">
                                <h2 className="mb-4 text-dark font-weight-bold">Limpeza Técnica <span className="highlight">Especializada</span></h2>
                                <p className="lead text-muted mb-4">NÃO tente lavar seus painéis com vassoura e sabão em pó. Isso risca o vidro e corrói as estruturas.</p>

                                <div className="bg-white p-4 rounded shadow-sm">
                                    <ul className="list-unstyled check-list-modern mb-0">
                                        <li><i className="fas fa-check"></i> Água tratada (desmineralizada).</li>
                                        <li><i className="fas fa-check"></i> Escovas rotativas soft-touch.</li>
                                        <li><i className="fas fa-check"></i> Produtos biodegradáveis específicos.</li>
                                        <li><i className="fas fa-check"></i> Check-up elétrico incluso.</li>
                                    </ul>
                                </div>

                                <div className="mt-5">
                                    <a href={company.contact.whatsapp.link} className="lp-btn-cta">
                                        Agendar Manutenção
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA STRIP - OFFER */}
                <section className="lp-cta-strip parallax-bg" style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}>
                    <div className="container" data-aos="zoom-in">
                        <h2>Seu sistema precisa de reparo técnico?</h2>
                        <p className="lead mb-4 text-white-50">Inversor desligado ou com erro? Nossa equipe diagnostica e resolve.</p>
                        <Link href="/contato" className="btn btn-light btn-lg font-weight-bold display-4 rounded-pill px-5">
                            <i className="fas fa-tools mr-2"></i> Chamado Técnico
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
