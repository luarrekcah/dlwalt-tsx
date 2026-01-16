import Link from "next/link";
import { Sun, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                <Sun className="h-6 w-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                DWalt <span className="text-primary">Energia</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Soluções completas em energia solar para residências, comércios e indústrias.
                            Tecnologia, economia e sustentabilidade ao seu alcance.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {["Início", "Sobre Nós", "Serviços", "Projetos", "Blog", "Contato"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-400 hover:text-primary text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
                        <ul className="space-y-2">
                            {["Instalação Residencial", "Energia Comercial", "Usinas Solares", "Manutenção e Limpeza", "Projetos Elétricos"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>
                                    Av. Amazonas, 1234 - Centro<br />
                                    Belo Horizonte - MG
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>(31) 3333-3333</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>contato@dwalt.net</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} DWalt Energia. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
