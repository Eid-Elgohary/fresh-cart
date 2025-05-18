import Section from "../ui/Section";
import styled from "styled-components";
import CheckOutContainer from "./../features/checkout/CheckOutContainer";
import { Helmet } from "react-helmet";

function CheckOut() {
  return (
    <Section>
      <Helmet>
        <title>checkout</title>
      </Helmet>
      <Div>
        <CheckOutContainer />
      </Div>
    </Section>
  );
}

export default CheckOut;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
