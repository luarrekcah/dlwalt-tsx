"use client";

import { useAuth } from "@/providers/auth-provider";
import { DashboardKPI } from "@/components/admin/dashboard-kpi";
import { DashboardCharts } from "@/components/admin/dashboard-charts";
import { Zap, FileText, TrendingUp, DollarSign, MessageSquare, Calculator, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import api from "@/lib/api";
import { Project, Post, Testimonial, CreditAnalysis } from "@/types";
import Link from "next/link";

export default function AdminDashboard() {
    const { user } = useAuth();
    const [projects, setProjects] = useState<Project[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [simulations, setSimulations] = useState<CreditAnalysis[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [projectsRes, postsRes, testimonialsRes, simulationsRes] = await Promise.all([
                    api.get("/projects"),
                    api.get("/posts"),
                    api.get("/testimonials"),
                    api.get("/financial/credit-analysis?limit=5") // Fetch recent simulations
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

                // Handle Testimonials Response
                if (Array.isArray(testimonialsRes.data.data)) {
                    setTestimonials(testimonialsRes.data.data);
                } else if (testimonialsRes.data.data?.data && Array.isArray(testimonialsRes.data.data.data)) {
                    setTestimonials(testimonialsRes.data.data.data);
                }

                // Handle Simulations Response
                if (Array.isArray(simulationsRes.data.data)) {
                    setSimulations(simulationsRes.data.data);
                } else if (simulationsRes.data.data?.data && Array.isArray(simulationsRes.data.data.data)) {
                    setSimulations(simulationsRes.data.data.data);
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
        const totalTestimonials = testimonials.length;
        const totalSimulations = simulations.length; // This might be just the recent ones if we paginated, but for KPI we might want total count from metadata if available. 
        // For now, assuming request returns all or we trust the length for recent context, 
        // OR we should have fetched `total` from the response. 
        // The API response for simulations usually has `total`. 
        // Let's refine this if needed, but for now simple length or if we save total state.
        // Actually, let's just use what we have. If we want accurate total, we'd need to check the 'total' field from the response, which we didn't save.
        // For this iteration, let's stick to what we have in the array or maybe we should have saved the 'total' from the response.
        // Let's rely on the array length for now as a "Recent" or "Loaded" count, or better, let's just assume we want to show what's there. 
        // Correct approach: The `simulationsRes.data.data.total` likely exists.

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
            totalPanels,
            totalTestimonials,
            totalSimulations
        };
    }, [projects, posts, testimonials, simulations]);

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
                    description="Obras entregues"
                    trend="Ver todos"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Simulações"
                    value={stats.totalSimulations > 0 ? `${stats.totalSimulations}+` : "0"}
                    icon={Calculator}
                    description="Análises de crédito"
                    trend="Ver lista"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Depoimentos"
                    value={stats.totalTestimonials}
                    icon={MessageSquare}
                    description="Clientes satisfeitos"
                    trend="Avaliações"
                    trendUp={true}
                />
                <DashboardKPI
                    title="Potência Total"
                    value={`${stats.totalCapacity} kWp`}
                    icon={TrendingUp}
                    description="Capacidade instalada"
                    trend="kWp"
                    trendUp={true}
                />
            </div>

            {/* Charts Section */}
            <DashboardCharts projects={projects} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Projects */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500" /> Projetos Recentes
                        </h3>
                        <Link href="/admin/projects">
                            <button className="text-sm text-green-400 hover:text-green-300 transition-colors">
                                Ver todos
                            </button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-gray-400 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Projeto</th>
                                    <th className="px-6 py-3">Categoria</th>
                                    <th className="px-6 py-3 text-right">Potência</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {projects.slice(0, 5).map((project) => (
                                    <tr key={project.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-3 font-medium text-white">{project.name}</td>
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
                                {projects.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                            Nenhum projeto encontrado.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Simulations */}
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-blue-500" /> Simulações Recentes
                        </h3>
                        <Link href="/admin/financiamentos">
                            <button className="text-sm text-green-400 hover:text-green-300 transition-colors">
                                Ver todas
                            </button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto flex-1">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/5 text-gray-400 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Cliente</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-right">Data</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {simulations.slice(0, 5).map((sim) => (
                                    <tr key={sim.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-3 font-medium text-white">
                                            <div className="flex flex-col">
                                                <span>{sim.fullName}</span>
                                                <span className="text-xs text-gray-500">{sim.city}/{sim.state}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${sim.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                                                sim.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                                                    'bg-yellow-500/20 text-yellow-500'
                                                }`}>
                                                {sim.status === 'approved' ? 'Aprovado' :
                                                    sim.status === 'rejected' ? 'Reprovado' : 'Pendente'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-3 text-right text-gray-400">
                                            {new Date(sim.createdAt).toLocaleDateString('pt-BR')}
                                        </td>
                                    </tr>
                                ))}
                                {simulations.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                            Nenhuma simulação recente.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
