"use client";
import React, { useState } from "react";
import styled from "styled-components";
import PoliciesTabContents from "@/components/policiesTabContents";

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [subCategory, setSubCategory] = useState("REFUND_POLICY");

  const handleTabClick = (tabIndex: number, subCategory: string) => {
    setActiveTab(tabIndex);
    setSubCategory(subCategory);
  };

  return (
    <PoliciesContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        Policies
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <TabBtn
            active={activeTab === 1}
            onClick={() => handleTabClick(1, "REFUND_POLICY")}
          >
            환불정책
          </TabBtn>
          <TabBtn
            active={activeTab === 2}
            onClick={() => handleTabClick(2, "YOUTH_PROTECTION_POLICY")}
          >
            청소년 보호정책
          </TabBtn>
          <TabBtn
            active={activeTab === 3}
            onClick={() => handleTabClick(3, "OHHER_LAWS")}
          >
            그 외 법률
          </TabBtn>
          <div></div>
        </div>
        <div
          style={{
            width: "1200px",
            height: "1000px",
            background: "#ffffff",
            borderRadius: "0 0 15px 15px",
          }}
        >
          <PoliciesTabContents
            tabNumber={activeTab}
            subCategory={subCategory}
          />
        </div>
      </div>
    </PoliciesContainer>
  );
}

const PoliciesContainer = styled.div`
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
