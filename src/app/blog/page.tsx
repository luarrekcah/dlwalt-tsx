'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import api from '@/lib/api';
import { useSearchParams, useRouter } from 'next/navigation';
import { PaginatedPosts, Post } from '@/types';

function BlogList() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pageParam = searchParams.get("page");
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

    const [postsData, setPostsData] = useState<PaginatedPosts>({
        total: 0,
        page: 1,
        limit: 6,
        data: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async (page: number) => {
            setLoading(true);
            try {
                // Adjust endpoint based on API
                const { data } = await api.get(`/posts?page=${page}&limit=6`);
                // Check if data is nested
                setPostsData(data.data ? data.data : data);
            } catch (err) {
                console.error("Erro ao carregar posts:", err);
            } finally {
                setLoading(false);
            }
        };

        loadPosts(currentPage);
    }, [currentPage]);

    const totalPages = Math.ceil(postsData.total / postsData.limit);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            router.push(`/blog?page=${newPage}`);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                    <BookOpen className="w-4 h-4" />
                    Blog & Notícias
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                    Conteúdo para um <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Mundo Sustentável</span>
                </h1>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {postsData.data.map((post) => (
                            <article key={post.id} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col">
                                <div className="h-56 bg-gray-800 relative overflow-hidden">
                                    {post.thumbnailUrl ? (
                                        <img
                                            src={post.thumbnailUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700">
                                            <BookOpen className="w-12 h-12" />
                                        </div>
                                    )}
                                    {post.category && (
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {post.category}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                        <Link href={`/blog/${post.slug || post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-400 mb-6 line-clamp-3 flex-grow text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt || post.content.substring(0, 150) + "..." }}
                                    >
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug || post.id}`}
                                        className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 mt-auto text-sm"
                                    >
                                        Ler artigo completo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 gap-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <span className="text-gray-400">
                                Página {currentPage} de {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <Suspense fallback={
                    <div className="flex justify-center items-center min-h-[400px]">
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                    </div>
                }>
                    <BlogList />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
