"use client";
import React, { useState, useEffect } from "react";
import { Alert, Form, Card, CardBody, CardHeader } from "react-bootstrap";
import styled from "styled-components";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";
import moment from "moment";
import "moment/locale/ko";
import * as DOMPurify from "dompurify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter, usePathname } from "next/navigation";

export default function OurNewsDetailpage() {
  const pathname = usePathname();
  const ourNewsId = pathname.split("/").reverse()[0];
  const [ourNewsData, setOurNewsData] = useState({});
  const [peopleAndAmounQuillValue, setPeopleAndAmounQuillValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  useEffect(() => {
    customAxios.get(`${API.OUR_NEWS}/${ourNewsId}`).then((res) => {
      setOurNewsData(res.data.response);
      setPeopleAndAmounQuillValue(res.data.response.content);
    });
  }, []);

  return (
    <div className="container_our_news_detatil">
      <div className="box_title_our_news">
        <div className="box_news_name">{ourNewsData.title}</div>
        <div className="box_news_day">
          {moment(ourNewsData.createdDate).format("YYYY-MM-DD")}
        </div>
      </div>
      <div className="box_news_content">
        <div style={{ margin: "auto" }}>
          <div
            style={{
              marginBottom: "27px",
              // height: "650px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                // width: "1200px",
                borderRadius: "15px",
              }}
            >
              <div
                id="storyContent"
                className="ql-editor box_our_news_detail"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(ourNewsData?.content)),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="btn_our_news">&lt; Prev</div>
        <div className="btn_our_news">LIST</div>
        <div className="btn_our_news">Next &gt;</div>
      </div>
    </div>
  );
}

const OurNewsDetailContainer = styled.div`
  margin: auto;
  padding: 150px 300px;
  min-width: 1200px;
`;

const NewsName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  color: #162318;
`;

const NewsDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: 300;
  color: #162318;
`;

const NewsContents = styled.div`
  // width: 1200px;
  height: 100%;
  // display: ruby;
  // height: 1000px;
  // background: #ffffff;
  border-radius: 15px;
  padding-top: 30px;
  margin-bottom: 30px;
`;

const NewsBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid;
  cursor: pointer;
`;
