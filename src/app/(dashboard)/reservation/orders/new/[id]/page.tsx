"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styled from "styled-components";
import Script from "next/script";
import moment from "moment";
import { Region } from "@/data/region/Region";
import SweetAlert from "sweetalert2";
import CryptoJS from "crypto-js";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

export default function OrdersContainer() {
  const formRef = useRef();
  const router = useRouter();

  const yearList = Array.from(
    { length: 80 },
    (v, i) => new Date().toISOString().slice(0, 4) - i
  );
  const monthList = Array.from({ length: 12 }, (v, i) => i + 1);
  const [dayList, setDayList] = useState(
    Array.from({ length: 31 }, (v, i) => i + 1)
  );

  const [reservationData, setReservationData] = useState({
    clientName: "",
    clientRegion: "",
    clientGender: "",
    clientPhone: "",
    clientEmail: "",
    clientBirthday: "",
    adultCount: 0,
    childCount: 0,
    petCount: 0,
    reservationMemo: "",
    paymentMethod: "CARD",
  }); //예약정보
  const [birthDay, setBirthDay] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  const searchParams = useSearchParams();
  const storeId: any = searchParams.get("storeId");
  const roomId: any = searchParams.get("roomId");
  const roomName: any = searchParams.get("roomName");
  const checkInDate: any = new Date(searchParams.get("checkInDate") || "");
  const checkOutDate: any = new Date(searchParams.get("checkOutDate") || "");
  const storeName: any = searchParams.get("storeName");
  const addres: any = searchParams.get("addres");
  const englishStoreName: any = searchParams.get("englishStoreName");
  const [isMobile, setIsMobile] = useState(false);

  const returnUrl = process.env.NEXT_PUBLIC_NICEPAY_REDIRECT_URL;

  // const returnUrl = isMobile
  //   ? process.env.NEXT_PUBLIC_RETUN_Mobile_URL
  //   : process.env.NEXT_PUBLIC_RETURN_URL;

  let diff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
  diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const [stayCount, setStayCount] = useState(diff);

  const [options, setOptiont] = useState([
    {
      id: 1,
      title: "침구추가",
      content: "성인 인원 추가시 기본 제공됩니다.",
      isCheck: false,
    },
    {
      id: 2,
      title: "그릴대여",
      content: "그릴대여 서비스입니다.",
      isCheck: false,
    },
    {
      id: 3,
      title: "커피 & 토스트 세트",
      content: "커피 & 토스트 조직 세트(팥, 바질 선택 가능) 입실 전 예약 가능.",
      isCheck: false,
    },
    {
      id: 4,
      title: "커피 & 크림치즈베이글 세트",
      content: "커피 & 크림치느베이글 조식 세트. 입실 전 예약 가능.",
      isCheck: false,
    },
  ]);
  const [terms, setTerms] = useState([
    {
      id: 0,
      title: "주문 상품정보에 동의 (필수)",
      content: "주문 상품정보에 대한 동의를 해주세요.",
      toggleImage: "/topVector.png",
      isToggle: false,
      isAgree: false,
    },
    {
      id: 1,
      title:
        "결제대행 서비스 이용을 위한 개인정보 제 3자 제공 및 위탁 동의 (필수)",
      content:
        "결제대행 서비스 이용을 위한 개인정보 제 3자 제공 및 위탁 동의 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
      isAgree: false,
    },
    {
      id: 2,
      title: "코로나 19로 인한 방역지침 약관 (필수)",
      content: "코로나 19로 인한 방역지침 약관 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
      isAgree: false,
    },
    {
      id: 3,
      title: "비회원 정보수집 약관 (필수)",
      content: "비회원 정보수집 약관 (필수)",
      toggleImage: "/topVector.png",
      isToggle: false,
      isAgree: false,
    },
  ]);

  const [optionsList, setOptionsList] = useState<any>([]);
  const [termsList, setTermsList] = useState<any>(terms);
  const [rateList, setRateList] = useState([]); // 객식요금 목록
  const totalRate = rateList.reduce((acc, cur) => acc + cur.roomRatePrice, 0);

  useEffect(() => {
    //시즌 조회 API 호출
    const roomRateCond = {
      partnerStoreId: storeId,
      roomId: roomId,
      startDate: searchParams.get("checkInDate"),
      endDate: searchParams.get("checkOutDate"),
    };

    customAxios
      .get(`${API.ROOM_RATE}`, {
        params: roomRateCond,
      })
      .then((res) => {
        setRateList(res.data.response);
      });

    //TODO 추가옵션, 약관 동의 리스트 추가 (Pia)
    let getOptionProductList = null;
    customAxios.get(`${API.OPTION_PRODUCT}/${storeId}`).then((res) => {
      getOptionProductList = res.data.response.data;

      let newOptions = [];
      for (let i = 0; i < stayCount; i++) {
        newOptions.push(getOptionProductList);
      }

      setOptionsList(newOptions);
    });
  }, []);

  const onChangeReservationData = (e) => {
    const { name, value } = e.target;

    setReservationData({ ...reservationData, [name]: value });
  };

  const onChangeBirthDay = (e) => {
    const { name, value } = e.target;

    setBirthDay({ ...birthDay, [name]: value });

    if (name === "month") {
      setDayList(
        Array.from(
          { length: new Date(birthDay.year, value, 0).getDate() },
          (v, i) => i + 1
        )
      );
    }
  };

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

  const [rateByDate, setRateByDate] = useState("/topVector.png");
  const [discount, setDiscount] = useState("/topVector.png");
  const [rateByDateToggle, setRateByDateToggle] = useState(false);
  const [discountToggle, setDiscountToggle] = useState(false);

  // 체크박스
  const [allChecked, setAllChecked] = useState(false);

  // 카운팅 숫자
  const [adultCount, setAdultCount] = useState(
    Number(searchParams.get("adultCount"))
  );
  const [childCount, setChildCount] = useState(
    Number(searchParams.get("kidCount"))
  );
  const [petCount, setPetCount] = useState(
    Number(searchParams.get("petCount"))
  );
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
    setChildCount((prevkidCount) => prevkidCount + 1);
  };

  const kidMinusCountHandler = () => {
    if (childCount > 0) {
      // 음수로 가지 않도록 확인합니다.
      setChildCount((prevkidCount) => prevkidCount - 1);
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

  // 토글 함수
  const handleSelectAllChange = (e) => {
    const { checked } = e.target;

    const newTermsList = termsList.map((term) => {
      term.isAgree = checked;
      return term;
    });

    setTermsList(newTermsList);
    setAllChecked(checked);
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

  // 옵션 선택
  const optionHandler = (e) => {
    const { id } = e.target;

    const day = id.split("/")[0];
    const optionId = id.split("/")[1];

    const newOptionsList = optionsList.map((option, index) =>
      index === Number(day)
        ? option.map((item) =>
            item.id === Number(optionId)
              ? { ...item, isCheck: !item.isCheck }
              : item
          )
        : option
    );

    setOptionsList(newOptionsList);
  };

  const generateOrderNumber = () => {
    // 오늘 날짜
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const prefix = "stay";
    const randomNumber = Math.floor(Math.random() * 10000000000); // 10자리 랜덤 숫자 생성
    const paddedRandomNumber = randomNumber.toString().padStart(10, "0"); // 10자리로 패딩

    return prefix + paddedRandomNumber + `${year}${month}${day}`;
  };

  // 결제하기 버튼 함수
  const paymentHandler = () => {
    //TODO 입력값 벨리데이션 체크 추가 (Pia)

    // goPay(document.payForm);

    // 현재 시간 구하기
    var currentTime = new Date();

    // 8시간 뒤의 시간 계산
    var validTime = new Date(currentTime.getTime() + 8 * 60 * 60 * 1000);

    // 시간을 보기 좋은 형태로 포맷팅
    let year = validTime.getFullYear();
    let month = validTime.getMonth() + 1;
    month = month < 10 ? "0" + month : month;

    let day = validTime.getDate();
    day = day < 10 ? "0" + day : day;

    let hours = validTime.getHours();
    hours = hours < 10 ? "0" + hours : hours;

    let minutes = validTime.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    console.log("minutes", minutes);

    const goodsName = roomName;
    const moid = generateOrderNumber();
    const ediDate = moment().format("YYYYMMDDhhmmss");
    const mid = process.env.NEXT_PUBLIC_MID;
    // const amt = totalRate;
    const amt = 1000;
    const merchantKey = process.env.NEXT_PUBLIC_NICEPAY_KEY;
    const TestData = ediDate + mid + amt + merchantKey;
    const SignData = CryptoJS.SHA256(TestData).toString();
    const payMethod = reservationData.paymentMethod;
    const VbankExpDate =
      year + "" + month + "" + day + "" + hours + "" + minutes; //YYYYMMDDHHMM
    console.log("VbankExpDate", VbankExpDate);

    document.payForm.GoodsName.value = goodsName;
    document.payForm.Moid.value = moid;
    document.payForm.Amt.value = amt;
    document.payForm.MID.value = mid;
    document.payForm.EdiDate.value = ediDate;
    document.payForm.PayMethod.value = payMethod;
    document.payForm.VbankExpDate.value = VbankExpDate;
    document.payForm.MerchantKey.value = merchantKey;
    document.payForm.ReturnURL.value = returnUrl;

    document.payForm.SignData.value = SignData;

    document.payForm.clientName.value = reservationData.clientName;
    document.payForm.clientPhone.value = reservationData.clientPhone;
    document.payForm.clientEmail.value = reservationData.clientEmail;
    document.payForm.clientBirthday.value =
      birthDay.year + birthDay.month + birthDay.day;
    document.payForm.clientGender.value = reservationData.clientGender;
    document.payForm.clientRegion.value = reservationData.clientRegion;
    document.payForm.paymentMethod.value = reservationData.paymentMethod;
    document.payForm.partnerStoreId.value = storeId;
    document.payForm.storeName.value = storeName;

    document.payForm.roomId.value = roomId;
    document.payForm.roomName.value = roomName;
    document.payForm.stayCount.value = stayCount;
    let checkInMonth = checkInDate.getMonth() + 1;
    let checkInDay = checkInDate.getDate();

    if (checkInMonth < 10) {
      checkInMonth = "0" + checkInMonth;
    }

    if (checkInDay < 10) {
      checkInDay = "0" + checkInDay;
    }

    document.payForm.checkIn.value =
      checkInDate.getFullYear() + "-" + checkInMonth + "-" + checkInDay;

    let checkOutMonth = checkOutDate.getMonth() + 1;
    let checkOutDay = checkOutDate.getDate();

    if (checkOutMonth < 10) {
      checkOutMonth = "0" + checkOutMonth;
    }

    if (checkOutDay < 10) {
      checkOutDay = "0" + checkOutDay;
    }

    document.payForm.checkOut.value =
      checkOutDate.getFullYear() + "-" + checkOutMonth + "-" + checkOutDay;

    document.payForm.adultCount.value = adultCount;
    document.payForm.childCount.value = childCount;
    document.payForm.petCount.value = petCount;

    let optionProductList = "";

    optionsList.map((option, index) => {
      optionProductList += index + "-";
      option.map((item) => {
        if (item.isCheck) {
          optionProductList += item.id + ",";
        }
      });

      optionProductList = optionProductList.slice(0, -1);

      optionProductList += "/";
    });

    optionProductList = optionProductList.slice(0, -1);

    document.payForm.addOptionProductList.value = optionProductList;
    document.payForm.datePriceList.value = "최하늘";
    document.payForm.reservationMemo.value =
      reservationData?.reservationMemo || "";

    let termsAgreeList = "";
    termsList.map((term) => {
      if (term.isAgree) {
        termsAgreeList += term.id + ",";
      }
    });
    document.payForm.termsAgreeList.value = termsAgreeList;

    if (isMobile) {
      // 모바일 결제창 진입
      formRef.current.action = "https://web.nicepay.co.kr/v3/v3Payment.jsp";
      formRef.current.acceptCharset = "utf-8";
      formRef.current.submit();
    } else {
      // PC 결제창 진입
      if (typeof window !== "undefined") {
        console.log("formRef.current", formRef.current);

        window.nicepaySubmit = nicepaySubmit;
        window.nicepayClose = nicepayClose;
        window.goPay(formRef.current);
      }
    }

    // if (
    //   (cardPayment || bankBookPayment) &&
    //   orderProductChecked &&
    //   trustChecked &&
    //   covidChecked &&
    //   nonMemberChecked
    // ) {
    //   setPaymentEnabled(true);
    //   alert("결제 진행을 합니다");
    // } else {
    //   setPaymentEnabled(false);
    //   alert("약관 동의를 해주세요");
    // }
  };

  const nicepaySubmit = async () => {
    // setAlertType("success");
    // setAlertMsg("결제에 성공했습니다.");

    document.payForm.submit();
    sendPaymentResult(true);
  };

  const nicepayClose = async () => {
    // TODO: 결제 실패시 처리
    // setAlertType("error");
    // setAlertMsg("결제를 다시 시도해주세요");
    alert("결제가 취소 되었습니다");
    sendPaymentResult(false);
  };

  const sendPaymentResult = async () => {
    // alert("결제에 성공했습니다.");
    const body = convertFormToObj(formRef.current);

    console.log("body", body);

    body.success = success;

    window.deleteLayer();
    alert("결제에 성공했습니다.");
  };

  return (
    <div className="order_new_container">
      {/* <Script
        src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js"
        type="text/javascript"
      /> */}
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
                  {checkInDate.getFullYear()}년 {checkInDate.getMonth() + 1}월{" "}
                  {checkInDate.getDate()}일 ({daySearch(checkInDate.getDay())})
                  ~ {checkOutDate.getFullYear()}년 {checkOutDate.getMonth() + 1}
                  월 {checkOutDate.getDate()}일 (
                  {daySearch(checkOutDate.getDay())})
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
                    성인 {adultCount}인 / 아동 {childCount}인 / 반려견{" "}
                    {petCount}
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
                            <p className="personnel_number_text">
                              {childCount}
                            </p>
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
              <div className="reservation_person_title">*이름</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                name="clientName"
                onChange={onChangeReservationData}
                placeholder="이름을 입력해주세요."
              />
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">*생년월일</div>
            </div>
            <div className="reservation_person_select_wrap">
              <select
                className="reservation_person_select"
                name="year"
                onChange={onChangeBirthDay}
              >
                <option value="년도">년도</option>
                {yearList.map((year, index) => {
                  return (
                    <option key={index} value={year}>
                      {year}년
                    </option>
                  );
                })}
              </select>
              <select
                className="reservation_person_select"
                name="month"
                onChange={onChangeBirthDay}
                disabled={birthDay.year === 0}
                style={
                  birthDay.year === 0
                    ? { background: "#bfbfbf", color: "black" }
                    : {}
                }
              >
                <option value="월">월</option>
                {monthList.map((month, index) => {
                  return (
                    <option key={index} value={month}>
                      {month}월
                    </option>
                  );
                })}
              </select>
              <select
                className="reservation_person_select"
                name="day"
                onChange={onChangeBirthDay}
                disabled={birthDay.month === 0}
                style={
                  birthDay.month === 0
                    ? { background: "#bfbfbf", color: "black" }
                    : {}
                }
              >
                <option value="일">일</option>
                {dayList.map((day, index) => {
                  return (
                    <option key={index} value={day}>
                      {day}일
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="reservation_person_2row_wrap">
            <div className="rev_person_section">
              <div className="reservation_person_title_2row_wrap">
                <div className="reservation_person_title">*거주지</div>
              </div>
              <select
                className="reservation_person_2row_select"
                name="clientRegion"
                onChange={onChangeReservationData}
              >
                <option value="시 / 도 선택">시 / 도 선택</option>
                {Region.map((region, index) => {
                  return (
                    <option key={region.code} value={region.code}>
                      {region.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="rev_person_section_ml">
              <div className="reservation_person_title_2row_wrap">
                <div className="reservation_person_title">*성별</div>
              </div>
              <select
                className="reservation_person_2row_select"
                name="clientGender"
                onChange={onChangeReservationData}
              >
                <option value="NONE">성별</option>
                <option value="MALE">남자</option>
                <option value="FEMALE">여자</option>
              </select>
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">*연락처</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                name="clientPhone"
                type="text"
                placeholder="휴대폰 번호 ( - 를 빼고 입력해주세요)"
                // onChange={handlePhoneNumberChange}
                onChange={onChangeReservationData}
              />
            </div>
          </div>
          <div className="reservation_person_wrap">
            <div className="reservation_person_title_wrap">
              <div className="reservation_person_title">*이메일</div>
            </div>
            <div className="reservation_person_text_section">
              <input
                className="reservation_person_text"
                name="clientEmail"
                placeholder="이메일을 입력해주세요."
                onChange={onChangeReservationData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="order_new_title">추가옵션 선택</div>
      <div className="additional_options_section">
        {optionsList?.map((option, optionIndex) => {
          return (
            <>
              <div className="additional_options_wrap">
                <div className="options_badge_section">
                  <div className="options_badge_wrap">
                    DAY-{optionIndex + 1}
                  </div>
                </div>
                <div className="options_content_container">
                  <div className="options_content_section">
                    {option?.map((item, index) => {
                      return (
                        <>
                          <div className="options_content_wrap">
                            <CheckBox
                              type="checkbox"
                              id={optionIndex + "/" + item.id}
                              checked={item.isCheck}
                              onChange={optionHandler}
                            ></CheckBox>
                            <CheckBoxLabel
                              htmlFor={optionIndex + "/" + item.id}
                              style={{
                                background: item.isCheck
                                  ? "#2b7638"
                                  : "initial",
                              }}
                            ></CheckBoxLabel>
                            <div className="option_info_section">
                              <div className="option_title">
                                {item.optionName}
                              </div>
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
          <input
            className="request_content"
            id="requestedTermInput"
            name="reservationMemo"
            onChange={onChangeReservationData}
          />
        </div>
      </div>
      <div className="order_new_title">결제 정보</div>
      <div className="payment_info_container">
        <div className="payment_info_section">
          <div className="payment_info_title">총 결제금액</div>
          <div className="payment_info_value">
            {totalRate.toLocaleString()}
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
              {rateList.map((rate: any, index: number) => {
                return (
                  <div className="payment_info_toggle_container">
                    <div className="payment_info_toggle_section">
                      <div className="payment_info_toggle_date_title">
                        {rate.date}
                      </div>
                      <div className="payment_info_toggle_date_value">
                        {rate.roomRatePrice.toLocaleString()}원
                      </div>
                    </div>
                    <div className="payment_info_toggle_section">
                      <div className="payment_info_toggle_title">
                        {rate.dayCategory === "WEEKDAY"
                          ? "주중"
                          : rate.dayCategory === "FRIDAY"
                          ? "금요일"
                          : rate.dayCategory === "WEEKEND"
                          ? "주말"
                          : ""}
                        요금
                      </div>
                      <div className="payment_info_toggle_value">
                        {rate.roomRatePrice.toLocaleString()}원
                      </div>
                    </div>
                  </div>
                );
              })}
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
            name="paymentMethod"
            checked={reservationData?.paymentMethod === "CARD"}
            value={"CARD"}
            onChange={onChangeReservationData}
          ></CheckBox>
          <CheckBoxLabel
            htmlFor="paymentckbox"
            style={{
              background:
                reservationData?.paymentMethod === "CARD"
                  ? "#2b7638"
                  : "initial",
            }}
          ></CheckBoxLabel>
          <div className="payment_method_title">카드 결제</div>
        </div>
        <div className="payment_method_section">
          <CheckBox
            type="checkbox"
            id="paymentckbox2"
            name="paymentMethod"
            checked={reservationData?.paymentMethod === "VBANK"}
            value={"VBANK"}
            onChange={onChangeReservationData}
          ></CheckBox>
          <CheckBoxLabel
            htmlFor="paymentckbox2"
            style={{
              background:
                reservationData?.paymentMethod === "VBANK"
                  ? "#2b7638"
                  : "initial",
            }}
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
                    <CheckBoxLabel htmlFor={`terms${term.id}`}></CheckBoxLabel>
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
      <Script
        src="https://pg-web.nicepay.co.kr/v3/common/js/nicepay-pgweb.js"
        type="text/javascript"
      />
      {/* <Script src="https://pay.nicepay.co.kr/v1/js/"></Script> */}
      <form
        name="payForm"
        id="payForm"
        action={returnUrl}
        method="post"
        acceptCharset="utf-8"
        ref={formRef}
      >
        <input type="hidden" name="GoodsName"></input>
        <input type="hidden" name="Amt"></input>
        <input type="hidden" name="MID"></input>
        <input type="hidden" name="EdiDate"></input>
        <input type="hidden" name="Moid"></input>
        <input type="hidden" name="SignData"></input>
        <input type="hidden" name="PayMethod"></input>
        <input type="hidden" name="VbankExpDate"></input>
        <input type="hidden" name="ReturnURL"></input>
        <input type="hidden" name="MerchantKey"></input>
        <input type="hidden" name="clientName"></input>
        <input type="hidden" name="clientPhone"></input>
        <input type="hidden" name="clientEmail"></input>
        <input type="hidden" name="clientBirthday"></input>
        <input type="hidden" name="clientGender"></input>
        <input type="hidden" name="clientRegion"></input>
        <input type="hidden" name="paymentMethod"></input>
        <input type="hidden" name="partnerStoreId"></input>
        <input type="hidden" name="stayCount"></input>
        <input type="hidden" name="storeName"></input>

        <input type="hidden" name="roomId"></input>
        <input type="hidden" name="roomName"></input>
        <input type="hidden" name="checkIn"></input>
        <input type="hidden" name="checkOut"></input>

        <input type="hidden" name="adultCount"></input>
        <input type="hidden" name="childCount"></input>
        <input type="hidden" name="petCount"></input>

        <input type="hidden" name="addOptionProductList"></input>
        <input type="hidden" name="datePriceList"></input>
        <input type="hidden" name="reservationMemo"></input>
        <input type="hidden" name="termsAgreeList"></input>
      </form>
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
