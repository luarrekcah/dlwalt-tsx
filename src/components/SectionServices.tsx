import Image from "next/image";

const SectionServices = () => {
  return (
    <section id="servicos" className="ts-service-area pb-0 dark-bg painel-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title"  data-aos="fade-up-right">Nós somos especialistas</h2>
            <h3 className="section-sub-title" data-aos="fade-up-left">No que fazemos</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/icons/orcamento.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico">
                    Orçamento e Proposta de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Rápido e gratuito.</p>
              </div>
            </div>
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  width={60}
                  height={60}
                  src="/images/icons/manutencao.svg"
                  alt="service icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/manutencao-de-sistema-fotovoltaico">
                    Manutenção de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Exclusivo para clientes D Walt.</p>
              </div>
            </div>
            <div data-aos="fade-right" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/icons/instalacao.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/instalacao-de-sistema-fotovoltaico">
                    Instalação de Sistema Fotovoltaico
                  </a>
                </h3>
                <p>Proposta, aprovação e instalação.</p>
              </div>
            </div>
          </div>
          <div
            id="imgCenter"
            data-aos="fade-up"
            className="col-lg-4 text-center"
          >
            <Image
              loading="lazy"
              className="img-fluid"
              src="/images/tower.png"
              alt="Torre de energia"
              width={400}
              height={400}
            />
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/icons/assistencia.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/assistencia-de-sistema-fotovoltaico">
                    Assistência ao Sistema Fotovoltaico
                  </a>
                </h3>
                <p>
                  Acompanhamos a geração do seu sistema, fornecendo assistência
                  à dúvidas e entregando relatório de produção.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/icons/eng-eletrica.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/engenharia-eletrica">
                    Engenharia Elétrica
                  </a>
                </h3>
                <p>
                  Temos engenheiros capacitados para qualquer
                  área da engenharia elétrica.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="ts-service-box d-flex">
              <div className="ts-service-box-img">
                <Image
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/icons/eng-eletrica.svg"
                  alt="service-icon"
                />
              </div>
              <div className="ts-service-box-info">
                <h3 className="service-box-title">
                  <a href="/servicos/contrucao-civil">Construção Civil</a>
                </h3>
                <p>Temos engenheiros capacitados para qualquer
                  área da engenharia civil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
