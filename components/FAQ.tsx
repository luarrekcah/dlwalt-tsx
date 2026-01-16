'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
    return (
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Header Column */}
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <HelpCircle className="w-4 h-4" />
                            Dúvidas Frequentes
                        </div>
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Tire suas dúvidas sobre <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">
                                Energia Solar
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Reunimos as perguntas mais comuns para te ajudar a entender como nosso sistema pode transformar sua economia e sustentabilidade.
                        </p>
                    </div>

                    {/* Accordion Column */}
                    <div className="lg:w-2/3">
                        <Accordion type="single" collapsible className="w-full space-y-4">

                            <AccordionItem value="item-1" className="border border-white/10 rounded-xl px-6 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                                    Como funciona a energia solar à noite?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                    À noite, seus painéis não geram energia. No entanto, se você estiver conectado à rede elétrica (On-Grid), você utilizará a energia da concessionária. O grande benefício é o sistema de compensação: o excedente gerado durante o dia é injetado na rede e vira créditos para abater o consumo noturno.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border border-white/10 rounded-xl px-6 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                                    Qual é o tempo de retorno do investimento (Payback)?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                    Em média, o retorno do investimento para sistemas residenciais e comerciais em Rondônia gira em torno de 2,5 a 4 anos. Considerando a vida útil do sistema de mais de 25 anos, você terá mais de duas décadas de "lucro" com a energia gerada.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border border-white/10 rounded-xl px-6 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                                    Os painéis precisam de muita manutenção?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                    A manutenção é mínima e consiste basicamente na limpeza dos módulos para garantir a máxima eficiência. Recomendamos uma limpeza a cada 6 meses ou 1 ano, dependendo da poeira do local. O sistema em si é muito robusto e durável.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border border-white/10 rounded-xl px-6 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                                    Como funciona o financiamento?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                    Trabalhamos com diversas linhas de financiamento bancário específicas para energia solar (como Santander, BV, Solfácil). Muitas vezes, é possivel trocar o valor da sua conta de luz pela parcela do financiamento, sem descapitalizar.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="border border-white/10 rounded-xl px-6 bg-zinc-900/50 backdrop-blur-sm data-[state=open]:border-primary/50 transition-colors">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                                    O que acontece em dias nublados ou chuva?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                    O sistema continua gerando energia, porém em menor intensidade do que em dias de sol pleno. A tecnologia fotovoltaica funciona com a radiação solar, que atravessa as nuvens. O dimensionamento do seu projeto já leva em consideração a média climática da região para garantir a geração anual esperada.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
