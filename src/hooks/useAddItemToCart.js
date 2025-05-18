import { useMutation } from "@tanstack/react-query";
import { addToCart } from "../utils/cart";
import toast from "react-hot-toast";
import { useCart } from "../contexts/CartContext";

export function useAddItemToCart(tkn, id) {
  const { setCartCount } = useCart();
  const { mutate: addItem, isPending: isAdding } = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => addToCart(tkn, id),
    onSuccess: (data) => {
      toast.success(data.data.message);
      setCartCount(data.data.numOfCartItems);
    },

    onError: (data) => toast.error(data.response.data.message),
  });

  return { isAdding, addItem };
}
