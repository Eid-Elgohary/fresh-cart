import styled from "styled-components";

function CartHeader({ price }) {
  return (
    <Div>
      <H1>shop cart:</H1>
      <P>total cart price: $ {price} </P>
    </Div>
  );
}

export default CartHeader;

const Div = styled.div`
  margin-bottom: 0.5rem;
`;

const H1 = styled.h1`
  margin-bottom: 0.25rem;
  letter-spacing: -0.03rem;
  font-weight: 600;
  line-height: 1.2;
  font-size: 27px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 29.5px;
  }
  @media (min-width: 992px) {
    font-size: 32.5px;
  }
`;
const P = styled.p`
  margin-bottom: 1rem;
  font-size: 14px;
  color: var(--main-color);
  line-height: 22.5px;
  font-weight: 400;
`;
