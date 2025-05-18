import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../utils/wishlist";

import toast from "react-hot-toast";

export function useRemoveWishlist(id, tkn) {
  const queryClient = useQueryClient();

  const { mutate: removeItemFromWishlist, isPending } = useMutation({
    mutationFn: () => removeFromWishlist(id, tkn),
    mutationKey: ["wishlist"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
      // toast.success("item deleted from wishlist");
    },
    onError: () => toast.error("error happened"),
  });

  return { removeItemFromWishlist, isPending };
}
