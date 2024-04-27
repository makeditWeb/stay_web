"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { customAxios } from "@/modules/common/api";
import { API } from "@/app/api/config";

export default function ReservationCheckPage() {
  const router = useRouter();
  const [nonMemberParam, setNonMemberParam] = useState({
    clientName: "",
    clientPhone: "",
    reservationNumber: "",
  });
  const { clientName, clientPhone, reservationNumber } = nonMemberParam;

  const onChangeNonMemberParam = (e) => {
    const { name, value } = e.target;
    setNonMemberParam({ ...nonMemberParam, [name]: value });
  };

  const onClickSelectReservation = () => {
    console.log("onClickSelectReservation");
    customAxios
      .get(`${API.RESERVATION}/non-member`, { params: nonMemberParam })
      .then((res) => {
        router.push(`/reservation/information?TID=${res.data.response.tid}`);
      });
  };

  return (
    <div className="container_reservation_check">
      <div className="title_reservation_check">Reservation Check</div>
      <div className="sub_title_reservation_check">비회원 예약조회</div>
      <div className="section_reservation_check">
        <input
          className="inp_reservation_check"
          placeholder="이름을 입력해주세요"
          value={clientName}
          name="clientName"
          onChange={onChangeNonMemberParam}
        ></input>
        <input
          className="inp_reservation_check"
          type="text"
          // style={{ margin: "20px 0 20px 0" }}
          value={clientPhone}
          name="clientPhone"
          placeholder="휴대폰 번호를 입력해주세요"
          onChange={onChangeNonMemberParam}
        ></input>
        <input
          className="inp_reservation_check"
          value={reservationNumber}
          name="reservationNumber"
          // style={{ margin: "0 0 50px 0" }}
          placeholder="예약번호를 입력해주세요"
          onChange={onChangeNonMemberParam}
        ></input>
        <div
          className="btn_reservation_check"
          onClick={onClickSelectReservation}
        >
          예약 조회
        </div>
      </div>
    </div>
  );
}
