"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <NavbarContainer>
      <Link href="/" style={{ textDecoration: "none" }}>
        <img src="/stayinterviewLogo.png" alt="사이트 로고" />
      </Link>
      <NavbarDiv style={{ marginLeft: "15px" }}>
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
      </NavbarDiv>
      <NavbarDiv>
        <Link href={{ pathname: "/login" }} style={{ textDecoration: "none" }}>
          <MenuDiv style={{ margin: "0 44px 0 250px" }}>Login</MenuDiv>
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
      </NavbarDiv>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  position: fixed;
  width: 1920px;
  background: rgba(22, 35, 24, 0.5);
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MenuDiv = styled.div`
  font-size: 18px;
  color: #ffffff;
  /* margin-left: 10px; */
  margin-right: 50px;
`;
