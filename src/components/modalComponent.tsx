import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import styled from "styled-components";
import ModalTabContents from "./ModalTabContents";
import Slider from "react-slick";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
// import Loading from "@/components/common/loading";
// import "slick-carousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ModalComponent = ({ isOpen, closeModal, id, roomData }) => {
  const settings = {
    dots: true,
    infintie: true,
    useTransform: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeTab, setActiveTab] = useState(1);
  const [roomDetail, setRoomDetail] = useState(roomData);
  const [loading, setLoading] = useState(false);
  const [roomInfoData, setRoomInfoData] = useState();

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    setLoading(true);
    customAxios.get(`${API.ROOM}/${roomDetail.id}`).then((res) => {
      console.log(`${API.ROOM}/${roomDetail.id} :: 111`, res.data.response);

      setRoomDetail(res.data.response);
      setRoomInfoData(res.data.response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 방지
    } else {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 허용
    }

    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트가 언마운트될 때 스크롤 허용
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="상세 보기 모달"
    >
      <div className="r_dm_content">
        {loading === true ? (
          <>
            <div
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
                background: "#ffffffb7",
                zIndex: 99999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  font: "1rem Noto Sans KR",
                  textAlign: "center",
                }}
              >
                잠시만 기다려 주세요.
              </div>
              <img
                src={"/assets/loading/spinner_green.gif"}
                alt="로딩중"
                width="10%"
              />
            </div>
          </>
        ) : null}
        <div className="box_colse_btn">
          <div className="close_btn_section" onClick={closeModal}>
            <img
              className="close_btn_img"
              src="/closeBtn.png"
              alt="닫기버튼"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="container_room_detail_top">
          <div className="box_title_top">
            <div className="box_title">{roomDetail.name}</div>
            <div className="box_subtitle">
              기준 {roomDetail.roomTypeVo?.standardPeopleCount}인 (최대{" "}
              {roomDetail.roomTypeVo?.maximumPersonnelCount}인)
            </div>
          </div>
          <div className="box_description">{roomData.description}</div>
        </div>
        <div className="box_room_banner">
          <SlickSlider {...settings}>
            {roomDetail.imageList.map((item, index) => {
              return (
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.imageName}
                    // style={{ borderRadius: "15px 15px 0 0" }}
                  />
                </div>
              );
            })}
          </SlickSlider>
        </div>
        <div className="box_room_basic">
          <div className="title_room_info">객실정보</div>
          <div>
            <div className="box_check_in_out">
              <div className="title_room_badge">체크인</div>
              <div className="time_check_in_out">
                {roomDetail.checkIn?.substring(0, 2)}:
                {roomDetail.checkIn?.substring(2, 4)}
              </div>
            </div>
            <div className="box_check_in_out">
              <div className="title_room_badge">체크아웃</div>
              <div className="time_check_in_out">
                {roomDetail.checkOut?.substring(0, 2)}:
                {roomDetail.checkOut?.substring(2, 4)}
              </div>
            </div>
            <div className="box_standard_person">
              <div className="title_room_badge">기준인원</div>
              <div>
                <div className="text_standard_person">
                  {roomDetail.roomTypeVo?.standardPeopleCount}인 (최대인원
                  {roomDetail.roomTypeVo?.maximumPersonnelCount}인)
                </div>
                <div className="text_add_person">
                  성인 인원 추가(30,000원)시 추가 침구 무료 제공
                </div>
              </div>
            </div>
            <div className="box_additional_person_fee">
              <div className="title_additional_person_fee">추가 인원 요금</div>
              <div className="container_additional_rate">
                <div className="box_rate">
                  <div className="title_additional_target">성인(14세 이상)</div>
                  <div className="title_additional_target">아동</div>
                  <div className="title_additional_target">유아</div>
                </div>
                <div className="box_additional_amount">
                  <div className="content_additional_amount">
                    30,000 (침구 제공)
                  </div>
                  <div className="content_additional_amount">
                    무료 (이불 미포함)
                  </div>
                  <div className="content_additional_amount">
                    무료 (이불 미포함)
                  </div>
                </div>
              </div>
            </div>
            <div className="box_room_size">
              <div className="title_room_badge">면적</div>
              <div className="content_room_size">
                {roomDetail.roomTypeVo?.size != null
                  ? roomDetail.roomTypeVo?.size + ".00 ㎡"
                  : ""}
              </div>
            </div>
            <div className="box_room_bed">
              <div className="title_room_badge">침대</div>
              <div className="content_room_bed">
                {roomDetail.roomTypeVo?.bedQueenSizeCount !== undefined
                  ? "퀸 사이즈 " + roomDetail.roomTypeVo?.bedQueenSizeCount
                  : ""}
                {roomDetail.roomTypeVo?.bedKingSizeCount !== undefined
                  ? " / 킹 사이즈 " + roomDetail.roomTypeVo?.bedKingSizeCount
                  : ""}
                {roomDetail.roomTypeVo?.bedSingleSizeCount !== undefined
                  ? " / 싱글 사이즈 " +
                    roomDetail.roomTypeVo?.bedSingleSizeCount
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_room_facilities">
          <div className="title_room_facilities">공용시설</div>
          <div className="content_room_facilities">
            {roomDetail.publicFacilityList?.map((item, index) => {
              return (
                <div className="box_facilities_item">
                  <div>
                    <img
                      className="img_room_facilities"
                      src={item.imageUrl}
                      alt={item.name}
                    />
                  </div>
                  <div className="text_room_facilities">{item?.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_room_facilities">
          <div className="title_room_facilities">구비시설</div>
          <div>
            <div className="content_room_facilities">
              {roomDetail.facilitiesList?.map((item, index) => {
                return (
                  <div className="box_facilities_item">
                    <div>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img_room_facilities"
                      />
                    </div>
                    <div className="text_room_facilities">{item?.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_room_facilities">
          <div className="title_room_facilities">어메니티</div>
          <div className="content_room_facilities">
            {roomDetail.amenitiesList?.map((item, index) => {
              return (
                <>
                  <div>
                    <div className="text_room_facilities">{item?.name}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_room_facilities">
          <div className="title_room_facilities">서비스 및 옵션</div>
          <div>
            <div className="content_room_service">
              {roomDetail.serviceList?.length > 0 ? (
                <div className="title_room_badge">서비스</div>
              ) : (
                <> </>
              )}

              <div className="box_room_service">
                {roomDetail.serviceList?.map((item, index) => {
                  return (
                    <>
                      <div>
                        <div className="text_room_service">{item?.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="content_room_service">
              <div className="title_room_badge">옵션</div>
              <div>
                {roomDetail.roomOptionList?.map((item, index) => {
                  return (
                    <>
                      <div className="text_room_option">
                        {item?.optionName} ({item.price} 원 / 선택 시에만 제공)
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_room_facilities">
          <div className="title_room_facilities">지점 상세 정보</div>
          <div>
            <div className="content_room_service">
              <div className="title_room_badge">대표자</div>
              <div className="text_partner_store_info">
                {roomDetail.ceoName}
              </div>
            </div>
            <div className="content_room_service">
              <div className="title_room_badge">연락처</div>
              <div className="text_partner_store_info">
                {roomDetail.ceoPhone != null
                  ? String(roomDetail.ceoPhone).replace(
                      /^(\d{2,3})(\d{3,4})(\d{4})$/,
                      `$1-$2-$3`
                    )
                  : ""}
              </div>
            </div>
            <div className="content_room_service">
              <div className="title_room_badge">소재지</div>
              <div className="text_partner_store_info">
                {roomDetail.address} {roomDetail.addressDetail}
              </div>
            </div>
            <div className="content_room_service">
              <div className="title_room_badge">이메일</div>
              <div className="text_partner_store_info">{roomDetail.email}</div>
            </div>
          </div>
        </div>
        <div className="box_line"></div>
        <div className="box_guide">
          <TabBtn
            className="btn_tab_guide"
            active={activeTab === 1}
            onClick={() => handleTabClick(1)}
          >
            인원 및 금액
          </TabBtn>
          <TabBtn
            className="btn_tab_guide"
            active={activeTab === 2}
            onClick={() => handleTabClick(2)}
          >
            예약 및 결제
          </TabBtn>
          <TabBtn
            className="btn_tab_guide"
            active={activeTab === 3}
            onClick={() => handleTabClick(3)}
          >
            시설 안내
          </TabBtn>
          <TabBtn
            className="btn_tab_guide"
            active={activeTab === 4}
            onClick={() => handleTabClick(4)}
          >
            서비스 안내
          </TabBtn>
        </div>
        <div className="content_guide">
          <ModalTabContents
            tabNumber={activeTab}
            guideList={roomDetail.guideList}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalComponent;

const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 500px;
  overflow-y: auto;
`;

const ModalContents = styled.div`
  width: 1200px;
  margin: auto;
  background: #ffffff;
  border-radius: 46px;
  overflow-y: auto;
  padding: 80px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

interface TabBtnProps {
  active: boolean;
}

const TabBtn = styled.div<TabBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 46px;
  border: ${(props) => (props.active ? "none" : "3px solid #f2f2f2")};
  border-radius: 15px;
  background: ${(props) => (props.active ? "#203D1E" : "#ffffff")};
  // font-size: 20px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "#ffffff" : "#C3C3C3")};
  cursor: pointer;
`;

// 모달
const SlickSlider = styled(Slider)`
  border-radius: 15px;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots {
    li button {
      &:before {
        color: #203d1e; /* dots 색상 변경 */
        font-size: 22px !important; /* dots 크기 변경 */
        margin-top: 25px;
      }
    }
  }

  .slick-prev,
  .slick-next {
    display: none;
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1; */
    /* left 또는 right 값으로 위치 조정 */
  }

  .slick-prev {
    left: -50px; /* 좌측 여백 조정 */
  }

  .slick-next {
    right: -50px; /* 우측 여백 조정 */
  }
`;
