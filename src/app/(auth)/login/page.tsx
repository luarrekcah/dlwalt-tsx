"use client";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return setError("Preencha todos os campos.");

    // Mock login
    if (email === "admin@example.com" && password === "123456") {
      // router.push("/admin");
    } else {
      setError("Credenciais inválidas.");
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
