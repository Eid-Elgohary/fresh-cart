import styled from "styled-components";
import Button from "./Button";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeroSlide() {
  return (
    <HeroInfo>
      <Span>Free Shipping - orders over $100</Span>
      <H2>
        Free Shipping on
        <br />
        orders over<span style={{ color: "var(--main-color)" }}> $100</span>
      </H2>
      <P>
        Free Shipping to First-Time Customers Only, <br /> After promotions and
        discounts are applied.
      </P>
      <Button variation="secondary" width='180px'  size="large" as={Link} to="/products">
        shop now
        <span style={{ verticalAlign: "middle", marginLeft: "5px" }}>
          <FaArrowRight />
        </span>
      </Button>
    </HeroInfo>
  );
}

export default HeroSlide;

const Span = styled.span`
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  border-radius: 0.25rem;
  display: inline-block;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  background: #ffc107;
`;
const H2 = styled.h2`
  font-size: 34.5px;
  margin: 16px 0 8px 0;
  font-weight: 700;
`;
const P = styled.p`
  font-size: 17.5px;
  line-height: 28px;
  margin-bottom: 20px;
  font-weight: 500;
  color: var(--text-light);
`;
const HeroInfo = styled.div`
  padding: 5rem 2rem;
  position: absolute;
  left: 0%;
  top: 0;
  bottom: 0;
  width: 100%;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  @media (min-width: 992px) {
    padding: 8rem 4rem;
  }

  @media (min-width: 1400px) {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
`;
