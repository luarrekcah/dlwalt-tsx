import BannerHeading from "@/components/BannerHeading";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { units } from "@/data/units";
import { company } from "@/data/company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contato — ${company.name}`,
  applicationName: company.name,
  publisher: company.name,
  description:
    `Entre em contato com a ${company.name}. Suporte completo, atendimento rápido e especializado. Tire dúvidas ou solicite um orçamento.`,
  keywords: [
    `contato ${company.shortName} Engenharia`,
    "suporte energia solar",
    "consultoria energia solar",
    "orçamento energia solar",
  ],
  openGraph: {
    title: `Contato — ${company.name}`,
    description:
      "Fale com nossa equipe e tire todas as suas dúvidas sobre energia solar.",
    url: `${company.url}/contato`,
    siteName: company.name,
  },
};

const Contact = () => {
  return (
    <>
      <div className="body-inner">
        <Navbar />
        <BannerHeading title="Contato" />
        <section id="main-container" className="main-container">
          <div className="text-center">
            <h2 className="section-title">Nossos Escritórios</h2>
          </div>
          <div className="container">
            {units.map((unit, index) => (
              <div key={index} className="mb-5 pb-5 border-bottom">
                <div className="row text-center">
                  <div className="col-12">
                    <h3 className="section-sub-title">{unit.name}</h3>
                  </div>
                </div>
                <div className="row mb-4">
                  {/* ENDEREÇO */}
                  <div className="col-md-4 mb-3">
                    <div className="ts-service-box-bg text-center h-100">
                      <span className="ts-service-icon icon-round">
                        <i className="fas fa-map-marker-alt mr-0" />
                      </span>
                      <div className="ts-service-box-content">
                        <h4>Endereço</h4>
                        <p>
                          {unit.address}
                          {unit.cnpj && <><br />CNPJ: {unit.cnpj}</>}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* EMAILS */}
                  <div className="col-md-4 mb-3">
                    <div className="ts-service-box-bg text-center h-100">
                      <span className="ts-service-icon icon-round">
                        <i className="fa fa-envelope mr-0" />
                      </span>
                      <div className="ts-service-box-content">
                        <h4>E-mail</h4>
                        <p>{unit.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* TELEFONES */}
                  <div className="col-md-4 mb-3">
                    <div className="ts-service-box-bg text-center h-100">
                      <span className="ts-service-icon icon-round">
                        <i className="fab fa-whatsapp mr-0" />
                      </span>
                      <div className="ts-service-box-content">
                        <h4>Contatos</h4>
                        {unit.phones.map((phone, idx) => (
                          <p key={idx} className="mb-1">{phone}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* MAP EMBED */}
                <div className="row">
                  <div className="col-12">
                    <div className="map-container shadow-sm p-2 bg-white rounded">
                      <iframe
                        src={unit.mapEmbedUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
