"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Script from "next/script";
import "react-kakao-maps-sdk";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BodyContainer>
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>
        <main>{children}</main>
        <div id="modal-root"></div>
        <FooterContainer>
          <Footer />
        </FooterContainer>
        {/* 
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
        <Script
          // strategy="beforeInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=a98d4c1b2d78b9d4e9ab8a8adc84a85b&libraries=services&autoload=false`}
        ></Script> */}

        <Script src="https://developers.kakao.com/sdk/js/kakao.js" async />
        <Script
          // strategy="beforeInteractive"
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=a98d4c1b2d78b9d4e9ab8a8adc84a85b&libraries=services&autoload=false`}
        ></Script>
      </BodyContainer>
    </html>
  );
}

const BodyContainer = styled.body`
  width: 100%;
  overflow: auto;
  background: #f6f5f1;
`;

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  /* background-color: #162318;
  opacity: 0.5; */
  z-index: 10;
`;

const FooterContainer = styled.footer`
  background-color: #203d1e;
`;
