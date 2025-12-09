"use client";

import api from "@/lib/api";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogSidebar from "./BlogSidebar";

interface PaginatedPosts {
  total: number;
  page: number;
  limit: number;
  data: Post[];
}

const PostCard = ({ post }: { post: Post }) => {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("pt-BR")
    : "-";

  return (
    <div className="post mb-4">
      <div className="post-media post-image mb-3">
        <Link href={`/blog/${post.slug}`}>
          <Image
            width={400}
            height={250}
            loading="lazy"
            src={post.thumbnailUrl || "/images/backgrounds/bg-panel.webp"}
            className="img-fluid rounded"
            alt={post.title}
          />
        </Link>
      </div>

      <div className="post-body">
        <div className="entry-header mb-2">
          <div className="post-meta mb-1">
            <span className="post-author me-3">
              <i className="far fa-user"></i>{" "}
              {post.author?.name || "Autor Desconhecido"}
            </span>
            <span className="post-meta-date">
              <i className="far fa-calendar"></i> {formattedDate}
            </span>
          </div>
          <h2 className="entry-title h5">
            <Link href={`/blog/${post.slug}`} className="text-decoration-none">
              {post.title}
            </Link>
          </h2>
        </div>

        <div className="entry-content mb-2">
          <p>{post.content.replace(/(<([^>]+)>)/gi, "").slice(0, 200)}...</p>
        </div>

        <div className="post-footer">
          <Link href={`/blog/${post.slug}`} className="btn btn-primary btn-sm">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPagination = ({
  page,
  totalPages,
  onChangePage,
}: {
  page: number;
  totalPages: number;
  onChangePage: (newPage: number) => void;
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="paging" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onChangePage(page - 1)}>
            <i className="fas fa-angle-double-left"></i>
          </button>
        </li>

        {pages.map((p) => (
          <li key={p} className={`page-item ${p === page ? "active" : ""}`}>
            <button className="page-link" onClick={() => onChangePage(p)}>
              {p}
            </button>
          </li>
        ))}

        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => onChangePage(page + 1)}>
            <i className="fas fa-angle-double-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BlogList = () => {
  const [postsData, setPostsData] = useState<PaginatedPosts>({
    total: 0,
    page: 1,
    limit: 6,
    data: [],
  });
  const [loading, setLoading] = useState(false);

  const loadPosts = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/posts?page=${page}&limit=${postsData.limit}`
      );
      setPostsData(data.data);
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts(postsData.page);
  }, []);

  const handleChangePage = (newPage: number) => {
    if (newPage < 1 || newPage > Math.ceil(postsData.total / postsData.limit))
      return;
    loadPosts(newPage);
  };

  return (
    <>
      <div className="col-lg-4 order-1 order-lg-0">
       <BlogSidebar />
      </div>

      <div className="col-lg-8 mb-5 mb-lg-0 order-0 order-lg-1">
        {loading && <p>Carregando posts...</p>}

        {!loading && postsData.data.length === 0 && (
          <p>Nenhum post encontrado.</p>
        )}

        {postsData.data.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}

        <BlogPagination
          page={postsData.page}
          totalPages={Math.ceil(postsData.total / postsData.limit)}
          onChangePage={handleChangePage}
        />
      </div>
    </>
  );
};

export default BlogList;
