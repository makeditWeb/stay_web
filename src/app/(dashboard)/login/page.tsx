"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { customAxios } from "@/modules/common/api";
import { API } from "@/app/api/config";
import SweetAlert from "sweetalert2";
import KakaoLogin from "react-kakao-login";

export default function LoginPage() {
  const router = useRouter();

  const Rest_api_key = "fdae58a0738089d459f46e607436eb39"; //REST API KEY
  // const redirect_uri = "http://3.209.225.241:8000/healthCheck"; //Redirect URI
  const redirect_uri = "http://localhost:9000/api/v1/user-web/kakao"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const code = new URL(window.location.href).searchParams.get("code");

  const [loginParam, setLoginParam] = useState({});

  const onChangeLoginParam = (e) => {
    const { name, value } = e.target;
    setLoginParam({ ...loginParam, [name]: value });
  };

  const handleLogin = () => {
    // window.location.href = kakaoURL;
    window.open(kakaoURL, "_self");
  };

  //로그인 기능
  const onClickLogin = async () => {
    await customAxios.post(`${API.LOGIN}`, loginParam).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.response.accessToken);
        localStorage.setItem("refreshToken", res.data.response.refreshToken);
        customAxios.get(`${API.USER_WEB}/info`).then((res) => {
          console.log(`${API.USER_WEB}/info ::`, res);
          localStorage.setItem("user", JSON.stringify(res.data.response));
          localStorage.setItem("acName", res.data.response.acName);
        });
        router.push("/");
      }
    });
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const access_token = url.searchParams.get("access_token");

    if (code) {
      customAxios
        .get(`${API.USER_WEB}/login/kakao?code=${access_token}`)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.response.accessToken);
          localStorage.setItem("refreshToken", res.data.response.refreshToken);

          router.push("/");
        });
    }
  }, []);

  return (
    <div className="container_login">
      <div className="wrap_login">
        <div className="header_title_login">Login</div>
        <div className="section_login">
          <input
            className="inp_login"
            placeholder="휴대폰 번호를 입력해주세요."
            name="acPhone"
            onChange={onChangeLoginParam}
          ></input>
        </div>
        <div className="section_login">
          <input
            className="inp_login"
            placeholder="비밀번호를 입력해주세요."
            name="acPw"
            onChange={onChangeLoginParam}
          ></input>
        </div>
        <div className="section_sign_in">
          <div className="inner_sign_in">
            <Link
              href={{ pathname: "/signUp" }}
              style={{ textDecoration: "none" }}
            >
              <div className="btn_sign_in">회원가입</div>
            </Link>
          </div>

          <div className="inner_find_account">
            <div className="btn_find_account">아이디 찾기</div>|
            <div className="btn_find_account">비밀번호 찾기</div>
          </div>
        </div>
        <div className="section_btn">
          <div className="btn_login" onClick={onClickLogin}>
            로그인
          </div>
          {/* <KakaoLogin
          token={kakaoClientId}
          onSuccess={kakaoOnSuccess}
          onFail={kakaoOnFailure}
        /> */}

          <div className="btn_kakao" onClick={handleLogin}>
            <img
              src="/kakaoIcon.png"
              alt="카카오 로그인 버튼"
              className="img_btn_kakao"
            />
            <div className="title_kakao_login">카카오 로그인</div>
          </div>
          <Link
            href={{ pathname: "/reservation/nonMember" }}
            style={{ textDecoration: "none" }}
          >
            <div className="btn_reservation_non_member">비회원 예약조회</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const LoginContainer = styled.div`
  width: 500px;
  height: 700px;
  margin: auto;
  padding-top: 100px;
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
