"use client";

import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, FileText, Users, LogOut } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="flex h-screen bg-zinc-950 text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-black/50 hidden md:flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        DWalt Admin
                    </h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/posts"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <FileText className="w-5 h-5" />
                        Posts
                    </Link>
                    <Link
                        href="/admin/users"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                    >
                        <Users className="w-5 h-5" />
                        Usuários
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">{user.name}</span>
                            <span className="text-xs text-gray-500 truncate max-w-[120px]">{user.email}</span>
                        </div>
                        <button onClick={() => logout()} className="text-gray-500 hover:text-red-400 transition-colors">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="md:hidden h-16 border-b border-white/10 flex items-center justify-between px-4 bg-black/50">
                    <span className="font-bold">DWalt Admin</span>
                    <button onClick={() => logout()}>
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
