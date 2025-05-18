import { useMutation } from "@tanstack/react-query";
import { addToWishlist } from "../utils/wishlist";
import toast from "react-hot-toast";

export function useAddItemWishlist(id, tkn) {
  const { mutate: addItemToWishlist, isLoading } = useMutation({
    mutationFn: () => addToWishlist(id, tkn),
    mutationKey: ["wishlist"],

    onError: () => toast.error("an error occured "),
  });

  return { addItemToWishlist, isLoading };
}
