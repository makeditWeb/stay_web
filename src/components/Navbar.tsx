"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <NavbarContainer>
      <Link href="/" style={{ textDecoration: "none" }}>
        <img src="/stayinterviewLogo.png" alt="사이트 로고" />
      </Link>
      <NavbarDiv style={{ marginLeft: "15px" }}>
        <MenuDiv>OUR STAY</MenuDiv>
        <MenuDiv>CONSULTING</MenuDiv>
        <MenuDiv>OUR NEWS</MenuDiv>
      </NavbarDiv>
      <NavbarDiv>
        <Link href={{ pathname: "/login" }}>
          <MenuDiv style={{ margin: "0 44px 0 250px" }}>Login</MenuDiv>
        </Link>
        <Link href="/" style={{ width: "36px", height: "36px" }}>
          <img src="/instagramLogo.png" alt="인스타그램 로고" />
        </Link>
      </NavbarDiv>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  background-color: #162318;
  opacity: 0.5;
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
