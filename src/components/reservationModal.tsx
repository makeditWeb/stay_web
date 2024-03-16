import { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ReservationModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달이 열릴 때 스크롤 방지
    } else {
      document.body.style.overflow = "auto"; // 모달이 닫힐 때 스크롤 허용
    }

    return () => {
      document.body.style.overflow = "auto"; // 컴포넌트가 언마운트될 때 스크롤 허용
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContainer onClick={onClose}>
      <ModalContents onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContents>
    </ModalContainer>,
    document.getElementById("modal-root") // 모달을 렌더링할 DOM 노드
  );
};

export default ReservationModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalContents = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: #ffffff;
  z-index: 5;
`;
