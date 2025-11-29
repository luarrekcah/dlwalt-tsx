/* eslint-disable react/jsx-key */
import React from "react";
import { getAllItems } from "@/services/database";
import BannerHeading from "@/components/BannerHeading";
import Footer from "@/components/Footer";
import LoadingServer from "@/components/LoadingServer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Service } from "@/types";

const Services = () => {
  const [data, setData] = React.useState<Service[]>([]);
  React.useEffect(() => {
    getAllItems("dlwalt/services").then((response: Service[]) => {
      setData(response);
    });
  }, []);

  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Serviços" />
      <section id="main-container" className="main-container pb-2">
        <div className="container">
          {data.length === 0 ? (
            <LoadingServer />
          ) : (
            <div className="row">
              {data.map((service) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="ts-service-box">
                      <div className="ts-service-image-wrapper">
                        <Image
                          loading="lazy"
                          className="w-100"
                          src={service.data.bannerSrc}
                          alt="Imagem de serviço"
                        />
                      </div>
                      <div className="d-flex">
                        <div className="ts-service-box-img">
                          <Image
                            loading="lazy"
                            width={50}
                            height={50}
                            src="/images/icons/orcamento.svg"
                            alt="service-icon"
                          />
                        </div>
                        <div className="ts-service-info">
                          <h3 className="service-box-title-services-page">
                            <a href={"/servicos/" + service.data.id}>
                              {service.data.title}
                            </a>
                          </h3>
                          <p>{service.data.desc}</p>
                          <a
                            className="learn-more d-inline-block"
                            href="/servicos/orcamento-e-proposta-de-sistema-fotovoltaico"
                            aria-label="service-details"
                          >
                            <i className="fa fa-caret-right" /> Ler mais
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
