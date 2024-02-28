"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Mainpage() {
  const pathName = usePathname();

  return (
    <IndexContainter>
      <div style={{ width: "100%", height: "950px" }}>
        <Image src="/mainImg.png" alt="대문 사진" width={1920} height={950} />
      </div>
      <IndexBottomContainer>
        <MainImgDiv>
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
  border: 1px;
  border-radius: 20px;
  overflow: hidden;
  margin: auto;
  margin-top: 100px;
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
