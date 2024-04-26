"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { customAxios } from "@/modules/common/api";
import { API } from "@/app/api/config";
import SweetAlert from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId: any = searchParams.get("userId");

  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [resetPassword, setResetPassword] = useState<string>("");

  const onChangeResetPassword = (e) => {
    const { value } = e.target;
    setResetPassword(value);
  };

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (resetPassword === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [resetPassword]
  );

  //비밀번호 변경
  const onClickChangePassword = async () => {
    await customAxios
      .put(`${API.USER_WEB}/change-pw/${userId}`, {
        acPw: resetPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          SweetAlert.fire({
            text: `비밀번호가 변경되었습니다`,
            icon: "success",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              location.href = "/login";
            }
          });
        }
      });
  };

  //본인인증 버튼
  const onClickIdentityVerification = async () => {
    customAxios.get(`${API.NICE_ID}/getEncData/find-password`).then((res) => {
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
    });
  };

  return (
    <div className="container_find_id">
      <div className="wrap_find_id">
        <div className="header_find_id">비밀번호 찾기</div>
        <div className="header_text_find_id">
          회원가입시 등록하신 정보로 비밀번호를 재설정이 가능합니다.
        </div>
        {userId ? (
          <div className="section_pw_reset">
            <div className="box_pw_result">
              <div className="box_inp_pw_reset">
                <div className="content_pw_reset">
                  <input
                    className="inp_pw_reset"
                    type="password"
                    name="acPw"
                    // value={phoneNumber}
                    placeholder="비밀번호를 입력해주세요."
                    onChange={onChangeResetPassword}
                  />
                </div>
                <div className="content_pw_reset">
                  <input
                    className="inp_pw_reset"
                    type="password"
                    name="checkPassword"
                    placeholder="비밀번호 확인을 위해 재입력해주세요."
                    onChange={onChangePasswordConfirm}
                  />
                </div>
                {passwordConfirm.length > 0 && (
                  <div className="inner_information_text">
                    <div className="title_information_none"></div>
                    <span
                      style={{ color: isPasswordConfirm ? "black" : "red" }}
                      className={`message ${
                        isPasswordConfirm ? "success" : "error"
                      }`}
                    >
                      {passwordConfirmMessage}
                    </span>
                  </div>
                )}
              </div>

              <div className="btn_pw_reset" onClick={onClickChangePassword}>
                변경하기
              </div>
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
