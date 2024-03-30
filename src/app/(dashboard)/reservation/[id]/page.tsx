"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "moment/locale/ko";
import ModalComponent from "@/components/modalComponent";

export default function ReservationPage(props: any) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const storeId: any = searchParams.get("storeId");
  const storeName: any = searchParams.get("storeName");
  const englishStoreName: any = searchParams.get("englishStoreName");
  // console.log("storeName", storeName);

  moment.locale("ko");
  const [value, onChange] = useState([new Date(), new Date()]);
  const [nowDate, setNowDate] = useState("날짜");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // 카운팅 숫자
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [petCount, setPetCount] = useState(0);

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 달력
  const changeDate = (e) => {
    const startDateFormat = moment(e[0]).format("YYYY/MM/DD");
    const endDateFormat = moment(e[1]).format("YYYY/MM/DD");
    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  // 카운팅 함수

  const adultPlusCountHandler = () => {
    setAdultCount((prevadultCount) => prevadultCount + 1);
  };

  const adultMinusCountHandler = () => {
    if (adultCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setAdultCount((prevadultCount) => prevadultCount - 1);
    }
  };

  const kidPlusCountHandler = () => {
    setKidCount((prevkidCount) => prevkidCount + 1);
  };

  const kidMinusCountHandler = () => {
    if (kidCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setKidCount((prevkidCount) => prevkidCount - 1);
    }
  };

  const petPlusCountHandler = () => {
    setPetCount((prevpetCount) => prevpetCount + 1);
  };

  const petMinusCountHandler = () => {
    if (petCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setPetCount((prevpetCount) => prevpetCount - 1);
    }
  };

  return (
    <div className="reservation_containter">
      <div className="reservation_left_container">
        <img
          className="reservation_left_container_background"
          src="/reservationImg.png"
          alt="예약 이미지"
        />
        <div className="reservation_left_item_container">
          <div className="reservation_english_name">{englishStoreName}</div>
          <div className="reservation_korean_name">{storeName}</div>
          <div className="reservation_select_people_title">인원 선택</div>
          <div className="reservation_select_people_container">
            <div>
              <div className="reservation_select_people_div">
                <div className="reservation_adult_title">성인</div>
                <div className="reservation_adult_input_container">
                  <div className="reservation_adult_input_div">
                    <div
                      className="reservation_quantity_btn"
                      onClick={adultMinusCountHandler}
                    >
                      <img
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                    <p className="reservation_quantity_input">{adultCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={adultPlusCountHandler}
                    >
                      <img
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reservation_select_people_div">
                <div className="reservation_adult_title">어린이</div>
                <div className="reservation_adult_input_container">
                  <div className="reservation_adult_input_div">
                    <div
                      style={{ width: "45px", height: "45px" }}
                      onClick={kidMinusCountHandler}
                    >
                      <img
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                    <p className="reservation_quantity_input">{kidCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={kidPlusCountHandler}
                    >
                      <img
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="reservation_select_people_div">
                <div className="reservation_adult_title">반려견</div>
                <div className="reservation_adult_input_container">
                  <div className="reservation_adult_input_div">
                    <div
                      className="reservation_quantity_btn"
                      onClick={petMinusCountHandler}
                    >
                      <img
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                    <p className="reservation_quantity_input">{petCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={petPlusCountHandler}
                    >
                      <img
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="reservation_previous_btn">이전으로</button>
        </div>
      </div>
      <div className="reservation_right_container">
        <div className="reservation_right_div">
          <div className="reservation_calendar_container">
            <div className="calendar_title">날짜 선택</div>
            <div className="calendar_item_container">
              <div className="calendar_item_div">
                <div className="date_container">
                  <p className="date_title">입실일</p>
                  <div className="date_input">
                    {/* {moment(startDate).format("YYYY년 MM월 DD일")} */}
                    {moment(startDate).format("YYYY년 MM월 DD일 (ddd)")}
                  </div>
                </div>
                <div className="date_container">
                  <p className="date_title">퇴실일</p>
                  <div className="date_input">
                    {/* {moment(value).format("YYYY년 MM월 DD일")} */}
                    {moment(endDate).format("YYYY년 MM월 DD일 (ddd)")}
                  </div>
                </div>
              </div>
              <div>
                <CalendarContainer>
                  <CalendarContents
                    onChange={changeDate}
                    // value={value}
                    // minDetail="month"
                    // maxDetail="month"
                    selectRange={true}
                    showNeighboringMonth={false}
                    // calendarType="hebrew"
                    calendarType="gregory"
                    minDate={new Date()}
                    formatDay={(locale, date) => moment(date).format("D")}
                    formatMonthYear={(locale, date) =>
                      moment(date).format("M월")
                    }
                    prev2Label={null}
                    next2Label={null}
                  ></CalendarContents>
                </CalendarContainer>
              </div>
            </div>

            <div>
              <div className="room_title">객실 선택</div>
              <div>
                <div className="room_info_conatiner">
                  <div className="room_image_container">
                    <div>
                      <img src="/reservationImg2.png" alt="객실 이미지" />
                    </div>
                    <div className="room_image_div">
                      <div className="room_detail_btn" onClick={openModal}>
                        상세보기
                      </div>
                      <ModalComponent
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                      />
                    </div>
                  </div>
                  <div className="room_cotent_container">
                    <div className="room_info_title">디럭스 룸</div>
                    <div className="room_info_content">
                      아름다운 동해바다를 배경으로 멋진 사진을 남길 수 있는
                      곳입니다.
                      <br />
                      사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
                    </div>
                    <div className="room_badge">
                      <div style={{ fontWeight: "700" }}>기준 3인</div>
                      (최대 4인)
                    </div>
                    <div className="room_reservation_btn">예약하기</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ReservationContainer = styled.div`
  display: flex;
  // width: 1920px;
  padding-bottom: 80px;
`;

const RoomImg = styled.div`
  position: relative;
  width: 380px;
  height: 250px;
  margin-right: 60px;
`;

const RoomDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`;

// 모달
const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 달력
const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const CalendarContents = styled(Calendar)`
  border: none;
  width: 800px;

  // 선택된 날짜들의 배경
  .react-calendar__tile--active {
    background-color: rgba(43, 118, 56, 0.3);
    color: #ffffff;
    font-size: 16px;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  // 일 간격들
  .react-calendar__tile {
    /* padding: 20px 0px 20px; */
    margin: 15px 0px 15px;
    position: relative;
  }

  // 오늘 날짜 색상
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${(props) => props.theme.primary_2};
    }
  }

  .react-calendar__tile--active {
    background: var(--festie-primary-orange, rgba(43, 118, 56, 0.3));
    color: white;
  }

  /* 이번 달 일자 */
  .react-calendar__tile {
    font-size: 16px;
    font-weight: 300;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays__weekday {
    display: none;
  }

  .react-calendar__navigation__label > span {
    color: #203d1e;
    font-size: 18px;
    font-weight: 600;
  }

  /* .react-calendar__month-view__days__day--weekend {
    // 주말 글씨 빨간색 없애기
    color: var(--festie-gray-800, #3a3a3a);
  } */

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    //hover 했을 때 색상 변경
    background: var(--festie-primary-orange, rgba(43, 118, 56, 0.3));
    color: #ffffff;
  }

  .react-calendar__tile--rangeStart {
    border-radius: 15px 0px 0px 15px;
  }

  .react-calendar__tile--rangeEnd {
    border-radius: 0px 15px 15px 0px;
  }

  // 토요일에 해당하는 날짜의 글씨 색상을 파란색으로 변경
  .react-calendar__month-view__days__day--weekend:is(
      .react-calendar__month-view__days__day--weekend
    ) {
    color: #2555ff !important;
  }

  // 일요일에 해당하는 날짜의 글씨 색상을 빨간색으로 변경
  .react-calendar__month-view__days__day--weekend:is(
      .react-calendar__month-view__days__day--weekend
    )
    + .react-calendar__month-view__days__day--weekend {
    color: #cd0000 !important;
  }

  // 달력에서 보이는 저번 달과 다음 달 숫자 색
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #bdbdbd;
    font-size: 16px;
  }

  // 선택된 달력 헤더의 배경색을 투명하게 설정
  .react-calendar__navigation__label {
    background-color: transparent !important;
  }

  .react-calendar__navigation__arrow {
    background-color: transparent !important;
  }

  .react-calendar__tile:disabled {
    background-color: #ffffff;
    color: #ababab;
  }
`;
