"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [query, setQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const filtered = users.filter(
        (u) =>
            u.name.toLowerCase().includes(query.toLowerCase()) ||
            u.email.toLowerCase().includes(query.toLowerCase())
    );

    async function removeUser(id: number) {
        const confirmDel = confirm("Tem certeza que deseja apagar o usuário?");

        if (confirmDel) {
            try {
                await api.delete("/user/" + id);
                setUsers((prev) => prev.filter((u) => u.id !== id));
                toast.success("Usuário removido com sucesso.");
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao apagar o usuário.");
            }
        }
    }

    const addUser = async () => {
        if (form.password !== form.confirmPassword) {
            toast.error("As senhas não coincidem.");
            return;
        }

        try {
            const { data } = await api.post("/user", form);
            // Depending on API response structure, adjust this:
            setUsers((prev) => [...prev, data.data]);
            toast.success("Usuário adicionado com sucesso!");
            setShowModal(false);
            setForm({ name: "", email: "", password: "", confirmPassword: "" });
        } catch (error) {
            console.error(error);
            toast.error("Erro ao adicionar usuário.");
        }
    };

    const loadData = async () => {
        try {
            const { data } = await api.get("/user");
            setUsers(data.data);
        } catch (error) {
            console.error("Failed to load users", error);
            toast.error("Erro ao carregar usuários.");
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold">Gerenciamento de Usuários</h3>
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

                    <Button
                        onClick={() => setShowModal(true)}
                        className="bg-green-600 hover:bg-green-700 text-white gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Adicionar
                    </Button>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="px-6 py-4 font-medium text-gray-400">Nome</th>
                            <th className="px-6 py-4 font-medium text-gray-400">Email</th>
                            <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {filtered.map((u) => (
                            <tr key={u.id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">{u.name}</td>
                                <td className="px-6 py-4 text-gray-400">{u.email}</td>
                                <td className="px-6 py-4 text-right">
                                    {u.email === "contato@dwalt.net" ? (
                                        <span className="text-xs text-gray-500 italic">Admin Principal</span>
                                    ) : (
                                        <button
                                            className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                            onClick={() => removeUser(u.id)}
                                            title="Remover usuário"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                    Nenhum usuário encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <h5 className="text-xl font-bold">Adicionar Usuário</h5>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-1 block">Nome</label>
                                <input
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Nome do usuário"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-1 block">Email</label>
                                <input
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="email@exemplo.com"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-1 block">Senha</label>
                                <input
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                                    type="password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-1 block">Confirmar Senha</label>
                                <input
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                            <Button
                                variant="ghost"
                                onClick={() => setShowModal(false)}
                                className="hover:bg-white/10"
                            >
                                Cancelar
                            </Button>
                            <Button onClick={addUser} className="bg-green-600 hover:bg-green-700 text-white">
                                Salvar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
