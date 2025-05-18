import styled from "styled-components";
import LocationBtn from "./LocationBtn";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { HiOutlineXMark } from "react-icons/hi2";
import NavigationLinks from "./NavigationLinks";
import MenuLinks from "./MenuLinks";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 9999;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: white;
  gap: 16px;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
const MenuChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

function ToggleMenu({ onclick }) {
  return (
    <Menu>
      <MenuChild>
        <Logo />
        <HiOutlineXMark
          style={{ cursor: "pointer" }}
          onClick={() => onclick(false)}
          size="24px"
          color="#5C6C75"
        />
      </MenuChild>

      <SearchBar display="block" />

      <LocationBtn display="block" width="100%" />

      <MenuChild>
        <MenuLinks onclick={onclick} />
      </MenuChild>
    </Menu>
  );
}

export default ToggleMenu;
