/* eslint-disable react/no-unescaped-entities */
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Solar | D | Walt Engenharia",
  applicationName: "D | Walt Engenharia",
  publisher: "D | Walt Engenharia",
  description:
    "Fique por dentro das novidades, dicas e informações sobre energia solar, sustentabilidade e projetos fotovoltaicos da D | Walt Engenharia.",
  keywords: [
    "blog energia solar",
    "dicas energia solar",
    "notícias energia solar",
    "sustentabilidade",
    "fotovoltaico",
    "D Walt Engenharia",
  ],
  openGraph: {
    title: "Blog Solar | D | Walt Engenharia",
    description:
      "Explore artigos, notícias e conteúdos exclusivos sobre energia solar, sustentabilidade e soluções fotovoltaicas.",
    url: "https://www.dwalt.net/blog",
    siteName: "D | Walt Engenharia",
    type: "website",
  },
};

const Blog = () => {
  return (
    <>
      <div className="body-inner">
        <Navbar />
        <div
          id="banner-area"
          className="banner-area"
          style={{
            backgroundImage: "url(/images/backgrounds/bg-panel.webp)",
          }}
        >
          <div className="banner-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-heading">
                    <h1 className="banner-title">Blog</h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                          <Link href="/#">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/blog">Blog</Link>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="main-container" className="main-container">
          <div className="container">
            <div className="row">
              <BlogList />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
