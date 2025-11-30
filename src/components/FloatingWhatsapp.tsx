"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWpp = () => {
  const whatsRef = React.useRef<HTMLDivElement>(null);

  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

  React.useEffect(() => {
    setTimeout(() => {
      if (whatsRef.current) {
        const button = whatsRef.current.querySelector(
          ".floating-whatsapp-button"
        ) as HTMLButtonElement;
        if (button) button.click();
      }
    }, 1000); // delay opcional
  }, []);

  const handleWhatsClick = (action: any) => {
    if (typeof fbq !== "undefined") {
      fbq("track", action);
    }
  };

  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 999,
        }}
      >
        {/* Balão de mensagem */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            color: "#333",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
          }}
        >
          Vamos fazer seu orçamento?
        </div>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5569993695702?text=Olá!%20Quero%20realizar%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsClick("ClicouWhatsApp")}
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={32}
            height={32}
          />
        </a>
      </div>
    );
  } else {
    return (
      <FloatingWhatsApp
        phoneNumber="+5569993695702"
        accountName="Atendimento D | Walt"
        placeholder="Olá! Preciso de um orçamento de 500kW"
        chatMessage="Vamos realizar seu orçamento agora mesmo?"
        statusMessage="Geralmente responde em 5 minutos"
        onClick={() => {
          handleWhatsClick("ClicouWhatsApp");
        }}
        onSubmit={() => {
          handleWhatsClick("EnviouWhatsApp");
        }}
        avatar="https://firebasestorage.googleapis.com/v0/b/banco-geral-412b6.appspot.com/o/popup.png?alt=media&token=d684ed46-a3cb-4c6e-a496-1ed47955d27f"
        buttonStyle={{
          width: isMobile ? 48 : 60,
          height: isMobile ? 48 : 60,
        }}
        chatboxHeight={isMobile ? 260 : 320}
      />
    );
  }
};

export default FloatingWpp;
