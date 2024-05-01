"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import mockList from "@/data/mockup.json";
interface PartnerStore {
  id: number;
  storeName: string;
  address: string;
  imageUrl: string;
  imageName: string;
}

interface MainBanner {
  id: number;
  imageUrl: string;
  imageName: string;
}

export default function Mainpage() {
  const [partnerStoreList, setPartnerStoreList] = useState(
    [] as PartnerStore[]
  );
  const [mainBannerList, setMainBannerList] = useState([] as MainBanner[]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  const selectMainBannerList = async () => {
    const mainBannerList = await customAxios.get(`${API.MAIN_BANNER}`);
    setMainBannerList(mainBannerList?.data?.response.data);
  };

  const selectPartnerStoreList = async () => {
    const partnerStoreList = await customAxios.get(`${API.PARTNER_STORE}`);
    setPartnerStoreList(partnerStoreList?.data?.response.data);
  };

  useEffect(() => {
    setLoading(true);
    selectPartnerStoreList();
    selectMainBannerList();
    setLoading(false);
  }, []);

  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };

  const handlePagePartnerStore = (e: any) => {
    const partnerStoreId = e.target.id;

    router.push(`/partner/store/${partnerStoreId}`);

    partnerStoreList.filter((item) => {
      if (item.id === Number(partnerStoreId)) {
        console.log("item", item);
      }
    });
  };

  return (
    <div className="main_container">
      {/* <Script
        src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
        type="text/javascript"
      /> */}
      <div className="main_banner_ctn">
        <Image
          className="main_banner_img"
          src="https://stay-interview.s3.amazonaws.com/main.png"
          alt="main_top"
          // sizes="120px"
          // priority="low"
          width={1920}
          height={845}
          priority={true}
          quality={80}
        />
        {/* <div className="container_banner_top"> */}
        <div className="box_banner_top">
          <div className="box_banner_title">
            <div className="main_banner_title">STAY INTERVIEW</div>
            <div className="main_banner_sub_title">STAY INTERVIEW</div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="slider_container">
        <SlickSlider {...settings}>
          {mockList?.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item?.imageUrl}
                  alt={item?.imageName}
                  width={1920}
                  height={600}
                  // priority={true}
                  quality={80}
                />
              </div>
            );
          })}
        </SlickSlider>
      </div>
      <div className="box_main_our_stay md:mb-20">
        <div className="main_our_stay_container">
          <div className="main_our_stay_title_container">
            <div
              style={{ fontSize: "32px", fontWeight: "700", color: "#203d1e" }}
            >
              OUR STAY
            </div>
            <div className="main_out_stay_hotelList_div">
              스테이인터뷰의 숙소들
            </div>
          </div>
          <div className="grid gap-10 px-5 md:gap-10 md:px-0 md:grid-cols-2 lg:grid-cols-3">
            {mockList?.map((item, index) => {
              return (
                <div className="out_stay_container" key={index}>
                  <div className="w-full">
                    <Image
                      src={item?.imageUrl}
                      alt={item?.imageName}
                      width={370}
                      height={230}
                      className="w-full md:h-[250px] object-cover"
                      // style={{ width: "370px", height: "230px" }}
                    />
                  </div>
                  <div className="flex py-6 md:py-10">
                    <div className="our_stay_content_container">
                      <div className="">
                        <div style={{ fontSize: "18px", fontWeight: "800" }}>
                          {item?.storeName}
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "300" }}>
                          {item?.address}
                        </div>
                      </div>

                      <button
                        className="md:w-[100px] md:h-[29px] px-2 justify-center  flex items-center border rounded-full hover:bg-[#203d1e] hover:text-white transition-all duration-300"
                        id={item.id}
                        onClick={handlePagePartnerStore}
                      >
                        둘러보기 →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

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
