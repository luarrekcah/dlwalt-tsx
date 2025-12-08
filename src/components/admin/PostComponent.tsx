"use client";
import api from "@/lib/api";
import { Post } from "@/types";
import { goBack } from "@/utils/client";
import { useState } from "react";
import toast from "react-hot-toast";

const PostComponent = ({ post }: { post: Post }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [status, setStatus] = useState(post?.status || "draft");

  async function save() {
    try {
      const payload = {
        title,
        content,
        status,
      };

      let response;

      if (post?.id) {
        // Atualiza
        response = await api.put(`/posts/${post.id}`, payload);
      } else {
        // Cria novo
        response = await api.post("/posts", payload);
      }
      console.log("Resposta:", response.data);
      goBack();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container-fluid">
      <div className="form-group">
        <label>Título</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label>Conteúdo</label>
        <textarea
          className="form-control"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="form-group mt-3">
        <label>
          <input
            type="checkbox"
            checked={status === "published"}
            onChange={(e) =>
              setStatus(e.target.checked ? "published" : "draft")
            }
          />{" "}
          Publicado
        </label>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            toast.promise(save, {
              loading: "Salvando...",
              success: "Salvo com sucesso!",
              error: "Ocorreu um erro ao salvar o post.",
            });
          }}
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
