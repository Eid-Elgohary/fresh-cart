import styled from "styled-components";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import EmptyStateMessage from "../../ui/EmptyStateMessage";

function CartContent({ totalCartPrice, products, itemsCount }) {
  return (
    <>
      {itemsCount === 0 ? (
        <EmptyStateMessage>your cart is empty ...</EmptyStateMessage>
      ) : (
        <Div>
          <CartHeader price={totalCartPrice} />
          <CartBody products={products} />
          <CartFooter itemsCount={itemsCount} price={totalCartPrice} />
        </Div>
      )}
    </>
  );
}

export default CartContent;

const Div = styled.div`
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 992px) {
    width: 67%;
    overflow: auto;
    height: 70vh;
  }
`;
