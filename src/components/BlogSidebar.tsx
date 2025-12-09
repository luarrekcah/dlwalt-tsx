"use client";

import api from "@/lib/api";
import { Post } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const RecentPost = ({ post }: { post: Post }) => {
  return (
    <li className="d-flex align-items-center">
      <div className="posts-thumb">
        <a href={`/blog/${post.slug}`}>
          <Image
            width={200}
            height={200}
            loading="lazy"
            alt="img"
            src={post.thumbnailUrl}
          />
        </a>
      </div>
      <div className="post-info">
        <h4 className="entry-title">
          <a href={`/blog/${post.slug}`}>{post.title}</a>
        </h4>
      </div>
    </li>
  );
};

const Categories = () => {
  return (
    <li>
      <a href="#">Construction</a>
    </li>
  );
};

const BlogSidebar = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const { data } = await api.get("/posts?limit=6");

    console.log(data)

    setPosts(data.data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="sidebar sidebar-left">
      <div className="widget recent-posts">
        <h3 className="widget-title">Posts Recentes</h3>
        {loading ? (
          <p>Carregando posts...</p>
        ) : (
          <ul className="list-unstyled">
            {posts.map((p: Post, i: number) => {
              return <RecentPost key={i} post={p} />;
            })}
          </ul>
        )}
      </div>
      {/**
           * <div className="widget">
            <h3 className="widget-title">Categorias</h3>
            <ul className="arrow nav nav-tabs">
              <Categories />
            </ul>
          </div>
           */}
    </div>
  );
};

export default BlogSidebar;
