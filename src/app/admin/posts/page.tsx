"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Post {
    id: number;
    title: string;
    status: string;
    thumbnailUrl?: string;
    createdAt: string;
}

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const filtered = posts.filter(
        (p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
    );

    async function removePost(id: number) {
        const confirmDel = confirm("Tem certeza que deseja apagar este post?");

        if (confirmDel) {
            try {
                await api.delete("/posts/" + id);
                setPosts((prev) => prev.filter((p) => p.id !== id));
                toast.success("Post removido com sucesso.");
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao apagar o post.");
            }
        }
    }

    const loadData = async () => {
        try {
            const { data } = await api.get("/posts");
            // Adjust based on actual API response (data.data.data according to snippet?)
            // User snippet: setPosts(postsResponse.data.data.data);
            setPosts(data.data.data || data.data || []);
        } catch (error) {
            console.error("Failed to load posts", error);
            toast.error("Erro ao carregar posts.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold">Gerenciamento de Posts</h3>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            className="w-full md:w-64 bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 focus:border-green-500/50 outline-none transition-colors"
                            placeholder="Pesquisar..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <Link href="/admin/posts/new">
                        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                            <Plus className="w-4 h-4" />
                            Novo Post
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-400">Thumbnail</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Título</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Status</th>
                                <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((post) => (
                                <tr key={post.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        {post.thumbnailUrl ? (
                                            <div className="w-12 h-12 relative rounded overflow-hidden">
                                                <Image src={post.thumbnailUrl} alt={post.title} fill className="object-cover" />
                                            </div>
                                        ) : (
                                            <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                                                <FileText className="w-6 h-6 text-gray-500" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">{post.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                            {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/posts/${post.id}`}>
                                                <button className="p-2 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-colors" title="Editar">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button
                                                className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                onClick={() => removePost(post.id)}
                                                title="Remover"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                        Nenhum post encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
