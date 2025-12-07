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
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    const token = Cookies.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const result = await api.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(result.data.data.user);
    } catch (error) {
      console.log("Erro ao carregar usuário", error);
      setUser(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  function logout() {
    Cookies.remove("token");
    Cookies.remove("refresh");
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
