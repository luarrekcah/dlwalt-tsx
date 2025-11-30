"use client"  ;

import Link from "next/link";
import SearchModal from "./SearchModal";
import Image from "next/image";
interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps)  => {
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
        <a href="https://wa.me/+5569993695702">
          <i className="fa fa-mobile" /> Fale Conosco +55 69 99369-5702
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
              <Link className="d-block" href="/">
                <Image src="/logo.svg" alt="D Walt Logo" width={150} height={50} />
              </Link>
            </div>
          </div>

          {children ? children : (
              
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
            )}

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
                      <Link className="nav-link" href="/">
                        Página Principal
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/#servicos">
                        Serviços
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        href="/#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Empresa <i className="fa fa-angle-down" />
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li className="dropdown-submenu">
                          <Link
                            href="/#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Termos e Políticas
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link href="/termos/politica-de-privacidade">Política de Privacidade</Link>
                            </li>
                            <li>
                              <Link href="/termos/termos-de-uso">
                                TERMOS E CONDIÇÕES GERAIS DE USO E/OU DE VENDA
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        href="/#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Ferramentas <i className="fa fa-angle-down" />
                      </Link>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <Link href="/ferramentas/banco-bv">Banco BV</Link>
                        </li>
                        <li>
                          <Link href="/mediakit.rar">Media Kit</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contato">
                        contato
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <SearchModal />
    </header>
  );
};

export default Navbar;
