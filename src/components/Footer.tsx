import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content_container">
        <div className="footer_content_1">
          <div>
            <img
              src="/stayinterviewIcon.png"
              alt="사이트 아이콘"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="bold_letter" style={{ margin: "10px 0 15px 0" }}>
              (주) 인터뷰
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <div className="small_bold_letter">대표자</div>
              <div className="small_bold_letter">주소</div>
              <div className="small_bold_letter">이메일</div>
              <div className="small_bold_letter">파트너 상담문의</div>
              <div className="small_bold_letter">사업자 등록번호</div>
            </div>
            <div style={{ marginLeft: " 25px" }}>
              <div className="thine_letter">권순창</div>
              <div className="thine_letter">
                대전광역시 서구 계룡로 199, 501호(월평동)
              </div>
              <div className="thine_letter">stay_interview@naver.com</div>
              <div className="thine_letter">010-6836-4678</div>
              <div className="thine_letter">383-81-01897</div>
            </div>
          </div>
        </div>
        <div className="footer_content_2">
          <Link
            href={{ pathname: "/contactUs" }}
            style={{ textDecoration: "none" }}
          >
            <div className="footer_title">CONTACT US</div>
          </Link>
          <Link
            href={{ pathname: "/termsAndConditions" }}
            style={{ textDecoration: "none" }}
          >
            <div className="footer_title">TEAMS AND CONDITION</div>
          </Link>
          <Link
            href={{ pathname: "/policies" }}
            style={{ textDecoration: "none" }}
          >
            <div className="footer_title">PRIVACY POLICY</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
