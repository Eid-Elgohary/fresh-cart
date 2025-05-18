import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    width: 66.66666667%;
  }
`;
const H6 = styled.h6`
  font-size: 14px;
  color: var(--text-dark);
  font-weight: 600;
  margin-bottom: 16px;
  padding-left: 16px;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Clink = styled(Link)`
  color: var(--text-light);
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
const ChildDiv = styled.div`
  width: 50%;
  flex: 0 0 auto;
  margin-top: 16px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const group1 = ["Company", " About", " Blog", " Help Center", " Our Value"];
const group2 = [
  " Payments",
  " Shipping",
  " Product Returns",
  " FAQ",
  " Shop Checkout",
];
const group3 = [
  " Shopper Opportunities",
  " Become a Shopper",
  " Earnings",
  " Ideas & Guides",
  " New Retailers",
];
const group4 = [
  " Freshcart programs",
  " Gift Cards",
  " Promos & Coupons",
  " Freshcart Ads",
  " Careers",
];

function RestOfLinks() {
  return (
    <Div>
      <ChildDiv>
        <H6>Get to know us</H6>
        <Ul>
          {group1.map((item) => (
            <li style={{padding:'8px'}} key={item}>
              <Clink to='#'>{item}</Clink>
            </li>
          ))}
        </Ul>
      </ChildDiv>
      <ChildDiv>
        <H6>For Consumers</H6>
        <Ul>
          {group2.map((item) => (
            <li style={{padding:'8px'}} key={item}>
              <Clink to='#'>{item}</Clink>
            </li>
          ))}
        </Ul>
      </ChildDiv>
      <ChildDiv>
        <H6>Become a Shopper</H6>
        <Ul>
          {group3.map((item) => (
            <li style={{padding:'8px'}} key={item}>
              <Clink to='#'>{item}</Clink>
            </li>
          ))}
        </Ul>
      </ChildDiv>
      <ChildDiv>
        <H6>Freshcart programs</H6>
        <Ul>
          {group4.map((item) => (
            <li style={{padding:'8px'}} key={item}>
              <Clink to='#'>{item}</Clink>
            </li>
          ))}
        </Ul>
      </ChildDiv>
    </Div>
  );
}

export default RestOfLinks;
