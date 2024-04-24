/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    // domains: ["stay-interview.s3.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // 이미지 가로 너비(px) 목록,
    // deviceSizes 배열과 연결되어 이미지 srcset 생성하는데 사용
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stay-interview.s3.amazonaws.com",
        port: "",
      },
    ],
  },
  build: {
    transpile: ["axios"],
  },
};

module.exports = nextConfig;
