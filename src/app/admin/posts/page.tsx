"use client";


import { Post } from "@/types";
import Link from "next/link";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "p1",
      title: "Como instalar painéis solares",
      author: "João Silva",
      published: true,
      content: "Conteúdo do post...",
    },
    {
      id: "p2",
      title: "Dicas de manutenção",
      author: "Maria Souza",
      published: false,
      content: "Rascunho...",
    },
  ]);

  function removePost(id: string) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }
  return (
  <div className="container-fluid">
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
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.author}</td>
                <td>{p.published ? "Publicado" : "Rascunho"}</td>
                <td>
                  <Link
                    href={`/admin/posts/${p.id}`}
                    className="btn btn-sm btn-outline-secondary mr-2"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removePost(p.id)}
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

export default Posts;
