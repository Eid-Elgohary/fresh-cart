import { useAuth } from "../../contexts/AuthContext";
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import { useGetCartData } from "./../../hooks/useGetCartData";
import Spinner from "../../ui/Spinner";

function CartContainer() {
  const { userTKN } = useAuth();
  const { cartData, isGetting } = useGetCartData(userTKN);

  if (isGetting) return <Spinner />;
  localStorage.setItem("userId", cartData.data.data.cartOwner);
  const products = cartData?.data?.data?.products || [];
  const totalCartPrice = cartData?.data?.data?.totalCartPrice || 0;
  const itemsCount = cartData?.data?.numOfCartItems || 0;
  return (
    <>
      <CartContent
        totalCartPrice={totalCartPrice}
        products={products}
        itemsCount={itemsCount}
      />
      {itemsCount !== 0 && (
        <CartSummary totalCartPrice={totalCartPrice} itemsCount={itemsCount} />
      )}
    </>
  );
}

export default CartContainer;
