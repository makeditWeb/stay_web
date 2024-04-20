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
    <div className="container_reservation_check">
      <div className="title_reservation_check">Reservation Check</div>
      <div className="sub_title_reservation_check">비회원 예약조회</div>
      <div className="section_reservation_check">
        <input
          className="inp_reservation_check"
          placeholder="이름을 입력해주세요"
        ></input>
        <input
          className="inp_reservation_check"
          type="text"
          // style={{ margin: "20px 0 20px 0" }}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="휴대폰 번호를 입력해주세요"
        ></input>
        <input
          className="inp_reservation_check"
          // style={{ margin: "0 0 50px 0" }}
          placeholder="예약번호를 입력해주세요"
        ></input>
        <div className="btn_reservation_check">예약 조회</div>
      </div>
    </div>
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
