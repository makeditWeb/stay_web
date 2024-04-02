"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ReservationComplete() {
  return (
    <div className="reservation_completed_container">
      <div className="reservation_completed_headtitle">
        예약이 완료되었습니다.
      </div>
      <div className="reservation_completed_subtitle">
        확인을 누르시면 예약 정보로 이동합니다.
      </div>
      <div className="reservation_completed_section">
        <div className="reservation_completed_wrap">
          <img
            src="/reservationCompletedImg.png"
            alt="예약 완료 이미지"
            // width={210}
            height={120}
          />
        </div>
        <div className="reservation_completed_wrap reservation_completed_wrap_center">
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
          <div className="reservation_completed_content">
            스테이인터뷰, 영동 / 디럭스 룸 / 어른 2인, 아이 2인
          </div>
        </div>
      </div>
      <div className="virtual_account_container">
        <div className="virtual_account_headtitle">입금 계좌</div>
        <div className="virtual_account_subtitle">
          아래 계좌로 입금해주세요.
        </div>
        <div className="virtual_account_description">
          ※ 8시간 내 미입금시 예약은 자동 취소됩니다.
        </div>
      </div>
      <div className="virtual_account_section">
        <div className="virtual_account_wrap">
          <div className="virtual_account_title">계좌번호</div>
          <div className="virtual_account_content">
            농협중앙회 3521719679693
          </div>
        </div>
        <div className="virtual_account_wrap">
          <div className="virtual_account_title">계좌번호</div>
          <div className="virtual_account_content">이석현</div>
        </div>
      </div>
      <div className="reservation_completed_btn">확인</div>
    </div>
  );
}
