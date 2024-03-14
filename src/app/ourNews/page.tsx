"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function OurNewsPage() {
  return (
    <OurNewsContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        Our News
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          fontWeight: "300",
          color: "#162318",
          margin: "30px 0 30px 0",
        }}
      >
        스테이인터뷰 소식을 전해드립니다.
      </div>
      <NewsContents>
        <div
          style={{
            width: "280px",
            height: "155px",
            marginLeft: "30px",
            marginRight: "50px",
          }}
        >
          <Image src="/ourNewsImg1.png" alt="뉴스1" width={280} height={155} />
        </div>
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#162318",
              marginBottom: "15px",
            }}
          >
            2023-01-11
          </div>
          <div
            style={{ fontSize: "19px", fontWeight: "500", color: "#162318" }}
          >
            홀프레치라운지(Voorpret Lounge) 오픈
          </div>
        </div>
      </NewsContents>
      <NewsContents>
        <div
          style={{
            width: "280px",
            height: "155px",
            marginLeft: "30px",
            marginRight: "50px",
          }}
        >
          <Image src="/ourNewsImg2.png" alt="뉴스2" width={280} height={155} />
        </div>
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#162318",
              marginBottom: "15px",
            }}
          >
            2023-01-05
          </div>
          <div
            style={{ fontSize: "19px", fontWeight: "500", color: "#162318" }}
          >
            골프 스테이인터뷰(GSI) 오픈
          </div>
        </div>
      </NewsContents>
      <NewsContents>
        <div
          style={{
            width: "280px",
            height: "155px",
            marginLeft: "30px",
            marginRight: "50px",
          }}
        >
          <Image src="/ourNewsImg3.png" alt="뉴스3" width={280} height={155} />
        </div>
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#162318",
              marginBottom: "15px",
            }}
          >
            2022-05-23
          </div>
          <div
            style={{ fontSize: "19px", fontWeight: "500", color: "#162318" }}
          >
            2022년 5월 23일, 스테이인터뷰가 새롭게 출발합니다.
          </div>
        </div>
      </NewsContents>
      <NewsContents>
        <div
          style={{
            width: "280px",
            height: "155px",
            marginLeft: "30px",
            marginRight: "50px",
          }}
        >
          <Image src="/ourNewsImg4.png" alt="뉴스4" width={280} height={155} />
        </div>
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#162318",
              marginBottom: "15px",
            }}
          >
            2022-01-07
          </div>
          <div
            style={{ fontSize: "19px", fontWeight: "500", color: "#162318" }}
          >
            룸스프레이 체험 프로모션 &lt;스테이인터뷰 영동, 장태산, 공주&gt;
          </div>
        </div>
      </NewsContents>
    </OurNewsContainer>
  );
}

const OurNewsContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const NewsContents = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 220px;
  background: #ffffff;
  border-radius: 15px;
  margin-bottom: 20px;
`;
