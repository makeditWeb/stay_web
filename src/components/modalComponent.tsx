import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import styled from "styled-components";
import ModalTabContents from "./ModalTabContents";
import Slider from "react-slick";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalComponent = ({ isOpen, closeModal }) => {
  const settings = {
    dots: true,
    infintie: true,
    useTransform: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 방지
    } else {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 허용
    }

    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트가 언마운트될 때 스크롤 허용
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="상세 보기 모달"
    >
      <ModalContents>
        <div
          style={{ marginLeft: "1150px", cursor: "pointer" }}
          onClick={closeModal}
        >
          <Image src="/closeBtn.png" alt="닫기버튼" width={60} height={60} />
        </div>
        <div style={{ width: "1100px", margin: "auto", marginBottom: "50px" }}>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "30px", fontWeight: "700" }}>디럭스 룸</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "142px",
                height: "22px",
                background: "#2b7638",
                color: "#ffffff",
                borderRadius: "4px",
              }}
            >
              기준 3인 (최대 4인)
            </div>
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "200",
              lineHeight: "25px",
              marginTop: "10px",
            }}
          >
            아름다운 동해바다를 배경으로 멋진사진을 남길 수 있는 곳입니다.
            <br /> 사랑하는 사람과 함께 예쁘고 행복한 추억을 남겨보세요.
          </div>
        </div>
        <div
          style={{
            width: "1100px",
            height: "580px",
            margin: "auto",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <SlickSlider {...settings}>
            <div>
              <Image
                src="/roomDetailImg2.png"
                alt="슬라이더1"
                width={1200}
                height={500}
                // style={{ borderRadius: "15px 15px 0 0" }}
              />
            </div>
            <div>
              <Image
                src="/roomDetailImg3.png"
                alt="슬라이더1"
                width={1200}
                height={500}
                // style={{ borderRadius: "15px 15px 0 0" }}
              />
            </div>
            <div>
              <Image
                src="/roomDetailImg4.png"
                alt="슬라이더1"
                width={1200}
                height={500}
                // style={{ borderRadius: "15px 15px 0 0" }}
              />
            </div>
          </SlickSlider>
        </div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "80px" }}
        >
          <div style={{ fontSize: "20px", fontWeight: "500", width: "200px" }}>
            객실정보
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                체크인
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>15:30</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                체크아웃
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>15:30</div>
            </div>
            <div
              style={{
                display: "flex",
                // alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                기준인원
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "200",
                    height: "22px",
                    marginBottom: "4px",
                  }}
                >
                  3인 (최대인원 4인)
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "200",
                    height: "22px",
                  }}
                >
                  성인 인원 추가(30,000원)시 추가 침구 무료 제공
                </div>
              </div>
            </div>
            <div style={{ paddingLeft: "100px" }}>
              <div style={{ fontSize: "16px", fontWeight: "600" }}>
                추가 인원 요금
              </div>
              <div style={{ display: "flex", marginTop: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderLeft: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  성인(14세 이상)
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderLeft: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  아동
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderRight: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  유아
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderTop: "none",
                    borderLeft: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  30,000 (침구 제공)
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderTop: "none",
                    borderRight: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  무료 (이불 미포함)
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "160px",
                    height: "32px",
                    border: "1px solid ",
                    borderTop: "none",
                    borderRight: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  무료 (이불 미포함)
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                면적
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                11.00 ㎡
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                침대
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                퀸 사이즈 2 / 싱글 사이즈 1
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "50px" }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              width: "200px",
              paddingTop: "20px",
            }}
          >
            공용시설
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <div style={{ width: "50px" }}>
              <div>
                <Image
                  src="/parkinglot.png"
                  alt="주차장"
                  width={50}
                  height={50}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              >
                주차장
              </div>
            </div>
            <div style={{ width: "50px" }}>
              <div>
                <Image src="/walking.png" alt="산책로" width={50} height={50} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              >
                산책로
              </div>
            </div>
            <div style={{ width: "50px" }}>
              <div>
                <Image src="/garden.png" alt="정원" width={50} height={50} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: "200",
                  marginTop: "10px",
                }}
              >
                정원
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "50px" }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              width: "200px",
              paddingTop: "20px",
            }}
          >
            구비시설
          </div>
          <div>
            <div style={{ display: "flex", gap: "90px", marginBottom: "20px" }}>
              <div style={{ width: "80px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/bedding.png"
                    alt="호텔식 침구"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  호텔식 침구
                </div>
              </div>
              <div style={{ width: "70px" }}>
                <div style={{ width: "50px", margin: "auto" }}>
                  <Image
                    src="/terrace.png"
                    alt="테라스"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  테라스
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/bath.png" alt="욕실" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  욕실
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/tv.png" alt="TV" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  TV
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/wifi.png" alt="wifi" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  wifi
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/air.png" alt="에어컨" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  에어컨
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "90px", marginBottom: "20px" }}>
              <div style={{ width: "80px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/hotpot.png"
                    alt="전기포트"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  전기포트
                </div>
              </div>
              <div style={{ width: "70px" }}>
                <div style={{ width: "50px", margin: "auto" }}>
                  <Image src="/cup.png" alt="컵" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  컵
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image
                    src="/slipper.png"
                    alt="슬리퍼"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  슬리퍼
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image
                    src="/dryer.png"
                    alt="헤어드라이기"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    width: "70px",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  드라이기
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image
                    src="/induction.png"
                    alt="인덕션"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  인덕션
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image
                    src="/cookingtool.png"
                    alt="조리도구"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  조리도구
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "90px", marginBottom: "20px" }}>
              <div style={{ width: "80px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/cooker.png"
                    alt="전기밥솥"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  전기밥솥
                </div>
              </div>
              <div style={{ width: "70px" }}>
                <div style={{ margin: "auto", width: "50px" }}>
                  <Image
                    src="/microwave.png"
                    alt="전자레인지"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  전자레인지
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/ref.png" alt="냉장고" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  냉장고
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/table.png" alt="테이블" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  테이블
                </div>
              </div>
              <div style={{ width: "50px" }}>
                <div>
                  <Image src="/chair.png" alt="의자" width={50} height={50} />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "200",
                    marginTop: "10px",
                  }}
                >
                  의자
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "80px" }}
        >
          <div style={{ fontSize: "20px", fontWeight: "500", width: "200px" }}>
            어메니티
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  marginRight: "80px",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                샴푸
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                칫솔&치약
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  marginRight: "80px",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                컨디셔너
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                바스타올
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  marginRight: "80px",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                바디워시
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>가운</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  marginRight: "80px",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                바디로션
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "22px",
                  marginRight: "80px",
                  fontSize: "16px",
                  fontWeight: "200",
                }}
              >
                페이스타월
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "80px" }}
        >
          <div style={{ fontSize: "20px", fontWeight: "500", width: "200px" }}>
            서비스 및 옵션
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                서비스
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                서비스 내용 출력
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  marginBottom: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                옵션
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "200",
                    height: "22px",
                    marginBottom: "5px",
                  }}
                >
                  침구 추가 (유아 및 아동 침구 필요 시, 침구 추가 옵션(20,000원
                  / 선택 시에만 제공))
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "200",
                    height: "22px",
                  }}
                >
                  그릴대여
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{ display: "flex", paddingLeft: "100px", marginTop: "80px" }}
        >
          <div style={{ fontSize: "20px", fontWeight: "500", width: "200px" }}>
            지점 상세 정보
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                대표자
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>권순창</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                연락처
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                010-2547-2160 / 010-2517-2160
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                소재지
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                충남 태안군 소원면 모항파도로 490-78
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  borderRadius: "4px",
                  background: "#203d1e",
                  color: "#ffffff",
                  marginRight: "25px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                이메일
              </div>
              <div style={{ fontSize: "16px", fontWeight: "200" }}>
                coffeienterview@naver.com
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1080px",
            height: "1px",
            background: "gray",
            margin: "auto",
            marginTop: "50px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "auto",
            width: "1100px",
            marginBottom: "50px",
            marginTop: "60px",
          }}
        >
          <TabBtn active={activeTab === 1} onClick={() => handleTabClick(1)}>
            인원 및 금액
          </TabBtn>
          <TabBtn active={activeTab === 2} onClick={() => handleTabClick(2)}>
            예약 및 결제
          </TabBtn>
          <TabBtn active={activeTab === 3} onClick={() => handleTabClick(3)}>
            시설 안내
          </TabBtn>
          <TabBtn active={activeTab === 4} onClick={() => handleTabClick(4)}>
            서비스 안내
          </TabBtn>
        </div>
        <div
          style={{
            width: "900px",
            height: "1100px",
            margin: "auto",
            background: "gray",
            borderRadius: "15px",
            padding: "30px",
          }}
        >
          <ModalTabContents tabNumber={activeTab} />
        </div>
      </ModalContents>
    </ModalContainer>
  );
};

export default ModalComponent;

const ModalContainer = styled(Modal)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 500px;
  overflow-y: auto;
`;

const ModalContents = styled.div`
  width: 1200px;
  margin: auto;
  background: #ffffff;
  border-radius: 46px;
  overflow-y: auto;
  padding: 80px;
  padding-top: 50px;
  padding-bottom: 100px;
`;

interface TabBtnProps {
  active: boolean;
}

const TabBtn = styled.div<TabBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 46px;
  border: ${(props) => (props.active ? "none" : "3px solid #f2f2f2")};
  border-radius: 15px;
  background: ${(props) => (props.active ? "#203D1E" : "#ffffff")};
  font-size: 20px;
  font-weight: ${(props) => (props.active ? "800" : "500")};
  color: ${(props) => (props.active ? "#ffffff" : "#C3C3C3")};
  cursor: pointer;
`;

// 모달
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
