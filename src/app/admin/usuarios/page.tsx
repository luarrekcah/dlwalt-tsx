"use client";

import api from "@/lib/api";
import { User } from "@/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  async function removeUser(id: string) {
    const confirmDel = confirm("Tem certeza que deseja apagar o usuário?");

    if (confirmDel) {
      try {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        await api.delete("/user/" + id);
      } catch (error) {
        toast.error("Ocorreu um erro ao apagar o usuário.");
      }
    } else {
      toast.error("Ação cancelada.");
    }
  }

  const addUser = async () => {
    try {
      const { data } = await api.post("/user", form);
      setUsers((prev) => [...prev, data.data]);
      toast.success("Usuário adicionado com sucesso!");
      setShowModal(false);
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      toast.error("Erro ao adicionar usuário.");
    }
  };

  const loadData = async () => {
    const { data } = await api.get("/user");
    setUsers(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-6">
          <h3>Gerenciamento de Usuários</h3>
        </div>
        <div className="col-6 text-right d-flex gap-2 justify-content-end">
          <input
            className="form-control w-50"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Adicionar Usuário
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeUser(u.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Adicionar Usuário</h5>
                <button
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label>Nome</label>
                  <input
                    className="form-control"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group mt-2">
                  <label>Email</label>
                  <input
                    className="form-control"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="form-group mt-2">
                  <label>Senha</label>
                  <input
                    className="form-control"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>

                <div className="form-group mt-2">
                  <label>Confirmar Senha</label>
                  <input
                    className="form-control"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button className="btn btn-success" onClick={addUser}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
