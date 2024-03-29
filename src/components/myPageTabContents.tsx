import React, { useState } from "react";
import styled from "styled-components";

const MyPageTabContents = ({ tabNumber }) => {
  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isMarketingCollection, setIsMarketingCollection] = useState(false);

  const marketingCollectionHandler = () => {
    setIsMarketingCollection(!isMarketingCollection);
  };

  // 연락처 글자 제한, 자동 (-)
  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    if (inputPhoneNumber.length > 11) {
      inputPhoneNumber = inputPhoneNumber.slice(0, 11); // 11자 이상 입력 방지
    }
    // 하이픈(-) 삽입
    if (inputPhoneNumber.length > 3 && inputPhoneNumber.length < 8) {
      inputPhoneNumber = inputPhoneNumber.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    } else if (inputPhoneNumber.length >= 8) {
      inputPhoneNumber = inputPhoneNumber.replace(
        /(\d{3})(\d{4})(\d{1,4})/,
        "$1-$2-$3"
      );
    }
    setPhoneNumber(inputPhoneNumber);
  };

  if (tabNumber === 1) {
    return (
      <TabContainer>
        <div>
          <div style={{ fontSize: "25px", fontWeight: "700" }}>
            스테이인터뷰, 영동 (ㄱ)
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>80,000 원</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "88px",
                height: "22px",
                border: "1px solid #203d1e",
                color: "#203d1e",
                borderRadius: "4px",
              }}
            >
              예약 취소
            </div>
          </div>
          <ContentContainer style={{ marginTop: "30px" }}>
            <ContentName>예약번호</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              0000634721
            </div>
          </ContentContainer>
          <ContentContainer style={{ marginTop: "15px" }}>
            <ContentName>이용기간</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-02-29 ~ 2024-03-01
            </div>
          </ContentContainer>
          <ContentContainer style={{ marginTop: "15px" }}>
            <ContentName>예약일시</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-02-29 15:54
            </div>
          </ContentContainer>
        </div>
      </TabContainer>
    );
  } else if (tabNumber === 2) {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "165px",
            height: "100px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#162318",
          }}
        >
          회원 정보
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
            background: "#ffffff",
            borderRadius: "15px",
            padding: "30px 0 30px 0",
          }}
        >
          <div>
            <InformationInputContainer>
              <InformationText>이름</InformationText>
              <InformationInputDiv>
                <InformationInput placeholder="이름" />
              </InformationInputDiv>
            </InformationInputContainer>
            <InformationInputContainer>
              <InformationText>생년월일</InformationText>
              <div style={{ display: "flex", gap: "6px" }}>
                <SelectBox
                  style={{
                    width: "320px",
                  }}
                >
                  <option value="년도">년도</option>
                  <option value="2024">2024년</option>
                  <option value="2023">2023년</option>
                  <option value="2022">2022년</option>
                </SelectBox>
                <SelectBox
                  style={{
                    width: "320px",
                  }}
                >
                  <option value="월">월</option>
                  <option value="2024">2024년</option>
                  <option value="2023">2023년</option>
                  <option value="2022">2022년</option>
                </SelectBox>
                <SelectBox
                  style={{
                    width: "320px",
                  }}
                >
                  <option value="일">일</option>
                  <option value="2024">2024년</option>
                  <option value="2023">2023년</option>
                  <option value="2022">2022년</option>
                </SelectBox>
              </div>
            </InformationInputContainer>
            <InformationInputContainer>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "550px",
                }}
              >
                <InformationText>거주지</InformationText>
                <div style={{ display: "flex", gap: "6px" }}>
                  <SelectBox>
                    <option value="시 / 도 선택">시 / 도 선택</option>
                    <option value="서울시">서울시</option>
                    <option value="인천광역시">인천광역시</option>
                  </SelectBox>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "550px",
                  alignItems: "center",
                  marginLeft: "40px",
                }}
              >
                <InformationText>성별</InformationText>
                <div style={{ display: "flex", gap: "6px" }}>
                  <SelectBox>
                    <option value="성별">성별</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                  </SelectBox>
                </div>
              </div>
            </InformationInputContainer>
            <InformationInputContainer>
              <InformationText>연락처</InformationText>
              <InformationInputDiv>
                <InformationInput
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  type="text"
                  placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요)"
                />
              </InformationInputDiv>
            </InformationInputContainer>
            <InformationInputContainer>
              <InformationText>이메일</InformationText>
              <InformationInputDiv>
                <InformationInput placeholder="이메일" />
              </InformationInputDiv>
            </InformationInputContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "1060px",
                margin: "30px 0 30px 250px",
                fontSize: "16px",
                fontWeight: "500",
                gap: "20px",
              }}
            >
              <CheckBox
                type="checkbox"
                id="ckbox"
                checked={isMarketingCollection}
                onChange={marketingCollectionHandler}
              ></CheckBox>
              <CheckBoxLabel htmlFor="ckbox"></CheckBoxLabel>
              마케팅 정보 수집 동의
            </div>
            <InformationInputContainer>
              <InformationText>비밀번호</InformationText>
              <InformationInputDiv>
                <InformationInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </InformationInputDiv>
            </InformationInputContainer>
            <ChangeInformation>회원정보 변경하기</ChangeInformation>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "100px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#162318",
          }}
        >
          비밀번호 변경
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
            background: "#ffffff",
            borderRadius: "15px",
            padding: "30px 0 30px 0",
          }}
        >
          <div>
            <InformationInputContainer>
              <InformationInputDiv style={{ width: "1120px" }}>
                <InformationInput
                  type="password"
                  style={{ width: "1000px" }}
                  placeholder="현재 비밀번호를 입력해주세요."
                />
              </InformationInputDiv>
            </InformationInputContainer>
            <InformationInputContainer>
              <InformationInputDiv style={{ width: "1120px" }}>
                <InformationInput
                  type="password"
                  style={{ width: "1000px" }}
                  placeholder="새 비밀번호를 입력해주세요."
                />
              </InformationInputDiv>
            </InformationInputContainer>
            <InformationInputContainer>
              <InformationInputDiv style={{ width: "1120px" }}>
                <InformationInput
                  type="password"
                  style={{ width: "1000px" }}
                  placeholder="새 비밀번호를 한번 더 입력해주세요."
                />
              </InformationInputDiv>
            </InformationInputContainer>
            <ChangeInformation>비밀번호 변경하기</ChangeInformation>
          </div>
          <div></div>
        </div>
        <ChangeInformation
          style={{ width: "1200px", marginTop: "40px", background: "#C2BFB3" }}
        >
          회원탈퇴
        </ChangeInformation>
      </>
    );
  } else {
    return null;
  }
};

