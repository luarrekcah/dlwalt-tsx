"use client";

import api from "@/lib/api";
import { Post } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");

  async function loadPosts() {
    try {
      setLoading(true);

      const { data } = await api.get("/posts", {
        params: {
          page,
          limit,
          q,
          status,
        },
      });

      console.log(data);

      setPosts(data.data.data);
      setTotal(data.data.total);
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, [page, q, status]);

  const totalPages = Math.ceil(total / limit);

  async function removePost(id: number) {
    const isConfirmed = confirm("Quer mesmo apagar esse post?");

    console.log(id);

    if (isConfirmed) {
      try {
        await api.delete(`/posts/${id}`);
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } catch (error) {
        throw new Error("Ocorreu um erro ao apagar o post");
      }
    } else {
      throw new Error("Usuário cancelou a ação");
    }
  }

  return (
    <div className="container-fluid">
      {/* Título */}
      <div className="row mb-3">
        <div className="col-6">
          <h3>Gerenciamento de Posts</h3>
        </div>
        <div className="col-6 text-right">
          <Link href="/admin/posts/new" className="btn btn-primary">
            Novo Post
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por título..."
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
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
            <option value="archived">Arquivado</option>
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
              <th>Título</th>
              <th>Autor</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-muted">
                  Nenhum post encontrado.
                </td>
              </tr>
            ) : (
              posts.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.author?.name ?? "—"}</td>
                  <td>
                    {p.status === "published"
                      ? "Publicado"
                      : p.status === "draft"
                      ? "Rascunho"
                      : "Arquivado"}
                  </td>

                  <td>
                    <Link
                      href={`/admin/posts/${p.id}`}
                      className="btn btn-sm btn-outline-secondary mr-2"
                    >
                      Editar
                    </Link>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        toast.promise(removePost(p.id), {
                          loading: "Aguardando...",
                          success: "Post deletado!",
                          error: "Nenhuma ação realizada.",
                        })
                      }
                    >
                      Remover
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
    </div>
  );
};

export default Posts;
