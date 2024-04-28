"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

export default function OurStayPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const [ourStayStoreList, setOutStayStoreList] = useState<PartnerStore[]>([]);

  useEffect(() => {
    customAxios
      .get(`${API.PARTNER_STORE}/our-stay`, {
        params: {
          category: "",
        },
      })
      .then((res) => {
        console.log("res.data.response: ", res.data.response);

        res.data.response.map((data) => {
          setOutStayStoreList((prev) => [
            ...prev,
            {
              id: data.id,
              storeName: data.storeName,
              imageUrl: data.imageUrl,
              imageName: data.imageName,
              address: data.address,
            },
          ]);
        });
      });
  }, []);

  const onClickSelectOurStayList = async (
    tabIndex: number,
    category: string
  ) => {
    setActiveTab(tabIndex);

    const ourStayStoreList = await customAxios.get(
      `${API.PARTNER_STORE}/our-stay`,
      {
        params: {
          category: category,
        },
      }
    );
    setOutStayStoreList(ourStayStoreList.data.response);
  };

  const handlePagePartnerStore = (e: any) => {
    const partnerStoreId = e.target.id;

    router.push(`/partner/store/${partnerStoreId}`);

    // partnerStoreList.filter((item) => {
    //   if (item.id === Number(partnerStoreId)) {
    //     console.log("item", item);
    //   }
    // });
  };

  return (
    <div className="container_our_stay">
      <div className="div_header_our_stay">
        <img
          src="/ourStayImg.png"
          alt="대표 이미지"
          className="img_header_our_stay"
        />
        <div className="container_header_our_stay">
          <div className="title_header_top_our_stay">
            일상으로 부터의 피신처
          </div>
          <div className="title_header_mid_our_stay">스테이인터뷰, 태안</div>
          <div className="title_header_bot_our_stay">
            고요하고 편안함을 주는 풍광속의 스테이인터뷰 태안.
            <br />그 분위기 속에서 쉼의 마침표를 찍어보자.
          </div>
          <div className="btn_header_our_stay">둘러보기 →</div>
        </div>
      </div>
      <div className="container_content_our_stay">
        <div className="title_content_our_stay">OUR STAY</div>
        <div className="tab_content_our_stay">
          <div
            className={
              activeTab == 1 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(1, "")}
          >
            전체
          </div>
          <div
            className={
              activeTab == 2 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(2, "RC0002")}
          >
            객실
          </div>
          <div
            className={
              activeTab == 3 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(3, "RC0003")}
          >
            방갈로
          </div>
          <div
            className={
              activeTab == 4 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(4, "RC0005")}
          >
            카라반
          </div>
          <div
            className={
              activeTab == 5 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(5, "RC0006")}
          >
            글램핑
          </div>
          <div
            className={
              activeTab == 6 ? "btn_tab_content_active" : "btn_tab_content"
            }
            onClick={() => onClickSelectOurStayList(6, "RC0007")}
          >
            풀카바나
          </div>
        </div>
      </div>
      <div className="div_content_our_stay">
        <div className="list_our_stay">
          {/* <OurStayTabContents tabNumber={activeTab} category={category} /> */}
          {ourStayStoreList?.map((item, index) => {
            return (
              <div className="out_stay_container" key={index}>
                <div style={{ width: "370px", height: "230px" }}>
                  <Image
                    src={item?.imageUrl}
                    alt={item?.imageName}
                    width={370}
                    height={230}
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
                      둘러보기
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
