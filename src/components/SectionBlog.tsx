import api from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const { data } = await api.get("/posts?limit=6");

  if (!data) return [];

  return data.data.data;
}

const SectionBlog = async () => {
  const posts = await getPosts();

  return (
    <section id="news" className="news">
      <div className="container">
        {/* TÍTULO */}
        <div className="row text-center">
          <div className="col-12">
            <h2 className="section-title">Conheça nosso</h2>
            <h3 className="section-sub-title">Blog Solar</h3>
          </div>
        </div>

        <div className="row mt-4">
          {posts.length === 0 && (
            <div className="col-12 text-center">
              <p>Nenhum post encontrado.</p>
            </div>
          )}

          {posts.map((post: any) => (
            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
              <div className="latest-post">
                {/* IMAGEM */}
                <div className="latest-post-media">
                  <a href={`/blog/${post.slug}`} className="latest-post-img">
                    <Image
                      width={400}
                      height={300}
                      loading="lazy"
                      className="img-fluid"
                      src={post.thumbnailUrl}
                      alt={post.title}
                    />
                  </a>
                </div>

                {/* TÍTULO E DATA */}
                <div className="post-body">
                  <h4 className="post-title">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="d-inline-block"
                    >
                      {post.title}
                    </Link>
                  </h4>

                  <div className="latest-post-meta">
                    <span className="post-item-date">
                      <i className="fa fa-clock-o"></i>{" "}
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="general-btn text-center mt-4">
          <Link className="btn btn-primary" href="/blog">
            Ver todos os posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
