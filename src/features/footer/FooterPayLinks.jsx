import styled from "styled-components";

import amazon from "../../../public/amazonpay.svg";
import master from "../../../public/mastercard.svg";
import americanX from "../../../public/american-express.svg";
import paypal from "../../../public/paypal.svg";
import visa from "../../../public/visa.svg";
import apple from "../../../public/appstore-btn.svg";
import google from "../../../public/googleplay-btn.svg";

function FooterPayLinks() {
  return (
    <Div>
      <Child1>
        <Ul>
          <li>Payment Partners</li>
          <li>
            <img src={amazon} alt="amazon pay" />
          </li>
          <li>
            <img src={americanX} alt="american express" />
          </li>
          <li>
            <img src={master} alt="master card" />
          </li>
          <li>
            <img src={paypal} alt="pay pal" />
          </li>
          <li>
            <img src={visa} alt="visa" />
          </li>
        </Ul>
      </Child1>
      <Child2>
        <p>Get deliveries with FreshCart</p>
        <img
          src={apple}
          style={{ width: "140px", height: "40px", cursor: "pointer" }}
          alt="apple store"
        />
        <img
          src={google}
          style={{ width: "140px", height: "40px", cursor: "pointer" }}
          alt="google play"
        />
      </Child2>
    </Div>
  );
}

export default FooterPayLinks;

const Div = styled.div`
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 14px;

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;
const Child1 = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 41.66666667%;
    margin-bottom: 0px;
    justify-content: start;
  }
`;
const Child2 = styled.div`
  display: flex;
  margin-top: 16px;
  text-align: end;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 58.33%;
    margin-top: 0px;
    justify-content: end;
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
`;
