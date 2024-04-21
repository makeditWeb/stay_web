import axios, { AxiosInstance, AxiosResponse } from "axios";
import SweetAlert from "sweetalert2";

// axios instance 생성
export const customAxios: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    "Content-Type": `application/json`,
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
});

customAxios.interceptors.request.use(
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

customAxios.interceptors.response.use(
  (response) => {
    console.log("customAxios.interceptors.response", response);

    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data, msg } = error.response;

      if (status === Number(500)) {
        console.log("500 error");

        SweetAlert.fire({
          // title: "요청하신 작업을 수행하지 못했습니다.",
          text: `${
            data.message != null
              ? data.message
              : "일시적인 현상이니 잠시 후 다시 시도해 주세요.(오류코드:500)"
          }`,
        });

        return Promise.reject(error);
      }

      if (status === Number(401)) {
        console.log("401 error");

        SweetAlert.fire({ title: "로그인 후 이용해주세요. :)" }).then(() => {
          window.location.href = `${process.env.PUBLIC_URL}/login`;
        });

        return Promise.reject(error);
      }
    }
  }
);
