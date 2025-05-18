import { Helmet } from "react-helmet";
import WishListContent from "../features/wishList/WishlistContent";

function WishList() {
  return (
    <>
      <Helmet>
        <title>wishlist</title>
      </Helmet>
      <WishListContent />;
    </>
  );
}

export default WishList;
