import Image from "next/image";

const SectionServices = () => {
  return (
    <section id="servicos" className="ts-service-area pb-0 dark-bg painel-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title" data-aos="fade-up-right">Nós somos especialistas</h2>
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
                  <a href="/servicos/energia-solar-residencial">
                    Energia Solar Residencial
                  </a>
                </h3>
                <p>Economia para sua casa.</p>
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
                  <a href="/servicos/limpeza-manutencao-solar">
                    Manutenção e Limpeza
                  </a>
                </h3>
                <p>Maximize sua geração.</p>
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
                  <a href="/servicos/instalacao-energia-solar">
                    Instalação Fotovoltaica
                  </a>
                </h3>
                <p>Segurança e qualidade.</p>
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
                  <a href="/servicos/energia-solar-empresarial">
                    Energia Solar Empresarial
                  </a>
                </h3>
                <p>
                  Reduza custos e aumente o lucro do seu negócio.
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
                  <a href="/servicos/engenharia-eletrica-projetos">
                    Engenharia Elétrica
                  </a>
                </h3>
                <p>
                  Projetos, laudos e consultoria técnica especializada.
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
                  <a href="/contato">Fale com Especialista</a>
                </h3>
                <p>Tire suas dúvidas agora mesmo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
