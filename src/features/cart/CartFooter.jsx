import styled from "styled-components";
import Button from "./../../ui/Button";
import { useAuth } from "../../contexts/AuthContext";
import useClearCart from "../../hooks/useClearCart";
import StyledLink from "./../../ui/Link";

function CartFooter({ price, itemsCount }) {
  const { userTKN } = useAuth();
  const { clearCart, isPending } = useClearCart(userTKN);


  return (
    <Div>
      <Div>
        <p>
          total cart items : <Span>{itemsCount}</Span>
        </p>
        <p>
          total cart price: <Span>${price}</Span>
        </p>
      </Div>
      <Div>
        <Button>
          <StyledLink color="white" to="/home">
            continue shopping ➡
          </StyledLink>
        </Button>
        <Button
          variation="secondary"
          disabled={isPending}
          onClick={() => clearCart()}
        >
          {isPending ? "loading..." : "clear cart"}
        </Button>
      </Div>
    </Div>
  );
}

export default CartFooter;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  gap: 12px;
  padding: .5rem 0;
`;
const Span = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: var(--main-color);
`;
