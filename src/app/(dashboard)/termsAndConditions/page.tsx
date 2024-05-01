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
    <section className="max-w-[1200px] mx-auto w-full md:py-[150px] py-24 ">
      <div className="text-center text-[50px] font-bold mb-[50px]">
        Terms and conditions
      </div>
      <div className="flex flex-col gap-10 md:gap-0">
        <div className="flex flex-col gap-4 md:gap-2 md:flex-row ">
          <TabBtn
            active={activeTab === 1}
            className="transition-all duration-300 hover:bg-[#203D1E] md:w-[280px] h-[46px] md:round-t-xl md:rounded-b-none rounded-xl w-full hover:bg-opacity-80 hover:text-white"
            onClick={() => handleTabClick(1, "TERMS_OF_USE")}
          >
            이용약관
          </TabBtn>
          <TabBtn
            active={activeTab === 2}
            className="transition-all duration-300 hover:bg-[#203D1E] md:w-[280px] h-[46px] md:round-t-xl md:rounded-b-none rounded-xl w-full hover:bg-opacity-80 hover:text-white"
            onClick={() => handleTabClick(2, "TERMS_PERSONAL_INFO")}
          >
            개인정보처리방침
          </TabBtn>
          <TabBtn
            active={activeTab === 3}
            className="transition-all duration-300 hover:bg-[#203D1E] md:w-[280px] h-[46px] md:round-t-xl md:rounded-b-none rounded-xl w-full hover:bg-opacity-80 hover:text-white"
            onClick={() => handleTabClick(3, "MARKETING")}
          >
            마케팅 수신 정보 동의
          </TabBtn>
        </div>
        <div className="max-w-[1200px] h-full w-full bg-white rounded-xl md:rounded-none">
          <TermsAndConditionsTabContents
            tabNumber={activeTab}
            subCategory={subCategory}
          />
        </div>
      </div>
    </section>
  );
}

interface TabBtnProps {
  active: boolean;
}

const TabBtn = styled.div<TabBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? "#203D1E" : "#ffffff")};
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "#ffffff" : "#C3C3C3")};
  cursor: pointer;
`;
