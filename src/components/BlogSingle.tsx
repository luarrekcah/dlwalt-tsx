"use client";

import { Post } from "@/types";
import Image from "next/image";
import BlogSidebar from "./BlogSidebar";

const BlogSingle = ({ post }: { post: Post }) => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnailUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: "D | Walt Engenharia",
      logo: {
        "@type": "ImageObject",
        url: "https://www.dwalt.net/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.dwalt.net/blog/${post.slug}`,
    },
  };

  return (
    <section id="main-container" className="main-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="post-content post-single">
              <div className="post-media post-image">
                <Image
                  height={200}
                  width={800}
                  loading="lazy"
                  src={post.thumbnailUrl}
                  className="img-fluid"
                  alt="post-image"
                />
              </div>

              <div className="post-body">
                <div className="entry-header">
                  <div className="post-meta">
                    <span className="post-author">
                      <i className="far fa-user"></i>
                      <a href="#"> {post.author?.name || "D | Walt Engenharia"}</a>
                    </span>
                    <span className="post-meta-date">
                      <i className="far fa-calendar"></i>{" "}
                      {post.publishedAt
                        ? new Intl.DateTimeFormat("pt-BR", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }).format(new Date(post.publishedAt))
                        : "-"}
                    </span>
                  </div>
                  <h2 className="entry-title">{post.title}</h2>
                </div>
                <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="tags-area d-flex align-items-center justify-content-between">
                  {/**
                   * <div className="post-tags">
                    <a href="#">Construction</a>
                    <a href="#">Safety</a>
                    <a href="#">Planning</a>
                  </div>
                   */}
                  {/**
                   * <div className="share-items">
                    <ul className="post-social-icons list-unstyled">
                      <li className="social-icons-head">Compartilhar:</li>
                      <li>
                        <a onClick={() => share("facebook")}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                   */}
                </div>
              </div>
            </div>

            {/*
             <div className="author-box d-nlock d-sm-flex">
              <div className="author-img mb-4 mb-md-0">
                <Image
                  height={50}
                  width={50}
                  loading="lazy"
                  src={post.author.avatarUrl || "/images/default"}
                  alt="author"
                />
              </div>
              <div className="author-info">
                <h3>{post.author.name}</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  officiis dolor, totam suscipit reiciendis dicta tempora
                  ratione dolorum. Eligendi molestiae nulla voluptatum
                  consequatur doloribus. Esse expedita natus at tenetur
                  corporis!
                </p>
              </div>
            </div>
             <div id="comments" className="comments-area">
              <h3 className="comments-heading">07 Comments</h3>

              <ul className="comments-list">
                <li>
                  <div className="comment d-flex">
                    <Image
                      loading="lazy"
                      className="comment-avatar"
                      alt="author"
                      src="/images/news/avator1.png"
                    />
                    <div className="comment-body">
                      <div className="meta-data">
                        <span className="comment-author mr-3">
                          Michelle Aimber
                        </span>
                        <span className="comment-date float-right">
                          January 17, 2016 at 1:38 pm
                        </span>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehen.
                        </p>
                      </div>
                      <div className="text-left">
                        <a className="comment-reply font-weight-bold" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>

                  <ul className="comments-reply">
                    <li>
                      <div className="comment d-flex">
                        <img
                          loading="lazy"
                          className="comment-avatar"
                          alt="author"
                          src="/images/news/avator2.png"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author mr-3">
                              Tom Harnandez
                            </span>
                            <span className="comment-date float-right">
                              January 17, 2016 at 1:38 pm
                            </span>
                          </div>
                          <div className="comment-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute
                              irure dolor in reprehen.
                            </p>
                          </div>
                          <div className="text-left">
                            <a
                              className="comment-reply font-weight-bold"
                              href="#"
                            >
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="comment d-flex last">
                    <img
                      loading="lazy"
                      className="comment-avatar"
                      alt="author"
                      src="/images/news/avator3.png"
                    />
                    <div className="comment-body">
                      <div className="meta-data">
                        <span className="comment-author mr-3">
                          Genelia Dusteen
                        </span>
                        <span className="comment-date float-right">
                          January 17, 2016 at 1:38 pm
                        </span>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehen.
                        </p>
                      </div>
                      <div className="text-left">
                        <a className="comment-reply font-weight-bold" href="#">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
             */}

            {/**
        *  <div className="comments-form border-box">
          <h3 className="title-normal">Add a comment</h3>

          <form role="form">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label><textarea className="form-control required-field" id="message" placeholder="Your Comment" rows={10} required></textarea></label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label><input className="form-control" name="name" id="name" placeholder="Your Name" type="text" required/></label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label><input className="form-control" name="email" id="email" placeholder="Your Email" type="email" required></label>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label for="website"><input className="form-control" id="website" placeholder="Your Website" type="text" required></label>
                </div>
              </div>

            </div>
            <div className="clearfix">
              <button className="btn btn-primary" type="submit" aria-label="post-comment">Post Comment</button>
            </div>
          </form>
        </div>
        */}
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
