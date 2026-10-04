"use client";

import api from "@/lib/api";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ScriptFormProps {
    initialData?: {
        id: number;
        name: string;
        code: string;
        position: string;
        isActive: boolean;
    };
    isEditing?: boolean;
}

export function ScriptForm({ initialData, isEditing = false }: ScriptFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    
    const [name, setName] = useState(initialData?.name || "");
    const [code, setCode] = useState(initialData?.code || "");
    const [position, setPosition] = useState(initialData?.position || "head");
    const [isActive, setIsActive] = useState(initialData?.isActive ?? true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !code) {
            toast.error("Por favor, preencha o nome e o código do script.");
            return;
        }

        setLoading(true);

        const payload = {
            name,
            code,
            position,
            isActive
        };

        try {
            if (isEditing && initialData) {
                await api.put(`/scripts/${initialData.id}`, payload);
                toast.success("Script atualizado com sucesso!");
            } else {
                await api.post("/scripts", payload);
                toast.success("Script criado com sucesso!");
            }
            router.push("/admin/scripts");
        } catch (error) {
            console.error("Failed to save script", error);
            toast.error("Ocorreu um erro ao salvar o script.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/scripts">
                    <button className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                </Link>
                <h3 className="text-2xl font-bold">
                    {isEditing ? "Editar Script" : "Novo Script"}
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Nome (ex: Google Analytics)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 focus:border-green-500/50 outline-none transition-colors"
                            placeholder="Nome identificador do script"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Posição</label>
                        <select
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 focus:border-green-500/50 outline-none transition-colors"
                        >
                            <option value="head">Head (Entre &lt;head&gt;)</option>
                            <option value="body_start">Início do Body (Logo após &lt;body&gt;)</option>
                            <option value="body_end">Fim do Body (Antes do &lt;/body&gt;)</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Código do Script</label>
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-64 bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors font-mono text-sm"
                        placeholder="Cole o código do script aqui (sem as tags <script> se o provedor não as incluir, ou com elas caso seja fornecido assim)"
                        required
                    />
                    <p className="text-xs text-gray-500">
                        Insira o código completo incluindo a tag &lt;script&gt; se necessário, ou apenas o trecho dependendo do seu script.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        <span className="ml-3 text-sm font-medium text-gray-300">
                            Script Ativo
                        </span>
                    </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white gap-2 min-w-[150px]"
                    >
                        {loading ? (
                            "Salvando..."
                        ) : (
                            <>
                                <Save className="w-4 h-4" />
                                {isEditing ? "Salvar Alterações" : "Criar Script"}
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
