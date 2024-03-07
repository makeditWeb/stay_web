"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function RoomDetailPage() {
  return (
    <RoomDetailContainer>
      <div style={{ position: "relative" }}>
        <div style={{ height: "950px" }}>
          <Image
            src="/roomDetailImg.png"
            alt="상세 페이지 메인 이미지"
            width={1920}
            height={950}
          />
        </div>
        <div
          style={{ width: "1920px", height: "350px", background: "#203d1e" }}
        ></div>
        <MainTitleContainer>
          <div>
            <div
              style={{
                fontSize: "25px",
                fontWeight: "300",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              STAY INTERVIEW, Gangnenung
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                스테이인터뷰, 강릉
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "110px",
                  height: "22px",
                  border: "1px solid #ffffff",
                  borderRadius: "4px",
                  color: "#ffffff",
                  marginLeft: "50px",
                }}
              >
                예약현황 보기
              </div>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "300",
                color: "#ffffff",
                marginBottom: "20px",
              }}
            >
              동해에서 가장 먼저 태양과 마주할 수 있는 곳, 스테이 인터뷰 강릉
              나만의 스테이에엇 바다와 산이 열립니다.
            </div>
          </div>
          <div style={{ borderRadius: "15px 15px 0 0", overflow: "hidden" }}>
            <div style={{ width: "1200px", height: "550px" }}>
              <Image
                src="/roomDetailImg.png"
                alt="상세 페이지 메인 이미지"
                width={1200}
                height={550}
              />
            </div>
            <div
              style={{
                display: "flex",

                width: "1200px",
                height: "130px",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "1100px",
                  margin: "auto",
                  gap: "25px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "68px",
                      height: "36px",
                    }}
                  >
                    입실일
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "270px",
                      height: "55px",
                      border: "1px solid #203d1e",
                      borderRadius: "7px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#203d1e",
                    }}
                  >
                    2024년 1월 31일 (수)
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "68px",
                      height: "36px",
                    }}
                  >
                    퇴실일
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "270px",
                      height: "55px",
                      border: "1px solid #203d1e",
                      borderRadius: "7px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#203d1e",
                    }}
                  >
                    2024년 1월 31일 (수)
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "68px",
                      height: "36px",
                    }}
                  >
                    인원
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "270px",
                      height: "55px",
                      border: "1px solid #203d1e",
                      borderRadius: "7px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#203d1e",
                    }}
                  >
                    2024년 1월 31일 (수)
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "210px",
                    height: "55px",
                    border: "1px solid #203d1e",
                    borderRadius: "7px",
                    background: "#203d1e",
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "36px",
                  }}
                >
                  예약하기
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "124px",
                  height: "56px",
                  fontSize: "30px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                공지사항
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "68px",
                  height: "26px",
                  borderRadius: "4px",
                  border: "1px solid #ffffff",
                  color: "#ffffff",
                  marginTop: "15px",
                }}
              >
                more
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginLeft: "25px" }}>
                  숙소 공지사항 내용 제목 출력 숙소 공지사항 내용 제목 숙소
                  공지사항 내용 제목 출력 숙소 공지사항 내용 제목 출력
                </div>
                <div style={{ marginRight: "30px" }}>2024.02.19</div>
              </div>
              <div
                style={{
                  width: "1200px",
                  height: "1px",
                  background: "#ffffff",
                }}
              ></div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginLeft: "25px" }}>
                  숙소 공지사항 내용 제목 출력 숙소 공지사항 내용 제목 숙소
                  공지사항 내용 제목 출력 숙소 공지사항 내용 제목 출력
                </div>
                <div style={{ marginRight: "30px" }}>2024.02.19</div>
              </div>
              <div
                style={{
                  width: "1200px",
                  height: "1px",
                  background: "#ffffff",
                }}
              ></div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                <div style={{ marginLeft: "25px" }}>
                  숙소 공지사항 내용 제목 출력 숙소 공지사항 내용 제목 숙소
                  공지사항 내용 제목 출력 숙소 공지사항 내용 제목 출력
                </div>
                <div style={{ marginRight: "30px" }}>2024.02.19</div>
              </div>
              <div
                style={{
                  width: "1200px",
                  height: "1px",
                  background: "#ffffff",
                }}
              ></div>
            </div>
          </div>
        </MainTitleContainer>
        <div
          style={{
            display: "flex",
            width: "1920px",
            background: "#ffffff",
          }}
        >
          <div style={{ marginTop: "50px", marginBottom: "80px" }}>
            <div
              style={{ width: "800px", height: "450px", marginBottom: "15px" }}
            >
              <Image
                src="/roomDetailImg2.png"
                alt="서브 이미지"
                width={800}
                height={450}
              />
            </div>
            <div style={{ width: "800px", height: "450px" }}>
              <Image
                src="/roomDetailImg3.png"
                alt="서브 이미지"
                width={800}
                height={450}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
              marginLeft: "150px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "60px",
              }}
            >
              스테이인터뷰, 강릉
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "300",
                marginBottom: "30px",
                lineHeight: "30px",
              }}
            >
              동해에서 가장 먼저 태양과 마주할 수 있는 곳. <br />
              스테이 인터뷰 강릉 <br />
              나만의 스테이에서 바다와 산이 열린다
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "300",
                marginBottom: "50px",
                lineHeight: "20px",
              }}
            >
              동해안을 따라 남쪽으로 가다 보면 초록 솔향과 청량한 바닷바람을
              가르는 곳이 있다.
              <br /> 층층의 하얀색 외벽과 비대칭 지붕이 풍광과 아름다운 조화를
              이룬 스테이인터뷰 강릉.
              <br /> 해안 협곡에 자리한 덕분에 시시각각 변하는 자연의 빛과
              파도소리의 움직임이 여행자를 따라다닌다
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "300",
                marginBottom: "30px",
                lineHeight: "30px",
              }}
            >
              일출이 아름다운 모든 객실은 <br />
              개방감을 극대화한 통창이 설치 되어 있어
              <br /> 동해의 일출을 직접 마주할 수 있다.
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "300",
                marginBottom: "30px",
              }}
            >
              창 넘어 번지는 붉은 빛은 고단함에 지친 몸과 마음을 채우고 따뜻한 
              휴식을 선사한다.
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "300",
                marginBottom: "50px",
                lineHeight: "20px",
              }}
            >
              숙소를 나와 한 걸음을 떼면 천혜의 포토존으로 가득찬 공간이
              펼쳐진다. <br />
              오두막 사이로 보이는 해변을 배경으로 남기는 사진 한장.
              <br /> 누르는 셔터마다 감성을 듬뿍 채우는 아름다운 풍경은
              누군가에게 잊지 못할 기록으로  남는다.
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "300",
                marginBottom: "30px",
                lineHeight: "30px",
              }}
            >
              동해에서 가장 먼저 태양과 마주할 수 있는 곳.
              <br /> 스테이 인터뷰 강릉 <br />
              나만의 스테이에서 바다와 산이 열린다
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "300",
                lineHeight: "20px",
              }}
            >
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
              width: "1920px",
              height: "650px",
            }}
          >
            <Image
              src="/roomDetailImg4.png"
              alt="서브 이미지"
              width={1920}
              height={650}
            />
          </div>
          <div style={{ position: "absolute", top: "80px", left: "360px" }}>
            <div
              style={{
                display: "flex",
                width: "1200px",
                height: "150px",
                margin: "auto",
                borderRadius: "15px",
                marginBottom: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                // opacity: "0.7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "900px",
                  margin: "auto",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Image
                    src="/photoZone.png"
                    alt="포토존"
                    width={100}
                    height={80}
                  />
                </div>
                <div style={{ width: "100px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "72px",
                      height: "22px",
                      background: "#203d1e",
                      borderRadius: "4px",
                      color: "#ffffff",
                      margin: "auto",
                    }}
                  >
                    Point 1
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#203d1e",
                      marginTop: "15px",
                    }}
                  >
                    포토존
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "480px",
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    아름다운 동해바다를 배경으로 멋진사진을 남길 수 있는
                    곳입니다. 사랑하는 사람과 함께 예쁘고 행복한 추억을
                    남겨보세요.
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "1200px",
                height: "150px",
                margin: "auto",
                borderRadius: "15px",
                marginBottom: "20px",
                background: "rgba(255, 255, 255, 0.75)",
                // opacity: "0.7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "900px",
                  margin: "auto",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Image
                    src="/oceanView.png"
                    alt="오션뷰"
                    width={100}
                    height={80}
                  />
                </div>
                <div style={{ width: "100px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "72px",
                      height: "22px",
                      background: "#203d1e",
                      borderRadius: "4px",
                      color: "#ffffff",
                      margin: "auto",
                    }}
                  >
                    Point 2
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#203d1e",
                      marginTop: "15px",
                    }}
                  >
                    오션뷰
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "480px",
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    전 객실에서 바다가 보이는 스테이인터뷰는 일출명소입니다.
                    <br />
                    머무는 공간에서 일출을 맞이해보세요. <br />
                    여행에 또 다른 추억과 생각지 못했던 큰 선물이 될것입니다
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "1200px",
                height: "150px",
                margin: "auto",
                background: "rgba(255, 255, 255, 0.75)",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "900px",
                  margin: "auto",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Image
                    src="/welcomeDrink.png"
                    alt="웰컴드링크"
                    width={100}
                    height={80}
                  />
                </div>
                <div style={{ width: "140px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "72px",
                      height: "22px",
                      background: "#203d1e",
                      borderRadius: "4px",
                      color: "#ffffff",
                      margin: "auto",
                    }}
                  >
                    Point 3
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#203d1e",
                      marginTop: "15px",
                    }}
                  >
                    웰컴드링크
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "480px",
                      fontSize: "16px",
                      fontWeight: "200",
                      lineHeight: "30px",
                    }}
                  >
                    저희 스테이인터뷰를 예약해주신 모든 고객님들께 커피를 드리고
                    있습니다.
                    <br /> 아름다운 자연과 함께 커피한잔 즐겨보세요
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1200px",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "55px",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              주변 관광지
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "40px",
                fontSize: "16px",
                gap: "5px",
              }}
            >
              <div style={{ fontWeight: "600" }}>스테이인터뷰 강릉</div>
              <div>강원 강릉시 강동면 율곡로 1458</div>
            </div>
          </div>
          <div
            style={{
              width: "1200px",
              height: "400px",
              background: "#d9d9d9",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "50px",
            }}
          >
            {/* <Image src="/map.png" alt="지도" width={1200} height={400} /> */}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "1200px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  1
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  2
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  3
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  4
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  5
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  6
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "400px",
                height: "130px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  width: "400px",
                  height: "80px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "25px",
                    fontWeight: "400",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #c2bfb3",
                    borderRadius: "50px",
                  }}
                >
                  7
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      동명해변
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#747474",
                      }}
                    >
                      강원 강릉시 강동면 정동신리 490-2
                    </div>
                  </div>
                  <div style={{ lineHeight: "20px" }}>
                    기찻길 너머에 펼쳐진 모래사장이 인상적인 해수욕장
                    숙소로부터의 거리 0.4 km
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
            width: "1200px",
            height: "100px",
            margin: "auto",
            gap: "40px",
          }}
        >
          <div
            style={{ fontSize: "25px", fontWeight: "700", color: "#162318" }}
          >
            예약 및 환불 문의
          </div>
          <div
            style={{ fontSize: "25px", fontWeight: "200", color: "#162318" }}
          >
            RESERVATION
          </div>
          <div
            style={{ fontSize: "25px", fontWeight: "500", color: "#203d1e" }}
          >
            스테이인터뷰, 강릉
          </div>
          <div
            style={{ fontSize: "25px", fontWeight: "700", color: "#203d1e" }}
          >
            010-2517-2160
          </div>
        </div>
      </div>
    </RoomDetailContainer>
  );
}

const RoomDetailContainer = styled.div`
  width: 1920px;
  margin: auto;
`;

const MainTitleContainer = styled.div`
  width: 1200px;
  position: absolute;
  top: 50px;
  left: 360px;
`;
