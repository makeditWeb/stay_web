"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { customAxios } from "@/modules/common/api";
import { API } from "@/app/api/config";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const acId: any = searchParams.get("acId");

  useEffect(() => {
    // acId: any = searchParams.get("acId");
    console.log("acId", acId);
  }, []);

  //본인인증 버튼
  const onClickIdentityVerification = async () => {
    customAxios
      .get(`${API.NICE_ID}/getEncData/find-user`)
      .then((res) => {
        const { passForm } = document;

        if (passForm && res.data.response) {
          const left = (screen.width - 500) / 2;
          const top = (screen.height - 800) / 2;

          const option = `status=no, menubar=no, toolbar=no, resizable=no, width=500, height=600, top=${
            screen.height / 2
          }, left=${left}`;

          // const nicePopup = window.open("", "nicePopup", option);

          passForm.action =
            "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
          passForm.EncodeData.value = res.data.response;
          passForm.target = "popupChk";
          passForm.submit();
        }
      })
      .finally(() => {
        console.log("finally");
      });
  };

  return (
    <div className="container_find_id">
      <div className="wrap_find_id">
        <div className="header_find_id">아이디 찾기</div>
        <div className="header_text_find_id">
          회원가입시 등록하신 정보로 아이디를 확인할 수 있습니다.
        </div>
        {acId ? (
          <div className="content_id_result">
            <div className="section_id_result">
              <div className="inp_id_result">
                가입하신 아이디는 <span className="id_result">{acId}</span>{" "}
                입니다.
              </div>
              <Link
                href={{ pathname: "/login" }}
                style={{ textDecoration: "none" }}
              >
                <div className="btn_id_result">로그인 하러 가기</div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="section_btn">
            <div className="btn_login" onClick={onClickIdentityVerification}>
              본인 인증하기
            </div>
          </div>
        )}
      </div>
      <form name="passForm" method="post">
        <input type="hidden" name="m" value="service" />
        <input type="hidden" name="EncodeData" id="EncodeData" />
      </form>
    </div>
  );
}
