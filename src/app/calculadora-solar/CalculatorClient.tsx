"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

// IRRADIAÇÃO MÉDIA POR ESTADO (kWh/m²/dia)
const irradiationData: Record<string, number> = {
    SP: 4.5,
    RJ: 4.8,
    MG: 5.0,
    BA: 5.5,
    ES: 4.6,
    PR: 4.2,
    SC: 4.0,
    RS: 3.9,
    GO: 5.4,
    MT: 5.3,
    MS: 5.2,
    DF: 5.3,
    PE: 5.4,
    CE: 5.6,
    RN: 5.7,
    PB: 5.5,
    PI: 5.5,
    MA: 5.2,
};

export default function CalculatorClient({ affiliateParent }: { affiliateParent?: string }) {
    const [cityUf, setCityUf] = useState("");
    const [kwh, setKwh] = useState(0);
    const [result, setResult] = useState<{
        irradiation: string;
        systemSize: string;
        investment: string;
        fullText: string;
    } | null>(null);

    useEffect(() => {
        // Obter localização do usuário (cidade + UF)
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data.city && data.region_code) {
                    const location = `${data.city}/${data.region_code}`;
                    setCityUf(location);
                }
            })
            .catch((err) => console.error("Erro ao obter localização", err));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!kwh || kwh < 50) {
            alert("O consumo mínimo deve ser 50 kWh.");
            return;
        }

        const uf = cityUf.split("/")[1] || "SP";
        const irradiation = irradiationData[uf] || 5.0;

        // Cálculo do tamanho do sistema
        const systemSizeVal = kwh / 30 / irradiation;

        // NOVO CÁLCULO DO PREÇO
        const investmentVal = kwh * 19.4;

        const formattedInvestment = investmentVal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        const simulationText = `Simulação realizada:\n- Cidade/UF: ${cityUf}\n- Consumo mensal: ${kwh} kWh\n- Irradiação média: ${irradiation.toFixed(
            2
        )} kWh/m²/dia\n- Sistema necessário: ${systemSizeVal.toFixed(
            2
        )} kWp\n- Investimento estimado: ${formattedInvestment}`;

        setResult({
            irradiation: irradiation.toFixed(2),
            systemSize: systemSizeVal.toFixed(2),
            investment: formattedInvestment,
            fullText: simulationText,
        });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const fullName = formData.get("fullName") as string;
        const cityUfVal = formData.get("cityUf") as string;
        const observations = formData.get("observations") as string;

        const message = `Olá, gostaria de solicitar um orçamento.\n\n*Nome:* ${fullName}\n*Cidade/UF:* ${cityUfVal}\n*Observações:*\n${observations}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/5569993695702?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <style jsx global>{`
        .layout-wrapper,
        .layout-container,
        .layout-page,
        .content-wrapper {
          margin-left: 0 !important;
          padding-left: 0 !important;
        }

        .layout-menu {
          display: none !important;
          width: 0 !important;
        }

        .calc-container {
          max-width: 650px;
          margin: auto;
        }
      `}</style>

            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <div className="container mt-5 calc-container">
                                <h2 className="text-center mb-4">Calculadora de Energia Solar</h2>

                                {/* FORMULÁRIO */}
                                <form id="solarForm" onSubmit={handleSubmit}>
                                    <input
                                        type="hidden"
                                        id="affiliateParent"
                                        value={affiliateParent}
                                    />

                                    <div className="mb-3">
                                        <label>Localização (Cidade/UF)</label>
                                        <input
                                            type="text"
                                            id="cityUf"
                                            className="form-control"
                                            value={cityUf}
                                            readOnly
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label>Consumo Médio Mensal (kWh)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="kwh"
                                            required
                                            min="50"
                                            onChange={(e) => setKwh(Number(e.target.value))}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100">
                                        Calcular Investimento
                                    </button>
                                </form>

                                {/* RESULTADO */}
                                {result && (
                                    <div id="resultBox" className="card p-4 shadow mt-4">
                                        <h4>Resultado da Simulação</h4>

                                        <p>
                                            <strong>Irradiação média:</strong>{" "}
                                            <span>{result.irradiation}</span> kWh/m²/dia
                                        </p>
                                        <p>
                                            <strong>Sistema necessário:</strong>{" "}
                                            <span>{result.systemSize}</span> kWp
                                        </p>
                                        <p>
                                            <strong>Investimento médio:</strong>{" "}
                                            <span>{result.investment}</span>
                                        </p>

                                        <button
                                            className="btn btn-success mt-3"
                                            data-toggle="modal"
                                            data-target="#leadModal"
                                        >
                                            Solicitar Orçamento
                                        </button>

                                        <br />

                                        <small>
                                            Note que essa simulação é apenas para uma ideia aproximada,
                                            solicite contato de um representante para um orçamento
                                            preciso, gratuito e sem compromisso.
                                        </small>
                                    </div>
                                )}
                            </div>

                            {/* SEO CONTENT SECTION */}
                            <div className="container mt-5" style={{ maxWidth: "800px" }}>
                                <article className="mb-5">
                                    <h3 className="mb-3">Como funciona a Calculadora Solar?</h3>
                                    <p>
                                        A <strong>Calculadora Solar da D Walt</strong> utiliza dados atualizados de irradiação solar
                                        média de cada estado brasileiro para estimar o potencial de geração de energia fotovoltaica
                                        no seu telhado. Ao informar sua cidade e seu consumo mensal em kWh (quilowatts-hora), nossa
                                        ferramenta calcula automaticamente:
                                    </p>
                                    <ul>
                                        <li>O <strong>tamanho do sistema</strong> (potência em kWp) necessário para suprir sua demanda.</li>
                                        <li>A <strong>economia estimada</strong> mensal e anual na conta de luz.</li>
                                        <li>O valor aproximado do <strong>investimento inicial</strong>.</li>
                                        <li>O tempo de retorno (payback) do investimento.</li>
                                    </ul>
                                </article>

                                <article className="mb-5">
                                    <h3 className="mb-3">Por que investir em Energia Solar?</h3>
                                    <p>
                                        Investir em um sistema fotovoltaico é uma das melhores decisões financeiras para residências e empresas.
                                        Confira as principais vantagens:
                                    </p>
                                    <div className="row mt-4">
                                        <div className="col-md-6 mb-3">
                                            <div className="card h-100 p-3 shadow-sm border-0">
                                                <h5 className="font-weight-bold text-success">Economia Imediata</h5>
                                                <p className="small mb-0">Reduza sua conta de energia em até 95% logo no primeiro mês de funcionamento.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card h-100 p-3 shadow-sm border-0">
                                                <h5 className="font-weight-bold text-success">Investimento Seguro</h5>
                                                <p className="small mb-0">Proteja-se da inflação energética e valorize seu imóvel com uma tecnologia durável (25+ anos).</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card h-100 p-3 shadow-sm border-0">
                                                <h5 className="font-weight-bold text-success">Sustentabilidade</h5>
                                                <p className="small mb-0">Gera energia limpa, renovável e silenciosa, contribuindo para o meio ambiente.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card h-100 p-3 shadow-sm border-0">
                                                <h5 className="font-weight-bold text-success">Baixa Manutenção</h5>
                                                <p className="small mb-0">Os painéis requerem pouca manutenção, basicamente apenas limpeza periódica.</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <article className="mb-5">
                                    <h3 className="mb-3">Perguntas Frequentes (FAQ)</h3>
                                    <div className="accordion" id="faqAccordion">
                                        <div className="card border-0 mb-2">
                                            <div className="card-header bg-light p-0" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left text-dark font-weight-bold p-3" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Quanto custa instalar energia solar?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    O custo varia conforme o consumo e a região. Nossa calculadora fornece uma estimativa precisa baseada no seu consumo mensal. Em geral, o retorno do investimento ocorre entre 3 a 5 anos.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-2">
                                            <div className="card-header bg-light p-0" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left text-dark font-weight-bold p-3" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        A energia solar funciona em dias nublados?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                                                <div className="card-body">
                                                    Sim! Os painéis fotovoltaicos funcionam com a radiação solar, não apenas com a luz direta do sol. Embora a produção seja menor em dias nublados ou chuvosos, o sistema continua gerando energia.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* MODAL LEAD */}
                            <div
                                className="modal fade"
                                id="leadModal"
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <form
                                        className="modal-content"
                                        onSubmit={handleWhatsAppSubmit}
                                    >
                                        <div className="modal-header">
                                            <h5 className="modal-title">Solicitar Orçamento</h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label>Nome Completo</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label>Cidade/UF</label>
                                                <input
                                                    type="text"
                                                    id="modalCityUf"
                                                    name="cityUf"
                                                    className="form-control"
                                                    required
                                                    defaultValue={cityUf}
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label>Observações</label>
                                                <textarea
                                                    name="observations"
                                                    id="modalObservations"
                                                    className="form-control"
                                                    rows={4}
                                                    value={result?.fullText || ""}
                                                    readOnly
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-success w-100">
                                                Enviar via WhatsApp
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
