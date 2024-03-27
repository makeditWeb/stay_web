"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Slider from "react-slick";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
// import "slick-carousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

export default function Mainpage() {
  const [partnerStoreList, setPartnerStoreList] = useState([]);
  const router = useRouter();
  const pathName = usePathname();

  const settings = {
    dots: true,
    infintie: true,
    useTransform: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: false,
  };

  useEffect(() => {
    customAxios.get(`${API.PARTNER_STORE}`).then((res) => {
      if (res?.status === 200) {
        setPartnerStoreList(res.data.response.data);
      }
    });
  }, []);

  const serverAuth = () => {
    if (typeof window !== "undefined") {
      const pay_obj = window;
      const { AUTHNICE } = pay_obj;

      goPay(document.payForm);
    }
  };

  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };

  const handlePagePartnerStore = (e: any) => {
    const partnerStoreId = e.target.id;
    router.push(`/partner/store/${partnerStoreId}`);
  };

  return (
    <IndexContainter>
      <Script
        src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
        type="text/javascript"
      />
      {/* <Script src="https://pay.nicepay.co.kr/v1/js/"></Script> */}
      <form name="payForm" method="post" acceptCharset="euc-kr">
        <input
          type="hidden"
          name="GoodsName"
          value={"스테이인터뷰, 하늘"}
        ></input>
        <input type="hidden" name="Amt" value={"1000"}></input>
        <input type="hidden" name="MID" value="Kwonstay1m"></input>
        <input type="hidden" name="EdiDate" value={"20240326101200"}></input>
        <input type="hidden" name="Moid" value={"HN1213"}></input>
        <input
          type="hidden"
          name="SignData"
          value={
            "4A87F00CA9284114B8F3EC6D9FA65D56D62EAD079735ACEDD7F0D36A7CA93D9E"
          }
        ></input>
        <input type="hidden" name="PayMethod" value={"CARD"}></input>
        <input
          type="hidden"
          name="ReturnURL"
          value={"http://localhost:9000/api/v1/nice-pay"}
        ></input>
        <input
          type="hidden"
          name="MerchantKey"
          value={
            "VEssZGW19yqVwVXhJ5x4VdzDRtAxBkAE7ZratupXmYglgn2jjCatUduvIlk9J1fXMo9VSDye/qGGnnJr+RrKdA=="
          }
        ></input>
      </form>
      <div style={{ width: "100%", height: "950px" }}>
        <img
          src="/image/main/main.png"
          alt="main_top"
          style={{ width: "100vw", height: "953px" }}
        />
      </div>
      <button onClick={() => serverAuth()}>serverAuth 결제하기</button>

      <SliderContainer>
        <SlickSlider {...settings}>
          <div>
            <MainImgDiv style={{ borderRadius: "15px" }}>
              <BigImgDiv>
                <Image
                  src="/indexImg.png"
                  alt="임시 이미지"
                  width={500}
                  height={600}
                />
                <Link
                  href={{ pathname: "/reservation" }}
                  style={{ textDecoration: "none" }}
                >
                  <ReservationStatus>예약현황 바로가기</ReservationStatus>
                </Link>
              </BigImgDiv>
              <SubImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg1.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg2.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg3.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg1.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg3.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
                <SmallImgDiv>
                  <Image
                    src="/indexImg1.png"
                    alt="임시 이미지"
                    width={350}
                    height={200}
                  />
                </SmallImgDiv>
              </SubImgDiv>
            </MainImgDiv>

            {/* <Image
              src="/roomDetailImg2.png"
              alt="슬라이더1"
              width={1200}
              height={500}
              style={{ borderRadius: "15px" }}
            /> */}
          </div>
          <div>
            <Image
              src="/roomDetailImg3.png"
              alt="슬라이더1"
              width={1200}
              height={600}
              style={{ borderRadius: "15px" }}
            />
          </div>
          <div>
            <Image
              src="/roomDetailImg4.png"
              alt="슬라이더1"
              width={1200}
              height={600}
              style={{ borderRadius: "15px" }}
            />
          </div>
        </SlickSlider>
      </SliderContainer>
      <IndexBottomContainer>
        <div style={{ width: "1200px", margin: "auto", marginTop: "150px" }}>
          <div style={{ display: "flex", marginBottom: "50px" }}>
            <div
              style={{ fontSize: "32px", fontWeight: "700", color: "#203d1e" }}
            >
              OUR STAY
            </div>
            <HotelListText>스테이인터뷰의 숙소들</HotelListText>
          </div>
          <HotelListContainer>
            {partnerStoreList?.map((item, index) => {
              return (
                <>
                  <HotelContainer key={index}>
                    <div style={{ width: "370px", height: "230px" }}>
                      <Image
                        src="/hotelListImg.png"
                        alt="임시 이미지"
                        width={370}
                        height={230}
                      />
                    </div>
                    <div style={{ display: "flex", marginTop: "45px" }}>
                      <HotelContents>
                        <div>
                          <div style={{ fontSize: "18px", fontWeight: "700" }}>
                            {item?.storeName}
                          </div>
                          <div style={{ fontSize: "12px", fontWeight: "300" }}>
                            {item?.address}
                          </div>
                        </div>

                        <DetailPostButton
                          id={item.id}
                          onClick={handlePagePartnerStore}
                        >
                          둘러보기 →
                        </DetailPostButton>
                      </HotelContents>
                    </div>
                  </HotelContainer>
                </>
              );
            })}
          </HotelListContainer>
        </div>
      </IndexBottomContainer>
    </IndexContainter>
  );
}

const IndexContainter = styled.div`
  // width: 1920px;
  width: 100vw;
  margin: auto;
`;

const IndexBottomContainer = styled.div``;

const MainImgDiv = styled.div`
  display: flex;
  width: 1200px;
  height: 600px;
  border-radius: 20px;
`;

const HotelListText = styled.div`
  display: flex;
  margin-left: 30px;
  font-size: 19px;
  font-weight: 300;
  color: #162318;
  align-items: center;
`;

const HotelListContainer = styled.div`
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;

const HotelContainer = styled.div`
  width: 370px;
  height: 350px;
  border: 1px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

const HotelContents = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
  justify-content: space-between;
`;

const DetailPostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  width: 74px;
  height: 27px;
  border: 0.5px solid #000000;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 300;
  color: #000000;
  cursor: pointer;
`;

const SubImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BigImgDiv = styled.div`
  width: 500px;
  position: relative;
`;

const ReservationStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 109px;
  bottom: 45px;
  width: 280px;
  height: 45px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
`;

const SmallImgDiv = styled.div`
  width: 350px;
  height: 200px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 1200px;
    margin: auto;
  }
`;

const SliderContainer = styled.div`
  width: 1200px;
  height: 600px;
  margin: auto;
  border-radius: 15px;
  margin-top: 100px;
`;

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

// 이미지
const StyledImage = styled(Image)`
  /* 여기에 스타일을 추가하세요 */
  width: 50px; /* 원하는 크기로 조정 */
  height: 80px; /* 원하는 크기로 조정 */
  position: absolute; /* 원하는 위치로 조정하기 위해 절대 위치 지정 */
  top: 50%; /* 원하는 위치로 조정 */
  transform: translateY(-50%); /* 세로 가운데 정렬 */
`;
