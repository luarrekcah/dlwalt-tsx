/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// @ts-ignore
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "./css/projects.css";
import LoadingServer from "@/components/LoadingServer";
import Image from "next/image";

const SectionProjects = ({data}:any) => {
  return (
    <section id="projetos" className="project-area solid-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="section-title" data-aos="flip-left">
              Trabalho de Excelência
            </h2>
            <h3 className="section-sub-title" data-aos="flip-right">
              Projetos Recentes
            </h3>
          </div>
        </div>

        {data.length === 0 ? (
          <LoadingServer />
        ) : (
          <Swiper
            data-aos="flip-up"
            effect={"coverflow"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {data.reverse().map((project:any) => {
              return (
                <SwiperSlide key={project.key}>
                  <div
                    className="shuffle-item"
                    data-groups={[project.data.type]}
                  >
                    <div className="project-img-container">
                      <a
                        className="gallery-popup"
                        href={project.data.media[0]}
                        aria-label="project-img"
                      >
                        <Image
                          className="img-fluid"
                          src={project.data.media[0]}
                          alt="project-img"
                          width={400}
                          height={400}
                        />
                        <span className="gallery-icon">
                          <i className="fa fa-plus" />
                        </span>
                      </a>
                      <div className="project-item-info">
                        <div className="project-item-info-content">
                          <h3 className="project-item-title">
                            <a href={"/projetos/"+project.key}>
                              {project.data.title}
                            </a>
                          </h3>
                          <p className="project-cat">{project.data.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default SectionProjects;
