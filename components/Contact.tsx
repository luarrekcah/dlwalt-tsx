import { Button } from "./ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-5xl">
                            Pronto para zerar sua conta de luz?
                        </h2>
                        <p className="text-primary-foreground/90 text-xl leading-relaxed mb-8 max-w-lg">
                            Solicite um orçamento gratuito. Nossa equipe de engenheiros fará uma análise
                            personalizada do seu consumo e telhado.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-1 bg-white/30 rounded-full" />
                                <div>
                                    <p className="font-bold text-2xl">Mais de 2.5 MWp</p>
                                    <p className="text-sm opacity-80">De potência instalada</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-1 bg-white/30 rounded-full" />
                                <div>
                                    <p className="font-bold text-2xl">Atendemos em todo Estado</p>
                                    <p className="text-sm opacity-80">Logística eficiente</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl text-foreground">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    placeholder="(31) 99999-9999"
                                />
                            </div>
                            <Button size="lg" className="w-full text-lg font-semibold">
                                Solicitar Orçamento Grátis
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                Seus dados estão seguros conosco.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
