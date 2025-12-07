"use client";
import api from "@/lib/api";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return setError("Preencha todos os campos.");

    try {
      const result = await api.post("/auth/login", { email, password });

      const { accessToken, refreshToken } = result.data.data;

      // Salvar tokens nos cookies
      Cookies.set("token", accessToken, { expires: 1 }); // 1 dia
      Cookies.set("refresh", refreshToken, { expires: 7 });

      // Redirecionar
      window.location.href = "/admin/dashboard";
    } catch (error: any) {
      alert(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="card p-4" style={{ width: 380 }}>
          <h3 className="text-center mb-3">D | Walt Engenharia</h3>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form onSubmit={submit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100 mt-4" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
