import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(null);
  const [cartId, setCartId] = useState(null);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        cartId,
        setCartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  return useContext(CartContext);
}
