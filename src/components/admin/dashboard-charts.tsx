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
} from "recharts";
import { Project } from "@/types";

interface DashboardChartsProps {
    projects: Project[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export function DashboardCharts({ projects }: DashboardChartsProps) {
    // 1. Projects by Category (Pie Chart)
    const projectsByCategory = useMemo(() => {
        const counts: Record<string, number> = {};
        projects.forEach((p) => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return Object.entries(counts).map(([name, value]) => ({ name, value }));
    }, [projects]);

    // 2. Top Capacity (Bar Chart) - Top 5 by kWp
    const topCapacity = useMemo(() => {
        return [...projects]
            .sort((a, b) => b.kwp - a.kwp)
            .slice(0, 5)
            .map(p => ({
                name: p.name.length > 15 ? p.name.substring(0, 15) + '...' : p.name,
                kwp: p.kwp,
                fullTitle: p.name
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

            {/* Top Capacity */}
            <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-6">Top 5 - Maior Potência (kWp)</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={topCapacity}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" horizontal={false} />
                            <XAxis type="number" stroke="#a1a1aa" tickFormatter={(value) => `${value}kWp`} />
                            <YAxis dataKey="name" type="category" stroke="#a1a1aa" width={100} />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                                formatter={(value: any) => [`${Number(value).toFixed(2)} kWp`, 'Potência']}
                            />
                            <Bar dataKey="kwp" fill="#10b981" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
