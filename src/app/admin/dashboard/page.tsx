"use client";

import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const loadData = async () => {
    const usersResponse = await api.get("/user");
    setUsers(usersResponse.data.data);

    const postsResponse = await api.get("/posts");
    setPosts(postsResponse.data.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <p>Carregando...</p>;

  const stats = {
    users: users.length,
    posts: posts.length,
  };
  return (
    <div className="container-fluid">
      <h2 className="mt-3">Bem-vindo, {user?.name}</h2>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Usuários</h5>
            <p className="display-4">{stats?.users}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Posts</h5>
            <p className="display-4">{stats?.posts}</p>
          </div>
        </div>
      </div>
      {/**
 * 
      <div className="row mt-4">
        <div className="col-12">
          <h4>Atividade recente</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Usuário João criou o post &rdquo;Como instalar painéis
              solares&rdquo;
            </li>
            <li className="list-group-item">Usuária Maria atualizou perfil</li>
            <li className="list-group-item">
              Post &rdquo;Dicas de manutenção&rdquo; publicado
            </li>
          </ul>
        </div>
      </div>
 */}
    </div>
  );
};

export default Dashboard;
