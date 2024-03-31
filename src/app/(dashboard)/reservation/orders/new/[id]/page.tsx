"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";

export default function OrdersContainer() {
  const searchParams = useSearchParams();
  const roomId: any = searchParams.get("roomId");
  const roomName: any = searchParams.get("roomName");
  const checkInDate: any = new Date(searchParams.get("checkInDate"));
  const checkOutDate: any = new Date(searchParams.get("checkOutDate"));
  const storeName: any = searchParams.get("storeName");
  const addres: any = searchParams.get("addres");
  const englishStoreName: any = searchParams.get("englishStoreName");

  let diff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const [stayCount, setStayCount] = useState(diff);
  console.log("stayCount", stayCount);

  const [options, setOptiont] = useState([
    {
      title: "침구추가",
      content: "성인 인원 추가시 기본 제공됩니다.",
    },
    {
      title: "그릴대여",
      content: "그릴대여 서비스입니다.",
    },
    {
      title: "커피 & 토스트 세트",
      content: "커피 & 토스트 조직 세트(팥, 바질 선택 가능) 입실 전 예약 가능.",
    },
    {
      title: "커피 & 크림치즈베이글 세트",
      content: "커피 & 크림치느베이글 조식 세트. 입실 전 예약 가능.",
    },
  ]);
  const [terms, setTerms] = useState([
    {
      title: "주문 상품정보에 동의 (필수)",
      content: "주문 상품정보에 대한 동의를 해주세요.",
      toggleImage: "/topVector.png",
      isToggle: false,
    },
    {
      title:
        "결제대행 서비스 이용을 위한 개인정보 제 3자 제공 및 위탁 동의 (필수)",
      content:
        "결제대행 서비스 이용을 위한 개인정보 제 3자 제공 및 위탁 동의 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
    },
    {
      title: "코로나 19로 인한 방역지침 약관 (필수)",
      content: "코로나 19로 인한 방역지침 약관 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
    },
    {
      title: "비회원 정보수집 약관 (필수)",
      content: "비회원 정보수집 약관 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
    },
  ]);
  const [optionsList, setOptionsList] = useState<any>([]);
  const [termsList, setTermsList] = useState<any>(terms);

  useEffect(() => {
    // console.log("options", options);
    console.log("stayCount11", stayCount);

    let newOptions = [];
    for (let i = 0; i < stayCount; i++) {
      newOptions.push(options);
    }

    setOptionsList(newOptions);
  }, []);

  const daySearch = (dayNumber: any) => {
    if (dayNumber === 0) {
      return "월";
    } else if (dayNumber === 1) {
      return "화";
    } else if (dayNumber === 2) {
      return "수";
    } else if (dayNumber === 3) {
      return "목";
    } else if (dayNumber === 4) {
      return "금";
    } else if (dayNumber === 5) {
      return "토";
    } else if (dayNumber === 6) {
      return "일";
    }
  };

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

  const [rateByDate, setRateByDate] = useState("/topVector.png");
  const [discount, setDiscount] = useState("/topVector.png");
  const [rateByDateToggle, setRateByDateToggle] = useState(false);
  const [discountToggle, setDiscountToggle] = useState(false);

  // 결제 방법
  const [cardPayment, setCardPayment] = useState(false);
  const [bankBookPayment, setBankBookPayment] = useState(false);

  // 체크박스
  const [allChecked, setAllChecked] = useState(false);
  const [orderProductChecked, setOrderProductChecked] = useState(false);
  const [trustChecked, setTrustChecked] = useState(false);
  const [covidChecked, setCovidChecked] = useState(false);
  const [nonMemberChecked, setNonMemberChecked] = useState(false);

  // 카운팅 숫자
  const [adultCount, setAdultCount] = useState(searchParams.get("adultCount"));
  const [kidCount, setKidCount] = useState(searchParams.get("kidCount"));
  const [petCount, setPetCount] = useState(searchParams.get("petCount"));
  const [showEditBox, setShowEditBox] = useState(false);

  // 결제하기 버튼
  const [paymentEnabled, setPaymentEnabled] = useState(false);

  // 연락처 인풋
  const [phoneNumber, setPhoneNumber] = useState("");

  // 인풋태그
  const handleClick = () => {
    document.getElementById("requestedTermInput").focus(); // input 태그에 포커스를 설정합니다.
  };

  //날짜별 요금
  const rateByDateHandler = () => {
    setRateByDate(
      rateByDate === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setRateByDateToggle(!rateByDateToggle);
  };

  const discountHandler = () => {
    setDiscount(
      discount === "/topVector.png" ? "/bottomVector.png" : "/topVector.png"
    );
    setDiscountToggle(!discountToggle);
  };

  // 카운팅 함수

  const handleEditClick = () => {
    setShowEditBox(true);

    if (showEditBox === true) {
      setShowEditBox(false);
    }
  };

  const handleCompletionClick = () => {
    setShowEditBox(false);
  };

  const adultPlusCountHandler = () => {
    setAdultCount((prevadultCount) => prevadultCount + 1);
  };

  const adultMinusCountHandler = () => {
    if (adultCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setAdultCount((prevadultCount) => prevadultCount - 1);
    }
  };

  const kidPlusCountHandler = () => {
    setKidCount((prevkidCount) => prevkidCount + 1);
  };

  const kidMinusCountHandler = () => {
    if (kidCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setKidCount((prevkidCount) => prevkidCount - 1);
    }
  };

  const petPlusCountHandler = () => {
    setPetCount((prevpetCount) => prevpetCount + 1);
  };

  const petMinusCountHandler = () => {
    if (petCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setPetCount((prevpetCount) => prevpetCount - 1);
    }
  };

  // useEffect(() => {
  //   console.log("useEffect");

  //   if (
  //     (cardPayment || bankBookPayment) &&
  //     orderProductChecked &&
  //     trustChecked &&
  //     covidChecked &&
  //     nonMemberChecked
  //   ) {
  //     setPaymentEnabled(true);
  //   } else {
  //     setPaymentEnabled(false);
  //   }
  // }, [
  //   cardPayment,
  //   bankBookPayment,
  //   orderProductChecked,
  //   trustChecked,
  //   covidChecked,
  //   nonMemberChecked,
  // ]);

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
    <div className="order_new_container">
      <div className="order_new_title">예약정보</div>
      <div className="order_room_content_container">
        <div className="order_room_section">
          <div className="order_room_item_container">
            <div className="order_room_item_div">
              <div className="order_room_badge_wrap">
                <div className="order_room_badge">장소</div>
              </div>
              <div className="order_room_item_content_div">
                <div className="info_title">{storeName}</div>
                <div className="info_text">{addres}</div>
              </div>
            </div>
          </div>
          <div className="order_room_item_container">
            <div className="order_room_item_bottom_div">
              <div className="order_room_badge_wrap">
                <div className="order_room_badge">숙박기간</div>
              </div>
              <div className="order_room_item_content_div">
                <div className="info_title">{stayCount}박</div>
                <div className="info_text">
                  {checkInDate.getFullYear()}년 {checkInDate.getMonth()}월{" "}
                  {checkInDate.getDate()}일 ({daySearch(checkInDate.getDay())})
                  ~ {checkOutDate.getFullYear()}년 {checkOutDate.getMonth()}월{" "}
                  {checkOutDate.getDate()}일 ({daySearch(checkOutDate.getDay())}
                  )
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="select_room_container"></div>
        <div className="order_room_section">
          <div className="order_room_item_container">
            <div className="order_room_item_div">
              <div className="order_room_badge_wrap">
                <div className="order_room_badge">선택객실</div>
              </div>
              <div className="info_title_wrap">
                <div className="info_title">{roomName}</div>
              </div>
            </div>
          </div>
          <div className="order_room_item_container">
            <div className="order_room_item_bottom_div">
              <div className="order_room_badge_wrap">
                <div className="order_room_badge">인원</div>
              </div>
              <div className="info_personnel_container2">
                <div className="info_personnel_title_wrap">
                  <div className="info_title">
                    성인 {adultCount}인 / 아동 {kidCount}인 / 반려견 {petCount}
                    마리
                  </div>
                  <div
                    className="info_personnel_modify"
                    onClick={handleEditClick}
                  >
                    인원 수정
                  </div>
                </div>
                {showEditBox && (
                  <div className="personnel_modify_container">
                    <div>
                      <div className="personnel_modify_section">
                        <div className="personnel_modify_title">성인</div>
                        <div className="personnel_number_container">
                          <div className="personnel_number_section">
                            <div
                              className="personnel_number_btn"
                              onClick={adultMinusCountHandler}
                            >
                              <img
                                src="/minusIcon.png"
                                alt="마이너스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                            <div className="personnel_number_text">
                              {adultCount}
                            </div>
                            <div
                              className="personnel_number_btn"
                              onClick={adultPlusCountHandler}
                            >
                              <img
                                src="/plusIcon.png"
                                alt="플러스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="personnel_modify_section">
                        <div className="personnel_modify_title">어린이</div>
                        <div className="personnel_number_container">
                          <div className="personnel_number_section">
                            <div
                              className="personnel_number_btn"
                              onClick={kidMinusCountHandler}
                            >
                              <img
                                src="/minusIcon.png"
                                alt="마이너스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                            <p className="personnel_number_text">{kidCount}</p>
                            <div
                              className="personnel_number_btn"
                              onClick={kidPlusCountHandler}
                            >
                              <img
                                src="/plusIcon.png"
                                alt="플러스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="personnel_modify_section">
                        <div className="personnel_modify_title">반려견</div>
                        <div className="personnel_number_container">
                          <div className="personnel_number_section">
                            <div
                              className="personnel_number_btn"
                              onClick={petMinusCountHandler}
                            >
                              <img
                                src="/minusIcon.png"
                                alt="마이너스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                            <p className="personnel_number_text">{petCount}</p>
                            <div
                              className="personnel_number_btn"
                              onClick={petPlusCountHandler}
                            >
                              <img
                                src="/plusIcon.png"
                                alt="플러스 아이콘"
                                className="personnel_number_btn_img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="personnel_modify_btn"
                      onClick={handleCompletionClick}
                    >
                      수정
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order_new_title">예약자 정보</div>
      <div className="reservation_person_container">
        <div className="reservation_person_section">
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">이름</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                placeholder="이름을 입력해주세요."
              />
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">생년월일</div>
            </div>
            <div className="reservation_person_select_wrap">
              <select className="reservation_person_select">
                <option value="년도">년도</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </select>
              <select className="reservation_person_select">
                <option value="월">월</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </select>
              <select className="reservation_person_select">
                <option value="일">일</option>
                <option value="2024">2024년</option>
                <option value="2023">2023년</option>
                <option value="2022">2022년</option>
              </select>
            </div>
          </div>
          <div className="reservation_person_2row_wrap">
            <div className="rev_person_section">
              <div className="reservation_person_title_2row_wrap">
                <div className="reservation_person_title">거주지</div>
              </div>
              <select className="reservation_person_2row_select">
                <option value="시 / 도 선택">시 / 도 선택</option>
                <option value="서울시">서울시</option>
                <option value="인천광역시">인천광역시</option>
              </select>
            </div>
            <div className="rev_person_section_ml">
              <div className="reservation_person_title_2row_wrap">
                <div className="reservation_person_title">성별</div>
              </div>
              <select className="reservation_person_2row_select">
                <option value="성별">성별</option>
                <option value="남자">남자</option>
                <option value="여자">여자</option>
              </select>
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">연락처</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                type="text"
                placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요)"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">이메일</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                placeholder="이메일을 입력해주세요."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order_new_title">추가옵션 선택</div>
      <div className="additional_options_section">
        {optionsList.map((option, index) => {
          return (
            <>
              <div className="additional_options_wrap">
                <div className="options_badge_section">
                  <div className="options_badge_wrap">DAY-{index + 1}</div>
                </div>
                <div className="options_content_container">
                  <div className="options_content_section">
                    {option.map((item, index) => {
                      return (
                        <>
                          <div className="options_content_wrap">
                            <CheckBox
                              type="checkbox"
                              id="ckbox"
                              checked={oneBed}
                              onChange={oneBedCheckHandler}
                            ></CheckBox>
                            <CheckBoxLabel
                              htmlFor="ckbox"
                              style={{
                                background: oneBed ? "#2b7638" : "initial",
                              }}
                            ></CheckBoxLabel>
                            <div className="option_info_section">
                              <div className="option_title">{item.title}</div>
                              <div className="option_content">
                                {item.content}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="additional_options_underline"></div>
            </>
          );
        })}
      </div>

      <div className="order_new_title">예약자 요청사항</div>
      <div className="request_content_section">
        <div className="request_content_wrap" onClick={handleClick}>
          <input id="requestedTermInput" className="request_content" />
        </div>
      </div>
      <div className="order_new_title">결제 정보</div>
      <div className="payment_info_container">
        <div className="payment_info_section">
          <div className="payment_info_title">총 결제금액</div>
          <div className="payment_info_value">
            150,000
            <div className="payment_info_unit">원</div>
          </div>
        </div>
        <div className="payment_info_underline"></div>
        <div className="payment_info_toggle">
          <div className="payment_info_section">
            <div className="payment_info_title">날짜별 요금</div>
            <div className="payment_img_section">
              <img
                src={rateByDate}
                alt="화살표"
                className="payment_value_img"
                onClick={rateByDateHandler}
              />
            </div>
          </div>
          {rateByDateToggle && (
            <>
              <div className="payment_info_toggle_container">
                <div className="payment_info_toggle_section">
                  <div className="payment_info_toggle_date_title">
                    {checkInDate.getFullYear()}년 {checkInDate.getMonth()}월{" "}
                    {checkInDate.getDate()}일
                  </div>
                  <div className="payment_info_toggle_date_value">
                    150,000원
                  </div>
                </div>
                <div className="payment_info_toggle_section">
                  <div className="payment_info_toggle_title">주중요금</div>
                  <div className="payment_info_toggle_value">150,000원</div>
                </div>
              </div>

              <div className="payment_info_toggle_container">
                <div className="payment_info_toggle_section">
                  <div className="payment_info_toggle_date_title">
                    {checkInDate.getFullYear()}년 {checkInDate.getMonth()}월{" "}
                    {checkInDate.getDate()}일
                  </div>
                  <div className="payment_info_toggle_date_value">
                    150,000원
                  </div>
                </div>
                <div className="payment_info_toggle_section">
                  <div className="payment_info_toggle_title">주중요금</div>
                  <div className="payment_info_toggle_value">150,000원</div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="payment_info_underline"></div>
        <div className="payment_info_toggle">
          <div className="payment_info_section">
            <div className="payment_info_title">할인 금액</div>
            <div className="payment_img_section">
              <img
                src={discount}
                alt="화살표"
                className="payment_value_img"
                onClick={discountHandler}
              />
            </div>
          </div>
          {discountToggle && (
            // <div className="payment_info_toggle_container">
            //   <div className="payment_info_toggle_section">
            //     {checkInDate.getFullYear()}년 {checkInDate.getMonth()}월{" "}
            //     {checkInDate.getDate()}일
            //   </div>
            // </div>
            <></>
          )}
        </div>
      </div>
      <div className="order_new_title">결제 방법</div>
      <div className="payment_method_container">
        <div className="payment_method_section">
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
          <div className="payment_method_title">카드 결제</div>
        </div>
        <div className="payment_method_section">
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
          <div className="payment_method_title">무통장 입금</div>
        </div>
      </div>
      <div className="order_new_title">이용자 약관동의</div>
      <div className="terms_container">
        <div className="terms_item_container">
          <div className="terms_section">
            <CheckBox
              type="checkbox"
              id="allckbox"
              checked={allChecked}
              onChange={handleSelectAllChange}
            ></CheckBox>
            <CheckBoxLabel htmlFor="allckbox"></CheckBoxLabel>
            전체동의
          </div>
          <div className="terms_underline"></div>
          {termsList.map((term, index) => {
            return (
              <>
                <div className="terms_wrap">
                  <div className="terms_item_section">
                    <CheckBox
                      type="checkbox"
                      id="productckbox"
                      checked={orderProductChecked}
                      onChange={orderProductCheckedHandler}
                    ></CheckBox>
                    <CheckBoxLabel htmlFor="productckbox"></CheckBoxLabel>
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
                    <div className="terms_toggle_section">{term.content}</div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>

      <button
        className="payment_btn"
        onClick={paymentHandler}
        style={{ background: paymentEnabled ? "#203d1e" : "#808080" }}
      >
        결제하기
      </button>
    </div>
  );
}

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
