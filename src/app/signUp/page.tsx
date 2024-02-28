"use client";
import React from "react";
import styled from "styled-components";

export default function SignUpPage() {
  return (
    <SignUpContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "200px",
          width: "270px",
          margin: "auto",
        }}
      >
        <div>
          <div
            style={{
              width: "270px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              fontSize: "50px",
              fontWeight: "700",
              marginBottom: "10px",
              color: "#162318",
            }}
          >
            Sign Up
          </div>
          <div
            style={{
              height: "22px",
              fontSize: "19px",
              fontWeight: "300",
              color: "#162318",
            }}
          >
            스테이인터뷰의 회원이 되어주세요.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          width: "1200px",
          height: "560px",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            height: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1100px",
              height: "60px",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "24px",
                background: "#203d1e",
                color: "#ffffff",
                borderRadius: "4px",
                marginRight: "50px",
              }}
            >
              이름
            </div>
            <div
              style={{
                width: "1000px",
                height: "50px",
                border: "1px solid #203d1e",
                borderRadius: "15px",
              }}
            >
              이름을 입력해주세요.
            </div>
          </div>
        </div>
      </div>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  width: 1200px;
  height: 800px;
  background: yellow;
  margin: auto;
`;
