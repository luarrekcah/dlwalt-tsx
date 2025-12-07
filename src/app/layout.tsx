/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import "@/styles/globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main role="main">{children}</main>
        <SpeedInsights />

        {/* ==== PLUGINS JS (igual no seu HTML raiz) ==== */}
        <Script
          src="/plugins/jQuery/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/plugins/colorbox/jquery.colorbox.js" />
        <Script src="/plugins/slick/slick.min.js" />
        <Script src="/plugins/slick/slick-animation.min.js" />
        <Script src="/plugins/bootstrap/bootstrap.min.js" />
        <Script src="/plugins/aos/aos.js" />
        <Script src="/plugins/shuffle/shuffle.min.js" />
        <Script src="/js/script.js" />

        {/* ======= GOOGLE TAG (gtag.js) ======= */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10800412438"
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10800412438');
          `}
        </Script>

        <Script id="gtag-event">
          {`
            gtag("event", "page_view", {
              send_to: "AW-10800412438"
            });
          `}
        </Script>

        {/* ===== META PIXEL ===== */}
        <Script id="fb-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25094130833530947');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25094130833530947&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
