"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="navbar_container">
      <Link href="/" style={{ textDecoration: "none" }}>
        <img src="/stayinterviewLogo.png" alt="사이트 로고" />
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
        <Link href={{ pathname: "/login" }} style={{ textDecoration: "none" }}>
          <MenuDiv>Login</MenuDiv>
        </Link>
        <Link
          href="https://www.instagram.com/stay.interview"
          style={{ width: "36px", height: "36px" }}
        >
          <Image
            src="/instagramLogo.png"
            alt="인스타그램 로고"
            width={36}
            height={36}
          />
        </Link>
      </RightNavbarDiv>
    </div>
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

const MenuDiv = styled.div`
  font-size: 18px;
  color: #ffffff;
  /* margin-left: 10px; */
  margin-right: 50px;
  padding: 5px;
  box-sizing: border-box;

  &:hover {
    background: #131d14b3;
    padding: 5px;
    box-sizing: border-box;
  }
`;
