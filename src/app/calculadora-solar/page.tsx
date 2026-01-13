import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Calculadora Solar | D Walt Energia Solar",
    description:
        "Simule o custo do seu sistema de energia solar fotovoltaica. Veja quanto pode economizar na sua conta de luz.",
    openGraph: {
        title: "Calculadora Solar | D Walt Energia Solar",
        description:
            "Simule o custo do seu sistema de energia solar fotovoltaica e descubra sua economia.",
        type: "website",
    },
};

export default function SolarCalculatorPage() {
    // Assuming affiliateParent might come from cookies or params in a real Scenario, 
    // currently just passing undefined or a placeholder if needed.
    return (
        <>
            <Navbar />
            <CalculatorClient />
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
}
