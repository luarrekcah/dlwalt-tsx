import React from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../services/database";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import LoadingServer from "../components/LoadingServer";
import Navbar from "../components/Navbar";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import HelmetHeader from "../components/HelmetHeader";

const ProjectsSingle = () => {
  const [thumbsSwiper] = React.useState<any>();
  let { id } = useParams();
  const [project, setProject] = React.useState<any>({});

  React.useEffect(() => {
    getItems(`dlwalt/projects/${id}`).then((response: any) => {
      setProject(response);
    });
  }, [id]);

  return (
    <div className="body-inner">
      <HelmetHeader
        title={`Projeto ${project.title}`}
        description="Um dos nossos grandes projetos!"
        url={`projetos/${project.key}`}
      />
      <Navbar />
      <BannerHeading title={project.title} />
      <section id="main-container" className="main-container">
        {Object.keys(project).length === 0 ? (
          <LoadingServer />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {project.media.map((image: any, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <img
                          loading="lazy"
                          className="img-fluid"
                          src={image}
                          alt="project"
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <h3 className="column-title mrt-0">{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="project-info list-unstyled">
                  <li>
                    <p className="project-info-label">Cliente</p>
                    <p className="project-info-content">{project.customer}</p>
                  </li>
                  <li>
                    <p className="project-info-label">Engenheira</p>
                    <p className="project-info-content">
                      Taynara Bastos Trindade
                    </p>
                  </li>
                  <li>
                    <p className="project-info-label">Local</p>
                    <p className="project-info-content">{project.coords}</p>
                  </li>
                  <li>
                    <p className="project-info-label">Tamanho</p>
                    <p className="project-info-content">---</p>
                  </li>
                  <li>
                    <p className="project-info-label">Data</p>
                    <p className="project-info-content">
                      {`${project.date.initial} - ${project.date.end}`}
                    </p>
                  </li>
                  <li>
                    <p className="project-info-label">Tipo</p>
                    <p className="project-info-content">{project.type}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsSingle;
