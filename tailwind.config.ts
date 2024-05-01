import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      fontSize: {
        heading1: "28px",
        mheading1: "27px",
        heading2: "32px",
        mheading2: "24px",
        heading3: "26px",
        mheading3: "20px",
        heading4: "21px",
        mheading4: "18px",
        heading5: "19px",
        mheading5: "17px",
        heading6: "16px",
        mheading6: "15px",
        body: "18px",
        mbody: "17px",
        info: "15px",
        minfo: "13px",
        xs: "13px",
      },
      lineHeight: {
        heading1: "1.4em",
        mheading1: "1.4em",
        heading2: "1.5em",
        mheading2: "1.6em",
        heading3: "1.5em",
        mheading3: "1.5em",
        heading4: "1.6em",
        mheading4: "1.6em",
        heading5: "1.8em",
        mheading5: "1.7em",
        heading6: "1.7em",
        mheading6: "1.7em",
        body: "1.8em",
        mbody: "1.8em",
        info: "1.8em",
        minfo: "1.8em",
        xs: "1.6em",
      },
      letterSpacing: {
        heading2: "-0.02em",
        mheading2: "-0.02em",
        heading3: "-0.02em",
        mheading3: "-0.02em",
        heading4: "-0.02em",
        mheading4: "-0.02em",
        heading5: "-0.02em",
        mheading5: "-0.02em",
        heading6: "-0.02em",
        mheading6: "-0.02em",
        body: "-0.015em",
        mbody: "-0.015em",
        info: "-0.02em",
        minfo: "-0.02em",
      },
      colors: {
        brand: "#44A83D",
        point: "#0058DB",
        lightpoint: "#005ED9",
        pointhover: "#0049B8",
        second: "#00C3FF",
        gray: "#949494",
        darkgray: "#545454",
        backgroundgray: "#F7F7F7",
        lightgray: "#E0E0E0",
        red: "#E6003D",
        lightred: "#FFE0D9",
      },
      boxShadow: {
        custom:
          "3px -4px 16px -1px rgba(0, 0, 0, 0.1), 0 -2px 24px -1px rgba(0, 0, 0, 0.06)",
        toast:
          "0px 0px 0px 0px rgba(0, 0, 0, 0.1), 0 -3px 12px -3px rgba(0, 0, 0, 0.1)",
        xs: "rgba(26, 26, 26, 0.16) 4px 4px 24px -16px",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.5, 0, 0.5, 1)",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
export default config;
