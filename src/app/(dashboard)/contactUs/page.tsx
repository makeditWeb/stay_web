"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ContactUsPage() {
  return (
    <ContactUsContainer>
      <div style={{ textAlign: "center", fontSize: "50px", fontWeight: "700" }}>
        Contact Us
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          fontWeight: "300",
          margin: "20px 0 20px 0",
        }}
      >
        찾아오시는 길
      </div>
      <div style={{ width: "800px", height: "530px" }}>
        <Image
          src="/contactUsMapImg.png"
          alt="찾아오는길"
          width={800}
          height={530}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
          margin: "50px 0 50px 0",
        }}
      >
        STAY INTERVIEW
      </div>
      <div
        style={{
          width: "800px",
          height: "150px",
          background: "#ffffff",
          borderRadius: "15px",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "390px",
            height: "40px",
            margin: "auto",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "22px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            E-mail
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            stay_interview@naver.com
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "390px",
            height: "40px",
            margin: "5px auto 5px auto",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "22px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            TEL
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            010-6836-4678
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "390px",
            height: "40px",
            margin: "auto",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "22px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            Address
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            대전 광역시 유성구 대덕대로 606
          </div>
        </div>
      </div>
    </ContactUsContainer>
  );
}

const ContactUsContainer = styled.div`
  width: 800px;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 150px;
`;
