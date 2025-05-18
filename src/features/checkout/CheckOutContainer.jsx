import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useGetCartData } from "../../hooks/useGetCartData";
import Spinner from "../../ui/Spinner";
// import CartSummary from "../cart/CartSummary";
import CheckOutContent from "./CheckOutContent";

function CheckOutContainer() {
  const { userTKN } = useAuth();
  const { setCartId } = useCart();
  const { cartData, isGetting } = useGetCartData(userTKN);
  useEffect(() => {
    setCartId(cartData.data.data._id);
  }, [setCartId, cartData.data.data._id]);

  if (isGetting) return <Spinner />;
  // const totalCartPrice = cartData.data.data.totalCartPrice;
  // const itemsCount = cartData.data.numOfCartItems;
  return (
    <>
      <CheckOutContent />
      {/* <CartSummary totalCartPrice={totalCartPrice} itemsCount={itemsCount} /> */}
    </>
  );
}

export default CheckOutContainer;
