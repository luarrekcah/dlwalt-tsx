"use client";

import api from "@/lib/api";
import { User } from "@/types";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  const filtered = users!.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  async function removeUser(id: string) {
    const confirmDel = confirm("Tem certeza que deseja apagar o usuário?");

    if (confirmDel) {
      try {
        setUsers((prev) => prev!.filter((u) => u.id !== id));

        await api.delete("/user/" + id);
      } catch (error) {
        toast.error("Ocorreu um erro ao apagar o usuário.");
      }
    } else {
      toast.error("Ação cancelada.");
    }
  }

  const loadData = async () => {
    const { data } = await api.get("/user");

    console.log(data);

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
        <div className="col-6 text-right">
          <input
            className="form-control"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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
    </div>
  );
};

export default Users;
