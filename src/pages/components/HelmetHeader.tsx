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
    </Helmet>
  );
};

export default HelmetHeader;
