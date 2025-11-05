import React from "react";
import { useLocation } from "react-router-dom";
import { search } from "../../services/database";
import Footer from "../components/Footer";
import HelmetHeader from "../components/HelmetHeader";
import LoadingServer from "../components/LoadingServer";
import Navbar from "../components/Navbar";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [all, setAll] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<any>(true);

  React.useEffect(() => {
    setLoading(true);
    let data: any[] = [];

    search("dlwalt/faq", query).then((r) => {
      console.log(r);
      if ((Object.keys(r).length === 0)) {
        data.push({ title: r.answer, url: `/faq` });
      }
    });

    setAll(data);
    setLoading(false);
  }, [query]);

  return (
    <div className="body-inner">
      <HelmetHeader
        title={`Pesquisa ${query}`}
        description="Um dos nossos grandes projetos!"
        url={`pesquisa?q=${query}`}
      />
      <Navbar />
      <section className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Resultados de Pesquisa</h3>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <LoadingServer />
            ) : (
              <div className="col-md-12">
                {all.length === 0 ? (
                  <div className="text-center">
                    <h3>Sem resultados.</h3>
                  </div>
                ) : (
                  <ul className="list-group" style={{ width: "100%" }}>
                    {all.map((i: any) => {
                      return (
                        <li className="list-group-item">
                          <a href={i.url}>{i.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
