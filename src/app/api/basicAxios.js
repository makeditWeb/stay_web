import axios from "axios";
import SweetAlert from "sweetalert2";

export const basicAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});

export const nickePayAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_NICEPAY_SERVER_ADDRESS}`,
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
  },
});

basicAxios.interceptors.request.use(
  (config) => {
    //cookie에 access_token,refresh_token을 어떤 이름으로 저장했는지?
    const accesskey = localStorage.getItem("accessToken");
    const refreshkey = localStorage.getItem("refreshToken");

    if (accesskey) {
      config.headers["accessToken"] = `Bearer ${accesskey}`;
      config.headers["refreshToken"] = `Bearer ${refreshkey}`;
      config.headers["Authorization"] = `Bearer ${accesskey}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

basicAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data, msg } = error.response;
      console.log(error.response);
      // 401 토큰 만료
      if (status === 401) {
        SweetAlert.fire({ title: "로그인 후 이용해주세요. :)" }).then(() => {
          window.location.href = `${process.env.PUBLIC_URL}/login`;
        });
      } else if (status === 403) {
        SweetAlert.fire({
          title: "토큰이 만료되었습니다. :)",
        }).then(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
          localStorage.removeItem("expirationTime");
          localStorage.setItem("login", false);
          window.location.href = `${process.env.PUBLIC_URL}/login`;
        });
      } else if (status === 404) {
        SweetAlert.fire({
          title: "존재하지 않는 페이지입니다. :)",
        }).then(() => {
          window.location.href = `${process.env.PUBLIC_URL}/login`;
        });
      } else if (status === 410) {
        throw new Error("Internal Server Error 410 로그아웃한 토큰", msg);
      } else if (status === 500) {
        SweetAlert.fire({
          title: "요청하신 작업을 수행하지 못했습니다.",
          text: `${
            data.message != null
              ? data.message
              : "일시적인 현상이니 잠시 후 다시 시도해 주세요.(오류코드:500)"
          }`,
        }).then(() => {
          window.location.reload();
        });
      } else {
        SweetAlert.fire({
          title: "요청하신 작업을 수행하지 못했습니다.",
          text: `${
            data.message != null
              ? data.message
              : "일시적인 현상이니 잠시 후 다시 시도해 주세요.(오류코드:400)"
          }`,
        }).then(() => {
          window.location.reload();
        });
      }
    } else {
      // throw new Error('Network Error');
    }
  }
);
