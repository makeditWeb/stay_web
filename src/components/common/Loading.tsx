import React from "react";

// const Background = styled.div`
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     background: #ffffffb7;
//     z-index: 999;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const LoadingText = styled.div`
//     font: 1rem "Noto Sans KR";
//     text-align: center;
// `;

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "#ffffffb7",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          font: "1rem Noto Sans KR",
          textAlign: "center",
        }}
      >
        잠시만 기다려 주세요.
      </div>
      <img src={"/assets/spinner_green.gif"} alt="로딩중" width="10%" />
    </div>
  );
};

export default Loading;
