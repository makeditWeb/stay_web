"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function MyPage() {
  return (
    <MyPageContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        My Page
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          color: "#162318",
          marginBottom: "30px",
        }}
      >
        Username 님 반갑습니다!
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "auto",
          width: "540px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "260px",
            height: "46px",
            borderRadius: "15px",
            background: "#203d1e",
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "800",
          }}
        >
          예약정보
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "260px",
            height: "46px",
            borderRadius: "15px",
            background: "#ffffff",
            border: "1px solid #f2f2f2",
            color: "#c3c3c3",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          회원정보 수정
        </div>
      </div>
      <div
        style={{
          width: "1200px",
          height: "200px",
          borderRadius: "15px",
          background: "#ffffff",
          padding: "50px 0 50px 50px",
        }}
      >
        <div style={{ fontSize: "25px", fontWeight: "700" }}>
          스테이인터뷰, 영동 (ㄱ)
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>80,000 원</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "88px",
              height: "22px",
              border: "1px solid #203d1e",
              color: "#203d1e",
              borderRadius: "4px",
            }}
          >
            예약 취소
          </div>
        </div>
        <ContentContainer style={{ marginTop: "30px" }}>
          <ContentName>예약번호</ContentName>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>0000634721</div>
        </ContentContainer>
        <ContentContainer style={{ marginTop: "15px" }}>
          <ContentName>이용기간</ContentName>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            2024-02-29 ~ 2024-03-01
          </div>
        </ContentContainer>
        <ContentContainer style={{ marginTop: "15px" }}>
          <ContentName>예약일시</ContentName>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            2024-02-29 15:54
          </div>
        </ContentContainer>
      </div>
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  gap: 20px;
`;

const ContentName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 22px;
  font-size: 16px;
  background: #203d1e;
  border-radius: 4px;
  font-weight: 400;
  color: #ffffff;
`;
