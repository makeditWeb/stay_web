"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import TermsAndConditionsTabContents from "@/components/termsAndConditionsTabContents";

export default function TermsAndConditionsPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [subCategory, setSubCategory] = useState("TERMS_OF_USE");

  const handleTabClick = (tabIndex: number, subCategory: string) => {
    setActiveTab(tabIndex);
    setSubCategory(subCategory);
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
          <TabBtn
            active={activeTab === 1}
            onClick={() => handleTabClick(1, "TERMS_OF_USE")}
          >
            이용약관
          </TabBtn>
          <TabBtn
            active={activeTab === 2}
            onClick={() => handleTabClick(2, "TERMS_PERSONAL_INFO")}
          >
            개인정보처리방침
          </TabBtn>
          <TabBtn
            active={activeTab === 3}
            onClick={() => handleTabClick(3, "MARKETING")}
          >
            마케팅 수신 정보 동의
          </TabBtn>
        </div>
        <div
          style={{
            width: "1200px",
            height: "1000px",
            background: "#ffffff",
            borderRadius: "0 0 15px 15px",
          }}
        >
          <TermsAndConditionsTabContents
            tabNumber={activeTab}
            subCategory={subCategory}
          />
        </div>
      </div>
    </TermsAndConditionsContainer>
  );
}

const TermsAndConditionsContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 150px;
  padding-bottom: 150px;
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
  border-radius: 15px 15px 0 0;
  background: ${(props) => (props.active ? "#203D1E" : "#ffffff")};
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "#ffffff" : "#C3C3C3")};
  cursor: pointer;
`;
