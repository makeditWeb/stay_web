"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import TabButton from "./components/TabButton.js";
import StoreCard from "./components/StoreCard.js";
import mockList from "@/data/mockup.json";
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
        <div className="flex items-center">
          <TabButton
            active={activeTab === 1}
            onClick={() => onClickSelectOurStayList(1, "")}
            label="전체"
          />
          <TabButton
            active={activeTab === 2}
            onClick={() => onClickSelectOurStayList(2, "RC0002")}
            label="객실"
          />
          <TabButton
            active={activeTab === 3}
            onClick={() => onClickSelectOurStayList(3, "RC0003")}
            label="방갈로"
          />{" "}
          <TabButton
            active={activeTab === 4}
            onClick={() => onClickSelectOurStayList(4, "RC0005")}
            label="카라반"
          />
          <TabButton
            active={activeTab === 5}
            onClick={() => onClickSelectOurStayList(5, "RC0006")}
            label="글램핑"
          />
          <TabButton
            active={activeTab === 6}
            onClick={() => onClickSelectOurStayList(6, "RC0007")}
            label="풀카바나"
          />
        </div>
      </div>
      <div className="div_content_our_stay">
        <div className="grid gap-10 px-5 md:gap-10 md:px-0 md:grid-cols-2 lg:grid-cols-3">
          {/* <OurStayTabContents tabNumber={activeTab} category={category} /> */}
          {mockList?.map((store, index) => (
            <StoreCard key={index} store={store} />
          ))}
        </div>
      </div>
    </div>
  );
}
