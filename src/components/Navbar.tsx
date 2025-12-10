"use client";

import Link from "next/link";
import SearchModal from "./SearchModal";
import Image from "next/image";
import { useState } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
interface NavbarProps {
  children?: React.ReactNode;
}

declare let $: any;

const FinanciamentoModal = () => {
  const [temEntrada, setTemEntrada] = useState("false");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());

    // 1. ABRE O MODAL DE LOADING
    $("#loadingModal").modal("show");

    try {
      const response = await api.post("/financial/credit-analysis", data);

      if (response.data.success) {
        // 2. AGUARDA 600ms PARA O LOADING APARECER SEM BUG
        setTimeout(() => {
          // 3. FECHA O MODAL DE LOADING
          $("#loadingModal").modal("hide");

          // 4. AGUARDA O LOADING SUMIR COM SEGURANÇA
          setTimeout(() => {
            // FECHA MODAL PRINCIPAL
            $("#financiamentoModal").modal("hide");

            // 5. MAIS UM PEQUENO DELAY PARA EVITAR CONFLITO DO BACKDROP
            setTimeout(() => {
              $("#successModal").modal("show");
            }, 300);
          }, 500); // tempo do close do loading
        }, 600);

        // Reset
        form.reset();
      }
    } catch (error) {
      $("#loadingModal").modal("hide");
      toast.error("Erro ao enviar dados");
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="financiamentoModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Vamos enviar a proposta para análise de crédito
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  {/* VALOR ENERGIA */}
                  <div className="col-md-6 form-group">
                    <label>Valor da conta de energia</label>
                    <input
                      name="energyBillValue"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6 form-group">
                    <label>Imóvel</label>
                    <select name="propertyType" className="form-control">
                      <option value="own">Próprio</option>
                      <option value="rented">Alugado</option>
                    </select>
                  </div>

                  {/* NOME */}
                  <div className="col-md-12 form-group">
                    <label>Nome completo</label>
                    <input name="fullName" className="form-control" required />
                  </div>

                  {/* TELEFONE */}
                  <div className="col-md-6 form-group">
                    <label>Telefone</label>
                    <input name="phone" className="form-control" required />
                  </div>

                  {/* CPF */}
                  <div className="col-md-6 form-group">
                    <label>CPF</label>
                    <input name="cpf" className="form-control" required />
                  </div>

                  {/* RG */}
                  <div className="col-md-6 form-group">
                    <label>RG</label>
                    <input name="rg" className="form-control" required />
                  </div>

                  {/* NOME DA MÃE */}
                  <div className="col-md-6 form-group">
                    <label>Nome da mãe</label>
                    <input
                      name="motherName"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* NASCIMENTO */}
                  <div className="col-md-6 form-group">
                    <label>Data de nascimento</label>
                    <input
                      type="date"
                      name="birthDate"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* PROFISSÃO */}
                  <div className="col-md-6 form-group">
                    <label>Profissão</label>
                    <input
                      name="profession"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* RENDA */}
                  <div className="col-md-6 form-group">
                    <label>Renda mensal</label>
                    <input
                      name="monthlyIncome"
                      className="form-control"
                      required
                    />
                  </div>

                  {/* TEM ENTRADA */}
                  <div className="col-md-6 form-group">
                    <label>Tem valor de entrada?</label>
                    <select
                      name="hasDownPayment"
                      className="form-control"
                      onChange={(e) => setTemEntrada(e.target.value)}
                    >
                      <option value="false">Não</option>
                      <option value="true">Sim</option>
                    </select>
                  </div>

                  {/* VALOR ENTRADA (CONDICIONAL) */}
                  {temEntrada === "true" && (
                    <div className="col-md-6 form-group">
                      <label>Valor de entrada</label>
                      <input name="downPaymentValue" className="form-control" />
                    </div>
                  )}
                </div>

                <hr />

                <h5>Endereço</h5>

                <div className="row">
                  <div className="col-md-4 form-group">
                    <label>CEP</label>
                    <input name="zipcode" className="form-control" required />
                  </div>

                  <div className="col-md-8 form-group">
                    <label>Rua</label>
                    <input name="street" className="form-control" required />
                  </div>

                  <div className="col-md-4 form-group">
                    <label>Número</label>
                    <input
                      name="houseNumber"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-4 form-group">
                    <label>Cidade</label>
                    <input name="city" className="form-control" required />
                  </div>

                  <div className="col-md-4 form-group">
                    <label>Estado</label>
                    <input name="state" className="form-control" required />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar Proposta
                </button>
                <button type="submit" className="btn btn-primary">
                  Enviar Proposta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* MODAL DE LOADING */}
      <div
        className="modal fade"
        id="loadingModal"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content text-center p-4">
            <div
              className="spinner-border text-primary mb-3"
              role="status"
            ></div>
            <h5>Enviando proposta...</h5>
            <p>Aguarde alguns segundos</p>
          </div>
        </div>
      </div>

      {/* MODAL DE SUCESSO */}
      <div className="modal fade" id="successModal">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content text-center p-4">
            <i
              className="fa fa-check-circle text-success"
              style={{ fontSize: 50 }}
            />
            <h5 className="mt-3">Proposta enviada!</h5>
            <p>Entraremos em contato em breve.</p>
            <button className="btn btn-success w-100 mt-2" data-dismiss="modal">
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = ({ children }: NavbarProps) => {
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
                <Image
                  src="/logo.svg"
                  alt="D Walt Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </div>

          {children ? (
            children
          ) : (
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
                      <Link
                        className="nav-link"
                        href="#"
                        data-toggle="modal"
                        data-target="#financiamentoModal"
                      >
                        Financiamento
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/#servicos">
                        Serviços
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">
                        Blog
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
                              <Link href="/termos/politica-de-privacidade">
                                Política de Privacidade
                              </Link>
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
      <FinanciamentoModal />
    </header>
  );
};

export default Navbar;
