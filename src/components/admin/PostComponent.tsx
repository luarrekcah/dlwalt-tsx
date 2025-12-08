/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import api from "@/lib/api";
import { Post } from "@/types";
import { goBack } from "@/utils/client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const PostComponent = ({ post }: { post: Post }) => {
  // Campos normais
  const [title, setTitle] = useState(post?.title || "");
  const [status, setStatus] = useState(post?.status || "draft");

  // EditorState
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Carrega conteúdo HTML ao editar um post
  useEffect(() => {
    if (post?.content) {
      const blocks = htmlToDraft(post.content);
      const content = ContentState.createFromBlockArray(
        blocks.contentBlocks,
        blocks.entityMap
      );
      setEditorState(EditorState.createWithContent(content));
    }
  }, [post]);

  async function save() {
    try {
      // Converte o conteúdo do editor para HTML
      const htmlContent = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const payload = {
        title,
        content: htmlContent,
        status,
      };

      if (post?.id) {
        await api.put(`/posts/${post.id}`, payload);
      } else {
        await api.post("/posts", payload);
      }

      goBack();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function uploadImageCallBack(file: File) {
    return new Promise(async (resolve, reject) => {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await api.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        resolve({
          data: {
            link: response.data.data.url,
          },
        });
      } catch (err: any) {
        console.error("Erro upload:", err);
        reject(err);
      }
    });
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

        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="border rounded"
          editorClassName="editor-inner"
          toolbarClassName="toolbar-top"
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: true, mandatory: true },
            },
          }}
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

      <button
        className="btn btn-primary mt-3"
        onClick={() =>
          toast.promise(save(), {
            loading: "Salvando...",
            success: "Post salvo com sucesso!",
            error: "Erro ao salvar o post.",
          })
        }
      >
        Salvar
      </button>
    </div>
  );
};

export default PostComponent;
