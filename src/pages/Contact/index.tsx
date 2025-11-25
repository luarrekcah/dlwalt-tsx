import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import HelmetHeader from "../components/HelmetHeader";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="body-inner">
      <HelmetHeader
        title={`Contato`}
        description="Entre em contato conosco a partir dos dados dessa página!"
        url={`contato`}
      />
      <Navbar />
      <BannerHeading title="Contato" />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="section-title">Nossos Escritórios</h2>
              <h3 className="section-sub-title">Sede</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center h-100">
                <span className="ts-service-icon icon-round">
                  <i className="fas fa-map-marker-alt mr-0" />
                </span>
                <div className="ts-service-box-content">
                  <h4>Endereço</h4>
                  <p>
                    Av. Canaã, 2500 - Ariquemes - Rondônia / CNPJ:
                    26.711.744/0001-08
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ts-service-box-bg text-center h-100">
                <span className="ts-service-icon icon-round">
                  <i className="fa fa-envelope mr-0" />
                </span>
                <div className="ts-service-box-content">
                  <h4>E-mail</h4>
                  <p>contato@dwalt.net</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <a
                href="https://wa.me/5569993695702"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="ts-service-box-bg text-center h-100">
                  <span className="ts-service-icon icon-round">
                    <i className="fa fa-whatsapp mr-0" />
                  </span>
                  <div className="ts-service-box-content">
                    <h4>WhatsApp</h4>
                    <p>69 99369-5702</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="gap-40" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
