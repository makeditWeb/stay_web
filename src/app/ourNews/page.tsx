"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import moment from "moment";
import "moment/locale/ko";
import Link from "next/link";
// import Loading from "@/components/common/loading";

export default function OurNewsPage() {
  const [ourNewsList, setOurNewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    customAxios.get(`${API.OUR_NEWS}`).then((res) => {
      setOurNewList(res.data.response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading === true ? (
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            background: "#ffffffb7",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              font: "1rem Noto Sans KR",
              textAlign: "center",
            }}
          >
            잠시만 기다려 주세요.
          </div>
          <img
            src={"/assets/loading/spinner_green.gif"}
            alt="로딩중"
            width="10%"
          />
        </div>
      ) : null}
      <div className="container_our_news_list">
        <div className="box_title_our_news_list">Our News</div>
        <div className="box_st_news_list">
          스테이인터뷰 소식을 전해드립니다.
        </div>
        {ourNewsList.map((item) => {
          return (
            <div className="container_our_news_content">
              <div className="box_our_news_content" key={item.id}>
                <div className="box_news_image_list">
                  <img
                    src={item.image?.imageUrl}
                    alt={item.image?.imageName}
                    // style={{ width: "280px", height: "155px" }}
                  />
                </div>
                <div className="box_our_news_info">
                  <Link
                    href={{ pathname: `/ourNews/${item.id}` }}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="box_news_day_list">
                      {moment(item.createdDate).format("YYYY-MM-DD")}
                    </div>

                    <div className="box_news_title_list">{item.title}</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
