"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import { toast } from "sonner";
import { ScriptForm } from "@/components/admin/ScriptForm";

export default function EditScriptPage() {
    const { id } = useParams();
    const router = useRouter();
    const [script, setScript] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const { data } = await api.get(`/scripts/${id}`);
                setScript(data);
            } catch (error) {
                console.error("Error fetching script", error);
                toast.error("Script não encontrado.");
                router.push("/admin/scripts");
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [id, router]);

    if (loading) {
        return <div className="text-gray-400">Carregando...</div>;
    }

    return <ScriptForm initialData={script} isEditing />;
}
