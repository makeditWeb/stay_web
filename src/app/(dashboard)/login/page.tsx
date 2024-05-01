"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { customAxios } from "@/modules/common/api";
import { API } from "@/app/api/config";

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
        <div className="flex w-full flex-col gap-2.5 mb-4">
          <input
            className="px-4 py-4 h-[76px] w-full  rounded-[15px] outline-none placeholder:text-[#d4d4d4]"
            placeholder="휴대폰 번호를 입력해주세요."
            name="acPhone"
            onChange={onChangeLoginParam}
          />
          <input
            className="px-4 py-4 h-[76px] w-full  rounded-[15px] outline-none placeholder:text-[#d4d4d4]"
            placeholder="비밀번호를 입력해주세요."
            name="acPw"
            onChange={onChangeLoginParam}
          />
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
            <Link
              href={{ pathname: "/findUser/id" }}
              style={{ textDecoration: "none" }}
            >
              <div className="btn_find_account">아이디 찾기</div>
            </Link>
            <div>|</div>
            <Link
              href={{ pathname: "/findUser/password" }}
              style={{ textDecoration: "none" }}
            >
              <div className="btn_find_account">비밀번호 찾기</div>
            </Link>
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
