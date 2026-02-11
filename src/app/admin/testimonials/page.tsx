"use client";

import api from "@/lib/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Search, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Testimonial {
    id: number;
    name: string;
    location: string;
    avatar: string;
    testimonial: string;
    stars: number;
    url: string;
}

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const filtered = testimonials.filter(
        (t) =>
            t.name.toLowerCase().includes(query.toLowerCase()) ||
            t.location.toLowerCase().includes(query.toLowerCase()) ||
            t.testimonial.toLowerCase().includes(query.toLowerCase())
    );

    async function removeTestimonial(id: number) {
        const confirmDel = confirm("Tem certeza que deseja apagar este depoimento?");

        if (confirmDel) {
            try {
                await api.delete("/testimonials/" + id);
                setTestimonials((prev) => prev.filter((t) => t.id !== id));
                toast.success("Depoimento removido com sucesso.");
            } catch (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao apagar o depoimento.");
            }
        }
    }

    const loadData = async () => {
        try {
            const { data } = await api.get("/testimonials");
            if (Array.isArray(data.data)) {
                setTestimonials(data.data);
            } else if (data.data?.data && Array.isArray(data.data.data)) {
                setTestimonials(data.data.data);
            } else {
                setTestimonials([]);
            }
        } catch (error) {
            console.error("Failed to load testimonials", error);
            // toast.error("Erro ao carregar depoimentos."); // Avoid spamming if empty or err
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-3xl font-bold">Depoimentos</h3>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            className="w-full md:w-64 bg-zinc-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 focus:border-green-500/50 outline-none transition-colors"
                            placeholder="Pesquisar..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <Link href="/admin/testimonials/new">
                        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                            <Plus className="w-4 h-4" />
                            Novo Depoimento
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-400">Avatar</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Nome</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Localização</th>
                                <th className="px-6 py-4 font-medium text-gray-400">Avaliação</th>
                                <th className="px-6 py-4 font-medium text-gray-400 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filtered.map((testimonial) => (
                                <tr key={testimonial.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        {testimonial.avatar ? (
                                            <div className="w-10 h-10 relative rounded-full overflow-hidden">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                                <User className="w-5 h-5 text-gray-500" />
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 font-medium whitespace-nowrap">{testimonial.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-300">{testimonial.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < testimonial.stars ? "fill-current" : "text-gray-600"}`}
                                                />
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/testimonials/${testimonial.id}`}>
                                                <button className="p-2 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-colors" title="Editar">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <button
                                                className="p-2 hover:bg-red-500/20 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                                                onClick={() => removeTestimonial(testimonial.id)}
                                                title="Remover"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        Nenhum depoimento encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
