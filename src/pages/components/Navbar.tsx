
import SearchModal from "./SearchModal";

const Navbar = () => {
  return (
    <header id="header" className="header-one">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <a href="https://wa.me/+556993009413">
          <i className="fa fa-mobile" /> Fale Conosco +55 69 2103-3893
        </a>
      </div>

      <div className="bg-white">
        <div className="container">
          <div
            className="logo-area"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="logo ">
              <a className="d-block" href="/">
                <img src="/logo.svg" alt="D Walt Logo" />
              </a>
            </div>
          </div>
          <h4
            className="slogan"
            style={{
              color: "#3266af",
              textAlign: "center",
              marginBottom: "-10px",
              paddingBottom: 30,
            }}
          >
            A MAIOR DO
            <b style={{ color: "#00a859" }}> NORTE!</b>
          </h4>
        </div>
      </div>
      <div className="site-navigation" style={{ zIndex: 900 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Página Principal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#projetos">
                        Projetos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#servicos">
                        Serviços
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="/#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Empresa <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="/vagas">Trabalhe Conosco</a>
                        </li>
                        <li>
                          <a href="/faq">F.A.Q</a>
                        </li>
                        <li className="dropdown-submenu">
                          <a
                            href="/#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Termos e Políticas
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="/politica">Política de Privacidade</a>
                            </li>
                            <li>
                              <a href="/termos">
                                TERMOS E CONDIÇÕES GERAIS DE USO E/OU DE VENDA
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="/#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Ferramentas <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="/integracoes/banco-bv">Banco BV</a>
                        </li>
                        <li>
                          <a href="/mediakit.rar">Media Kit</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contato">
                        contato
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div
            data-toggle="modal"
            data-target="#searchModal"
            className="nav-search"
          >
            <span id="search">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
      <SearchModal />
    </header>
  );
};

export default Navbar;
