"use client";

import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

const testemonials = [
  {
    name: "Girlanda Areal",
    text: "Super indico! Profissionais qualificados e prestativos. Sempre dando o suporte necessário! Sem dúvidas, a melhor! 👏😊 …",
    image:
      "https://lh3.googleusercontent.com/a-/ACB-R5R-bazVJIfkmdrWMUVNf-jssBPBA4jUYu5p7FedUZA=w36-h36-p-c0x00000000-rp-mo-br100",
  },
  {
    name: "Valtemir Silva",
    text: "Empresa com um ótimo atendimento, serviços de qualidade e sempre preocupada com os clientes. Recomendo 👍",
    image:
      "https://lh3.googleusercontent.com/a-/ACB-R5SZqnSrTqy2_jQWiHahGigwHVW51WMRQvXmcLYMIuE=w36-h36-p-c0x00000000-rp-mo-br100",
  },
  {
    name: "Val Soares Soares",
    text: "Trabalho com excelência parabéns a equipe, atendimento no qual não deixa a desejar! Recomendo.",
    image:
      "https://lh3.googleusercontent.com/a-/ACB-R5QIM5OQts2XIdm_dGCkhRcUimnhPttIMaQyALE1=w36-h36-p-c0x00000000-rp-mo-br100",
  },
  
  {
    name: "Gislandi Silva",
    text: "O trabalho deles é muito bom!!!",
    image:
      "https://lh3.googleusercontent.com/a/AGNmyxYo7GubIAITePDXQOLNAPif_Om3yt6y4M3DwYcR=w36-h36-p-c0x00000000-rp-mo-br100",
  },
];

const Stars = () => {
  return (
    <div>
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  );
};

export default function Reviews() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="reviewsSwiper"
      >
        {testemonials.map((t) => {
          return (
            <SwiperSlide key={t.name} className="reviewsSwiper-slide">
              <div style={{ textAlign: "center", padding: "50px" }}>
                <Image style={{ margin: "0 auto" }} src={t.image} alt={t.name} width={36} height={36} />
                <h3 style={{ paddingTop: "30px" }}>{t.name}</h3>
                <Stars />
                <p>&quot;{t.text}&quot;</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
