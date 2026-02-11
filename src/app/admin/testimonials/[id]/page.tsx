"use client";

import TestimonialForm from "@/components/admin/TestimonialForm";
import api from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditTestimonialPage() {
    const params = useParams();
    const id = params?.id;
    const [testimonial, setTestimonial] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTestimonial() {
            if (!id) return;
            try {
                const { data } = await api.get(`/testimonials/${id}`);
                setTestimonial(data.data || data);
            } catch (error) {
                console.error("Failed to load testimonial", error);
                toast.error("Erro ao carregar depoimento.");
            } finally {
                setLoading(false);
            }
        }
        loadTestimonial();
    }, [id]);

    if (loading) {
        return <div className="text-gray-400">Carregando...</div>;
    }

    if (!testimonial) {
        return <div className="text-red-400">Depoimento não encontrado.</div>;
    }

    return <TestimonialForm testimonial={testimonial} />;
}
