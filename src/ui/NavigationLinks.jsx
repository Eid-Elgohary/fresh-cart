import styled from "styled-components";
import Button from "./Button";
import { GrMenu } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import StyledLink from "./Link";

function NavigationLinks() {
  return (
    <Div>
      <Button size="large">
        <GrMenu size={"24px"} />
        <span style={{ verticalAlign: "super", marginLeft: "5px" }}>
          all departments
        </span>
      </Button>

      <Ul role="ul">
        <li>
          <StyledLink as={NavLink} to="/home">
            home
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/categories">
            categories
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/brands">
            brands
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/products">
            products
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/cart">
            cart
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/wishList">
            wishlist
          </StyledLink>
        </li>
        <li>
          <StyledLink as={NavLink} to="/allorders">
            my orders
          </StyledLink>
        </li>
      </Ul>
    </Div>
  );
}

export default NavigationLinks;
const Div = styled.div`
  align-items: center;
  padding-bottom: 16px;
  display: none;
  gap: 10px;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;
const Ul = styled.div`
  list-style: none;
  display: flex;
  gap: 10px;

  @media (max-width: 992px) {
    width: 100%;
  }
`;
