/* eslint-disable react/no-unescaped-entities */
import BlogSingle from "@/components/BlogSingle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import api from "@/lib/api";
import { Metadata } from "next";
import { Post } from "@/types";
import { Params } from "next/dist/server/request/params";

// Função para gerar metadata dinamicamente

export async function generateMetadata({ params }: {params: Params}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { data } = await api.get(`/posts/${slug}`);
    const post = data.data;

    const cleanDescription = post.content
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/\s+/g, " ")
      .slice(0, 160);

    const canonicalUrl = `https://www.dwalt.net/blog/${post.slug}`;
    const image = post.thumbnailUrl || "https://www.dwalt.net/default-og.jpg";

    return {
      title: `${post.title} | D | Walt Engenharia`,
      description: cleanDescription,
      keywords: [
        post.title,
        "energia solar",
        "sustentabilidade",
        "D Walt Engenharia",
        "blog energia solar",
      ],

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: post.title,
        description: cleanDescription,
        url: canonicalUrl,
        siteName: "D | Walt Engenharia",
        type: "article",
        publishedTime: post.publishedAt,
        authors: [post.author?.name],
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: cleanDescription,
        images: [image],
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': "large",
          'max-video-preview': -1,
        },
      },
    };
  } catch (err) {
    console.error("Erro ao gerar metadata:", err);
    return {
      title: "Postagem | D | Walt Engenharia",
    };
  }
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  let post: Post | null = null;

  try {
    const { data } = await api.get(`/posts/${slug}`);
    post = data.data;
  } catch (err) {
    console.error("Erro ao buscar post:", err);
  }

  if (!post) {
    return (
      <div className="body-inner">
        <Navbar />
        <div className="container py-5">
          <div className="alert alert-danger">Post não encontrado.</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="body-inner">
      <Navbar />
      <BlogSingle post={post} />
      <Footer />
    </div>
  );
}
