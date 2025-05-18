import { Link } from "react-router-dom";
import styled from "styled-components";

const group1 = [
  "Vegetables & Fruits",
  "Breakfast & instant food",
  " Bakery & Biscuits",
  "Atta, rice & dal",
  " Sauces & spreads",
  " Organic & gourmet",
  " Baby care",
  " Cleaning essentials",
  " Personal care",
];
const group2 = [
  " Dairy, bread & eggs",
  " Cold drinks & juices",
  " Tea, coffee & drinks",
  " Masala, oil & more",
  " Chicken, meat & fish",
  " Paan corner",
  " Pharma & wellness",
  " Home & office",
  " Pet care",
];

const CatDiv = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-top: 16px;
  @media (min-width: 992px) {
    width: 33.33333333%;
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
  margin-top: 16px;
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

function CatLinks() {
  return (
    <CatDiv>
      <H6>Categories</H6>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Ul>
            {group1.map((link) => (
              <li key={link} style={{ padding: "8px" }}>
                <Clink to="#">{link}</Clink>
              </li>
            ))}
          </Ul>
        </div>
        <div style={{ width: "50%" }}>
          <Ul>
            {group2.map((link) => (
              <li key={link} style={{ padding: "8px" }}>
                <Clink to="#">{link}</Clink>
              </li>
            ))}
          </Ul>
        </div>
      </div>
    </CatDiv>
  );
}

export default CatLinks;
