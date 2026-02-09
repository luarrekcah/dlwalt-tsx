export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string;
    category: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'vantagens-energia-solar-2026',
        title: 'Por que investir em energia solar em 2026?',
        excerpt: 'Descubra as principais vantagens econômicas e ambientais de adotar a energia solar fotovoltaica este ano.',
        content: `
      <h2>O cenário da energia solar em 2026</h2>
      <p>A energia solar continua sendo um dos melhores investimentos para residências e empresas no Brasil...</p>
      <h3>Economia na conta de luz</h3>
      <p>Com as tarifas de energia elétrica cada vez mais altas, gerar sua própria energia pode reduzir sua conta em até 95%...</p>
    `,
        author: 'Equipe DWalt',
        date: '15 de Janeiro de 2026',
        imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60',
        category: 'Economia'
    },
    {
        slug: 'manutencao-paineis-solares',
        title: 'Como funciona a manutenção dos painéis solares?',
        excerpt: 'Saiba tudo sobre a limpeza e manutenção preventiva do seu sistema fotovoltaico.',
        content: `
      <h2>Manutenção simples e barata</h2>
      <p>Uma das grandes vantagens da energia solar é a baixa necessidade de manutenção...</p>
      <h3>Limpeza dos módulos</h3>
      <p>A limpeza deve ser feita periodicamente para garantir a máxima eficiência na captação da luz solar...</p>
    `,
        author: 'Técnico Especialista',
        date: '10 de Janeiro de 2026',
        imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60',
        category: 'Manutenção'
    },
    {
        slug: 'energia-solar-valoriza-imovel',
        title: 'Energia solar valoriza seu imóvel?',
        excerpt: 'Entenda como a instalação de um sistema fotovoltaico pode aumentar o valor de mercado da sua casa.',
        content: `
      <h2>Valorização imobiliária</h2>
      <p>Estudos mostram que imóveis com geração própria de energia são mais valorizados e vendem mais rápido...</p>
    `,
        author: 'Equipe DWalt',
        date: '05 de Janeiro de 2026',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=60',
        category: 'Imóveis'
    },
    {
        slug: 'mito-ou-verdade-energia-solar',
        title: 'Mitos e Verdades sobre Energia Solar',
        excerpt: 'Desmistificamos as principais dúvidas sobre a tecnologia fotovoltaica.',
        content: `
      <h2>Funciona em dias nublados?</h2>
      <p>Sim! O sistema fotovoltaico gera energia através da radiação solar, não apenas da luz direta do sol...</p>
    `,
        author: 'Equipe DWalt',
        date: '28 de Dezembro de 2025',
        imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60',
        category: 'Curiosidades'
    },
    {
        slug: 'financiamento-solar-vale-a-pena',
        title: 'Financiamento de Energia Solar: Vale a pena?',
        excerpt: 'Troque a conta de luz pela parcela do financiamento e comece a economizar imediatamente.',
        content: `
      <h2>Sustentabilidade financeira</h2>
      <p>Muitas vezes, a parcela do financiamento do sistema solar é igual ou menor que a sua conta de luz atual...</p>
    `,
        author: 'Consultor Financeiro',
        date: '20 de Dezembro de 2025',
        imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60',
        category: 'Finanças'
    }
];
