import styled from "styled-components";
import { HiOutlineTrash } from "react-icons/hi";
import Counter from "./../../ui/Counter";
import { useRemoveFromCart } from "./../../hooks/useRemovrFromCart";
import { useAuth } from "./../../contexts/AuthContext";
import { useState } from "react";
import { useUpdateQuantityCart } from "../../hooks/useupdateQuantityCart";
import SmallSpinner from "../../ui/SmallSpinner";

function CartItem({ product }) {
  const { count, price, product: productDetails } = product;
  const { id: productId, imageCover, title, brand } = productDetails;

  const [quantity, setQuantity] = useState(count);
  const { userTKN } = useAuth();

  const { removeItem, isPending: isRemoving } = useRemoveFromCart(
    userTKN,
    productId
  );
  const { updateQuantity, isUpdating } = useUpdateQuantityCart(
    userTKN,
    productId,
    quantity
  );

  return (
    <Item>
      <ItemData>
        <div>
          <img src={imageCover} width="100px" alt={title} />
        </div>
        <Div dirction="column">
          <Div style={{ alignItems: "center" }}>
            <h3>{title} - </h3>
            {/* <h4>{brand.name}</h4> */}
          </Div>
          <p style={{ color: "var(--main-color)" }}>
            price:
            <span>{price}</span>
          </p>
          <p style={{ color: "var(--main-color)" }}>
            total price:
            <span>{price * quantity}</span>
          </p>

          {isRemoving ? (
            <SmallSpinner />
          ) : (
            <Remove onClick={removeItem} style={{}}>
              <HiOutlineTrash
                style={{ verticalAlign: "sub" }}
                color="var(--main-color)"
                size="20px"
              />
              <Span> remove</Span>
            </Remove>
          )}
        </Div>
      </ItemData>

      <Counter
        count={quantity}
        setCount={setQuantity}
        onclick={updateQuantity}
        isUpdating={isUpdating}
      />
    </Item>
  );
}

export default CartItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-light);
  border-bottom: 1px solid var(--border);
  padding: 0.5rem 0;
`;
const ItemData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: ${(props) => props.dirction || "row"};

  gap: 0.5rem;
`;
const Span = styled.span`
  &:hover {
    color: var(--main-color);
  }
`;
const Remove = styled.div`
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
`;
