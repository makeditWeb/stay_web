"use client";
import React, { useState } from "react";
import styled from "styled-components";

export default function SignUpPage() {
  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

  const [termsOfUse, setTermsOfUse] = useState("/topVector.png");
  const [collectionInformation, setCollectionInformation] =
    useState("/topVector.png");
  const [ageCheck, setAgeCheck] = useState("/topVector.png");
  const [receivingInformation, setReceivingInformation] =
    useState("/topVector.png");

  const [termsOfUseToggle, setTermsOfUseToggle] = useState(false);
  const [collectionInformationToggle, setCollectionInformationToggle] =
    useState(false);
  const [ageCheckToggle, setAgeCheckToggle] = useState(false);
  const [receivingInformationToggle, setReceivingInformationToggle] =
    useState(false);

  // 체크박스
  const [isChecked, setIsChecked] = useState(false);
  const [isTermsOfUseChecked, setIsTermsOfUseChecked] = useState(false);
  const [isCollectionChecked, setIsCollectionChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isReceivingChecked, setIsReceivingChecked] = useState(false);

  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    setIsTermsOfUseChecked(checked);
    setIsCollectionChecked(checked);
    setIsAgeChecked(checked);
    setIsReceivingChecked(checked);
  };

  const termsOfUseCheckedHandler = () => {
    setIsTermsOfUseChecked(!isTermsOfUseChecked);
    setIsChecked(false);
  };

  const collectionCheckedHandler = () => {
    setIsCollectionChecked(!isCollectionChecked);
    setIsChecked(false);
  };

  const ageCheckedHandler = () => {
    setIsAgeChecked(!isAgeChecked);
    setIsChecked(false);
  };

  const receivingCheckedHandler = () => {
    setIsReceivingChecked(!isReceivingChecked);
    setIsChecked(false);
  };

  // const handleSelectAllChange = () => {
  //   setIsChecked(!isChecked);
  // };

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
  };

  const termsOfUseHandler = () => {
    setTermsOfUse(
      termsOfUse === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setTermsOfUseToggle(!termsOfUseToggle);
  };

  const collectionHandler = () => {
    setCollectionInformation(
      collectionInformation === "/topVector.png"
        ? "/bottomVector.png"
        : "/topVector.png"
    );

    setCollectionInformationToggle(!collectionInformationToggle);
  };

  const ageCheckHandler = () => {
    setAgeCheck(
      ageCheck === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );

    setAgeCheckToggle(!ageCheckToggle);
  };

  const receivingHandler = () => {
    setReceivingInformation(
      receivingInformation === "/topVector.png"
        ? "/bottomVector.png"
        : "/topVector.png"
    );
    setReceivingInformationToggle(!receivingInformationToggle);
  };

  const termsOfUseContent = () => {
    return {
      __html:
        '<iframe src="@/app/TermsOfUse" width="100%" height="100%"></iframe>',
    };
  };

  return (
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
          <div className="inner_information">
            <div className="title_information">이름</div>
            <div className="div_input_information">
              <input
                className="inp_information"
                type="text"
                placeholder="이름을 입력해주세요."
              />
            </div>
          </div>
          <div className="inner_information">
            <div className="title_information">이메일</div>
            <div className="div_input_information">
              <input
                className="inp_information"
                type="text"
                placeholder="이메일을 입력해주세요."
              />
            </div>
          </div>
          <div className="inner_information">
            <div className="title_information">비밀번호</div>
            <div className="div_input_information">
              <input
                className="inp_information"
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
          </div>
          <div className="inner_information">
            <div className="title_information_none"></div>
            <div className="div_input_information">
              <input
                className="inp_information"
                type="password"
                placeholder="비밀번호 확인을 위해 재입력해주세요."
              />
            </div>
          </div>
          <div className="inner_information">
            <div className="title_information">연락처</div>
            <div className="div_check_input_information">
              <div className="div_input_information_phone">
                <input
                  className="inp_check_information"
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요. )"
                />
              </div>
              <div className="btn_get_verification_code">인증번호 받기</div>
            </div>
          </div>
          <div className="inner_information_phone">
            <div className="title_information_none"></div>
            <div className="div_check_input_information">
              <div className="div_input_information_phone">
                <input
                  className="inp_check_information"
                  type="text"
                  placeholder="인증번호를 입력해주세요."
                />
              </div>
              <div className="btn_authenticate">인증하기</div>
            </div>
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
            <div className="wrap_content_terms_use">
              <div className="inner_content_terms_use">
                <input
                  className="inp_checkbox_terms_use"
                  type="checkbox"
                  id="ckbox1"
                  checked={isTermsOfUseChecked}
                  onChange={termsOfUseCheckedHandler}
                ></input>
                <label
                  className="lebel_checkbox_terms_use"
                  htmlFor="ckbox1"
                ></label>
                <div className="title_content_terms_use">
                  스테이 인터뷰 이용약관 동의 (필수)
                </div>
                <img
                  src={termsOfUse}
                  alt="화살표"
                  className="img_checkbox_terms_use"
                  onClick={termsOfUseHandler}
                />
              </div>
            </div>
            {termsOfUseToggle && (
              <div className="section_terms_conditions">
                <div
                  className="content_terms_conditions"
                  // dangerouslySetInnerHTML={}
                ></div>
              </div>
            )}
            <div className="wrap_content_terms_use">
              <div className="inner_content_terms_use">
                <input
                  className="inp_checkbox_terms_use"
                  type="checkbox"
                  id="ckbox2"
                  checked={isCollectionChecked}
                  onChange={collectionCheckedHandler}
                ></input>
                <label
                  className="lebel_checkbox_terms_use"
                  htmlFor="ckbox2"
                ></label>
                <div className="title_content_terms_use">
                  개인정보 수집 및 이용 동의 (필수)
                </div>
                <img
                  className="img_checkbox_terms_use"
                  src={collectionInformation}
                  alt="화살표"
                  onClick={collectionHandler}
                />
              </div>
            </div>
            {collectionInformationToggle && (
              <div className="section_terms_conditions">
                <div className="content_terms_conditions">
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
            <div className="wrap_content_terms_use">
              <div className="inner_content_terms_use">
                <input
                  className="inp_checkbox_terms_use"
                  type="checkbox"
                  id="ckbox3"
                  checked={isAgeChecked}
                  onChange={ageCheckedHandler}
                ></input>
                <label
                  className="lebel_checkbox_terms_use"
                  htmlFor="ckbox3"
                ></label>
                <div className="title_content_terms_use">
                  만 14세 이상 확인 (필수)
                </div>
                <img
                  src={ageCheck}
                  alt="화살표"
                  className="img_checkbox_terms_use"
                  onClick={ageCheckHandler}
                />
              </div>
            </div>
            {ageCheckToggle && (
              <div className="section_terms_conditions">
                <div className="content_terms_conditions">
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
            <div className="wrap_content_terms_use">
              <div className="inner_content_terms_use">
                <input
                  className="inp_checkbox_terms_use"
                  type="checkbox"
                  id="ckbox4"
                  checked={isReceivingChecked}
                  onChange={receivingCheckedHandler}
                ></input>
                <label
                  className="lebel_checkbox_terms_use"
                  htmlFor="ckbox4"
                ></label>
                <div className="title_content_terms_use">
                  마케팅 정보 수신 (선택)
                </div>
                <img
                  src={receivingInformation}
                  alt="화살표"
                  className="img_checkbox_terms_use"
                  onClick={receivingHandler}
                />
              </div>
            </div>
            {receivingInformationToggle && (
              <div className="section_terms_conditions">
                <div className="content_terms_conditions">
                  커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약
                  가능커피트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="btn_sign_up">회원 가입하기</div>
    </div>
  );
}

const SignUpContainer = styled.div`
  width: 1200px;
  margin: auto;
`;

const SignUpTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 200px;
  margin: auto;
`;

const SignUpText = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #162318;
`;

const SignUpWords = styled.div`
  height: 22px;
  font-size: 19px;
  font-weight: 300;
  color: #162318;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 1200px;
  height: 480px;
  border-radius: 15px;
  margin-bottom: 100px;
`;

const InformationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 60px;
  margin: auto;
  margin-bottom: 5px;
`;

const InformationText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 24px;
  background: #203d1e;
  color: #ffffff;
  border-radius: 4px;
  margin-right: 50px;
`;

const InformationInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 50px;
  border: 1px solid #203d1e;
  border-radius: 15px;
`;

const InformationInput = styled.input`
  width: 940px;
  height: 40px;
  border: none;
  border-radius: 15px;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #c8cdc6;
  }

  &:focus {
    outline: none;
  }
`;

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
