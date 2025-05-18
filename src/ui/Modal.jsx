import styled from "styled-components";
import { useOutsideClick } from "./../hooks/useOutSideClick";

import { HiOutlineXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";

function Modal({ children, onclose, width }) {
  const ref = useOutsideClick(onclose);
  return createPortal(
    <Overlay>
      <StyledModal width={width} ref={ref}>
        <Button onClick={onclose}>
          <HiOutlineXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.5s;
  width: ${(props) => props.width || "400px"};
  overflow-y: auto;
  padding: 0.5rem 1rem;
  @media (min-width: 992px) {
    padding: 1rem 1.5rem;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #00000056;
  backdrop-filter: blur(1.5px);
  z-index: 1000;
  transition: all 0.5s;
`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 0.5rem;
  right: 2.2rem;
  color: var(--text-light);
  cursor: pointer;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
