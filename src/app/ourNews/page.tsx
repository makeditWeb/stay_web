"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import moment from "moment";
import "moment/locale/ko";

export default function OurNewsPage() {
  const [ourNewsList, setOurNewList] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("ourNewsList", ourNewsList);

  useEffect(() => {
    setLoading(true);
    customAxios.get(`${API.OUR_NEWS}`).then((res) => {
      setOurNewList(res.data.response.data);
      setLoading(false);
    });
  }, []);

  return (
    <OurNewsContainer>
      <div
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
          color: "#162318",
          marginTop: "85px",
        }}
      >
        Our News
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "19px",
          fontWeight: "300",
          color: "#162318",
          margin: "30px 0 30px 0",
        }}
      >
        스테이인터뷰 소식을 전해드립니다.
      </div>
      {ourNewsList.map((item) => {
        return (
          <NewsContents key={item.id}>
            <div
              style={{
                width: "280px",
                height: "155px",
                marginLeft: "30px",
                marginRight: "50px",
              }}
            >
              <Image
                src={item.image?.imageUrl}
                alt={item.image?.imageName}
                width={280}
                height={155}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "300",
                  color: "#162318",
                  marginBottom: "15px",
                }}
              >
                {moment(item.createdDate).format("YYYY-MM-DD")}
              </div>
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: "500",
                  color: "#162318",
                }}
              >
                {item.title}
              </div>
            </div>
          </NewsContents>
        );
      })}
    </OurNewsContainer>
  );
}

const OurNewsContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const NewsContents = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 220px;
  background: #ffffff;
  border-radius: 15px;
  margin-bottom: 20px;
`;
