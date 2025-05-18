import styled from "styled-components";

import Logo from "./Logo";
import HeaderUtilities from "./HeaderUtilities";
import SearchBar from "./SearchBar";
import LocationBtn from "./LocationBtn";

import Container from "./Container";
import NavigationLinks from "./NavigationLinks";

const StyledHeader = styled.div`
  background: white;
  border-bottom: 1px solid var(--border);
`;
const HeaderRow = styled.div`
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  flex-direction: column;
  @media (min-width: 350px) {
    flex-direction: row;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderRow>
          <Logo />
          <SearchBar />
          <LocationBtn />
          <HeaderUtilities />
        </HeaderRow>
        <NavigationLinks />
      </Container>
    </StyledHeader>
  );
}

export default Header;
