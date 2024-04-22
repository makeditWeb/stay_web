"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Script from "next/script";
import Slider from "react-slick";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function RoomDetailPage({ location }: { location: string }) {
  const [level, setLevel] = useState(8); //지도레벨
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isValid, setIsValid] = useState(false);

  const partnerStoreId = pathname.split("/")[3];
  const checkInDate: any = searchParams.get("checkInDate");
  const checkOutDate: any = searchParams.get("checkOutDate");
  const [partnerStoreData, setPartnerStoreData] = useState<any>(null);
  const [longitude, setLongitude] = useState(0); //x좌표
  const [latitude, setLatitude] = useState(0); //y좌표

  const [storyData, setStoryData] = useState<any>();
  const [storeImageData, setStoreImageData] = useState<any>([]);
  const [featureData, setFeatureData] = useState<any>([]);
  const [touristSpotData, setTouristSpotData] = useState<any>([]);
  const [noticeData, setNoticeData] = useState<any>([]);
  const [defaultNoticeData, setDefaultNoticeData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const [reservationInfoData, setReservationInfoData] = useState<any>({
    checkInDate: checkInDate || "",
    checkOutDate: checkOutDate || "",
    adultCount: 0,
    kidCount: 0,
    petCount: 0,
  }); // 예약 정보 데이터

  // 카운팅 숫자
  const [adultCount, setAdultCount] = useState(
    searchParams.get("adultCount") || 0
  );
  const [kidCount, setKidCount] = useState(searchParams.get("kidCount") || 0);
  const [petCount, setPetCount] = useState(searchParams.get("petCount") || 0);
  const [showEditBox, setShowEditBox] = useState(false);

  const handleEditClick = () => {
    setShowEditBox(true);

    if (showEditBox === true) {
      setShowEditBox(false);
    }
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

  useEffect(() => {
    customAxios.get(`${API.PARTNER_STORE}/${partnerStoreId}`).then((res) => {
      if (res !== undefined && res?.status === 200) {
        setPartnerStoreData(res.data.response);
        setLongitude(res.data.response.longitude);
        setLatitude(res.data.response.latitude);
        setStoreImageData(res.data.response.storeImages);

        const kakaoMapScript = document.createElement("script");
        kakaoMapScript.async = false;
        // kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a98d4c1b2d78b9d4e9ab8a8adc84a85b&autoload=false`;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
        document.head.appendChild(kakaoMapScript);

        const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
            var container = document.getElementById("map");
            var options = {
              center: new window.kakao.maps.LatLng(
                res.data.response.latitude,
                res.data.response.longitude
              ),
              level: 3,
            };

            var map = new window.kakao.maps.Map(container, options);
            var positions = [];
            //주변 관광지 마커 좌표
            res.data.response.touristSpotList.data.forEach((item) => {
              positions.push({
                title: item.name,
                latlng: new window.kakao.maps.LatLng(
                  item.latitude,
                  item.longitude
                ),
              });
            });

            // 마커 이미지의 이미지 주소입니다
            var imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

            for (var i = 0; i < positions.length; i++) {
              // 마커 이미지의 이미지 크기 입니다
              var imageSize = new kakao.maps.Size(24, 35);

              // 마커 이미지를 생성합니다
              var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

              // 마커를 생성합니다
              var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });

              // // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);
            }

            // // 마커가 표시될 위치입니다
            // var markerPosition = new kakao.maps.LatLng(
            //   res.data.response.latitude,
            //   res.data.response.longitude
            // );

            // // 마커를 생성합니다
            // var marker = new kakao.maps.Marker({
            //   position: markerPosition,
            // });
          });
        };

        kakaoMapScript.addEventListener("load", onLoadKakaoAPI);

        if (res.data.response.partnerStoreNoticeList != null) {
          setNoticeData(res.data.response.partnerStoreNoticeList?.data);
        } else {
          setDefaultNoticeData([
            {
              content: "등록된 공지사항이 없습니다.",
              createdAt: "-",
              id: 1,
              title: "등록된 공지사항이 없습니다.",
            },
          ]);
        }

        setStoryData({
          storyTitle: res.data.response.storyTitle,
          storyContent: res.data.response.storyContent,
        });
        setFeatureData(res.data.response.storeFeatureList.data);
        setTouristSpotData(res.data.response.touristSpotList.data);

        // document.getElementById("storyContent").innerHTML =
        //   res.data.response.storyContent;
      }
    });
  }, []);

  useEffect(() => {
    // const kakaoMapScript = document.createElement("script");
    // kakaoMapScript.async = false;
    // kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=a98d4c1b2d78b9d4e9ab8a8adc84a85b&autoload=false`;
    // document.head.appendChild(kakaoMapScript);
    // const onLoadKakaoAPI = () => {
    //   window.kakao.maps.load(() => {
    //     var container = document.getElementById("map");
    //     var options = {
    //       center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    //       level: 3,
    //     };
    //     var map = new window.kakao.maps.Map(container, options);
    //   });
    // };
    // kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  const onChangeReservationInfo = (e: any) => {
    //입실일보다 이전날짜 선택 불가
    if (e.target.name === "checkOutDate") {
      const checkInDate = new Date(reservationInfoData.checkInDate);
      const checkOutDate = new Date(e.target.value);

      if (checkInDate > checkOutDate) {
        alert("입실일보다 이전 날짜를 선택할 수 없습니다.");
        e.target.value = null;
        return;
      }
    }

    setReservationInfoData({
      ...reservationInfoData,
      [e.target.name]: e.target.value,
    });
  };

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

  const onClickReservation = (e) => {
    e.preventDefault();

    if (reservationInfoData.checkInDate === "") {
      alert("입실일을 선택해주세요.");
      return;
    }

    if (reservationInfoData.checkOutDate === "") {
      alert("퇴실일를 선택해주세요.");
      return;
    }

    if (adultCount == 0) {
      alert("인원을 선택해주세요.");
      return;
    }

    setLoading(true);
    router.push(
      `/reservation/${partnerStoreData?.id}?storeId=${partnerStoreData?.id}&storeName=${partnerStoreData?.storeName}&englishStoreName=${partnerStoreData?.storeEnglishName}&checkInDate=${reservationInfoData.checkInDate}&checkOutDate=${reservationInfoData.checkOutDate}&adultCount=${adultCount}&kidCount=${kidCount}&petCount=${petCount}`
    );
    setLoading(false);
  };

  return (
    <RoomDetailContainer>
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
        <></>
      )}
      <div style={{ position: "relative" }}>
        <div className="box_banner_container">
          <Image
            src="/DetailPageImg.png"
            alt="상세 페이지 메인 이미지"
            width={1920}
            height={850}
            style={{ width: "100vw" }}
          />
        </div>
        {/* <div style={{ height: "183px", background: "#203d1e" }}></div> */}
        <MainTitleContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="detail_main_container">
              <div className="box_detail_slider_container">
                <div className="detail_partner_store_container">
                  <div className="english_name_container">
                    {partnerStoreData?.storeEnglishName}
                  </div>
                  <div className="korean_name_container">
                    <div className="korean_name_title">
                      {partnerStoreData?.storeName}
                    </div>
                    <div>
                      {/* <div className="reservation_status_btn">예약현황 보기</div> */}
                    </div>
                  </div>
                  <div className="partner_store_description_container">
                    동해에서 가장 먼저 태양과 마주할 수 있는 곳, 스테이 인터뷰
                    강릉 나만의 스테이에엇 바다와 산이 열립니다.
                  </div>
                </div>
              </div>
              <div className="banner_container">
                <div>
                  <div className="detail_slider_container">
                    <SlickSlider {...settings}>
                      {storeImageData.map((item, index) => {
                        return (
                          <div key={index}>
                            <img
                              src={item?.imageUrl}
                              alt={item?.imageName}
                              // width={1200}
                              height={500}
                              style={{
                                borderRadius: "15px 15px 0 0",
                                margin: "auto",
                              }}
                            />
                          </div>
                        );
                      })}
                    </SlickSlider>
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
                            name="checkInDate"
                            onChange={onChangeReservationInfo}
                            value={reservationInfoData.checkInDate}
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
                            name="checkOutDate"
                            onChange={onChangeReservationInfo}
                            value={reservationInfoData.checkOutDate}
                          />
                        </div>
                      </div>
                      <div>
                        {/* <div className="reservation_info_item_div">인원</div>
                        <div className="reservation_info_item_input">
                          성인 0명 / 어린이 0명
                        </div> */}
                        <div>
                          <div className="reservation_info_item_div">인원</div>
                          <div>
                            <div
                              className="box_reservation_count"
                              onClick={handleEditClick}
                            >
                              {adultCount == 0 && kidCount == 0 && petCount == 0
                                ? "인원 입력하기"
                                : `성인 ${adultCount}명 / 어린이 ${kidCount}명 / 반려견 ${petCount}마리`}

                              <div>
                                <Image
                                  src="/editorVector.png"
                                  alt="수정버튼"
                                  width={7}
                                  height={15}
                                  style={{
                                    marginRight: "10px",
                                    cursor: "pointer",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reservation_info_item_btn_div">
                        <div
                          className="reservation_info_item_btn"
                          onClick={onClickReservation}
                        >
                          예약하기
                        </div>
                        {/* <Link
                          href={
                            isValid
                              ? {
                                  pathname: `/reservation/${partnerStoreData?.id}`,
                                  query: {
                                    storeId: partnerStoreData?.id,
                                    storeName: partnerStoreData?.storeName,
                                    englishStoreName:
                                      partnerStoreData?.storeEnglishName,
                                    checkInDate:
                                      reservationInfoData.checkInDate,
                                    checkOutDate:
                                      reservationInfoData.checkOutDate,
                                    adultCount: adultCount,
                                    kidCount: kidCount,
                                    petCount: petCount,
                                  },
                                }
                              : "#"
                          }
                          // onClick={onClickReservation}
                          // as={`/reservation/${partnerStoreData?.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="reservation_info_item_btn"
                            onClick={onClickReservation}
                          >
                            예약하기
                          </div>
                        </Link> */}
                      </div>
                      <div>
                        {showEditBox && (
                          <div className="box_outer_select_people">
                            <div className="box_select_people">
                              <div className="content_select_people">
                                <div className="title_select_people">성인</div>
                                <div className="div_number_people">
                                  <div className="container_number_poeple">
                                    <div
                                      className="btn_number_people"
                                      onClick={adultMinusCountHandler}
                                    >
                                      <Image
                                        src="/minusIcon.png"
                                        alt="마이너스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                    <div className="text_number_people">
                                      {adultCount}
                                    </div>
                                    <div
                                      className="btn_number_people"
                                      onClick={adultPlusCountHandler}
                                    >
                                      <Image
                                        src="/plusIcon.png"
                                        alt="플러스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content_select_people">
                                <div className="title_select_people">
                                  어린이
                                </div>
                                <div className="div_number_people">
                                  <div className="container_number_poeple">
                                    <div
                                      className="btn_number_people"
                                      onClick={kidMinusCountHandler}
                                    >
                                      <Image
                                        src="/minusIcon.png"
                                        alt="마이너스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                    <div className="text_number_people">
                                      {kidCount}
                                    </div>
                                    <div
                                      className="btn_number_people"
                                      onClick={kidPlusCountHandler}
                                    >
                                      <Image
                                        src="/plusIcon.png"
                                        alt="플러스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content_select_people">
                                <div className="title_select_people">
                                  반려견
                                </div>
                                <div className="div_number_people">
                                  <div className="container_number_poeple">
                                    <div
                                      className="btn_number_people"
                                      onClick={petMinusCountHandler}
                                    >
                                      <Image
                                        src="/minusIcon.png"
                                        alt="마이너스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                    <div className="text_number_people">
                                      {petCount}
                                    </div>
                                    <div
                                      className="btn_number_people"
                                      onClick={petPlusCountHandler}
                                    >
                                      <Image
                                        src="/plusIcon.png"
                                        alt="플러스 아이콘"
                                        width={45}
                                        height={45}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainTitleContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#203d1e",
            // height: "400px",
          }}
        >
          <div className="notice_container">
            <div className="notice_container_div">
              <div className="notice_title_container">
                <div className="notice_title">공지사항</div>
                {noticeData.length > 0 ? (
                  <div className="notice_btn">more</div>
                ) : (
                  ""
                )}
              </div>

              {noticeData.length > 0 ? (
                <>
                  {noticeData.map((item, index) => {
                    return (
                      <div style={{ marginBottom: "10px" }} key={index}>
                        <div className="notice_content_container">
                          <div className="notice_content">{item.title}</div>
                          <div className="notice_content_date">
                            {item.createdDate}
                          </div>
                        </div>
                        <div className="notice_content_line"></div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="notice_content_container">
                  <div className="notice_content">
                    등록된 공지사항이 없습니다.
                  </div>
                  <div className="notice_content_date"></div>
                </div>
              )}
              {/* {defaultNoticeData.map((item, index) => {
                return (
                  <div style={{ marginBottom: "10px" }} key={index}>
                    <div className="notice_content_container">
                      <div className="notice_content">{item.title}</div>
                      <div className="notice_content_date">
                        {item.createdDate}
                      </div>
                    </div>
                    <div className="notice_content_line"></div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
        <div className="story_container">
          <div className="box_story_img">
            <div className="story_img_container">
              <img src="/roomDetailImg2.png" alt="서브 이미지" height={450} />
            </div>
            <div className="story_img_container">
              <img src="/roomDetailImg3.png" alt="서브 이미지" height={450} />
            </div>
          </div>
          <div className="story_content_container">
            <div className="story_content_haed_title">
              {partnerStoreData?.storeName}
            </div>
            <div
              id="storyContent"
              className="story_item_content"
              dangerouslySetInnerHTML={{
                __html: storyData?.storyContent,
              }}
            ></div>
          </div>
        </div>
        <div className="bg_feature_container">
          <div className="box_bg_feature"></div>
          <div className="feature_container">
            <img src="/roomDetailImg4.png" alt="서브 이미지" />
            <div className="box_feature">
              {featureData.map((item, index) => {
                return (
                  <div className="feature_container_div">
                    <div className="feature_item_div">
                      <div className="feature_item_title_container">
                        <div className="feature_item_title_badge">
                          Point {index + 1}
                        </div>
                        <div className="feature_item_title_div">
                          {item.title}
                        </div>
                      </div>
                      <div className="feature_item_content_container">
                        <div className="feature_item_content_div">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tourist_spot_container">
          <div style={{ marginBottom: "15px" }}>
            <div className="tourist_spot_title_container">주변 관광지</div>
            <div className="tourist_spot_sub_container">
              <p>
                <strong>{partnerStoreData?.storeName}</strong>
              </p>
              <div>
                {partnerStoreData?.address} {partnerStoreData?.addressDetail}
              </div>
            </div>
          </div>

          <div className="tourist_spot_map_container" id="map">
            <div className="map_wrap">
              <div
                id="map"
                style={{
                  // 지도의 크기
                  width: "100%",
                  height: "350px",
                }}
              ></div>
            </div>

            {/* <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "350px",
            }}
          >
            {LOCATIONS.map((location) => (
              <MapMarker position={location} key={location.id} />
            ))}
          </Map> */}
            {/* <div className="tourist_spot_map_container" id="map">
            <div className="map_wrap">
              <Map
                // center={{ lat: latitude, lng: longitude }}
                center={{ lat: 33.450701, lng: 126.570667 }}
                style={{ width: "100%", height: "400px" }}
              >
                <MapMarker
                  position={{
                    lat: latitude,
                    lng: longitude,
                  }}
                ></MapMarker>
              </Map>
            </div> */}

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
                        <div
                          className="tourist_spot_item_content_title_div"
                          style={{ fontWeight: 700 }}
                        >
                          {item.name}
                        </div>
                        <div className="tourist_spot_item_content_title_div2">
                          {item.address} {item.addressDetail}
                        </div>
                      </div>
                      <div className="tourist_spot_item_content_content">
                        {item.description}
                        <br />
                        숙소로부터의 거리 {Math.round(item.distance * 10) /
                          10}{" "}
                        km
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            {partnerStoreData?.storeName}
          </div>
          <div
            className="partenrs_store_contact_content_container"
            style={{ fontWeight: "700" }}
          >
            {partnerStoreData?.phone != null
              ? String(partnerStoreData?.phone).replace(
                  /^(\d{2,3})(\d{3,4})(\d{4})$/,
                  `$1-$2-$3`
                )
              : ""}
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

  .slick-slide img {
    margin: 0px;
    // max-width: 1200px;
    width: 100% !important;
    // height: 520px;
    // object-fit: contain;
  }

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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
