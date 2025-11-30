/* eslint-disable @typescript-eslint/ban-ts-comment */
import FloatingWpp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionFeatures from "@/components/SectionFeatures";
import { cities } from "@/data/cities";

// =====================
// METADATA DINÂMICO
// =====================
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // <<<<<< CORREÇÃO

  // @ts-ignore
  const city = cities[slug];

  if (!city) {
    return {
      title: "Cidade não encontrada | DWALT Energia",
    };
  }

  return {
    title: `Energia Solar em ${city.name} - RO | DWALT Energia`,
    description: `Instalação de energia solar em ${city.name} - RO com engenharia própria, materiais de qualidade e suporte completo. Economize até 90% na conta de luz. Orçamento rápido e sem compromisso.`,
    keywords: [
      `energia solar ${city.name}`,
      `sistema fotovoltaico ${city.name}`,
      `empresa energia solar ${city.name}`,
    ],
    openGraph: {
      title: `Energia Solar em ${city.name} - RO | DWALT Energia`,
      description: `Instalação de energia solar em ${city.name} - RO com engenharia própria, materiais de qualidade e suporte completo. Economize até 90% na conta de luz. Orçamento rápido e sem compromisso.`,
      url: `https://www.dwalt.net/${slug}`,
      /*
     images: [
        {
          url: `/images/cidades/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `Energia solar em ${city.name}`,
        },
      ],
      */
    },
  };
}

// =====================
// PÁGINA
// =====================
export default async function CityPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  // @ts-ignore
  const city = cities[slug];

  if (!city) {
    return (
      <div className="container" style={{ padding: 40 }}>
        <h1>Cidade não encontrada</h1>
      </div>
    );
  }

  return (
    <>
      <div className="body-inner">
        <Navbar />
        {/* HERO SECTION */}
        <div className="banner-carousel banner-carousel-1 mb-0">
          <div
            className="banner-carousel-item"
            style={{
              backgroundImage: "url(/images/header/header-1.jpg)",
            }}
          >
            <div className="slider-content">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-md-12 text-center">
                    <h2
                      className="slide-title"
                      data-animation-in="slideInLeft"
                    ></h2>
                    <h3
                      style={{ fontSize: 40 }}
                      className="slide-sub-title"
                      data-animation-in="slideInRight"
                    >
                      Energia Solar em {city.name} – RO
                    </h3>{" "}
                    <p
                      data-animation-in="slideInRight"
                      style={{
                        color: "#fff",
                        fontSize: 20,
                        borderRadius: 50,
                        margin: 0,
                      }}
                    >
                      9 anos de experiência levando economia real para{" "}
                      {city.name} e região.
                    </p>
                    <p data-animation-in="slideInLeft" data-duration-in="1.2">
                      <a href="/servicos" className="slider btn btn-primary">
                        Nossos serviços
                      </a>
                      <a
                        href="/contato"
                        className="slider btn btn-primary border"
                      >
                        Entrar em contato agora
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US SECTION */}

        <SectionFeatures city={city} />
        <section className="ts-features py-5 bg-dark text-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Título principal */}
                <div className="text-center mb-5" data-aos="fade-up">
                  <h3 className="into-title text-white">
                    Vale a pena energia solar em {city.name} – RO?
                  </h3>

                  <p className="into-sub-title">
                    Descubra por que milhares de pessoas estão economizando com
                    energia solar em {city.name}.
                  </p>
                </div>

                {/* Lista de benefícios */}
                <div className="mb-5" data-aos="fade-up">
                 
            <div className="row g-4">
              {/* CARD 1 */}
              <div className="col-md-4" data-aos="fade-up">
                <div
                  className="p-4 rounded shadow-sm h-100"
                  style={{ background: "#f8f8f6", color: "#333" }}
                >
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{
                        width: 55,
                        height: 55,
                        background: "#029EEF",
                        color: "white",
                        fontSize: 22,
                        padding: 20,
                      }}
                    >
                      <i className="fas fa-solar-panel"></i>
                    </div>

                    <p
                      className="mb-0"
                      style={{ fontSize: "1.05rem", lineHeight: 1.4 }}
                    >
                      Mais de <b>{city.estimatedSystems}</b> sistemas
                      fotovoltaicos já foram instalados em{" "}
                      <b>{city.name} – RO</b>.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div
                  className="p-4 rounded shadow-sm h-100"
                  style={{ background: "#f8f8f6", color: "#333" }}
                >
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{
                        width: 55,
                        height: 55,
                        background: "#029EEF",
                        color: "white",
                        fontSize: 22,
                        padding: 20,
                      }}
                    >
                      <i className="fas fa-bolt"></i>
                    </div>

                    <p
                      className="mb-0"
                      style={{ fontSize: "1.05rem", lineHeight: 1.4 }}
                    >
                      A principal distribuidora em <b>{city.name} – RO</b> é a
                      Energisa.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — DESTAQUE EM VERDE */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="p-4 rounded shadow h-100"
                  style={{ background: "#0c962eff", color: "white" }}
                >
                  <div className="d-flex align-items-start">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mr-3"
                      style={{
                        width: 55,
                        height: 55,
                        background: "rgba(255,255,255,0.25)",
                        fontSize: 22,
                        color: "#fff",
                        padding: 20,
                      }}
                    >
                      <i className="fas fa-percent"></i>
                    </div>

                    <p
                      className="mb-0"
                      style={{ fontSize: "1.1rem", lineHeight: 1.4 }}
                    >
                      Você pode economizar até <b>90%</b> na sua conta de
                      energia solar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
                </div>

                {/* Cidades atendidas */}
                <div
                  className="card bg-secondary text-light shadow-lg border-0"
                  data-aos="fade-up"
                >
                  <div className="card-body p-4">
                    <h4 className="card-title mb-3 text-white">
                      Atendemos as principais cidades de Rondônia
                    </h4>
                    <p className="card-text mb-0 text-light">
                      Porto Velho, Ariquemes, Ji-Paraná, Cacoal, Rolim de Moura,
                      Jaru, Guajará-Mirim, Ouro Preto do Oeste, Pimenta Bueno,
                      Machadinho d’Oeste, Espigão d’Oeste, Buritis, Nova Mamoré,
                      Candeias do Jamari e Alta Floresta d’Oeste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 text-light" style={{backgroundColor: '#029EEF'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center" data-aos="zoom-in">
                <h3 className="mb-3 font-weight-bold text-white">
                  Economize até <span style={{ fontSize: 40 }}>90%</span> na
                  conta de luz com energia solar!
                </h3>

                <p className="lead mb-4">
                  Solicite agora um orçamento gratuito e receba retorno em menos
                  de
                  <strong> 15 minutos</strong>. Nossa equipe de engenheiros está
                  pronta para te atender.
                </p>

                <a
                  href="/contato"
                  className="btn btn-light btn-lg px-5 py-3 shadow-lg d-inline-flex align-items-center"
                >
                  <i
                    className="fas fa-paper-plane mr-2"
                    style={{ color: "#029EEF" }}
                  ></i>
                  Solicitar orçamento agora
                </a>

                <p className="mt-4 text-light-50">
                  Atendimento rápido • Sem compromisso • Consultoria
                  especializada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*SECTIONS*/}
        <FloatingWpp />
        <Footer />
      </div>
    </>
  );
}
