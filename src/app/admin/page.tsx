"use client";

import { useAuth } from "@/providers/auth-provider";
import { PROJECTS } from "@/lib/data/projects";
import { BLOG_POSTS } from "@/lib/data/blog";
import { DashboardKPI } from "@/components/admin/dashboard-kpi";
import { DashboardCharts } from "@/components/admin/dashboard-charts";
import { Zap, FileText, TrendingUp, DollarSign } from "lucide-react";
import { useMemo } from "react";

export default function AdminDashboard() {
    const { user } = useAuth();

    // Calculate Data
    const stats = useMemo(() => {
        const totalProjects = PROJECTS.length;
        const totalPosts = BLOG_POSTS.length;

        // Parse Capacity (kWp)
        const totalCapacity = PROJECTS.reduce((acc, curr) => {
            const val = parseFloat(curr.size.replace(/[^0-9.]/g, ''));
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        // Parse Monthly Savings (R$)
        const totalSavings = PROJECTS.reduce((acc, curr) => {
            const val = parseFloat(curr.savings.replace(/[^0-9,]/g, '').replace(',', '.'));
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        return {
            totalProjects,
            totalPosts,
            totalCapacity: totalCapacity.toFixed(1),
            totalSavings: totalSavings
        };
    }, []);

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Dashboard
                    </h2>
                    <p className="text-gray-400 mt-1">
                        Visão geral do sistema e métricas principais.
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-full text-sm text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Sistema Operacional
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashboardKPI
                    title="Projetos Realizados"
                    value={stats.totalProjects}
                    icon={Zap}
                    description="Obras entregues e operando"
                    trend="+2 este mês"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Economia Gerada"
                    value={`R$ ${stats.totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                    icon={DollarSign}
                    description="Economia mensal estimada"
                    trend="+12%"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Potência Instalada"
                    value={`${stats.totalCapacity} kWp`}
                    icon={TrendingUp}
                    description="Capacidade total de geração"
                    trend="+15%"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Conteúdo Publicado"
                    value={stats.totalPosts}
                    icon={FileText}
                    description="Artigos no blog"
                    trend="Atualizado hoje"
                    trendUp={true}
                />
            </div>

            {/* Charts Section */}
            <DashboardCharts projects={PROJECTS} />

            {/* Recent Activity / Projects List */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Projetos Recentes</h3>
                    <button className="text-sm text-green-400 hover:text-green-300 transition-colors">
                        Ver todos
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400 font-medium">
                            <tr>
                                <th className="px-6 py-3">Projeto</th>
                                <th className="px-6 py-3">Localização</th>
                                <th className="px-6 py-3">Categoria</th>
                                <th className="px-6 py-3">Potência</th>
                                <th className="px-6 py-3">Data</th>
                                <th className="px-6 py-3 text-right">Economia</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {PROJECTS.slice(0, 5).map((project) => (
                                <tr key={project.slug} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-3 font-medium text-white">{project.title}</td>
                                    <td className="px-6 py-3 text-gray-400">{project.location}</td>
                                    <td className="px-6 py-3">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium 
                                            ${project.category === 'Residencial' ? 'bg-blue-500/10 text-blue-400' :
                                                project.category === 'Comercial' ? 'bg-purple-500/10 text-purple-400' :
                                                    project.category === 'Rural' ? 'bg-green-500/10 text-green-400' :
                                                        'bg-orange-500/10 text-orange-400'}`}>
                                            {project.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-gray-300">{project.size}</td>
                                    <td className="px-6 py-3 text-gray-400">{project.date}</td>
                                    <td className="px-6 py-3 text-right text-emerald-400 font-medium">{project.savings}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
