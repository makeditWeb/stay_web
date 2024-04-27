"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { customAxios } from "@/modules/common/api";
import { useRouter, useSearchParams } from "next/navigation";
import { API } from "@/app/api/config";
import SweetAlert from "sweetalert2";
import * as DOMPurify from "dompurify";

type Inputs = {
  acName: string;
  acEmail: string;
  acPw: string;
  checkPassword: string;
  acPhone: string;
};

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const acId: any = searchParams.get("acId");
  const acName: any = searchParams.get("acName");

  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCheckedPhoneNumber, setIsCheckedPhoneNumber] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  // 체크박스
  const [isChecked, setIsChecked] = useState(false);

  const [termsList, setTermsList] = useState<any>([]);
  // 체크박스
  const [allChecked, setAllChecked] = useState(false);

  const [signUpData, setSignUpData] = useState({
    acName: "",
    acEmail: "",
    acPw: "",
    checkPassword: "", //비밀번호 확인
    acPhone: "",
  });

  useEffect(() => {
    customAxios
      .get(`${API.TERMS}`, {
        params: {
          category: "SIGN_UP",
          termsType: "HEAD_OFFICE",
        },
      })
      .then((res) => {
        const getTermaList = res.data.response.data;
        getTermaList.map((term) => {
          setTermsList((prev) => [
            ...prev,
            {
              id: term.id,
              title: term.title,
              content: term.content,
              isAgree: false,
              isToggle: false,
              toggleImage: "/topVector.png",
            },
          ]);
        });
      });
  }, []);

  const validate = (data: Inputs) => {
    if (!data.acName) return "이름을 입력해주세요.";
    if (!data.acEmail) return "이메일을 입력해주세요.";
    if (!data.acPw) return "비밀번호를 입력해주세요.";
    if (!isPasswordConfirm) return "비밀번호가 일치하지 않습니다.";
    if (!data.acPhone) return "휴대폰 번호를 입력해주세요.";
    // if (!isCheckedPhoneNumber) return "휴대폰 인증을 해주세요.";
    // if (!isTermsOfUseChecked) return "필수 이용약관은 동의가 필요합니다!";
    // if (!isCollectionChecked) return "필수 이용약관은 동의가 필요합니다!";
    // if (!isAgeChecked) return "필수 이용약관은 동의가 필요합니다!";

    return "";
  };

  const onChangeSignUpData = (e) => {
    const { name, value } = e.target;

    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (signUpData.acPw === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        setIsPasswordConfirm(false);
      }
    },
    [signUpData.acPw]
  );

  const handleSelectAllChange = (e) => {
    const { checked } = e.target;

    const newTermsList = termsList.map((term) => {
      term.isAgree = checked;
      return term;
    });

    setTermsList(newTermsList);
    setAllChecked(checked);
  };

  // 연락처 글자 제한, 자동 (-)
  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    if (inputPhoneNumber.length > 11) {
      inputPhoneNumber = inputPhoneNumber.slice(0, 11); // 11자 이상 입력 방지
    }
    // 하이픈(-) 삽입
    if (inputPhoneNumber.length > 3 && inputPhoneNumber.length < 8) {
      inputPhoneNumber = inputPhoneNumber.replace(/(\d{3})(\d{1,4})/, "$1-$2");
    } else if (inputPhoneNumber.length >= 8) {
      inputPhoneNumber = inputPhoneNumber.replace(
        /(\d{3})(\d{4})(\d{1,4})/,
        "$1-$2-$3"
      );
    }
    setPhoneNumber(inputPhoneNumber);
    setSignUpData({
      ...signUpData,
      acPhone: inputPhoneNumber,
    });
  };

  //회원가입 버튼
  const onClickSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = validate(signUpData);

    if (message) {
      SweetAlert.fire({
        title: `${message}`,
        icon: "warning",
        showConfirmButton: true,
      });

      return;
    }

    // signUpData.isCheckedPhoneNumber = isCheckedPhoneNumber;

    await customAxios
      .post(`${API.USER_WEB}/sign-up`, signUpData)
      .then((res) => {
        if (res.status === 200) {
          SweetAlert.fire({
            title: "회원가입이 완료되었습니다.",
            icon: "success",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/login");
            }
          });
        }
      });
  };

  //본인인증 버튼
  const onClickIdentityVerification = async () => {
    customAxios.get(`${API.NICE_ID}/getEncData/sign-up`).then((res) => {
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

  const termsAgreeHandler = (e) => {
    const { id } = e.target;
    const termsId = id.replace("terms", "");

    const newTermsList = termsList.map((term: any, index: number) =>
      term.id === Number(termsId)
        ? {
            ...term,
            isAgree: !term.isAgree,
          }
        : term
    );

    //약관 모두 동의상태이면 allCheck도 true로 변경
    const isAllChecked = newTermsList.every((term) => term.isAgree);
    setAllChecked(isAllChecked);
    setTermsList(newTermsList);
  };

  const termsToggleHandler = (e) => {
    const { id } = e.target;

    const newTermsList = termsList.map((term, index) =>
      index === Number(id)
        ? {
            ...term,
            toggleImage:
              term.toggleImage === "/topVector.png"
                ? "/bottomVector.png"
                : "/topVector.png",
            isToggle: !term.isToggle,
          }
        : term
    );

    setTermsList(newTermsList);
  };

  return (
    <>
      <Form noValidate onSubmit={onClickSignUp}>
        <div className="container_sign_up">
          <div className="header_title_sign_up">
            <div>
              <div className="header_title_sign_up">Sign Up</div>
              <div className="header_subtitle_sign_up">
                스테이인터뷰의 회원이 되어주세요.
              </div>
            </div>
          </div>

          <div className="section_information">
            <div className="wrap_information">
              <div
                className="btn_get_verification_code_m"
                onClick={onClickIdentityVerification}
                style={{
                  background: acName == null ? "#203d1e" : "#9bac9a",
                }}
              >
                본인 인증하기
              </div>
              <div className="inner_information">
                <div className="title_information">이름</div>
                <input
                  className="inp_check_information"
                  type="text"
                  name="acPhone"
                  value={acName != null ? acName : ""}
                  disabled
                />
                <div
                  className="btn_get_verification_code"
                  onClick={onClickIdentityVerification}
                  style={{
                    background: acName == null ? "#203d1e" : "#9bac9a",
                  }}
                >
                  본인 인증하기
                </div>
              </div>
              <div className="inner_information">
                <div className="title_information">연락처</div>
                <input
                  className="inp_check_information"
                  type="text"
                  name="acPhone"
                  value={acId != null ? acId : ""}
                  disabled
                />
                <div className="div_sign_in"></div>
              </div>
              <div className="inner_information_text">
                ※ 연락처는 아이디로 사용됩니다.
              </div>

              <div className="inner_information">
                <div className="title_information">비밀번호</div>
                <input
                  className="inp_check_information"
                  type="password"
                  name="acPw"
                  // value={phoneNumber}
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangeSignUpData}
                />
                <div className="div_sign_in"></div>
              </div>
              <div className="inner_information">
                <div className="title_information_none"></div>
                <input
                  className="inp_check_information"
                  type="text"
                  name="checkPassword"
                  placeholder="비밀번호 확인을 위해 재입력해주세요."
                  onChange={onChangePasswordConfirm}
                />
                <div className="div_sign_in"></div>
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

              <div className="inner_information">
                <div className="title_information">이메일</div>
                <input
                  className="inp_check_information"
                  type="text"
                  name="acEmail"
                  placeholder="이메일을 입력해주세요."
                  onChange={onChangeSignUpData}
                />
                <div className="div_sign_in"></div>
              </div>
            </div>
          </div>
          <div className="section_terms_use">
            <div className="title_terms_use">사용자 이용약관</div>
            <div className="content_terms_use">
              <div className="box_terms_use">
                <div className="wrap_temrs_use">
                  <input
                    className="inp_checkbox_terms_use"
                    type="checkbox"
                    id="ckbox"
                    checked={isChecked}
                    onChange={handleSelectAllChange}
                  ></input>
                  <label
                    className="lebel_checkbox_terms_use"
                    htmlFor="ckbox"
                  ></label>
                  전체동의
                </div>
                <div className="line_terms_use"></div>
                {termsList.map((term: any, index: number) => {
                  return (
                    <>
                      <div className="terms_wrap">
                        <div className="terms_item_section">
                          <CheckBox
                            type="checkbox"
                            id={`terms${term.id}`}
                            checked={term.isAgree}
                            onChange={termsAgreeHandler}
                          ></CheckBox>
                          <CheckBoxLabel
                            htmlFor={`terms${term.id}`}
                          ></CheckBoxLabel>
                          <div className="terms_item_title">{term.title}</div>
                          <img
                            src={term.toggleImage}
                            alt="화살표"
                            className="terms_item_img"
                            id={index}
                            onClick={termsToggleHandler}
                          />
                        </div>
                      </div>
                      {term.isToggle && (
                        <div className="terms_toggle_container">
                          <div
                            className="terms_toggle_section"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(String(term.content)),
                            }}
                          ></div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="btn_sign_up" type="submit">
            회원 가입하기
          </button>
        </div>
      </Form>
      <form name="passForm" method="post">
        <input type="hidden" name="m" value="service" />
        <input type="hidden" name="EncodeData" id="EncodeData" />
      </form>
    </>
  );
}

const CheckBox = styled.input`
  display: none;
  width: 23px;
  height: 23px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
`;

const CheckBoxLabel = styled.label`
  width: 23px;
  height: 23px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    width: 10px;
    height: 14px;
    background-color: transparent;
    border: 2px solid yellow;
    border-left: none;
    border-top: none;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }

  ${CheckBox}:checked + &::after {
    opacity: 1;
    border-color: #d9d9d9;
  }
`;
