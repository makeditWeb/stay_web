"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "moment/locale/ko";
import ModalComponent from "@/components/modalComponent";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import Skeleton from "@/components/Skeleton";

export default function ReservationPage(props: any) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const partnerStoreId: any = pathname.split("/").reverse()[0];
  const storeId: any = searchParams.get("storeId");
  const storeName: any = searchParams.get("storeName");
  const englishStoreName: any = searchParams.get("englishStoreName");

  const addres: any = searchParams.get("address");
  const [roomId, setRoomId] = useState(1);
  const [roomData, setRoomData] = useState();

  moment.locale("ko");
  const [value, onChange] = useState([new Date(), new Date()]);
  const [nowDate, setNowDate] = useState("날짜");
  const [startDate, setStartDate] = useState(
    String(searchParams.get("checkInDate"))
  );
  const [endDate, setEndDate] = useState(
    String(searchParams.get("checkOutDate"))
  );
  const [roomList, setRoomList] = useState([]); // 객실 목록

  // 카운팅 숫자
  const [adultCount, setAdultCount] = useState(
    Number(searchParams.get("adultCount"))
  );
  const [kidCount, setKidCount] = useState(
    Number(searchParams.get("kidCount"))
  );
  const [petCount, setPetCount] = useState(
    Number(searchParams.get("petCount"))
  );
  const [loading, setLoading] = useState(false);

  //모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    customAxios.get(`${API.ROOM}/partner-store/${storeId}`).then((res) => {
      setRoomList(res.data.response.data);
      setLoading(false);
    });
  }, []);

  const openModal = (e: any) => {
    roomList.filter((item) => {
      if (item.id === Number(e.target.id)) {
        console.log("item", item);
        setRoomData(item);
      }
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 달력
  const changeDate = (e: any) => {
    const startDateFormat = moment(e[0]).format("YYYY-MM-DD");
    const endDateFormat = moment(e[1]).format("YYYY-MM-DD");
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

  const selectRoomDetailModal = (e: any) => {
    console.log("e", e);
    console.log("e.target.id", e.target.id);
  };

  return (
    <div className="reservation_containter">
      <div className="reservation_left_container">
        <Image
          className="reservation_left_container_background"
          src="https://stay-interview.s3.amazonaws.com/reservation/reservationImg.png"
          alt="예약 이미지"
          width={490}
          height={1100}
          loading="eager"
          // priority={true}
        />
        <div className="reservation_left_item_container">
          <div className="reservation_english_name">{englishStoreName}</div>
          <div className="reservation_korean_name">{storeName}</div>
          <div className="reservation_select_people_title">인원 선택</div>
          <div className="reservation_select_people_container">
            <div className="box_reservation_people">
              <div className="reservation_select_people_div">
                <div className="reservation_adult_title">성인</div>
                <div className="reservation_adult_input_container">
                  <div className="reservation_adult_input_div">
                    <div
                      className="reservation_quantity_btn"
                      onClick={adultMinusCountHandler}
                    >
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="reservation_quantity_input">{adultCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={adultPlusCountHandler}
                    >
                      <Image
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
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
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="reservation_quantity_input">{kidCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={kidPlusCountHandler}
                    >
                      <Image
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
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
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
                      />
                    </div>
                    <p className="reservation_quantity_input">{petCount}</p>
                    <div
                      className="reservation_quantity_btn"
                      onClick={petPlusCountHandler}
                    >
                      <Image
                        src="/plusIcon.png"
                        alt="플러스 아이콘"
                        className="reservation_quantity_img"
                        width={45}
                        height={45}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={{
              pathname: `/partner/store/${storeId}`,
              query: {
                checkInDate: startDate,
                checkOutDate: endDate,
                adultCount: adultCount || 0,
                kidCount: kidCount || 0,
                petCount: petCount || 0,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <button className="reservation_previous_btn">이전으로</button>
          </Link>
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
                <div className="calendar_container">
                  <CalendarContents
                    onChange={changeDate}
                    value={[new Date(startDate), new Date(endDate)]}
                    minDetail="month"
                    maxDetail="month"
                    // selectDates={selectDates}
                    selectRange={true}
                    showNeighboringMonth={false}
                    // calendarType="hebrew"
                    calendarType="gregory"
                    minDate={new Date()}
                    formatDay={(locale, date) => moment(date).format("DD")}
                    formatMonthYear={(locale, date) =>
                      moment(date).format("M월")
                    }
                    prev2Label={null}
                    next2Label={null}
                  ></CalendarContents>
                </div>
              </div>
            </div>

            <div>
              <div className="room_title">객실 선택</div>
              {loading ? (
                <>
                  <Container>
                    <ImageWrapper>
                      <Skeleton width={320} height={220} />
                    </ImageWrapper>
                    <Info>
                      <div style={{ height: "8px" }}></div>
                      <Skeleton width={150} height={29} rounded />
                      <div style={{ height: "8px" }}></div>
                      <Skeleton width={200} height={19} rounded />
                    </Info>
                  </Container>
                </>
              ) : (
                <>
                  {roomList.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="room_info_conatiner">
                          <div className="room_image_container">
                            <div>
                              <Image
                                src={item.imageUrl}
                                alt={item.imageName}
                                width={330}
                                height={250}
                              />
                            </div>
                            <div className="room_image_div">
                              <div
                                className="room_detail_btn"
                                id={item.id}
                                onClick={openModal}
                              >
                                상세보기
                              </div>
                              {isModalOpen && (
                                <ModalComponent
                                  isOpen={isModalOpen}
                                  closeModal={closeModal}
                                  roomData={roomData}
                                />
                              )}
                            </div>
                          </div>
                          <div className="room_cotent_container">
                            <div className="room_info_title">{item.name}</div>
                            <div className="room_info_content">
                              {item.description}
                            </div>
                            <div className="room_badge">
                              <div style={{ fontWeight: "700" }}>
                                기준 {item.standardPeopleCount}인
                              </div>
                              (최대 {item.maximumPersonnelCount}인)
                            </div>
                            <Link
                              href={{
                                pathname: `/reservation/orders/new/${roomId}`,
                                query: {
                                  partnerStoreId: partnerStoreId,
                                  storeId: storeId,
                                  roomId: 1,
                                  roomName: `${item.name}`,
                                  storeName: storeName,
                                  addres: addres,
                                  englishStoreName: englishStoreName,
                                  adultCount: adultCount || 0,
                                  kidCount: kidCount || 0,
                                  petCount: petCount || 0,
                                  checkInDate: startDate,
                                  checkOutDate: endDate,
                                },
                              }}
                              style={{ textDecoration: "none" }}
                            >
                              <div className="room_reservation_btn">
                                예약하기
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 16px 0px;
  border-radius: 4px;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  width: 320px;
  height: 220px;
`;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const CalendarContents = styled(Calendar)`
  border: none;
  width: 800px;

  // 선택된 날짜들의 배경
  .react-calendar__tile--active {
    background-color: rgba(43, 118, 56, 0.3);
    // color: #76baff;
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
  .react-calendar__tile--now:focus {
    background: none;
    background-color: rgba(43, 118, 56, 0.3);
  }

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

  .react-calendar__tile:enabled:hover {
    //hover 했을 때 색상 변경
    background: var(--festie-primary-orange, rgba(43, 118, 56, 0.3));
    color: #76baff;
  }

  .react-calendar__tile:enabled:focus {
    //hover 했을 때 색상 변경
    background: var(--festie-primary-orange, rgba(43, 118, 56, 0.3));
    // color: #76baff;
  }

  .react-calendar__tile--hasActive {
    background: var(--festie-primary-orange, rgba(43, 118, 56, 0.3));
    color: #76baff;
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
