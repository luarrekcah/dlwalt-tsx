"use client";
import { Post } from "@/types";
import { useState } from "react";

const PostComponent = ({ post }: { post: Post }) => {

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [published, setPublished] = useState(post?.published || false);

  function save() {}
  
  return (
    <div className="container-fluid">
        <div className="form-group">
          <label>Título</label>
          <input
            className="form-control"
            value={post?.title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Conteúdo</label>
          <textarea
            className="form-control"
            rows={10}
            value={post?.content || ""}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>
            <input
              type="checkbox"
              checked={post?.published || false}
              onChange={(e) => setPublished(e.target.checked)}
            />{" "}
            Publicado
          </label>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={save}>
            Salvar
          </button>
        </div>
      </div>
  );
};

export default PostComponent;
