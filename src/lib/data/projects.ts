export interface Project {
    slug: string;
    title: string;
    location: string;
    size: string;
    savings: string;
    panels: number;
    image: string;
    description: string;
    category: "Residencial" | "Comercial" | "Rural" | "Industrial";
    date: string;
}

export const PROJECTS: Project[] = [
    {
        slug: "residencia-silva-jardins",
        title: "Residência Família Silva",
        location: "Cond. Jardins, Ariquemes - RO",
        size: "8.5 kWp",
        savings: "R$ 950,00/mês",
        panels: 16,
        image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop",
        description: "Sistema residencial de alta performance instalado em telhado cerâmico. O projeto foi dimensionado para cobrir 100% do consumo da família, incluindo previsão para futuro carregamento de veículo elétrico.",
        category: "Residencial",
        date: "Jan 2025"
    },
    {
        slug: "mercado-central-ariquemes",
        title: "Mercado Central",
        location: "Centro, Ariquemes - RO",
        size: "45 kWp",
        savings: "R$ 4.200,00/mês",
        panels: 82,
        image: "https://images.unsplash.com/photo-1613665813446-82a781d6831d?q=80&w=2574&auto=format&fit=crop",
        description: "Instalação comercial em telhado metálico. O sistema proporciona uma redução drástica nos custos operacionais do mercado, permitindo maior competitividade nos preços finais.",
        category: "Comercial",
        date: "Dez 2024"
    },
    {
        slug: "fazenda-sol-nascente",
        title: "Fazenda Sol Nascente",
        location: "Zona Rural, Porto Velho - RO",
        size: "120 kWp",
        savings: "R$ 11.500,00/mês",
        panels: 218,
        image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop",
        description: "Usina de solo com estrutura fixa. Fornece energia para toda a operação de irrigação e maquinário da fazenda, garantindo sustentabilidade e independência energética.",
        category: "Rural",
        date: "Nov 2024"
    },
    {
        slug: "industria-metalurgica-ro",
        title: "Metalúrgica Rondônia",
        location: "Distrito Industrial, Ariquemes - RO",
        size: "250 kWp",
        savings: "R$ 24.000,00/mês",
        panels: 450,
        image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=2574&auto=format&fit=crop",
        description: "Grande projeto industrial com inversores de alta potência. A instalação cobre a demanda energética de tornos, soldas e todo o parque fabril.",
        category: "Industrial",
        date: "Out 2024"
    },
    {
        slug: "condominio-verde-vida",
        title: "Condomínio Verde Vida",
        location: "Porto Velho - RO",
        size: "60 kWp",
        savings: "R$ 5.800,00/mês",
        panels: 110,
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee77d8c?q=80&w=2574&auto=format&fit=crop",
        description: "Geração compartilhada para áreas comuns do condomínio, reduzindo a taxa condominial para todos os moradores.",
        category: "Residencial",
        date: "Set 2024"
    }
];
