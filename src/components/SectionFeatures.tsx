interface City {
  name: string;
}

const SectionFeatures = ({ city = null }: { city?: City | null }) => {
  return (
    <section id="ts-features" className="ts-features">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ts-intro" data-aos="zoom-in-right">
              <h2 className="into-title">Sobre nós</h2>
              <h3 className="into-sub-title">
                POR QUE A D | WALT ENGENHARIA {city ? `EM ${city.name}?` : "?"}
              </h3>
              {city ? (
                <p>
                  Somos uma empresa com alta experiência no mercado, com
                  profissionais capacitados para melhor lhe atender. Há mais de
                  9 anos levando energia solar e economia real para {city.name}{" "}
                  – RO e região.
                </p>
              ) : (
                <p>
                  Somos uma empresa com alta experiência no mercado e com
                  profissionais capacitados para melhor lhe atender, tornando a
                  realidade melhor que a expectativa.
                </p>
              )}
            </div>
            <div className="gap-20" />
            <div className="row" data-aos="zoom-out-up">
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-trophy" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      MELHOR PREÇO DO MERCADO
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-sliders-h" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      EQUIPAMENTOS À PRONTA ENTREGA
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="zoom-out-down">
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-thumbs-up" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      SUPORTE TÉCNICO COM ENGENHEIROS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ts-service-box">
                  <span className="ts-service-icon">
                    <i className="fas fa-users" />
                  </span>
                  <div className="ts-service-box-content">
                    <h3 className="service-box-title">
                      EXCELÊNCIA NO ATENDIMENTO DE VENDAS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h3 className="into-sub-title" data-aos="fade-down-left">
              Nossos Valores
            </h3>
            <p data-aos="fade-down-left">Um pouco dos nossos objetivos</p>
            <div
              className="accordion accordion-group"
              id="our-values-accordion"
            >
              <div className="card" data-aos="fade-up-left">
                <div className="card-header p-0 bg-transparent" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Visão
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    <b>A mais eficiente</b>
                    <p>
                      Nosso objetivo é ser reconhecida como uma empresa de
                      excelência, confiança e referência no mercado de energia
                      solar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up-left">
                <div className="card-header p-0 bg-transparent" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Missão
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    <b>Nosso objetivo principal</b>
                    <p>
                      Proporcionar à todos geração de energia elétrica
                      sustentável e renovável para consumidores residenciais e
                      empresariais.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card" data-aos="fade-up-left">
                <div
                  className="card-header p-0 bg-transparent"
                  id="headingThree"
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Valores
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#our-values-accordion"
                >
                  <div className="card-body">
                    <b>Por que confiar na gente?</b>
                    <ul>
                      <li>Clientes 100% satisfeitos</li>
                      <li>Acompanhamento e prioridade para dúvidas</li>
                      <li>
                        Valorização e reconhecimento dos clientes e
                        colaboradores
                      </li>
                      <li>Preservação do meio ambiente</li>
                      <li>Ética e transparência</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
