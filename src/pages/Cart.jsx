import styled from "styled-components";
import Section from "../ui/Section";
import CartContainer from "../features/cart/CartContainer";
import { Helmet } from "react-helmet";

export default function Cart() {
  return (
    <Section>
      <Helmet>
        <title>cart</title>
      </Helmet>
      <Div>
        <CartContainer />
      </Div>
    </Section>
  );
}
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
