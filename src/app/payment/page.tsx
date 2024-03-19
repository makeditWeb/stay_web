"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

export default function PaymentPage() {
  // Day-1
  const [oneBed, setOneBad] = useState(false);
  const [oneGrill, setOneGrill] = useState(false);
  const [oneCoffeeToast, setOneCoffeeToast] = useState(false);
  const [oneCoffeeCream, setOneCoffeeCream] = useState(false);

  // Day-2
  const [twoBed, setTwoBad] = useState(false);
  const [twoGrill, setTwoGrill] = useState(false);
  const [twoCoffeeToast, setTwoCoffeeToast] = useState(false);
  const [twoCoffeeCream, setTwoCoffeeCream] = useState(false);

  // 약관동의 Vector 이미지
  const [orderProduct, setOrderProduct] = useState("/topVector.png");
  const [trust, setTrust] = useState("/topVector.png");
  const [covid, setCovid] = useState("/topVector.png");
  const [nonMember, setNonMember] = useState("/topVector.png");

  // 결제 방법
  const [cardPayment, setCardPayment] = useState(false);
  const [bankBookPayment, setBankBookPayment] = useState(false);

  // 토글
  const [orderProductToggle, setOrderProductToggle] = useState(false);
  const [trustToggle, setTrustToggle] = useState(false);
  const [covidToggle, setCovidToggle] = useState(false);
  const [nonMemberToggle, setNonMemberToggle] = useState(false);

  // 체크박스
  const [allChecked, setAllChecked] = useState(false);
  const [orderProductChecked, setOrderProductChecked] = useState(false);
  const [trustChecked, setTrustChecked] = useState(false);
  const [covidChecked, setCovidChecked] = useState(false);
  const [nonMemberChecked, setNonMemberChecked] = useState(false);

  // 결제하기 버튼
  const [paymentEnabled, setPaymentEnabled] = useState(false);

  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

  // 인풋태그
  const handleClick = () => {
    document.getElementById("requestedTermInput").focus(); // input 태그에 포커스를 설정합니다.
  };

  useEffect(() => {
    if (
      (cardPayment || bankBookPayment) &&
      orderProductChecked &&
      trustChecked &&
      covidChecked &&
      nonMemberChecked
    ) {
      setPaymentEnabled(true);
    } else {
      setPaymentEnabled(false);
    }
  }, [
    cardPayment,
    bankBookPayment,
    orderProductChecked,
    trustChecked,
    covidChecked,
    nonMemberChecked,
  ]);

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

  // 결제 방법 함수
  const cardPaymentHandler = () => {
    setCardPayment(!cardPayment);
  };

  const bankBookPaymentHandler = () => {
    setBankBookPayment(!bankBookPayment);
  };

  // 토글 함수
  const handleSelectAllChange = (event) => {
    const { checked } = event.target;
    setAllChecked(checked);
    setOrderProductChecked(checked);
    setTrustChecked(checked);
    setCovidChecked(checked);
    setNonMemberChecked(checked);
  };

  const orderProductCheckedHandler = () => {
    setOrderProductChecked(!orderProductChecked);
    setAllChecked(false);
  };

  const trustCheckedHandler = () => {
    setTrustChecked(!trustChecked);
    setAllChecked(false);
  };

  const covidCheckedHandler = () => {
    setCovidChecked(!covidChecked);
    setAllChecked(false);
  };

  const nonMemberCheckedHandler = () => {
    setNonMemberChecked(!nonMemberChecked);
    setAllChecked(false);
  };

  const orderProductHandler = () => {
    setOrderProduct(
      orderProduct === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setOrderProductToggle(!orderProductToggle);
  };

  const trustHandler = () => {
    setTrust(
      trust === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );

    setTrustToggle(!trustToggle);
  };

  const covidCheckHandler = () => {
    setCovid(
      covid === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );

    setCovidToggle(!covidToggle);
  };

  const nonMemberHandler = () => {
    setNonMember(
      nonMember === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setNonMemberToggle(!nonMemberToggle);
  };

  // 옵션 선택
  const oneBedCheckHandler = () => {
    setOneBad(!oneBed);
  };

  const oneGrillCheckHandler = () => {
    setOneGrill(!oneGrill);
  };

  const oneCoffeeToastCheckHandler = () => {
    setOneCoffeeToast(!oneCoffeeToast);
  };

  const oneCoffeeCreamCheckHandler = () => {
    setOneCoffeeCream(!oneCoffeeCream);
  };

  // Day - 2
  const twoBedCheckHandler = () => {
    setTwoBad(!twoBed);
  };

  const twoGrillCheckHandler = () => {
    setTwoGrill(!twoGrill);
  };

  const twoCoffeeToastCheckHandler = () => {
    setTwoCoffeeToast(!twoCoffeeToast);
  };

  const twoCoffeeCreamCheckHandler = () => {
    setTwoCoffeeCream(!twoCoffeeCream);
  };

  // 결제하기 버튼 함수
  const paymentHandler = () => {
    if (
      (cardPayment || bankBookPayment) &&
      orderProductChecked &&
      trustChecked &&
      covidChecked &&
      nonMemberChecked
    ) {
      setPaymentEnabled(true);
      alert("결제 진행을 합니다");
    } else {
      setPaymentEnabled(false);
      alert("약관 동의를 해주세요");
    }
  };

  return (
    <PaymentContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "130px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        예약정보
      </div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "240px",
          background: "#ffffff",
          borderRadius: "15px",
        }}
      >
        <div style={{ width: "599px" }}>
          <div style={{ display: "flex", height: "120px" }}>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  background: "#203d1e",
                  borderRadius: "4px",
                  color: "#ffffff",
                  margin: "0 30px 0 30px",
                }}
              >
                장소
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  스테이 인터뷰, 양평
                </div>
                <div style={{ fontSize: "18px" }}>
                  경기 양평군 서종면 서정로343번길 5
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", height: "120px" }}>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  background: "#203d1e",
                  borderRadius: "4px",
                  color: "#ffffff",
                  margin: "0 30px 0 30px",
                }}
              >
                숙박기간
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  1박
                </div>
                <div style={{ fontSize: "18px" }}>
                  2024년 2월 19일 (월) ~ 2024년 2월 20일 (화)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1px",
            height: "220px",
            background: "#d9d9d9",
            marginTop: "10px",
          }}
        ></div>
        <div style={{ width: "599px" }}>
          <div style={{ display: "flex", height: "120px" }}>
            <div style={{ display: "flex", marginTop: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  background: "#203d1e",
                  borderRadius: "4px",
                  color: "#ffffff",
                  margin: "0 30px 0 30px",
                }}
              >
                선택객실
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  듀플렉스 2호
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", height: "120px" }}>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                  height: "22px",
                  background: "#203d1e",
                  borderRadius: "4px",
                  color: "#ffffff",
                  margin: "0 30px 0 30px",
                }}
              >
                인원
              </div>
              <div
                style={{
                  display: "flex",
                  width: "400px",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "10px",
                  }}
                >
                  성인 4인 / 아동 2인 / 유아 1인
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "88px",
                    height: "22px",
                    border: "1px solid #203d1e",
                    borderRadius: "4px",
                    color: "#203d1e",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  인원 수정
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "165px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        예약자 정보
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "450px",
          background: "#ffffff",
          borderRadius: "15px",
        }}
      >
        <div>
          <InformationInputContainer>
            <InformationText>이름</InformationText>
            <InformationInputDiv>
              <InformationInput placeholder="이름을 입력해주세요." />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>생년월일</InformationText>
            <div style={{ display: "flex", gap: "6px" }}>
              <SelectBox
                style={{
                  width: "320px",
                }}
              >
                <option value="년도">년도</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </SelectBox>
              <SelectBox
                style={{
                  width: "320px",
                }}
              >
                <option value="월">월</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </SelectBox>
              <SelectBox
                style={{
                  width: "320px",
                }}
              >
                <option value="일">일</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </SelectBox>
            </div>
          </InformationInputContainer>
          <InformationInputContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "550px",
              }}
            >
              <InformationText>거주지</InformationText>
              <div style={{ display: "flex", gap: "6px" }}>
                <SelectBox>
                  <option value="시 / 도 선택">시 / 도 선택</option>
                  <option value="서울시">서울시</option>
                  <option value="인천광역시">인천광역시</option>
                </SelectBox>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "550px",
                alignItems: "center",
                marginLeft: "40px",
              }}
            >
              <InformationText>성별</InformationText>
              <div style={{ display: "flex", gap: "6px" }}>
                <SelectBox>
                  <option value="성별">성별</option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </SelectBox>
              </div>
            </div>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>연락처</InformationText>
            <InformationInputDiv>
              <InformationInput
                type="text"
                placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요)"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </InformationInputDiv>
          </InformationInputContainer>
          <InformationInputContainer>
            <InformationText>이메일</InformationText>
            <InformationInputDiv>
              <InformationInput placeholder="이메일을 입력해주세요." />
            </InformationInputDiv>
          </InformationInputContainer>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "185px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        추가옵션 선택
      </div>
      <div
        style={{
          width: "1200px",
          background: "#ffffff",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "1000px",
            height: "299px",
            paddingTop: "50px",
          }}
        >
          <div style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "24px",
                background: "#203d1e",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              DAY-1
            </div>
          </div>
          <div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox"
                  checked={oneBed}
                  onChange={oneBedCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox"
                  style={{ background: oneBed ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: oneBed ? "#2b7638" : "",
                  }}
                >
                  침구추가
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                성인 인원 추가시 기본 제공됩니다.
              </div>
            </div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox1"
                  checked={oneGrill}
                  onChange={oneGrillCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox1"
                  style={{ background: oneGrill ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: oneGrill ? "#2b7638" : "",
                  }}
                >
                  그릴대여
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                그릴대여 서비스입니다.
              </div>
            </div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox2"
                  checked={oneCoffeeToast}
                  onChange={oneCoffeeToastCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox2"
                  style={{ background: oneCoffeeToast ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: oneCoffeeToast ? "#2b7638" : "",
                  }}
                >
                  커피 & 토스트 세트
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                커피 & 토스트 조직 세트(팥, 바질 선택 가능) 입실 전 예약 가능
              </div>
            </div>
            <div
              style={{
                width: "800px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox3"
                  checked={oneCoffeeCream}
                  onChange={oneCoffeeCreamCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox3"
                  style={{ background: oneCoffeeCream ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: oneCoffeeCream ? "#2b7638" : "",
                  }}
                >
                  커피 & 크림치즈베이글 세트
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                커피 & 크림치즈베이글 조식 세트. 입실 전 예약 가능
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "1050px",
            border: "1px solid #d9d9d9",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "1000px",
            height: "299px",
            paddingTop: "50px",
          }}
        >
          <div style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80px",
                height: "24px",
                background: "#203d1e",
                borderRadius: "4px",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              DAY-2
            </div>
          </div>
          <div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox4"
                  checked={twoBed}
                  onChange={twoBedCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox4"
                  style={{ background: twoBed ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: twoBed ? "#2b7638" : "",
                  }}
                >
                  침구추가
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                성인 인원 추가시 기본 제공됩니다.
              </div>
            </div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox5"
                  checked={twoGrill}
                  onChange={twoGrillCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox5"
                  style={{ background: twoGrill ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: twoGrill ? "#2b7638" : "",
                  }}
                >
                  그릴대여
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                그릴대여 서비스입니다.
              </div>
            </div>
            <div
              style={{
                width: "800px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox6"
                  checked={twoCoffeeToast}
                  onChange={twoCoffeeToastCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox6"
                  style={{ background: twoCoffeeToast ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: twoCoffeeToast ? "#2b7638" : "",
                  }}
                >
                  커피 & 토스트 세트
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                커피 & 토스트 조식 세트(팥, 바질 선택 가능) 입실 전 예약 가능
              </div>
            </div>
            <div
              style={{
                width: "800px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: " auto",
                  fontSize: "20px",
                  fontWeight: "500",
                  gap: "20px",
                }}
              >
                <CheckBox
                  type="checkbox"
                  id="ckbox7"
                  checked={twoCoffeeCream}
                  onChange={twoCoffeeCreamCheckHandler}
                ></CheckBox>
                <CheckBoxLabel
                  htmlFor="ckbox7"
                  style={{ background: twoCoffeeCream ? "#2b7638" : "initial" }}
                ></CheckBoxLabel>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: twoCoffeeCream ? "#2b7638" : "",
                  }}
                >
                  커피 & 크림치즈베이글 세트
                </div>
              </div>
              <div
                style={{
                  marginLeft: "45px",
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                커피 & 크림치즈베이글 조식 세트. 입실 전 예약 가능
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        예약자 요청사항
      </div>
      <div
        style={{
          width: "1200px",
          height: "320px",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "25px 0 25px 0",
        }}
      >
        <div
          style={{
            width: "1100px",
            height: " 300px",
            margin: "auto",
            border: "1px solid #d3d3d3",
            borderRadius: "15px",
            overflow: "hidden",
            padding: "10px 10px 10px 10px",
            cursor: "text",
          }}
          onClick={handleClick}
        >
          <RequestedTermInput
            id="requestedTermInput"
            style={{ height: "30px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        결제 정보
      </div>
      <div
        style={{
          width: "1200px",
          height: "250px",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "30px 0 30px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "1000px",
            height: "50px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "24px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            총 결제금액
          </div>
          <div
            style={{
              display: "flex",
              width: "200px",
              fontWeight: "1000",
              fontSize: "32px",
              color: "#2b7638",
            }}
          >
            150,000
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "200px",
                fontWeight: "1000",
                fontSize: "25px",
                color: "#2b7638",
                marginLeft: "15px",
              }}
            >
              원
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1000px",
            height: "1px",
            background: "#d9d9d9",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "1000px",
            height: "50px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "24px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            날짜별 요금
          </div>
          <div style={{ width: "40px" }}>
            <Image
              src="/bottomVector.png"
              alt="화살표"
              width={15}
              height={10}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div
          style={{
            width: "1000px",
            height: "1px",
            background: "#d9d9d9",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "1000px",
            height: "50px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "24px",
              background: "#203d1e",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            할인 금액
          </div>
          <div style={{ width: "40px" }}>
            <Image
              src="/bottomVector.png"
              alt="화살표"
              width={15}
              height={10}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        결제 방법
      </div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "60px",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "30px 0 30px 50px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <CheckBox
            type="checkbox"
            id="paymentckbox"
            checked={cardPayment}
            onChange={cardPaymentHandler}
          ></CheckBox>
          <CheckBoxLabel
            htmlFor="paymentckbox"
            style={{ background: cardPayment ? "#2b7638" : "initial" }}
          ></CheckBoxLabel>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "40px",
              fontSize: "20px",
              fontWeight: "500",
              marginLeft: "10px",
            }}
          >
            카드 결제
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}
        >
          <CheckBox
            type="checkbox"
            id="paymentckbox2"
            checked={bankBookPayment}
            onChange={bankBookPaymentHandler}
          ></CheckBox>
          <CheckBoxLabel
            htmlFor="paymentckbox2"
            style={{ background: bankBookPayment ? "#2b7638" : "initial" }}
          ></CheckBoxLabel>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "40px",
              fontSize: "20px",
              fontWeight: "500",
              marginLeft: "10px",
            }}
          >
            무통장 입금
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          height: "100px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#162318",
        }}
      >
        이용자 약관동의
      </div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "30px 0 30px 50px",
        }}
      >
        {" "}
        <div style={{ height: "100%", padding: "50px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "1060px",
              margin: " auto",
              fontSize: "20px",
              fontWeight: "500",
              gap: "20px",
            }}
          >
            <CheckBox
              type="checkbox"
              id="allckbox"
              checked={allChecked}
              onChange={handleSelectAllChange}
            ></CheckBox>
            <CheckBoxLabel htmlFor="allckbox"></CheckBoxLabel>
            전체동의
          </div>
          <div
            style={{
              width: "1060px",
              border: "1px solid #d9d9d9",
              marginTop: "20px",
            }}
          ></div>
          <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox
                type="checkbox"
                id="productckbox"
                checked={orderProductChecked}
                onChange={orderProductCheckedHandler}
              ></CheckBox>
              <CheckBoxLabel htmlFor="productckbox"></CheckBoxLabel>
              <div style={{ marginLeft: "20px", width: "930px" }}>
                주문 상품정보에 동의 (필수)
              </div>
              <Image
                src={orderProduct}
                alt="화살표"
                width={15}
                height={10}
                style={{ cursor: "pointer" }}
                onClick={orderProductHandler}
              />
            </div>
          </div>
          {orderProductToggle && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1000px",
                height: "320px",
                background: "#f8f8f8",
                fontSize: "14px",
                fontWeight: "300",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "900px",
                  height: "220px",
                  margin: "auto",
                  lineHeight: "20px",
                }}
              >
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
          <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox
                type="checkbox"
                id="trustckbox"
                checked={trustChecked}
                onChange={trustCheckedHandler}
              ></CheckBox>
              <CheckBoxLabel htmlFor="trustckbox"></CheckBoxLabel>
              <div style={{ marginLeft: "20px", width: "930px" }}>
                결제대행 서비스 이용을 위한 개인정보 제 3자 제공 및 위탁 동의
                (필수)
              </div>
              <Image
                src={trust}
                alt="화살표"
                width={15}
                height={10}
                style={{ cursor: "pointer" }}
                onClick={trustHandler}
              />
            </div>
          </div>
          {trustToggle && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1000px",
                height: "320px",
                background: "#f8f8f8",
                fontSize: "14px",
                fontWeight: "300",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "900px",
                  height: "220px",
                  margin: "auto",
                  lineHeight: "20px",
                }}
              >
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
          <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox
                type="checkbox"
                id="covidckbox"
                checked={covidChecked}
                onChange={covidCheckedHandler}
              ></CheckBox>
              <CheckBoxLabel htmlFor="covidckbox"></CheckBoxLabel>
              <div style={{ marginLeft: "20px", width: "930px" }}>
                코로나 19로 인한 방역지침 약관 (필수)
              </div>
              <Image
                src={covid}
                alt="화살표"
                width={15}
                height={10}
                style={{ cursor: "pointer" }}
                onClick={covidCheckHandler}
              />
            </div>
          </div>
          {covidToggle && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1000px",
                height: "320px",
                background: "#f8f8f8",
                fontSize: "14px",
                fontWeight: "300",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "900px",
                  height: "220px",
                  margin: "auto",
                  lineHeight: "20px",
                }}
              >
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
          <div style={{ width: "1000px", margin: "auto", marginTop: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox
                type="checkbox"
                id="nonmemberckbox"
                checked={nonMemberChecked}
                onChange={nonMemberCheckedHandler}
              ></CheckBox>
              <CheckBoxLabel htmlFor="nonmemberckbox"></CheckBoxLabel>
              <div style={{ marginLeft: "20px", width: "930px" }}>
                비회원 정보수집 약관 (필수)
              </div>
              <Image
                src={nonMember}
                alt="화살표"
                width={15}
                height={10}
                style={{ cursor: "pointer" }}
                onClick={nonMemberHandler}
              />
            </div>
          </div>
          {nonMemberToggle && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1000px",
                height: "320px",
                background: "#f8f8f8",
                fontSize: "14px",
                fontWeight: "300",
                margin: "auto",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "900px",
                  height: "220px",
                  margin: "auto",
                  lineHeight: "20px",
                }}
              >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "78px",
          background: paymentEnabled ? "#203d1e" : "#808080",
          borderRadius: "15px",
          color: "#ffffff",
          fontSize: "25px",
          fontWeight: "600",
          margin: "50px 0 100px 0",
          cursor: "pointer",
        }}
        onClick={paymentHandler}
      >
        결제하기
      </div>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  width: 1200px;
  margin: auto;
`;

const InformationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  height: 60px;
  margin: auto;
  margin-bottom: 10px;
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

const SelectBox = styled.select`
  width: 400px;
  height: 52px;
  border: 1px solid #203d1e;
  border-radius: 15px;
  padding-left: 10px;
  color: #c8cdc6;
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
    border: 4px solid white;
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

const RequestedTermInput = styled.input`
  width: 1100px;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 300;
  border: none;

  &:focus {
    outline: none;
  }
`;
