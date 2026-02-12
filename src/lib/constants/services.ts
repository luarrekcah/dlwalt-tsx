export interface ServiceContent {
    title: string;
    slug: string;
    description: string;
    pain: string;
    solution: string;
    benefits: string[];
    cta: string;
    image: string;
    features: { title: string; description: string }[];
    faq: { question: string; answer: string }[];
    stats: { value: string; label: string }[];
    ctaUrl?: string;
}

export const SOLAR_SERVICES: ServiceContent[] = [
    {
        title: "Energia Solar Residencial",
        slug: "energia-solar-residencial",
        description: "Transforme a luz do sol em economia real para sua casa.",
        pain: "Cansado de ver a conta de luz aumentar todo mês e levar uma grande fatia do orçamento familiar? A dependência da concessionária deixa você refém de bandeiras tarifárias e aumentos abusivos.",
        solution: "Com um sistema fotovoltaico residencial da DWalt, você gera sua própria energia limpa. Projetamos uma solução sob medida para o telhado da sua casa, garantindo autossuficiência energética e conforto.",
        benefits: [
            "Redução de até 95% na conta de luz",
            "Valorização imediata do seu imóvel",
            "Proteção contra inflação energética",
            "Monitoramento em tempo real pelo celular"
        ],
        cta: "Quero Economizar em Casa",
        image: "/images/services/residencial.jpg",
        features: [
            {
                title: "Análise de Consumo",
                description: "Estudamos seu histórico de contas para dimensionar o sistema perfeito."
            },
            {
                title: "Projeto Personalizado",
                description: "Design estético que valoriza a arquitetura da sua casa."
            },
            {
                title: "Instalação Express",
                description: "Equipe silenciosa e organizada, finalizando em poucos dias."
            },
            {
                title: "Homologação",
                description: "Cuidamos de toda a burocracia com a concessionária."
            }
        ],
        faq: [
            {
                question: "O sistema funciona em dias nublados?",
                answer: "Sim! Os painéis continuam gerando energia com a radiação difusa, garantindo produção mesmo sem sol direto."
            },
            {
                question: "Quanto tempo dura os painéis?",
                answer: "Os módulos têm garantia de performance de 25 anos e vida útil superior a 30 anos."
            },
            {
                question: "Preciso de baterias?",
                answer: "Não necessariamente. No sistema On-Grid, a rede elétrica funciona como uma bateria virtual, armazenando seus créditos."
            }
        ],
        stats: [
            { value: "95%", label: "Economia Mensal" },
            { value: "25 Anos", label: "Garantia de Performance" },
            { value: "3.5 Anos", label: "Retorno Médio (Payback)" }
        ]
    },
    {
        title: "Manutenção e Limpeza",
        slug: "manutencao-e-limpeza",
        description: "Garanta a máxima eficiência do seu investimento.",
        pain: "Você sabia que painéis solares sujos ou com conexões frouxas podem perder até 25% da capacidade de geração? A falta de manutenção preventiva é a principal causa de prejuízo em usinas solares.",
        solution: "Nossa equipe especializada realiza a limpeza técnica com produtos específicos e faz um check-up elétrico completo (termografia e reaperto), assegurando que seu sistema opere na potência máxima.",
        benefits: [
            "Recuperação imediata da eficiência de geração",
            "Prevenção de falhas e riscos de incêndio",
            "Relatório técnico detalhado com fotos",
            "Aumento da vida útil dos equipamentos"
        ],
        cta: "Agendar Manutenção Agora",
        image: "/images/services/manutencao.jpg",
        features: [
            {
                title: "Limpeza Técnica",
                description: "Uso de água desmineralizada e escovas macias para não riscar o vidro."
            },
            {
                title: "Termografia",
                description: "Detecção de pontos quentes (hotspots) que indicam falhas invisíveis."
            },
            {
                title: "Reaperto de Conexões",
                description: "Evita mau contato e superaquecimento no quadro elétrico."
            },
            {
                title: "Medição de Performance",
                description: "Comparativo de geração antes e depois do serviço."
            }
        ],
        faq: [
            {
                question: "Com que frequência devo limpar?",
                answer: "Recomendamos a cada 6 meses, ou 4 meses em áreas com muita poeira ou obras próximas."
            },
            {
                question: "Posso limpar eu mesmo?",
                answer: "Não recomendamos. O risco de choque elétrico, queda de altura e danos aos painéis por produtos químicos inadequados é alto."
            },
            {
                question: "Vocês atendem sistemas instalados por outros?",
                answer: "Sim! Realizamos manutenção em qualquer usina solar, independente da empresa instaladora."
            }
        ],
        stats: [
            { value: "+20%", label: "Recuperação de Energia" },
            { value: "6 Meses", label: "Intervalo Recomendado" },
            { value: "100%", label: "Segurança Técnica" }
        ]
    },
    {
        title: "Instalação Fotovoltaica",
        slug: "instalacao-fotovoltaica",
        description: "Instalação rápida, segura e sem dor de cabeça.",
        pain: "Muitas empresas prometem muito e entregam obras atrasadas, com acabamento ruim e riscos de infiltração no telhado. Uma instalação mal feita é um pesadelo que dura anos e desvaloriza seu imóvel.",
        solution: "A DWalt utiliza padrão ouro de instalação. Nossa equipe própria é certificada (NR10/NR35) e segue rigorosos protocolos de segurança. Entregamos seu sistema funcionando perfeitamente, com acabamento impecável.",
        benefits: [
            "Equipe técnica própria e certificada",
            "Instalação rápida e organizada",
            "Cuidado total com a integridade do telhado",
            "Homologação completa junto à concessionária"
        ],
        cta: "Solicitar Orçamento de Instalação",
        image: "/images/services/instalacao.jpg",
        features: [
            {
                title: "Vistoria Prévia",
                description: "Avaliamos a estrutura do telhado e elétrica antes de começar."
            },
            {
                title: "Materiais Premium",
                description: "Utilizamos apenas cabos, estruturas e fixadores de alta durabilidade."
            },
            {
                title: "Segurança Total",
                description: "Uso rigoroso de EPIs e linhas de vida durante a obra."
            },
            {
                title: "Start-up Assistido",
                description: "Configuração do monitoramento e treinamento de uso para o cliente."
            }
        ],
        faq: [
            {
                question: "A instalação demora muito?",
                answer: "Sistemas residenciais típicos são instalados em 2 a 3 dias úteis."
            },
            {
                question: "Vai quebrar meu telhado?",
                answer: "Nossa equipe é treinada para caminhar e fixar estruturas sem danificar as telhas. Se houver qualquer quebra acidental, substituímos na hora."
            },
            {
                question: "Preciso fazer obra na casa?",
                answer: "Geralmente não. A intervenção é apenas no telhado e no quadro de distribuição."
            }
        ],
        stats: [
            { value: "3 Dias", label: "Tempo Médio de Instalação" },
            { value: "NR10/35", label: "Equipe Certificada" },
            { value: "10 Anos", label: "Garantia de Mão de Obra" }
        ]
    },
    {
        title: "Energia Solar Empresarial",
        slug: "energia-solar-empresarial",
        description: "Aumente a margem de lucro da sua empresa reduzindo custos fixos.",
        pain: "O custo da energia elétrica é um dos maiores vilões do fluxo de caixa e oscila todo mês. Cada real gasto com a concessionária é um real a menos no seu lucro ou na expansão do negócio.",
        solution: "Transforme esse custo fixo em ativo. Com a energia solar empresarial, você blinda seu negócio contra aumentos de tarifa, melhora o fluxo de caixa e ganha competitividade no mercado.",
        benefits: [
            "Retorno sobre Investimento (ROI) acelerado",
            "Marketing Verde: sua empresa sustentável",
            "Previsibilidade de custos operacionais",
            "Possibilidade de abater consumo de múltiplas filiais"
        ],
        cta: "Cotar Projeto Empresarial",
        image: "/images/services/empresarial.jpg",
        features: [
            {
                title: "Estudo de Viabilidade",
                description: "Calculamos o Payback e a TIR do investimento para sua diretoria."
            },
            {
                title: "Geração Remota",
                description: "Gere energia em um local e abata o consumo de filiais (Autoconsumo Remoto)."
            },
            {
                title: "Financiamento PJ",
                description: "Linhas de crédito específicas com carência e taxas reduzidas."
            },
            {
                title: "Monitoramento Pro",
                description: "Relatórios mensais de geração para sua contabilidade."
            }
        ],
        faq: [
            {
                question: "Quanto tempo para o investimento se pagar?",
                answer: "Para empresas, o Payback médio fica entre 2,5 e 4 anos, dependendo da tarifa."
            },
            {
                question: "Posso instalar no meu galpão alugado?",
                answer: "Sim, e o sistema pode ser removido e reinstalado se você mudar de endereço."
            },
            {
                question: "Consigo abater imposto de renda?",
                answer: "Sim, através da depreciação acelerada de bens de capital."
            }
        ],
        stats: [
            { value: "3 Anos", label: "Payback Médio" },
            { value: "25%+", label: "TIR (Retorno Anual)" },
            { value: "100%", label: "Dedução de Despesa" }
        ]
    },
    {
        title: "Energia Solar Industrial",
        slug: "energia-solar-industrial",
        description: "Soluções de alta potência para grandes consumidores.",
        pain: "Indústrias sofrem com demandas contratadas caríssimas, multas de ultrapassagem e instabilidade no fornecimento, o que prejudica a produção e encarece o produto final.",
        solution: "Desenvolvemos usinas solares de grande porte e alta tensão (Grupo A). Engenharia robusta para suportar o consumo industrial, garantindo energia barata, estável e previsível para sua produção.",
        benefits: [
            "Projetos de Média e Alta Tensão",
            "Redução drástica do Custo Operacional (OPEX)",
            "Gestão inteligente de energia (Mercado Livre)",
            "Amortização fiscal"
        ],
        cta: "Falar com Engenheiro",
        image: "/images/services/industrial.jpg",
        features: [
            {
                title: "Engenharia Grupo A",
                description: "Especialistas em subestações e conexão em média tensão."
            },
            {
                title: "Gestão de Demanda",
                description: "Otimização da demanda contratada para evitar multas."
            },
            {
                title: "Carport Solar",
                description: "Utilize o estacionamento da fábrica para gerar energia."
            },
            {
                title: "Mercado Livre",
                description: "Consultoria para migração e maximização de economia."
            }
        ],
        faq: [
            {
                question: "Vocês fazem usinas de solo?",
                answer: "Sim, somos especialistas em estruturas de solo, fixas ou trackers."
            },
            {
                question: "Como fica a demanda contratada?",
                answer: "Ajudamos a renegociar sua demanda baseada na nova matriz energética."
            },
            {
                question: "Qual o tamanho mínimo?",
                answer: "Atendemos indústrias de todos os portes, desde pequenas manufaturas até grandes complexos."
            }
        ],
        stats: [
            { value: "MW+", label: "Capacidade de Projetos" },
            { value: "A4/A3", label: "Conexão Média Tensão" },
            { value: "30%", label: "Economia no Grupo A" }
        ]
    },
    {
        title: "Engenharia Elétrica",
        slug: "engenharia-eletrica",
        description: "Projetos, laudos e regularizações com responsabilidade técnica.",
        pain: "Instalações elétricas precárias, falta de projeto ou \"as-built\", e reprovações na concessionária geram multas, riscos de incêndio e impedem a liberação de alvarás.",
        solution: "Nosso departamento de engenharia resolve burocracias e problemas técnicos. Elaboramos projetos, laudos, SPDA (para-raios) e subestações com total conformidade às normas (NBR 5410, NR10).",
        benefits: [
            "Projetos aprovados na concessionária",
            "Adequação às normas de segurança (Bombeiros)",
            "Laudos técnicos com ART",
            "Dimensionamento correto de carga"
        ],
        cta: "Solicitar Serviço de Engenharia",
        image: "/images/services/engenharia.jpg",
        features: [
            {
                title: "Projetos Elétricos",
                description: "Residencial, predial e industrial (baixa e média tensão)."
            },
            {
                title: "Laudo de SPDA",
                description: "Verificação e projeto de sistemas de para-raios."
            },
            {
                title: "Aumento de Carga",
                description: "Projeto e trâmite para mudança de padrão de entrada."
            },
            {
                title: "Prontuário NR10",
                description: "Documentação obrigatória para segurança em instalações elétricas."
            }
        ],
        faq: [
            {
                question: "Vocês emitem ART?",
                answer: "Sim, todos os nossos serviços acompanham Anotação de Responsabilidade Técnica."
            },
            {
                question: "Faz projeto para terceiros?",
                answer: "Sim, atendemos arquitetos e construtoras que precisam de complementares elétricos."
            },
            {
                question: "Qual o prazo de um projeto?",
                answer: "Varia conforme a complexidade, mas projetos residenciais levam cerca de 5 dias úteis."
            }
        ],
        stats: [
            { value: "100%", label: "Aprovação Concessionária" },
            { value: "CREA", label: "Engenheiros Habilitados" },
            { value: "NBR", label: "Conformidade Total" }
        ]
    },
    {
        title: "Afiliados",
        slug: "afiliados",
        description: "Transforme sua rede de contatos em Renda Recorrente. A plataforma mais completa do mercado.",
        pain: "Você busca uma fonte de renda extra robusta, mas não quer a dor de cabeça de abrir uma empresa, comprar estoque ou gerenciar obras complexas?",
        solution: "A plataforma de Afiliados DWalt é a solução. Você indica, nosso time vende, e a comissão cai na sua conta. Painel 100% digital, transparente e sem burocracia.",
        benefits: [
            "Comissões Agressivas (mais que um salário por venda)",
            "Painel Intuitivo para gestão de leads",
            "Time de Vendas Especializado trabalhando por você",
            "Prêmios e Campanhas (Viagens e Eletrônicos)"
        ],
        cta: "Começar Agora",
        ctaUrl: "https://afiliados.dwalt.net/registro",
        image: "/images/services/afiliados.jpg",
        features: [
            {
                title: "Cadastre-se",
                description: "Crie sua conta gratuita em 2 minutos e acesse seu painel exclusivo."
            },
            {
                title: "Indique",
                description: "Envie contatos interessados em energia solar direto pela plataforma."
            },
            {
                title: "Acompanhe",
                description: "Veja em tempo real o status de cada negociação no seu funil."
            },
            {
                title: "Receba",
                description: "Venda fechada? Comissão garantida direto na sua conta bancária."
            }
        ],
        faq: [
            {
                question: "Preciso investir dinheiro?",
                answer: "Zero. O cadastro é gratuito e você não precisa comprar nenhum equipamento."
            },
            {
                question: "Preciso saber vender?",
                answer: "Não. Você é o 'abridor de portas'. Nossos consultores especialistas fazem o fechamento técnico."
            },
            {
                question: "Quando recebo?",
                answer: "Assim que o cliente paga a entrada ou o financiamento é liberado, sua comissão é processada."
            }
        ],
        stats: [
            { value: "Renda", label: "Recorrente e Escalável" },
            { value: "Zero", label: "Burocracia ou Custo" },
            { value: "100%", label: "Online e Transparente" }
        ]
    },
    {
        title: "Energia Solar",
        slug: "energia-solar",
        description: "A solução definitiva para sua independência energética.",
        pain: "Continuar pagando 'aluguel' de energia para a concessionária é jogar dinheiro fora todos os meses. É um gasto que nunca termina, só aumenta, e não te traz nenhum retorno.",
        solution: "A energia solar é a tecnologia que permite você gerar sua própria riqueza. O sol é gratuito, e com a tecnologia da DWalt, você o converte em eletricidade para alimentar seus sonhos e poupar seu dinheiro.",
        benefits: [
            "Energia limpa e renovável",
            "Garantia de performance de 25 anos",
            "Valorização do imóvel",
            "Financiamento que se paga com a própria economia"
        ],
        cta: "Simular Meu Sistema",
        image: "/images/services/geral.jpg",
        features: [
            {
                title: "Independência",
                description: "Produza o que consome e esqueça os aumentos da conta de luz."
            },
            {
                title: "Sustentabilidade",
                description: "Reduza sua pegada de carbono e contribua para um mundo melhor."
            },
            {
                title: "Tecnologia MLPE",
                description: "Usamos microinversores ou otimizadores para máxima segurança."
            },
            {
                title: "Controle Total",
                description: "App no celular para ver quanto você está economizando em tempo real."
            }
        ],
        faq: [
            {
                question: "Energia solar é cara?",
                answer: "Hoje é mais barato ter energia solar financiada do que pagar a conta de luz."
            },
            {
                question: "Demora para se pagar?",
                answer: "O retorno do investimento ocorre em média em 3 a 5 anos. Depois é só lucro."
            },
            {
                question: "Funciona à noite?",
                answer: "À noite você usa a energia da rede, mas os créditos gerados durante o dia abatem esse consumo."
            }
        ],
        stats: [
            { value: "25 Anos", label: "Garantia" },
            { value: "95%", label: "Economia Máxima" },
            { value: "IP68", label: "Resistência Total" }
        ]
    }
];
