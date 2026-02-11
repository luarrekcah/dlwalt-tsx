"use client";

import ProjectForm from "@/components/admin/ProjectForm";
import api from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditProjectPage() {
    const params = useParams();
    const id = params?.id;
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            if (!id) return;
            try {
                const { data } = await api.get(`/projects/${id}`);
                setProject(data.data || data);
            } catch (error) {
                console.error("Failed to load project", error);
                toast.error("Erro ao carregar projeto.");
            } finally {
                setLoading(false);
            }
        }
        loadProject();
    }, [id]);

    if (loading) {
        return <div className="text-gray-400">Carregando...</div>;
    }

    if (!project) {
        return <div className="text-red-400">Projeto não encontrado.</div>;
    }

    return <ProjectForm project={project} />;
}
