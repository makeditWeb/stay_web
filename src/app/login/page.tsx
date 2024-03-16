"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import KakaoLogin from "react-kakao-login";

export default function LoginPage() {
  const Rest_api_key = "fdae58a0738089d459f46e607436eb39"; //REST API KEY
  const redirect_uri = "http://3.209.225.241:8000/healthCheck"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div style={{ height: "100%", background: "#f6f5f1" }}>
      <LoginContainer>
        <LoginTextDiv>Login</LoginTextDiv>
        <AccountInput
          style={{
            marginBottom: "25px",
          }}
        >
          <LoginInputDiv placeholder="휴대폰 번호를 입력해주세요."></LoginInputDiv>
        </AccountInput>
        <AccountInput
          style={{
            marginBottom: "10px",
          }}
        >
          <PasswardInputDiv placeholder="비밀번호를 입력해주세요."></PasswardInputDiv>
        </AccountInput>
        <SignDiv>
          <Link
            href={{ pathname: "/signUp" }}
            style={{ textDecoration: "none" }}
          >
            <SignUpButton>회원가입</SignUpButton>
          </Link>
          <AccountFind>
            <IdPasswardFindDiv>아이디 찾기</IdPasswardFindDiv>|
            <IdPasswardFindDiv>비밀번호 찾기</IdPasswardFindDiv>
          </AccountFind>
        </SignDiv>
        <GeneralLoginButton>로그인</GeneralLoginButton>
        {/* <KakaoLogin
          token={kakaoClientId}
          onSuccess={kakaoOnSuccess}
          onFail={kakaoOnFailure}
        /> */}

        <KakaoLoginButton onClick={handleLogin}>
          <Image
            src="/kakaoIcon.png"
            alt="카카오 로그인 버튼"
            width={20}
            height={18}
          />
          <div style={{ fontSize: "18px", marginLeft: "10px" }}>
            카카오 로그인
          </div>
        </KakaoLoginButton>
        <ReservationInquiryButton>비회원 예약조회</ReservationInquiryButton>
      </LoginContainer>
    </div>
  );
}

const LoginContainer = styled.div`
  width: 500px;
  height: 700px;
  margin: auto;
`;

const LoginTextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 150px;
  font-size: 50px;
  font-weight: 700;
  color: #162318;
`;

const AccountInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 76px;
  background: #ffffff;
  border-radius: 15px;
`;

const LoginInputDiv = styled.input`
  width: 450px;
  height: 35px;
  range: 15px;
  border: none;
  border-radius: 15px;
  background: #ffffff;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #d4d4d4;
  }

  &:focus {
    outline: none;
  }
`;

const PasswardInputDiv = styled.input`
  width: 450px;
  height: 35px;
  range: 15px;
  border: none;
  border-radius: 15px;
  background: #ffffff;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #d4d4d4;
  }

  &:focus {
    outline: none;
  }
`;

const SignDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 82px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #162318;
  cursor: pointer;
`;

const AccountFind = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
  color: #162318;
`;

const IdPasswardFindDiv = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #162318;
  cursor: pointer;
`;

const GeneralLoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 52px;
  border-radius: 15px;
  background: #203d1e;
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 18px;
  cursor: pointer;
`;

const KakaoLoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 52px;
  border-radius: 15px;
  background: #fee500;
  margin-bottom: 15px;
  cursor: pointer;
`;

const ReservationInquiryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 52px;
  font-size: 18px;
  border-radius: 15px;
  background: #c2bfb3;
  color: #ffffff;
  cursor: pointer;
`;
