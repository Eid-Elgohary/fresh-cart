import styled from "styled-components";
import Button from "./../../ui/Button";
import { HiOutlineTrash } from "react-icons/hi";
import { useAuth } from "./../../contexts/AuthContext";
import { useRemoveWishlist } from "../../hooks/useRemoveWishlist";
import { useAddItemToCart } from "./../../hooks/useAddItemToCart";

function WishlistTableBody({ item }) {
  const { imageCover, price, title, id } = item;
  const { userTKN } = useAuth();
  const { removeItemFromWishlist, isPending } = useRemoveWishlist(id, userTKN);
  const { addItem, isAdding } = useAddItemToCart(userTKN, id);

  function handleAdd() {
    addItem();
    removeItemFromWishlist();
  }

  return (
    <Tr>
      <Td>
        <img src={imageCover} width="80px" height="100%" alt={title} />
      </Td>
      <Td>{title}</Td>
      <Td>${price}</Td>
      <Td>
        <Button style={{margin:'auto'}} size="small" onClick={handleAdd}>
          {isAdding ? "adding..." : "add to cart"}
        </Button>
      </Td>
      <Td>
        {isPending ? (
          "removing..."
        ) : (
          <HiOutlineTrash
            style={{ cursor: "pointer" }}
            size="20px"
            onClick={removeItemFromWishlist}
          />
        )}
      </Td>
    </Tr>
  );
}

export default WishlistTableBody;

const Td = styled.td`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  vertical-align: middle;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 500;
  height: 90px;
  text-align: center;
`;
const Tr = styled.tr`
  border-bottom: 1px solid var(--border);
`;
