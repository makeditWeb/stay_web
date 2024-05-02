"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { API } from "@/app/api/config";
import { customAxios } from "@/modules/common/api";

export default function Navbar() {
  const pathName = usePathname();

  const accessToken = localStorage.getItem("accessToken");
  const [acName, setAcName] = useState("");

  useEffect(() => {
    if (accessToken !== null) {
      customAxios.get(`${API.ACCESS_TOKEN}`).then((res) => {
        console.log(`${API.ACCESS_TOKEN} res :: `, res);

        // localStorage.setItem("user", JSON.stringify(res.data.response));
        // localStorage.setItem("acName", res.data.response.acName);
        localStorage.setItem("acName", res.data.response.acName);
        setAcName(res.data.response.acName);
      });

      // customAxios.get(`${API.USER_WEB}/info`).then((res) => {
      //   localStorage.setItem("user", JSON.stringify(res.data.response));
      //   localStorage.setItem("acName", res.data.response.acName);
      //   setAcName(res.data.response.acName);
      // });
    }

    setAcName(localStorage.getItem("acName"));
  }, [pathName]);

  const toggleSidebar = () => {
    // const menu = document.querySelector(".menu");
    document
      .getElementsByClassName("section_bar")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("navbar_container")[0]
      .classList.toggle("active");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    localStorage.removeItem("acName");
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar_container">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image
            src="/stayinterviewLogo.svg"
            alt="사이트 로고"
            width={276}
            height={26}
            quality={50}
            priority={true}
            className="lg:w-[276px] md:w-[200px]"
            // style={{ width: "100% !important" }}
          />
        </Link>
        <MiddleNavbarDiv className="navbar_div" style={{ marginLeft: "15px" }}>
          <Link
            href={{ pathname: "/ourStay" }}
            style={{ textDecoration: "none" }}
          >
            <MenuDiv>OUR STAY</MenuDiv>
          </Link>
          <Link
            href={{ pathname: "/consulting" }}
            style={{ textDecoration: "none" }}
          >
            <MenuDiv>CONSULTING</MenuDiv>
          </Link>
          <Link
            href={{ pathname: "/ourNews" }}
            style={{ textDecoration: "none" }}
          >
            <MenuDiv>OUR NEWS</MenuDiv>
          </Link>
        </MiddleNavbarDiv>
        <RightNavbarDiv className="navbar_div">
          {accessToken === null ? (
            <Link
              href={{ pathname: "/login" }}
              style={{ textDecoration: "none" }}
            >
              <MenuDiv>Login</MenuDiv>
            </Link>
          ) : (
            <>
              <div>
                <HeaderUserName>{acName}</HeaderUserName>
                <MenuDiv onClick={logout}>Logout</MenuDiv>
              </div>
            </>
          )}

          <Link
            href="https://www.instagram.com/stay.interview"
            style={{ width: "36px", height: "36px" }}
          >
            <Image
              src="/instagramLogo.png"
              alt="인스타그램 로고"
              width={36}
              height={36}
              priority
            />
          </Link>
        </RightNavbarDiv>
        <div className=" menu-bar">
          <div className="menu menu-icon" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <div className="section_bar">
        <Link
          href={{ pathname: "/ourStay" }}
          style={{ textDecoration: "none" }}
        >
          <MenuDiv>OUR STAY</MenuDiv>
        </Link>
        <Link
          href={{ pathname: "/consulting" }}
          style={{ textDecoration: "none" }}
        >
          <MenuDiv>CONSULTING</MenuDiv>
        </Link>
        <Link
          href={{ pathname: "/ourNews" }}
          style={{ textDecoration: "none" }}
        >
          <MenuDiv>OUR NEWS</MenuDiv>
        </Link>

        <Link href={{ pathname: "/login" }} style={{ textDecoration: "none" }}>
          <MenuDiv style={{ marginTop: "20px" }}>Login</MenuDiv>
        </Link>

        <div style={{ marginTop: "40px" }}>
          <div>
            <Link
              href={{ pathname: "/contactUs" }}
              style={{ textDecoration: "none" }}
            >
              <MenuDiv>contact us</MenuDiv>
            </Link>
            <MenuDiv style={{ fontSize: "15px" }}>
              stay_interview@naver.com
            </MenuDiv>
          </div>

          <Link
            href="https://www.instagram.com/stay.interview"
            style={{ width: "36px", height: "36px" }}
          >
            <Image
              src="/instagramLogo.png"
              alt="인스타그램 로고"
              style={{ margin: "20px 0" }}
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}

const NavbarContainer = styled.div`
  // position: fixed;
  // width: 1920px;
  width: 100%;
  background: rgba(22, 35, 24, 0.5);
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleNavbarDiv = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
`;

const RightNavbarDiv = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderUserName = styled.div`
  font-size: 18px;
  color: #ffffff;
  padding: 5px;
  box-sizing: border-box;
  // margin-right: 10px;
`;

const MenuDiv = styled.div`
  font-size: 18px;
  color: #ffffff;
  /* margin-left: 10px; */
  margin-right: 50px;
  padding: 5px;
  box-sizing: border-box;
  font-display: optional;

  &:hover {
    background: #131d14b3;
    padding: 5px;
    box-sizing: border-box;
  }
`;
