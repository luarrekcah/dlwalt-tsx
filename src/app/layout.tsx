import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import Script from "next/script";
import { Toaster } from 'sonner';
import { AuthProvider } from "@/providers/auth-provider";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10800412438"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10800412438');
          `}
        </Script>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '25094130833530947');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25094130833530947&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
