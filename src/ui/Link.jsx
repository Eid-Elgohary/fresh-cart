import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  font-size: 14px;
  padding: 8px;
  font-weight: 500;
  justify-content: start;

  &:hover {
    color: var(--main-color);
    cursor: pointer;
  }
`;

export default StyledLink;
