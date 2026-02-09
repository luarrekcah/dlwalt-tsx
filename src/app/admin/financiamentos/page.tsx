"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash, FileSpreadsheet, Search, RefreshCw, ChevronLeft, ChevronRight, X, Phone } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type CreditAnalysisType = {
    id: number;
    status: string;

    // ----- ENERGY DATA -----
    energyBillValue: number;

    // ----- PERSONAL DATA -----
    fullName: string;
    phone: string;
    cpf: string;
    rg?: string | null;
    motherName: string;
    birthDate: string;
    profession?: string | null;
    monthlyIncome: number;

    // ----- DOWN PAYMENT -----
    hasDownPayment: boolean;
    downPaymentValue?: number | null;

    // ----- ADDRESS -----
    zipcode: string;
    street: string;
    houseNumber: string;
    city: string;
    state: string;
    propertyType: string;

    createdAt: string;
};

export default function SimulacoesPage() {
    const [creditAnalysis, setCreditAnalysis] = useState<CreditAnalysisType[]>([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);

    const [q, setQ] = useState("");
    const [status, setStatus] = useState("all");

    // MODAIS
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selected, setSelected] = useState<CreditAnalysisType | null>(null);

    async function exportExcel() {
        try {
            const toastId = toast.loading("Gerando planilha...");

            const { data } = await api.get("/financial/credit-analysis", {
                params: { page: 1, limit: 999999, q, status: status === 'all' ? '' : status },
            });

            const registros = data.data.data;

            if (!registros || registros.length === 0) {
                toast.error("Nenhum registro para exportar", { id: toastId });
                return;
            }

            const excelData = registros.map((i: CreditAnalysisType) => ({
                Nome: i.fullName,
                CPF: i.cpf,
                RG: i.rg || "",
                "Nome da Mãe": i.motherName,
                "Data de Nascimento": new Date(i.birthDate).toLocaleDateString("pt-BR"),
                Telefone: i.phone,
                Profissão: i.profession || "",
                "Renda Mensal": i.monthlyIncome,
                "Valor Conta de Luz": i.energyBillValue,
                "Possui Entrada": i.hasDownPayment ? "Sim" : "Não",
                "Valor da Entrada": i.downPaymentValue ?? "",
                CEP: i.zipcode,
                Rua: i.street,
                Número: i.houseNumber,
                Cidade: i.city,
                Estado: i.state,
                "Tipo de Propriedade": i.propertyType === "own" ? "Própria" : "Alugada",
                "Data da Solicitação": new Date(i.createdAt).toLocaleDateString("pt-BR"),
                Status: i.status === 'approved' ? 'Aprovado' : i.status === 'rejected' ? 'Reprovado' : 'Pendente'
            }));

            const worksheet = XLSX.utils.json_to_sheet(excelData);
            const workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(workbook, worksheet, "Simulações");

            const excelBuffer = XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });

            const blob = new Blob([excelBuffer], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            saveAs(blob, "simulacoes.xlsx");

            toast.success("Planilha gerada com sucesso!", { id: toastId });
        } catch (error) {
            console.error("Erro ao exportar excel:", error);
            toast.error("Erro ao exportar planilha");
        }
    }

    async function loadCreditAnalysis() {
        try {
            setLoading(true);

            const { data } = await api.get("/financial/credit-analysis", {
                params: { page, limit, q, status: status === 'all' ? '' : status },
            });

            // API might return data.data.data based on previous patterns, check implementation
            const items = data.data.data || [];
            setCreditAnalysis(items);
            setTotal(data.data.total || 0);
        } catch (err) {
            console.error("Erro ao carregar simulações:", err);
            toast.error("Erro ao carregar lista de simulações");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCreditAnalysis();
    }, [page, q, status]);

    const totalPages = Math.ceil(total / limit);

    async function updateStatus(newStatus: string) {
        if (!selected) return;

        try {
            await api.put(`/financial/credit-analysis/${selected.id}`, {
                status: newStatus,
            });

            toast.success("Status atualizado!");

            setCreditAnalysis((prev) =>
                prev.map((item) =>
                    item.id === selected.id ? { ...item, status: newStatus } : item
                )
            );

            setShowEditModal(false);
        } catch {
            toast.error("Erro ao atualizar status");
        }
    }

    async function removeRecord(id: number) {
        if (!selected) return;

        // Using native confirm to match UsersPage style/simplicity or can use custom modal logic if preferred
        if (!confirm("Tem certeza que deseja apagar esta simulação?")) return;

        try {
            await api.delete(`/financial/credit-analysis/${id}`);

            setCreditAnalysis((prev) => prev.filter((i) => i.id !== id));

            toast.success("Simulação removida!");
            setShowEditModal(false);
        } catch {
            toast.error("Erro ao apagar simulação");
        }
    }

    function openWhatsApp(phone: string) {
        const clean = phone.replace(/\D/g, "");
        window.open(`https://wa.me/55${clean}`, '_blank');
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold">Simulações de Crédito</h3>

                <Button onClick={exportExcel} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                    <FileSpreadsheet className="w-4 h-4" />
                    Exportar Excel
                </Button>
            </div>

            {/* Filtros Styles matching UsersPage */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 focus:border-green-500/50 outline-none transition-colors"
                        placeholder="Buscar por nome ou CPF..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>

                <div className="w-full md:w-[200px]">
                    <select
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2 focus:border-green-500/50 outline-none transition-colors appearance-none text-gray-300"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="all">Todos os Status</option>
                        <option value="pending">Pendente</option>
                        <option value="approved">Aprovado</option>
                        <option value="rejected">Reprovado</option>
                    </select>
                </div>

                <Button
                    variant="secondary"
                    onClick={() => {
                        setQ("");
                        setStatus("all");
                    }}
                    className="gap-2 bg-white/5 hover:bg-white/10 border border-white/10"
                >
                    <RefreshCw className="w-4 h-4" />
                    Limpar
                </Button>
            </div>

            {/* Tabela Custom matching UsersPage */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-400">Nome</th>
                                <th className="px-6 py-4 font-medium text-gray-400">CPF</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Status</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Data</th>
                                <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        Carregando...
                                    </td>
                                </tr>
                            ) : creditAnalysis.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        Nenhuma simulação encontrada.
                                    </td>
                                </tr>
                            ) : (
                                creditAnalysis.map((item) => (
                                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium whitespace-nowrap">{item.fullName}</td>
                                        <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{item.cpf}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                                                    item.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                                                        'bg-yellow-500/20 text-yellow-500'
                                                }`}>
                                                {item.status === 'approved' ? 'Aprovado' :
                                                    item.status === 'rejected' ? 'Reprovado' : 'Pendente'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                                            {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                                        </td>
                                        <td className="px-6 py-4 text-right whitespace-nowrap">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setShowViewModal(true);
                                                    }}
                                                    title="Ver Detalhes"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    className="p-2 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-colors"
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setShowEditModal(true);
                                                    }}
                                                    title="Editar"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="bg-transparent border-white/10 hover:bg-white/5 text-gray-400 hover:text-white"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                    </Button>
                    <div className="text-sm text-gray-400">
                        Página {page} de {totalPages}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="bg-transparent border-white/10 hover:bg-white/5 text-gray-400 hover:text-white"
                    >
                        Próxima
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}

            {/* ------------------ MODAL VER (Custom Styles) ------------------ */}
            {showViewModal && selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                            <div>
                                <h5 className="text-xl font-bold">Detalhes da Simulação</h5>
                                <p className="text-sm text-gray-400">Informações completas do cliente.</p>
                            </div>
                            <button onClick={() => setShowViewModal(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-4">
                                <h4 className="font-semibold text-green-400 uppercase text-xs tracking-wider">Dados Pessoais</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p><span className="text-gray-500 block text-xs">Nome</span> {selected.fullName}</p>
                                    <p><span className="text-gray-500 block text-xs">CPF</span> {selected.cpf}</p>
                                    <p><span className="text-gray-500 block text-xs">RG</span> {selected.rg || "—"}</p>
                                    <p><span className="text-gray-500 block text-xs">Mãe</span> {selected.motherName}</p>
                                    <p><span className="text-gray-500 block text-xs">Nascimento</span> {new Date(selected.birthDate).toLocaleDateString("pt-BR")}</p>
                                    <p><span className="text-gray-500 block text-xs">Telefone</span> {selected.phone}</p>
                                    <p><span className="text-gray-500 block text-xs">Profissão</span> {selected.profession || "—"}</p>
                                    <p><span className="text-gray-500 block text-xs">Renda Mensal</span> {formatCurrency(selected.monthlyIncome)}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-semibold text-green-400 uppercase text-xs tracking-wider">Localização & Imóvel</h4>
                                <div className="space-y-2 text-sm text-gray-300">
                                    <p><span className="text-gray-500 block text-xs">CEP</span> {selected.zipcode}</p>
                                    <p><span className="text-gray-500 block text-xs">Endereço</span> {selected.street}, {selected.houseNumber}</p>
                                    <p><span className="text-gray-500 block text-xs">Cidade/UF</span> {selected.city}/{selected.state}</p>
                                    <p><span className="text-gray-500 block text-xs">Tipo de Imóvel</span> {selected.propertyType === "own" ? "Própria" : "Alugada"}</p>
                                </div>

                                <div className="pt-4 border-t border-white/10 mt-4">
                                    <h4 className="font-semibold text-green-400 uppercase text-xs tracking-wider mb-3">Financeiro</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-3 rounded-lg">
                                            <span className="text-gray-500 text-xs block">Conta de Luz</span>
                                            <span className="font-bold text-lg">{formatCurrency(selected.energyBillValue)}</span>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-lg">
                                            <span className="text-gray-500 text-xs block">Entrada</span>
                                            <span className="font-bold text-lg">{selected.hasDownPayment ? formatCurrency(selected.downPaymentValue || 0) : "Não"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                            <Button
                                variant="ghost"
                                onClick={() => setShowViewModal(false)}
                                className="hover:bg-white/10 text-gray-400 hover:text-white"
                            >
                                Fechar
                            </Button>
                            <Button
                                className="bg-green-600 hover:bg-green-700 text-white gap-2"
                                onClick={() => openWhatsApp(selected.phone)}
                            >
                                <Phone className="w-4 h-4" />
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* ------------------ MODAL EDITAR (Custom Styles) ------------------ */}
            {showEditModal && selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <h5 className="text-xl font-bold">Gerenciar Simulação</h5>
                            <button onClick={() => setShowEditModal(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-medium text-gray-400 mb-2 block">Status da Análise</label>
                                <select
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors appearance-none text-white"
                                    value={selected.status}
                                    onChange={(e) => updateStatus(e.target.value)}
                                >
                                    <option value="pending">Pendente</option>
                                    <option value="approved">Aprovado</option>
                                    <option value="rejected">Reprovado</option>
                                </select>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <Button
                                    variant="destructive"
                                    className="w-full gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20"
                                    onClick={() => removeRecord(selected.id)}
                                >
                                    <Trash className="w-4 h-4" />
                                    Deletar Simulação
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
