import React from "react";

const ModalTabContents = ({ tabNumber }) => {
  if (tabNumber === 1) {
    return <div>탭1인데유</div>;
  } else if (tabNumber === 2) {
    return <div>탭2인데용</div>;
  } else if (tabNumber === 3) {
    return <div>탭3입니댜</div>;
  } else if (tabNumber === 4) {
    return <div>탭4입니다</div>;
  } else {
    return null;
  }
};

export default ModalTabContents;
