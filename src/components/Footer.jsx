import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <img src="/stayinterviewIcon.png" alt="사이트 아이콘" />
        <div>(주) 인터뷰</div>
        <div>
          <div>
            <div>대표자</div>
            <div>주소</div>
            <div>이메일</div>
            <div>파트너 상담문의</div>
            <div>사업자 등록번호</div>
          </div>
          <div>
            <div>권순창</div>
            <div>대전광역시 서구 계룡로 199, 501호(월평동)</div>
            <div>stay_interview@naver.com</div>
            <div>010-6836-4678</div>
            <div>383-81-01897</div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 283px;
`;
