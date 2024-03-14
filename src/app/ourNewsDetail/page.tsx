"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function OurNewsDetailpage() {
  return (
    <OurNewsDetailContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NewsName>홈프레치라운지(Voorpret Lounge) 오픈</NewsName>
        <NewsDay>2023-01-11</NewsDay>
      </div>
      <NewsContents>
        <div style={{ width: "940px", height: "450px", margin: "auto" }}>
          <Image
            src="/ourNewsDetailImg.png"
            alt="뉴스 이미지"
            width={940}
            height={450}
          />
        </div>
        <div
          style={{
            fontSize: "19px",
            color: "#162318",
            textAlign: "center",
            margin: "30px 0 50px 0",
          }}
        >
          • ABOUT VOORPRET •
        </div>
      </NewsContents>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <NewsBtn>&lt; Prev</NewsBtn>
        <NewsBtn>LIST</NewsBtn>
        <NewsBtn>Next &gt;</NewsBtn>
      </div>
    </OurNewsDetailContainer>
  );
}

const OurNewsDetailContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 150px;
`;

const NewsName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  color: #162318;
`;

const NewsDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: 300;
  color: #162318;
`;

const NewsContents = styled.div`
  width: 1200px;
  height: 1000px;
  background: #ffffff;
  border-radius: 15px;
  padding-top: 30px;
  margin-bottom: 30px;
`;

const NewsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid;
  cursor: pointer;
`;
