"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Mainpage() {
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

  const pathName = usePathname();

  return (
    <IndexContainter>
      <div style={{ width: "100%", height: "950px" }}>
        <Image src="/mainImg.png" alt="대문 사진" width={1920} height={950} />
      </div>
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
                <ReservationStatus>예약현황 바로가기</ReservationStatus>
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
        {/* <MainImgDiv>
          <BigImgDiv>
            <Image
              src="/indexImg.png"
              alt="임시 이미지"
              width={500}
              height={600}
            />
            <ReservationStatus>예약현황 바로가기</ReservationStatus>
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
        </MainImgDiv> */}

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
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
            <HotelContainer>
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
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>

                  <Link
                    href={{ pathname: "/roomDetail" }}
                    style={{ textDecoration: "none" }}
                  >
                    <DetailPostButton>둘러보기 →</DetailPostButton>
                  </Link>
                </HotelContents>
              </div>
            </HotelContainer>
          </HotelListContainer>
        </div>
      </IndexBottomContainer>
    </IndexContainter>
  );
}

const IndexContainter = styled.div`
  width: 1920px;
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
  margin-top: 12px;
  width: 70px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 10px;
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

// 화살표

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div style={{ width: "80px" }} className={className} onClick={onClick}>
      <Image src="/leftArrow.png" alt="왼쪽화살표" width={50} height={50} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image src="/rightArrow.png" alt="오른쪽 화살표" width={50} height={50} />
    </div>
  );
};

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
