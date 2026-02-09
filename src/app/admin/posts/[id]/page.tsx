"use client";

import PostEditor from "@/components/admin/PostEditor";
import api from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditPostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            try {
                const { data } = await api.get(`/posts/${id}`);
                // Adjust based on API structure, snippet implies data directly or nested
                setPost(data.data);
            } catch (error) {
                console.error(error);
                toast.error("Erro ao carregar o post.");
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            loadPost();
        }
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!post) {
        return <div>Post não encontrado.</div>;
    }

    return <PostEditor post={post} />;
}
