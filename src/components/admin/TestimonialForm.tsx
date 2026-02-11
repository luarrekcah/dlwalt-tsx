"use client";

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Upload, User, Star } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

interface Testimonial {
    id?: number;
    name: string;
    location: string;
    avatar: string;
    testimonial: string;
    stars: number;
    url: string;
}

export default function TestimonialForm({ testimonial: existingTestimonial }: { testimonial?: Testimonial }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Form state
    const [name, setName] = useState(existingTestimonial?.name || "");
    const [location, setLocation] = useState(existingTestimonial?.location || "");
    const [avatar, setAvatar] = useState(existingTestimonial?.avatar || "");
    const [testimonial, setTestimonial] = useState(existingTestimonial?.testimonial || "");
    const [stars, setStars] = useState(existingTestimonial?.stars || 5);
    const [url, setUrl] = useState(existingTestimonial?.url || "");

    async function save() {
        if (!name || !location || !testimonial) {
            toast.error("Preencha os campos obrigatórios.");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                name,
                location,
                avatar,
                testimonial,
                stars,
                url
            };

            if (existingTestimonial?.id) {
                await api.put(`/testimonials/${existingTestimonial.id}`, payload);
                toast.success("Depoimento atualizado com sucesso!");
            } else {
                await api.post("/testimonials", payload);
                toast.success("Depoimento criado com sucesso!");
            }

            router.push("/admin/testimonials");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Erro ao salvar o depoimento.");
        } finally {
            setLoading(false);
        }
    }

    async function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append("image", file);
            // Assuming backend supports folder query param or similar mechanism
            const res = await api.post("/upload?folder=testimonials", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setAvatar(res.data.data.url);
            toast.success("Avatar enviado!");
        } catch (err) {
            console.error(err);
            toast.error("Erro ao enviar avatar.");
        }
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/testimonials" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-bold">{existingTestimonial?.id ? "Editar Depoimento" : "Novo Depoimento"}</h1>
                </div>
                <Button onClick={save} disabled={loading} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                    <Save className="w-4 h-4" />
                    {loading ? "Salvando..." : "Salvar"}
                </Button>
            </div>

            <div className="grid gap-6 bg-zinc-900/50 p-6 rounded-2xl border border-white/10">
                <div className="flex justify-center">
                    <div className="text-center space-y-2">
                        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 flex items-center justify-center group">
                            {avatar ? (
                                <Image src={avatar} alt="Avatar" fill className="object-cover" />
                            ) : (
                                <User className="w-10 h-10 text-gray-500" />
                            )}
                            <label className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <Upload className="w-6 h-6 text-white" />
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleAvatarUpload}
                                />
                            </label>
                        </div>
                        <p className="text-xs text-gray-400">Clique para alterar a foto</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Nome *</label>
                        <Input
                            className="bg-zinc-900 border-white/10"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nome do cliente"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Localização *</label>
                        <Input
                            className="bg-zinc-900 border-white/10"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Cidade, UF"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Depoimento *</label>
                    <textarea
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors min-h-[120px]"
                        value={testimonial}
                        onChange={(e) => setTestimonial(e.target.value)}
                        placeholder="Escreva o depoimento aqui..."
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Avaliação (1-5)</label>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setStars(star)}
                                    className="p-1 hover:scale-110 transition-transform focus:outline-none"
                                >
                                    <Star
                                        className={`w-6 h-6 ${star <= stars ? "fill-yellow-500 text-yellow-500" : "text-gray-600"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Video URL (Opcional)</label>
                        <Input
                            className="bg-zinc-900 border-white/10"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Link do vídeo (YouTube/Vimeo)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
