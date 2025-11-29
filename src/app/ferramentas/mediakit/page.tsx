"use client";

/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BVBank = () => {
  return (
    <div className="body-inner">
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-12">Clique abaixo para baixar o mediakit:
              <a href="/mediaKit.rar" target="_blank" rel="noopener noreferrer">Download Mediakit</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BVBank;
