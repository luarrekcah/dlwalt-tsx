"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Search, Code, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SiteScript {
    id: number;
    name: string;
    position: string;
    code: string;
    isActive: boolean;
}

export default function ScriptsPage() {
    const [scripts, setScripts] = useState<SiteScript[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const filtered = scripts.filter(
        (s) =>
            s.name.toLowerCase().includes(query.toLowerCase()) ||
            s.position.toLowerCase().includes(query.toLowerCase())
    );

    async function removeScript(id: number) {
        const confirmDel = confirm("Tem certeza que deseja apagar este script?");

        if (confirmDel) {
            try {
                await api.delete("/scripts/" + id);
                setScripts((prev) => prev.filter((s) => s.id !== id));
                toast.success("Script removido com sucesso.");
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao apagar o script.");
            }
        }
    }

    async function toggleActive(script: SiteScript) {
        try {
            const updated = { ...script, isActive: !script.isActive };
            await api.put(`/scripts/${script.id}`, updated);
            setScripts(prev => prev.map(s => s.id === script.id ? updated : s));
            toast.success(`Script ${updated.isActive ? 'ativado' : 'desativado'} com sucesso.`);
        } catch (error) {
            console.error(error);
            toast.error("Erro ao atualizar status do script.");
        }
    }

    const loadData = async () => {
        try {
            const { data } = await api.get("/scripts");
            if (Array.isArray(data)) {
                setScripts(data);
            } else if (data?.data && Array.isArray(data.data)) {
                setScripts(data.data);
            } else {
                setScripts([]);
            }
        } catch (error) {
            console.error("Failed to load scripts", error);
            toast.error("Erro ao carregar scripts.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const positionLabels: Record<string, string> = {
        "head": "Head",
        "body_start": "Início do Body",
        "body_end": "Fim do Body"
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold">Gerenciamento de Scripts</h3>
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

                    <Link href="/admin/scripts/new">
                        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                            <Plus className="w-4 h-4" />
                            Novo Script
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[900px]">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-400 w-16">Tipo</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Nome</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Posição</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Status</th>
                                <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((script) => (
                                <tr key={script.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
                                            <Code className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">{script.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                                            {positionLabels[script.position] || script.position}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button 
                                            onClick={() => toggleActive(script)}
                                            className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full transition-colors ${
                                                script.isActive 
                                                    ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                                                    : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                                            }`}
                                        >
                                            {script.isActive ? (
                                                <><CheckCircle2 className="w-3 h-3" /> Ativo</>
                                            ) : (
                                                <><XCircle className="w-3 h-3" /> Inativo</>
                                            )}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/scripts/${script.id}`}>
                                                <button className="p-2 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-colors" title="Editar">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button
                                                className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                onClick={() => removeScript(script.id)}
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
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        Nenhum script encontrado.
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
