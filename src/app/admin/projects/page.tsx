"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Search, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Project {
    id: number;
    name: string;
    category: string;
    location: string;
    description: string;
    photos: string[];
    panelCount: number;
    kwp: number;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const filtered = projects.filter(
        (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.location.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
    );

    async function removeProject(id: number) {
        const confirmDel = confirm("Tem certeza que deseja apagar este projeto?");

        if (confirmDel) {
            try {
                await api.delete("/projects/" + id);
                setProjects((prev) => prev.filter((p) => p.id !== id));
                toast.success("Projeto removido com sucesso.");
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao apagar o projeto.");
            }
        }
    }

    const loadData = async () => {
        try {
            const { data } = await api.get("/projects");
            setProjects(data.data || data || []);
        } catch (error) {
            console.error("Failed to load projects", error);
            toast.error("Erro ao carregar projetos.");
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
                <h3 className="text-3xl font-bold">Gerenciamento de Projetos</h3>
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

                    <Link href="/admin/projects/new">
                        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                            <Plus className="w-4 h-4" />
                            Novo Projeto
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[900px]">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-400">Foto Principal</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Nome</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Categoria</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Localização</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Detalhes</th>
                                <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((project) => (
                                <tr key={project.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        {project.photos && project.photos.length > 0 ? (
                                            <div className="w-16 h-12 relative rounded overflow-hidden">
                                                <Image
                                                    src={project.photos[0]}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-16 h-12 bg-white/10 rounded flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-gray-500" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">{project.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                                            {project.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1 text-sm text-gray-300">
                                            <MapPin className="w-3 h-3" />
                                            {project.location}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        <div>{project.panelCount} painéis</div>
                                        <div>{project.kwp} kWp</div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/projects/${project.id}`}>
                                                <button className="p-2 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-colors" title="Editar">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button
                                                className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                onClick={() => removeProject(project.id)}
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
                                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                                        Nenhum projeto encontrado.
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
