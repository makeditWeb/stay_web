"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ReservationPage() {
  return (
    <ReservationContainer>
      <div
        style={{
          display: "flex",
          width: "600px",
          height: "1100px",
          position: "relative",
        }}
      >
        <Image
          src="/reservationImg.png"
          alt="예약 이미지"
          width={600}
          height={1100}
        />
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "85px",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              fontWeight: "200",
              marginBottom: "20px",
            }}
          >
            STAY INTERVIEW, Gangneung
          </div>
          <div
            style={{
              fontSize: "50px",
              fontWeight: "700",
              marginBottom: "120px",
            }}
          >
            스테이 인터뷰, 강릉
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            인원 선택
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "430px",
              height: "240px",
              background: "rgba(255, 255, 255, 0.75)",
              color: "#203d1e",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "300",
                  }}
                >
                  성인
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "260px",
                    height: "55px",
                    background: "#ffffff",
                    border: "1px solid #203d1e",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      margin: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "250px",
                    }}
                  >
                    <div style={{ width: "45px", height: "45px" }}>
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        width={45}
                        height={45}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div style={{ fontSize: "25px", fontWeight: "600" }}>3</div>
                    <div style={{ width: "45px", height: "45px" }}>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "300",
                  }}
                >
                  성인
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "260px",
                    height: "55px",
                    background: "#ffffff",
                    border: "1px solid #203d1e",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      margin: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "250px",
                    }}
                  >
                    <div style={{ width: "45px", height: "45px" }}>
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        width={45}
                        height={45}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div style={{ fontSize: "25px", fontWeight: "600" }}>3</div>
                    <div style={{ width: "45px", height: "45px" }}>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "300",
                  }}
                >
                  성인
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "260px",
                    height: "55px",
                    background: "#ffffff",
                    border: "1px solid #203d1e",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      margin: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "250px",
                    }}
                  >
                    <div style={{ width: "45px", height: "45px" }}>
                      <Image
                        src="/minusIcon.png"
                        alt="마이너스 아이콘"
                        width={45}
                        height={45}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div style={{ fontSize: "25px", fontWeight: "600" }}>3</div>
                    <div style={{ width: "45px", height: "45px" }}>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "210px",
              height: "55px",
              background: "#f6f5f1",
              borderRadius: "15px",
              color: "#203d1e",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            이전으로
          </div>
        </div>
      </div>
      <div style={{ width: "1320px" }}>
        <div style={{ marginTop: "100px" }}>
          <div
            style={{
              width: "1050px",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "140px",
                height: "58px",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "30px",
              }}
            >
              날짜 선택
            </div>
            <div
              style={{
                width: "1050px",
                height: "580px",
                background: "#ffffff",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            ></div>
            <div>
              <div
                style={{
                  display: "flex",
                  width: "140px",
                  height: "58px",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: "700",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                객실 선택
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    width: "1050px",
                    height: "250px",
                    background: "#ffffff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "380px",
                      height: "250px",
                      marginRight: "60px",
                    }}
                  >
                    <Image
                      src="/reservationImg2.png"
                      alt="객실 이미지"
                      width={380}
                      height={250}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        color: "#203d1e",
                        marginTop: "40px",
                        marginBottom: "20px",
                      }}
                    >
                      디럭스 룸
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "200",
                        lineHeight: "25px",
                        marginBottom: "20px",
                      }}
                    >
                      아름다운 동해바다를 배경으로 멋진 사진을 남길 수 있는
                      곳입니다.
                      <br />
                      사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "141px",
                        height: "22px",
                        fontSize: "16px",
                        background: "#2b7638",
                        gap: "5px",
                        borderRadius: "4px",
                        color: "#ffffff",
                      }}
                    >
                      <div style={{ fontWeight: "700" }}>기준 3인</div>
                      (최대 4인)
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "210px",
                        height: "40px",
                        background: "#203d1e",
                        borderRadius: "15px",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginTop: "5px",
                        marginLeft: "380px",
                      }}
                    >
                      예약하기
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "1050px",
                    height: "250px",
                    background: "#ffffff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "380px",
                      height: "250px",
                      marginRight: "60px",
                    }}
                  >
                    <Image
                      src="/reservationImg2.png"
                      alt="객실 이미지"
                      width={380}
                      height={250}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        color: "#203d1e",
                        marginTop: "40px",
                        marginBottom: "20px",
                      }}
                    >
                      디럭스 룸
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "200",
                        lineHeight: "25px",
                        marginBottom: "20px",
                      }}
                    >
                      아름다운 동해바다를 배경으로 멋진 사진을 남길 수 있는
                      곳입니다.
                      <br />
                      사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "141px",
                        height: "22px",
                        fontSize: "16px",
                        background: "#2b7638",
                        gap: "5px",
                        borderRadius: "4px",
                        color: "#ffffff",
                      }}
                    >
                      <div style={{ fontWeight: "700" }}>기준 3인</div>
                      (최대 4인)
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "210px",
                        height: "40px",
                        background: "#203d1e",
                        borderRadius: "15px",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginTop: "5px",
                        marginLeft: "380px",
                      }}
                    >
                      예약하기
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "1050px",
                    height: "250px",
                    background: "#ffffff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "380px",
                      height: "250px",
                      marginRight: "60px",
                    }}
                  >
                    <Image
                      src="/reservationImg2.png"
                      alt="객실 이미지"
                      width={380}
                      height={250}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        color: "#203d1e",
                        marginTop: "40px",
                        marginBottom: "20px",
                      }}
                    >
                      디럭스 룸
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "200",
                        lineHeight: "25px",
                        marginBottom: "20px",
                      }}
                    >
                      아름다운 동해바다를 배경으로 멋진 사진을 남길 수 있는
                      곳입니다.
                      <br />
                      사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "141px",
                        height: "22px",
                        fontSize: "16px",
                        background: "#2b7638",
                        gap: "5px",
                        borderRadius: "4px",
                        color: "#ffffff",
                      }}
                    >
                      <div style={{ fontWeight: "700" }}>기준 3인</div>
                      (최대 4인)
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "210px",
                        height: "40px",
                        background: "#203d1e",
                        borderRadius: "15px",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginTop: "5px",
                        marginLeft: "380px",
                      }}
                    >
                      예약하기
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "1050px",
                    height: "250px",
                    background: "#ffffff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "380px",
                      height: "250px",
                      marginRight: "60px",
                    }}
                  >
                    <Image
                      src="/reservationImg2.png"
                      alt="객실 이미지"
                      width={380}
                      height={250}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        color: "#203d1e",
                        marginTop: "40px",
                        marginBottom: "20px",
                      }}
                    >
                      디럭스 룸
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "200",
                        lineHeight: "25px",
                        marginBottom: "20px",
                      }}
                    >
                      아름다운 동해바다를 배경으로 멋진 사진을 남길 수 있는
                      곳입니다.
                      <br />
                      사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "141px",
                        height: "22px",
                        fontSize: "16px",
                        background: "#2b7638",
                        gap: "5px",
                        borderRadius: "4px",
                        color: "#ffffff",
                      }}
                    >
                      <div style={{ fontWeight: "700" }}>기준 3인</div>
                      (최대 4인)
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "210px",
                        height: "40px",
                        background: "#203d1e",
                        borderRadius: "15px",
                        color: "#ffffff",
                        fontSize: "18px",
                        fontWeight: "600",
                        marginTop: "5px",
                        marginLeft: "380px",
                      }}
                    >
                      예약하기
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReservationContainer>
  );
}

const ReservationContainer = styled.div`
  display: flex;
  width: 1920px;
`;
