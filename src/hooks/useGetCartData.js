import { getCart } from "/src/utils/cart.js";
import { useCart } from "/src/contexts/CartContext.jsx";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

export function useGetCartData(tkn) {
  const { setCartCount } = useCart();
  const {
    data: cartData,
    isLoading: isGetting,
    error: cartError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(tkn),
  });

  useEffect(() => {
    if (cartData) {
      setCartCount(cartData.data.numOfCartItems);
    }
  }, [cartData, setCartCount]);

  return { cartData, isGetting, cartError };
}
