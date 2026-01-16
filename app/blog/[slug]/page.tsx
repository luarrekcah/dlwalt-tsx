import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/data/blog';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.imageUrl,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "DWalt Energia",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dwaltenergia.com.br/logo.png"
            }
        },
        "datePublished": "2024-01-01", // Should ideally be in the post data in ISO format
        "description": post.excerpt || post.content.substring(0, 160)
    };

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <JsonLd data={jsonLd} />
            <Header />
            <main className="flex-grow pt-32 pb-20">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary mb-10 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Voltar para o blog
                    </Link>

                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-8 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </header>

                    <div className="w-full aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/10 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-lg prose-invert max-w-none 
                        prose-headings:text-white prose-headings:font-bold 
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Call to Action Footer */}
                    <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Quer economizar como neste artigo?</h3>
                            <p className="text-gray-400">Faça uma simulação gratuita e descubra o potencial do seu telhado.</p>
                        </div>
                        <Link
                            href="/calculadora-solar"
                            className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/20 whitespace-nowrap"
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
