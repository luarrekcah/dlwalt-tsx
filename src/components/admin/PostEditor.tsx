"use client";

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";

const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: false }
);

interface Post {
    id?: number;
    title: string;
    content: string;
    status: string;
    thumbnailUrl?: string;
}

export default function PostEditor({ post }: { post?: Post }) {
    const router = useRouter();
    const [title, setTitle] = useState(post?.title || "");
    const [status, setStatus] = useState(post?.status || "draft");
    const [thumbnailUrl, setThumbnailUrl] = useState(post?.thumbnailUrl || "");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [loading, setLoading] = useState(false);
    const [uploadingThumbnail, setUploadingThumbnail] = useState(false);

    useEffect(() => {
        if (post?.content) {
            const blocks = htmlToDraft(post.content);
            if (blocks) {
                const content = ContentState.createFromBlockArray(
                    blocks.contentBlocks,
                    blocks.entityMap
                );
                setEditorState(EditorState.createWithContent(content));
            }
        }
    }, [post]);

    async function save() {
        setLoading(true);
        try {
            const htmlContent = draftToHtml(
                convertToRaw(editorState.getCurrentContent())
            );

            const payload = {
                title,
                content: htmlContent,
                status,
                thumbnailUrl
            };

            if (post?.id) {
                await api.put(`/posts/${post.id}`, payload);
                toast.success("Post atualizado com sucesso!");
            } else {
                await api.post("/posts", payload);
                toast.success("Post criado com sucesso!");
            }

            router.push("/admin/posts");
            // router.refresh(); // Refresh to update list?
        } catch (error) {
            console.error(error);
            toast.error("Erro ao salvar o post.");
        } finally {
            setLoading(false);
        }
    }

    function uploadImageCallBack(file: File) {
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("image", file);

                const response = await api.post("/upload?folder=posts", formData, {
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

    async function handleThumbnailUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingThumbnail(true);
        try {
            const formData = new FormData();
            formData.append("image", file);

            const res = await api.post("/upload?folder=posts", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setThumbnailUrl(res.data.data.url);
            toast.success("Thumbnail enviada!");

        } catch (err) {
            console.error(err);
            toast.error("Erro ao enviar thumbnail.");
        } finally {
            setUploadingThumbnail(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/posts" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-bold">{post?.id ? "Editar Post" : "Novo Post"}</h1>
                </div>
                <Button onClick={save} disabled={loading || uploadingThumbnail} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                    <Save className="w-4 h-4" />
                    {loading ? "Salvando..." : uploadingThumbnail ? "Enviando imagem..." : "Salvar"}
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Título</label>
                        <input
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Título do post"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Thumbnail</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                id="thumbnail-upload"
                                className="hidden"
                                accept="image/*"
                                onChange={handleThumbnailUpload}
                            />
                            <label
                                htmlFor="thumbnail-upload"
                                className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-sm text-gray-300"
                            >
                                <Upload className="w-4 h-4" />
                                Escolher Imagem
                            </label>
                            {thumbnailUrl && (
                                <div className="mt-2 relative w-16 h-16 rounded-lg overflow-hidden border border-white/10">
                                    <Image src={thumbnailUrl} alt="Thumbnail preview" fill className="object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Conteúdo</label>
                    <div className="bg-white text-black rounded-xl overflow-hidden min-h-[400px] border border-white/10">
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class p-4 min-h-[300px]"
                            toolbarClassName="toolbar-class border-b border-gray-200"
                            toolbar={{
                                image: {
                                    uploadCallback: uploadImageCallBack,
                                    alt: { present: true, mandatory: true },
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={status === "published"}
                            onChange={(e) => setStatus(e.target.checked ? "published" : "draft")}
                            className="w-5 h-5 rounded border-gray-600 bg-zinc-900 text-green-600 focus:ring-green-500/50"
                        />
                        <span className="text-gray-300">Publicado</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
