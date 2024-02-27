import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDiv>
        <div>
          <div>
            <img
              src="/stayinterviewIcon.png"
              alt="사이트 아이콘"
              style={{ width: "50px", height: "50px" }}
            />
            <BoldLetter style={{ margin: "10px 0 15px 0" }}>
              (주) 인터뷰
            </BoldLetter>
          </div>
          <div style={{ display: "flex" }}>
            <FooterLeftDiv>
              <SmallBoldLetter>대표자</SmallBoldLetter>
              <SmallBoldLetter>주소</SmallBoldLetter>
              <SmallBoldLetter>이메일</SmallBoldLetter>
              <SmallBoldLetter>파트너 상담문의</SmallBoldLetter>
              <SmallBoldLetter>사업자 등록번호</SmallBoldLetter>
            </FooterLeftDiv>
            <FooterLeftDiv style={{ marginLeft: " 25px" }}>
              <ThinLetter>권순창</ThinLetter>
              <ThinLetter>대전광역시 서구 계룡로 199, 501호(월평동)</ThinLetter>
              <ThinLetter>stay_interview@naver.com</ThinLetter>
              <ThinLetter>010-6836-4678</ThinLetter>
              <ThinLetter>383-81-01897</ThinLetter>
            </FooterLeftDiv>
          </div>
        </div>
        <FooterRightDiv>
          <BoldLetter>CONTANT US</BoldLetter>
          <BoldLetter>TEAMS AND CONDITION</BoldLetter>
          <BoldLetter>PRIVACY POLICY</BoldLetter>
        </FooterRightDiv>
      </FooterDiv>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 283px;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FooterLeftDiv = styled.div``;

const FooterRightDiv = styled.div`
  margin-left: 600px;
`;

const BoldLetter = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 25px;
`;

const SmallBoldLetter = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
`;

const ThinLetter = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #ffffff;
`;
