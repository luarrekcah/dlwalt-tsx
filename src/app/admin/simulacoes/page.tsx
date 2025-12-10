"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

type CreditAnalysisType = {
  id: number;
  status: string;

  // ----- ENERGY DATA -----
  energyBillValue: number;

  // ----- PERSONAL DATA -----
  fullName: string;
  phone: string;
  cpf: string;
  rg?: string | null;
  motherName: string;
  birthDate: string;
  profession?: string | null;
  monthlyIncome: number;

  // ----- DOWN PAYMENT -----
  hasDownPayment: boolean;
  downPaymentValue?: number | null;

  // ----- ADDRESS -----
  zipcode: string;
  street: string;
  houseNumber: string;
  city: string;
  state: string;
  propertyType: string;

  createdAt: string;
};

const Simulacoes = () => {
  const [creditAnalysis, setCreditAnalysis] = useState<CreditAnalysisType[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");

  // MODAIS
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selected, setSelected] = useState<CreditAnalysisType | null>(null);

  async function loadCreditAnalysis() {
    try {
      setLoading(true);

      const { data } = await api.get("/financial/credit-analysis", {
        params: { page, limit, q, status },
      });

      setCreditAnalysis(data.data.data);
      setTotal(data.data.total);
    } catch (err) {
      console.error("Erro ao carregar simulações:", err);
      toast.error("Erro ao carregar lista");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCreditAnalysis();
  }, [page, q, status]);

  const totalPages = Math.ceil(total / limit);

  async function updateStatus(newStatus: string) {
    if (!selected) return;

    try {
      await api.put(`/financial/credit-analysis/${selected.id}`, {
        status: newStatus,
      });

      toast.success("Status atualizado!");

      setCreditAnalysis((prev) =>
        prev.map((item) =>
          item.id === selected.id ? { ...item, status: newStatus } : item
        )
      );

      setShowEditModal(false);
    } catch {
      toast.error("Erro ao atualizar status");
    }
  }

  async function removeRecord(id: number) {
    const confirmed = confirm("Deseja apagar esta simulação?");
    if (!confirmed) return;

    try {
      await api.delete(`/financial/credit-analysis/${id}`);

      setCreditAnalysis((prev) => prev.filter((i) => i.id !== id));

      toast.success("Simulação removida!");
      setShowEditModal(false);
    } catch {
      toast.error("Erro ao apagar");
    }
  }

  function openWhatsApp(phone: string) {
    const clean = phone.replace(/\D/g, "");
    location.href = `https://wa.me/55${clean}`;
  }

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-6">
          <h3>Simulações de Crédito</h3>
        </div>
      </div>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por nome ou CPF..."
            className="form-control"
          />
        </div>

        <div className="col-md-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-control"
          >
            <option value="">Todos os Status</option>
            <option value="pending">Pendente</option>
            <option value="approved">Aprovado</option>
            <option value="rejected">Reprovado</option>
          </select>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-secondary w-100"
            onClick={() => {
              setQ("");
              setStatus("");
            }}
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Tabela */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Status</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {creditAnalysis.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center text-muted">
                  Nenhuma simulação encontrada.
                </td>
              </tr>
            ) : (
              creditAnalysis.map((item) => (
                <tr key={item.id}>
                  <td>{item.fullName}</td>
                  <td>{item.cpf}</td>
                  <td>
                    {item.status === "approved"
                      ? "Aprovado"
                      : item.status === "rejected"
                      ? "Reprovado"
                      : "Pendente"}
                  </td>
                  <td>
                    {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-secondary mr-2"
                      onClick={() => {
                        setSelected(item);
                        setShowViewModal(true);
                      }}
                    >
                      Ver
                    </button>

                    <button
                      className="btn btn-sm btn-secondary mr-2"
                      onClick={() => {
                        setSelected(item);
                        setShowEditModal(true);
                      }}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      {/* Paginação */}
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-primary"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          ← Anterior
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          className="btn btn-outline-primary"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Próxima →
        </button>
      </div>

      {/* ------------------ MODAL VER ------------------ */}
      {showViewModal && selected && (
        <div
          className="modal fade show d-block"
          style={{ background: "#0004" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-scrollable">

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalhes da Simulação</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowViewModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <h5 className="mb-3">Dados Pessoais</h5>
                <p>
                  <strong>Nome:</strong> {selected.fullName}
                </p>
                <p>
                  <strong>CPF:</strong> {selected.cpf}
                </p>
                <p>
                  <strong>RG:</strong> {selected.rg || "—"}
                </p>
                <p>
                  <strong>Nome da Mãe:</strong> {selected.motherName}
                </p>
                <p>
                  <strong>Data de Nascimento:</strong>{" "}
                  {new Date(selected.birthDate).toLocaleDateString("pt-BR")}
                </p>
                <p>
                  <strong>Telefone:</strong> {selected.phone}
                </p>
                <p>
                  <strong>Profissão:</strong> {selected.profession || "—"}
                </p>
                <p>
                  <strong>Renda Mensal:</strong> R${" "}
                  {Number(selected.monthlyIncome).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>

                <hr />

                <h5 className="mb-3">Informações da Simulação</h5>
                <p>
                  <strong>Valor da Conta de Luz:</strong> R${" "}
                  {Number(selected.energyBillValue).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>

                <p>
                  <strong>Entrada?</strong>{" "}
                  {selected.hasDownPayment ? "Sim" : "Não"}
                </p>

                {selected.hasDownPayment && (
                  <p>
                    <strong>Valor da Entrada:</strong> R${" "}
                    {Number(selected.downPaymentValue).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                )}

                <p>
                  <strong>Status:</strong>{" "}
                  {selected.status === "approved"
                    ? "Aprovado"
                    : selected.status === "rejected"
                    ? "Reprovado"
                    : "Pendente"}
                </p>

                <p>
                  <strong>Data da Solicitação:</strong>{" "}
                  {new Date(selected.createdAt).toLocaleDateString("pt-BR")}
                </p>

                <hr />

                <h5 className="mb-3">Endereço</h5>
                <p>
                  <strong>CEP:</strong> {selected.zipcode}
                </p>
                <p>
                  <strong>Rua:</strong> {selected.street}
                </p>
                <p>
                  <strong>Número:</strong> {selected.houseNumber}
                </p>
                <p>
                  <strong>Cidade:</strong> {selected.city}
                </p>
                <p>
                  <strong>Estado:</strong> {selected.state}
                </p>
                <p>
                  <strong>Tipo de Propriedade:</strong>{" "}
                  {selected.propertyType === "own" ? "Própria" : "Alugada"}
                </p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  onClick={() => openWhatsApp(selected.phone)}
                >
                  Abrir WhatsApp
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => setShowViewModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------ MODAL EDITAR ------------------ */}
      {showEditModal && selected && (
        <div
          className="modal fade show d-block"
          style={{ background: "#0004" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Simulação</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <label>Status</label>
                <select
                  className="form-control"
                  defaultValue={selected.status}
                  onChange={(e) => updateStatus(e.target.value)}
                >
                  <option value="pending">Pendente</option>
                  <option value="approved">Aprovado</option>
                  <option value="rejected">Reprovado</option>
                </select>

                <hr />

                <button
                  className="btn btn-danger w-100"
                  onClick={() => removeRecord(selected.id)}
                >
                  Deletar Simulação
                </button>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulacoes;
