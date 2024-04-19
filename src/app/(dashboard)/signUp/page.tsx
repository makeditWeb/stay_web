"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function SignUpPage() {
  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

  const [termsOfUse, setTermsOfUse] = useState("/topVector.png");
  const [collectionInformation, setCollectionInformation] =
    useState("/topVector.png");
  const [ageCheck, setAgeCheck] = useState("/topVector.png");
  const [receivingInformation, setReceivingInformation] =
    useState("/topVector.png");

  const [termsOfUseToggle, setTermsOfUseToggle] = useState(false);
  const [collectionInformationToggle, setCollectionInformationToggle] =
    useState(false);
  const [ageCheckToggle, setAgeCheckToggle] = useState(false);
  const [receivingInformationToggle, setReceivingInformationToggle] =
    useState(false);

  // 체크박스
  const [isChecked, setIsChecked] = useState(false);
  const [isTermsOfUseChecked, setIsTermsOfUseChecked] = useState(false);
  const [isCollectionChecked, setIsCollectionChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isReceivingChecked, setIsReceivingChecked] = useState(false);

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    setIsTermsOfUseChecked(checked);
    setIsCollectionChecked(checked);
    setIsAgeChecked(checked);
    setIsReceivingChecked(checked);
  };

  const termsOfUseCheckedHandler = () => {
    setIsTermsOfUseChecked(!isTermsOfUseChecked);
    setIsChecked(false);
  };

  const collectionCheckedHandler = () => {
    setIsCollectionChecked(!isCollectionChecked);
    setIsChecked(false);
  };

  const ageCheckedHandler = () => {
    setIsAgeChecked(!isAgeChecked);
    setIsChecked(false);
  };

  const receivingCheckedHandler = () => {
    setIsReceivingChecked(!isReceivingChecked);
    setIsChecked(false);
  };

  // const handleSelectAllChange = () => {
  //   setIsChecked(!isChecked);
  // };

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

  const termsOfUseHandler = () => {
    setTermsOfUse(
      termsOfUse === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setTermsOfUseToggle(!termsOfUseToggle);
  };

  const collectionHandler = () => {
    setCollectionInformation(
      collectionInformation === "/topVector.png"
        ? "/bottomVector.png"
        : "/topVector.png"
    );

    setCollectionInformationToggle(!collectionInformationToggle);
  };

  const ageCheckHandler = () => {
    setAgeCheck(
      ageCheck === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );

    setAgeCheckToggle(!ageCheckToggle);
  };

  const receivingHandler = () => {
    setReceivingInformation(
      receivingInformation === "/topVector.png"
        ? "/bottomVector.png"
        : "/topVector.png"
    );
    setReceivingInformationToggle(!receivingInformationToggle);
  };

  return (
    <SignUpContainer>
      <SignUpTextContainer>
        <div>
          <SignUpText>Sign Up</SignUpText>
          <SignUpWords>스테이인터뷰의 회원이 되어주세요.</SignUpWords>
        </div>
      </SignUpTextContainer>
      <InformationContainer>
        <div
          style={{
            height: "390px",
          }}
        >
          <InformationInputContainer>
            <InformationText>이름</InformationText>
            <InformationInputDiv>
              <InformationInput placeholder="이름을 입력해주세요." />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>이메일</InformationText>
            <InformationInputDiv>
              <InformationInput placeholder="이메일을 입력해주세요." />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>비밀번호</InformationText>
            <InformationInputDiv>
              <InformationInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText style={{ background: "none" }}></InformationText>
            <InformationInputDiv>
              <InformationInput
                type="password"
                placeholder="비밀번호 확인을 위해 재입력해주세요."
              />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>연락처</InformationText>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InformationInputDiv style={{ width: "800px" }}>
                <InformationInput
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  style={{ width: "770px" }}
                  placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요. )"
                />
              </InformationInputDiv>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "150px",
                  height: "50px",
                  background: "#203d1e",
                  borderRadius: "15px",
                  color: "#ffffff",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                인증번호 받기
              </div>
            </div>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText style={{ background: "none" }}></InformationText>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InformationInputDiv style={{ width: "800px" }}>
                <InformationInput
                  style={{ width: "770px" }}
                  placeholder="인증번호를 입력해주세요."
                />
              </InformationInputDiv>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "150px",
                  height: "50px",
                  background: "#9bac9a",
                  borderRadius: "15px",
                  color: "#ffffff",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                인증하기
              </div>
            </div>
          </InformationInputContainer>
        </div>
      </InformationContainer>
      <div>
        <div
          style={{
            height: "50px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#162318",
          }}
        >
          사용자 이용약관
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
            height: "100%",
            borderRadius: "15px",
            background: "#ffffff",
          }}
        >
          <div style={{ height: "100%", padding: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "1060px",
                margin: " auto",
                fontSize: "20px",
                fontWeight: "500",
                gap: "20px",
              }}
            >
              <CheckBox
                type="checkbox"
                id="ckbox"
                checked={isChecked}
                onChange={handleSelectAllChange}
              ></CheckBox>
              <CheckBoxLabel htmlFor="ckbox"></CheckBoxLabel>
              전체동의
            </div>
            <div
              style={{
                width: "1060px",
                border: "1px solid #d9d9d9",
                marginTop: "20px",
              }}
            ></div>
            <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  type="checkbox"
                  id="ckbox1"
                  checked={isTermsOfUseChecked}
                  onChange={termsOfUseCheckedHandler}
                ></CheckBox>
                <CheckBoxLabel htmlFor="ckbox1"></CheckBoxLabel>
                <div style={{ marginLeft: "20px", width: "930px" }}>
                  스테이 인터뷰 이용약관 동의 (필수)
                </div>
                <Image
                  src={termsOfUse}
                  alt="화살표"
                  width={15}
                  height={10}
                  style={{ cursor: "pointer" }}
                  onClick={termsOfUseHandler}
                />
              </div>
            </div>
            {termsOfUseToggle && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "1000px",
                  height: "320px",
                  background: "#f8f8f8",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "900px",
                    height: "220px",
                    margin: "auto",
                    lineHeight: "20px",
                  }}
                >
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
            <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  type="checkbox"
                  id="ckbox2"
                  checked={isCollectionChecked}
                  onChange={collectionCheckedHandler}
                ></CheckBox>
                <CheckBoxLabel htmlFor="ckbox2"></CheckBoxLabel>
                <div style={{ marginLeft: "20px", width: "930px" }}>
                  개인정보 수집 및 이용 동의 (필수)
                </div>
                <Image
                  src={collectionInformation}
                  alt="화살표"
                  width={15}
                  height={10}
                  style={{ cursor: "pointer" }}
                  onClick={collectionHandler}
                />
              </div>
            </div>
            {collectionInformationToggle && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "1000px",
                  height: "320px",
                  background: "#f8f8f8",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "900px",
                    height: "220px",
                    margin: "auto",
                    lineHeight: "20px",
                  }}
                >
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
            <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  type="checkbox"
                  id="ckbox3"
                  checked={isAgeChecked}
                  onChange={ageCheckedHandler}
                ></CheckBox>
                <CheckBoxLabel htmlFor="ckbox3"></CheckBoxLabel>
                <div style={{ marginLeft: "20px", width: "930px" }}>
                  만 14세 이상 확인 (필수)
                </div>
                <Image
                  src={ageCheck}
                  alt="화살표"
                  width={15}
                  height={10}
                  style={{ cursor: "pointer" }}
                  onClick={ageCheckHandler}
                />
              </div>
            </div>
            {ageCheckToggle && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "1000px",
                  height: "320px",
                  background: "#f8f8f8",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "900px",
                    height: "220px",
                    margin: "auto",
                    lineHeight: "20px",
                  }}
                >
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
            <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CheckBox
                  type="checkbox"
                  id="ckbox4"
                  checked={isReceivingChecked}
                  onChange={receivingCheckedHandler}
                ></CheckBox>
                <CheckBoxLabel htmlFor="ckbox4"></CheckBoxLabel>
                <div style={{ marginLeft: "20px", width: "930px" }}>
                  마케팅 정보 수신 (선택)
                </div>
                <Image
                  src={receivingInformation}
                  alt="화살표"
                  width={15}
                  height={10}
                  style={{ cursor: "pointer" }}
                  onClick={receivingHandler}
                />
              </div>
            </div>
            {receivingInformationToggle && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "1000px",
                  height: "320px",
                  background: "#f8f8f8",
                  fontSize: "14px",
                  fontWeight: "300",
                  margin: "auto",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    width: "900px",
                    height: "220px",
                    margin: "auto",
                    lineHeight: "20px",
                  }}
                >
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "78px",
          background: "#203d1e",
          borderRadius: "15px",
          color: "#ffffff",
          fontSize: "25px",
          fontWeight: "600",
          margin: " 75px 0 75px 0",
        }}
      >
        회원 가입하기
      </div>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 1200px;
  margin: auto;
`;

const SignUpTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 200px;
  margin: auto;
`;

const SignUpText = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #162318;
`;

const SignUpWords = styled.div`
  height: 22px;
  font-size: 19px;
  font-weight: 300;
  color: #162318;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 1200px;
  height: 480px;
  border-radius: 15px;
  margin-bottom: 100px;
`;

const InformationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 60px;
  margin: auto;
  margin-bottom: 5px;
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
    border: 2px solid yellow;
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
