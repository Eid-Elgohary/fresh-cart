import styled from "styled-components";
import Input from "./Input";

import { FiSearch } from "react-icons/fi";

const Search = styled.div`
  position: relative;
  display: ${props => props.display || 'none'};
  @media (min-width: 992px) {
    width: 40%;
    margin-right: 10px;
    display: block;
  }
`;
const Span = styled.span`
  position: absolute;
  padding: 8.8px 0;
  top: 0;
  right: 12px;
  cursor: pointer;
`;

function SearchBar({display}) {
  return (
    <Search display={display}>
      <Input size="100%" placeholder="search for products" id="search" />
      <Span>
        <FiSearch color="#5C6C75" />
      </Span>
    </Search>
  );
}

export default SearchBar;
