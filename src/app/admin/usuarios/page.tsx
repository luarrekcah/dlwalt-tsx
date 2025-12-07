"use client";

import { User } from "@/types";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    { id: "u1", name: "João Silva", email: "joao@example.com", isAdmin: true },
    {
      id: "u2",
      name: "Maria Souza",
      email: "maria@example.com",
      isAdmin: false,
    },
    {
      id: "u3",
      name: "Carlos Pereira",
      email: "carlos@example.com",
      isAdmin: false,
    },
  ]);
  const [query, setQuery] = useState("");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );

  function toggleAdmin(id: string) {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isAdmin: !u.isAdmin } : u))
    );
  }

  function removeUser(id: string) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

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
              <th>Admin</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.isAdmin ? "Sim" : "Não"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-secondary mr-2"
                    onClick={() => toggleAdmin(u.id)}
                  >
                    Alternar Admin
                  </button>
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
