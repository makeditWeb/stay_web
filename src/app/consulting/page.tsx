"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ConsultingPage() {
  return (
    <ConsultingContainer>
      <div style={{ position: "relative", width: "1920px" }}>
        <div style={{ width: "1920px" }}>
          <Image
            src="/consultingImg.png"
            alt="컨설팅 이미지"
            width={1920}
            height={1000}
          />
        </div>
        <div
          style={{
            width: "540px",
            height: "500px",
            position: "absolute",
            left: "690px",
            top: "250px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
              marginBottom: "80px",
            }}
          >
            <Image
              src="/consultingLogo.png"
              alt="컨설팅 로고"
              width={100}
              height={100}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "540px",
              fontSize: "30px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            스테이인터뷰와 함께 할
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "70px",
              fontWeight: "700",
              color: "#162318",
              marginBottom: "80px",
            }}
          >
            파트너를 찾습니다.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "175px",
              height: "42px",
              background: "#162318",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "500",
              margin: "auto",
            }}
          >
            문의하기 →
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "1200px",
            height: "500px",
            left: "360px",
            top: "800px",
            margin: "auto",
          }}
        >
          <Image
            src="/consultingSubImg.png"
            alt="컨설팅 로고"
            width={1200}
            height={500}
          />
        </div>
      </div>
      <div
        style={{
          width: "1200px",
          paddingTop: "400px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1200px",
            fontSize: "50px",
            fontWeight: "700",
            color: "#162318",
          }}
        >
          Our Partner
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "1200px",
            fontSize: "19px",
            fontWeight: "300",
            marginTop: "80px",
            lineHeight: "30px",
            marginBottom: "20px",
          }}
        >
          스테이인터뷰는 가장 자연스러운 휴식에 방향을 두고
          <br />
          휴식 공간의 가치에 대한 탐구를 바탕으로 사업의 영역을 확장해 나가고
          있습니다.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "1200px",
            fontSize: "14px",
            fontWeight: "300",
            lineHeight: "30px",
            marginBottom: "50px",
          }}
        >
          파트너란 스테이인터뷰를 함께 만들고 운영해 나갈 파트너점의
          대표님입니다.
          <br />
          코로나 팬데믹 기간동안에도 스테이인터뷰 파트너점에서는 한달 평균
          예약율 94%를 달성 하였으며,
          <br />
          같은 달 28,000 분께서 커피인터뷰를 찾아주셨습니다.
        </div>
        <div
          style={{
            display: "flex",
            width: "500px",
            gap: "60px",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "220px",
              height: "260px",
              background: "#ffffff",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                width: "95px",
                height: "75px",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              <Image
                src="/reservationIcon.png"
                alt="예약율 아이콘"
                width={95}
                height={75}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "220px",
                fontSize: "12px",
                fontWeight: "300",
                marginTop: "20px",
              }}
            >
              한 달 평균 예약율
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "700",
                color: "#2b7638",
                marginTop: "20px",
              }}
            >
              94%
            </div>
          </div>
          <div
            style={{
              width: "220px",
              height: "260px",
              background: "#ffffff",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                width: "84px",
                height: "96px",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <Image
                src="/visitorIcon.png"
                alt="예약율 아이콘"
                width={84}
                height={96}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "220px",
                fontSize: "12px",
                fontWeight: "300",
                marginTop: "10px",
              }}
            >
              커피인터뷰 방문객
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "700",
                color: "#2b7638",
                marginTop: "20px",
              }}
            >
              28,000명
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "300",
          color: "#162318",
          margin: "100px 0 80px 0",
        }}
      >
        어떻게 가능했을까요?
      </div>
      <div
        style={{
          display: "flex",
          width: "1920px",
          height: "640px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            width: "750px",
            height: "520px",
            margin: "60px 0 60px 0",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Image
            src="/consultingImg2.png"
            alt="서브 이미지"
            width={750}
            height={520}
          />
        </div>
        <div style={{ height: "340px", margin: "150px 0 150px 100px" }}>
          <div>
            <Image
              src="/architectureImg.png"
              alt="서브 이미지"
              width={200}
              height={140}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "24px",
              background: "#203d1e",
              borderRadius: "4px",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "700",
              margin: "20px 0 20px 0",
            }}
          >
            Point 1
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              color: "#162318",
              marginBottom: "20px",
            }}
          >
            건출물과 지형의 숨어있는 가치를 찾아냅니다.
          </div>
          <div
            style={{
              fontSize: "19px",
              fontWeight: "300",
              marginBottom: "10px",
            }}
          >
            오랫동안 방치된 골조 건물을 카페와 펜션으로 개축하여,
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontSize: "19px", fontWeight: "700" }}>
              2018 강원도 건축문화상 대상
            </div>
            <div style={{ fontSize: "19px", fontWeight: "300" }}>
              을 수상하며 강릉 최고의 SNS 사진 명소가 되었습니다.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "1200px", marginLeft: "400px", paddingTop: "100px" }}
      >
        <div>
          <Image
            src="/bulbImg.png"
            alt="전구 아이콘"
            width={100}
            height={140}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "25px",
            background: "#203d1e",
            borderRadius: "4px",
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "700",
            margin: "20px 0 20px 0",
          }}
        >
          Point 2
        </div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#162318",
            marginBottom: "20px",
          }}
        >
          트랜드를 정확히 짚어내는 감각
        </div>
        <div
          style={{
            fontSize: "19px",
            fontWeight: "300",
            color: "#162318",
            marginBottom: "80px",
          }}
        >
          손님이 끊긴 낡은 펜션을 태국의 휴양지 컨셉으로 리메돌링 하였습니다
          <br />
          오픈 직후 예약을 100% 달성 하였으며, 대전 근교의 주말 나들이 명소가
          되었습니다.
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "420px",
              height: "400",
              boxShadow: "5px 0 3px rgba(0, 0, 0, 0.3)",
              marginRight: "40px",
            }}
          >
            <Image
              src="/remodelingBeforeImg.png"
              alt="리모델링 전"
              width={420}
              height={400}
            />
          </div>
          <div style={{ width: "1060px", height: "400px" }}>
            <Image
              src="/remodelingAfterImg.png"
              alt="리모델링 후"
              width={1060}
              height={400}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", marginTop: "30px", marginBottom: "40px" }}
        >
          <div style={{ marginLeft: "30px" }}>리모델링 전</div>
          <div style={{ marginLeft: "400px" }}>리모델링 후</div>
        </div>
      </div>
      <div
        style={{
          width: "1920px",
          background: "#ffffff",
          paddingTop: "80px",
          paddingBottom: "50px",
        }}
      >
        <div style={{ margin: "auto", width: "220px", height: "140px" }}>
          <Image src="/bedImg.png" alt="소파" width={220} height={140} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "25px",
            background: "#203d1e",
            borderRadius: "4px",
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "700",
            margin: "30px auto 30px auto",
          }}
        >
          How to Build
        </div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#162318",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          인테리어 소품 하나까지 세밀하게
        </div>
        <div
          style={{
            textAlign: "center",
            lineHeight: "30px",
            marginBottom: "50px",
          }}
        >
          획일화된 인테리어가 아닌 적재적소에 맞는 컨셉을 디자인합니다.
          <br />
          컨셉 디자인을 구체화하고 나면 빌드인터뷰팀이 상상을 현실로 구현합니다.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "250px",
            height: "50px",
            borderRadius: "15px",
            border: "1px solid ",
            fontSize: "18px",
            fontWeight: "500",
            color: "#162318",
            margin: "auto",
            marginBottom: "50px",
          }}
        >
          스테이인터뷰 더 보러가기
        </div>
        <div
          style={{
            display: "flex",
            width: "1220px",
            gap: "40px",
            margin: "auto",
          }}
        >
          <div>
            <Image
              src="/consultingImgBed1.png"
              alt="스테이인터뷰"
              width={380}
              height={460}
            />
          </div>
          <div>
            <Image
              src="/consultingImgBed2.png"
              alt="스테이인터뷰"
              width={380}
              height={460}
            />
          </div>
          <div>
            <Image
              src="/consultingImgBed3.png"
              alt="스테이인터뷰"
              width={380}
              height={460}
            />
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "1920px", height: "850px" }}>
        <div style={{ width: "1920px", height: "850px" }}>
          <Image
            src="/consultingBgImg.png"
            alt="백그라운드 이미지"
            width={1920}
            height={850}
          />
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: "20px",
            left: "370px",
            top: "55px",
          }}
        >
          <div
            style={{
              width: "380px",
              height: "740px",
              background: "#ffffff",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "25px",
                background: "#203d1e",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                margin: "30px auto 30px auto",
              }}
            >
              Benefit #1
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "300",
                color: "#162318",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              스테이 인터뷰만의
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#162318",
                textAlign: "center",
              }}
            >
              예약관리 시스템
            </div>
            <div style={{ width: "315px", height: "425px", margin: "auto" }}>
              <Image
                src="/benefit1.png"
                alt="베네핏1"
                width={315}
                height={425}
              />
            </div>
            <div style={{ textAlign: "center", lineHeight: "30px" }}>
              스테이에 특화된 예약관리 플랫폼으로
              <br /> 실시간 예약과 관리에 필요한 다양한 기능들을
              <br /> 쉽고 간편하게 사용할 수 있습니다.
            </div>
          </div>
          <div
            style={{
              width: "380px",
              height: "740px",
              background: "#ffffff",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "25px",
                background: "#203d1e",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                margin: "30px auto 30px auto",
              }}
            >
              Benefit #2
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "300",
                color: "#162318",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              신규 파트너를 위한
            </div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#162318",
                textAlign: "center",
              }}
            >
              맞춤형 솔루션
            </div>
            <div style={{ width: "315px", height: "425px", margin: "auto" }}>
              <Image
                src="/benefit2.png"
                alt="베네핏2"
                width={315}
                height={425}
              />
            </div>
            <div style={{ textAlign: "center", lineHeight: "30px" }}>
              건축, 디자인부터 운영과 마케팅까지
              <br /> 스테이인터뷰와 한 번에 해결하세요!
              <br /> 감각적인 디자인과 운영 시스템으로
              <br /> 최적의 운영 솔루션을 파트너점에 제공합니다.
            </div>
          </div>
          <div
            style={{
              width: "380px",
              height: "740px",
              background: "#ffffff",
              borderRadius: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "150px",
                height: "25px",
                background: "#203d1e",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                margin: "30px auto 30px auto",
              }}
            >
              Benefit #3
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "300",
                color: "#162318",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <div>광고비</div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "#162318",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
              >
                無
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: "300",
                color: "#162318",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <div>가맹비용</div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "#162318",
                  textAlign: "center",
                  marginLeft: "10px",
                }}
              >
                無
              </div>
            </div>
            <div
              style={{
                width: "315px",
                height: "330px",
                margin: "50px auto 50px auto",
              }}
            >
              <Image
                src="/benefit3.png"
                alt="베네핏3"
                width={315}
                height={330}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                lineHeight: "30px",
                // marginTop: "40px",
              }}
            >
              스테이인터뷰는 파트너쉽으로 운영하며
              <br />
              광고비와 가맹비를 받지 않습니다.
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "1920px",
          paddingTop: "20px",
          paddingBottom: "100px",
        }}
      >
        <div style={{ width: "650px", height: "1000px" }}>
          <Image
            src="/contactUsImg.png"
            alt="콘텍 이미지"
            width={650}
            height={1000}
          />
        </div>
        <div style={{ paddingTop: "150px", marginLeft: "50px" }}>
          <div
            style={{
              fontSize: "19px",
              fontWeight: "300",
              color: "#162318",
              marginLeft: "10px",
            }}
          >
            보유 중인 토지와 건축물의 숨겨진 가치를 찾길 원하시나요?
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                fontWeight: "700",
                color: "#162318",
                marginLeft: "10px",
                marginRight: "30px",
              }}
            >
              Contact Us
            </div>
            <div
              style={{
                fontSize: "19px",
                fontWeight: "500",
                color: "#162318",
                marginRight: "20px",
              }}
            >
              상담전화
            </div>
            |
            <div
              style={{
                fontSize: "19px",
                fontWeight: "500",
                color: "#162318",
                marginLeft: "20px",
              }}
            >
              010-6836-4678
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "830px",
              height: "70px",
              background: "#ffffff",
              borderRadius: "15px",
              paddingLeft: "20px",
              fontSize: "19px",
              fontWeight: "500",
            }}
          >
            성함
            <ConsultingInputBox
              style={{ width: "500px", height: "50px", marginLeft: "65px" }}
              placeholder="성함을 입력해주세요"
            ></ConsultingInputBox>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "830px",
              height: "70px",
              background: "#ffffff",
              borderRadius: "15px",
              paddingLeft: "20px",
              fontSize: "19px",
              fontWeight: "500",
              margin: "20px 0 20px 0",
            }}
          >
            연락처
            <ConsultingInputBox
              style={{ width: "500px", height: "50px", marginLeft: "50px" }}
              placeholder="연락받으실 휴대폰 번호를 입력해주세요"
            ></ConsultingInputBox>
          </div>
          <div
            style={{
              width: "830px",
              height: "300px",
              background: "#ffffff",
              borderRadius: "15px",
              paddingLeft: "20px",
              fontSize: "19px",
              fontWeight: "500",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "50px",
              }}
            >
              문의내용
            </div>
            <ConsultingInputBox
              style={{ width: "600px", marginLeft: "10px" }}
              placeholder="연락받으실 휴대폰 번호를 입력해주세요"
            ></ConsultingInputBox>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "200px",
              height: "54px",
              background: "#203d1e",
              borderRadius: "15px",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: "700",
              margin: "40px 0 0 650px",
              cursor: "pointer",
            }}
          >
            상담문의하기
          </div>
        </div>
      </div>
    </ConsultingContainer>
  );
}

const ConsultingContainer = styled.div`
  width: 1920px;
`;

const ConsultingInputBox = styled.input`
  width: 940px;
  height: 40px;
  border: none;
  border-radius: 15px;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #c8cdc6;
  }

  &:focus {
    outline: none;
  }
`;
