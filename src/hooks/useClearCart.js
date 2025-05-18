import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCartFn } from "../utils/cart";
import toast from "react-hot-toast";
import { useCart } from "../contexts/CartContext";

function useClearCart(tkn) {
  const QueryClient = useQueryClient();
  const { setCartCount } = useCart();

  const { mutate: clearCart, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: ()=>clearCartFn(tkn),
    onSuccess: () => {
      QueryClient.invalidateQueries(["cart"]);
      toast.success("cart is now empty");
      setCartCount(null);
    },
    onError: () => toast.error("could not clear cart try again"),
  });
  return { clearCart, isPending };
}

export default useClearCart;
