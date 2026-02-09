"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import api from "@/lib/api";

interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    logout: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function logout() {
        try {
            await api.get("/auth/logout");
        } catch (e) {
            console.error("Logout failed", e);
        }
        Cookies.remove("token");
        Cookies.remove("refresh");
        setUser(null);
        window.location.href = "/login";
    }

    async function loadUser() {
        const token = Cookies.get("token");

        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const result = await api.get("/user/me");
            setUser(result.data.data.user); // specific to user's API structure: data.data.user or just data.data? User snippet said result.data.data.user but in Users component it says result.data.data for list. Validating from snippet: "setUser(result.data.data.user);" ok using that.
        } catch (error) {
            console.log("Erro ao carregar usuário", error);
            // await logout(); // Don't logout automatically on every error, maybe just invalid token
            Cookies.remove("token");
            setUser(null);
        }

        setLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
