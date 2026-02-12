"use client";

import { useAuth } from "@/providers/auth-provider";
import { DashboardKPI } from "@/components/admin/dashboard-kpi";
import { DashboardCharts } from "@/components/admin/dashboard-charts";
import { Zap, FileText, TrendingUp, DollarSign } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import api from "@/lib/api";
import { Project, Post } from "@/types";
import Link from "next/link";

export default function AdminDashboard() {
    const { user } = useAuth();
    const [projects, setProjects] = useState<Project[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [projectsRes, postsRes] = await Promise.all([
                    api.get("/projects"),
                    api.get("/posts")
                ]);

                // Handle Projects Response
                if (Array.isArray(projectsRes.data.data)) {
                    setProjects(projectsRes.data.data);
                } else if (projectsRes.data.data?.data && Array.isArray(projectsRes.data.data.data)) {
                    setProjects(projectsRes.data.data.data);
                }

                // Handle Posts Response
                if (Array.isArray(postsRes.data.data)) {
                    setPosts(postsRes.data.data);
                } else if (postsRes.data.data?.data && Array.isArray(postsRes.data.data.data)) {
                    setPosts(postsRes.data.data.data);
                }

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    // Calculate Data
    const stats = useMemo(() => {
        const totalProjects = projects.length;
        const totalPosts = posts.length;

        // Calculate Total Capacity (kWp)
        const totalCapacity = projects.reduce((acc, curr) => {
            const val = Number(curr.kwp);
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        // Calculate Total Panels
        const totalPanels = projects.reduce((acc, curr) => {
            const val = Number(curr.panelCount);
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        return {
            totalProjects,
            totalPosts,
            totalCapacity: totalCapacity.toFixed(1),
            totalPanels
        };
    }, [projects, posts]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

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
                    trend="Atualizado"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Total de Painéis"
                    value={stats.totalPanels}
                    icon={Zap} // Reuse Zap or find another icon like Grid
                    description="Módulos fotovoltaicos instalados"
                    trend="Instalados"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Potência Instalada"
                    value={`${stats.totalCapacity} kWp`}
                    icon={TrendingUp}
                    description="Capacidade total de geração"
                    trend="kWp Total"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Conteúdo Publicado"
                    value={stats.totalPosts}
                    icon={FileText}
                    description="Artigos no blog"
                    trend="Posts ativos"
                    trendUp={true}
                />
            </div>

            {/* Charts Section */}
            <DashboardCharts projects={projects} />

            {/* Recent Activity / Projects List */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Projetos Recentes</h3>
                    <Link href="/admin/projects">
                        <button className="text-sm text-green-400 hover:text-green-300 transition-colors">
                            Ver todos
                        </button>
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400 font-medium">
                            <tr>
                                <th className="px-6 py-3">Projeto</th>
                                <th className="px-6 py-3">Localização</th>
                                <th className="px-6 py-3">Categoria</th>
                                <th className="px-6 py-3 text-right">Potência</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.slice(0, 5).map((project) => (
                                <tr key={project.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-3 font-medium text-white">{project.name}</td>
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
                                    <td className="px-6 py-3 text-right text-emerald-400 font-medium">{project.kwp} kWp</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
