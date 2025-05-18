import styled from "styled-components";
import CartItem from "./CartItem";

function CartBody({ products }) {
  return (
    <Div>
      {products.map((product) => (
        <CartItem key={product._id} product={product} />
      ))}
    </Div>
  );
}

export default CartBody;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
