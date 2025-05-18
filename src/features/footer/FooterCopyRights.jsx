import styled from "styled-components";

import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Span = styled.span`
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }
`;

function FooterCopyRights() {
  return (
    <Div>
      <Child>
        © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved.
        Powered by{" "}
        <span style={{ color: "var(--main-color)", cursor: "pointer" }}>
          Codescandy
        </span>{" "}
        .
      </Child>
      <Child>
        <Ul>
          <li>follow us on</li>
          <li>
            <Span>
              <ImFacebook2 style={{ transitionDuration: "0.1s" }} size="20px" />
            </Span>
          </li>
          <li>
            <Span>
              <BsTwitter style={{ transitionDuration: "0.1s" }} size="20px" />
            </Span>
          </li>
          <li>
            <Span>
              <FiInstagram style={{ transitionDuration: "0.1s" }} size="20px" />
            </Span>
          </li>
        </Ul>
      </Child>
    </Div>
  );
}

export default FooterCopyRights;

const Div = styled.div`
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 12.5px;
  color: var(--text-light);
  font-weight: 500;
  line-height: 19.6px;
`;
const Child = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
  @media (min-width: 768px) {
    justify-content: end;
  }
`;
