"use client";

import { useAuth } from "@/providers/auth-provider";

export default function AdminDashboard() {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold mb-2">Bem-vindo, {user?.name}!</h3>
                <p className="text-gray-400">
                    Utilize o menu lateral para gerenciar posts e usuários do sistema.
                </p>
            </div>

            {/* Add stats cards here later if API supports it */}
        </div>
    );
}
