import React from "react";

const ModalTabContents = ({ tabNumber, guideList }) => {
  if (tabNumber === 1) {
    return (
      <pre>
        <div
          dangerouslySetInnerHTML={{
            __html: guideList.filter(
              (item) => item.type === "PEOPLE_AND_AMOUNT"
            )[0]?.content,
          }}
        >
          {/* {
            guideList.filter((item) => item.type === "PEOPLE_AND_AMOUNT")[0]
              .content
          } */}
        </div>
      </pre>
    );
  } else if (tabNumber === 2) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: guideList.filter(
            (item) => item.type === "RESERVATION_AND_PAYMENT"
          )[0]?.content,
        }}
      >
        {/* {
          guideList.filter((item) => item.type === "RESERVATION_AND_PAYMENT")[0]
            .content
        } */}
      </div>
    );
  } else if (tabNumber === 3) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: guideList.filter(
            (item) => item.type === "FACILITY_INFORMATION"
          )[0]?.content,
        }}
      >
        {/* {
          guideList.filter((item) => item.type === "FACILITY_INFORMATION")[0]
            .content
        } */}
      </div>
    );
  } else if (tabNumber === 4) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: guideList.filter(
            (item) => item.type === "SERVICE_INFORMATION"
          )[0]?.content,
        }}
      >
        {/* {
          guideList.filter((item) => item.type === "SERVICE_INFORMATION")[0]
            .content
        } */}
      </div>
    );
  } else {
    return null;
  }
};

export default ModalTabContents;
