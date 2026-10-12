import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Toaster } from 'sonner';
import { AuthProvider } from "@/providers/auth-provider";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { ScriptRenderer } from "@/components/ScriptRenderer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let scripts: any[] = [];
  const primaryApi = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://api.dwalt.net/api";
  const fallbackApi = "https://api.dwalt.net/api";

  try {
    let res = await fetch(`${primaryApi}/scripts`, {
      next: { revalidate: 60 }
    }).catch(() => null);

    // If local dev server returned error or is offline, fallback to production api
    if (!res || !res.ok) {
      res = await fetch(`${fallbackApi}/scripts`, {
        next: { revalidate: 60 }
      }).catch(() => null);
    }

    if (res && res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        scripts = data.filter((s: any) => s.isActive);
      }
    }
  } catch (error) {
    console.error("Failed to fetch scripts:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DWalt Energia",
    "url": "https://www.dwalt.net",
    "logo": "https://www.dwalt.net/logo.png",
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
        {scripts.map((script: any) => (
          <ScriptRenderer
            key={`script-${script.id}`}
            id={script.id}
            code={script.code}
          />
        ))}

        <AuthProvider>
          <SmoothScroll />
          <JsonLd data={jsonLd} />
          {children}
          <WhatsAppWidget />
          <Toaster richColors position="top-center" closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}

