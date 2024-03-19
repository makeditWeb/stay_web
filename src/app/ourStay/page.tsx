"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import OurStayTabContents from "@/components/ourStayTabContents";

export default function OurStayPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <OurStayContainer>
      <div style={{ position: "relative", width: "100vw", height: "750px" }}>
        <Image
          src="/ourStayImg.png"
          alt="대표 이미지"
          style={{ width: "100vw", height: "750px" }}
          width={1920}
          height={750}
        />
        <div
          style={{
            width: "500px",
            height: "320px",
            position: "absolute",
            left: "42%",
            top: "225px",
            borderRadius: "15px",
            color: "#ffffff",
            background: "rgba(40, 19, 10, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "16px",
              fontWeight: "300",
              marginTop: "50px",
            }}
          >
            일상으로 부터의 피신처
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "35px",
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            스테이인터뷰, 태안
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "30px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            고요하고 편안함을 주는 풍광속의 스테이인터뷰 태안.
            <br />그 분위기 속에서 쉼의 마침표를 찍어보자.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "32px",
              fontSize: "15px",
              fontWeight: "700",
              border: "1px solid #ffffff",
              borderRadius: "15px",
              margin: "auto",
            }}
          >
            둘러보기 →
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1200px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#203D1E",
          }}
        >
          OUR STAY
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <TabBtn active={activeTab === 1} onClick={() => handleTabClick(1)}>
            전체
          </TabBtn>
          <TabBtn active={activeTab === 2} onClick={() => handleTabClick(2)}>
            객실
          </TabBtn>
          <TabBtn active={activeTab === 3} onClick={() => handleTabClick(3)}>
            방갈로
          </TabBtn>
          <TabBtn active={activeTab === 4} onClick={() => handleTabClick(4)}>
            카라반
          </TabBtn>
          <TabBtn active={activeTab === 5} onClick={() => handleTabClick(5)}>
            글램핑
          </TabBtn>
          <TabBtn active={activeTab === 6} onClick={() => handleTabClick(6)}>
            풀카바나
          </TabBtn>
        </div>
      </div>
      <div
        style={{
          width: "1200px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <HotelListContainer>
          <OurStayTabContents tabNumber={activeTab} />
        </HotelListContainer>
      </div>
    </OurStayContainer>
  );
}

const OurStayContainer = styled.div`
  // width: 1920px;
`;

const HotelListContainer = styled.div`
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;

const HotelContainer = styled.div`
  width: 370px;
  height: 350px;
  border: 1px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

const HotelContents = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
  justify-content: space-between;
`;

const DetailPostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 70px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 300;
  color: #000000;
  cursor: pointer;
`;

interface TabBtnProps {
  active: boolean;
}

const TabBtn = styled.div<TabBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 40px;
  background: ${(props) => (props.active ? "#203D1E" : "none")};
  border-radius: 30px;
  color: ${(props) => (props.active ? "#ffffff" : "#203d1e")};
  cursor: pointer;
`;
