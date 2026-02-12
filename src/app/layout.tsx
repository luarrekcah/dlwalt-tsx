import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DWalt Energia | Soluções em Energia Solar",
  description: "Transforme sua conta de luz em investimento com a DWalt Energia. Projetos personalizados, economia de até 95% e tecnologia de ponta.",
  openGraph: {
    title: "DWalt Energia | Energia Solar",
    description: "Economize até 95% na conta de luz com energia solar fotovoltaica. Solicite seu orçamento.",
    type: "website",
    locale: "pt_BR",
  },
};

// ... imports
// ... imports
import { Toaster } from 'sonner';
import { AuthProvider } from "@/providers/auth-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DWalt Energia",
    "url": "https://www.dwalt.net", // Replace with actual domain
    "logo": "https://www.dwalt.net/logo.png", // Replace with actual logo URL
    "sameAs": [
      "https://instagram.com/dwaltenergia",
      "https://facebook.com/dwaltenergia",
      "https://youtube.com/dwaltenergia"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5569999999999",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          <SmoothScroll />
          <JsonLd data={jsonLd} />
          {children}
          <Toaster richColors position="top-center" closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
