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
