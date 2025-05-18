import styled from "styled-components";
import Counter from "../../ui/Counter";
import Button from "../../ui/Button";
import { FaHeart } from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";
import { useAddItemToCart } from "../../hooks/useAddItemToCart";
import { useState } from "react";
import { useUpdateQuantityCart } from "../../hooks/useupdateQuantityCart";
import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../../utils/cart";
import toast from "react-hot-toast";
import { useAddItemWishlist } from "./../../hooks/useAddWishlist";
import { useRemoveWishlist } from "./../../hooks/useRemoveWishlist";
import { useGetWishlist } from "./../../hooks/useGetWishlist";
import SmallSpinner from "../../ui/SmallSpinner";

function QuickViewAddCart({ id, setIsWishlist, isWishlist }) {
  const { userTKN } = useAuth();

  const [count, setCount] = useState(1);

  const { isAdding, addItem } = useAddItemToCart(userTKN, id);
  const { updateQuantity } = useUpdateQuantityCart(userTKN, id, count);

  //need to add item to wishlist first before updata its quantity

  const { mutate, isPending: isUpdating } = useMutation({
    mutationKey: ["cart", userTKN],
    mutationFn: () => addToCart(userTKN, id),
    onSuccess: () => {
      toast.success("item added successfully");
      updateQuantity();
    },
    onError: (data) => toast.error(data.response.data.message),
  });

  const { removeItemFromWishlist } = useRemoveWishlist(id, userTKN);
  const { addItemToWishlist } = useAddItemWishlist(id, userTKN);

  function handleIncrease(userTKN, id) {
    if (count == 0) return toast.error("cant add with count 0");
    count > 1 ? mutate(userTKN, id) : addItem();
  }
  function handleClickWishlist() {
    if (isWishlist) {
      removeItemFromWishlist();
      setIsWishlist(false);
    }
    if (!isWishlist) {
      setIsWishlist(true);
      addItemToWishlist();
    }
  }

  return (
    <div>
      <Counter count={count} setCount={setCount} position="flex-start" />
      <Div>
        <Button
          disabled={isAdding || isUpdating}
          onClick={() => handleIncrease(userTKN, id)}
          width="150px"
          size="large"
        >
          {isAdding || isUpdating ? <SmallSpinner /> : "add to cart"}
        </Button>

        <Button onClick={handleClickWishlist} variation="pale">
          <FaHeart color={isWishlist && "var(--main-color)"} size={"22px"} />
        </Button>
      </Div>
    </div>
  );
}

export default QuickViewAddCart;

const Div = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
