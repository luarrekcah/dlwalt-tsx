"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";
import api from "@/lib/api";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user } = useAuth();

    if (user) {
        router.push("/admin");
        return null;
    }

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            console.log(email, password)
            const response = await api.post("/auth/login", { email, password });

            const { accessToken, refreshToken } = response.data.data; // Adjust based on actual API response structure

            Cookies.set("token", accessToken);
            Cookies.set("refresh", refreshToken);

            toast.success(`Bem-vindo!`);

            // Force reload to update AuthContext or use a method from context if available
            window.location.href = "/admin";

        } catch (error: any) {
            console.error(error);
            toast.error(error.response?.data?.message || "Erro ao realizar login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-md bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                        <Lock className="w-8 h-8 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold">Acesso Administrativo</h1>
                    <p className="text-gray-400 text-sm mt-2">Entre com suas credenciais para continuar</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                            placeholder="admin@dwalt.net"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
