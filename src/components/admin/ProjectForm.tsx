"use client";

import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Upload, X } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

interface Project {
    id?: number;
    name: string;
    category: string;
    description: string;
    location: string;
    photos: string[];
    panelCount: number;
    kwp: number;
}

export default function ProjectForm({ project }: { project?: Project }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploadingPhotos, setUploadingPhotos] = useState(false);

    // Form state
    const [name, setName] = useState(project?.name || "");
    const [category, setCategory] = useState(project?.category || "Residencial");
    const [description, setDescription] = useState(project?.description || "");
    const [location, setLocation] = useState(project?.location || "");
    const [photos, setPhotos] = useState<string[]>(project?.photos || []);
    const [panelCount, setPanelCount] = useState(project?.panelCount || 0);
    const [kwp, setKwp] = useState(project?.kwp || 0);

    async function save() {
        if (!name || !location || !category) {
            toast.error("Preencha os campos obrigatórios.");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                name,
                category,
                description,
                location,
                photos,
                panelCount: Number(panelCount),
                kwp: Number(kwp),
            };

            if (project?.id) {
                await api.put(`/projects/${project.id}`, payload);
                toast.success("Projeto atualizado com sucesso!");
            } else {
                await api.post("/projects", payload);
                toast.success("Projeto criado com sucesso!");
            }

            router.push("/admin/projects");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Erro ao salvar o projeto.");
        } finally {
            setLoading(false);
        }
    }

    async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploadingPhotos(true);
        try {
            const uploadPromises = Array.from(files).map(async (file) => {
                const formData = new FormData();
                formData.append("image", file);
                const res = await api.post("/upload?folder=projects", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                return res.data.data.url;
            });

            const uploadedUrls = await Promise.all(uploadPromises);
            setPhotos((prev) => [...prev, ...uploadedUrls]);
            toast.success(`${uploadedUrls.length} foto(s) enviada(s)!`);
        } catch (err) {
            console.error(err);
            toast.error("Erro ao enviar fotos.");
        } finally {
            setUploadingPhotos(false);
        }
    }

    function removePhoto(index: number) {
        setPhotos((prev) => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/projects" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-2xl font-bold">{project?.id ? "Editar Projeto" : "Novo Projeto"}</h1>
                </div>
                <Button onClick={save} disabled={loading || uploadingPhotos} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                    <Save className="w-4 h-4" />
                    {loading ? "Salvando..." : uploadingPhotos ? "Enviando fotos..." : "Salvar"}
                </Button>
            </div>

            <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Nome do Projeto *</label>
                        <Input
                            className="bg-zinc-900 border-white/10"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ex: Instalação Residencial Silva"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Categoria *</label>
                        <select
                            className="w-full bg-zinc-900 border border-white/10 rounded-md h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Residencial">Residencial</option>
                            <option value="Comercial">Comercial</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Rural">Rural</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Localização *</label>
                        <Input
                            className="bg-zinc-900 border-white/10"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Ex: São Paulo, SP"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Nº de Painéis</label>
                            <Input
                                type="number"
                                className="bg-zinc-900 border-white/10"
                                value={panelCount}
                                onChange={(e) => setPanelCount(Number(e.target.value))}
                                min={0}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Potência (kWp)</label>
                            <Input
                                type="number"
                                step="0.01"
                                className="bg-zinc-900 border-white/10"
                                value={kwp}
                                onChange={(e) => setKwp(Number(e.target.value))}
                                min={0}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Descrição</label>
                    <textarea
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:border-green-500/50 outline-none transition-colors min-h-[120px]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Detalhes sobre o projeto..."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Fotos</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {photos.map((url, idx) => (
                            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                                <Image src={url} alt={`Foto ${idx + 1}`} fill className="object-cover" />
                                <button
                                    onClick={() => removePhoto(idx)}
                                    className="absolute top-2 right-2 p-1 bg-red-500/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ))}

                        <label className="cursor-pointer flex flex-col items-center justify-center aspect-video rounded-lg border-2 border-dashed border-white/10 hover:border-green-500/50 hover:bg-white/5 transition-colors">
                            <Upload className="w-6 h-6 text-gray-400 mb-2" />
                            <span className="text-xs text-gray-400">Adicionar Fotos</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                multiple
                                onChange={handlePhotoUpload}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
