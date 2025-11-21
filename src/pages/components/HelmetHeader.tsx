import { Helmet } from "react-helmet";

const HelmetHeader = ({ title = 'Página Principal', description = 'Seja bem vindo a D | Walt!', url = '', image = '/images/ogimages/index.jpg' }) => {
  return (
    <Helmet>
      <title>{title} - D | Walt Engenharia</title>

      <meta
        name="keywords"
        content="energia solar, kit energia solar, placa de energia solar, energia solar residencial
energia solar fotovoltaica, o que é energia solar, energia solar preço, energia solar vantagens e desvantagens
energia solar como funciona, kit energia solar residencial preço, como funciona a energia solar, financiamento energia solar
empresas de energia solar"
      />
      <meta
        property="og:title"
        content={`${title} - D | Walt Engenharia`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={`${description}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://www.dlwalt.com/${url}`} />
      <meta property="og:site_name" content="D | Walt Engenharia" />
      <meta property="fb:admins" content="dlwalt" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={`https://www.dlwalt.com/${url}`} />
      <meta name="twitter:title" content={`${title} - D | Walt Engenharia`} />
      <meta
        name="twitter:description"
        content={`${description}`}
      />
      <meta name="twitter:image" content={image} />
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '25094130833530947');
        fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=25094130833530947&ev=PageView&noscript=1"
      /></noscript>
    </Helmet>
  );
};

export default HelmetHeader;
