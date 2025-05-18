import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../utils/cart";
import toast from "react-hot-toast";
import { useCart } from "../contexts/CartContext";

export function useRemoveFromCart(tkn, id) {
  const queryClient = useQueryClient();
  const { setCartCount } = useCart();

  const { mutate: removeItem, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => removeFromCart(tkn, id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("item removed successfully");
      setCartCount(data.data.numOfCartItems);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "an error occurred");
    },
  });

  return { removeItem, isPending };
}
