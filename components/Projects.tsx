export function Projects() {
    // Placeholder projects data
    const projects = [
        {
            title: "Residência Silva",
            location: "Cond. Jardins",
            size: "8.5 kWp",
            savings: "R$ 950,00/mês",
            image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Mercado Central",
            location: "Centro",
            size: "45 kWp",
            savings: "R$ 4.200,00/mês",
            image: "https://images.unsplash.com/photo-1613665813446-82a781d6831d?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Fazenda Sol Nascente",
            location: "Zona Rural",
            size: "120 kWp",
            savings: "R$ 11.500,00/mês",
            image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2574&auto=format&fit=crop"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-zinc-950 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl text-white">
                            Projetos Realizados
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl">
                            Conheça algumas das nossas instalações e veja o resultado da nossa qualidade técnica.
                        </p>
                    </div>
                    <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                        Ver Portfolio Completo &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                            <div className="aspect-[16/10] overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-zinc-400 mb-4">{project.location}</p>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Potência</p>
                                        <p className="font-semibold text-primary">{project.size}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Economia</p>
                                        <p className="font-semibold text-primary">{project.savings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
