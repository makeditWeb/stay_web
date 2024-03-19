"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ReservationInformationPage() {
  const [feeGuidance, setFeeGuidance] = useState("/topVector.png");

  const [feeGuidanceToggle, setFeeGuidanceToggle] = useState(false);

  const feeGuidanceHandler = () => {
    setFeeGuidance(
      feeGuidance === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setFeeGuidanceToggle(!feeGuidanceToggle);
  };

  return (
    <ReservationInformationContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        Reservation Information
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          color: "#162318",
          marginBottom: "30px",
        }}
      >
        예약 상세 정보
      </div>
      <div
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
          margin: "50px 0 30px 0",
        }}
      >
        예약 정보
      </div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "550px",
          borderRadius: "15px",
          background: "#ffffff",
        }}
      >
        <div style={{ width: "600px" }}>
          <ContentContainer style={{ marginTop: "80px" }}>
            <ContentName>계좌번호</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              0000634721
            </div>
          </ContentContainer>
          <ContentContainer style={{ margin: "20px 0 20px 50px" }}>
            <ContentName>예약상태</ContentName>
            <div style={{ fontSize: "25px", fontWeight: "700" }}>결제대기</div>
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
          </ContentContainer>
          <ContentContainer>
            <ContentName>예약일시</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-02-29 15:54
            </div>
          </ContentContainer>
          <ContentContainer style={{ marginTop: "50px" }}>
            <ContentName>입금계좌</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              농협중앙회 3521719679693 이석현
            </div>
          </ContentContainer>
        </div>
        <div
          style={{
            width: "1px",
            height: "450px",
            background: "#d9d9d9",
            marginTop: "50px",
          }}
        ></div>
        <div style={{ width: "600px" }}>
          <ContentContainer style={{ marginTop: "80px" }}>
            <ContentName>숙소이름</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              스테이인터뷰, 영동
            </div>
          </ContentContainer>
          <ContentContainer style={{ margin: "20px 0 20px 50px" }}>
            <ContentName>객실타입</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              ㄱ, 원룸형
            </div>
          </ContentContainer>
          <ContentContainer>
            <ContentName>이용기간</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-02-29 ~ 2024-03-04
            </div>
          </ContentContainer>
          <ContentContainer style={{ margin: "20px 0 20px 50px" }}>
            <ContentName>체크인</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-02-29
            </div>
          </ContentContainer>
          <ContentContainer>
            <ContentName>체크아웃</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              2024-03-04
            </div>
          </ContentContainer>
          <ContentContainer
            style={{ display: "block", margin: "20px 0 20px 50px" }}
          >
            <div style={{ display: "flex" }}>
              <ContentName>인원/객실</ContentName>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "20px",
                }}
              >
                성인 2인, 아동 2인 / 1개 (기준 2인/최대 3인)
              </div>
            </div>
            <div
              style={{
                marginLeft: "100px",
                marginTop: "5px",
                lineHeight: "25px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              기준인원 초과시 추가 비용 발생 가능
              <br />
              입실 최대인원 초과시 강제 퇴실조치
            </div>
          </ContentContainer>
          <ContentContainer style={{ margin: "120px 0 0 50px" }}>
            <ContentName>옵션 정보</ContentName>
            <div style={{ fontSize: "20px", fontWeight: "500" }}>
              침구추가 / 그릴대여
            </div>
          </ContentContainer>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
          margin: "50px 0 30px 0",
        }}
      >
        <div>취소 수수료 안내 보기</div>
        <div>
          <Image
            src={feeGuidance}
            alt="화살표"
            width={25}
            height={13}
            style={{ cursor: "pointer" }}
            onClick={feeGuidanceHandler}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          borderRadius: "15px",
          background: "#ffffff",
          paddingTop: "50px",
          paddingBottom: "30px",
        }}
      >
        {feeGuidanceToggle && (
          <div style={{ fontSize: "14px", fontWeight: "300" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 당일 총 결제금액의 0% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 1일 전 총 결제금액의 10% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 2일 전 총 결제금액의 20% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 3일 전 총 결제금액의 30% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 4일 전 총 결제금액의 40% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 5일 전 총 결제금액의 50% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 6일 전 총 결제금액의 60% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 7일 전 총 결제금액의 70% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 8일 전 총 결제금액의 80% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 9일 전 총 결제금액의 90% 환불</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginLeft: "80px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ width: "2px", height: "2px", background: "black" }}
              ></div>
              <div>이용일 10일 전 총 결제금액의 100% 환불</div>
            </div>
          </div>
        )}
      </div>
    </ReservationInformationContainer>
  );
}

const ReservationInformationContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 192px;
  padding-bottom: 150px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  gap: 20px;
  margin-left: 50px;
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
