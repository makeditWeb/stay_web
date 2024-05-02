"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import MyPageTabContents from "@/components/myPageTabContents";

export default function MyPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

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
      <div className="lg:w-[540px] flex gap-2 lg:gap-5 mb-[30px] mx-auto">
        <TabBtn active={activeTab === 1} onClick={() => handleTabClick(1)}>
          예약정보
        </TabBtn>
        <TabBtn active={activeTab === 2} onClick={() => handleTabClick(2)}>
          회원정보 수정
        </TabBtn>
      </div>
      <MyPageTabContents tabNumber={activeTab} />
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;

  padding: 150px 20px 100px 20px;
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

interface TabBtnProps {
  active: boolean;
}

const TabBtn = styled.div<TabBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 46px;
  border-radius: 15px;
  background: ${(props) => (props.active ? "#203D1E" : "#ffffff")};
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "#ffffff" : "#C3C3C3")};
  cursor: pointer;
`;
