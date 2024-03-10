"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function TermsAndConditionsPage() {
  const [activeTab, setActiveTab] = useState(1);

  const tabClickHander = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <TermsAndConditionsContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        Terms and conditions
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <TabBtn>이용약관</TabBtn>
          <TabBtn>개인정보처리방침</TabBtn>
          <TabBtn>마케팅 수신 정보 동의</TabBtn>
          <div></div>
        </div>
        <div
          style={{ width: "1200px", height: "1000px", background: "#ffffff" }}
        ></div>
      </div>
    </TermsAndConditionsContainer>
  );
}

const TermsAndConditionsContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 150px;
`;

const TabBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 46px;
  border-radius: 15px 15px 0 0;
  background: ${(props) => (props.active ? "#ffffff" : "#c3c3c3")};
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => (props.active ? "#c3c3c3" : "#ffffff")};
  cursor: pointer;
`;
