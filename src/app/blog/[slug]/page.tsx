import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import api from '@/lib/api';
import { Post } from '@/types';
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Fetch data function
async function getPost(slug: string): Promise<Post | null> {
    try {
        const response = await api.get(`/posts/${slug}`);
        return response.data.data ? response.data.data : response.data;
    } catch (error) {
        console.error("Error fetching post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Post não encontrado',
        };
    }

    return {
        title: `${post.title} | DWalt Energia`,
        description: post.excerpt || post.content.substring(0, 160),
        openGraph: {
            title: post.title,
            description: post.excerpt || post.content.substring(0, 160),
            images: post.thumbnailUrl ? [post.thumbnailUrl] : [],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.thumbnailUrl,
        "author": {
            "@type": "Person",
            "name": "Equipe DWalt"
        },
        "publisher": {
            "@type": "Organization",
            "name": "DWalt Energia",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dwalt.net/logo.png"
            }
        },
        "datePublished": post.createdAt,
        "dateModified": post.updatedAt,
        "description": post.excerpt || post.content.substring(0, 160)
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
            <JsonLd data={jsonLd} />
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-green-500 mb-10 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Voltar para o blog
                    </Link>

                    <header className="mb-12 text-center">
                        {post.category && (
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {post.category}
                                </span>
                            </div>
                        )}
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-8 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Equipe DWalt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                            </div>
                        </div>
                    </header>

                    {post.thumbnailUrl && (
                        <div className="w-full aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 border border-white/10 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                            <img
                                src={post.thumbnailUrl}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-lg prose-invert max-w-none 
                        prose-headings:text-foreground prose-headings:font-bold 
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-blockquote:border-l-green-500 prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
                        [&_img]:rounded-xl [&_img]:border [&_img]:border-white/10
                        [&_*]:text-gray-300 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_strong]:text-white [&_b]:text-white"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Call to Action Footer */}
                    <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-green-900/20 to-green-900/5 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Quer economizar como neste artigo?</h3>
                            <p className="text-gray-400">Faça uma simulação gratuita e descubra o potencial do seu telhado.</p>
                        </div>
                        <Link
                            href="/calculadora-solar"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-green-500/20 whitespace-nowrap"
                        >
                            Simular Agora
                        </Link>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
