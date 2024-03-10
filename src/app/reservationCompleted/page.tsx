"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function page() {
  return (
    <ReservationCompletedContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        예약이 완료되었습니다.
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          color: "#162318",
          marginBottom: "30px",
        }}
      >
        확인을 누르시면 예약 정보로 이동합니다.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "1200px",
          height: "164px",
          borderRadius: "15px",
          background: "#ffffff",
        }}
      >
        <div style={{ marginLeft: "30px" }}>
          <Image
            src="/reservationCompletedImg.png"
            alt="예약 완료 이미지"
            width={210}
            height={120}
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "#162318",
              marginBottom: "10px",
            }}
          >
            2024-02-29 ~ 2024-03-01
          </div>
          <div style={{ fontSize: "18px", fontWeight: "700" }}>
            스테이인터뷰, 영동 / 디럭스 룸 / 어른 2인, 아이 2인
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          margin: "80px 0 20px 0",
        }}
      >
        <div style={{ fontSize: "32px", fontWeight: "700", color: "#162318" }}>
          입금 계좌
        </div>
        <div style={{ fontSize: "19px", fontWeight: "300", color: "#162318" }}>
          아래 계좌로 입금해주세요.
        </div>
        <div style={{ fontSize: "20px", fontWeight: "500" }}>
          ※ 8시간 내 미입금시 예약은 자동 취소됩니다.
        </div>
      </div>
      <div
        style={{
          width: "1200px",
          height: "80px",
          borderRadius: "15px",
          background: "#ffffff",
          padding: "50px 0 50px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "25px",
            gap: "20px",
            marginLeft: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "22px",
              fontSize: "16px",
              background: "#203d1e",
              borderRadius: "4px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            계좌번호
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>
            농협중앙회 3521719679693
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "300px",
            height: "25px",
            gap: "20px",
            marginLeft: "50px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "22px",
              fontSize: "16px",
              background: "#203d1e",
              borderRadius: "4px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            계좌번호
          </div>
          <div style={{ fontSize: "20px", fontWeight: "500" }}>이석현</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "78px",
          borderRadius: "15px",
          background: "#203d1e",
          color: "#ffffff",
          fontSize: "25px",
          fontWeight: "600",
          marginTop: "50px",
        }}
      >
        확인
      </div>
    </ReservationCompletedContainer>
  );
}

const ReservationCompletedContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 150px;
`;
