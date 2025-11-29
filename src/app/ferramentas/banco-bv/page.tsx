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
            <div className="col-12">Integração OFF-LINE</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BVBank;
