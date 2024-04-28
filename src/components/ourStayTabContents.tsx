import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

interface PartnerStore {
  id: number;
  storeName: string;
  address: string;
  imageUrl: string;
  imageName: string;
}

const OurStayTabContents = ({ tabNumber, category }) => {
  const [ourStayStoreList, setOutStayStoreList] = useState<PartnerStore[]>([]);

  console.log("ourStayStoreList: ", ourStayStoreList);
  console.log("tabNumber: ", tabNumber);
  console.log("category: ", category);

  useEffect(() => {
    customAxios
      .get(`${API.PARTNER_STORE}/our-stay`, {
        params: {
          category: category,
        },
      })
      .then((res) => {
        console.log("res.data.response: ", res.data.response);

        const result = res.data.response;

        res.data.response.map((data) => {
          ourStayStoreList.push({
            id: data.id,
            storeName: data.storeName,
            imageUrl: data.imageUrl,
            imageName: data.imageName,
            address: data.address,
          });
        });
      });
  }, []);

  return (
    <>
      <div className="container_item_our_stay">
        <div className="main_our_stay_content_container">
          {ourStayStoreList?.map((item, index) => {
            return (
              <div className="out_stay_container" key={index}>
                <div style={{ width: "370px", height: "230px" }}>
                  <Image
                    src={item?.imageUrl}
                    alt={item?.imageName}
                    width={370}
                    height={230}
                    // style={{ width: "370px", height: "230px" }}
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
                      // onClick={handlePagePartnerStore}
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
    </>
  );
};

export default OurStayTabContents;

const HotelContainer = styled.div`
  width: 370px;
  height: 350px;
  border: 1px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

const HotelContents = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
  justify-content: space-between;
`;

const DetailPostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  width: 70px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 300;
  color: #000000;
  cursor: pointer;
`;
