"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function ConsultingPage() {
  return (
    <div className="container_consulting">
      <div className="relative">
        <div>
          <img
            src="/consultingImg.png"
            alt="컨설팅 이미지"
            className="img_consuting_top"
          />
        </div>
        <div className="box_consulting_top">
          <div className="box_consulting_logo">
            <img src="/consultingLogo.png" alt="컨설팅 로고" />
          </div>
          <div className="title_head_consulting">스테이인터뷰와 함께 할</div>
          <div className="title_sub_head_consulting">파트너를 찾습니다.</div>
          <div className="btn_contact_us">문의하기 →</div>
        </div>
        <div className="absolute flex transform -translate-x-1/2 -translate-y-1/2 left-1/2 ">
          <Image
            width={1200}
            height={800}
            src="/consultingSubImg.jpg"
            alt="컨설팅 로고"
          />
        </div>
      </div>
      <div className="box_main_content">
        <div className="box_title_main_content">
          <div className="title_main_content">Our Partner</div>
          <div className="text_main_content">
            스테이인터뷰는 가장 자연스러운 휴식에 방향을 두고
            <br />
            휴식 공간의 가치에 대한 탐구를 바탕으로 사업의 영역을 확장해 나가고
            있습니다.
          </div>
          <div className="text_sub_main_content">
            파트너란 스테이인터뷰를 함께 만들고 운영해 나갈 파트너점의
            대표님입니다.
            <br />
            코로나 팬데믹 기간동안에도 스테이인터뷰 파트너점에서는 한달 평균
            예약율 94%를 달성 하였으며,
            <br />
            같은 달 28,000 분께서 커피인터뷰를 찾아주셨습니다.
          </div>
        </div>
        <div className="box_img_main_content">
          <div className="box_reservation_rate">
            <div className="box_img_reservation_rate">
              <img src="/reservationIcon.png" alt="예약율 아이콘" />
            </div>
            <div className="title_reservation_rate">한 달 평균 예약율</div>
            <div className="text_reservation_rate">94%</div>
          </div>
          <div className="box_visitor">
            <div className="box_img_visitor">
              <img src="/visitorIcon.png" alt="예약율 아이콘" />
            </div>
            <div className="title_visitor">커피인터뷰 방문객</div>
            <div className="text_visitor">28,000명</div>
          </div>
        </div>
      </div>
      <div className="title_main_content_bot">어떻게 가능했을까요?</div>
      <div className="box_point_one">
        <div className="box_img_point_one">
          <img src="/consultingImg2.png" alt="서브 이미지" />
        </div>
        <div className="box_icon_point_one">
          <div className="box_img_icon_point_one">
            <img
              className="img_icon_point_one"
              src="/architectureImg.png"
              alt="서브 이미지"
            />
          </div>
          <div className="container_badge_point">
            <div className="box_badge_point">Point 1</div>
          </div>
          <div className="title_point_one">
            건출물과 지형의 숨어있는 가치를 찾아냅니다.
          </div>
          <div className="text_point_one">
            오랫동안 방치된 골조 건물을 카페와 펜션으로 개축하여, <br></br>2018 강원도
            건축문화상 대상을 수상하며 강릉 최고의 SNS 사진 명소가 되었습니다.
          </div>
        </div>
      </div>
      <div className="box_point_two">
        <div className="box_icon_point_two">
          <div className="box_img_icon_point_two">
            <img
              className="img_icon_point_two"
              src="/bulbImg.png"
              alt="전구 아이콘"
            />
          </div>
          <div className="container_badge_point">
            <div className="box_badge_point">Point 2</div>
          </div>
          <div className="title_point_one">트랜드를 정확히 짚어내는 감각</div>
          <div className="text_point_two">
            손님이 끊긴 낡은 펜션을 태국의 휴양지 컨셉으로 리모델링 하였습니다
            <br></br>오픈 직후 예약을 100% 달성 하였으며, <br></br>대전 근교의 주말 나들이 명소가
            되었습니다.
          </div>
          <div className="div_img_point_two">
            <div className="box_remodeling_before">
              <img
                src="/remodelingBeforeImg.png"
                alt="리모델링 전"
                className="img_remodeling_before"
              />
              <div className="box_text_remodeling">
                <div className="text_remodeling_before">리모델링 전</div>
              </div>
            </div>
            <div className="box_remodeling_after">
              <img
                src="/remodelingAfterImg.png"
                alt="리모델링 후"
                className="img_remodeling_after"
              />
              <div className="box_text_remodeling">
                <div className="text_remodeling_after">리모델링 후</div>
              </div>
            </div>
          </div>
          {/* <div className="box_text_remodeling">
            <div className="text_remodeling_before">리모델링 전</div>
            <div className="text_remodeling_after">리모델링 후</div>
          </div> */}
        </div>
      </div>
      <div className="px-5 container_how_to_build md:px-0">
        <div className="box_how_to_build">
          <div className="box_img_how_to_build">
            <img src="/bedImg.png" alt="소파" className="img_how_to_build" />
          </div>
          <div className="box_badge_how_to_build">How to Build</div>
          <div className="title_how_to_build">
            인테리어 소품 하나까지 세밀하게
          </div>
          <div className="text_how_to_build">
            획일화된 인테리어가 아닌 적재적소에 맞는 컨셉을 디자인합니다.
            <br />
            컨셉 디자인을 구체화하고 나면 빌드인터뷰팀이 상상을 현실로
            구현합니다.
          </div>
          <div className="btn_more_stay">스테이인터뷰 더 보러가기</div>
          <div>
            <div className="container_img_stay">
              <div className="box_img_stay">
                <img
                  src="/consultingImgBed1.png"
                  alt="스테이인터뷰"
                  className="img_stay"
                />
              </div>
              <div className="box_img_stay">
                <img
                  src="/consultingImgBed2.png"
                  alt="스테이인터뷰"
                  className="img_stay"
                />
              </div>
              <div className="box_img_stay">
                <img
                  src="/consultingImgBed3.png"
                  alt="스테이인터뷰"
                  className="img_stay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="box_benefit">
          <div className="box_bg_benefit">
            <img
              src="/consultingBgImg.png"
              alt="백그라운드 이미지"
              className="img_bg_benefit"
            />
          </div>

          <div>
            <div className="container_benefit_content">
              <div className="div_benefit_content">
                <div className="div_benefit_badge">Benefit #1</div>
                <div className="title_benefit_content">스테이 인터뷰만의</div>
                <div className="sub_title_benefit_content">예약관리 시스템</div>
                <div className="div_img_benefit_content">
                  <img
                    src="/benefit1.png"
                    alt="베네핏1"
                    className="img_benefit_content"
                  />
                </div>
                <div className="text_benefit_content">
                  스테이에 특화된 예약관리 플랫폼으로
                  <br /> 실시간 예약과 관리에 필요한 다양한 기능들을
                  <br /> 쉽고 간편하게 사용할 수 있습니다.
                </div>
              </div>
              <div className="div_benefit_content">
                <div className="div_benefit_badge">Benefit #2</div>
                <div className="title_benefit_content">신규 파트너를 위한</div>
                <div className="sub_title_benefit_content">맞춤형 솔루션</div>
                <div className="div_img_benefit_content">
                  <img
                    src="/benefit2.png"
                    alt="베네핏2"
                    className="img_benefit_content"
                  />
                </div>
                <div className="text_benefit_content">
                  건축, 디자인부터 운영과 마케팅까지
                  <br /> 스테이인터뷰와 한 번에 해결하세요!
                  <br /> 감각적인 디자인과 운영 시스템으로
                  <br /> 최적의 운영 솔루션을 파트너점에 제공합니다.
                </div>
              </div>
              <div className="div_benefit_content">
                <div className="div_benefit_badge">Benefit #3</div>
                <div className="title_benefit_content">광고비 無</div>
                <div className="sub_title_benefit_content">가맹비용 無</div>
                <div className="div_img_benefit_content">
                  <img
                    src="/benefit3.png"
                    alt="베네핏3"
                    className="img_benefit_content"
                  />
                </div>
                <div className="text_benefit_content">
                  스테이인터뷰는 파트너쉽으로 운영하며
                  <br />
                  광고비와 가맹비를 받지 않습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_contact">
        <div className="div_img_contact">
          <img
            src="/contactUsImg.png"
            alt="콘텍 이미지"
            className="img_contact_us"
          />
        </div>
        <div className="px-5 div_contact_content md:px-0">
          <div className="div_contact_foreword">
            보유 중인 토지와 건축물의 숨겨진 가치를 찾길 원하시나요?
          </div>
          <div className="flex gap-4 items-center my-4 text-[15px] md:text-[19px]">
            <div className="flex-shrink-0 text-[20px] font-bold md:text-[50px]">
              Contact Us
            </div>
            <div className="flex gap-2 md:gap-5">
              <div className="flex-shrink-0 ">상담전화</div>|
              <div className="flex-shrink-0 ">010-6836-4678</div>
            </div>
          </div>
          <div className="flex gap-2 div_contact_name">
            <div className="flex-shrink-0">성함</div>
            <input
              className="div_contact_text"
              placeholder="성함을 입력해주세요"
            ></input>
          </div>
          <div className="flex gap-2 div_contact_phone">
            <div className="flex-shrink-0">연락처</div>
            <input
              className="div_contact_text"
              placeholder="연락처를 입력해주세요"
            ></input>
          </div>
          <div className="flex gap-2 container_inquiry_details">
            <div className="flex-shrink-0 w-fit div_inquiry_details">
              문의내용
            </div>
            <input
              className="div_contact_text"
              placeholder="상담 내용을 입력해주세요"
            ></input>
          </div>
          <div className="btn_consulting_contact_us">상담문의하기</div>
        </div>
      </div>
    </div>
  );
}

const ConsultingContainer = styled.div`
  // width: 1920px;
`;

const ConsultingInputBox = styled.input`
  // width: "830px",

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