export default MyPageTabContents;

const TabContainer = styled.div`
  width: 1200px;
  border-radius: 15px;
  background: #ffffff;
  padding: 50px 0 50px 50px;
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

// 회원 정보 수정
const PaymentContainer = styled.div`
  width: 1200px;
  margin: auto;
`;

const InformationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 60px;
  margin: auto;
  margin-bottom: 10px;
`;

const InformationText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 24px;
  background: #203d1e;
  color: #ffffff;
  border-radius: 4px;
  margin-right: 50px;
`;

const InformationInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 50px;
  border: 1px solid #203d1e;
  border-radius: 15px;
`;

const InformationInput = styled.input`
  width: 940px;
  height: 40px;
  border: none;
  border-radius: 15px;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #c8cdc6;
  }

  &:focus {
    outline: none;
  }
`;

const SelectBox = styled.select`
  width: 400px;
  height: 52px;
  border: 1px solid #203d1e;
  border-radius: 15px;
  padding-left: 10px;
  color: #c8cdc6;
`;

const CheckBox = styled.input`
  display: none;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
`;

const CheckBoxLabel = styled.label`
  width: 23px;
  height: 23px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    width: 10px;
    height: 14px;
    background-color: transparent;
    border: 4px solid white;
    border-left: none;
    border-top: none;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }

  ${CheckBox}:checked + &::after {
    opacity: 1;
    border-color: #d9d9d9;
  }
`;

const RequestedTermInput = styled.input`
  width: 1100px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 300;
  border: none;

  &:focus {
    outline: none;
  }
`;

const ChangeInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1120px;
  height: 78px;
  margin: auto;
  margin-top: 30px;
  background: #203d1e;
  border-radius: 15px;
  font-size: 25px;
  font-weight: 600;
  color: #ffffff;
`;
