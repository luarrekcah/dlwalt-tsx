import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { AppShowcase } from "@/components/AppShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <AppShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
