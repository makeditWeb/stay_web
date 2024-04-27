"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

export default function ReservationComplete() {
  const searchParams = useSearchParams();
  const TID = searchParams.get("TID");
  const [reservationData, setReservationData] = useState({
    checkIn: "",
    checkOut: "",
    storeName: "",
    roomName: "",
    adultCount: 0,
    childCount: 0,
    vbankBankName: "",
    vbankNum: "",
    accountHolder: "",
    paymentMethod: "",
  });

  useEffect(() => {
    //TODO : TID로 예약 정보 조회
    customAxios.get(`${API.RESERVATION}/${TID}`).then((res) => {
      setReservationData(res.data.response);
    });
  }, []);

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
          <Image
            src="/reservationCompletedImg.png"
            alt="예약 완료 이미지"
            width={210}
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
            {reservationData.checkIn} ~ {reservationData.checkOut}
          </div>
          <div className="reservation_completed_content">
            {reservationData.storeName} / {reservationData.roomName} / 어른{" "}
            {reservationData.adultCount}인, 아이 {reservationData.childCount}인
          </div>
        </div>
      </div>
      {reservationData.paymentMethod === "BANK_TRANSFER" ? (
        <>
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
                {reservationData.vbankBankName} {reservationData.vbankNum}
              </div>
            </div>
            <div className="virtual_account_wrap">
              <div className="virtual_account_title">예금주</div>
              <div className="virtual_account_content">
                {reservationData.accountHolder}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* <div className="virtual_account_container">
        <div className="virtual_account_headtitle">입금 계좌</div>
        <div className="virtual_account_subtitle">
          아래 계좌로 입금해주세요.
        </div>
        <div className="virtual_account_description">
          ※ 8시간 내 미입금시 예약은 자동 취소됩니다.
        </div>
      </div> */}
      {/* <div className="virtual_account_section">
        <div className="virtual_account_wrap">
          <div className="virtual_account_title">계좌번호</div>
          <div className="virtual_account_content">
            {reservationData.vbankBankName} {reservationData.vbankNum}
          </div>
        </div>
        <div className="virtual_account_wrap">
          <div className="virtual_account_title">예금주</div>
          <div className="virtual_account_content">
            {reservationData.accountHolder}
          </div>
        </div>
      </div> */}
      <Link
        href={{
          pathname: `/reservation/information`,
          query: {
            tid: TID,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="reservation_completed_btn">확인</div>
      </Link>
    </div>
  );
}
