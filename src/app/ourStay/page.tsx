"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function OurStayPage() {
  return (
    <OurStayContainer>
      <div style={{ position: "relative", width: "100vw", height: "750px" }}>
        <Image
          src="/ourStayImg.png"
          alt="대표 이미지"
          style={{ width: "100vw", height: "750px" }}
          width={1920}
          height={750}
        />
        <div
          style={{
            width: "500px",
            height: "320px",
            position: "absolute",
            left: "42%",
            top: "225px",
            borderRadius: "15px",
            color: "#ffffff",
            background: "rgba(40, 19, 10, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "16px",
              fontWeight: "300",
              marginTop: "50px",
            }}
          >
            일상으로 부터의 피신처
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "35px",
              fontWeight: "700",
              marginTop: "20px",
            }}
          >
            스테이인터뷰, 태안
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "500px",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "30px",
              marginTop: "20px",
            }}
          >
            고요하고 편안함을 주는 풍광속의 스테이인터뷰 태안.
            <br />그 분위기 속에서 쉼의 마침표를 찍어보자.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "32px",
              fontSize: "15px",
              fontWeight: "700",
              border: "1px solid #ffffff",
              borderRadius: "15px",
              marginTop: "30px",
              margin: "auto",
            }}
          >
            둘러보기 →
          </div>
        </div>
      </div>
      <div
        style={{
          width: "1200px",
          margin: "auto",
          marginTop: "40px",
        }}
      >
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
        </HotelListContainer>
      </div>
    </OurStayContainer>
  );
}

const OurStayContainer = styled.div`
  // width: 1920px;
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
