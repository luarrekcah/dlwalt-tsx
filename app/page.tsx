import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { AppShowcase } from "@/components/AppShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona a energia solar à noite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "À noite, seus painéis não geram energia. No entanto, se você estiver conectado à rede elétrica (On-Grid), você utilizará a energia da concessionária. O grande benefício é o sistema de compensação: o excedente gerado durante o dia é injetado na rede e vira créditos para abater o consumo noturno."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é o tempo de retorno do investimento (Payback)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em média, o retorno do investimento para sistemas residenciais e comerciais em Rondônia gira em torno de 2,5 a 4 anos."
        }
      },
      // Add more FAQs as needed to match the UI component
    ]
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={jsonLd} />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <AppShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
