import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const OurStayTabContents = ({ tabNumber }) => {
  if (tabNumber === 1) {
    return (
      <>
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
      </>
    );
  } else if (tabNumber === 2) {
    return (
      <>
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
      </>
    );
  } else if (tabNumber === 3) {
    return (
      <>
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
      </>
    );
  } else if (tabNumber === 4) {
    return (
      <>
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
      </>
    );
  } else if (tabNumber === 5) {
    return (
      <>
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
      </>
    );
  } else if (tabNumber === 6) {
    return (
      <>
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
      </>
    );
  } else {
    return null;
  }
};

export default OurStayTabContents;

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
