"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

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

// Configurações de cálculo
const ENERGY_PRICE = 0.95; // R$/kWh
const ENERGY_INFLATION = 0.06; // 6% ao ano

export default function CalculatorClient({ affiliateParent }: { affiliateParent?: string }) {
    const [cityUf, setCityUf] = useState("");
    const [kwh, setKwh] = useState(0);
    const [result, setResult] = useState<{
        irradiation: string;
        systemSize: string;
        investment: string;
        monthlySavings: string;
        paybackTime: string;
        totalSavings25Years: string;
        chartData: any[];
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

        // Investimento Estimado
        const investmentVal = kwh * 19.4;

        // --- CÁLCULOS FINANCEIROS ---

        // Economia Mensal Estimada
        const monthlySavingsVal = kwh * ENERGY_PRICE;

        // Tempo de Retorno (anos) -> Investimento / (Economia Mensal * 12)
        // Evitar divisão por zero
        const annualSavingsInitial = monthlySavingsVal * 12;
        const paybackYearsVal = investmentVal / annualSavingsInitial;

        // Projeção 25 anos (Gráfico)
        // Linha: "Saldo Acumulado" (Economia acumulada - Investimento)
        const chartData = [];
        let accumulatedSavings = -investmentVal; // Começa negativo (pagou o sistema)
        let currentEnergyPrice = ENERGY_PRICE;

        // Ano 0
        chartData.push({
            year: 0,
            saldo: -investmentVal,
        });

        for (let year = 1; year <= 25; year++) {
            // Economia neste ano considerando inflação da energia
            const yearlySavings = kwh * 12 * currentEnergyPrice;
            accumulatedSavings += yearlySavings;

            chartData.push({
                year: year,
                saldo: Math.round(accumulatedSavings),
            });

            // Inflaciona o preço da energia para o próximo ano
            currentEnergyPrice *= (1 + ENERGY_INFLATION);
        }

        // Economia Total em 25 anos (Valor final do saldo)
        // Se quisermos apenas o quanto economizou (sem descontar o investimento inicial no texto, 
        // mas geralmente "Economia Total" subtrai o investimento para mostrar o lucro líquido, 
        // ou mostra o bruto. Vamos mostrar o LÍQUIDO (Saldo Final)).
        const totalSavingsVal = accumulatedSavings;

        // Formatação
        const formattedInvestment = investmentVal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        const formattedMonthlySavings = monthlySavingsVal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        const formattedTotalSavings = totalSavingsVal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        // Payback formatado (ex: "3 anos e 2 meses")
        const paybackYearsFloor = Math.floor(paybackYearsVal);
        const paybackMonths = Math.round((paybackYearsVal - paybackYearsFloor) * 12);
        const formattedPayback = `${paybackYearsFloor} anos${paybackMonths > 0 ? ` e ${paybackMonths} meses` : ""}`;

        const simulationText = `Simulação realizada:\n- Cidade/UF: ${cityUf}\n- Consumo mensal: ${kwh} kWh\n- Sistema: ${systemSizeVal.toFixed(2)} kWp\n- Investimento: ${formattedInvestment}\n- Economia Mensal: ${formattedMonthlySavings}\n- Retorno (Payback): ${formattedPayback}\n- Economia em 25 anos: ${formattedTotalSavings}`;

        setResult({
            irradiation: irradiation.toFixed(2),
            systemSize: systemSizeVal.toFixed(2),
            investment: formattedInvestment,
            monthlySavings: formattedMonthlySavings,
            paybackTime: formattedPayback,
            totalSavings25Years: formattedTotalSavings,
            chartData: chartData,
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
          max-width: 900px;
          margin: auto;
        }
        
        .result-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .result-card h5 {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: 5px;
            font-weight: 600;
        }
        .result-card .value {
            font-size: 1.25rem;
            font-weight: bold;
            color: #212529;
        }
        .result-card .value.highlight {
            color: #28a745;
        }
      `}</style>

            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <div className="container mt-5 calc-container">
                                <h1 className="text-center mb-2" style={{ fontWeight: 800 }}>Calculadora Solar</h1>
                                <p className="text-center text-muted mb-5">
                                    Simule o tamanho do seu sistema e descubra o quanto você pode economizar.
                                </p>

                                {/* FORMULÁRIO */}
                                <div className="card shadow-sm p-4 mb-5">
                                    <form id="solarForm" onSubmit={handleSubmit}>
                                        <input
                                            type="hidden"
                                            id="affiliateParent"
                                            value={affiliateParent}
                                        />

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label font-weight-bold">Localização (Cidade/UF)</label>
                                                <input
                                                    type="text"
                                                    id="cityUf"
                                                    className="form-control"
                                                    value={cityUf}
                                                    readOnly
                                                    placeholder="Detectando..."
                                                />
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <label className="form-label font-weight-bold">Consumo Médio Mensal (kWh)</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="kwh"
                                                    required
                                                    min="50"
                                                    onChange={(e) => setKwh(Number(e.target.value))}
                                                    placeholder="Ex: 400"
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg w-100 font-weight-bold text-white">
                                            Calcular Agora
                                        </button>
                                    </form>
                                </div>

                                {/* RESULTADO */}
                                {result && (
                                    <div id="resultBox" className="animate__animated animate__fadeIn">
                                        <h3 className="mb-4 font-weight-bold">Resultado da Análise</h3>

                                        <div className="row mb-4">
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border">
                                                    <h5>Investimento Estimado</h5>
                                                    <div className="value">{result.investment}</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border">
                                                    <h5>Economia Mensal</h5>
                                                    <div className="value highlight">{result.monthlySavings}</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border">
                                                    <h5>Tempo de Retorno</h5>
                                                    <div className="value">{result.paybackTime}</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border">
                                                    <h5>Sistema Necessário</h5>
                                                    <div className="value">{result.systemSize} kWp</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border">
                                                    <h5>Irradiação Local</h5>
                                                    <div className="value">{result.irradiation} <small>kWh/m²</small></div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="result-card shadow-sm border" style={{ background: '#d4edda', borderColor: '#c3e6cb' }}>
                                                    <h5 style={{ color: '#155724' }}>Economia em 25 anos</h5>
                                                    <div className="value text-success">{result.totalSavings25Years}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* GRÁFICO */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header bg-white border-bottom-0 pt-4 px-4">
                                                <h5 className="font-weight-bold mb-0">Projeção de Economia Acumulada (25 anos)</h5>
                                                <small className="text-muted">Comparativo do saldo financeiro ao longo do tempo.</small>
                                            </div>
                                            <div className="card-body">
                                                <div style={{ width: '100%', height: 350 }}>
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <LineChart
                                                            data={result.chartData}
                                                            margin={{
                                                                top: 5,
                                                                right: 30,
                                                                left: 20,
                                                                bottom: 5,
                                                            }}
                                                        >
                                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                                                            <XAxis
                                                                dataKey="year"
                                                                label={{ value: 'Anos', position: 'insideBottomRight', offset: -10 }}
                                                                tickLine={false}
                                                            />
                                                            <YAxis
                                                                tickFormatter={(value) => `R$ ${value / 1000}k`}
                                                                tickLine={false}
                                                            />
                                                            <Tooltip
                                                                formatter={(value: number | undefined) => [`R$ ${(value || 0).toLocaleString('pt-BR')}`, 'Saldo Acumulado']}
                                                                labelFormatter={(label) => `Ano ${label}`}
                                                            />
                                                            <Legend verticalAlign="top" height={36} />
                                                            <Line
                                                                type="monotone"
                                                                dataKey="saldo"
                                                                name="Saldo Financeiro"
                                                                stroke="#28a745"
                                                                strokeWidth={3}
                                                                dot={false}
                                                                activeDot={{ r: 8 }}
                                                            />
                                                        </LineChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-center mt-5 mb-5">
                                            <p className="lead mb-4">
                                                O sol trabalha para você. Pare de alugar energia, comece a gerar a sua.
                                            </p>
                                            <button
                                                className="btn btn-success btn-lg px-5 py-3 shadow font-weight-bold"
                                                style={{ fontSize: '1.2rem' }}
                                                data-toggle="modal"
                                                data-target="#leadModal"
                                            >
                                                Solicitar Orçamento Gratuito
                                            </button>
                                            <p className="small text-muted mt-3">
                                                * Valores estimados baseados na irradiação média do estado e tarifas médias.
                                            </p>
                                        </div>
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
