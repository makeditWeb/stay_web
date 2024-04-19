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
    <div className="container_our_stay">
      <div className="div_header_our_stay">
        <img
          src="/ourStayImg.png"
          alt="대표 이미지"
          className="img_header_our_stay"
        />
        <div className="container_header_our_stay">
          <div className="title_header_top_our_stay">
            일상으로 부터의 피신처
          </div>
          <div className="title_header_mid_our_stay">스테이인터뷰, 태안</div>
          <div className="title_header_bot_our_stay">
            고요하고 편안함을 주는 풍광속의 스테이인터뷰 태안.
            <br />그 분위기 속에서 쉼의 마침표를 찍어보자.
          </div>
          <div className="btn_header_our_stay">둘러보기 →</div>
        </div>
      </div>
      <div className="container_content_our_stay">
        <div className="title_content_our_stay">OUR STAY</div>
        <div className="tab_content_our_stay">
          <div
            className={
              activeTab == 1 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(1)}
          >
            전체
          </div>
          <div
            className={
              activeTab == 2 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(2)}
          >
            객실
          </div>
          <div
            className={
              activeTab == 3 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(3)}
          >
            방갈로
          </div>
          <div
            className={
              activeTab == 4 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(4)}
          >
            카라반
          </div>
          <div
            className={
              activeTab == 5 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(5)}
          >
            글램핑
          </div>
          <div
            className={
              activeTab == 6 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => handleTabClick(6)}
          >
            풀카바나
          </div>
        </div>
      </div>
      <div className="div_content_our_stay">
        <div className="list_our_stay">
          <OurStayTabContents tabNumber={activeTab} />
        </div>
      </div>
    </div>
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
