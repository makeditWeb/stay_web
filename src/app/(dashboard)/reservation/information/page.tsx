"use client";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import SweetAlert from "sweetalert2";
import moment from "moment";
import CryptoJS from "crypto-js";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

export default function ReservationInformationPage() {
  const formRef = useRef();
  const searchParams = useSearchParams();
  const TID = searchParams.get("TID");
  const [feeGuidance, setFeeGuidance] = useState("/topVector.png");
  const [feeGuidanceToggle, setFeeGuidanceToggle] = useState(false);
  const [reservationData, setReservationData] = useState({});
  const [refundPolicyList, setRefundPolicyList] = useState([]);
  console.log("TID :: ", TID);

  useEffect(() => {
    //TID로 예약 정보 조회
    customAxios.get(`${API.RESERVATION}/${TID}`).then((res) => {
      console.log("res.data.response 12345 :: ", res.data.response);

      setReservationData(res.data.response);
      setRefundPolicyList(res.data.response.refundPolicyList.data);
    });
  }, []);

  const feeGuidanceHandler = () => {
    setFeeGuidance(
      feeGuidance === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setFeeGuidanceToggle(!feeGuidanceToggle);
  };

  //예약 취소
  const onClickCancelReservation = () => {
    SweetAlert.fire({
      title: `예약을 취소하시겠습니까?`,
      icon: "warning",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // 현재 시간 구하기
        var currentTime = new Date();

        const merchantKey = process.env.NEXT_PUBLIC_NICEPAY_KEY;
        const moid = generateOrderNumber();
        const ediDate = moment().format("YYYYMMDDhhmmss");
        const mid = process.env.NEXT_PUBLIC_MID;
        const cancelAmt = 80000; //취소금액
        const cancelMsg = "사용자 취소"; //취소사유
        const partialCancelCode = "0"; //전체취소

        const TestData = ediDate + mid + cancelAmt + merchantKey;
        const SignData = CryptoJS.SHA256(TestData).toString();

        const cancelParam = {
          tid: TID,
          moid: moid,
          mid: mid,
          cancelAmt: cancelAmt,
          cancelMsg: cancelMsg,
          partialCancelCode: partialCancelCode,
          ediDate: ediDate,
          signData: SignData,
        };

        console.log("cancelParam :: ", cancelParam);

        customAxios
          .post(`${API.RESERVATION}/cancel`, cancelParam)
          .then((res) => {
            console.log(`${API.RESERVATION}/cancel :: `, res);
          });
      }
    });
  };

  const generateOrderNumber = () => {
    // 오늘 날짜
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const prefix = "stay";
    const randomNumber = Math.floor(Math.random() * 10000000000); // 10자리 랜덤 숫자 생성
    const paddedRandomNumber = randomNumber.toString().padStart(10, "0"); // 10자리로 패딩

    return prefix + paddedRandomNumber + `${year}${month}${day}`;
  };

  return (
    <div className="container_reservation_info">
      <div className="header_reservation_info">Reservation Information</div>
      <div className="sub_header_reservation_info">예약 상세 정보</div>
      <div className="title_reservation_info">예약 정보</div>
      <div className="section_reservation_info">
        <div className="wrap_payment">
          {reservationData?.payMethod === "VBANK" ? (
            <div
              className="container_badge_reservation_info"
              // style={{ marginTop: "80px" }}
            >
              <div className="title_badge_reservation_info">계좌번호</div>
              <div className="content_reservation_info">0000634721</div>
            </div>
          ) : (
            ""
          )}

          <div
            className="container_badge_reservation_info"
            // style={{ margin: "20px 0 20px 50px" }}
          >
            <div className="title_badge_reservation_info">예약상태</div>
            <div className="content_reservation_info_bold">
              {reservationData?.payStatus === "COMPLETE_PAYMENT"
                ? "결제완료"
                : reservationData?.payStatus === "WAIT_PAYMENT"
                ? "결제대기"
                : reservationData?.payStatus === "PAYMENT_CANCELLATION"
                ? "결제취소"
                : "확인중"}
            </div>
            {reservationData?.payStatus === "COMPLETE_PAYMENT" ? (
              <div
                className="btn_reservation_cancel"
                onClick={onClickCancelReservation}
              >
                예약 취소
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="container_badge_reservation_info">
            <div className="title_badge_reservation_info">예약일시</div>
            <div className="content_reservation_info">2024-02-29 15:54</div>
          </div>
          {reservationData?.payMethod === "VBANK" ? (
            <div
              className="container_badge_reservation_info"
              // style={{ marginTop: "50px" }}
            >
              <div className="title_badge_reservation_info">입금계좌</div>
              <div className="content_reservation_info">
                농협중앙회 3521719679693 이석현
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="line_reservation_info"></div>
        <div className="rank_reservation_info"></div>

        <div className="wrap_room">
          <div className="container_badge_reservation_info">
            <div className="title_badge_reservation_info">숙소이름</div>
            <div className="content_reservation_info">
              {reservationData?.storeName}
            </div>
          </div>
          <div
            className="container_badge_reservation_info"
            // style={{ margin: "20px 0 20px 50px" }}
          >
            <div className="title_badge_reservation_info">객실타입</div>
            <div className="content_reservation_info">
              {reservationData?.roomName}
            </div>
          </div>
          <div className="container_badge_reservation_info">
            <div className="title_badge_reservation_info">이용기간</div>
            <div className="content_reservation_info">
              {reservationData?.checkIn} ~ {reservationData?.checkOut}
            </div>
          </div>
          <div
            className="container_badge_reservation_info"
            // style={{ margin: "20px 0 20px 50px" }}
          >
            <div className="title_badge_reservation_info">체크인</div>
            <div className="content_reservation_info">
              {reservationData?.checkIn}
            </div>
          </div>
          <div className="container_badge_reservation_info">
            <div className="title_badge_reservation_info">체크아웃</div>
            <div className="content_reservation_info">
              {reservationData?.checkOut}
            </div>
          </div>
          <div
            className="container_badge_reservation_info"
            // style={{ display: "block", margin: "20px 0 20px 50px" }}
          >
            <div style={{ display: "flex" }}>
              <div className="title_badge_reservation_info">인원/객실</div>
              <div className="div_content_reservation_info">
                <div className="content_reservation_info">
                  성인 {reservationData?.adultCount}인, 아동{" "}
                  {reservationData?.childCount}인 / 1개 (기준 2인/최대 3인)
                </div>
                <div className="text_additional_fee_information">
                  기준인원 초과시 추가 비용 발생 가능
                  <br />
                  입실 최대인원 초과시 강제 퇴실조치
                </div>
              </div>
            </div>
          </div>
          <div
            className="container_badge_reservation_info"
            // style={{ margin: "120px 0 0 50px" }}
          >
            <div className="title_badge_reservation_info">옵션 정보</div>
            <div className="content_reservation_info">침구추가 / 그릴대여</div>
          </div>
        </div>
      </div>
      <div className="section_cancellation_fee">
        <div>취소 수수료 안내 보기</div>
        <div>
          <img src={feeGuidance} alt="화살표" onClick={feeGuidanceHandler} />
        </div>
      </div>
      <div className="wrap_cancellation_fee">
        {feeGuidanceToggle && (
          <div className="content_cancellation_fee">
            {refundPolicyList?.map((refundPolicy, index) => (
              <div className="item_cancellation_fee">
                <div className="text_cancellation_fee"></div>
                <div>
                  {refundPolicy.category} 총 결제금액의{" "}
                  {refundPolicy.refundRatio}% 환불
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
