"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Slider from "react-slick";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import Script from "next/script";
import Loading from "@/components/common/loading";

export default function Mainpage() {
  const [partnerStoreList, setPartnerStoreList] = useState([]);
  const [mainBannerList, setMainBannerList] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  console.log("mainBannerList", mainBannerList);

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

  const selectMainBanner = async () => {
    const mainBanner = await customAxios.get(`${API.MAIN_BANNER}`);
    setMainBannerList(mainBanner.data.response.data);
  };

  useEffect(() => {
    setLoading(true);
    customAxios.get(`${API.PARTNER_STORE}`).then((res) => {
      if (res?.status === 200) {
        setPartnerStoreList(res.data.response.data);
      }
    });

    selectMainBanner();
    setLoading(false);
  }, []);

  const serverAuth = () => {
    if (typeof window !== "undefined") {
      const pay_obj = window;
      const { AUTHNICE } = pay_obj;

      goPay(document.payForm);
    }
  };

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
      <Script
        src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
        type="text/javascript"
      />
      <div className="main_banner_ctn">
        <img
          className="main_banner_img"
          src="/image/main/main.png"
          alt="main_top"
        />
        <div className="container_banner_top">
          <div className="box_banner_top">
            <div className="box_banner_title">
              <div className="main_banner_title">STAY INTERVIEW</div>
              <div className="main_banner_sub_title">STAY INTERVIEW</div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider_container">
        <SlickSlider {...settings}>
          {mainBannerList?.map((item, index) => {
            return (
              <div>
                <img src={item?.image?.imageUrl} alt={item?.image?.imageName} />
              </div>
            );
          })}
        </SlickSlider>
      </div>
      <div>
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
          <div className="main_our_stay_content_container">
            {partnerStoreList?.map((item, index) => {
              return (
                <>
                  <div className="out_stay_container" key={index}>
                    <div style={{ width: "370px", height: "230px" }}>
                      <img
                        src={item?.storeImage?.imageUrl}
                        alt={item?.storeImage?.imageName}
                        style={{ width: "370px", height: "230px" }}
                      />
                    </div>
                    <div style={{ display: "flex", marginTop: "45px" }}>
                      <div className="our_stay_content_container">
                        <div>
                          <div style={{ fontSize: "18px", fontWeight: "700" }}>
                            {item?.storeName}
                          </div>
                          <div style={{ fontSize: "12px", fontWeight: "300" }}>
                            {item?.address}
                          </div>
                        </div>

                        <button
                          className="our_stay_content_btn"
                          id={item.id}
                          onClick={handlePagePartnerStore}
                        >
                          둘러보기 →
                        </button>
                      </div>
                    </div>
                  </div>
                </>
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
