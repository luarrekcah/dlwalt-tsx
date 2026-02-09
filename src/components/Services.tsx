import { Zap, Home, Building2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Residencial",
        description: "Reduza a conta de luz da sua casa e valorize seu imóvel com energia limpa.",
        icon: Home,
    },
    {
        title: "Comercial",
        description: "Aumente a competitividade da sua empresa reduzindo custos fixos.",
        icon: Building2,
    },
    {
        title: "Usinas Solares",
        description: "Grandes projetos para investidores e alto consumo energético.",
        icon: Zap,
    },
    {
        title: "Manutenção",
        description: "Serviços de limpeza e manutenção preventiva para garantir máxima eficiência.",
        icon: Wrench,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 sm:text-4xl text-foreground">
                        Soluções Completas em Energia Solar
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Da análise inicial à instalação e manutenção, cuidamos de tudo para você.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-border"
                        >
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 transition-all group-hover:bg-primary/20" />

                            <service.icon className={cn("h-12 w-12 mb-6 text-primary")} />

                            <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
