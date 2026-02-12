import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardKPIProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    description: string;
    trend?: string;
    trendUp?: boolean;
}

export function DashboardKPI({ title, value, icon: Icon, description, trend, trendUp }: DashboardKPIProps) {
    return (
        <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-zinc-900/80 transition-colors">
            <div className="flex items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-gray-400">{title}</h3>
                <Icon className="h-4 w-4 text-green-500" />
            </div>
            <div>
                <div className="text-2xl font-bold text-white">{value}</div>
                <p className="text-xs text-gray-500 mt-1">
                    {description}
                    {trend && (
                        <span className={`ml-2 ${trendUp ? "text-emerald-500" : "text-red-500"}`}>
                            {trend}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}
