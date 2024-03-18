"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ReservationCheckPage() {
  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

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

  return (
    <ReservatioonCheckContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          color: "#162318",
          marginBottom: "20px",
        }}
      >
        Reservation Check
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          fontWeight: "300",
          color: "#162318",
          marginBottom: "100px",
        }}
      >
        비회원 예약조회
      </div>
      <ReservationInputBox placeholder="이름을 입력해주세요"></ReservationInputBox>
      <ReservationInputBox
        type="text"
        style={{ margin: "20px 0 20px 0" }}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="휴대폰 번호를 입력해주세요"
      ></ReservationInputBox>
      <ReservationInputBox
        style={{ margin: "0 0 50px 0" }}
        placeholder="예약번호를 입력해주세요"
      ></ReservationInputBox>
      <CheckBtn>예약 조회</CheckBtn>
    </ReservatioonCheckContainer>
  );
}

const ReservatioonCheckContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 150px;
`;

const CheckBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 72px;
  background: #203d1e;
  border-radius: 15px;
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
`;

const ReservationInputBox = styled.input`
  width: 475px;
  height: 75px;
  border: none;
  border-radius: 15px;
  padding-left: 25px;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #c8cdc6;
  }

  &:focus {
    outline: none;
  }
`;
