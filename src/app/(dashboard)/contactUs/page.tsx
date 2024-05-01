"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ContactUsPage() {
  return (
    <ContactUsContainer>
      <div style={{ textAlign: "center", fontSize: "50px", fontWeight: "700" }}>
        Contact Us
      </div>
      <Subtitle>찾아오시는 길</Subtitle>
      <ImageContainer>
        <Image
          src="/contactUsMapImg.png"
          alt="찾아오는길"
          width={800}
          height={530}
          className="object-cover"
        />
      </ImageContainer>
      <TitleSub>STAY INTERVIEW</TitleSub>

      <ContactInfoContainer>
        <ContactItem>
          <Label>E-mail</Label>
          <div>stay_interview@naver.com</div>
        </ContactItem>
        <ContactItem>
          <Label>TEL</Label>
          <div>010-6836-4678</div>
        </ContactItem>
        <ContactItem>
          <Label>Address</Label>
          <div>대전 광역시 유성구 대덕대로 606</div>
        </ContactItem>
      </ContactInfoContainer>
    </ContactUsContainer>
  );
}

const ContactUsContainer = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 150px 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
`;
const TitleSub = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #162318;
  margin: 50px 0;
`;
const Subtitle = styled.div`
  text-align: center;
  font-size: 19px;
  font-weight: 300;
  margin: 20px 0;
`;
const ContactInfoContainer = styled.div`
  width: 100%;

  margin: auto;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
`;

const ContactItem = styled.div`
display: flex;
align-items: center;
width: 100%;
max-width: 390px;
height: 40px;
gap: 20px;

@media screen and (max-width: 767px) {
  gap: 10px; 

}

  .contact-label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 22px;
    background: #203d1e;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  
 
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 22px;
  background: #203d1e;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

const Value = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
