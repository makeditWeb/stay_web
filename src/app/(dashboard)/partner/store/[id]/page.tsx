"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Slider from "react-slick";
import { useRouter, usePathname } from "next/navigation";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import "react-kakao-maps-sdk";

export default function RoomDetailPage({ location }: { location: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const partnerStoreId = pathname.split("/")[3];
  const [partnerStoreData, setPartnerStoreData] = useState<any>(null);
  const [touristSpotData, setTouristSpotData] = useState<any>([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const [noticeData, setNoticeData] = useState<any>([{}, {}, {}]);

  console.log("partnerStoreData   :   ", partnerStoreData);

  useEffect(() => {
    customAxios.get(`${API.PARTNER_STORE}/${partnerStoreId}`).then((res) => {
      if (res !== undefined && res?.status === 200) {
        setPartnerStoreData(res.data.response);
      }
    });
  }, []);

  useEffect(() => {
    // 1. 카카오 지도 초기화
    // kakao.maps.load(() => {
    //   // 2. 지도 생성 및 설정
    //   const container = document.getElementById("map");
    //   const options = {
    //     center: new kakao.maps.LatLng(33.450701, 126.570667),
    //     level: 3,
    //   };
    //   const map = new kakao.maps.Map(container as HTMLElement, options);
    //   let geocoder = new kakao.maps.services.Geocoder(); // 3. 주소-좌표 변환 객체 생성
    //   // 4. 지도 상에 주소를 표시
    //   geocoder.addressSearch(location, function (result, status) {
    //     if (status === kakao.maps.services.Status.OK) {
    //       // 5. 결과값으로 받은 위치를 마커로 표시
    //       const latitude: number = Number(result[0].y);
    //       const longitude: number = Number(result[0].x);
    //       let coords = new kakao.maps.LatLng(latitude, longitude);
    //       // 결과값으로 받은 위치를 마커로 표시
    //       let marker = new kakao.maps.Marker({
    //         map: map,
    //         position: coords,
    //       });
    //       var infowindow = new kakao.maps.InfoWindow({
    //         content: `<div style="width:300px;text-align:center;padding:6px 0;">${location}</div>`,
    //       });
    //       infowindow.open(map, marker);
    //       // 6. 지도의 중심을 결과값으로 받은 위치로 이동
    //       map.setCenter(coords);
    //     }
    //   });
    // });
  }, [location]);

  const settings = {
    dots: false,
    infintie: true,
    useTransform: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <StyledImage
        src="/leftVector.png"
        alt="Previous"
        width={20}
        height={40}
      />
    ),
    nextArrow: (
      <StyledImage src="/rightVector.png" alt="Next" width={20} height={40} />
    ),
  };

  return (
    <RoomDetailContainer>
      <div style={{ position: "relative" }}>
        <div style={{ height: "850px" }}>
          <Image
            src="/DetailPageImg.png"
            alt="상세 페이지 메인 이미지"
            width={1920}
            height={850}
            style={{ width: "100vw" }}
          />
        </div>
        <div style={{ height: "400px", background: "#203d1e" }}></div>
        <MainTitleContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="detail_main_container">
              <div className="detail_partner_store_container">
                <div className="english_name_container">
                  STAY INTERVIEW, Gangnenung
                </div>
                <div className="korean_name_container">
                  <div className="korean_name_title">스테이인터뷰, 강릉</div>
                  <div>
                    <div className="reservation_status_btn">예약현황 보기</div>
                  </div>
                </div>
                <div className="partner_store_description_container">
                  동해에서 가장 먼저 태양과 마주할 수 있는 곳, 스테이 인터뷰
                  강릉 나만의 스테이에엇 바다와 산이 열립니다.
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <div className="detail_slider_container">
                  <SlickSlider {...settings}>
                    <div>
                      <img
                        src="/roomDetailImg2.png"
                        alt="슬라이더1"
                        // width={1200}
                        height={500}
                        style={{
                          borderRadius: "15px 15px 0 0",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div>
                      <img
                        src="/roomDetailImg3.png"
                        alt="슬라이더1"
                        // width={1200}
                        height={500}
                        style={{
                          borderRadius: "15px 15px 0 0",
                          margin: "auto",
                        }}
                      />
                    </div>
                    <div>
                      <img
                        src="/roomDetailImg4.png"
                        alt="슬라이더1"
                        // width={1200}
                        height={500}
                        style={{
                          width: "100%",
                          borderRadius: "15px 15px 0 0",
                          margin: "auto",
                        }}
                      />
                    </div>
                  </SlickSlider>
                  {/* <Image
                src="/roomDetailImg.png"
                alt="상세 페이지 메인 이미지"
                width={1200}
                height={550}
              /> */}
                </div>
                <div className="reservation_info_container">
                  <div className="reservation_info_div">
                    <div>
                      <div className="reservation_info_item_div">입실일</div>
                      <div>
                        <input
                          className="reservation_info_item_input"
                          type="date"
                          id="date"
                          // value={selectedDate}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="reservation_info_item_div">퇴실일</div>
                      <div>
                        <input
                          className="reservation_info_item_input"
                          type="date"
                          id="date"
                          // value={selectedDate}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="reservation_info_item_div">인원</div>
                      <div className="reservation_info_item_input">
                        성인 0명 / 어린이 0명
                      </div>
                    </div>
                    <div className="reservation_info_item_btn_div">
                      <Link
                        href={{ pathname: "/reservation" }}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="reservation_info_item_btn">
                          예약하기
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="notice_container">
              <div className="notice_container_div">
                <div className="notice_title_container">
                  <div className="notice_title">공지사항</div>
                  <div className="notice_btn">more</div>
                </div>
                {noticeData.map((item, index) => {
                  return (
                    <div style={{ marginBottom: "10px" }}>
                      <div className="notice_content_container">
                        <div className="notice_content">
                          숙소 공지사항 내용 제목 출력 숙소 공지사항 내용 제목
                          숙소 공지사항 내용 제목 출력 숙소 공지사항 내용 제목
                          출력
                        </div>
                        <div className="notice_content_date">2024.02.19</div>
                      </div>
                      <div className="notice_content_line"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MainTitleContainer>
        <div className="story_container">
          <div style={{ marginTop: "50px", marginBottom: "80px" }}>
            <div className="story_img_container">
              <img src="/roomDetailImg2.png" alt="서브 이미지" height={450} />
            </div>
            <div className="story_img_container">
              <img src="/roomDetailImg3.png" alt="서브 이미지" height={450} />
            </div>
          </div>
          <div className="story_content_container">
            <div className="story_content_haed_title">스테이인터뷰, 강릉</div>
            <div className="story_item_title">
              동해에서 가장 먼저 태양과 마주할 수 있는 곳. <br />
              스테이 인터뷰 강릉 <br />
              나만의 스테이에서 바다와 산이 열린다
            </div>
            <div className="story_item_content">
              동해안을 따라 남쪽으로 가다 보면 초록 솔향과 청량한 바닷바람을
              가르는 곳이 있다.
              <br /> 층층의 하얀색 외벽과 비대칭 지붕이 풍광과 아름다운 조화를
              이룬 스테이인터뷰 강릉.
              <br /> 해안 협곡에 자리한 덕분에 시시각각 변하는 자연의 빛과
              파도소리의 움직임이 여행자를 따라다닌다
            </div>
            <div className="story_item_title">
              일출이 아름다운 모든 객실은 <br />
              개방감을 극대화한 통창이 설치 되어 있어
              <br /> 동해의 일출을 직접 마주할 수 있다.
            </div>
            <div className="story_item_content">
              창 넘어 번지는 붉은 빛은 고단함에 지친 몸과 마음을 채우고 따뜻한 
              휴식을 선사한다. 숙소를 나와 한 걸음을 떼면 천혜의 포토존으로
              가득찬 공간이 펼쳐진다. <br />
              오두막 사이로 보이는 해변을 배경으로 남기는 사진 한장.
              <br /> 누르는 셔터마다 감성을 듬뿍 채우는 아름다운 풍경은
              누군가에게 잊지 못할 기록으로  남는다.
            </div>
            <div className="story_item_title">
              동해에서 가장 먼저 태양과 마주할 수 있는 곳.
              <br /> 스테이 인터뷰 강릉 <br />
              나만의 스테이에서 바다와 산이 열린다
            </div>
            <div className="story_item_content">
              동해안을 따라 남쪽으로 가다 보면 초록 솔향과 청량한 바닷바람을
              가르는 곳이 있다.
              <br /> 층층의 하얀색 외벽과 비대칭 지붕이 풍광과 아름다운 조화를
              이룬 스테이인터뷰 강릉.
              <br /> 해안 협곡에 자리한 덕분에 시시각각 변하는 자연의 빛과
              파도소리의 움직임이 여행자를 따라다닌다.
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              // width: "1920px",
              width: "100vw",
              height: "650px",
            }}
          >
            <Image
              src="/roomDetailImg4.png"
              alt="서브 이미지"
              width={1920}
              height={650}
              style={{ width: "100vw" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="feature_container">
              <div className="feature_container_div">
                <div className="feature_item_div">
                  <div className="feature_item_title_container">
                    <div className="feature_item_title_badge">Point 1</div>
                    <div className="feature_item_title_div">포토존</div>
                  </div>
                  <div className="feature_item_content_container">
                    <div className="feature_item_content_div">
                      아름다운 동해바다를 배경으로 멋진사진을 남길 수 있는
                      곳입니다. 사랑하는 사람과 함께 예쁘고 행복한 추억을
                      남겨보세요.
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature_container_div">
                <div className="feature_item_div">
                  <div className="feature_item_title_container">
                    <div className="feature_item_title_badge">Point 2</div>
                    <div className="feature_item_title_div">오션뷰</div>
                  </div>
                  <div className="feature_item_content_container">
                    <div className="feature_item_content_div">
                      전 객실에서 바다가 보이는 스테이인터뷰는 일출명소입니다.
                      <br />
                      머무는 공간에서 일출을 맞이해보세요. <br />
                      여행에 또 다른 추억과 생각지 못했던 큰 선물이 될것입니다
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature_container_div3">
                <div className="feature_item_div">
                  <div className="feature_item_title_container">
                    <div className="feature_item_title_badge">Point 3</div>
                    <div className="feature_item_title_div">웰컴드링크</div>
                  </div>
                  <div className="feature_item_content_container">
                    <div className="feature_item_content_div">
                      저희 스테이인터뷰를 예약해주신 모든 고객님들께 커피를
                      드리고 있습니다.
                      <br /> 아름다운 자연과 함께 커피한잔 즐겨보세요
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tourist_spot_container">
          <div style={{ marginBottom: "15px" }}>
            <div className="tourist_spot_title_container">주변 관광지</div>
            <div className="tourist_spot_sub_container">
              <div style={{ fontWeight: "600" }}>스테이인터뷰 강릉</div>
              <div>강원 강릉시 강동면 율곡로 1458</div>
            </div>
          </div>
          <div className="tourist_spot_map_container" id="map">
            {/* <Image src="/map.png" alt="지도" width={1200} height={400} /> */}
          </div>

          <div className="tourist_spot_content_container">
            {touristSpotData.map((item, index) => {
              return (
                <div className="tourist_spot_item_container">
                  <div className="tourist_spot_item_div">
                    <div className="tourist_spot_no_div">{index + 1}</div>
                    <div className="tourist_spot_item_content_div">
                      <div className="tourist_spot_item_content_title">
                        <div className="tourist_spot_item_content_title_div">
                          동명해변
                        </div>
                        <div className="tourist_spot_item_content_title_div2">
                          강원 강릉시 강동면 정동신리 490-2
                        </div>
                      </div>
                      <div className="tourist_spot_item_content_content">
                        기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                        숙소로부터의 거리 0.4 km
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="partenrs_store_contact_container">
          <div className="partenrs_store_contact_container_div mr-b-15">
            <div
              className="partenrs_store_contact_content_container"
              style={{ fontWeight: "700" }}
            >
              예약 및 환불 문의
            </div>
            <div className="partenrs_store_contact_content_container">
              RESERVATION
            </div>
          </div>
          <div className="partenrs_store_contact_container_div">
            <div className="partenrs_store_contact_content_container ">
              스테이인터뷰, 강릉
            </div>
            <div
              className="partenrs_store_contact_content_container"
              style={{ fontWeight: "700" }}
            >
              010-2517-2160
            </div>
          </div>
        </div>
      </div>
    </RoomDetailContainer>
  );
}

const RoomDetailContainer = styled.div`
  // width: 1920px;
  margin: auto;
`;

const MainTitleContainer = styled.div`
  // width: 1200px;
  width: 100%;
  position: absolute;
  top: 50px;
  height: 897px;
`;

const SlickSlider = styled(Slider)`
  border-radius: 15px 0 15px 0;

  .slick-prev:before,
  .slick-next:before {
    display: none;
  }

  .slick-dots {
    display: none;
    li button {
      &:before {
        color: #000000; /* dots 색상 변경 */
        font-size: 20px !important; /* dots 크기 변경 */
      }
    }
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1; /* 화살표가 슬라이드 위에 오도록 */
    /* left 또는 right 값으로 위치 조정 */
  }

  .slick-prev {
    left: -50px; /* 좌측 여백 조정 */
  }

  .slick-next {
    right: -50px; /* 우측 여백 조정 */
  }
`;

// 슬라이드 화살표 이미지
const StyledImage = styled(Image)`
  /* 여기에 스타일을 추가하세요 */
  width: 20px; /* 원하는 크기로 조정 */
  height: 40px; /* 원하는 크기로 조정 */
  position: absolute; /* 원하는 위치로 조정하기 위해 절대 위치 지정 */
  top: 50%; /* 원하는 위치로 조정 */
  transform: translateY(-50%); /* 세로 가운데 정렬 */
`;
