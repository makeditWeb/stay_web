"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Mainpage() {
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: "109px",
                bottom: "45px",
                width: "280px",
                height: "45px",
                border: "1px solid #ffffff",
                borderRadius: "6px",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              예약현황 바로가기
            </div>
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
            <div
              style={{
                display: "flex",
                marginLeft: "30px",
                fontSize: "19px",
                fontWeight: "300",
                color: "#162318",
                alignItems: "center",
              }}
            >
              스테이인터뷰의 숙소들
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "45px",
              flexWrap: "wrap",
              marginBottom: "150px",
            }}
          >
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "370px",
                height: "350px",
                border: "1px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div style={{ width: "370px", height: "230px" }}>
                <Image
                  src="/hotelListImg.png"
                  alt="임시 이미지"
                  width={370}
                  height={230}
                />
              </div>
              <div style={{ display: "flex", marginTop: "45px" }}>
                <div
                  style={{
                    display: "flex",
                    width: "300px",
                    margin: "auto",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      스테이인텁, 영동
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "300" }}>
                      제주특별자치도 서귀포시 중문관광로 288
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "12px",
                      width: "70px",
                      height: "20px",
                      border: "1px solid #000000",
                      borderRadius: "15px",
                      fontSize: "10px",
                      fontWeight: "300",
                    }}
                  >
                    둘러보기 →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IndexBottomContainer>
    </IndexContainter>
  );
}

const IndexContainter = styled.div``;

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

const SubImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BigImgDiv = styled.div`
  width: 500px;
  position: relative;
`;

const SmallImgDiv = styled.div`
  width: 350px;
  height: 200px;
`;
