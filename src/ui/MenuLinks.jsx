import styled from "styled-components";
import StyledLink from "./Link";
import { NavLink } from "react-router-dom";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

function MenuLinks({ onclick }) {
  return (
    <Ul role="ul">
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/home">
          home
        </StyledLink>
      </li>
      <li>
        <StyledLink
          onClick={() => onclick(false)}
          as={NavLink}
          to="/categories"
        >
          categories
        </StyledLink>
      </li>
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/brands">
          brands
        </StyledLink>
      </li>
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/products">
          products
        </StyledLink>
      </li>
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/cart">
          cart
        </StyledLink>
      </li>
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/wishList">
          wishlist
        </StyledLink>
      </li>
      <li>
        <StyledLink onClick={() => onclick(false)} as={NavLink} to="/allorders">
          my orders
        </StyledLink>
      </li>
    </Ul>
  );
}

export default MenuLinks;
