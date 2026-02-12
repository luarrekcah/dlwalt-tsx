"use client";

import { useMemo } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart,
    Area,
} from "recharts";
import { Project } from "@/lib/data/projects";

interface DashboardChartsProps {
    projects: Project[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function DashboardCharts({ projects }: DashboardChartsProps) {
    // 1. Projects by Category (Pie Chart)
    const projectsByCategory = useMemo(() => {
        const counts: Record<string, number> = {};
        projects.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return Object.entries(counts).map(([name, value]) => ({ name, value }));
    }, [projects]);

    // 2. Top Savings (Bar Chart) - Top 5
    const topSavings = useMemo(() => {
        // Helper to parse savings string "R$ 1.000,00/mês" -> 1000.00
        const parseSavings = (s: string) => {
            return parseFloat(s.replace(/[^0-9,]/g, '').replace(',', '.'));
        };

        return [...projects]
            .sort((a, b) => parseSavings(b.savings) - parseSavings(a.savings))
            .slice(0, 5)
            .map(p => ({
                name: p.title.length > 15 ? p.title.substring(0, 15) + '...' : p.title,
                savings: parseSavings(p.savings),
                fullTitle: p.title
            }));
    }, [projects]);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Projects by Category */}
            <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-6">Projetos por Categoria</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={projectsByCategory}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ''} ${(percent ? percent * 100 : 0).toFixed(0)}%`}
                            >
                                {projectsByCategory.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Top Savings */}
            <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-6">Top 5 - Maior Economia Mensal (R$)</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={topSavings}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" horizontal={false} />
                            <XAxis type="number" stroke="#a1a1aa" tickFormatter={(value) => `R$${value}`} />
                            <YAxis dataKey="name" type="category" stroke="#a1a1aa" width={100} />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                                formatter={(value: any) => [`R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 'Economia']}
                            />
                            <Bar dataKey="savings" fill="#10b981" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
