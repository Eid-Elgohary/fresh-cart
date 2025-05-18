import { useQuery } from "@tanstack/react-query";
import { getWishlists } from "../utils/wishlist";

export function useGetWishlist(userTkn) {
  const { data: wishlistData, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlists(userTkn),
  });

  return { wishlistData, isLoading };
}
